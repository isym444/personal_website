"use client"

import { useState } from "react"
import { Violin } from "@/components/art"
import { PlayablePiano } from "@/components/piano"
import { Reveal } from "@/components/reveal"
import { SymbolSvg } from "@/components/symbols"
import { playPluck, VIOLIN_STRINGS } from "@/lib/audio"
import { musicCredentials, repertoire, type Repertoire } from "@/lib/content"

function Programme({ instrument, glyph }: { instrument: Repertoire["instrument"]; glyph: string }) {
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
            <ul className="mt-1 space-y-0.5 border-l border-border pl-3 text-[13.5px] leading-snug text-ink/90">
              {r.works.map((w) => (
                <li key={w}>{w}</li>
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
          <div className="grid gap-8 p-5 sm:grid-cols-2 sm:p-6">
            <Programme instrument="Piano" glyph="♪" />
            <Programme instrument="Violin" glyph="♫" />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
