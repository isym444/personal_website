import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import TechList from "@/components/TechList";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-4 mb-8">
          <div className="prose dark:prose-invert max-w-none prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-li:marker:text-foreground">
            {/* About Page */}
            <h1>Hello!</h1>

            <p>I'm Ian Samir Yep Manzano, a Mexican-British medical doctor and aspiring Software Engineer.</p>

            <h2>My Experience</h2>

            <p>I work with various technologies including:</p>

            <TechList>
              <ul>
                <li>Java / Springboot</li>
                <li>Docker / Kubernetes</li>
                <li>GitLab</li>
                <li>Python / Django / PyQt</li>
                <li>C++</li>
              </ul>
            </TechList>

            <h2>Get in Touch</h2>

            <p>
              Feel free to reach out to me on{" "}
              <a href="https://github.com/isym444">GitHub</a> or{" "}
              <a href="https://linkedin.com/in/ian-samir-yep-manzano-5376107b">LinkedIn</a>!
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        </div>
      </main>

      <Footer />
    </div>
  );
}
