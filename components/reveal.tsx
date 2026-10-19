"use client"

import { useEffect, useRef } from "react"

// Adds `in` once the element scrolls into view, which plays the glitch-in animation.
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "li" | "header"
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in")
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const Component = Tag as React.ElementType
  return (
    <Component ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Component>
  )
}
