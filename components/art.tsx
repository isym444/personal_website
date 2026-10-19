// Hand-drawn SVG mascots. All use currentColor-free neon palettes so they glow on the dark page.
import { siArchlinux, siLinux } from "simple-icons"

type P = { className?: string; style?: React.CSSProperties }

export function Daruma({ left = true, right = false, className, style, onClick }: P & { left?: boolean; right?: boolean; onClick?: () => void }) {
  const pupil = (on: boolean): React.CSSProperties => ({
    transform: on ? "scale(1)" : "scale(0)",
    transformBox: "fill-box",
    transformOrigin: "center",
    transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  })
  return (
    <svg viewBox="0 0 120 132" className={className} style={style} role="img" aria-label="Daruma doll" onClick={onClick}>
      <ellipse cx="60" cy="127" rx="38" ry="4" fill="rgba(0,0,0,0.55)" />
      <path d="M60 6C96 6 114 38 114 72c0 38-22 54-54 54S6 110 6 72C6 38 24 6 60 6Z" fill="#b3101c" stroke="#ff5d6c" strokeWidth="2.5" />
      <path d="M60 11C88 11 103 36 105 62" fill="none" stroke="#ff9aa5" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 56c0-22 15-36 34-36s34 14 34 36c0 16-14 24-34 24S26 72 26 56Z" fill="#f8ecd5" />
      <circle cx="45" cy="52" r="10" fill="#fff" stroke="#14100c" strokeWidth="2" />
      <circle cx="75" cy="52" r="10" fill="#fff" stroke="#14100c" strokeWidth="2" />
      <circle cx="45" cy="52" r="5.5" fill="#14100c" style={pupil(left)} />
      <circle cx="75" cy="52" r="5.5" fill="#14100c" style={pupil(right)} />
      <path d="M26 36Q44 16 58 33M62 33Q76 16 94 36" fill="none" stroke="#14100c" strokeWidth="5" strokeLinecap="round" />
      <path d="M57 58q3 5 6 0" fill="none" stroke="#14100c" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 66Q45 80 58 66M62 66Q75 80 90 66" fill="none" stroke="#14100c" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 92Q60 104 98 92" fill="none" stroke="#ffd166" strokeWidth="2" />
      <text x="60" y="116" textAnchor="middle" fontSize="26" fill="#ffd166" fontFamily="serif">福</text>
    </svg>
  )
}

export function Sushi({ className, style, fish = "#ff7a59" }: P & { fish?: string }) {
  return (
    <svg viewBox="0 0 100 62" className={className} style={style} role="img" aria-label="Sushi">
      <ellipse cx="50" cy="55" rx="47" ry="5" fill="none" stroke="#19e3ff" strokeWidth="1.5" strokeOpacity="0.8" />
      <rect x="12" y="30" width="76" height="22" rx="11" fill="#f6f2ea" stroke="#ffffff" strokeOpacity="0.6" />
      <path d="M8 32C20 8 80 8 92 32C70 40 30 40 8 32Z" fill={fish} stroke="#fff" strokeOpacity="0.5" />
      <path d="M26 24C38 28 50 28 62 22M34 31C46 34 58 33 70 27" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="46" y="14" width="10" height="38" rx="1" fill="#0b2a1c" stroke="#3dff8b" strokeOpacity="0.6" />
    </svg>
  )
}

