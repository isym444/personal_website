// Documents and photos shown in the popup (components/doc-dialog.tsx). Images only: never ship the original PDF or a
// screenshot with a URL in it (the JLPT printout's footer carried the results-lookup login, so it was cropped out and
// the registration number blacked out), and strip EXIF/GPS from photos (`magick in.jpg -strip out.webp`).
export type DocInfo = {
  /** "sheet" is a white scanned page; "photo" gets the video-style CRT treatment. */
  kind: "sheet" | "photo"
  src: string
  w: number
  h: number
  title: string
  subtitle: string
  alt: string
  accent: string
  /** Shown in the window bar, e.g. ~/credentials/<file>. */
  dir: string
  note: string
  stats?: { label: string; value: string }[]
}

export const docs: Record<string, DocInfo> = {
  "jlpt-n1": {
    kind: "sheet",
    dir: "credentials",
    alt: "JLPT N1 results sheet: passed, total 153 out of 180",
    note: "printout of the online results page · registration number hidden · esc to close",
    src: "/docs/jlpt-n1-results.webp",
    w: 1240,
    h: 1310,
    title: "JLPT N1",
    subtitle: "Japanese-Language Proficiency Test, July 2025",
    accent: "var(--gold)",
    stats: [
      { label: "結果 Result", value: "合格 Passed" },
      { label: "Total", value: "153 / 180" },
      { label: "Language knowledge", value: "47 / 60" },
      { label: "Reading", value: "60 / 60" },
      { label: "Listening", value: "46 / 60" },
    ],
  },
  nwerc: {
    kind: "photo",
    dir: "photos",
    src: "/docs/nwerc.webp",
    w: 1024,
    h: 768,
    title: "ICPC NWERC",
    subtitle: "North Western Europe Regional Contest 2025, competing for the University of Glasgow",
    alt: "Ian typing at a laptop in the contest hall at ICPC NWERC, with the University of Glasgow team sign on the desk",
    note: "qualified through UKIEPC · esc to close",
    accent: "var(--gold)",
  },
  "cambridge-graduation": {
    kind: "photo",
    dir: "photos",
    src: "/docs/cambridge-graduation.webp",
    w: 1600,
    h: 1066,
    title: "University of Cambridge",
    subtitle: "Graduation day at the Senate House",
    alt: "Ian in Cambridge graduation robes holding his framed University of Cambridge degree certificate on the lawn in front of the Senate House",
    note: "esc to close",
    accent: "var(--red)",
  },
  "mexico-baby": {
    kind: "photo",
    dir: "photos",
    src: "/docs/mexico-baby.webp",
    w: 1056,
    h: 1600,
    title: "Mexico",
    subtitle: "Where it started: a baby photo",
    alt: "A baby in a patterned bouncer being fed from a small jar with a spoon, photographed from above",
    note: "esc to close",
    accent: "var(--phosphor)",
  },
  "fukuoka-completion": {
    kind: "photo",
    dir: "photos",
    src: "/docs/fukuoka-completion.webp",
    w: 768,
    h: 1024,
    title: "Japan University of Economics",
    subtitle: "Completion certificate day, Tsuzuki Scholarship exchange in Fukuoka",
    alt: "Ian in a suit holding a green Japan University of Economics completion certificate, standing arm in arm with a smiling woman in a pink cardigan",
    note: "esc to close",
    accent: "var(--magenta)",
  },
  "london-doctor": {
    kind: "photo",
    dir: "photos",
    src: "/docs/london-doctor.webp",
    w: 768,
    h: 1024,
    title: "Doctor",
    subtitle: "In scrubs and an FFP3 mask, from the student doctor days",
    alt: "Ian in blue scrubs, a surgical cap and a 3M FFP3 mask, wearing a Student Doctor lanyard",
    note: "esc to close",
    accent: "var(--cyan)",
  },
  "glasgow-cow": {
    kind: "photo",
    dir: "photos",
    src: "/docs/glasgow-cow.webp",
    w: 1024,
    h: 768,
    title: "Glasgow",
    subtitle: "A Highland cow keeping watch over the University of Glasgow team desk at ICPC NWERC",
    alt: "A plush Highland cow sitting on top of a laptop whose screen is covered by the University of Glasgow team sign at ICPC NWERC",
    note: "esc to close",
    accent: "var(--gold)",
  },
}
