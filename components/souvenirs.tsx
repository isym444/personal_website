"use client"

import { useState } from "react"
import { SYMBOLS, SymbolSvg, type SymbolKey } from "@/components/symbols"

// Wide screens: symbols float down the empty margins either side of the content.
export function Gutters({ keys }: { keys: SymbolKey[] }) {
  const left = keys.filter((_, i) => i % 2 === 0)
  const right = keys.filter((_, i) => i % 2 === 1)
  return (
    <>
      <Column keys={left} side="left" />
      <Column keys={right} side="right" />
    </>
  )
}

function Column({ keys, side }: { keys: SymbolKey[]; side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 top-0 z-20 hidden w-[calc((100vw-72rem)/2)] flex-col items-center justify-around py-20 min-[1400px]:flex ${side === "left" ? "left-0" : "right-0"}`}
    >
      {keys.map((k, i) => (
        <button
          key={k}
          type="button"
          className="group pointer-events-auto relative outline-none"
          aria-label={SYMBOLS[k].caption}
        >
          <SymbolSvg
            k={k}
            title={SYMBOLS[k].label}
            style={{ animationDelay: `${-(i * 1.7 + (side === "left" ? 0 : 0.9)).toFixed(1)}s` }}
            className="float w-[clamp(56px,calc((100vw-72rem)/2-48px),92px)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
          />
          <span
            role="tooltip"
            className={`pointer-events-none absolute top-1/2 z-30 w-48 -translate-y-1/2 border border-dim bg-void/95 px-3 py-2 text-left text-xs leading-snug text-ink opacity-0 shadow-[0_0_18px_rgba(61,255,139,0.25)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${side === "left" ? "left-full ml-2" : "right-full mr-2"}`}
            style={{ transitionDelay: "0ms" }}
          >
            {SYMBOLS[k].caption}
          </span>
        </button>
      ))}
    </div>
  )
}

// Narrower screens (and mobile): a slow conveyor of symbols under the section title. Tap one for its caption.
export function Belt({ keys }: { keys: SymbolKey[] }) {
  const [selected, setSelected] = useState<SymbolKey | null>(null)
  const reps = Math.max(1, Math.ceil(8 / keys.length))
  const half = Array.from({ length: reps }, () => keys).flat()
  return (
    <div className="mb-10 min-[1400px]:hidden">
      <div className="overflow-hidden border-y border-border py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        <div className="belt flex w-max items-center gap-8 hover:[animation-play-state:paused]" style={{ animationDuration: `${half.length * 5}s` }}>
          {[...half, ...half].map((k, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(k)}
              aria-label={SYMBOLS[k].caption}
              aria-hidden={i >= half.length ? true : undefined}
              tabIndex={i >= half.length ? -1 : 0}
              className="shrink-0 transition-transform active:scale-90"
            >
              <SymbolSvg k={k} title={SYMBOLS[k].label} className="h-16 w-16 sm:h-20 sm:w-20" />
            </button>
          ))}
        </div>
      </div>
      <p className="mt-2 min-h-5 text-xs text-cyan" aria-live="polite">
        {selected ? SYMBOLS[selected].caption : "Tap a symbol."}
      </p>
    </div>
  )
}
