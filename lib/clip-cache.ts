import { isMuted } from "@/lib/audio"
import { clipMeta, clipUrl, posterUrl } from "@/lib/clips"

// Detached <video> elements that already buffered their clip. Opening a piece re-parents the warm element into the popup,
// so playback starts on the first frame instead of waiting on a network round trip.
const cache = new Map<string, HTMLVideoElement>()
const MAX = 4
// Short loops are fully buffered on hover so they start instantly. Longer clips only fetch metadata until they are opened.
const LONG = 20

function saveData() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  return !!c?.saveData
}

// The site-wide mute (top-right button) decides by default; the popup's own toggle overrides it until reload.
let override: boolean | null = null
export const clipSound = () => override ?? !isMuted()
export const setClipSound = (on: boolean) => {
  override = on
}

function make(id: string) {
  const v = document.createElement("video")
  v.muted = true
  v.loop = true
  v.playsInline = true
  v.preload = (clipMeta(id)?.d ?? 0) > LONG ? "metadata" : "auto"
  v.disablePictureInPicture = true
  v.setAttribute("disableremoteplayback", "")
  v.setAttribute("aria-hidden", "true")
  v.tabIndex = -1
  v.poster = posterUrl(id)
  v.src = clipUrl(id)
  return v
}

function get(id: string) {
  let v = cache.get(id)
  if (v) {
    cache.delete(id) // re-insert as most recent
  } else {
    v = make(id)
  }
  cache.set(id, v)
  for (const [k, old] of cache) {
    if (cache.size <= MAX) break
    if (!old.isConnected) {
      old.removeAttribute("src")
      old.load()
      cache.delete(k)
    }
  }
  return v
}

/** Start buffering a clip on hover/focus/touch. Skipped on data-saver connections. */
export function prefetchClip(id: string) {
  if (typeof document === "undefined" || saveData()) return
  get(id)
}

/** The element to show in the popup (buffered already if it was prefetched). */
export function acquireClip(id: string) {
  return get(id)
}

/**
 * Start a clip with sound. Call it synchronously from the click/keypress that opens or switches clips:
 * browsers only allow unmuted playback inside a user gesture. If they refuse anyway, it plays muted instead.
 */
export function playClip(id: string) {
  const v = get(id)
  v.preload = "auto"
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return v
  v.muted = !clipSound()
  v.play().catch(() => {
    if (v.muted) return
    v.muted = true
    v.play().catch(() => {})
  })
  return v
}

/** Stop a clip started with playClip (e.g. when the popup could not load). */
export function stopClip(id: string) {
  const v = cache.get(id)
  if (v) {
    v.pause()
    v.currentTime = 0
  }
}
