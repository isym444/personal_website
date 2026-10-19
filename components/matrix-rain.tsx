"use client"

import { useEffect, useRef } from "react"

// Real Japanese (plus a little Mandarin), read top to bottom as it falls. No mirrored katakana.
const LINES = [
  "競技プログラミングが好きです",
  "日本語を勉強しています",
  "ピアノとバイオリンを弾きます",
  "元医師ソフトウェアエンジニア",
  "いつか富士山に登りたい",
  "寿司とおでんが大好き",
  "世界を旅するのが好き",
  "七転び八起き",
  "継続は力なり",
  "一期一会",
  "ようこそ",
  "こんにちは世界",
  "二分探索",
  "動的計画法",
  "深さ優先探索",
  "幅優先探索",
  "ダイクストラ法",
  "最短経路問題",
  "アルゴリズムとデータ構造",
  "毎日少しずつ頑張る",
  "你好世界",
  "学无止境",
  "加油",
  "福",
]

const SIZE = 18
const GLITCH = "ｱｲｳｴｵｶｷｸｹｺ日月火水木金土0123456789"

type Column = { x: number; head: number; speed: number; chars: string[]; wait: number }

export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let cols: Column[] = []
    let w = 0
    let h = 0
    let raf = 0
    let last = performance.now()
    let colour = "#3dff8b"

    const pick = (): string[] => Array.from(LINES[Math.floor(Math.random() * LINES.length)])
    const spawn = (x: number, initial: boolean): Column => {
      const chars = pick()
      return {
        x,
        chars,
        speed: 28 + Math.random() * 70,
        head: initial ? Math.random() * (h + chars.length * SIZE) : -Math.random() * h * 0.6,
        wait: 0,
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const step = SIZE * 1.35
      const count = Math.ceil(w / step)
      cols = Array.from({ length: count }, (_, i) => spawn(i * step + SIZE / 2, true))
      colour = getComputedStyle(document.documentElement).getPropertyValue("--phosphor").trim() || colour
    }

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      ctx.clearRect(0, 0, w, h)
      ctx.font = `${SIZE}px "DotGothic16", "Hiragino Sans", "Yu Gothic", monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      if (Math.random() < 0.02) colour = getComputedStyle(document.documentElement).getPropertyValue("--phosphor").trim() || colour

      for (let i = 0; i < cols.length; i++) {
        const c = cols[i]
        c.head += c.speed * dt
        const n = c.chars.length
        for (let k = 0; k < n; k++) {
          const y = c.head - (n - 1 - k) * SIZE
          if (y < -SIZE || y > h + SIZE) continue
          const isHead = k === n - 1
          const t = k / (n - 1 || 1)
          ctx.globalAlpha = isHead ? 1 : 0.1 + 0.8 * t * t
          ctx.fillStyle = isHead ? "#eafff2" : colour
          const ch = Math.random() < 0.0015 ? GLITCH[Math.floor(Math.random() * GLITCH.length)] : c.chars[k]
          ctx.fillText(ch, c.x, y)
        }
        if (c.head - n * SIZE > h) cols[i] = spawn(c.x, false)
      }
      ctx.globalAlpha = 1
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.34]" />
}
