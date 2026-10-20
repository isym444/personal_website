"use client"

import type { ComponentType, ReactNode } from "react"
import { useRef, useState } from "react"
import type { DocDialogProps } from "@/components/doc-dialog"
import { docs } from "@/lib/docs"
import { loadChunk } from "@/lib/load-chunk"

// The popup (and Radix's dialog) loads only once a visitor shows interest, and is cached after the first load.
// A failed load is not cached, so the next attempt retries.
let dialog: Promise<ComponentType<DocDialogProps>> | null = null
const getDialog = () =>
  (dialog ??= loadChunk(() => import("@/components/doc-dialog"))
    .then((m) => m.default)
    .catch((e) => {
      dialog = null
      throw e
    }))

const warm = (id: string) => {
  getDialog().catch(() => {})
  if (typeof Image !== "undefined" && docs[id]) new Image().src = docs[id].src
}

/**
 * Opens a document or photo (lib/docs.ts) in the popup. `inline` renders as underlined text for use inside a
 * sentence; `card` turns its children into a whole clickable card; the default is a full-width button for use
 * under a block of text.
 */
export function DocButton({ id, label, inline = false, card = false, children }: { id: string; label: string; inline?: boolean; card?: boolean; children?: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [Dialog, setDialog] = useState<ComponentType<DocDialogProps> | null>(null)
  const [failed, setFailed] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  const doc = docs[id]
  if (!doc) return <>{label}</>

  // If the popup code cannot load even after a retry, still let the visitor see the image.
  if (failed) {
    return (
      <a className="link" href={doc.src} target="_blank" rel="noopener noreferrer">
        {label} ↗
      </a>
    )
  }

  const show = () => {
    setOpen(true)
    getDialog().then(
      (C) => setDialog(() => C),
      () => setFailed(true),
    )
  }
  const glyph = doc.kind === "photo" ? "◐" : "▣"
  const interest = {
    onPointerEnter: () => warm(id),
    onFocus: () => warm(id),
    onTouchStart: () => warm(id),
  }

  return (
    <>
      {card ? (
        <button ref={button} type="button" className="window neon-box doc-card p-3" style={{ ["--accent" as string]: doc.accent }} onClick={show} {...interest}>
          {children}
          <span className="doc-card-foot">
            <span className="clip-play" aria-hidden>{glyph}</span>
            <span>{label}</span>
            <span className="clip-tag" aria-hidden>VIEW</span>
          </span>
        </button>
      ) : inline ? (
        <button ref={button} type="button" className="doc-inline" style={{ ["--accent" as string]: doc.accent }} onClick={show} {...interest}>
          {label}
          <span className="doc-inline-glyph" aria-hidden>{glyph}</span>
        </button>
      ) : (
        <button ref={button} type="button" className="clip-link mt-3" style={{ ["--accent" as string]: doc.accent }} onClick={show} {...interest}>
          <span className="clip-play" aria-hidden>{glyph}</span>
          <span>{label}</span>
          <span className="clip-tag" aria-hidden>VIEW</span>
        </button>
      )}
      {Dialog && <Dialog id={id} open={open} onOpenChange={setOpen} returnTo={button} />}
    </>
  )
}
