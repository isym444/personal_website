"use client"

import { useEffect, useRef, useState } from "react"
import { Daruma, FUJI_BODY, FUJI_ROUTE, FUJI_SNOW, Oden, Sushi } from "@/components/art"
import { Reveal } from "@/components/reveal"
import { burst } from "@/lib/fx"
import { playBlip } from "@/lib/audio"
import { STATS_BASE, useStats, type Stats } from "@/lib/use-stats"

const nf = (n: number | null | undefined) => (n == null ? "n/a" : n.toLocaleString("en-GB"))
const ease = (t: number) => 1 - Math.pow(1 - t, 4)
const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen] as const
}

// Animates 0 -> value once, when it scrolls into view.
function useTween(target: number, run: boolean, ms = 1600) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    if (reducedMotion()) return setV(target)
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms)
      setV(target * ease(p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, ms])
  return run ? v : 0
}

function Counter({ value, label, kanji, colour }: { value: number; label: string; kanji: string; colour: string }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  const v = useTween(value, seen)
  return (
    <div ref={ref} className="window neon-box p-4 text-center">
      <p className="font-pixel text-xs text-muted">{kanji}</p>
      <p className="font-pixel text-4xl tabular-nums sm:text-5xl" style={{ color: colour, textShadow: `0 0 18px ${colour}88` }}>
        {nf(Math.round(v))}
      </p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  )
}

/* ---------- Mt Fuji: 1 solved problem = 1 metre ---------- */
const SUMMIT = 3776
const STATION_5 = 2300

function FujiClimb({ metres }: { metres: number }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  const route = useRef<SVGPathElement>(null)
  const target = Math.min(1, metres / SUMMIT)
  const t = useTween(target, seen, 2600)
  const [pt, setPt] = useState({ x: 40, y: 155 })
  const [st5, setSt5] = useState({ x: 100, y: 110 })

  useEffect(() => {
    const p = route.current
    if (!p) return
    const len = p.getTotalLength()
    const a = p.getPointAtLength(len * (STATION_5 / SUMMIT))
    setSt5({ x: a.x, y: a.y })
  }, [])
  useEffect(() => {
    const p = route.current
    if (!p) return
    const q = p.getPointAtLength(p.getTotalLength() * t)
    setPt({ x: q.x, y: q.y })
  }, [t])

  const metresNow = Math.round(SUMMIT * t)
  return (
    <div ref={ref} className="window neon-box overflow-hidden">
      <div className="window-bar">
        <span>~/stats/fuji --climb</span>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 320 175" className="w-full" role="img" aria-label={`Mt Fuji climb: ${nf(metres)} of ${nf(SUMMIT)} metres`}>
          <defs>
            <linearGradient id="fuji-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0b3a5e" />
              <stop offset="1" stopColor="#031017" />
            </linearGradient>
            <filter id="fuji-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[[20, 20], [60, 40], [96, 16], [210, 18], [290, 60], [250, 90], [40, 78]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" className="twinkle" style={{ animationDelay: `${i * 0.37}s` }} />
          ))}
          <circle cx="258" cy="46" r="17" fill="#ff3b4e" filter="url(#fuji-glow)" />
          <g className="drift" fill="#9fe8ff" fillOpacity="0.22">
            <ellipse cx="80" cy="92" rx="26" ry="5" />
            <ellipse cx="96" cy="87" rx="16" ry="4" />
          </g>
          <g className="drift" fill="#9fe8ff" fillOpacity="0.18" style={{ animationDelay: "-6s" }}>
            <ellipse cx="236" cy="108" rx="28" ry="5" />
          </g>
          <path d={FUJI_BODY} fill="url(#fuji-fill)" stroke="var(--phosphor)" strokeWidth="1.5" filter="url(#fuji-glow)" />
          <path d={FUJI_SNOW} fill="#eafff6" stroke="#fff" strokeWidth="0.8" />
          <path ref={route} d={FUJI_ROUTE} fill="none" stroke="var(--cyan)" strokeOpacity="0.8" strokeWidth="1.6" strokeDasharray="3 4" className="steam" />
          <g transform={`translate(${st5.x} ${st5.y})`}>
            <circle r="2.6" fill="var(--gold)" />
            <text x="-6" y="-5" textAnchor="end" fontSize="8" fill="var(--gold)" fontFamily="var(--font-pixel)">五合目 2,300m</text>
          </g>
          <text x="196" y="26" fontSize="9" fill="#eafff6" fontFamily="var(--font-pixel)">頂上 3,776m</text>
          <g transform={`translate(${pt.x} ${pt.y})`}>
            <circle r="3.4" fill="var(--cyan)" stroke="#fff" strokeWidth="1" />
            <circle r="3.4" fill="none" stroke="var(--cyan)" className="pulse-ring" />
          </g>
          <path d="M0 160H320V175H0Z" fill="#031017" />
        </svg>
        <p className="mt-2 text-sm">
          <span className="neon-cyan font-pixel text-2xl tabular-nums">{nf(metresNow)}</span> <span className="text-muted">m of {nf(SUMMIT)} m</span>{" "}
          <span className="text-phosphor">({Math.round(Math.min(1, metres / SUMMIT) * 100)}%)</span>
        </p>
        <p className="text-xs text-muted">One solved problem is one metre: AtCoder + Codeforces + CSES.</p>
      </div>
    </div>
  )
}

