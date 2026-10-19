"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { KEYS, playPiano } from "@/lib/audio"
import { SECTIONS } from "@/lib/nav"

const BLACK_AFTER = [0, 1, 3, 4, 5] // black keys sit after C, D, F, G, A
const BLACK_FREQ = [277.18, 311.13, 369.99, 415.3, 466.16]

// The section nav is a one-octave piano. White keys jump to a section and play their note.
export function PianoNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id)
  const [pressed, setPressed] = useState<string | null>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const go = (id: string, freq: number) => {
    playPiano(freq)
    setPressed(id)
    setTimeout(() => setPressed(null), 180)
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
  }

  return (
    <nav aria-label="Sections" className="fixed bottom-3 left-1/2 z-50 w-[min(94vw,600px)] -translate-x-1/2">
      <div className="relative flex h-[68px] border border-dim bg-void/85 p-[3px] shadow-[0_0_30px_rgba(61,255,139,0.18)] backdrop-blur">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(s.id, s.note)}
            aria-label={`${s.en} (plays ${s.note.toFixed(0)} hertz)`}
            aria-current={active === s.id ? "true" : undefined}
            className={`flex flex-1 flex-col items-center justify-end gap-0.5 border-r border-border pb-1 text-[11px] transition-all duration-150 last:border-r-0 ${
              active === s.id ? "bg-phosphor/20 text-phosphor shadow-[inset_0_-14px_18px_-10px_rgba(61,255,139,0.55)]" : "text-muted hover:bg-phosphor/10 hover:text-ink"
            } ${pressed === s.id ? "translate-y-[2px] bg-phosphor/30" : ""}`}
          >
            <span className="font-pixel text-base leading-none">{s.kanji}</span>
            <span className="hidden text-[9px] uppercase tracking-wider opacity-70 sm:block">{s.en}</span>
          </button>
        ))}
        {BLACK_AFTER.map((idx, i) => (
          <button
            key={idx}
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={() => playPiano(BLACK_FREQ[i])}
            className="absolute top-[3px] z-10 h-[26px] w-[4.5%] -translate-x-1/2 bg-black ring-1 ring-dim transition-transform active:translate-y-[2px] hover:bg-[#04170d]"
            style={{ left: `${((idx + 1) / SECTIONS.length) * 100}%` }}
          />
        ))}
      </div>
    </nav>
  )
}

const WHITE = KEYS.filter((k) => !k.black)
const KEY_BINDINGS: Record<string, string> = { a: "C", w: "C#", s: "D", e: "D#", d: "E", f: "F", t: "F#", g: "G", y: "G#", h: "A", u: "A#", j: "B", k: "C5" }

export function PlayablePiano() {
  const [down, setDown] = useState<Record<string, boolean>>({})
  const [pops, setPops] = useState<{ id: number; note: string; left: number }[]>([])
  const counter = useRef(0)

  const press = useCallback((note: string) => {
    const key = KEYS.find((k) => k.note === note)
    if (!key) return
    playPiano(key.freq)
    setDown((d) => ({ ...d, [note]: true }))
    setTimeout(() => setDown((d) => ({ ...d, [note]: false })), 160)
    const idx = KEYS.findIndex((k) => k.note === note)
    const id = counter.current++
    setPops((p) => [...p.slice(-8), { id, note, left: ((idx + 0.5) / KEYS.length) * 100 }])
    setTimeout(() => setPops((p) => p.filter((x) => x.id !== id)), 1000)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target as HTMLElement
      if (target && /input|textarea/i.test(target.tagName)) return
      const note = KEY_BINDINGS[e.key.toLowerCase()]
      if (note) press(note)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [press])

  return (
    <div className="relative select-none">
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-8" aria-hidden>
        {pops.map((p) => (
          <span key={p.id} className="absolute text-xl text-cyan [animation:trail_1s_ease-out_forwards]" style={{ left: `${p.left}%` }}>
            ♪
          </span>
        ))}
      </div>
      <div className="relative flex h-44 border border-dim bg-black p-1 shadow-[0_0_30px_rgba(61,255,139,0.15)]" role="group" aria-label="Piano: click keys or use A to K on your keyboard">
        {WHITE.map((k) => (
          <button
            key={k.note}
            type="button"
            onPointerDown={() => press(k.note)}
            aria-label={`Play ${k.note}`}
            className={`flex flex-1 items-end justify-center border-r border-[#0d2a1c] pb-2 font-pixel text-xs transition-all duration-100 last:border-r-0 ${
              down[k.note] ? "translate-y-[2px] bg-phosphor/50 text-void" : "bg-[#b4f0cf]/85 text-void hover:bg-[#d2ffe5]"
            }`}
          >
            {k.note}
          </button>
        ))}
        {KEYS.map((k, i) => {
          if (!k.black) return null
          const whiteBefore = KEYS.slice(0, i).filter((x) => !x.black).length
          return (
            <button
              key={k.note}
              type="button"
              onPointerDown={() => press(k.note)}
              aria-label={`Play ${k.note}`}
              className={`absolute top-1 z-10 h-24 -translate-x-1/2 border border-[#0d2a1c] transition-all duration-100 ${
                down[k.note] ? "translate-y-[2px] bg-phosphor" : "bg-black hover:bg-[#06230f]"
              }`}
              style={{ left: `calc(4px + (100% - 8px) * ${whiteBefore / WHITE.length})`, width: `calc((100% - 8px) * ${0.6 / WHITE.length})` }}
            />
          )
        })}
      </div>
      <p className="mt-3 text-xs text-muted">
        Click the keys, or play with <kbd className="border border-dim px-1 text-phosphor">A</kbd> to <kbd className="border border-dim px-1 text-phosphor">K</kbd> (sharps on <kbd className="border border-dim px-1 text-phosphor">W E T Y U</kbd>).
      </p>
    </div>
  )
}
