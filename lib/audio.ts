// Tiny WebAudio instruments. Sound only ever plays in response to a click or key press.
let ctx: AudioContext | null = null
let muted = false

try {
  muted = typeof localStorage !== "undefined" && localStorage.getItem("muted") === "1"
} catch {}

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === "suspended") void ctx.resume()
  return ctx
}

export const isMuted = () => muted
export function setMuted(value: boolean) {
  muted = value
  try {
    localStorage.setItem("muted", value ? "1" : "0")
  } catch {}
}

export function playPiano(freq: number) {
  const c = muted ? null : audio()
  if (!c) return
  const t = c.currentTime
  const out = c.createGain()
  const lp = c.createBiquadFilter()
  lp.type = "lowpass"
  lp.frequency.value = 3600
  out.gain.setValueAtTime(0.0001, t)
  out.gain.exponentialRampToValueAtTime(0.32, t + 0.006)
  out.gain.exponentialRampToValueAtTime(0.0001, t + 1.8)
  out.connect(lp).connect(c.destination)
  ;[[1, "triangle", 1], [2, "sine", 0.28], [3, "sine", 0.1], [4, "sine", 0.04]].forEach(([mult, type, level]) => {
    const o = c.createOscillator()
    const g = c.createGain()
    o.type = type as OscillatorType
    o.frequency.value = freq * (mult as number)
    g.gain.value = level as number
    o.connect(g).connect(out)
    o.start(t)
    o.stop(t + 1.9)
  })
}

export function playPluck(freq: number) {
  const c = muted ? null : audio()
  if (!c) return
  const t = c.currentTime
  const o = c.createOscillator()
  const o2 = c.createOscillator()
  const lp = c.createBiquadFilter()
  const g = c.createGain()
  o.type = "sawtooth"
  o2.type = "triangle"
  o.frequency.value = freq
  o2.frequency.value = freq * 2.003
  lp.type = "lowpass"
  lp.frequency.setValueAtTime(4200, t)
  lp.frequency.exponentialRampToValueAtTime(500, t + 0.5)
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(0.28, t + 0.004)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5)
  o.connect(lp)
  o2.connect(lp)
  lp.connect(g).connect(c.destination)
  o.start(t)
  o2.start(t)
  o.stop(t + 1.6)
  o2.stop(t + 1.6)
}

export function playBlip(freq = 880) {
  const c = muted ? null : audio()
  if (!c) return
  const t = c.currentTime
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = "square"
  o.frequency.setValueAtTime(freq, t)
  o.frequency.exponentialRampToValueAtTime(freq * 1.6, t + 0.08)
  g.gain.setValueAtTime(0.06, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
  o.connect(g).connect(c.destination)
  o.start(t)
  o.stop(t + 0.13)
}

// One octave from middle C.
export const KEYS = [
  { note: "C", freq: 261.63, black: false },
  { note: "C#", freq: 277.18, black: true },
  { note: "D", freq: 293.66, black: false },
  { note: "D#", freq: 311.13, black: true },
  { note: "E", freq: 329.63, black: false },
  { note: "F", freq: 349.23, black: false },
  { note: "F#", freq: 369.99, black: true },
  { note: "G", freq: 392.0, black: false },
  { note: "G#", freq: 415.3, black: true },
  { note: "A", freq: 440.0, black: false },
  { note: "A#", freq: 466.16, black: true },
  { note: "B", freq: 493.88, black: false },
  { note: "C5", freq: 523.25, black: false },
]

// Violin open strings, low to high: G3 D4 A4 E5.
export const VIOLIN_STRINGS = [196.0, 293.66, 440.0, 659.25]
