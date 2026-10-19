// Cultural symbols and places from my history. Each is a 80x80 neon line drawing.
import type { ReactNode } from "react"

const L = { strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" } as const

function star(cx: number, cy: number, R: number, r: number, n: number, rot = -90) {
  return Array.from({ length: n * 2 }, (_, i) => {
    const a = ((rot + (i * 180) / n) * Math.PI) / 180
    const d = i % 2 === 0 ? R : r
    return `${(cx + Math.cos(a) * d).toFixed(1)},${(cy + Math.sin(a) * d).toFixed(1)}`
  }).join(" ")
}

/* ------------------------------------------------------------------ Mexico */

function Lucha() {
  return (
    <>
      <path d="M40 7C22 7 14 24 16 42C18 60 27 73 40 73C53 73 62 60 64 42C66 24 58 7 40 7Z" fill="#2a0f3a" stroke="#ff3da6" {...L} />
      <path d="M20 29L36 34L33 44L19 39Z" fill="#fff" stroke="#ffcf4a" strokeWidth="1.6" />
      <path d="M60 29L44 34L47 44L61 39Z" fill="#fff" stroke="#ffcf4a" strokeWidth="1.6" />
      <path d="M31 56Q40 65 49 56Q40 52 31 56Z" fill="#fff" stroke="#ffcf4a" strokeWidth="1.6" />
      <path d="M40 9L45 22L40 31L35 22Z" fill="#ffcf4a" />
      <path d="M17 46Q28 58 36 66M63 46Q52 58 44 66" fill="none" stroke="#19e3ff" strokeWidth="1.6" strokeLinecap="round" />
      <polygon points={star(26, 52, 3.4, 1.5, 5)} fill="#19e3ff" />
      <polygon points={star(54, 52, 3.4, 1.5, 5)} fill="#19e3ff" />
    </>
  )
}

function Pinata() {
  const tips = Array.from({ length: 7 }, (_, i) => {
    const a = ((-90 + (i * 360) / 7) * Math.PI) / 180
    return [40 + Math.cos(a) * 30, 46 + Math.sin(a) * 30] as const
  })
  const colours = ["#ff3da6", "#19e3ff", "#ffcf4a", "#3dff8b", "#ff3b4e", "#19e3ff", "#ffcf4a"]
  return (
    <>
      <path d="M40 0V16" stroke="#e6fff0" strokeWidth="1.6" />
      <polygon points={star(40, 46, 30, 14, 7)} fill="#2a1038" stroke="#ff3da6" {...L} />
      {tips.map(([x, y], i) => (
        <g key={i} stroke={colours[i]} strokeWidth="2" strokeLinecap="round">
          <path d={`M${(40 + (x - 40) * 0.55).toFixed(1)} ${(46 + (y - 46) * 0.55).toFixed(1)}L${x.toFixed(1)} ${y.toFixed(1)}`} />
          <path d={`M${(40 + (x - 40) * 0.8).toFixed(1)} ${(46 + (y - 46) * 0.8 - 3).toFixed(1)}L${(x + 3).toFixed(1)} ${(y - 3).toFixed(1)}M${(40 + (x - 40) * 0.8).toFixed(1)} ${(46 + (y - 46) * 0.8 + 3).toFixed(1)}L${(x - 3).toFixed(1)} ${(y + 3).toFixed(1)}`} />
        </g>
      ))}
      <circle cx="40" cy="46" r="7" fill="#ffcf4a" stroke="#fff" strokeWidth="1.2" />
    </>
  )
}

function Cajeta() {
  return (
    <>
      <rect x="25" y="12" width="30" height="9" rx="2" fill="#ffcf4a" stroke="#fff" strokeWidth="1.2" />
      <path d="M24 22H56V64Q56 73 47 73H33Q24 73 24 64Z" fill="#8a4a12" stroke="#ffb454" {...L} />
      <path d="M24 22C28 30 30 26 34 34C38 28 44 34 48 28C52 34 54 28 56 24" fill="none" stroke="#d98a2b" strokeWidth="3" strokeLinecap="round" />
      <rect x="28" y="38" width="24" height="20" rx="2" fill="#f6e7cf" stroke="#ffb454" strokeWidth="1.2" />
      <text x="40" y="51" textAnchor="middle" fontSize="6.4" fill="#7a3b12" fontFamily="var(--font-code), monospace" fontWeight="700">CAJETA</text>
      <path d="M30 26V64" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Pozole() {
  return (
    <>
      <g fill="none" stroke="#ffd9d0" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M28 26c-5-5 5-8 0-13M42 24c-5-5 5-8 0-13M56 26c-5-5 5-8 0-13" />
      </g>
      <path d="M8 40H72Q70 64 40 67Q10 64 8 40Z" fill="#2e0d0d" stroke="#ff6b6b" {...L} />
      <ellipse cx="40" cy="40" rx="32" ry="8" fill="#c9302a" stroke="#ff8a7a" strokeWidth="1.6" />
      {[[26, 39], [36, 42], [46, 38], [54, 42], [31, 36], [48, 43], [40, 37]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#fff7e3" stroke="#e8d9b0" strokeWidth="0.8" />
      ))}
      <circle cx="60" cy="36" r="5" fill="#ff9ec7" stroke="#fff" strokeWidth="1" />
      <path d="M57 36H63M60 33V39" stroke="#fff" strokeWidth="0.8" />
      <path d="M12 34Q18 28 24 34Z" fill="#3dff8b" stroke="#fff" strokeWidth="0.8" />
      <path d="M52 30A8 8 0 0 1 68 30Z" fill="#7dff4a" stroke="#fff" strokeWidth="1" transform="rotate(8 60 30)" />
    </>
  )
}

function Tamales() {
  return (
    <>
      <g transform="rotate(-16 32 44)">
        <rect x="10" y="30" width="44" height="26" rx="12" fill="#e6cf94" stroke="#ffe9a8" {...L} />
        <path d="M14 38H50M12 44H52M14 50H50" stroke="#b79a52" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M20 31V55M44 31V55" stroke="#c0392b" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <g transform="rotate(14 54 54)">
        <rect x="32" y="44" width="40" height="22" rx="10" fill="#d9bf7d" stroke="#ffe9a8" {...L} />
        <path d="M37 52H67M35 58H69" stroke="#a98a44" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M40 45V65M64 45V65" stroke="#19e3ff" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <g fill="none" stroke="#fff3c4" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M22 22c-4-4 4-6 0-11M34 20c-4-4 4-6 0-11" />
      </g>
    </>
  )
}

function Tacos() {
  return (
    <>
      <path d="M26 30l4-8 4 8 4-9 4 9 4-8 4 8 4-9 4 9" fill="none" stroke="#3dff8b" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      {[[28, 31], [38, 28], [48, 31], [58, 28]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="5" height="5" fill="#ff3b4e" stroke="#fff" strokeWidth="0.6" transform={`rotate(${i * 20} ${x + 2} ${y + 2})`} />
      ))}
      {[[34, 34], [52, 33], [44, 34]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill="#fff" opacity="0.9" />
      ))}
      <path d="M6 58C6 34 24 26 40 26C56 26 74 34 74 58Z" fill="#c98a1a" fillOpacity="0.85" stroke="#ffe08a" {...L} />
      <path d="M12 52Q40 38 68 52" fill="none" stroke="#7a4d0a" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 22C36 17 44 17 50 22" fill="none" stroke="#7dff4a" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M58 60l8-6M52 62l12-9" stroke="#7dff4a" strokeWidth="2.2" strokeLinecap="round" />
    </>
  )
}

