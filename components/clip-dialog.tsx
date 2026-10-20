"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useEffect, useRef, useState } from "react"
import { acquireClip, clipSound, playClip, prefetchClip, setClipSound } from "@/lib/clip-cache"
import { clipMeta } from "@/lib/clips"

export type PlayableClip = { id: string; instrument: string; composer: string; title: string; accent: string }

const pad = (n: number) => String(Math.floor(n)).padStart(2, "0")
const timecode = (t: number) => `${pad(t / 60)}:${pad(t % 60)}`

// A muted, controls-free looping clip. The <video> comes from lib/clip-cache so it is usually buffered before the click.
function Stage({ clip }: { clip: PlayableClip }) {
  const host = useRef<HTMLDivElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const clock = useRef<HTMLSpanElement>(null)
  const [ready, setReady] = useState(false)
  const [still, setStill] = useState(false)
  const [muted, setMuted] = useState(true)
  const [blocked, setBlocked] = useState(false)
  const meta = clipMeta(clip.id)
  const ratio = meta ? meta.w / meta.h : 16 / 9

  useEffect(() => {
    const el = host.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setStill(reduced)
    const v = acquireClip(clip.id)
    el.appendChild(v)
    if (v.readyState >= 3) setReady(true)
    setMuted(v.muted)
    const onReady = () => setReady(true)
    const onVolume = () => setMuted(v.muted)
    let last = 0
    const onTime = () => {
      const t = v.currentTime
      // The playhead jumped back: the loop wrapped, so give the CRT a little hiccup.
      if (t < last - 0.5 && !reduced) {
        const f = frame.current
        if (f) {
          f.classList.remove("clip-flicker")
          void f.offsetWidth
          f.classList.add("clip-flicker")
        }
      }
      last = t
      if (clock.current) clock.current.textContent = timecode(t)
    }
    v.addEventListener("canplay", onReady)
    v.addEventListener("playing", onReady)
    v.addEventListener("timeupdate", onTime)
    v.addEventListener("volumechange", onVolume)
    // Normally already playing (started inside the click); this covers the case where it was not.
    if (!reduced && v.paused) playClip(clip.id)
    // The browser refused sound and fell back to muted although the visitor wants it.
    const wantsSound = clipSound() && !reduced && !!meta?.a
    const check = window.setTimeout(() => setBlocked(wantsSound && v.muted), 600)
    // Sound must not keep looping in a background tab.
    const onVisibility = () => {
      if (document.hidden) v.pause()
      else if (!reduced) v.play().catch(() => {})
    }
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      window.clearTimeout(check)
      document.removeEventListener("visibilitychange", onVisibility)
      v.removeEventListener("volumechange", onVolume)
      v.removeEventListener("canplay", onReady)
      v.removeEventListener("playing", onReady)
      v.removeEventListener("timeupdate", onTime)
      v.pause()
      v.currentTime = 0
      el.contains(v) && el.removeChild(v)
    }
  }, [clip.id])

  const resume = () => {
    playClip(clip.id)
    setStill(false)
  }
  const toggleSound = () => {
    const v = host.current?.querySelector("video")
    if (!v) return
    const on = v.muted
    setClipSound(on)
    setBlocked(false)
    v.muted = !on
    if (on && v.paused) v.play().catch(() => {})
  }

  return (
    <div
      ref={frame}
      className="clip-frame relative mx-auto"
      style={{ aspectRatio: `${ratio}`, width: `min(100%, calc(60dvh * ${ratio}))`, ["--accent" as string]: clip.accent }}
      onAnimationEnd={(e) => e.currentTarget.classList.remove("clip-flicker")}
    >
      <div ref={host} className="clip-stage absolute inset-0 overflow-hidden bg-black" />
      <div className="clip-scan pointer-events-none absolute inset-0" aria-hidden />
      <span className="clip-corner left-0 top-0 border-l-2 border-t-2" aria-hidden />
      <span className="clip-corner right-0 top-0 border-r-2 border-t-2" aria-hidden />
      <span className="clip-corner bottom-0 left-0 border-b-2 border-l-2" aria-hidden />
      <span className="clip-corner bottom-0 right-0 border-b-2 border-r-2" aria-hidden />
      <div className="pointer-events-none absolute left-3 top-2.5 flex items-center gap-1.5 font-pixel text-xs text-red [text-shadow:0_0_8px_var(--red)]" aria-hidden>
        <span className="blink">●</span> REC
      </div>
      <div className="pointer-events-none absolute right-3 top-2.5 font-pixel text-xs text-phosphor [text-shadow:var(--glow)]" aria-hidden>
        <span ref={clock}>00:00</span> ∞
      </div>
      {meta?.a && (
      <button
        type="button"
        onClick={toggleSound}
        className={`absolute bottom-3 right-5 z-10 border border-phosphor-dim bg-black/70 px-2 font-pixel text-xs transition-colors hover:border-phosphor ${muted ? "text-muted" : "text-phosphor [text-shadow:var(--glow)]"} ${blocked ? "blink border-gold text-gold" : ""}`}
        aria-label={muted ? "Turn clip sound on" : "Mute clip"}
        aria-pressed={!muted}
      >
        {muted ? (blocked ? "♪ TAP FOR SOUND" : "♪ SOUND OFF") : "♪ SOUND ON"}
      </button>
      )}
      {!ready && (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 text-center font-pixel text-xs text-phosphor [text-shadow:var(--glow)]" aria-hidden>
          LOADING<span className="blink">_</span>
        </div>
      )}
      {still && (
        <button type="button" onClick={resume} className="absolute inset-0 flex items-center justify-center bg-black/40 font-pixel text-lg text-phosphor [text-shadow:var(--glow)]">
          ▶ play clip
        </button>
      )}
    </div>
  )
}

