const KANA = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん福運夢愛楽"

export function burst(x: number, y: number, count = 14) {
  if (typeof document === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span")
    el.className = "confetti font-pixel"
    el.textContent = KANA[Math.floor(Math.random() * KANA.length)]
    const angle = Math.random() * Math.PI * 2
    const dist = 50 + Math.random() * 110
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.fontSize = `${14 + Math.random() * 14}px`
    el.style.color = ["var(--phosphor)", "var(--cyan)", "var(--magenta)", "var(--gold)"][i % 4]
    el.style.setProperty("--dx", `${Math.cos(angle) * dist}px`)
    el.style.setProperty("--dy", `${Math.sin(angle) * dist - 30}px`)
    el.style.setProperty("--rot", `${(Math.random() - 0.5) * 240}deg`)
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1500)
  }
}
