import { Arch, Tux } from "@/components/art";
import { Reveal } from "@/components/reveal";
import { about, hobbies } from "@/lib/content";

const ROWS: [string, string][] = [
  ["OS", "Arch Linux (btw), Android, MacOS, iOS"],
  ["Role", "Software Engineer @ Barclays"],
  ["Past", "Doctor, NHS (St Thomas' & Guy's)"],
  ["Edu", "BSc Software Eng, Glasgow | MB BChir, Cambridge"],
  ["Stack", "Angular, Spring Boot, Kafka, Kubernetes"],
  ["Editor", "Neovim, VS Code"],
  ["Langs", "English, Español, 日本語, Français, Português, 中文"],
  ["Hobbies", hobbies],
  ["Uptime", "learning Japanese since 2017"],
];

const SWATCHES = [
  "#ff3b4e",
  "#ffcf4a",
  "#3dff8b",
  "#19e3ff",
  "#4d7cff",
  "#ff3da6",
  "#e6fff0",
  "#555",
];

export function Neofetch() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-5 self-start bg-void/55 p-4 text-[15px] leading-relaxed backdrop-blur-[3px]">
        {about.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <p>
              <span className="mr-2 text-phosphor">&gt;</span>
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="window neon-box self-start" delay={150}>
        <div className="window-bar">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />
          <span className="ml-2">~ $ neofetch</span>
        </div>
        <div className="flex gap-5 p-4 text-[13px] leading-6">
          <div className="hidden w-24 shrink-0 flex-col items-center gap-3 text-phosphor sm:flex">
            <Arch className="float-slow w-24 drop-shadow-[0_0_14px_var(--phosphor)]" />
            <Tux className="w-9 text-cyan drop-shadow-[0_0_8px_var(--cyan)]" />
          </div>
          <div className="min-w-0">
            <p className="neon">
              ian<span className="text-ink">@</span>isym.uk
            </p>
            <p className="text-dim">------------</p>
            {ROWS.map(([k, v]) => (
              <p key={k} className="break-words">
                <span className="text-phosphor">{k}</span>
                <span className="text-muted">: </span>
                {v}
              </p>
            ))}
            <div className="mt-3 flex gap-1" aria-hidden>
              {SWATCHES.map((c) => (
                <span key={c} className="h-4 w-4" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
