// More symbols for the Live stats margins: food, places, pets, tools and logos.
import type { ReactNode } from "react"
import { siAngular, siCplusplus, siDocker, siGit, siGitlab, siGodotengine, siKubernetes, siSpringboot, siTypescript } from "simple-icons"

const L = { strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" } as const

function Logo({ path, colour }: { path: string; colour: string }) {
  return (
    <g transform="translate(8 8) scale(2.667)">
      <path d={path} fill={colour} fillOpacity="0.3" stroke={colour} strokeWidth="0.55" strokeLinejoin="round" />
    </g>
  )
}

/* -------------------------------------------------------------------- food */

function Unagi() {
  return (
    <>
      <g fill="none" stroke="#fff3d6" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M28 24c-4-4 4-6 0-11M40 22c-4-4 4-6 0-11M52 24c-4-4 4-6 0-11" />
      </g>
      <rect x="7" y="36" width="66" height="30" rx="5" fill="#1a0d08" stroke="#ffb454" {...L} />
      <path d="M7 44H73" stroke="#c0392b" strokeWidth="2" />
      <path d="M12 38C12 30 30 28 40 28S68 30 68 38C68 46 52 48 40 48S12 46 12 38Z" fill="#8a3a12" stroke="#ffcf8a" strokeWidth="1.8" />
      <path d="M18 36C28 32 52 32 62 36" fill="none" stroke="#ffd9a0" strokeOpacity="0.7" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 30L20 44M32 29L28 46M40 28.5L36 47M48 29L44 46M56 30L52 44" stroke="#3a1606" strokeWidth="1.6" strokeLinecap="round" />
      {[[30, 38], [46, 40], [58, 36]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.1" fill="#7dff4a" />
      ))}
    </>
  )
}

function Udon() {
  return (
    <>
      <g fill="none" stroke="#fff3d6" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M30 18c-4-4 4-6 0-11M44 16c-4-4 4-6 0-11M58 18c-4-4 4-6 0-11" />
      </g>
      <path d="M6 36H74Q72 62 40 66Q8 62 6 36Z" fill="#26170c" stroke="#ffb454" {...L} />
      <ellipse cx="40" cy="36" rx="34" ry="8" fill="#c98a2b" stroke="#ffd9a0" strokeWidth="1.6" />
      <path d="M12 36Q20 30 28 36T44 36T60 36" fill="none" stroke="#fff7e3" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 39Q26 33 34 39T52 39T66 38" fill="none" stroke="#fff7e3" strokeWidth="4" strokeLinecap="round" />
      <circle cx="54" cy="33" r="6.5" fill="#fff7e3" stroke="#ff9ec7" strokeWidth="1.4" />
      <path d="M50 34Q54 28 58 33" fill="none" stroke="#ff7aa8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 32l8-3 3 7-8 3Z" fill="#d98a2b" stroke="#ffd9a0" strokeWidth="1.2" />
      {[[40, 31], [44, 34], [36, 34], [47, 30]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#3dff8b" />
      ))}
    </>
  )
}

function Ramen() {
  return (
    <>
      <g fill="none" stroke="#fff3d6" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M30 18c-4-4 4-6 0-11M44 16c-4-4 4-6 0-11M58 18c-4-4 4-6 0-11" />
      </g>
      <rect x="52" y="14" width="9" height="22" rx="1" fill="#0b2a1c" stroke="#3dff8b" strokeWidth="1.4" transform="rotate(8 56 25)" />
      <path d="M6 38H74Q72 64 40 67Q8 64 6 38Z" fill="#2a1410" stroke="#ff6b6b" {...L} />
      <path d="M10 44C18 50 30 52 40 52S62 50 70 44" fill="none" stroke="#ffcf4a" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      <ellipse cx="40" cy="38" rx="34" ry="8" fill="#f1dfc0" stroke="#fff3d6" strokeWidth="1.6" />
      <path d="M14 38H66M16 36H64M18 40H62" stroke="#e0c68f" strokeWidth="1" strokeLinecap="round" />
      <circle cx="26" cy="36" r="8" fill="#e8a0a0" stroke="#fff" strokeWidth="1.4" />
      <circle cx="26" cy="36" r="4.6" fill="none" stroke="#c96a6a" strokeWidth="1.2" />
      <circle cx="44" cy="35" r="7.5" fill="#e8a0a0" stroke="#fff" strokeWidth="1.4" />
      <circle cx="44" cy="35" r="4.2" fill="none" stroke="#c96a6a" strokeWidth="1.2" />
      <ellipse cx="58" cy="37" rx="6" ry="4.6" fill="#fff7e3" stroke="#fff" strokeWidth="1.2" />
      <ellipse cx="58" cy="37.6" rx="3" ry="2.4" fill="#ffb627" />
      {[[34, 40], [50, 41], [20, 41]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill="#3dff8b" />
      ))}
    </>
  )
}

