#!/usr/bin/env node
// Turn a raw recording into a small, looping web clip and register it in content/clips.json.
//
//   npm run clip -- <piece-id> <input-video> [--start 0:12] [--dur 8 | --full] [--mute] [--autocrop]
//
// Writes public/repertoire/<id>.mp4 (H.264 + AAC, loudness-normalised, faststart) and <id>.jpg (poster). Needs ffmpeg on PATH.
import { execFileSync, spawnSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const bool = (name) => {
  const i = args.indexOf(`--${name}`)
  if (i === -1) return false
  args.splice(i, 1)
  return true
}
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  if (i === -1) return fallback
  return args.splice(i, 2)[1]
}
const mute = bool("mute")
const full = bool("full")
const autocrop = bool("autocrop")
const start = flag("start", "0")
const durArg = flag("dur", "8")
const dur = full ? "86400" : durArg // the length is clamped to the recording below
const maxSide = flag("size", "960")
const outDir = flag("out", join(root, "public", "repertoire"))
const [id, input] = args

if (!id || !input) {
  console.error("usage: npm run clip -- <piece-id> <input-video> [--start 0:12] [--dur 8 | --full] [--size 960] [--mute] [--autocrop]")
  process.exit(1)
}
if (!existsSync(input)) {
  console.error(`no such file: ${input}`)
  process.exit(1)
}

// Ids come from lib/content.ts; fail early on a typo so a clip is never silently orphaned.
const content = readFileSync(join(root, "lib", "content.ts"), "utf8")
if (!content.includes(`id: "${id}"`)) {
  console.error(`"${id}" is not a piece id in lib/content.ts`)
  process.exit(1)
}

mkdirSync(outDir, { recursive: true })
const mp4 = join(outDir, `${id}.mp4`)
const jpg = join(outDir, `${id}.jpg`)
const scale = `scale=${maxSide}:${maxSide}:force_original_aspect_ratio=decrease:force_divisible_by=2`

const seconds = (t) => String(t).split(":").reduce((acc, part) => acc * 60 + Number(part), 0)
const probeJson = (a) => JSON.parse(execFileSync("ffprobe", ["-v", "error", "-of", "json", ...a]).toString())

// Never ask for more than the recording has, so the loop-seam fade lands on the real last samples.
const total = Number(probeJson(["-show_entries", "format=duration", input]).format.duration)
const length = Math.min(Number(dur), total - seconds(start))
if (!(length > 0)) {
  console.error(`--start ${start} is past the end of the recording (${total.toFixed(1)}s)`)
  process.exit(1)
}
const hasAudio = probeJson(["-select_streams", "a", "-show_entries", "stream=codec_type", input]).streams.length > 0
if (!mute && !hasAudio) console.warn("  no audio track in the input: clip will be silent")

// --autocrop: strip black bars baked into the recording (e.g. a phone video pillarboxed inside a 16:9 file).
let crop = ""
if (autocrop) {
  const probe = spawnSync(
    "ffmpeg",
    ["-hide_banner", "-ss", start, "-t", "60", "-i", input, "-vf", "cropdetect=limit=24:round=2:reset=0", "-an", "-f", "null", "-"],
    { encoding: "utf8" },
  )
  const counts = {}
  for (const m of probe.stderr.matchAll(/crop=(\d+:\d+:\d+:\d+)/g)) counts[m[1]] = (counts[m[1]] ?? 0) + 1
  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0]
  if (best) {
    crop = `crop=${best}`
    console.log(`  autocrop: ${crop}`)
  }
}

// Even loudness across clips, plus 50 ms fades so the loop point doesn't click.
const audio =
  mute || !hasAudio
    ? ["-an"]
    : [
        "-af", `loudnorm=I=-18:TP=-2:LRA=11,afade=t=in:d=0.05,afade=t=out:st=${Math.max(length - 0.05, 0)}:d=0.05`,
        "-ar", "48000", "-c:a", "aac", "-b:a", "112k",
      ]

const ffmpeg = (a) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...a], { stdio: "inherit" })

ffmpeg([
  "-ss", start, "-t", String(length), "-i", input,
  ...audio,
  "-vf", [crop, scale, "fps=30"].filter(Boolean).join(","),
  "-c:v", "libx264", "-profile:v", "main", "-preset", "slow", "-crf", "28", "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  mp4,
])
// Poster from the middle of the clip: shown instantly while the video is still arriving.
ffmpeg(["-ss", String(length / 2), "-i", mp4, "-frames:v", "1", "-vf", "scale=640:640:force_original_aspect_ratio=decrease", "-q:v", "6", jpg])

const { width: w, height: h } = probeJson(["-select_streams", "v:0", "-show_entries", "stream=width,height", mp4]).streams[0]

const manifestPath = join(root, "content", "clips.json")
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
manifest[id] = { w, h, a: !(mute || !hasAudio), d: Math.round(length), v: Math.floor(Date.now() / 1000) }
writeFileSync(manifestPath, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n")

const kb = (p) => Math.round(statSync(p).size / 1024)
console.log(`${id}: ${w}x${h}, ${length.toFixed(1)}s, ${mute || !hasAudio ? "silent" : "with sound"}, ${kb(mp4)} KB + poster ${kb(jpg)} KB`)
if (length <= 20 && kb(mp4) > 1500) console.warn("  heavy for a loop: try a shorter --dur or a smaller --size")
if (length > 20) console.log("  long clip: the site only preloads its metadata on hover and streams the rest after the click")
