import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

export const runtime = "edge"

const code = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" })

const title = "Ian Samir Yep Manzano | イアン | Software Engineer"
const description = "Software engineer, ex-NHS doctor, competitive programmer. Piano, violin, Japanese, Mandarin and an unreasonable number of AtCoder problems."

export const metadata: Metadata = {
  metadataBase: new URL("https://isym.uk"),
  title,
  description,
  openGraph: { title, description, url: "https://isym.uk", siteName: "Ian Samir Yep Manzano", type: "website" },
}

export const viewport: Viewport = { themeColor: "#020906", colorScheme: "dark" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${code.variable}`} suppressHydrationWarning>
      <head>
        {/* The page is already dark: stop Dark Reader from re-theming it (and from injecting attributes React then flags as a hydration mismatch). */}
        <meta name="darkreader-lock" />
        {/* Reloading should start at the top, not where the browser last left the page (or at a #section). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{history.scrollRestoration="manual";var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="reload"&&location.hash){history.replaceState(null,"",location.pathname+location.search)}}catch(e){}`,
          }}
        />
        {/* DotGothic16 ships Japanese glyphs as unicode-range slices, which next/font cannot subset, so load the Google CSS directly. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
