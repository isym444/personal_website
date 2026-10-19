import { Effects } from "@/components/effects"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { MatrixRain } from "@/components/matrix-rain"
import { Music } from "@/components/music"
import { Neofetch } from "@/components/neofetch"
import { PianoNav } from "@/components/piano"
import { Experience, Footer, Greetings, Highlights, Projects, Section } from "@/components/sections"
import { StatsViz } from "@/components/stats-viz"
import { PapelPicado } from "@/components/symbols"

export const runtime = "edge"

export default function Home() {
  return (
    <>
      <MatrixRain />
      <div className="scanlines" aria-hidden />
      <div className="vignette" aria-hidden />
      <Effects />
      <Hero />
      <PapelPicado className="relative z-10 -mt-6" />
      <main>
        <Section id="about" kanji="紹介" title="About" symbols={["lucha", "pinata", "tacos", "tamales", "pozole", "cajeta", "piramide", "azteca", "unam", "vasconcelos", "yoli", "vocho"]}>
          <Neofetch />
          <Greetings />
        </Section>
        <Section id="experience" kanji="経歴" title="Experience" symbols={["steth", "glasgow", "brain", "kit", "omega", "irnbru", "wellington"]}>
          <Experience />
        </Section>
        <Section id="highlights" kanji="実績" title="Highlights" symbols={["omamori", "books", "gown", "partyhat", "punts", "scimitar", "mathbridge", "coins"]}>
          <Highlights />
        </Section>
        <Section id="projects" kanji="作品" title="Projects" symbols={["macos", "surf", "android", "southbank", "quest", "xlb", "g1", "hotpot", "camera", "tartiflette", "baguette", "nata", "steamdeck", "ubuntu", "mindstorms", "drone", "keyboard"]}>
          <Projects />
        </Section>
        <Section id="journey" kanji="旅" title="Journey" symbols={["kings", "dazaifu", "umegae", "casamusica", "taipei", "saobento", "hk", "lello"]}>
          <Journey />
        </Section>
        <Section id="music" kanji="音楽" title="Music" symbols={["rcm", "steinway", "hall", "yamaha", "berlinphil"]}>
          <Music />
        </Section>
        <Section id="stats" kanji="統計" title="Live stats" symbols={[
            "icpcb", "bitlift", "cpp", "totoro", "ramen", "segtree", "tennis", "eye", "usaco", "java", "shinkansen", "highland",
            "typescript", "udon", "tokyotower", "git", "icpc", "angel", "crab", "yatai", "bigben", "docker", "onigiri", "k8s",
            "skate", "greatwall", "gitlab", "hanafuda", "bus", "spring", "unagi", "skytree", "angular", "bellas", "phonebox", "godot",
            "applewatch", "harbour", "rtx", "michelin", "vans", "goat", "nhm", "penguin", "printer", "badminton", "pearl", "hamster", "scuba", "djihq", "anki", "reef",
          ]}>
          <StatsViz />
        </Section>
      </main>
      <PapelPicado className="relative z-10 opacity-80" />
      <Footer />
      <PianoNav />
    </>
  )
}