function PiramideSol() {
  return (
    <>
      <circle cx="40" cy="12" r="6" fill="#ffcf4a" stroke="#fff" strokeWidth="1" />
      <path d="M40 1V3M29 12H31M49 12H51M32 4l1.5 1.5M48 4l-1.5 1.5" stroke="#ffcf4a" strokeWidth="1.6" strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => {
        const half = 32 - i * 5.5
        const yb = 70 - i * 10
        return <polygon key={i} points={`${40 - half},${yb} ${40 + half},${yb} ${40 + half - 3},${yb - 10} ${40 - half + 3},${yb - 10}`} fill="#4a2a14" stroke="#ffb454" strokeWidth="1.8" strokeLinejoin="round" />
      })}
      <path d="M34 70L37 22M46 70L43 22M35 60H45M36 50H44M37 40H43M38 31H42" fill="none" stroke="#ffd9a0" strokeWidth="1.3" strokeLinecap="round" />
    </>
  )
}

function Azteca() {
  const feathers = [-72, -54, -36, -18, 0, 18, 36, 54, 72]
  const colours = ["#19e3ff", "#3dff8b", "#ffcf4a", "#ff3b4e", "#ffcf4a", "#ff3b4e", "#ffcf4a", "#3dff8b", "#19e3ff"]
  return (
    <>
      {feathers.map((a, i) => (
        <ellipse key={a} cx="40" cy={52 - (i === 4 ? 24 : 20)} rx="4.8" ry={i === 4 ? 24 : 20} transform={`rotate(${a} 40 56)`} fill={colours[i]} fillOpacity="0.28" stroke={colours[i]} strokeWidth="1.8" />
      ))}
      <rect x="16" y="54" width="48" height="11" rx="3" fill="#0d3b33" stroke="#1fd1a8" {...L} />
      {[22, 31, 40, 49, 58].map((x) => (
        <circle key={x} cx={x} cy="59.5" r="2.6" fill="#1fd1a8" stroke="#fff" strokeWidth="0.7" />
      ))}
      <circle cx="40" cy="59.5" r="5" fill="#ffcf4a" stroke="#fff" strokeWidth="1" />
    </>
  )
}

