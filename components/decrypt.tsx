"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺ日月火水木金土山川竹梅桜富士寿司旅音楽0123456789アイウエオ"

// Scrambles through real kana and kanji, then settles on the text. Replays on hover.
export function Decrypt({ text, className = "", duration = 1300, delay = 250 }: {
  text: string
  className?: string
  duration?: number
  delay?: number
}) {
  const [shown, setShown] = useState(text)
  const raf = useRef(0)

  const run = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    cancelAnimationFrame(raf.current)
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setShown(
        text
          .split("")
          .map((ch, i) => (ch === " " || i < p * text.length ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      )
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }, [text, duration])

  useEffect(() => {
    const id = setTimeout(run, delay)
    return () => {
      clearTimeout(id)
      cancelAnimationFrame(raf.current)
    }
  }, [run, delay])

  return (
    <span className={className} onMouseEnter={run} aria-label={text}>
      <span aria-hidden>{shown}</span>
    </span>
  )
}
