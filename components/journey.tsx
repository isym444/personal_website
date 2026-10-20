"use client"

import { useEffect, useState } from "react"
import { Torii } from "@/components/art"
import { DocButton } from "@/components/doc-button"
import { Reveal } from "@/components/reveal"

const ROUTE = "M70 110C150 20 210 20 280 70C350 120 430 110 500 60C570 10 650 10 720 60C790 110 860 90 930 40"
type Stop = { place: string; when: string; note: string; x: number; y: number; torii?: boolean; doc?: { id: string; label: string } }
const STOPS: Stop[] = [
  { place: "Mexico", when: "born", note: "Where it started.", x: 70, y: 110, doc: { id: "mexico-baby", label: "See a baby photo" } },
  { place: "Cambridge", when: "2014 to 2021", note: "Medicine (MB BChir) and Biological & Biomedical Sciences.", x: 280, y: 70, doc: { id: "cambridge-graduation", label: "See my graduation photo" } },
  { place: "Fukuoka", when: "2017 to 2018", note: "Tsuzuki Scholarship exchange at the Japan University of Economics.", x: 500, y: 60, torii: true, doc: { id: "fukuoka-completion", label: "See my completion certificate" } },
  { place: "London", when: "2021 to 2023", note: "Doctor at St Thomas' and Guy's.", x: 720, y: 60, doc: { id: "london-doctor", label: "See me in scrubs" } },
  { place: "Glasgow", when: "2023 to now", note: "Software engineer at Barclays, BSc at the University of Glasgow.", x: 930, y: 40, doc: { id: "glasgow-cow", label: "Meet the Highland cow" } },
]

export function Journey() {
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches), [])

  return (
    <div>
      <svg viewBox="0 0 1000 150" className="w-full overflow-visible" role="img" aria-label="Animated route: Mexico, Cambridge, Fukuoka, London, Glasgow">
        <defs>
          <filter id="route-glow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path id="route" d={ROUTE} fill="none" stroke="var(--cyan)" strokeOpacity="0.85" strokeWidth="2.5" className="steam" filter="url(#route-glow)" />
        {STOPS.map((s, i) => (
          <g key={s.place}>
            <circle cx={s.x} cy={s.y} r="5" fill="var(--void)" stroke="var(--phosphor)" strokeWidth="2" />
            <circle cx={s.x} cy={s.y} r="5" fill="none" stroke="var(--phosphor)" className="pulse-ring" style={{ animationDelay: `${i * 0.4}s` }} />
            <text x={s.x} y={s.y + (i % 2 === 0 ? 26 : -16)} textAnchor="middle" fontSize="15" fill="var(--ink)" fontFamily="var(--font-pixel)">
              {s.place}
            </text>
          </g>
        ))}
        <g transform="translate(483 22)" aria-hidden>
          <Torii width={34} height={30} />
        </g>
        <g>
          {animate && (
            <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
              <mpath href="#route" />
            </animateMotion>
          )}
          <path d="M10 0L-12 -8L-7 0L-12 8Z" fill="var(--cyan)" stroke="#fff" strokeWidth="1" strokeLinejoin="round" transform={animate ? undefined : "translate(70 110)"} />
        </g>
      </svg>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STOPS.map((s, i) => {
          const text = (
            <>
              <span className="block font-pixel text-lg leading-[1.75rem] text-phosphor">{s.place}</span>
              <span className="block text-xs text-cyan">{s.when}</span>
              <span className="mt-2 block text-[13px] leading-snug text-ink/85">{s.note}</span>
            </>
          )
          return s.doc ? (
            <Reveal key={s.place} as="li" delay={i * 110}>
              <DocButton card id={s.doc.id} label={s.doc.label}>
                {text}
              </DocButton>
            </Reveal>
          ) : (
            <Reveal key={s.place} as="li" delay={i * 110} className="window neon-box p-3">
              {text}
            </Reveal>
          )
        })}
      </ol>
    </div>
  )
}