function UnamLibrary() {
  const palette = ["#b5552b", "#d9a441", "#6b8e4e", "#3f7ea6", "#8a3b2a", "#e0c48a"]
  return (
    <>
      <rect x="10" y="62" width="60" height="9" fill="#2b2118" stroke="#ffb454" strokeWidth="1.6" />
      <rect x="22" y="6" width="36" height="58" fill="#2b2118" stroke="#ffb454" {...L} />
      {Array.from({ length: 11 }, (_, j) =>
        Array.from({ length: 6 }, (_, i) => (
          <rect key={`${i}-${j}`} x={23.5 + i * 5.7} y={7.5 + j * 5.1} width="4.6" height="4.2" fill={palette[(i * 3 + j * 5 + ((i * j) % 3)) % palette.length]} opacity="0.9" />
        )),
      )}
      <circle cx="40" cy="26" r="9" fill="#1a1208" stroke="#ffcf4a" strokeWidth="2" />
      <circle cx="40" cy="26" r="5" fill="#ffcf4a" stroke="#c0392b" strokeWidth="1.4" />
    </>
  )
}

/* ------------------------------------------------- UK, music, medicine, CP */

function KingsCollege() {
  return (
    <>
      {[10, 70].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="22" width="10" height="38" fill="#2a2618" stroke="#e6dcc0" strokeWidth="1.8" />
          <polygon points={`${x - 5},22 ${x + 5},22 ${x},8`} fill="#2a2618" stroke="#e6dcc0" strokeWidth="1.8" strokeLinejoin="round" />
          <path d={`M${x} 8V4M${x - 2} 6H${x + 2}`} stroke="#ffcf4a" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}
      <rect x="15" y="32" width="50" height="28" fill="#2a2618" stroke="#e6dcc0" strokeWidth="1.8" />
      <path d="M15 32H65" stroke="#e6dcc0" strokeWidth="3" />
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M${19 + i * 6.3} 58V42A2.4 4 0 0 1 ${24 + i * 6.3} 42V58Z`} fill="#19e3ff" fillOpacity="0.35" stroke="#e6dcc0" strokeWidth="1.2" />
      ))}
      {[17, 30, 43, 56].map((x) => (
        <path key={x} d={`M${x} 32L${x + 1.5} 28L${x + 3} 32`} fill="none" stroke="#e6dcc0" strokeWidth="1.4" />
      ))}
      <path d="M8 60H72M12 66H68" stroke="#e6dcc0" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </>
  )
}

function GlasgowUni() {
  return (
    <>
      <rect x="7" y="46" width="24" height="22" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <rect x="49" y="46" width="24" height="22" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <rect x="30" y="30" width="20" height="38" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <polygon points="30,30 50,30 40,3" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M40 3V0M40 12V30M35 20L40 30L45 20" stroke="#e8c98a" strokeWidth="1.2" fill="none" />
      {[7, 66].map((x) => (
        <g key={x}>
          <rect x={x} y="36" width="7" height="10" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.4" />
          <polygon points={`${x},36 ${x + 7},36 ${x + 3.5},26`} fill="#2a2418" stroke="#e8c98a" strokeWidth="1.4" strokeLinejoin="round" />
        </g>
      ))}
      {[12, 20, 54, 62].map((x) => (
        <path key={x} d={`M${x} 62V54A2.5 4 0 0 1 ${x + 5} 54V62Z`} fill="#ffcf4a" fillOpacity="0.45" stroke="#e8c98a" strokeWidth="1" />
      ))}
      <path d={`M35 62V50A5 7 0 0 1 45 50V62Z`} fill="#19e3ff" fillOpacity="0.35" stroke="#e8c98a" strokeWidth="1.3" />
      <path d="M4 68H76" stroke="#e8c98a" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function RoyalCollegeMusic() {
  return (
    <>
      <rect x="8" y="34" width="64" height="34" fill="#4a1a12" stroke="#ff7a59" strokeWidth="1.8" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M8 ${40 + i * 5}H72`} stroke="#ff7a59" strokeOpacity="0.25" strokeWidth="1" />
      ))}
      <polygon points="26,34 54,34 40,12" fill="#4a1a12" stroke="#ff7a59" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M32 34L40 18L48 34" fill="none" stroke="#e8d6b0" strokeWidth="1.2" />
      {[[8, 20], [60, 20]].map(([x]) => (
        <g key={x}>
          <rect x={x} y="22" width="12" height="46" fill="#4a1a12" stroke="#ff7a59" strokeWidth="1.8" />
          <polygon points={`${x - 1},22 ${x + 13},22 ${x + 6},6`} fill="#2a0e0a" stroke="#ffcf4a" strokeWidth="1.8" strokeLinejoin="round" />
          <path d={`M${x + 4} 32V40M${x + 8} 32V40`} stroke="#ffcf4a" strokeWidth="1.6" />
        </g>
      ))}
      {[24, 31, 38, 45, 52].map((x) => (
        <path key={x} d={`M${x} 64V50A2.2 3.4 0 0 1 ${x + 4.4} 50V64Z`} fill="#ffcf4a" fillOpacity="0.4" stroke="#e8d6b0" strokeWidth="1" />
      ))}
      <text x="40" y="28" textAnchor="middle" fontSize="9" fill="#ffcf4a">♪</text>
    </>
  )
}