function Onigiri() {
  return (
    <>
      <path d="M40 8C46 8 52 18 66 54C68 60 64 66 58 66H22C16 66 12 60 14 54C28 18 34 8 40 8Z" fill="#f8f5ee" stroke="#fff" {...L} />
      <path d="M26 66V46Q40 40 54 46V66Z" fill="#0b2a1c" stroke="#3dff8b" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M30 52H50M30 58H50" stroke="#3dff8b" strokeOpacity="0.45" strokeWidth="1" />
      <circle cx="40" cy="30" r="3.6" fill="#ff3b4e" stroke="#ff9ab0" strokeWidth="1" />
      {[[30, 40], [50, 38], [34, 22], [46, 24], [24, 52], [58, 54]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="2" ry="1.2" fill="#d8d2c4" transform={`rotate(${i * 30} ${x} ${y})`} />
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ places */

function GreatWall() {
  return (
    <>
      <path d="M0 62L16 40L24 48L38 26L52 44L62 34L80 62Z" fill="#0d1a14" stroke="#3dff8b" strokeOpacity="0.45" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2 58L16 42L26 50L38 30L52 46L64 36L78 58" fill="none" stroke="#c8a46a" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M2 58L16 42L26 50L38 30L52 46L64 36L78 58" fill="none" stroke="#2a1e0a" strokeWidth="1.2" strokeDasharray="2 2.5" strokeLinejoin="round" />
      {[[16, 42], [38, 30], [64, 36]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 5} y={y - 12} width="10" height="12" fill="#2a1e0a" stroke="#e8c98a" strokeWidth="1.6" />
          <path d={`M${x - 7} ${y - 12}L${x} ${y - 19}L${x + 7} ${y - 12}Z`} fill="#8a2a1a" stroke="#ff8a6b" strokeWidth="1.4" strokeLinejoin="round" />
          <rect x={x - 2} y={y - 9} width="4" height="4" fill="#ffcf4a" />
        </g>
      ))}
      <circle cx="68" cy="14" r="5" fill="#ffcf4a" fillOpacity="0.9" />
    </>
  )
}

function VictoriaHarbour() {
  return (
    <>
      <rect x="4" y="26" width="8" height="32" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.4" />
      <polygon points="14,58 14,16 19,10 24,16 24,58" fill="#0e2630" stroke="#3dff8b" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="26" y="32" width="9" height="26" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.4" />
      <path d="M2 58H78" stroke="#19e3ff" strokeWidth="1.6" />
      <path d="M2 63C8 60 12 66 18 63C24 60 28 66 34 63C40 60 44 66 50 63C56 60 60 66 66 63C72 60 76 66 78 63" fill="none" stroke="#19e3ff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 70C8 67 12 73 18 70C24 67 28 73 34 70C40 67 44 73 50 70C56 67 60 73 66 70C72 67 76 73 78 70" fill="none" stroke="#19e3ff" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M44 54Q56 62 70 54L67 58Q56 61 46 58Z" fill="#2a1408" stroke="#ffb454" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M56 54V22" stroke="#ffb454" strokeWidth="1.6" />
      <path d="M56 22L70 28V50L56 52Z" fill="#c8102e" stroke="#ff6b6b" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M56 28L70 32M56 36L70 38M56 44L70 44" stroke="#3a0610" strokeWidth="1.2" />
      <path d="M56 26L44 32V50L56 50Z" fill="#c8102e" fillOpacity="0.8" stroke="#ff6b6b" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="38" cy="14" r="5" fill="#ffcf4a" fillOpacity="0.85" />
    </>
  )
}

function TokyoTower() {
  return (
    <>
      <path d="M40 2V16" stroke="#ff3b4e" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 28L40 14L44 28Z" fill="#2a0a0e" stroke="#ff3b4e" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="31" y="28" width="18" height="5" fill="#2a0a0e" stroke="#ff3b4e" strokeWidth="1.8" />
      <path d="M33 33L16 72H64L47 33" fill="none" stroke="#ff3b4e" strokeWidth="2" strokeLinejoin="round" />
      <path d="M31 47H49M26 58H54" stroke="#ff3b4e" strokeWidth="1.8" />
      <rect x="25" y="46" width="30" height="4.5" fill="#2a0a0e" stroke="#ff3b4e" strokeWidth="1.6" />
      <path d="M34 36L46 46M46 36L34 46M30 51L50 58M50 51L30 58M24 60L40 72M56 60L40 72M24 60L56 60" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.1" />
      <path d="M12 72H68" stroke="#ff3b4e" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Skytree() {
  return (
    <>
      <path d="M40 0V20" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="40" cy="30" rx="8" ry="3" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.6" />
      <path d="M38 22L37 32H43L42 22Z" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.4" strokeLinejoin="round" />
      <ellipse cx="40" cy="41" rx="6.5" ry="2.6" fill="#0e2630" stroke="#19e3ff" strokeWidth="1.6" />
      <path d="M37 32L35 70M43 32L45 70" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36.5 44L28 72M43.5 44L52 72" stroke="#19e3ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 72L40 52L54 72" fill="none" stroke="#3dff8b" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M33 62H47M36 54H44" stroke="#19e3ff" strokeOpacity="0.6" strokeWidth="1.2" />
      <path d="M14 72H66" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function BellasArtes() {
  return (
    <>
      <path d="M26 30A14 14 0 0 1 54 30Z" fill="#c75b12" stroke="#ffb454" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M40 16V30M33 18Q31 24 31 30M47 18Q49 24 49 30" stroke="#ffd9a0" strokeOpacity="0.7" strokeWidth="1.2" />
      <path d="M40 16V12M38 14H42" stroke="#ffcf4a" strokeWidth="1.6" strokeLinecap="round" />
      {[10, 60].map((x) => (
        <path key={x} d={`M${x} 38A9 9 0 0 1 ${x + 18} 38Z`} fill="#1a6a8a" stroke="#19e3ff" strokeWidth="1.6" strokeLinejoin="round" />
      ))}
      <rect x="24" y="30" width="32" height="8" fill="#e6dcc0" stroke="#fff" strokeWidth="1.4" />
      <rect x="6" y="38" width="68" height="28" fill="#e6dcc0" fillOpacity="0.14" stroke="#e6dcc0" {...L} />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${12 + i * 7} 64V50A2.6 4 0 0 1 ${17.2 + i * 7} 50V64Z`} fill="#ffcf4a" fillOpacity="0.4" stroke="#e6dcc0" strokeWidth="1" />
      ))}
      <path d="M6 44H74M4 66H76M8 71H72" stroke="#e6dcc0" strokeWidth="1.6" strokeLinecap="round" />
    </>
  )
}

function AngelIndependence() {
  return (
    <>
      <path d="M40 4L43 11L40 14L37 11Z" fill="#ffcf4a" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
      <path d="M37 10Q26 6 22 16Q30 14 36 14M43 10Q54 6 58 16Q50 14 44 14" fill="#ffcf4a" fillOpacity="0.5" stroke="#ffcf4a" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M40 14V22M40 16L46 8" stroke="#ffcf4a" strokeWidth="2" strokeLinecap="round" />
      <rect x="36" y="22" width="8" height="4" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.4" />
      <rect x="37.5" y="26" width="5" height="26" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.6" />
      {[32, 40, 47].map((y) => (
        <path key={y} d={`M36.5 ${y}H43.5`} stroke="#ffcf4a" strokeWidth="1.2" />
      ))}
      <rect x="30" y="52" width="20" height="10" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.6" />
      <path d="M32 54l3 0M45 54l3 0M40 54v6" stroke="#ffcf4a" strokeWidth="1.2" />
      <rect x="22" y="62" width="36" height="5" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.6" />
      <rect x="14" y="67" width="52" height="5" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.6" />
    </>
  )
}

function LondonEye() {
  const spokes = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180
    return <path key={i} d={`M40 34L${(40 + Math.sin(a) * 27).toFixed(1)} ${(34 - Math.cos(a) * 27).toFixed(1)}`} stroke="#19e3ff" strokeOpacity="0.55" strokeWidth="0.9" />
  })
  const pods = Array.from({ length: 16 }, (_, i) => {
    const a = (i * 22.5 * Math.PI) / 180
    return <ellipse key={i} cx={(40 + Math.sin(a) * 28).toFixed(1)} cy={(34 - Math.cos(a) * 28).toFixed(1)} rx="2.2" ry="1.7" fill="#0e2630" stroke="#fff" strokeWidth="1" />
  })
  return (
    <>
      <circle cx="40" cy="34" r="27" fill="none" stroke="#19e3ff" strokeWidth="2.2" />
      <circle cx="40" cy="34" r="22" fill="none" stroke="#19e3ff" strokeOpacity="0.5" strokeWidth="1" />
      {spokes}
      {pods}
      <circle cx="40" cy="34" r="2.6" fill="#ffcf4a" />
      <path d="M26 72L40 34L54 72" fill="none" stroke="#e6fff0" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M31 58H49" stroke="#e6fff0" strokeWidth="1.6" />
      <path d="M4 72C10 69 14 75 20 72C26 69 30 75 36 72C42 69 46 75 52 72C58 69 62 75 68 72C72 70 76 74 78 72" fill="none" stroke="#19e3ff" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
    </>
  )
}

function NaturalHistory() {
  return (
    <>
      {[8, 56].map((x) => (
        <g key={x}>
          <rect x={x} y="22" width="16" height="42" fill="#3a2414" stroke="#e8a070" strokeWidth="1.8" />
          <path d={`M${x - 2} 22L${x + 8} 6L${x + 18} 22Z`} fill="#3a2414" stroke="#e8a070" strokeWidth="1.8" strokeLinejoin="round" />
          <path d={`M${x + 4} 38V30A4 5 0 0 1 ${x + 12} 30V38Z`} fill="#ffcf4a" fillOpacity="0.4" stroke="#e8a070" strokeWidth="1.2" />
        </g>
      ))}
      <rect x="22" y="32" width="36" height="32" fill="#3a2414" stroke="#e8a070" strokeWidth="1.8" />
      <path d="M31 64V44A9 9 0 0 1 49 44V64Z" fill="#12100a" stroke="#ffcf4a" strokeWidth="1.8" />
      <path d="M35 64V46A5 6 0 0 1 45 46V64" fill="none" stroke="#e8a070" strokeWidth="1.2" />
      {[26, 46, 66].map((y) => (
        <path key={y} d="M24 0" stroke="none" />
      ))}
      {[[25, 40], [25, 52], [51, 40], [51, 52]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y + 7}V${y + 2}A2.4 3 0 0 1 ${x + 4.8} ${y + 2}V${y + 7}Z`} fill="#ffcf4a" fillOpacity="0.4" stroke="#e8a070" strokeWidth="1" />
      ))}
      <path d="M4 64H76M2 70H78" stroke="#e8a070" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function BigBen() {
  return (
    <>
      <path d="M40 0V8" stroke="#ffcf4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 24L40 6L50 24Z" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="28" y="24" width="24" height="8" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <rect x="26" y="32" width="28" height="22" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <circle cx="40" cy="43" r="9" fill="#e6fff0" fillOpacity="0.12" stroke="#ffcf4a" strokeWidth="2" />
      <path d="M40 43V37M40 43L45 46" stroke="#e6fff0" strokeWidth="1.8" strokeLinecap="round" />
      {[0, 90, 180, 270].map((a) => (
        <circle key={a} cx={(40 + Math.sin((a * Math.PI) / 180) * 7).toFixed(1)} cy={(43 - Math.cos((a * Math.PI) / 180) * 7).toFixed(1)} r="0.9" fill="#ffcf4a" />
      ))}
      <rect x="29" y="54" width="22" height="18" fill="#2a2418" stroke="#e8c98a" strokeWidth="1.8" />
      <path d="M33 70V60M40 70V60M47 70V60" stroke="#e8c98a" strokeWidth="1.4" />
      <path d="M24 72H56" stroke="#e8c98a" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function DoubleDecker() {
  return (
    <>
      <rect x="6" y="14" width="68" height="46" rx="6" fill="#c8102e" stroke="#ff6b6b" {...L} />
      <path d="M6 36H74" stroke="#7a0a1a" strokeWidth="2" />
      {[10, 22, 34, 46].map((x) => (
        <rect key={x} x={x} y="19" width="9" height="12" rx="1.5" fill="#12303a" stroke="#e6fff0" strokeWidth="1.2" />
      ))}
      {[10, 22, 34].map((x) => (
        <rect key={x} x={x} y="41" width="9" height="12" rx="1.5" fill="#12303a" stroke="#e6fff0" strokeWidth="1.2" />
      ))}
      <rect x="58" y="19" width="12" height="12" rx="1.5" fill="#12303a" stroke="#e6fff0" strokeWidth="1.2" />
      <rect x="55" y="41" width="15" height="19" rx="1.5" fill="#12303a" stroke="#e6fff0" strokeWidth="1.2" />
      <rect x="46" y="41" width="5" height="12" rx="1" fill="#ffcf4a" fillOpacity="0.6" />
      <rect x="8" y="55" width="40" height="2" fill="#ffcf4a" fillOpacity="0.8" />
      <circle cx="22" cy="62" r="7" fill="#0a0a0e" stroke="#e6fff0" strokeWidth="2" />
      <circle cx="58" cy="62" r="7" fill="#0a0a0e" stroke="#e6fff0" strokeWidth="2" />
      <circle cx="22" cy="62" r="2.2" fill="#e6fff0" />
      <circle cx="58" cy="62" r="2.2" fill="#e6fff0" />
    </>
  )
}

function PhoneBox() {
  return (
    <>
      <path d="M18 14Q40 4 62 14L58 20H22Z" fill="#c8102e" stroke="#ff6b6b" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M36 12l4-4 4 4z" fill="#ffcf4a" stroke="#ffcf4a" strokeWidth="1" strokeLinejoin="round" />
      <rect x="22" y="20" width="36" height="52" fill="#c8102e" stroke="#ff6b6b" strokeWidth="2" />
      <rect x="26" y="25" width="28" height="36" fill="#12303a" stroke="#ffcf4a" strokeWidth="1.4" />
      {[0, 1, 2].map((c) =>
        [0, 1, 2, 3, 4, 5].map((r) => (
          <rect key={`${c}${r}`} x={27 + c * 9.2} y={26 + r * 5.7} width="8.2" height="4.7" fill="#ffcf4a" fillOpacity={(r + c) % 2 ? 0.35 : 0.15} />
        )),
      )}
      <rect x="26" y="63" width="28" height="7" fill="#7a0a1a" stroke="#ff6b6b" strokeWidth="1.2" />
      <path d="M18 72H62" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Shinkansen() {
  return (
    <>
      <path d="M4 52V42Q4 32 14 32H46C58 32 68 42 78 50V56H4Z" fill="#f4f8fb" fillOpacity="0.16" stroke="#e6fff0" {...L} />
      <path d="M4 48H70" stroke="#19e3ff" strokeWidth="3" />
      <path d="M4 52H72" stroke="#19e3ff" strokeWidth="1.2" />
      {[10, 20, 30, 40].map((x) => (
        <rect key={x} x={x} y="36" width="6" height="6" rx="1.5" fill="#19e3ff" fillOpacity="0.45" stroke="#e6fff0" strokeWidth="1" />
      ))}
      <path d="M50 36L62 44H50Z" fill="#12303a" stroke="#e6fff0" strokeWidth="1.4" strokeLinejoin="round" />
      {[12, 28, 48, 62].map((x) => (
        <circle key={x} cx={x} cy="58" r="3" fill="#0a0a0e" stroke="#e6fff0" strokeWidth="1.6" />
      ))}
      <path d="M0 63H80" stroke="#e6fff0" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 69H72" stroke="#e6fff0" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
    </>
  )
}

function Yatai() {
  return (
    <>
      <g fill="none" stroke="#ffd9d0" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M54 22c-4-4 4-6 0-11M62 20c-4-4 4-6 0-11" />
      </g>
      <path d="M6 28L12 16H68L74 28Z" fill="#1a2a5a" stroke="#4d7cff" strokeWidth="2" strokeLinejoin="round" />
      <rect x="10" y="28" width="60" height="38" fill="#2a1408" fillOpacity="0.7" stroke="#ffb454" strokeWidth="1.8" />
      {[14, 30, 46, 62].map((x) => (
        <path key={x} d={`M${x} 28V42H${x + 8}V28`} fill="#1a2a5a" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
      ))}
      <rect x="10" y="50" width="60" height="5" fill="#8a4a14" stroke="#ffb454" strokeWidth="1.6" />
      <path d="M18 55V68M62 55V68" stroke="#ffb454" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 50V45H34V50M44 50V47H52V50" fill="#fff7e3" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="16" cy="24" r="0" />
      <path d="M6 28V40" stroke="#ffcf4a" strokeWidth="1.4" />
      <ellipse cx="6" cy="46" rx="4.4" ry="6" fill="#c8102e" stroke="#ff9ab0" strokeWidth="1.4" />
      <path d="M2 68H78" stroke="#ffb454" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function Hanafuda() {
  return (
    <>
      <g transform="rotate(-14 30 44)">
        <rect x="12" y="14" width="34" height="52" rx="3.5" fill="#8a1226" stroke="#ff6b82" strokeWidth="1.8" />
        <rect x="16" y="18" width="26" height="44" rx="2" fill="none" stroke="#ff9ab0" strokeOpacity="0.6" strokeWidth="1" />
        <path d="M29 28l4 6-4 6-4-6zM29 44l4 6-4 6-4-6z" fill="none" stroke="#ff9ab0" strokeOpacity="0.7" strokeWidth="1.2" />
      </g>
      <g transform="rotate(10 52 40)">
        <rect x="36" y="10" width="34" height="52" rx="3.5" fill="#f6ecd6" stroke="#fff" strokeWidth="1.8" />
        <rect x="40" y="14" width="26" height="9" fill="#c8102e" stroke="#ff6b6b" strokeWidth="1" />
        {[0, 72, 144, 216, 288].map((a) => (
          <circle key={a} cx="53" cy="34.6" r="4.4" fill="#ff9ec7" stroke="#fff" strokeWidth="0.8" transform={`rotate(${a} 53 41)`} />
        ))}
        <circle cx="53" cy="41" r="2.4" fill="#ffcf4a" />
        <path d="M53 46C50 52 46 55 42 55M53 46C56 52 60 55 64 55" fill="none" stroke="#3dff8b" strokeWidth="2" strokeLinecap="round" />
      </g>
    </>
  )
}

/* ------------------------------------------------------- animals and fun */

function HighlandCow() {
  return (
    <>
      <path d="M18 28C10 28 6 18 8 10C14 14 18 20 22 24M62 28C70 28 74 18 72 10C66 14 62 20 58 24" fill="none" stroke="#f6e7cf" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 22Q14 30 24 28M70 22Q66 30 56 28" fill="#d9822b" stroke="#e8a35a" strokeWidth="2" />
      <path d="M14 30C14 18 26 10 40 10S66 18 66 30C70 38 66 56 58 66L50 72H30L22 66C14 56 10 38 14 30Z" fill="#c9701c" stroke="#ffb454" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 26L24 40M26 22L30 40M34 20L38 40M42 20L44 40M50 22L52 40M58 26L58 40M64 30L62 40" stroke="#8a4a14" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 34L24 48M28 36L32 50M48 36L50 50M58 34L56 48" stroke="#e8a35a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="40" cy="60" rx="12" ry="9" fill="#e8a0a0" stroke="#ffd0d0" strokeWidth="1.6" />
      <circle cx="35" cy="60" r="1.6" fill="#7a2a3a" />
      <circle cx="45" cy="60" r="1.6" fill="#7a2a3a" />
      <circle cx="30" cy="44" r="2" fill="#14100c" />
      <circle cx="50" cy="44" r="2" fill="#14100c" />
    </>
  )
}

function BillyGoat() {
  return (
    <>
      <path d="M26 20C16 18 12 6 18 2C18 10 24 14 30 16M54 20C64 18 68 6 62 2C62 10 56 14 50 16" fill="none" stroke="#e6dcc0" strokeWidth="5" strokeLinecap="round" />
      <path d="M26 26L6 24L10 34L26 34Z" fill="#cfd8dc" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M54 26L74 24L70 34L54 34Z" fill="#cfd8dc" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 22C24 14 32 12 40 12S56 14 56 22C58 36 52 52 46 58H34C28 52 22 36 24 22Z" fill="#e8eef0" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <rect x="29" y="28" width="7" height="3.6" rx="1" fill="#14100c" />
      <rect x="44" y="28" width="7" height="3.6" rx="1" fill="#14100c" />
      <ellipse cx="40" cy="50" rx="8" ry="6" fill="#d8c8c8" stroke="#fff" strokeWidth="1.4" />
      <path d="M36 50h1M43 50h1" stroke="#7a2a3a" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 58C34 66 38 72 40 76C42 72 46 66 46 58Z" fill="#e8eef0" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M38 62L40 70L42 62" fill="none" stroke="#b0bec5" strokeWidth="1.2" />
    </>
  )
}

function UsacoCow() {
  return (
    <>
      <path d="M22 22C16 22 10 18 10 12C16 12 20 16 24 20M58 22C64 22 70 18 70 12C64 12 60 16 56 20" fill="none" stroke="#f6e7cf" strokeWidth="3.6" strokeLinecap="round" />
      <ellipse cx="14" cy="30" rx="9" ry="5" fill="#fff" stroke="#14100c" strokeWidth="1.8" transform="rotate(-18 14 30)" />
      <ellipse cx="66" cy="30" rx="9" ry="5" fill="#14100c" stroke="#e6fff0" strokeWidth="1.8" transform="rotate(18 66 30)" />
      <path d="M22 24C24 16 32 14 40 14S56 16 58 24C60 38 58 52 52 60H28C22 52 20 38 22 24Z" fill="#fff" stroke="#e6fff0" strokeWidth="2" strokeLinejoin="round" />
      <path d="M40 14C46 14 54 16 57 22C52 26 48 24 44 20C42 18 40 16 40 14Z" fill="#14100c" />
      <path d="M22 36C22 30 26 28 30 30C32 34 28 40 22 40Z" fill="#14100c" />
      <circle cx="31" cy="34" r="2.2" fill="#14100c" />
      <circle cx="49" cy="34" r="2.2" fill="#14100c" />
      <circle cx="31.7" cy="33.3" r="0.7" fill="#fff" />
      <circle cx="49.7" cy="33.3" r="0.7" fill="#fff" />
      <ellipse cx="40" cy="52" rx="13" ry="9" fill="#ff9ec7" stroke="#ffd0e0" strokeWidth="1.6" />
      <ellipse cx="35" cy="52" rx="1.8" ry="2.4" fill="#7a2a3a" />
      <ellipse cx="45" cy="52" rx="1.8" ry="2.4" fill="#7a2a3a" />
      <rect x="31" y="62" width="18" height="9" rx="4.5" fill="#ffcf4a" stroke="#fff" strokeWidth="1.4" />
      <circle cx="40" cy="68" r="1.8" fill="#8a5a10" />
    </>
  )
}

function Totoro() {
  return (
    <>
      <path d="M26 24L22 6L36 18ZM54 24L58 6L44 18Z" fill="#7c8fa3" stroke="#cfe0ee" strokeWidth="1.8" strokeLinejoin="round" />
      <ellipse cx="40" cy="48" rx="26" ry="26" fill="#7c8fa3" stroke="#cfe0ee" strokeWidth="2" />
      <ellipse cx="40" cy="56" rx="17" ry="17" fill="#e8dcc0" stroke="#fff" strokeWidth="1.4" />
      {[[33, 52], [40, 48], [47, 52], [36, 60], [44, 60], [40, 66]].map(([x, y], i) => (
        <path key={i} d={`M${x - 2.4} ${y}L${x} ${y + 2.8}L${x + 2.4} ${y}`} fill="none" stroke="#9aa8b4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      <circle cx="30" cy="30" r="6" fill="#fff" stroke="#14100c" strokeWidth="1.6" />
      <circle cx="50" cy="30" r="6" fill="#fff" stroke="#14100c" strokeWidth="1.6" />
      <circle cx="31" cy="30" r="2.2" fill="#14100c" />
      <circle cx="49" cy="30" r="2.2" fill="#14100c" />
      <ellipse cx="40" cy="35" rx="3.6" ry="2.4" fill="#14100c" />
      <path d="M26 42Q40 52 54 42" fill="none" stroke="#14100c" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 38L24 38M14 42L24 41M66 38L56 38M66 42L56 41" stroke="#14100c" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 56Q12 64 18 68M64 56Q68 64 62 68" fill="none" stroke="#cfe0ee" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M28 72h6M46 72h6" stroke="#14100c" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function Penguin() {
  return (
    <>
      <ellipse cx="40" cy="44" rx="22" ry="26" fill="#14181e" stroke="#e6fff0" strokeWidth="2" />
      <ellipse cx="40" cy="50" rx="14" ry="19" fill="#f6f8fa" stroke="#fff" strokeWidth="1.2" />
      <circle cx="33" cy="30" r="4" fill="#fff" />
      <circle cx="47" cy="30" r="4" fill="#fff" />
      <circle cx="33.6" cy="30.4" r="1.8" fill="#14181e" />
      <circle cx="46.4" cy="30.4" r="1.8" fill="#14181e" />
      <path d="M35 36L40 34L45 36L40 41Z" fill="#ff9f1c" stroke="#ffd08a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M34 44L40 47L46 44L46 50L40 47L34 50Z" fill="#ff3da6" stroke="#ff9ac8" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M18 44Q10 54 18 66M62 44Q70 54 62 66" fill="#14181e" stroke="#e6fff0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 70L22 74H34ZM52 70L58 74H46Z" fill="#ff9f1c" stroke="#ffd08a" strokeWidth="1.2" strokeLinejoin="round" />
      <text x="68" y="18" fontSize="12" fill="#ffcf4a">♪</text>
    </>
  )
}

function Michelin() {
  return (
    <>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="40" cy="22" r="13" fill="#2a0a0e" stroke="#ff3b4e" strokeWidth="2.2" transform={`rotate(${a} 40 42)`} />
      ))}
      <circle cx="40" cy="42" r="12" fill="#2a0a0e" stroke="#ff3b4e" strokeWidth="2.2" />
      <circle cx="40" cy="42" r="6" fill="#ff3b4e" fillOpacity="0.85" stroke="#fff" strokeWidth="1.2" />
    </>
  )
}

/* ---------------------------------------------------- sport, gear, code */

function TennisRacket() {
  return (
    <>
      <defs>
        <clipPath id="tn-head">
          <ellipse cx="32" cy="26" rx="15" ry="19" />
        </clipPath>
      </defs>
      <g transform="rotate(-32 32 42)">
        <g clipPath="url(#tn-head)" stroke="#3dff8b" strokeOpacity="0.7" strokeWidth="0.9">
          {[19, 23, 27, 31, 35, 39, 43].map((x) => (
            <path key={x} d={`M${x} 6V46`} />
          ))}
          {[11, 16, 21, 26, 31, 36, 41].map((y) => (
            <path key={y} d={`M16 ${y}H48`} />
          ))}
        </g>
        <ellipse cx="32" cy="26" rx="15" ry="19" fill="none" stroke="#3dff8b" strokeWidth="2.8" />
        <path d="M24 43L32 51L40 43M32 51V62" fill="none" stroke="#3dff8b" {...L} />
        <rect x="29.4" y="58" width="5.2" height="16" rx="2" fill="#ffcf4a" fillOpacity="0.4" stroke="#ffcf4a" strokeWidth="1.6" />
      </g>
      <g transform="translate(62 58)">
        <circle r="9" fill="#d4e157" fillOpacity="0.4" stroke="#d4e157" strokeWidth="2" />
        <path d="M-8 -3Q0 2 8 -3M-8 3Q0 -2 8 3" fill="none" stroke="#fff" strokeWidth="1.4" />
      </g>
    </>
  )
}

function AppleWatch() {
  return (
    <>
      <path d="M28 18L30 4H50L52 18M28 62L30 76H50L52 62" fill="#14181e" stroke="#e6fff0" strokeWidth="2" strokeLinejoin="round" />
      <rect x="20" y="16" width="40" height="48" rx="13" fill="#06090d" stroke="#e6fff0" {...L} />
      <rect x="60" y="30" width="4" height="9" rx="1.6" fill="#e6fff0" />
      <circle cx="40" cy="40" r="15" fill="none" stroke="#ff2d55" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="40" cy="40" r="15" fill="none" stroke="#ff2d55" strokeWidth="4" strokeLinecap="round" strokeDasharray="70 94" transform="rotate(-90 40 40)" />
      <circle cx="40" cy="40" r="9.5" fill="none" stroke="#92e82a" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="40" cy="40" r="9.5" fill="none" stroke="#92e82a" strokeWidth="4" strokeLinecap="round" strokeDasharray="48 60" transform="rotate(-90 40 40)" />
      <circle cx="40" cy="40" r="4.2" fill="none" stroke="#19e3ff" strokeOpacity="0.25" strokeWidth="3.4" />
      <circle cx="40" cy="40" r="4.2" fill="none" stroke="#19e3ff" strokeWidth="3.4" strokeLinecap="round" strokeDasharray="20 26" transform="rotate(-90 40 40)" />
    </>
  )
}

function Vans() {
  // Classic slip-on in side view, toe to the right: cream heel quarter, checkerboard vamp, black collar, white sole.
  const upper = "M5 34C5 29 11 28 16 31C22 35 28 39 36 37C42 35.5 47 31.5 55 32C67 33 75 40 77 51L4 51Z"
  return (
    <>
      <defs>
        <clipPath id="vans-upper">
          <path d={upper} />
        </clipPath>
      </defs>
      <ellipse cx="42" cy="66" rx="37" ry="3" fill="#000" opacity="0.45" />
      <g clipPath="url(#vans-upper)">
        <rect x="0" y="20" width="84" height="40" fill="#f1e8cf" />
        <g transform="rotate(-6 50 42)">
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: 10 }, (_, c) => (
              <rect key={`${r}${c}`} x={20 + c * 5.8} y={26 + r * 5.8} width="5.8" height="5.8" fill={(r + c) % 2 === 0 ? "#14181e" : "#f6f1e0"} />
            )),
          )}
        </g>
        <path d="M0 20H44L20 60H0Z" fill="#f1e8cf" />
      </g>
      <path d="M6 32C6 29 11 28 16 31C22 35 28 39 36 37C42 35.5 46 32.5 50 32" fill="none" stroke="#14181e" strokeWidth="3.8" strokeLinecap="round" />
      <path d="M6 32C6 29 11 28 16 31C22 35 28 39 36 37C42 35.5 46 32.5 50 32" fill="none" stroke="#e6fff0" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
      <rect x="21" y="35.5" width="8" height="3" rx="0.8" fill="#fff" stroke="#14181e" strokeWidth="0.9" transform="rotate(32 25 37)" />
      <path d={upper} fill="none" stroke="#e6fff0" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M62 51C66 47 72 46.5 76.5 49.5" fill="none" stroke="#14181e" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 51H78C80.5 56 77 61 70 61H10C4 61 1.5 57 3 51Z" fill="#f6f6f6" stroke="#e6fff0" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 54.2H78" stroke="#14181e" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4.6" y="55.6" width="6.4" height="3.2" rx="0.8" fill="#c8102e" />
    </>
  )
}

function Rtx4090() {
  const fan = (cx: number) => (
    <g key={cx}>
      <circle cx={cx} cy="40" r="11" fill="#06090d" stroke="#76b900" strokeWidth="2" />
      {[0, 72, 144, 216, 288].map((a) => (
        <path key={a} d={`M${cx} 40Q${cx + 4} 32 ${cx + 9} 34`} fill="none" stroke="#9aa4ae" strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${a} ${cx} 40)`} />
      ))}
      <circle cx={cx} cy="40" r="2.4" fill="#76b900" />
    </g>
  )
  return (
    <>
      <rect x="4" y="20" width="4" height="40" fill="#14181e" stroke="#9aa4ae" strokeWidth="1.6" />
      <rect x="8" y="22" width="66" height="36" rx="3" fill="#0a0d12" stroke="#76b900" {...L} />
      {fan(24)}
      {fan(48)}
      <rect x="62" y="26" width="9" height="28" fill="#14181e" stroke="#9aa4ae" strokeWidth="1.2" />
      <text x="66.5" y="43" textAnchor="middle" fontSize="5.4" fontWeight="700" fill="#76b900" fontFamily="var(--font-code), monospace" transform="rotate(90 66.5 40)">RTX 4090</text>
      <path d="M14 58V63H46V58" fill="#ffcf4a" fillOpacity="0.7" stroke="#ffcf4a" strokeWidth="1.2" />
      <path d="M16 24H70" stroke="#76b900" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 2" />
    </>
  )
}

function Printer() {
  return (
    <>
      <rect x="8" y="58" width="60" height="9" rx="2" fill="#0a1a10" stroke="#00ae42" strokeWidth="2" />
      <rect x="62" y="12" width="8" height="46" rx="1.5" fill="#0a1a10" stroke="#00ae42" strokeWidth="2" />
      <rect x="16" y="52" width="40" height="6" fill="#14181e" stroke="#9aa4ae" strokeWidth="1.6" />
      <rect x="14" y="18" width="52" height="5" rx="1" fill="#14181e" stroke="#9aa4ae" strokeWidth="1.6" />
      <rect x="30" y="23" width="14" height="11" rx="2" fill="#0a1a10" stroke="#00ae42" strokeWidth="1.8" />
      <path d="M34 34L37 40L40 34" fill="#ffcf4a" stroke="#ffcf4a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M26 52L28 44H46L50 52Z" fill="#00ae42" fillOpacity="0.35" stroke="#00ae42" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="34" y="40" width="3.6" height="4" fill="#00ae42" />
      <path d="M31 64h10" stroke="#00ae42" strokeWidth="1.6" />
      <text x="54" y="65.2" textAnchor="middle" fontSize="5" fill="#00ae42" fontFamily="var(--font-code), monospace" fontWeight="700">A1 mini</text>
    </>
  )
}

function Cpp() {
  return <Logo path={siCplusplus.path} colour="#19a7ff" />
}
function Typescript() {
  return <Logo path={siTypescript.path} colour="#4d9cf0" />
}
function Git() {
  return <Logo path={siGit.path} colour="#ff6a4d" />
}
function Angular() {
  return <Logo path={siAngular.path} colour="#ff2d55" />
}
function SpringBoot() {
  return <Logo path={siSpringboot.path} colour="#6db33f" />
}
function Docker() {
  return <Logo path={siDocker.path} colour="#2fa8ff" />
}
function Kubernetes() {
  return <Logo path={siKubernetes.path} colour="#4d8dff" />
}
function Gitlab() {
  return <Logo path={siGitlab.path} colour="#fc7a30" />
}
function Godot() {
  return <Logo path={siGodotengine.path} colour="#5cb0e8" />
}

function Java() {
  return (
    <>
      <g fill="none" stroke="#ff4d4d" strokeWidth="2.4" strokeLinecap="round" className="steam">
        <path d="M32 24c-6-5 6-9 0-15M44 22c-6-5 6-9 0-15" />
      </g>
      <path d="M18 34H56L52 58Q50 64 42 64H32Q24 64 22 58Z" fill="#0e2a4a" stroke="#4d9cf0" {...L} />
      <path d="M56 38H62Q68 38 68 44T62 52H54" fill="none" stroke="#4d9cf0" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 66H60" stroke="#ff4d4d" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M14 72C24 68 48 68 58 72" fill="none" stroke="#4d9cf0" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 40H50" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Crab() {
  const px = (x: number, y: number, w: number, h: number, fill = "#d97757") => <rect x={x} y={y} width={w} height={h} fill={fill} />
  return (
    <>
      {px(16, 26, 48, 26)}
      {px(10, 32, 6, 12)}
      {px(64, 32, 6, 12)}
      {px(4, 28, 6, 6)}
      {px(70, 28, 6, 6)}
      {px(4, 40, 6, 6)}
      {px(70, 40, 6, 6)}
      {px(22, 52, 6, 10)}
      {px(32, 52, 6, 10)}
      {px(42, 52, 6, 10)}
      {px(52, 52, 6, 10)}
      {px(26, 34, 7, 9, "#1a0f0a")}
      {px(47, 34, 7, 9, "#1a0f0a")}
      {px(16, 26, 48, 4, "#e8906e")}
      <path d="M16 26H64V52H16Z" fill="none" stroke="#ffb59a" strokeWidth="1" opacity="0.6" />
    </>
  )
}

function BinaryLifting() {
  const xs = [8, 22, 36, 50, 64]
  return (
    <>
      <path d="M8 56Q15 44 22 56" fill="none" stroke="#3dff8b" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 56Q22 32 36 56" fill="none" stroke="#19e3ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 56Q36 10 64 56" fill="none" stroke="#ff3da6" strokeWidth="2" strokeLinecap="round" />
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="58" r="5" fill="#06090d" stroke={i === 0 ? "#ffcf4a" : "#e6fff0"} strokeWidth="1.8" />
          <text x={x} y="60.2" textAnchor="middle" fontSize="5.6" fill="#e6fff0" fontFamily="var(--font-code), monospace">{i}</text>
        </g>
      ))}
      <text x="15" y="42" textAnchor="middle" fontSize="6" fill="#3dff8b" fontFamily="var(--font-code), monospace">2⁰</text>
      <text x="22" y="30" textAnchor="middle" fontSize="6" fill="#19e3ff" fontFamily="var(--font-code), monospace">2¹</text>
      <text x="36" y="14" textAnchor="middle" fontSize="6" fill="#ff3da6" fontFamily="var(--font-code), monospace">2²</text>
      <path d="M8 70H64" stroke="#e6fff0" strokeOpacity="0.25" strokeWidth="1" />
    </>
  )
}

function SegmentTree() {
  const node = (x: number, y: number, label: string, hot = false) => (
    <g key={`${x}${y}`}>
      <rect x={x - 9} y={y - 5.5} width="18" height="11" rx="2.4" fill="#06090d" stroke={hot ? "#ff3da6" : "#19e3ff"} strokeWidth="1.8" />
      <text x={x} y={y + 2.2} textAnchor="middle" fontSize="5.6" fill={hot ? "#ff9ac8" : "#e6fff0"} fontFamily="var(--font-code), monospace">{label}</text>
    </g>
  )
  return (
    <>
      <path d="M40 17L20 32M40 17L60 32M20 38L10 54M20 38L30 54M60 38L50 54M60 38L70 54" stroke="#19e3ff" strokeOpacity="0.7" strokeWidth="1.6" />
      {node(40, 12, "0-7")}
      {node(20, 35, "0-3", true)}
      {node(60, 35, "4-7")}
      {node(10, 60, "0-1")}
      {node(30, 60, "2-3", true)}
      {node(50, 60, "4-5")}
      {node(70, 60, "6-7")}
      <path d="M4 72H76" stroke="#ff3da6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </>
  )
}

/* ------------------------------------------- Porto, France, Cambridge, music */

function Tartiflette() {
  return (
    <>
      <g fill="none" stroke="#fff3d6" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" className="steam">
        <path d="M28 26c-4-4 4-6 0-11M40 24c-4-4 4-6 0-11M52 26c-4-4 4-6 0-11" />
      </g>
      <path d="M7 6" stroke="none" />
      <path d="M2 42Q-1 42 1 46Q3 49 8 47M78 42Q81 42 79 46Q77 49 72 47" fill="none" stroke="#e6fff0" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M6 42H74Q72 58 64 60H16Q8 58 6 42Z" fill="#e9eef2" fillOpacity="0.14" stroke="#e6fff0" {...L} />
      <ellipse cx="40" cy="42" rx="35" ry="11" fill="#e9a23a" stroke="#ffe3a8" strokeWidth="2" />
      <ellipse cx="40" cy="42" rx="31" ry="8" fill="none" stroke="#fff3c4" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M12 40C18 34 26 36 32 40C40 34 50 36 58 40C64 36 68 38 70 41" fill="none" stroke="#fff3c4" strokeWidth="2.4" strokeLinecap="round" />
      {[[22, 42], [36, 44], [50, 42], [60, 40], [28, 38]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5.2" ry="2.6" fill="#b3601a" fillOpacity="0.8" />
      ))}
      {[[16, 41], [44, 38], [54, 45], [31, 46]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="4.4" height="2.4" rx="1" fill="#ff9ab0" stroke="#fff" strokeWidth="0.6" transform={`rotate(${i * 25} ${x} ${y})`} />
      ))}
      {[[26, 36], [46, 42], [14, 38]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" className="twinkle" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}
      <path d="M6 44H74" stroke="#e6fff0" strokeOpacity="0.35" strokeWidth="1" />
    </>
  )
}

function Baguette() {
  const loaf = (rot: number, tx: number, ty: number, w: number) => (
    <g transform={`translate(${tx} ${ty}) rotate(${rot})`}>
      <rect x={-w / 2} y="-8" width={w} height="16" rx="8" fill="#c98a2b" stroke="#ffd08a" strokeWidth="2" />
      {[-0.32, -0.16, 0, 0.16, 0.32].map((k, i) => (
        <path key={i} d={`M${w * k - 4} 4L${w * k + 3} -4`} stroke="#f6dca0" strokeWidth="3" strokeLinecap="round" />
      ))}
      {[[-0.4, 3], [0.1, -5], [0.38, 4], [-0.15, 5]].map(([k, y], i) => (
        <circle key={i} cx={w * k} cy={y} r="0.9" fill="#fff3d6" opacity="0.8" />
      ))}
    </g>
  )
  return (
    <>
      {loaf(-28, 36, 46, 58)}
      {loaf(-30, 48, 30, 54)}
    </>
  )
}

function CasaMusica() {
  return (
    <>
      <path d="M6 58L18 32L52 20L74 40L72 58L30 64Z" fill="#e6fff0" fillOpacity="0.1" stroke="#e6fff0" {...L} />
      <path d="M18 32L30 64M52 20L30 64M52 20L72 58M18 32L52 20M74 40L30 64" fill="none" stroke="#e6fff0" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M52 20L74 40L72 58Z" fill="#19e3ff" fillOpacity="0.25" stroke="#19e3ff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M56 30L68 42M58 24L71 38M60 44L70 52" stroke="#19e3ff" strokeOpacity="0.7" strokeWidth="1" />
      <path d="M6 58L30 64L72 58" fill="none" stroke="#e6fff0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 68H76M12 63L8 68M26 66L22 68" stroke="#e6fff0" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" />
      <text x="26" y="42" textAnchor="middle" fontSize="8" fill="#ffcf4a">♪</text>
    </>
  )
}

function SaoBento() {
  const tile = (x: number, y: number, i: number) => (
    <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" fill={(i % 2 === 0) ? "#4d8dff" : "#e6f0ff"} fillOpacity={(i % 2 === 0) ? 0.85 : 0.9} stroke="#1a3a8a" strokeWidth="0.5" />
  )
  return (
    <>
      <path d="M8 24L14 14H66L72 24Z" fill="#2a3a4a" stroke="#9fb4c8" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M26 14L30 8H50L54 14" fill="#2a3a4a" stroke="#9fb4c8" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="8" y="24" width="64" height="44" fill="#1a2430" stroke="#9fb4c8" strokeWidth="1.8" />
      <circle cx="40" cy="18" r="3.4" fill="#e6fff0" stroke="#ffcf4a" strokeWidth="1.2" />
      <path d="M40 18V16M40 18L41.6 19" stroke="#14181e" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M28 68V46A12 12 0 0 1 52 46V68Z" fill="#0a1018" stroke="#9fb4c8" strokeWidth="1.8" />
      {Array.from({ length: 3 }, (_, r) => Array.from({ length: 6 }, (_, c) => tile(14 + c * 5.2 > 28 ? 14 + c * 5.2 + 30 : 14 + c * 5.2, 28 + r * 5, r + c)))}
      {Array.from({ length: 3 }, (_, r) => Array.from({ length: 4 }, (_, c) => tile(31 + c * 5.2, 26 + r * 5, r + c + 1)))}
      <path d="M6 68H74" stroke="#9fb4c8" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Lello() {
  const spines = ["#ff3b4e", "#19e3ff", "#ffcf4a", "#3dff8b", "#ff3da6", "#d98cff"]
  return (
    <>
      <rect x="6" y="6" width="68" height="64" fill="#1a0d08" stroke="#ffb454" strokeWidth="2" />
      <rect x="22" y="8" width="36" height="10" fill="#0e1a2a" stroke="#ffb454" strokeWidth="1.4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={23 + i * 5.7} y="9" width="4.6" height="8" fill={spines[i]} fillOpacity="0.55" />
      ))}
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          {Array.from({ length: 4 }, (_, i) => (
            <rect key={`l${i}`} x={8 + i * 3.6} y={22 + r * 10} width="2.8" height="8" fill={spines[(i + r) % 6]} opacity="0.85" />
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <rect key={`r${i}`} x={59 + i * 3.6} y={22 + r * 10} width="2.8" height="8" fill={spines[(i + r + 2) % 6]} opacity="0.85" />
          ))}
        </g>
      ))}
      <path d="M26 70C22 58 28 48 36 46H44C52 48 58 58 54 70Z" fill="#8a1226" stroke="#ff6b82" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M40 70V46M34 70C32 60 34 52 38 48M46 70C48 60 46 52 42 48" fill="none" stroke="#ff9ab0" strokeOpacity="0.7" strokeWidth="1.2" />
      <path d="M26 56H54M28 62H52" stroke="#ff9ab0" strokeOpacity="0.5" strokeWidth="1" />
      <path d="M34 46C34 36 30 32 28 30M46 46C46 36 50 32 52 30" fill="none" stroke="#ffb454" strokeWidth="2.4" strokeLinecap="round" />
    </>
  )
}

function Surfboard() {
  return (
    <>
      <g transform="rotate(22 40 40)">
        <path d="M40 2C56 16 58 52 40 72C22 52 24 16 40 2Z" fill="#19e3ff" fillOpacity="0.2" stroke="#19e3ff" {...L} />
        <path d="M40 4V70" stroke="#e6fff0" strokeWidth="1.4" />
        <path d="M30 32C36 36 44 36 50 32M29 42C36 46 44 46 51 42" fill="none" stroke="#ff3da6" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 64L34 72L40 70L46 72Z" fill="#ffcf4a" stroke="#ffe08a" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M30 58L26 66L32 62ZM50 58L54 66L48 62Z" fill="#ffcf4a" fillOpacity="0.8" />
      </g>
      <path d="M4 72C10 69 14 75 20 72C26 69 30 75 36 72M44 74C50 71 54 77 60 74C66 71 70 77 76 74" fill="none" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function SouthbankSkate() {
  return (
    <>
      <rect x="4" y="14" width="72" height="12" fill="#3a3f46" stroke="#9aa4ae" strokeWidth="1.8" />
      {[14, 40, 66].map((x) => (
        <rect key={x} x={x - 4} y="26" width="8" height="38" fill="#2a2f36" stroke="#9aa4ae" strokeWidth="1.6" />
      ))}
      <path d="M4 64H76" stroke="#9aa4ae" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 64Q30 64 34 48" fill="none" stroke="#9aa4ae" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 32Q18 26 22 34T30 30M10 44l6-6 4 8 6-8M46 32l8-4 2 8-6 2M48 46q6-6 10 0t6-2M56 54l4-6 5 6" fill="none" stroke="#ff3da6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 56Q52 50 60 56" fill="none" stroke="#19e3ff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M14 38H26M16 50H28" stroke="#ffcf4a" strokeWidth="2.4" strokeLinecap="round" />
      <g transform="translate(52 52) rotate(-24)">
        <path d="M-9 0Q-6 0 -5 2H5Q6 0 9 0" fill="none" stroke="#19e3ff" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="-4" cy="5" r="2" fill="#ff3da6" />
        <circle cx="4" cy="5" r="2" fill="#ff3da6" />
      </g>
    </>
  )
}

function Punts() {
  return (
    <>
      <path d="M8 14C8 30 12 44 10 58M14 12C14 28 18 40 16 52" fill="none" stroke="#3dff8b" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 20l-3 3M10 32l-3 3M10 44l-3 3M16 24l-3 3M16 36l-3 3" stroke="#3dff8b" strokeOpacity="0.8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M62 10L40 66" stroke="#c8a46a" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="58" cy="22" r="4" fill="#ffd9a0" stroke="#fff" strokeWidth="1" />
      <path d="M53 20H63L58 16Z" fill="#c8a46a" stroke="#ffe3a8" strokeWidth="1" strokeLinejoin="round" />
      <path d="M58 26V42M58 30L66 26M58 30L52 36M58 42L54 54M58 42L62 54" fill="none" stroke="#e6fff0" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 56L20 50H66L74 56L68 60H18Z" fill="#6b4a1e" stroke="#ffb454" {...L} />
      <path d="M22 54H66" stroke="#ffd9a0" strokeOpacity="0.6" strokeWidth="1.2" />
      <path d="M4 66C10 63 14 69 20 66C26 63 30 69 36 66C42 63 46 69 52 66C58 63 62 69 68 66C72 64 76 68 78 66" fill="none" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
    </>
  )
}

function MathBridge() {
  const top = Array.from({ length: 9 }, (_, i) => [8 + i * 8, 40 - 12 * Math.sin((i / 8) * Math.PI)])
  return (
    <>
      <path d="M4 52H76" stroke="#19e3ff" strokeWidth="1.6" />
      <path d="M2 60C8 57 12 63 18 60C24 57 28 63 34 60C40 57 44 63 50 60C56 57 60 63 66 60C72 58 76 62 78 60" fill="none" stroke="#19e3ff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 44H72" stroke="#c8a46a" strokeWidth="3.4" strokeLinecap="round" />
      <path d={top.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join("")} fill="none" stroke="#c8a46a" strokeWidth="2.6" strokeLinejoin="round" />
      {top.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y}L${x} 44`} stroke="#c8a46a" strokeWidth="1.8" />
      ))}
      {top.slice(0, -1).map(([x, y], i) => (
        <path key={i} d={`M${x} ${y}L${top[i + 1][0]} 44M${top[i + 1][0]} ${top[i + 1][1]}L${x} 44`} stroke="#ffd9a0" strokeOpacity="0.75" strokeWidth="1.2" />
      ))}
      <path d="M8 44V50M72 44V50" stroke="#c8a46a" strokeWidth="2" strokeLinecap="round" />
      <rect x="0" y="20" width="6" height="40" fill="#3a2414" stroke="#e8a070" strokeWidth="1.4" />
      <rect x="74" y="20" width="6" height="40" fill="#3a2414" stroke="#e8a070" strokeWidth="1.4" />
    </>
  )
}

function FormalGown() {
  return (
    <>
      <path d="M40 4C40 8 34 8 34 13" fill="none" stroke="#e6fff0" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 22L40 12L68 22" fill="none" stroke="#e6fff0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 20C32 16 48 16 54 20L60 30C66 40 70 56 72 72H8C10 56 14 40 20 30Z" fill="#12161c" stroke="#e6fff0" {...L} />
      <path d="M26 20L40 44L54 20" fill="#f6f6f6" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M36 28L40 31L44 28L44 34L40 31L36 34Z" fill="#14181e" stroke="#fff" strokeWidth="0.8" strokeLinejoin="round" />
      <path d="M26 20L32 48L30 72M54 20L48 48L50 72" fill="none" stroke="#9aa4ae" strokeWidth="1.4" />
      <path d="M20 30C14 46 12 58 10 70M60 30C66 46 68 58 70 70" fill="none" stroke="#9aa4ae" strokeOpacity="0.5" strokeWidth="1.2" />
      <path d="M8 72H72" stroke="#e6fff0" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Steinway() {
  return (
    <>
      <path d="M8 40L56 12L66 18L64 40Z" fill="#0a0d12" fillOpacity="0.85" stroke="#e6fff0" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 40L50 14" stroke="#9aa4ae" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 40H64C74 40 76 46 74 50C72 53 66 52 60 52H6Z" fill="#0a0d12" stroke="#e6fff0" {...L} />
      <rect x="6" y="44" width="16" height="5" fill="#f6f6f6" stroke="#e6fff0" strokeWidth="1" />
      {[9, 12, 15, 18].map((x) => (
        <rect key={x} x={x} y="44" width="1.6" height="3" fill="#14181e" />
      ))}
      <path d="M10 52V70M62 52V70M38 52V70" stroke="#e6fff0" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 52V62M26 52V62" stroke="#ffcf4a" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="71" r="1.8" fill="#ffcf4a" />
      <circle cx="62" cy="71" r="1.8" fill="#ffcf4a" />
      <circle cx="38" cy="71" r="1.8" fill="#ffcf4a" />
      <text x="48" y="48" textAnchor="middle" fontSize="7" fontWeight="700" fill="#ffcf4a" fontFamily="var(--font-pixel), serif">D</text>
    </>
  )
}

function Yamaha() {
  return (
    <>
      <path d="M10 38L50 24L60 28L58 38Z" fill="#0a0d12" fillOpacity="0.85" stroke="#19e3ff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 38H58C66 38 68 42 66 46C64 48 60 48 56 48H12Z" fill="#0a0d12" stroke="#19e3ff" {...L} />
      <rect x="10" y="41" width="14" height="4.4" fill="#f6f6f6" stroke="#19e3ff" strokeWidth="1" />
      {[12, 15, 18, 21].map((x) => (
        <rect key={x} x={x} y="41" width="1.5" height="2.8" fill="#14181e" />
      ))}
      <path d="M16 48V66M56 48V66M36 48V66" stroke="#19e3ff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M26 48V58M30 48V58" stroke="#e6fff0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M30 36L36 26L42 36" fill="none" stroke="#9aa4ae" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="16" cy="67" r="1.8" fill="#e6fff0" />
      <circle cx="56" cy="67" r="1.8" fill="#e6fff0" />
      <circle cx="36" cy="67" r="1.8" fill="#e6fff0" />
      <text x="62" y="21" fontSize="9" fill="#19e3ff">♪</text>
    </>
  )
}

function BerlinPhil() {
  return (
    <>
      <path d="M6 58L14 42L24 44L38 20L54 30L60 24L74 40L74 58Z" fill="#ffcf4a" fillOpacity="0.2" stroke="#ffcf4a" {...L} />
      <path d="M14 42L20 58M24 44L30 58M38 20L36 44M38 20L46 40M54 30L50 44M60 24L58 42M60 24L66 40M74 40L70 58" fill="none" stroke="#ffcf4a" strokeOpacity="0.8" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 44H54L60 42" fill="none" stroke="#ffcf4a" strokeOpacity="0.8" strokeWidth="1.4" />
      <rect x="6" y="58" width="68" height="10" fill="#1a1608" stroke="#e8c98a" strokeWidth="1.8" />
      {[12, 22, 32, 42, 52, 62].map((x) => (
        <rect key={x} x={x} y="60" width="6" height="6" fill="#ffcf4a" fillOpacity="0.4" stroke="#e8c98a" strokeWidth="0.9" />
      ))}
      <path d="M2 68H78" stroke="#e8c98a" strokeWidth="2" strokeLinecap="round" />
      <text x="40" y="14" textAnchor="middle" fontSize="9" fill="#e6fff0">♫</text>
    </>
  )
}

/* ------------------------------------------------------------- registry */

export type MoreKey =
  | "unagi" | "udon" | "ramen" | "onigiri" | "greatwall" | "harbour" | "tokyotower" | "skytree" | "bellas" | "angel" | "eye" | "nhm"
  | "bigben" | "bus" | "phonebox" | "shinkansen" | "yatai" | "hanafuda" | "highland" | "goat" | "usaco" | "totoro" | "penguin"
  | "michelin" | "tennis" | "applewatch" | "vans" | "rtx" | "printer" | "cpp" | "java" | "typescript" | "git" | "crab" | "godot"
  | "angular" | "spring" | "docker" | "k8s" | "gitlab" | "bitlift" | "segtree"
  | "tartiflette" | "baguette" | "casamusica" | "saobento" | "lello" | "surf" | "southbank" | "punts" | "mathbridge" | "gown" | "steinway" | "yamaha" | "berlinphil"

export const MORE: Record<MoreKey, { label: string; caption: string; accent: string; Art: () => ReactNode }> = {
  unagi: { label: "Unagi", caption: "Unagi: grilled eel on rice.", accent: "#ffb454", Art: Unagi },
  udon: { label: "Udon", caption: "Udon: thick wheat noodles in broth.", accent: "#ffb454", Art: Udon },
  ramen: { label: "Hakata tonkotsu ramen", caption: "Hakata tonkotsu ramen: pork-bone broth and thin noodles, Fukuoka style.", accent: "#ff6b6b", Art: Ramen },
  onigiri: { label: "Onigiri", caption: "Onigiri: a rice ball wrapped in nori.", accent: "#e6fff0", Art: Onigiri },
  greatwall: { label: "Great Wall of China", caption: "The Great Wall of China.", accent: "#c8a46a", Art: GreatWall },
  harbour: { label: "Victoria Harbour", caption: "Victoria Harbour, Hong Kong, with a junk boat.", accent: "#19e3ff", Art: VictoriaHarbour },
  tokyotower: { label: "Tokyo Tower", caption: "Tokyo Tower.", accent: "#ff3b4e", Art: TokyoTower },
  skytree: { label: "Tokyo Skytree", caption: "Tokyo Skytree.", accent: "#19e3ff", Art: Skytree },
  bellas: { label: "Palacio de Bellas Artes", caption: "Palacio de Bellas Artes, Mexico City.", accent: "#e6dcc0", Art: BellasArtes },
  angel: { label: "Ángel de la Independencia", caption: "Ángel de la Independencia, Mexico City.", accent: "#ffcf4a", Art: AngelIndependence },
  eye: { label: "London Eye", caption: "The London Eye.", accent: "#19e3ff", Art: LondonEye },
  nhm: { label: "Natural History Museum", caption: "Natural History Museum, London.", accent: "#e8a070", Art: NaturalHistory },
  bigben: { label: "Big Ben", caption: "Big Ben, London.", accent: "#ffcf4a", Art: BigBen },
  bus: { label: "Double-decker bus", caption: "A London double-decker bus.", accent: "#ff3b4e", Art: DoubleDecker },
  phonebox: { label: "Red telephone box", caption: "A red telephone box.", accent: "#ff3b4e", Art: PhoneBox },
  shinkansen: { label: "Shinkansen", caption: "Shinkansen: the bullet train.", accent: "#19e3ff", Art: Shinkansen },
  yatai: { label: "Yatai", caption: "Yatai: Fukuoka's street-food stalls.", accent: "#4d7cff", Art: Yatai },
  hanafuda: { label: "Hanafuda", caption: "Hanafuda: Japanese flower cards.", accent: "#ff6b82", Art: Hanafuda },
  highland: { label: "Highland cow", caption: "A Highland cow.", accent: "#e8a35a", Art: HighlandCow },
  goat: { label: "Billy goat", caption: "A billy goat.", accent: "#e8eef0", Art: BillyGoat },
  usaco: { label: "USACO cow", caption: "The USACO cow.", accent: "#ff9ec7", Art: UsacoCow },
  totoro: { label: "Totoro", caption: "Totoro.", accent: "#7c8fa3", Art: Totoro },
  penguin: { label: "Juilliard penguin", caption: "The Juilliard penguin.", accent: "#e6fff0", Art: Penguin },
  michelin: { label: "Michelin star", caption: "A Michelin star.", accent: "#ff3b4e", Art: Michelin },
  tennis: { label: "Tennis racket", caption: "Tennis racket and ball.", accent: "#3dff8b", Art: TennisRacket },
  applewatch: { label: "Apple Watch", caption: "Apple Watch, rings closed.", accent: "#ff2d55", Art: AppleWatch },
  vans: { label: "Checkerboard slip-ons", caption: "Black and white checkerboard slip-ons.", accent: "#e6fff0", Art: Vans },
  rtx: { label: "RTX 4090", caption: "RTX 4090 graphics card.", accent: "#76b900", Art: Rtx4090 },
  printer: { label: "Bambu Lab A1 mini", caption: "Bambu Lab A1 mini 3D printer.", accent: "#00ae42", Art: Printer },
  cpp: { label: "C++", caption: "C++.", accent: "#19a7ff", Art: Cpp },
  java: { label: "Java", caption: "Java.", accent: "#ff4d4d", Art: Java },
  typescript: { label: "TypeScript", caption: "TypeScript.", accent: "#4d9cf0", Art: Typescript },
  git: { label: "Git", caption: "Git.", accent: "#ff6a4d", Art: Git },
  crab: { label: "Claude crab", caption: "The Claude Code crab.", accent: "#d97757", Art: Crab },
  godot: { label: "Godot", caption: "Godot.", accent: "#5cb0e8", Art: Godot },
  angular: { label: "Angular", caption: "Angular.", accent: "#ff2d55", Art: Angular },
  spring: { label: "Spring Boot", caption: "Spring Boot.", accent: "#6db33f", Art: SpringBoot },
  docker: { label: "Docker", caption: "Docker.", accent: "#2fa8ff", Art: Docker },
  k8s: { label: "Kubernetes", caption: "Kubernetes.", accent: "#4d8dff", Art: Kubernetes },
  gitlab: { label: "GitLab", caption: "GitLab.", accent: "#fc7a30", Art: Gitlab },
  bitlift: { label: "Binary lifting", caption: "Binary lifting: jump by powers of two.", accent: "#ff3da6", Art: BinaryLifting },
  tartiflette: { label: "Tartiflette", caption: "Tartiflette: potatoes, lardons and melted reblochon.", accent: "#e9a23a", Art: Tartiflette },
  baguette: { label: "French baguette", caption: "A French baguette.", accent: "#e0a24a", Art: Baguette },
  casamusica: { label: "Casa da Música", caption: "Casa da Música, Porto.", accent: "#e6fff0", Art: CasaMusica },
  saobento: { label: "Estação de São Bento", caption: "Estação de São Bento, Porto: the azulejo tile murals.", accent: "#4d8dff", Art: SaoBento },
  lello: { label: "Livraria Lello", caption: "Livraria Lello, Porto: the red staircase.", accent: "#ff6b82", Art: Lello },
  surf: { label: "Surfboard", caption: "Surfboard.", accent: "#19e3ff", Art: Surfboard },
  southbank: { label: "Southbank Skate Park", caption: "Southbank skate park, London: the undercroft.", accent: "#ff3da6", Art: SouthbankSkate },
  punts: { label: "Cambridge punts", caption: "Punting on the Cam, Cambridge.", accent: "#c8a46a", Art: Punts },
  mathbridge: { label: "Mathematical Bridge", caption: "The Mathematical Bridge, Queens' College, Cambridge.", accent: "#c8a46a", Art: MathBridge },
  gown: { label: "Formal hall gown", caption: "A Cambridge formal hall gown.", accent: "#e6fff0", Art: FormalGown },
  steinway: { label: "Steinway Model D", caption: "Steinway & Sons Model D concert grand.", accent: "#ffcf4a", Art: Steinway },
  yamaha: { label: "Yamaha GB1K", caption: "Yamaha GB1K baby grand piano.", accent: "#19e3ff", Art: Yamaha },
  berlinphil: { label: "Berlin Philharmonic", caption: "Berlin Philharmonic: the Philharmonie, Berlin.", accent: "#ffcf4a", Art: BerlinPhil },
  segtree: { label: "Segment tree", caption: "Segment tree: range queries in log time.", accent: "#19e3ff", Art: SegmentTree },
}
