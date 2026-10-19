"use client"

import { useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { isMuted, setMuted } from "@/lib/audio"

const TRAIL = "あいうえおカキクケコ日月山川福夢"
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

// Cursor kana trail, the Konami code and the mute toggle.
export function Effects() {
  const [muted, setMutedState] = useState(false)
  useEffect(() => setMutedState(isMuted()), [])

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const fine = window.matchMedia("(pointer: fine)").matches
    let lastTrail = 0
    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (reduced || !fine || now - lastTrail < 55) return
      lastTrail = now
      const el = document.createElement("span")
      el.className = "trail"
      el.textContent = TRAIL[Math.floor(Math.random() * TRAIL.length)]
      el.style.left = `${e.clientX + 8}px`
      el.style.top = `${e.clientY + 8}px`
      el.style.fontSize = `${12 + Math.random() * 8}px`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 900)
    }

    let progress = 0
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0
      if (progress === KONAMI.length) {
        progress = 0
        const root = document.documentElement
        root.dataset.festival = root.dataset.festival === "on" ? "off" : "on"
      }
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => {
        setMuted(!muted)
        setMutedState(!muted)
      }}
      className="fixed right-4 top-4 z-50 flex items-center gap-2 border border-dim bg-void/80 px-3 py-1.5 text-xs text-phosphor backdrop-blur transition-colors hover:bg-phosphor/10"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
      <span>{muted ? "音 off" : "音 on"}</span>
    </button>
  )
}