function AlbertHall() {
  return (
    <>
      <path d="M18 38Q18 14 40 14Q62 14 62 38Z" fill="#12303a" stroke="#19e3ff" {...L} />
      <path d="M40 14V38M30 16.5Q28 28 30 38M50 16.5Q52 28 50 38M23 24Q22 32 23 38M57 24Q58 32 57 38" fill="none" stroke="#19e3ff" strokeOpacity="0.6" strokeWidth="1.1" />
      <rect x="37" y="7" width="6" height="7" fill="#12303a" stroke="#19e3ff" strokeWidth="1.4" />
      <rect x="8" y="38" width="64" height="26" fill="#4a1812" stroke="#ff6b6b" strokeWidth="1.8" />
      <path d="M8 46H72" stroke="#e8c98a" strokeWidth="3" />
      <path d="M8 49H72" stroke="#e8c98a" strokeOpacity="0.5" strokeWidth="1" />
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M${12 + i * 5.6} 62V56A2 3 0 0 1 ${16 + i * 5.6} 56V62Z`} fill="#ffcf4a" fillOpacity="0.45" stroke="#e8c98a" strokeWidth="0.9" />
      ))}
      <path d="M4 64H76M10 70H70" stroke="#e8c98a" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function KIT() {
  return (
    <>
      <polygon points="6,66 24,66 15,46" fill="#10242c" stroke="#e6dcc0" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="26" y="30" width="48" height="36" fill="#0e2630" stroke="#19e3ff" {...L} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect key={`${r}${c}`} x={30 + c * 8.6} y={42 + r * 6} width="6" height="3.6" fill="#19e3ff" fillOpacity={(r + c) % 3 === 0 ? 0.7 : 0.25} />
        )),
      )}
      <text x="50" y="38.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#3dff8b" fontFamily="var(--font-pixel), monospace">KIT</text>
      <path d="M4 68H76" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function IcpcBalloons() {
  const b: [number, number, string][] = [[22, 28, "#ff3b4e"], [40, 20, "#19e3ff"], [58, 28, "#ffcf4a"], [30, 44, "#3dff8b"], [50, 44, "#ff3da6"]]
  return (
    <>
      {b.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y + 11}Q${x < 40 ? 36 : x > 40 ? 44 : 40} 62 40 78`} fill="none" stroke="#e6fff0" strokeOpacity="0.7" strokeWidth="1.2" />
      ))}
      {b.map(([x, y, c], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="10" ry="12" fill={c} fillOpacity="0.28" stroke={c} strokeWidth="2" />
          <path d={`M${x - 3} ${y + 11}L${x} ${y + 15}L${x + 3} ${y + 11}Z`} fill={c} />
          <path d={`M${x - 6} ${y - 4}Q${x - 6} ${y - 8} ${x - 2} ${y - 9}`} fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
    </>
  )
}

function IcpcBadge() {
  return (
    <>
      <path d="M40 6L68 22V58L40 74L12 58V22Z" fill="#0e1a2a" stroke="#19e3ff" {...L} />
      <path d="M40 12L63 25V55L40 68L17 55V25Z" fill="none" stroke="#19e3ff" strokeOpacity="0.4" strokeWidth="1" />
      <text x="40" y="45" textAnchor="middle" fontSize="15" fontWeight="700" fill="#e6fff0" fontFamily="var(--font-pixel), monospace">ICPC</text>
      <path d="M24 52H56" stroke="#ffcf4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 57H50" stroke="#ff3b4e" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Stethoscope() {
  return (
    <>
      <circle cx="22" cy="8" r="3" fill="#e6fff0" />
      <circle cx="52" cy="8" r="3" fill="#e6fff0" />
      <path d="M22 11C22 34 30 40 37 42C44 40 52 34 52 11" fill="none" stroke="#19e3ff" strokeWidth="3" strokeLinecap="round" />
      <path d="M37 42V52C37 64 46 68 52 64" fill="none" stroke="#19e3ff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="58" cy="62" r="9" fill="#0e2630" stroke="#e6fff0" strokeWidth="2.4" />
      <circle cx="58" cy="62" r="4" fill="#19e3ff" fillOpacity="0.5" stroke="#19e3ff" strokeWidth="1.4" />
      <path d="M37 42L37 40" stroke="#19e3ff" strokeWidth="4" strokeLinecap="round" />
    </>
  )
}

function Brain() {
  return (
    <>
      <path d="M20 44C10 40 10 26 20 22C22 11 36 8 42 14C50 8 64 12 64 22C74 26 72 40 62 44C62 54 50 58 44 54C38 62 26 58 26 50C22 50 20 48 20 44Z" fill="#2a0f2a" stroke="#ff3da6" {...L} />
      <path d="M28 24C34 20 38 26 42 22M44 30C50 26 56 32 60 28M24 34C30 30 36 38 40 34M46 40C52 36 58 42 62 38M30 44C34 40 40 46 46 44" fill="none" stroke="#ff9ec7" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 54C50 62 58 62 60 56C56 56 52 54 50 52" fill="#3a1038" stroke="#ff3da6" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M36 58L34 72" stroke="#ff3da6" strokeWidth="3" strokeLinecap="round" />
      {[[30, 30], [46, 24], [56, 36], [38, 42], [24, 38]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="2" fill="#19e3ff" />
          <circle cx={x} cy={y} r="2" fill="none" stroke="#19e3ff" className="pulse-ring" style={{ animationDelay: `${i * 0.45}s` }} />
        </g>
      ))}
      <path d="M30 30L46 24L56 36L38 42L24 38L30 30M46 24L38 42" fill="none" stroke="#19e3ff" strokeOpacity="0.55" strokeWidth="1" />
    </>
  )
}

/* ------------------------------------------------------------------- Asia */

function Dazaifu() {
  const blossom = (x: number, y: number, s = 1) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="0" cy="-3.6" r="2.6" fill="#ff9ec7" stroke="#fff" strokeWidth="0.5" transform={`rotate(${a})`} />
      ))}
      <circle r="1.4" fill="#ffcf4a" />
    </g>
  )
  return (
    <>
      <path d="M2 14C14 8 24 12 34 6" fill="none" stroke="#c98a5a" strokeWidth="2" strokeLinecap="round" />
      {blossom(10, 12)}
      {blossom(22, 9, 0.85)}
      {blossom(31, 7, 0.7)}
      <path d="M6 44C22 42 28 32 40 26C52 32 58 42 74 44L68 49H12Z" fill="#2a1010" stroke="#ff6b6b" {...L} />
      <path d="M40 26V22M36 24H44" stroke="#ffcf4a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 49V64M30 49V64M50 49V64M64 49V64" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 54H68" stroke="#ffcf4a" strokeWidth="1.6" />
      <path d="M10 64H70V70H10Z" fill="#2a1010" stroke="#e6dcc0" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M34 64V56H46V64" fill="#1a0808" stroke="#ffcf4a" strokeWidth="1.4" />
    </>
  )
}

