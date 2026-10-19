"use client"

import { useEffect, useState } from "react"
import snapshot from "@/content/stats.snapshot.json"

const BASE = "https://raw.githubusercontent.com/isym444/isym444/main/assets/stats"

type Stats = typeof snapshot

// Rating colours as each platform shows them.
function rankColour(platform: "atcoder" | "codeforces", rating: number | null | undefined) {
  if (!rating) return "var(--foreground)"
  const bands =
    platform === "atcoder"
      ? [[2800, "red"], [2400, "orange"], [2000, "yellow"], [1600, "blue"], [1200, "cyan"], [800, "green"], [400, "brown"], [0, "gray"]]
      : [[2400, "red"], [2100, "orange"], [1900, "violet"], [1600, "blue"], [1400, "cyan"], [1200, "green"], [0, "gray"]]
  const hit = bands.find(([min]) => rating >= (min as number))
  return `var(--rank-${hit ? hit[1] : "gray"})`
}

const n = (v: number | null | undefined) => (v == null ? "n/a" : v.toLocaleString("en-GB"))

function Row({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-1 border-t py-3 sm:grid-cols-[9rem_1fr]">
      <dt className="text-muted">{label}</dt>
      <dd className="tabular-nums">{children}</dd>
    </div>
  )
}

function Platform({ id, label, href, s }: { id: "atcoder" | "codeforces"; label: string; href: string; s: Stats["atcoder"] }) {
  return (
    <Row label={<a className="link" href={href} target="_blank" rel="noopener noreferrer">{label}</a>}>
      <span className="font-medium">{n(s.solved)}</span> solved, rating{" "}
      <span className="font-semibold" style={{ color: rankColour(id, s.rating) }}>{n(s.rating)}</span>
      <span className="text-muted"> (peak {n(s.peak)}, {n(s.contests)} contests)</span>
    </Row>
  )
}

function Chart({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${BASE}/${name}.png`} alt={alt} loading="lazy" decoding="async" className={`h-auto w-full ${className}`} />
  )
}

export function LiveStats() {
  const [s, setS] = useState<Stats>(snapshot)

  useEffect(() => {
    let cancelled = false
    fetch(`${BASE}/stats.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => !cancelled && j && setS(j))
      .catch(() => {}) // keep the bundled snapshot
    return () => {
      cancelled = true
    }
  }, [])

  const has = (c: string) => s.charts.includes(c)
  const words = Object.entries(s.words)

  return (
    <div>
      <dl>
        <Platform id="atcoder" label="AtCoder" href="https://atcoder.jp/users/isym444" s={s.atcoder} />
        <Platform id="codeforces" label="Codeforces" href="https://codeforces.com/profile/isym444" s={s.codeforces} />
        <Row label="ThemeCP">
          virtual rating <span className="font-semibold">{n(s.themecp.rating)}</span>
          <span className="text-muted"> over {n(s.themecp.contests)} contests</span>
        </Row>
        {s.cses && (
          <Row label="CSES">
            <span className="font-medium">{s.cses.solved}</span> of {s.cses.total} problems
            <span
              className="mt-2 block h-1.5 max-w-xs overflow-hidden rounded-full bg-surface"
              role="img"
              aria-label={`${s.cses.solved} of ${s.cses.total} solved`}
            >
              <span className="block h-full bg-brand" style={{ width: `${(s.cses.solved / s.cses.total) * 100}%` }} />
            </span>
          </Row>
        )}
        {words.map(([lang, count]) => (
          <Row key={lang} label={lang}>
            <span className="font-medium">{n(count)}</span> words known
            {lang === "Japanese" && <span className="text-muted">, JLPT {s.jlpt}</span>}
          </Row>
        ))}
        <Row label="USACO">{s.usaco} division</Row>
        <div className="border-t" />
      </dl>

      <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
        {has("solved-over-time") && <Chart name="solved-over-time" alt="Chart of AtCoder and Codeforces problems solved over time" />}
        {has("ratings") && <Chart name="ratings" alt="Chart of contest ratings over time" />}
        {has("difficulty-atcoder") && <Chart name="difficulty-atcoder" alt="AtCoder problems solved by difficulty" className="md:col-span-2" />}
        {has("difficulty-codeforces") && <Chart name="difficulty-codeforces" alt="Codeforces problems solved by difficulty" className="md:col-span-2" />}
        {has("cses") && <Chart name="cses" alt="CSES problem set progress by section" className="md:col-span-2" />}
        {has("languages") && <Chart name="languages" alt="Vocabulary growth over time" className="md:col-span-2" />}
      </div>

      <p className="mt-8 text-sm text-muted">
        Updated {s.updated} from my study-progress API, refreshed daily through my{" "}
        <a className="link" href="https://github.com/isym444" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
      </p>
    </div>
  )
}
