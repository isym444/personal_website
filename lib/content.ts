// Content mirrors the GitHub profile README (github.com/isym444).

export const profile = {
  name: "Ian Samir Yep Manzano",
  role: "Software engineer at Barclays",
  tagline:
    "Mexican-British software engineer, ex-NHS medical doctor and competitive programmer.",
  github: "https://github.com/isym444",
  linkedin: "https://www.linkedin.com/in/ian-samir-yep-manzano-5376107b",
  atcoder: "https://atcoder.jp/users/isym444",
  codeforces: "https://codeforces.com/profile/isym444",
};

export const about = [
  "I'm a full-stack software engineer on the legal technology team at Barclays in Glasgow.",
  "Before software I worked as a doctor in the NHS (St Thomas' and Guy's, London) after graduating in Medicine from the University of Cambridge.",
  "I compete in algorithmic programming contests in my spare time.",
  "Born in Mexico, raised in the UK.",
];

export const hobbies =
  "Languages, Classical Music, Competitive Programming, Skateboarding, Eating";

export const experience = [
  {
    role: "Software Engineer",
    org: "Barclays",
    years: "2023 to now",
    text: "Full-stack on a legal tech team: Angular, Spring Boot, Kafka, Kubernetes.",
  },
  {
    role: "Medical Doctor",
    org: "National Health Service",
    years: "2021 to 2023",
    text: "Cardiology, general surgery, geriatrics, internal medicine, GP and haematology. Worked at world-leading St Thomas' and Guy's Hospitals, London.",
  },
];

export const tech = {
  daily: [
    "Angular (TypeScript)",
    "Spring Boot (Java)",
    "Kafka",
    "Kubernetes & Docker",
    "GitLab CI/CD",
    "Git",
  ],
  also: [
    "Python / FastAPI",
    "C++",
    "Postgres / Supabase",
    "Godot",
    "Unity",
    "AI-assisted development (Claude, Copilot, GitLab Duo)",
  ],
};

export type Project = {
  name: string;
  year: string;
  text: string;
  stack: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Net Worth Dashboard",
    year: "2026",
    text: "A net-worth tracker I run myself. A Spring Boot service snapshots Trading212 and Crypto.com balances daily into Postgres and serves an Angular dashboard plus Android (Jetpack Glance) and macOS (WidgetKit) widgets.",
    stack: "Java, Spring Boot, Angular, Kotlin, Swift, Docker",
    links: [
      {
        label: "Source",
        href: "https://github.com/isym444/net-worth-dashboard",
      },
    ],
  },
  {
    name: "AgenticMD",
    year: "2026",
    text: "An AI medical scribe built at a hackathon: record a consultation, transcribe it and generate structured clinical notes. Angular front end, FastAPI backend, Supabase, speech-to-text and Gemini.",
    stack: "Angular, FastAPI, Supabase, Gemini",
    links: [
      {
        label: "Frontend",
        href: "https://github.com/isym444/agentic_md_frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/isym444/agentic-md-backend",
      },
    ],
  },
  {
    name: "HSK Practice",
    year: "2026",
    text: "A Mandarin HSK4 practice platform with an Angular app, a FastAPI and SQL backend for review statistics and deck ordering, and a Dockerised deployment on a VPS behind Traefik.",
    stack: "Angular, FastAPI, Postgres, Docker",
    links: [{ label: "Source", href: "https://github.com/isym444/hsk" }],
  },
  {
    name: "Binary Lift VR",
    year: "2026",
    text: "A Meta Quest game that teaches binary lifting: race an NPC to a tree's K-th ancestor by teleporting through power-of-two portals. The core logic is unit-tested outside Unity.",
    stack: "Unity, C#, OpenXR, algorithms",
    links: [
      { label: "Source", href: "https://github.com/isym444/BinaryLiftVR" },
    ],
  },
  {
    name: "Stockopolis",
    year: "2024",
    text: "A city builder from the Marshall Wace hackathon on chains of events: manage oil, wind and investment banks while stochastic market volatility moves commodity prices. Built in 24 hours.",
    stack: "Godot, GDScript",
    links: [{ label: "Source", href: "https://github.com/isym444/2024DYHTG" }],
  },
  {
    name: "AtCoder solutions",
    year: "2024",
    text: "My solutions to AtCoder problems in C++, plus custom templates and tooling for online judges.",
    stack: "C++, algorithms, data structures",
    links: [
      {
        label: "Solutions",
        href: "https://github.com/isym444/atcoder_solutions",
      },
      {
        label: "Templates",
        href: "https://github.com/isym444/OnlineJudgeToolsCustomTemplates",
      },
    ],
  },
];

