"use client"

import { Fragment, useEffect, useState } from "react"

const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺ日月火水木金土山川竹梅桜富士寿司旅音楽0123456789アイウエオ"

// On first load only: every letter starts as a random kana or kanji and resolves, left to right, into the real
// letter. Nothing is rendered underneath, so the real name is never visible while it is still scrambling.
// Each letter sits in a cell sized by its final glyph, so the layout never shifts.
export function Decrypt({ text, className = "", duration = 1300, delay = 120, glitch = false }: {
  text: string
  className?: string
  duration?: number
  delay?: number
  glitch?: boolean
}) {
  const chars = Array.from(text)
  const [shown, setShown] = useState<string[] | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const letters = Array.from(text)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(letters)
      setDone(true)
      return
    }
    let raf = 0
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        setShown(letters.map((ch, i) => (ch === " " || i < p * letters.length ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])))
        if (p < 1) raf = requestAnimationFrame(tick)
        else setDone(true)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [text, duration, delay])

  let index = 0
  return (
    <span className={`relative inline-block ${className}`} data-text={glitch && done ? text : ""}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(" ").map((word, wi) => (
          <Fragment key={wi}>
            {wi > 0 && " "}
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((ch) => {
                const i = index++
                return (
                  <span key={i} className="relative inline-block">
                    <span className="invisible">{ch}</span>
                    <span className="absolute inset-0 text-center">{shown?.[i] ?? ""}</span>
                  </span>
                )
              })}
            </span>
            {(index++, null)}
          </Fragment>
        ))}
      </span>
    </span>
  )
}
