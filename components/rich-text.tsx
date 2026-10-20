import { DocButton } from "@/components/doc-button"

// Plain text with optional popup links: `[[visible text|doc-id]]` becomes a button that opens that entry of lib/docs.ts.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\[\[(.+?)\|(.+?)\]\]/g)
  // split() with two capture groups yields: text, label, id, text, label, id, ..., text
  return (
    <>
      {parts.map((part, i) => {
        if (i % 3 === 0) return part
        if (i % 3 === 1) return <DocButton key={i} id={parts[i + 1]} label={part} inline />
        return null
      })}
    </>
  )
}