function Umegae() {
  return (
    <>
      <g fill="none" stroke="#fff3d6" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M30 24c-4-4 4-6 0-11M42 22c-4-4 4-6 0-11M54 24c-4-4 4-6 0-11" />
      </g>
      <ellipse cx="40" cy="64" rx="34" ry="8" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.8" />
      <ellipse cx="40" cy="48" rx="28" ry="16" fill="#e9d7ae" stroke="#fff3d6" {...L} />
      {[[24, 44, 4], [56, 46, 3.5], [34, 56, 3], [50, 54, 4], [44, 38, 3], [28, 52, 2.5]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#b9803c" fillOpacity="0.5" />
      ))}
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="40" cy="43" r="4.6" fill="none" stroke="#9a5f24" strokeWidth="1.6" transform={`rotate(${a} 40 48) translate(0 -2)`} />
      ))}
      <circle cx="40" cy="48" r="2" fill="#9a5f24" />
    </>
  )
}

function Taipei101() {
  return (
    <>
      <path d="M40 2V12M38 6H42" stroke="#ffcf4a" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36 22L40 12L44 22Z" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.6" strokeLinejoin="round" />
      {Array.from({ length: 8 }, (_, i) => {
        const yb = 62 - i * 5.6
        const yt = yb - 5.4
        const bot = 7.5 - i * 0.35
        const top = bot + 2.6
        return (
          <g key={i}>
            <polygon points={`${40 - bot},${yb} ${40 + bot},${yb} ${40 + top},${yt} ${40 - top},${yt}`} fill="#0e2e36" stroke="#19e3ff" strokeWidth="1.6" strokeLinejoin="round" />
            <path d={`M${40 - top} ${yt}H${40 + top}`} stroke="#ffcf4a" strokeWidth="1.6" />
          </g>
        )
      })}
      <rect x="27" y="62" width="26" height="8" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.6" />
      <path d="M4 70H76" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function HongKong() {
  const win = (x: number, y: number, w: number, h: number, cols: number, rows: number) =>
    Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (
        <rect key={`${x}-${r}-${c}`} x={x + 1.6 + c * ((w - 3.2) / cols)} y={y + 3 + r * ((h - 6) / rows)} width="1.5" height="1.5" fill="#ffcf4a" fillOpacity={(r + c) % 2 ? 0.8 : 0.35} />
      )),
    )
  return (
    <>
      <path d="M2 60L16 40L26 48L36 30L48 44L60 36L78 60Z" fill="#0a1a22" stroke="#19e3ff" strokeOpacity="0.45" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="6" y="46" width="9" height="20" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.5" />
      <polygon points="17,66 17,34 22,26 27,34 27,66" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M22 26V16M17 40L27 40M17 48L27 48" stroke="#19e3ff" strokeWidth="1.2" />
      <polygon points="29,66 29,14 40,6 44,14 44,66" fill="#0e2630" stroke="#3dff8b" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="46" y="38" width="10" height="28" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.5" />
      <polygon points="58,66 58,26 63,22 68,26 68,66" fill="#0e2630" stroke="#ff3da6" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M63 22V10M60 14H66" stroke="#ff3da6" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="70" y="46" width="8" height="20" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.5" />
      {win(29, 14, 15, 52, 4, 8)}
      {win(17, 34, 10, 32, 3, 5)}
      {win(58, 26, 10, 40, 3, 6)}
      <path d="M2 69C8 66 12 72 18 69C24 66 28 72 34 69C40 66 44 72 50 69C56 66 60 72 66 69C72 66 76 72 78 69" fill="none" stroke="#19e3ff" strokeWidth="1.6" strokeLinecap="round" />
    </>
  )
}

