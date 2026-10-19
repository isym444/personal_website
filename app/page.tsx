import Image from "next/image"
import { LiveStats } from "@/components/live-stats"
import { about, experience, highlights, languages, moreProjects, profile, projects, tech } from "@/lib/content"

export const runtime = "edge"

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Highlights", "#highlights"],
  ["Live stats", "#stats"],
]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t pb-16 pt-10 md:pb-20 md:pt-12">
      <h2 className="mb-8 font-serif text-3xl font-medium tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-background focus:p-2">
        Skip to content
      </a>

      <aside className="py-8 lg:sticky lg:top-0 lg:h-screen lg:py-14">
        <div className="flex items-center gap-4 lg:block">
          <Image src="/logo.jpeg" alt="" width={72} height={72} priority className="h-14 w-14 rounded-full object-cover lg:h-[4.5rem] lg:w-[4.5rem]" />
          <div className="lg:mt-5">
            <p className="font-serif text-xl font-medium leading-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.role}</p>
          </div>
        </div>

        <nav aria-label="Sections" className="mt-6 hidden lg:block">
          <ul className="space-y-2 text-[0.95rem]">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm lg:mt-8 lg:block lg:space-y-2">
          <li><ExternalLink href={profile.github}>GitHub</ExternalLink></li>
          <li><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></li>
          <li><ExternalLink href={profile.atcoder}>AtCoder</ExternalLink></li>
          <li><ExternalLink href={profile.codeforces}>Codeforces</ExternalLink></li>
        </ul>

      </aside>

      <main className="min-w-0 pb-12 lg:py-14">
        <header className="pb-14 pt-4 lg:pt-0">
          <p lang="es" style={{ "--i": 0 } as React.CSSProperties} className="hero-in mb-5 font-serif text-lg italic text-muted">
            Hi, hola, <span lang="ja">こんにちは</span>
          </p>
          <h1 style={{ "--i": 1 } as React.CSSProperties} className="hero-in max-w-[18ch] font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Software engineer, former NHS doctor.
          </h1>
          <p style={{ "--i": 2 } as React.CSSProperties} className="hero-in mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">{profile.tagline}</p>
        </header>

        <Section id="about" title="About">
          <div className="max-w-[66ch] space-y-5 text-[1.0625rem] leading-relaxed">
            {about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 max-w-[66ch] space-y-3 text-[0.95rem]">
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-4">
              <dt className="text-muted">Day to day</dt>
              <dd>{tech.daily.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-4">
              <dt className="text-muted">Also</dt>
              <dd>{tech.also.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-4">
              <dt className="text-muted">Languages</dt>
              <dd>
                {languages.map((l, i) => (
                  <span key={l.name}>
                    {i > 0 && ", "}
                    <span>{l.name}</span> <span className="text-muted">({l.level})</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-10">
            {experience.map((e) => (
              <li key={e.role} className="grid gap-x-8 gap-y-1 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm tabular-nums text-muted sm:pt-1">{e.years}</p>
                <div className="max-w-[62ch]">
                  <h3 className="text-lg font-medium">
                    {e.role}, {e.org}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.name} className="border-t pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <span className="text-sm tabular-nums text-muted">{p.year}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.stack}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 text-sm">
                  {p.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-14 text-lg font-medium">More</h3>
          <ul className="max-w-[66ch] space-y-2 leading-relaxed">
            {moreProjects.map((p) => (
              <li key={p.name}>
                <ExternalLink href={p.href}>{p.name}</ExternalLink>
                <span className="text-muted">, {p.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="highlights" title="Highlights">
          <ul className="max-w-[66ch] list-disc space-y-3 pl-5 leading-relaxed marker:text-brand">
            {highlights.map((h) => (
              <li key={h.slice(0, 24)}>{h}</li>
            ))}
          </ul>
        </Section>

        <Section id="stats" title="Live stats">
          <LiveStats />
        </Section>

        <footer className="border-t pt-8 text-sm text-muted">
          <p>
            {new Date().getFullYear()} {profile.name}.{" "}
            <ExternalLink href={profile.github}>GitHub</ExternalLink>,{" "}
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </p>
        </footer>
      </main>
    </div>
  )
}
