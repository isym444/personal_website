import manifest from "@/content/clips.json"

// Written by `npm run clip`; a piece only becomes clickable once it has an entry here.
// a: has audio. d: seconds.
type ClipMeta = { w: number; h: number; a: boolean; d: number; v: number }
const clips = manifest as Record<string, ClipMeta>

// Clips are tiny, so public/ is fine. Point this at a bucket/CDN if they ever outgrow the repo.
const BASE = process.env.NEXT_PUBLIC_CLIP_BASE ?? "/repertoire"

export const clipMeta = (id: string): ClipMeta | undefined => clips[id]
export const clipUrl = (id: string) => `${BASE}/${id}.mp4?v=${clips[id]?.v ?? 0}`
export const posterUrl = (id: string) => `${BASE}/${id}.jpg?v=${clips[id]?.v ?? 0}`