/* ----------------------------------------------------------- registry etc. */

export type SymbolKey =
  | "lucha" | "pinata" | "cajeta" | "pozole" | "tamales" | "tacos" | "piramide" | "azteca" | "unam"
  | "kings" | "glasgow" | "rcm" | "hall" | "kit" | "icpcb" | "icpc" | "steth" | "brain"
  | "dazaifu" | "umegae" | "taipei" | "hk"

export const SYMBOLS: Record<SymbolKey, { label: string; caption: string; accent: string; Art: () => ReactNode }> = {
  lucha: { label: "Máscara de lucha libre", caption: "Máscara de lucha libre. Losing the mask is the ultimate defeat.", accent: "#ff3da6", Art: Lucha },
  pinata: { label: "Piñata", caption: "Piñata: swing blindfolded, share the candy.", accent: "#ffcf4a", Art: Pinata },
  cajeta: { label: "Cajeta", caption: "Cajeta: goat's milk caramel.", accent: "#ffb454", Art: Cajeta },
  pozole: { label: "Pozole", caption: "Pozole: hominy stew, red, green or white.", accent: "#ff6b6b", Art: Pozole },
  tamales: { label: "Tamales", caption: "Tamales: masa steamed in corn husks.", accent: "#ffe9a8", Art: Tamales },
  tacos: { label: "Tacos", caption: "Tacos. Obviously.", accent: "#ffcf4a", Art: Tacos },
  piramide: { label: "Pirámide del Sol", caption: "Pirámide del Sol, Teotihuacan.", accent: "#ffb454", Art: PiramideSol },
  azteca: { label: "Atuendo azteca", caption: "Atuendo azteca: a feathered headdress.", accent: "#1fd1a8", Art: Azteca },
  unam: { label: "Biblioteca Central, UNAM", caption: "Biblioteca Central, UNAM: Juan O'Gorman's mosaic library.", accent: "#d9a441", Art: UnamLibrary },
  kings: { label: "King's College, Cambridge", caption: "King's College Chapel, Cambridge.", accent: "#e6dcc0", Art: KingsCollege },
  glasgow: { label: "University of Glasgow", caption: "University of Glasgow, Gilbert Scott Building.", accent: "#e8c98a", Art: GlasgowUni },
  rcm: { label: "Royal College of Music", caption: "Royal College of Music, London.", accent: "#ff7a59", Art: RoyalCollegeMusic },
  hall: { label: "Royal Albert Hall", caption: "Royal Albert Hall, London.", accent: "#19e3ff", Art: AlbertHall },
  kit: { label: "Karlsruhe Institute of Technology", caption: "Karlsruhe Institute of Technology.", accent: "#19e3ff", Art: KIT },
  icpcb: { label: "ICPC balloons", caption: "ICPC balloons: one for every problem solved.", accent: "#ff3b4e", Art: IcpcBalloons },
  icpc: { label: "ICPC", caption: "ICPC: the International Collegiate Programming Contest.", accent: "#19e3ff", Art: IcpcBadge },
  steth: { label: "Stethoscope", caption: "Stethoscope: NHS doctor, 2021 to 2023.", accent: "#19e3ff", Art: Stethoscope },
  brain: { label: "Neuroscience", caption: "Neuroscience: the brain, the original neural network.", accent: "#ff3da6", Art: Brain },
  dazaifu: { label: "Dazaifu Tenmangū", caption: "Dazaifu Tenmangū, Fukuoka: shrine of Tenjin, god of learning.", accent: "#ff6b6b", Art: Dazaifu },
  umegae: { label: "Umegae mochi", caption: "Umegae mochi: Dazaifu's grilled rice cake stamped with a plum blossom.", accent: "#e9d7ae", Art: Umegae },
  taipei: { label: "Taipei 101", caption: "Taipei 101.", accent: "#19e3ff", Art: Taipei101 },
  hk: { label: "Hong Kong skyline", caption: "Hong Kong skyline.", accent: "#3dff8b", Art: HongKong },
}

