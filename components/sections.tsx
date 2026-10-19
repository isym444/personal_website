"use client";

import { useRef } from "react";
import {
  Binary,
  Building2,
  Glasses,
  Languages as LanguagesIcon,
  Stethoscope,
  Trophy,
  Wallet,
} from "lucide-react";
import { Arch, Lantern, Tux } from "@/components/art";
import { Reveal } from "@/components/reveal";
import { Belt, Gutters } from "@/components/souvenirs";
import type { SymbolKey } from "@/components/symbols";
import {
  experience,
  highlights,
  languages,
  moreProjects,
  profile,
  projects,
  type Project,
} from "@/lib/content";

export function Section({
  id,
  kanji,
  title,
  symbols,
  children,
}: {
  id: string;
  kanji: string;
  title: string;
  symbols?: SymbolKey[];
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative">
      {symbols && <Gutters keys={symbols} />}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <Reveal as="header" className="mb-10">
          <h2 className="font-pixel text-3xl sm:text-4xl">
            <span className="text-magenta">{"//"}</span>{" "}
            <span className="neon">{kanji}</span>{" "}
            <span className="text-ink">{title}</span>
          </h2>
        </Reveal>
        {symbols && <Belt keys={symbols} />}
        {children}
      </div>
    </section>
  );
}

/* ---------- Experience as a git log ---------- */
export function Experience() {
  return (
    <ol className="space-y-6">
      {experience.map((e, i) => (
        <Reveal
          key={e.role}
          as="li"
          delay={i * 120}
          className="window neon-box"
        >
          <div className="window-bar">
            <span className="text-phosphor">*</span>
            <span>{i === 0 ? "(HEAD -> main)" : "(origin/main~1)"}</span>
            <span className="ml-auto">{e.years}</span>
          </div>
          <div className="p-4">
            <h3 className="font-pixel text-xl text-ink">
              {e.role} <span className="text-magenta">@</span>{" "}
              <span className="text-cyan">{e.org}</span>
            </h3>
            <p className="mt-2 max-w-[70ch] text-ink/85">{e.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------- Projects: tilt cards ---------- */
const ICONS: Record<string, typeof Wallet> = {
  "Net Worth Dashboard": Wallet,
  AgenticMD: Stethoscope,
  "HSK Practice": LanguagesIcon,
  "Binary Lift VR": Glasses,
  Stockopolis: Building2,
  "AtCoder solutions": Binary,
};
const ACCENTS = [
  "var(--phosphor)",
  "var(--cyan)",
  "var(--magenta)",
  "var(--gold)",
  "var(--phosphor)",
  "var(--cyan)",
];

function Tilt({
  children,
  className = "",
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (
      !el ||
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(6px)`;
    el.style.boxShadow = `${-x * 24}px ${-y * 24}px 40px ${accent}22, 0 0 0 1px ${accent}`;
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
  };
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const Icon = ICONS[p.name] ?? Binary;
  const accent = ACCENTS[i % ACCENTS.length];
  return (
    <Reveal as="li" delay={(i % 2) * 110}>
      <Tilt accent={accent} className="window h-full p-5">
        <div className="flex items-start justify-between gap-4">
          <span
            className="flex h-11 w-11 items-center justify-center border"
            style={{
              borderColor: accent,
              color: accent,
              boxShadow: `0 0 14px ${accent}44`,
            }}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-pixel text-sm text-muted">{p.year}</span>
        </div>
        <h3
          className="mt-4 font-pixel text-2xl"
          style={{ color: accent, textShadow: `0 0 12px ${accent}66` }}
        >
          {p.name}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink/85">
          {p.text}
        </p>
        <p className="mt-3 text-xs text-muted">{p.stack}</p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {p.links.map((l) => (
            <a
              key={l.href}
              className="link"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
        </p>
      </Tilt>
    </Reveal>
  );
}

export function Projects() {
  return (
    <div>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </ul>
      <Reveal className="mt-10">
        <p className="mb-3 font-pixel text-lg text-muted">more.txt</p>
        <ul className="space-y-1 text-sm">
          {moreProjects.map((m) => (
            <li key={m.name}>
              <span className="text-phosphor">$</span>{" "}
              <a
                className="link"
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {m.name}
              </a>
              <span className="text-muted">: {m.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

/* ---------- Highlights as unlocked achievements ---------- */
export function Highlights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {highlights.map((h, i) => (
        <Reveal
          key={h.slice(0, 20)}
          delay={(i % 2) * 100 + Math.floor(i / 2) * 60}
          className="window neon-box flex gap-4 p-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold text-gold shadow-[0_0_14px_rgba(255,207,74,0.35)]">
            <Trophy className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-pixel text-xs text-gold">
              実績解除 // achievement unlocked
            </p>
            <p className="mt-1 text-[13.5px] leading-snug text-ink/90">{h}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Languages as floating greetings ---------- */
const GREETINGS: Record<string, string> = {
  English: "Hello",
  Español: "Hola",
  日本語: "こんにちは",
  Français: "Bonjour",
  Português: "Olá",
  中文: "你好",
};
const TONES = [
  "var(--phosphor)",
  "var(--cyan)",
  "var(--magenta)",
  "var(--gold)",
  "var(--phosphor)",
  "var(--red)",
];

export function Greetings() {
  return (
    <div className="mt-14 flex flex-wrap gap-4">
      {languages.map((l, i) => (
        <Reveal key={l.name} delay={i * 80}>
          <div
            className="float window px-4 py-3 text-center"
            style={{ animationDelay: `${-i * 1.1}s`, borderColor: TONES[i] }}
          >
            <p
              className="font-pixel text-2xl"
              style={{ color: TONES[i], textShadow: `0 0 12px ${TONES[i]}77` }}
            >
              {GREETINGS[l.name]}
            </p>
            <p className="text-xs text-muted">
              {l.name} ({l.level})
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-40 pt-10 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-8 border-t border-border pt-8">
        <div>
          <p className="flex items-center gap-3 font-pixel text-xl">
            <Arch className="h-7 w-7 text-phosphor drop-shadow-[0_0_8px_var(--phosphor)]" />
            <Tux className="h-7 w-7 text-cyan drop-shadow-[0_0_8px_var(--cyan)]" />
            <span className="neon">I use arch btw</span>
          </p>
          <p className="mt-3 text-sm text-muted">
            <a
              className="link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" / "}
            <a
              className="link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {" / "}
            <a
              className="link"
              href={profile.atcoder}
              target="_blank"
              rel="noopener noreferrer"
            >
              AtCoder
            </a>
            {" / "}
            <a
              className="link"
              href={profile.codeforces}
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces
            </a>
            {" / "}
            <a
              className="link"
              href={profile.resume}
              download="Ian-Samir-Yep-Manzano-CV.pdf"
            >
              Resume
            </a>
          </p>
          <p className="mt-2 text-xs text-muted">
            {new Date().getFullYear()} {profile.name}. Psst: try{" "}
            <kbd className="border border-dim px-1 text-phosphor">
              ↑ ↑ ↓ ↓ ← → ← → B A
            </kbd>
          </p>
        </div>
        <Lantern className="sway w-12 drop-shadow-[0_0_16px_rgba(255,60,60,0.55)]" />
      </div>
    </footer>
  );
}