export type ClipDialogProps = { clips: PlayableClip[]; index: number | null; onChange: (i: number | null) => void }

export default function ClipDialog({ clips, index, onChange }: ClipDialogProps) {
  // Keep showing the last piece while the close animation plays.
  const lastShown = useRef(0)
  if (index !== null) lastShown.current = index
  const i = Math.min(lastShown.current, clips.length - 1)
  const clip = clips[i]
  const open = index !== null
  const step = (d: number) => {
    const next = (i + d + clips.length) % clips.length
    playClip(clips[next].id) // inside the keypress/click, so sound is allowed
    onChange(next)
  }

  // Buffer the neighbours so browsing with the arrows is also instant.
  useEffect(() => {
    if (!open || clips.length < 2) return
    prefetchClip(clips[(i + 1) % clips.length].id)
    prefetchClip(clips[(i - 1 + clips.length) % clips.length].id)
  }, [open, i, clips])

  if (!clip) return null

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onChange(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="clip-overlay fixed inset-0 z-[56]" />
        <Dialog.Content
          className="clip-window window neon-box fixed left-1/2 top-1/2 z-[57] w-[min(94vw,760px)] max-h-[94dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto outline-none"
          style={{ ["--accent" as string]: clip.accent }}
          onCloseAutoFocus={(e) => {
            // Radix drops focus on the page body here; send it back to the row of the piece that was showing.
            e.preventDefault()
            document.querySelector<HTMLElement>(`[data-clip="${clip.id}"]`)?.focus()
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1)
            else if (e.key === "ArrowLeft") step(-1)
          }}
        >
          <div className="window-bar">
            <span className="truncate">~/music/clips/{clip.id}.mp4</span>
            <Dialog.Close className="ml-auto shrink-0 border border-border px-2 font-pixel text-xs text-muted transition-colors hover:border-red hover:text-red" aria-label="Close clip">
              esc ✕
            </Dialog.Close>
          </div>
          <div className="p-4 sm:p-5">
            <Stage key={clip.id} clip={clip} />
            <div className="mt-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div className="min-w-0">
                <Dialog.Title className="font-pixel text-2xl leading-tight" style={{ color: clip.accent, textShadow: `0 0 12px ${clip.accent}66` }}>
                  {clip.composer}
                </Dialog.Title>
                <Dialog.Description className="mt-0.5 text-[15px] text-ink">
                  <span className="text-gold">{clip.instrument === "Piano" ? "♪" : "♫"}</span> {clip.title}
                  <span className="sr-only">. A short looping clip of Ian playing it.</span>
                </Dialog.Description>
              </div>
              {clips.length > 1 && (
                <div className="flex items-center gap-2 font-pixel text-sm text-muted">
                  <button type="button" onClick={() => step(-1)} className="clip-nav" aria-label="Previous clip">◀</button>
                  <span className="min-w-[4.5ch] text-center tabular-nums" aria-hidden>
                    {pad(i + 1)}/{pad(clips.length)}
                  </span>
                  <button type="button" onClick={() => step(1)} className="clip-nav" aria-label="Next clip">▶</button>
                </div>
              )}
            </div>
            <p className="mt-3 border-t border-border pt-2 text-[11px] text-muted">loops · ← → to browse · esc to close</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