export const moreProjects = [
  {
    name: "Shifting Speedways",
    text: "racing game from the Glasgow University Game Jam 2024 (Godot)",
    href: "https://github.com/isym444/GUGameJam24",
  },
  {
    name: "Japanese TTS browser extension",
    text: "reads copied Japanese text aloud, with keyboard controls",
    href: "https://github.com/isym444/tts-browser-extension",
  },
  {
    name: "Anki stats on the menu bar",
    text: "live remaining-reviews counter for chosen decks on macOS",
    href: "https://github.com/isym444/ankistatsonmenu",
  },
  {
    name: "Neovim config",
    text: "my editor setup",
    href: "https://github.com/isym444/ubuntu_nvim_config",
  },
];

export const highlights = [
  "UKIEPC 1st place at Glasgow University (top 15% across the UK and Ireland), qualifying for ICPC NWERC",
  "AtCoder green: 28th in the UK, top 25% worldwide",
  "Former president of the University of Glasgow competitive programming society, with a university volunteering award",
  "2 publications in international medical journals (Clinical Breast Cancer, Family Practice / Oxford University Press), 36 citations",
  "UK Biology Olympiad gold medal and University of Cambridge violin and piano scholarships",
  "JLPT N1 passed, plus a Tsuzuki Scholarship exchange year at the Japan University of Economics, Fukuoka",
];

export const languages = [
  { name: "English", level: "native" },
  { name: "Español", level: "native" },
  { name: "日本語", level: "JLPT N1" },
  { name: "Français", level: "B2" },
  { name: "Português", level: "CIPLE" },
  { name: "中文", level: "HSK 3" },
];

export const musicCredentials = {
  school: "Royal College of Music Junior Department",
  note: "Attended the Royal College of Music Junior Department.",
  venues: ["Royal Albert Hall", "Wigmore Hall"],
};

export type Repertoire = {
  instrument: "Piano" | "Violin";
  composer: string;
  works: string[];
  accent: string;
};

// Favourite repertoire played.
export const repertoire: Repertoire[] = [
  {
    instrument: "Piano",
    composer: "Chopin",
    works: [
      "Études (selection)",
      "Piano Concerto No. 1 (1st movement)",
      "Grande Polonaise Brillante",
    ],
    accent: "var(--magenta)",
  },
  {
    instrument: "Piano",
    composer: "Liszt",
    works: [
      "Mephisto Waltz No. 1",
      "Petrarch Sonnets (selection)",
      "Faust Waltz",
    ],
    accent: "var(--cyan)",
  },
  {
    instrument: "Piano",
    composer: "Rachmaninov",
    works: ["Piano Concerto No. 2 (1st movement)", "Prelude Op. 23 No. 5"],
    accent: "var(--gold)",
  },
  {
    instrument: "Piano",
    composer: "Schumann",
    works: ["Abegg Variations"],
    accent: "var(--phosphor)",
  },
  {
    instrument: "Piano",
    composer: "Bach",
    works: ["Partita No. 2"],
    accent: "var(--ink)",
  },
  {
    instrument: "Violin",
    composer: "Wieniawski",
    works: ["Scherzo-Tarantelle"],
    accent: "var(--gold)",
  },
  {
    instrument: "Violin",
    composer: "Paganini / Kreisler",
    works: ["La Campanella"],
    accent: "var(--magenta)",
  },
  {
    instrument: "Violin",
    composer: "Violin concertos",
    works: ["Mendelssohn", "Bruch", "Saint-Saëns No. 3"],
    accent: "var(--cyan)",
  },
];
