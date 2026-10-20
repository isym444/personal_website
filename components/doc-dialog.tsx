"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useState, type RefObject } from "react"
import { docs } from "@/lib/docs"

export type DocDialogProps = {
  id: string
  open: boolean
  onOpenChange: (open: boolean) => void
  returnTo?: RefObject<HTMLElement | null>
}

// Same terminal window as the clip popup, with a scanned document or photo in place of the video.
export default function DocDialog({ id, open, onOpenChange, returnTo }: DocDialogProps) {
  const doc = docs[id]
  const [loaded, setLoaded] = useState(false)
  if (!doc) return null
  const ratio = doc.w / doc.h

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="clip-overlay fixed inset-0 z-[56]" />
        <Dialog.Content
          className="clip-window window neon-box fixed left-1/2 top-1/2 z-[57] w-[min(94vw,720px)] max-h-[94dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto outline-none"
          style={{ ["--accent" as string]: doc.accent }}
          onCloseAutoFocus={(e) => {
            // Radix drops focus on the page body here; send it back to the button that opened the popup.
            e.preventDefault()
            returnTo?.current?.focus()
          }}
        >
          <div className="window-bar">
            <span className="truncate">~/{doc.dir}/{doc.src.split("/").pop()}</span>
            <Dialog.Close className="ml-auto shrink-0 border border-border px-2 font-pixel text-xs text-muted transition-colors hover:border-red hover:text-red" aria-label="Close">
              esc ✕
            </Dialog.Close>
          </div>
          <div className="p-4 sm:p-5">
            <div
              className={`clip-frame relative mx-auto ${doc.kind === "sheet" ? "bg-white" : "bg-black"}`}
              style={{ aspectRatio: `${ratio}`, width: `min(100%, calc(58dvh * ${ratio}))`, ["--accent" as string]: doc.accent }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={doc.src}
                alt={doc.alt}
                width={doc.w}
                height={doc.h}
                decoding="async"
                onLoad={() => setLoaded(true)}
                className="absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
              />
              <div className={`${doc.kind === "sheet" ? "doc-scan" : "clip-scan"} pointer-events-none absolute inset-0`} aria-hidden />
              <span className="clip-corner left-0 top-0 border-l-2 border-t-2" aria-hidden />
              <span className="clip-corner right-0 top-0 border-r-2 border-t-2" aria-hidden />
              <span className="clip-corner bottom-0 left-0 border-b-2 border-l-2" aria-hidden />
              <span className="clip-corner bottom-0 right-0 border-b-2 border-r-2" aria-hidden />
              {!loaded && (
                <div className="absolute inset-x-0 bottom-3 text-center font-pixel text-xs text-phosphor [text-shadow:var(--glow)]" aria-hidden>
                  LOADING<span className="blink">_</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <div className="min-w-0">
                <Dialog.Title className="font-pixel text-2xl leading-tight" style={{ color: doc.accent, textShadow: `0 0 12px ${doc.accent}66` }}>
                  {doc.title}
                </Dialog.Title>
                <Dialog.Description className="mt-0.5 text-[15px] text-ink">{doc.subtitle}</Dialog.Description>
              </div>
              <a className="link shrink-0 text-xs" href={doc.src} target="_blank" rel="noopener noreferrer">
                open full size ↗
              </a>
            </div>

            {doc.stats && (
            <ul className="mt-3 flex flex-wrap gap-2 text-[12px]">
              {doc.stats.map((s, i) => (
                <li key={s.label} className="border border-border px-2 py-0.5" style={i === 0 ? { borderColor: doc.accent, color: doc.accent } : undefined}>
                  <span className="text-muted">{s.label}</span> <span className={i === 0 ? "" : "text-ink"}>{s.value}</span>
                </li>
              ))}
            </ul>
            )}
            <p className="mt-3 border-t border-border pt-2 text-[11px] text-muted">{doc.note}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
