import { Effects } from "@/components/effects"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { MatrixRain } from "@/components/matrix-rain"
import { Music } from "@/components/music"
import { Neofetch } from "@/components/neofetch"
import { PianoNav } from "@/components/piano"
import { Shelf } from "@/components/souvenirs"
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
        <Section id="about" kanji="紹介" title="About" symbols={["lucha", "pinata", "tacos", "tamales", "pozole", "cajeta", "piramide", "azteca", "unam", "vasconcelos"]}>
          <Neofetch />
          <Greetings />
        </Section>
        <Section id="experience" kanji="経歴" title="Experience" symbols={["steth", "glasgow", "brain", "kit"]}>
          <Experience />
        </Section>
        <Section id="projects" kanji="作品" title="Projects" symbols={["macos", "android", "quest", "g1"]}>
          <Projects />
        </Section>
        <Section id="journey" kanji="旅" title="Journey" symbols={["kings", "dazaifu", "umegae", "taipei", "hk", "xlb"]}>
          <Journey />
        </Section>
        <Section id="music" kanji="音楽" title="Music" symbols={["rcm", "hall"]}>
          <Music />
        </Section>
        <Section id="hobbies" kanji="趣味" title="Hobbies">
          <Shelf keys={["badminton", "skate", "camera", "omega", "partyhat", "scimitar", "coins", "hotpot"]} />
        </Section>
        <Section id="stats" kanji="統計" title="Live stats" symbols={["icpcb", "icpc"]}>
          <StatsViz />
        </Section>
        <Section id="highlights" kanji="実績" title="Highlights" symbols={["omamori", "books"]}>
          <Highlights />
        </Section>
      </main>
      <PapelPicado className="relative z-10 opacity-80" />
      <Footer />
      <PianoNav />
    </>
  )
}
