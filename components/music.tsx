"use client"

import type { ComponentType } from "react"
import { useState } from "react"
import { Violin } from "@/components/art"
import { PlayablePiano } from "@/components/piano"
import { Reveal } from "@/components/reveal"
import { SymbolSvg } from "@/components/symbols"
import { playPluck, VIOLIN_STRINGS } from "@/lib/audio"
import type { ClipDialogProps, PlayableClip } from "@/components/clip-dialog"
import { playClip, prefetchClip, stopClip } from "@/lib/clip-cache"
import { clipMeta } from "@/lib/clips"
import { loadChunk } from "@/lib/load-chunk"
import { musicCredentials, repertoire, type Repertoire } from "@/lib/content"

// The popup (and Radix's dialog) only loads when a visitor shows interest in a piece, and is cached after the first
// load. A failed load is not cached, so the next attempt retries.
let dialog: Promise<ComponentType<ClipDialogProps>> | null = null
const getDialog = () =>
  (dialog ??= loadChunk(() => import("@/components/clip-dialog"))
    .then((m) => m.default)
    .catch((e) => {
      dialog = null
      throw e
    }))

// Every piece that has a clip, in on-page order (piano first), for the popup's prev/next.
const playable: PlayableClip[] = (["Piano", "Violin"] as const).flatMap((instrument) =>
  repertoire
    .filter((r) => r.instrument === instrument)
    .flatMap((r) => r.works.filter((w) => clipMeta(w.id)).map((w) => ({ id: w.id, instrument, composer: r.composer, title: w.title, accent: r.accent }))),
)

function Programme({ instrument, glyph, onOpen }: { instrument: Repertoire["instrument"]; glyph: string; onOpen: (id: string) => void }) {
  const rows = repertoire.filter((r) => r.instrument === instrument)
  return (
    <div>
      <h4 className="mb-4 flex items-center gap-2 font-pixel text-xl text-ink">
        <span className="text-gold">{glyph}</span> {instrument}
      </h4>
      <ul className="space-y-5">
        {rows.map((r) => (
          <li key={r.composer}>
            <p className="font-pixel text-lg" style={{ color: r.accent, textShadow: `0 0 10px ${r.accent}55` }}>
              {r.composer}
            </p>
            <ul className="mt-1 space-y-1.5 border-l border-border pl-3 text-[13.5px] leading-snug text-ink/90" style={{ ["--accent" as string]: r.accent }}>
              {r.works.map((w) => (
                <li key={w.id}>
                  {clipMeta(w.id) ? (
                    <button
                      type="button"
                      className="clip-link"
                      data-clip={w.id}
                      aria-label={`Watch a clip of ${r.composer}: ${w.title}`}
                      onClick={() => onOpen(w.id)}
                      onPointerEnter={() => {
                        getDialog().catch(() => {})
                        prefetchClip(w.id)
                      }}
                      onFocus={() => {
                        getDialog().catch(() => {})
                        prefetchClip(w.id)
                      }}
                      onTouchStart={() => prefetchClip(w.id)}
                    >
                      <span className="clip-play" aria-hidden>▶</span>
                      <span>{w.title}</span>
                      <span className="clip-tag" aria-hidden>WATCH</span>
                    </button>
                  ) : (
                    w.title
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Music() {
  const [vibrating, setVibrating] = useState<number | null>(null)
  const [clip, setClip] = useState<number | null>(null)
  const [Dialog, setDialog] = useState<ComponentType<ClipDialogProps> | null>(null)
  const [loadError, setLoadError] = useState(false)
  const openClip = (id: string) => {
    playClip(id) // started inside the click so the browser allows sound
    setLoadError(false)
    setClip(playable.findIndex((p) => p.id === id))
    getDialog().then(
      (C) => setDialog(() => C),
      () => {
        // The player code would not load (offline, or the tab is older than the latest deploy).
        stopClip(id)
        setClip(null)
        setLoadError(true)
      },
    )
  }
  const pluck = (i: number) => {
    playPluck(VIOLIN_STRINGS[i])
    setVibrating(i)
    setTimeout(() => setVibrating((v) => (v === i ? null : v)), 950)
  }
  return (
    <div>
      <div className="grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <PlayablePiano />
        </div>
        <div className="flex items-center gap-6">
          <Violin onPluck={pluck} vibrating={vibrating} className="w-36 shrink-0 drop-shadow-[0_0_18px_rgba(255,180,84,0.35)]" />
          <div className="text-sm leading-relaxed">
            <p className="font-pixel text-lg text-gold">ヴァイオリン</p>
            <p className="mt-2 text-ink/85">Pluck a string. G, D, A, E, tuned in fifths.</p>
            <p className="mt-3 text-muted">University of Cambridge violin and piano scholarships.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Reveal className="window neon-box flex flex-col">
          <div className="window-bar">
            <span>~/music/training.txt</span>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-5">
            <div className="flex items-center gap-4">
              <SymbolSvg k="rcm" className="float w-20 shrink-0" />
              <div>
                <p className="font-pixel text-xl leading-tight text-ink">{musicCredentials.school}</p>
                <p className="mt-1 text-xs text-muted">{musicCredentials.note}</p>
              </div>
            </div>
            <div>
              <p className="mb-3 font-pixel text-sm text-gold">Performance highlights</p>
              <ul className="space-y-3">
                {musicCredentials.venues.map((v, i) => (
                  <li key={v} className="flex items-center gap-3">
                    {i === 0 ? <SymbolSvg k="hall" className="w-12 shrink-0" /> : <span className="flex h-12 w-12 shrink-0 items-center justify-center font-pixel text-2xl text-cyan [text-shadow:0_0_12px_var(--cyan)]">♪</span>}
                    <span className="text-[15px] text-ink">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="window neon-box">
          <div className="window-bar">
            <span>~/music/favourite-repertoire.pdf</span>
          </div>
          {playable.length > 0 && (
            <p className="px-5 pt-4 text-xs text-muted sm:px-6">
              <span className="text-phosphor">&gt;</span> pieces marked <span className="text-gold">▶ WATCH</span> open a short clip of me playing them, with sound
              <span className="blink text-phosphor">_</span>
            </p>
          )}
          {loadError && (
            <p role="status" className="px-5 pt-2 text-xs text-red sm:px-6">
              Couldn&apos;t load the player. Check your connection and reload the page.
            </p>
          )}
          <div className="grid gap-8 p-5 sm:grid-cols-2 sm:p-6">
            <Programme instrument="Piano" glyph="♪" onOpen={openClip} />
            <Programme instrument="Violin" glyph="♫" onOpen={openClip} />
          </div>
        </Reveal>
      </div>
      {Dialog && <Dialog clips={playable} index={clip} onChange={setClip} />}
    </div>
  )
}