/* ---------- Rating scales on one shared axis ---------- */
// Codeforces ratings are stretched onto the AtCoder axis so equivalent ranks line up, as in the reference chart:
// Codeforces rating r sits where AtCoder is 600 + 1.278 * (r - 1200). That puts Specialist under AtCoder green,
// Expert under cyan, IM and GM under yellow, IGM under orange and LGM under red.
const toAtcoder = (r: number) => 600 + 1.278 * (r - 1200)
const AXIS_MIN = -300
const AXIS_MAX = 3200
const pos = (a: number) => `${((a - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100}%`
const span = (from: number, to: number) => `${((to - from) / (AXIS_MAX - AXIS_MIN)) * 100}%`

const AC_BANDS: [number, string, string][] = [
  [0, "#9a9a9a", "gray"],
  [400, "#a0522d", "brown"],
  [800, "#2e9e44", "green"],
  [1200, "#18b8b8", "cyan"],
  [1600, "#3b82f6", "blue"],
  [2000, "#d4c020", "yellow"],
  [2400, "#f08a24", "orange"],
  [2800, "#e5484d", "red"],
]
const CF_BANDS: [number, string, string, string][] = [
  [500, "#9a9a9a", "Newbie", "gray"],
  [1200, "#2e9e44", "Pupil", "brown"],
  [1400, "#18b8b8", "Specialist", "green"],
  [1600, "#3b82f6", "Expert", "cyan"],
  [1900, "#b455d6", "CM", "blue"],
  [2100, "#f0a024", "M", "blue"],
  [2300, "#f08a24", "IM", "yellow"],
  [2400, "#e5484d", "GM", "yellow"],
  [2600, "#d23c41", "IGM", "orange"],
  [3000, "#9b1c20", "LGM", "red"],
]
const CF_TICKS = [1200, 1400, 1600, 1900, 2100, 2300, 2400, 2600, 3000]

function colourFor(platform: "atcoder" | "codeforces", rating: number | null) {
  if (!rating) return "#9a9a9a"
  const bands = platform === "atcoder" ? AC_BANDS.map(([min, c]) => [min, c] as const) : CF_BANDS.map(([min, c]) => [min, c] as const)
  return [...bands].reverse().find(([min]) => rating >= min)?.[1] ?? "#9a9a9a"
}

function Marker({ at, colour, seen, below = false }: { at: number | null; colour: string; seen: boolean; below?: boolean }) {
  return (
    <div
      className={`absolute -translate-x-1/2 transition-[left] duration-[1800ms] ease-out-expo ${below ? "top-full mt-0.5" : "bottom-full mb-0.5"}`}
      style={{ left: seen && at != null ? pos(at) : pos(AXIS_MIN) }}
    >
      <div
        className={`h-0 w-0 border-x-[6px] border-x-transparent ${below ? "border-b-[9px]" : "border-t-[9px]"}`}
        style={{ [below ? "borderBottomColor" : "borderTopColor"]: colour, filter: `drop-shadow(0 0 6px ${colour})` }}
      />
    </div>
  )
}

