"use client"

import { useState } from "react"
import { Violin } from "@/components/art"
import { PlayablePiano } from "@/components/piano"
import { playPluck, VIOLIN_STRINGS } from "@/lib/audio"

export function Music() {
  const [vibrating, setVibrating] = useState<number | null>(null)
  const pluck = (i: number) => {
    playPluck(VIOLIN_STRINGS[i])
    setVibrating(i)
    setTimeout(() => setVibrating((v) => (v === i ? null : v)), 950)
  }
  return (
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
  )
}