export function SymbolSvg({ k, className = "", title, style }: { k: SymbolKey; className?: string; title?: string; style?: React.CSSProperties }) {
  const { Art, accent, label } = SYMBOLS[k]
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label={title ?? label} style={{ filter: `drop-shadow(0 0 7px ${accent}88)`, ...style }}>
      <Art />
    </svg>
  )
}

/* ---------------------------------------------------------- papel picado */

const FLAG_COLOURS = ["#ff3da6", "#19e3ff", "#ffcf4a", "#3dff8b", "#ff6a2b", "#b455d6"]

// A string of cut-paper flags that sways. Cut-outs are drawn in the page colour.
export function PapelPicado({ className = "" }: { className?: string }) {
  const flags = 26
  const w = 56
  return (
    <svg viewBox={`0 0 ${flags * w} 82`} preserveAspectRatio="xMidYMin slice" className={`h-14 w-full sm:h-20 ${className}`} aria-hidden>
      <path d={`M0 6Q${(flags * w) / 4} 14 ${(flags * w) / 2} 6T${flags * w} 6`} fill="none" stroke="#e6fff0" strokeOpacity="0.55" strokeWidth="1.4" />
      {Array.from({ length: flags }, (_, i) => {
        const x = i * w + 4
        const c = FLAG_COLOURS[i % FLAG_COLOURS.length]
        return (
          <g key={i} className="sway" style={{ transformBox: "fill-box", transformOrigin: "50% 0", animationDelay: `${-(i % 7) * 0.6}s`, animationDuration: `${3.6 + (i % 5) * 0.5}s` }}>
            <path d={`M${x} 8H${x + 48}V60L${x + 40} 52L${x + 32} 60L${x + 24} 52L${x + 16} 60L${x + 8} 52L${x} 60Z`} fill={c} fillOpacity="0.85" stroke={c} strokeWidth="1" />
            <circle cx={x + 24} cy="24" r="5.5" fill="var(--void)" />
            <path d={`M${x + 8} 24l4-4 4 4-4 4zM${x + 32} 24l4-4 4 4-4 4z`} fill="var(--void)" />
            <path d={`M${x + 12} 40h24M${x + 18} 34h12`} stroke="var(--void)" strokeWidth="2.4" strokeLinecap="round" />
          </g>
        )
      })}
    </svg>
  )
}
