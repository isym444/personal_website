"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Arch, Daruma, Lantern, Oden, Sushi, Torii } from "@/components/art"
import { Decrypt } from "@/components/decrypt"
import { profile } from "@/lib/content"
import { burst } from "@/lib/fx"
import { playBlip } from "@/lib/audio"

const LINES = [
  "$ whoami",
  "ian: software engineer @ barclays, ex-NHS doctor, competitive programmer",
  "$ cat ~/.interests",
  "piano  violin  日本語  中文  travel  algorithms  oden",
  "$ ./climb --target fuji",
  "1 solved problem = 1 metre. keep going.",
]

function Typed() {
  const [text, setText] = useState("")
  useEffect(() => {
    const full = LINES.join("\n")
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(full)
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i = Math.min(full.length, i + 2)
      setText(full.slice(0, i))
      if (i < full.length) timer = setTimeout(step, full[i - 1] === "\n" ? 90 : 10 + Math.random() * 12)
    }
    timer = setTimeout(step, 300)
    return () => clearTimeout(timer)
  }, [])
  return (
    <pre className="min-h-[9.5rem] whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink sm:text-sm" aria-label={LINES.join(". ")}>
      <span aria-hidden>
        {text.split("\n").map((line, i, arr) => (
          <span key={i} className={line.startsWith("$") ? "text-phosphor" : "text-ink/90"}>
            {line}
            {i < arr.length - 1 ? "\n" : ""}
          </span>
        ))}
        <span className="blink text-phosphor">█</span>
      </span>
    </pre>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", String(((e.clientX - r.left) / r.width - 0.5) * 2))
      el.style.setProperty("--my", String(((e.clientY - r.top) / r.height - 0.5) * 2))
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  // Depth: how many pixels each mascot shifts with the pointer.
  const par = (d: number): React.CSSProperties => ({ transform: `translate(calc(var(--mx, 0) * ${d}px), calc(var(--my, 0) * ${d}px))`, transition: "transform 0.25s ease-out" })

  return (
    <header ref={ref} className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-28 pt-16 sm:px-10">
      {/* Mascots */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute left-[6%] top-0 w-14 sm:left-[10%] sm:w-20" style={par(-10)}>
          <Lantern className="sway w-full drop-shadow-[0_0_18px_rgba(255,60,60,0.55)]" />
        </div>
        <div className="absolute right-[8%] top-0 w-12 sm:right-[14%] sm:w-16" style={par(-14)}>
          <Lantern className="sway w-full drop-shadow-[0_0_18px_rgba(255,60,60,0.55)] [animation-delay:-2s]" />
        </div>
        <div className="absolute bottom-[9%] right-[27%] hidden w-24 md:block lg:w-32" style={par(16)}>
          <Oden className="float-slow w-full drop-shadow-[0_0_14px_rgba(255,180,84,0.45)]" />
        </div>
        <div className="absolute right-[10%] top-[24%] hidden w-24 lg:block" style={par(22)}>
          <Sushi className="float w-full drop-shadow-[0_0_12px_rgba(255,122,89,0.5)] [animation-delay:-3s]" />
        </div>
        <div className="absolute bottom-[12%] left-[3%] hidden w-16 md:block" style={par(-8)}>
          <Torii className="float-slow w-full drop-shadow-[0_0_14px_rgba(255,59,78,0.6)] [animation-delay:-1s]" />
        </div>
        <div className="absolute right-[26%] top-[14%] hidden w-14 text-phosphor opacity-80 lg:block" style={par(12)}>
          <Arch className="float w-full drop-shadow-[0_0_10px_var(--phosphor)] [animation-delay:-4s]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 font-pixel text-sm text-cyan sm:text-base">
              <span className="blink">▶</span> ようこそ // welcome // bienvenido
            </p>
            <h1 className="font-pixel text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="glitch neon" data-text={profile.name}>
                <Decrypt text={profile.name} />
              </span>
            </h1>
            <p className="mt-5 font-pixel text-lg text-ink sm:text-2xl">
              ソフトウェアエンジニア <span className="text-magenta">/</span> 元医師 <span className="text-magenta">/</span> 競技プログラマー
            </p>
            <div className="window neon-box mt-8 max-w-2xl">
              <div className="window-bar">
                <i style={{ background: "#ff5f57" }} />
                <i style={{ background: "#febc2e" }} />
                <i style={{ background: "#28c840" }} />
                <span className="ml-2">ian@isym.uk: ~</span>
              </div>
              <div className="p-4">
                <Typed />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="neon-box bg-phosphor/10 px-4 py-2 text-phosphor transition-all hover:bg-phosphor hover:text-void hover:shadow-[0_0_24px_var(--phosphor)]">
                github
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="border border-cyan/60 px-4 py-2 text-cyan transition-all hover:bg-cyan hover:text-void hover:shadow-[0_0_24px_var(--cyan)]">
                linkedin
              </a>
              <a href={profile.atcoder} target="_blank" rel="noopener noreferrer" className="border border-magenta/60 px-4 py-2 text-magenta transition-all hover:bg-magenta hover:text-void hover:shadow-[0_0_24px_var(--magenta)]">
                atcoder
              </a>
            </div>
          </div>

          <button
            type="button"
            aria-label="Poke the daruma"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              burst(r.left + r.width / 2, r.top + r.height / 3, 18)
              playBlip(660)
            }}
            className="group relative mx-auto w-40 shrink-0 md:mx-0 md:w-52"
            style={par(10)}
          >
            <Daruma left right className="float w-full cursor-pointer drop-shadow-[0_0_26px_rgba(255,59,78,0.55)] transition-transform group-active:scale-90" />
            <span className="mt-1 block text-center font-pixel text-xs text-muted">七転び八起き (poke me)</span>
          </button>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-phosphor">
        <ArrowDown className="float h-6 w-6" aria-hidden />
      </a>
    </header>
  )
}
