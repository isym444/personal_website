import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Newsreader } from "next/font/google"
import "./globals.css"

export const runtime = "edge"

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const title = "Ian Samir Yep Manzano | Software Engineer"
const description =
  "Software engineer at Barclays, ex-NHS doctor and competitive programmer. Projects, experience and live progress stats."

export const metadata: Metadata = {
  metadataBase: new URL("https://isym.uk"),
  title,
  description,
  openGraph: { title, description, url: "https://isym.uk", siteName: "Ian Samir Yep Manzano", type: "website" },
  twitter: { card: "summary", title, description },
}

export const viewport: Viewport = { themeColor: "#0d1822", colorScheme: "dark" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
