"use client"

import { useEffect, useState } from "react"
import snapshot from "@/content/stats.snapshot.json"

export const STATS_BASE = "https://raw.githubusercontent.com/isym444/isym444/main/assets/stats"
export type Stats = typeof snapshot

// Bundled snapshot first, then the live JSON from the profile repo (refreshed daily by its Action).
export function useStats(): Stats {
  const [stats, setStats] = useState<Stats>(snapshot)
  useEffect(() => {
    let cancelled = false
    fetch(`${STATS_BASE}/stats.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => !cancelled && j && setStats(j))
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])
  return stats
}