export function Oden({ className, style }: P) {
  return (
    <svg viewBox="0 0 130 112" className={className} style={style} role="img" aria-label="Oden">
      <g fill="none" stroke="#ffd9a0" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M44 24c-6-6 6-10 0-16" />
        <path d="M65 22c-6-6 6-10 0-16" />
        <path d="M86 24c-6-6 6-10 0-16" />
      </g>
      <g stroke="#c8a06a" strokeWidth="2.5" strokeLinecap="round">
        <path d="M40 34V62" />
        <path d="M65 28V62" />
        <path d="M90 34V62" />
      </g>
      <circle cx="40" cy="50" r="11" fill="#f3efe4" stroke="#fff" />
      <ellipse cx="65" cy="44" rx="10" ry="13" fill="#fdf5dc" stroke="#fff" />
      <circle cx="65" cy="46" r="5.5" fill="#ffb627" />
      <path d="M90 38l11 20H79Z" fill="#f6dcc6" stroke="#fff" />
      <path d="M81 55h18" stroke="#ff8aa1" strokeWidth="3" />
      <path d="M10 60H120L111 99Q109 108 99 108H31Q21 108 19 99Z" fill="#26170c" stroke="#ffb454" strokeWidth="2.5" />
      <ellipse cx="65" cy="60" rx="55" ry="7" fill="#9a5a14" stroke="#ffb454" strokeWidth="2" />
      <path d="M26 78h78M30 90h70" stroke="#ffb454" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Lantern({ className, style }: P) {
  return (
    <svg viewBox="0 0 60 110" className={className} style={style} role="img" aria-label="Chinese lantern">
      <path d="M30 0V16" stroke="#ffcf4a" strokeWidth="2" />
      <rect x="18" y="16" width="24" height="6" rx="2" fill="#ffcf4a" />
      <ellipse cx="30" cy="52" rx="26" ry="31" fill="#c8102e" stroke="#ff6b6b" strokeWidth="2" />
      <path d="M30 21V83M18 24C10 44 10 62 18 80M42 24C50 44 50 62 42 80" fill="none" stroke="#ff9d9d" strokeOpacity="0.55" />
      <text x="30" y="60" textAnchor="middle" fontSize="22" fill="#ffd166" fontFamily="serif">福</text>
      <rect x="18" y="82" width="24" height="6" rx="2" fill="#ffcf4a" />
      <path d="M24 88v16M30 88v20M36 88v16" stroke="#ffcf4a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Torii({ className, style, width, height }: P & { width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 80 70" width={width} height={height} className={className} style={style} role="img" aria-label="Torii gate">
      <path d="M4 14Q40 4 76 14" fill="none" stroke="#ff3b4e" strokeWidth="6" strokeLinecap="round" />
      <path d="M12 28H68" stroke="#ff3b4e" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 14V66M60 14V66" stroke="#ff3b4e" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function Plane({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      <path d="M21 3 3 10l6 2.5L11.5 19l2-5.5L21 3Z" fill="#19e3ff" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

export function Arch({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} role="img" aria-label="Arch Linux logo">
      <path d={siArchlinux.path} fill="currentColor" />
    </svg>
  )
}

export function Tux({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} role="img" aria-label="Linux penguin">
      <path d={siLinux.path} fill="currentColor" />
    </svg>
  )
}

export function Violin({ onPluck, vibrating, className }: { onPluck: (string: number) => void; vibrating: number | null; className?: string }) {
  const xs = [50, 57, 63, 70]
  return (
    <svg viewBox="0 0 120 232" className={className} role="group" aria-label="Violin: click a string to pluck it">
      <g transform="rotate(-14 60 120)">
        <circle cx="60" cy="10" r="7" fill="#7a3b12" stroke="#ffb454" />
        <rect x="55" y="14" width="10" height="64" rx="2" fill="#2b1608" stroke="#ffb454" strokeOpacity="0.7" />
        <path
          d="M60 66C34 66 28 92 42 108C26 120 24 152 40 172C50 188 70 188 80 172C96 152 94 120 78 108C92 92 86 66 60 66Z"
          fill="#9a4a14"
          stroke="#ffb454"
          strokeWidth="2.5"
        />
        <path d="M60 74C42 74 38 94 49 106" fill="none" stroke="#ffd9a0" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
        <path d="M47 118c-3 8-3 16 0 24M73 118c3 8 3 16 0 24" fill="none" stroke="#1a0c04" strokeWidth="3" strokeLinecap="round" />
        <rect x="46" y="154" width="28" height="4" rx="1" fill="#ffd9a0" />
        <rect x="52" y="176" width="16" height="9" rx="2" fill="#2b1608" stroke="#ffb454" strokeOpacity="0.6" />
        {xs.map((x, i) => (
          <g key={i} onClick={() => onPluck(i)} className="cursor-pointer">
            <rect x={x - 3.5} y="14" width="7" height="146" fill="transparent" />
            <line
              key={vibrating === i ? `v${i}` : `s${i}`}
              x1={x}
              y1="14"
              x2={x}
              y2="160"
              stroke="#ffe9bf"
              strokeWidth={i === 0 ? 1.9 : i === 1 ? 1.6 : 1.3}
              strokeLinecap="round"
              className={vibrating === i ? "string-vibrate" : ""}
            />
          </g>
        ))}
      </g>
      <g transform="rotate(34 60 120)">
        <line x1="-6" y1="124" x2="130" y2="124" stroke="#19e3ff" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <line x1="-6" y1="127" x2="130" y2="127" stroke="#fff" strokeWidth="0.6" opacity="0.5" />
      </g>
    </svg>
  )
}

// Mt Fuji: body, snowcap and the switchback route the climber follows.
export const FUJI_BODY = "M6 160C50 150 100 100 134 44Q140 36 148 38L172 38Q180 36 186 44C220 100 270 150 314 160Z"
export const FUJI_SNOW = "M134 44Q140 36 148 38L172 38Q180 36 186 44L178 56L170 46L162 60L154 47L146 58L140 48Z"
export const FUJI_ROUTE = "M40 155L86 134L74 126L104 104L108 94L124 72L130 62L148 42"