function RankScales({ atcoder, codeforces }: { atcoder: { rating: number | null; peak: number | null }; codeforces: { rating: number | null; peak: number | null } }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  const acColour = colourFor("atcoder", atcoder.rating)
  const cfColour = colourFor("codeforces", codeforces.rating)
  const cfAsAtcoder = codeforces.rating != null ? Math.round(toAtcoder(codeforces.rating) / 10) * 10 : null

  return (
    <div ref={ref} className="py-4">
      <div className="mb-3 flex items-baseline justify-between text-sm">
        <span className="font-pixel text-base text-ink">AtCoder</span>
        <span>
          <span className="font-pixel text-2xl" style={{ color: acColour, textShadow: `0 0 14px ${acColour}99` }}>{nf(atcoder.rating)}</span>
          <span className="text-muted"> (peak {nf(atcoder.peak)})</span>
        </span>
      </div>

      <div className="relative h-4 text-[10px] leading-none text-muted" aria-hidden>
        {AC_BANDS.map(([min]) => (
          <span key={min} className="absolute -translate-x-1/2 tabular-nums" style={{ left: pos(min) }}>{min}</span>
        ))}
      </div>

      <div className="relative mt-3">
        <div className="relative h-3 overflow-hidden opacity-85" role="img" aria-label={`AtCoder rating scale, you are at ${nf(atcoder.rating)}`}>
          {AC_BANDS.map(([min, c], i) => (
            <div key={min} className="absolute top-0 h-full" style={{ left: pos(min), width: span(min, AC_BANDS[i + 1]?.[0] ?? AXIS_MAX), background: c }} />
          ))}
        </div>
        <div className="h-7" />
        <div className="relative h-3 overflow-hidden opacity-85" role="img" aria-label={`Codeforces rating scale, you are at ${nf(codeforces.rating)}`}>
          {CF_BANDS.map(([min, c], i) => {
            const from = toAtcoder(min)
            const to = CF_BANDS[i + 1] ? toAtcoder(CF_BANDS[i + 1][0]) : AXIS_MAX
            return <div key={min} className="absolute top-0 h-full" style={{ left: pos(from), width: span(from, to), background: c }} />
          })}
        </div>

        {/* Guides carry each AtCoder colour boundary down to the Codeforces bar. */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {AC_BANDS.slice(1).map(([min]) => (
            <div key={min} className="absolute bottom-0 top-0 w-px bg-white/15" style={{ left: pos(min) }} />
          ))}
        </div>

        {/* Peaks and current ratings. */}
        {atcoder.peak != null && <div className="absolute -top-1 h-5 w-px bg-white/70" style={{ left: pos(atcoder.peak) }} />}
        {codeforces.peak != null && <div className="absolute bottom-[-4px] h-5 w-px bg-white/70" style={{ left: pos(toAtcoder(codeforces.peak)) }} />}
        <div className="absolute inset-x-0 top-0 h-3">
          <Marker at={atcoder.rating} colour={acColour} seen={seen} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-3">
          <Marker at={codeforces.rating != null ? toAtcoder(codeforces.rating) : null} colour={cfColour} seen={seen} below />
        </div>
      </div>

      <div className="relative mt-3 h-8 text-[10px] leading-none text-muted" aria-hidden>
        {CF_TICKS.map((r, i) => (
          <span key={r} className="absolute -translate-x-1/2 tabular-nums" style={{ left: pos(toAtcoder(r)), top: i % 2 ? 13 : 0 }}>{r}</span>
        ))}
      </div>

      <div className="mt-1 flex items-baseline justify-between text-sm">
        <span className="font-pixel text-base text-ink">Codeforces</span>
        <span>
          <span className="font-pixel text-2xl" style={{ color: cfColour, textShadow: `0 0 14px ${cfColour}99` }}>{nf(codeforces.rating)}</span>
          <span className="text-muted"> (peak {nf(codeforces.peak)})</span>
        </span>
      </div>
      {cfAsAtcoder != null && (
        <p className="mt-1 text-xs text-muted">
          Your Codeforces {nf(codeforces.rating)} sits where AtCoder is about <span className="text-ink">{nf(cfAsAtcoder)}</span>.
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] leading-snug" aria-label="Codeforces ranks and the AtCoder colour each lines up with">
        {CF_BANDS.map(([, c, name, acName]) => {
          const ac = AC_BANDS.find(([, , n]) => n === acName)
          return (
            <li key={name} className="whitespace-nowrap">
              <span style={{ color: c }}>{name}</span>
              <span className="text-muted"> = </span>
              <span style={{ color: ac?.[1] }}>{acName}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ---------- Daruma: the CSES goal ---------- */
function DarumaGoal({ solved, total }: { solved: number; total: number }) {
  const cells = 40
  const filled = Math.round((solved / total) * cells)
  const [cheer, setCheer] = useState(false)
  return (
    <div className="window neon-box flex h-full flex-col">
      <div className="window-bar">
        <span>~/goals/cses.wish</span>
      </div>
      <div className="flex flex-1 flex-col items-center gap-3 p-4">
        <button
          type="button"
          aria-label="Cheer on the daruma"
          className="relative w-28"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            burst(r.left + r.width / 2, r.top + r.height / 3, 16)
            playBlip(740)
            setCheer(true)
            setTimeout(() => setCheer(false), 1400)
          }}
        >
          <Daruma left={solved > 0} right={solved >= total} className="float w-full cursor-pointer drop-shadow-[0_0_20px_rgba(255,59,78,0.5)]" />
          {cheer && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-pixel text-sm text-gold">がんばれ！</span>}
        </button>
        <p className="text-center text-sm">
          One eye painted when you start, the other when you finish. <span className="neon-cyan">{solved}</span>
          <span className="text-muted"> of {total} CSES problems.</span>
        </p>
        <div className="flex w-full flex-wrap gap-[3px]" role="img" aria-label={`${solved} of ${total} solved`}>
          {Array.from({ length: cells }, (_, i) => (
            <span key={i} className="h-2.5 flex-1 basis-[calc(10%-3px)]" style={{ background: i < filled ? "var(--phosphor)" : "var(--border)", boxShadow: i < filled ? "0 0 6px var(--phosphor)" : "none" }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Kaiten sushi: 1 plate = 1,000 words ---------- */
function PlateStack({ n, colour }: { n: number; colour: string }) {
  return (
    <div className="flex flex-col-reverse items-center" aria-hidden>
      {Array.from({ length: Math.min(n, 24) }, (_, i) => (
        <span key={i} className="-mt-[2px] block h-[7px] w-14 rounded-full border bg-void" style={{ borderColor: colour, boxShadow: `0 0 6px ${colour}66` }} />
      ))}
    </div>
  )
}

const BELT = [
  <Sushi key="a" className="w-16" fish="#ff7a59" />,
  <Sushi key="b" className="w-16" fish="#ff3d6e" />,
  <Oden key="c" className="w-16" />,
  <Sushi key="d" className="w-16" fish="#ffd166" />,
  <Sushi key="e" className="w-16" fish="#7ee7c7" />,
]

function SushiBelt({ words }: { words: Stats["words"] }) {
  const entries = Object.entries(words)
  return (
    <div className="window neon-box overflow-hidden">
      <div className="window-bar">
        <span>~/vocab/kaiten.sh (1 plate = 1,000 words)</span>
      </div>
      <div className="relative overflow-hidden border-b border-border py-3" aria-hidden>
        <div className="belt flex w-max items-center gap-8">
          {[...BELT, ...BELT, ...BELT, ...BELT, ...BELT, ...BELT].map((n, i) => (
            <div key={i}>{n}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-around gap-6 p-4">
        {entries.map(([lang, count], i) => (
          <div key={lang} className="flex items-end gap-4">
            <PlateStack n={Math.floor(count / 1000)} colour={i === 0 ? "var(--cyan)" : "var(--magenta)"} />
            <div>
              <p className="font-pixel text-xl">{lang === "Japanese" ? "日本語" : lang === "Chinese" ? "中文" : lang}</p>
              <p className="font-pixel text-3xl text-phosphor tabular-nums">{nf(count)}</p>
              <p className="text-xs text-muted">words known, {Math.floor(count / 1000)} plates</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Charts in terminal windows ---------- */
const SIZES: Record<string, [number, number]> = {
  "solved-over-time": [933, 511],
  ratings: [933, 511],
  "difficulty-atcoder": [1483, 554],
  "difficulty-codeforces": [1483, 554],
  cses: [1481, 555],
  languages: [1483, 494],
}

function ChartWindow({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [w, h] = SIZES[name] ?? [2, 1]
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true)
  }, [])
  return (
    <div className={`window neon-box ${className}`}>
      <div className="window-bar">
        <span>~/stats/{name}.png</span>
      </div>
      <div className="p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={`${STATS_BASE}/${name}.png`}
          alt={alt}
          width={w}
          height={h}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-auto w-full transition-opacity duration-300 ease-out-expo ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  )
}

export function StatsViz() {
  const s = useStats()
  const metres = (s.atcoder.solved ?? 0) + (s.codeforces.solved ?? 0) + (s.cses?.solved ?? 0)
  const contests = (s.atcoder.contests ?? 0) + (s.codeforces.contests ?? 0) + (s.themecp.contests ?? 0)
  const words = Object.values(s.words).reduce((a, b) => a + b, 0)
  const has = (c: string) => s.charts.includes(c)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Reveal><Counter value={metres} label="problems solved" kanji="問題" colour="var(--phosphor)" /></Reveal>
        <Reveal delay={90}><Counter value={contests} label="contests entered" kanji="大会" colour="var(--cyan)" /></Reveal>
        <Reveal delay={180}><Counter value={words} label="words known" kanji="単語" colour="var(--magenta)" /></Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <Reveal className="min-w-0"><FujiClimb metres={metres} /></Reveal>
        <Reveal delay={120} className="window neon-box">
          <div className="window-bar">
            <span>~/stats/rank --ladder</span>
          </div>
          <div className="divide-y divide-border px-4">
            <RankScales atcoder={s.atcoder} codeforces={s.codeforces} />
            <div className="py-3 text-sm">
              <span className="font-pixel text-base">ThemeCP (virtual)</span>
              <span className="float-right"><span className="font-pixel text-2xl text-magenta">{nf(s.themecp.rating)}</span> <span className="text-muted">over {nf(s.themecp.contests)} contests</span></span>
            </div>
            <div className="py-3 text-sm text-muted">USACO {s.usaco} / JLPT {s.jlpt}</div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        {s.cses && <Reveal className="min-w-0"><DarumaGoal solved={s.cses.solved} total={s.cses.total} /></Reveal>}
        <Reveal delay={120} className="min-w-0"><SushiBelt words={s.words} /></Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {has("solved-over-time") && <Reveal><ChartWindow name="solved-over-time" alt="Problems solved over time" /></Reveal>}
        {has("ratings") && <Reveal delay={90}><ChartWindow name="ratings" alt="Contest rating over time" /></Reveal>}
        {has("difficulty-atcoder") && <Reveal className="md:col-span-2"><ChartWindow name="difficulty-atcoder" alt="AtCoder problems solved by difficulty" /></Reveal>}
        {has("difficulty-codeforces") && <Reveal className="md:col-span-2"><ChartWindow name="difficulty-codeforces" alt="Codeforces problems solved by difficulty" /></Reveal>}
        {has("cses") && <Reveal className="md:col-span-2"><ChartWindow name="cses" alt="CSES progress by section" /></Reveal>}
        {has("languages") && <Reveal className="md:col-span-2"><ChartWindow name="languages" alt="Vocabulary growth over time" /></Reveal>}
      </div>

      <p className="text-xs text-muted">
        Updated {s.updated}. Pulled daily from my own study-progress API through my <a className="link" href="https://github.com/isym444" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
      </p>
    </div>
  )
}
