import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const runtime = "edge";
export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">OnlineJudgeToolsCustomTemplates</h2>
            <p className="text-muted-foreground mb-4">Custom templates for competitive programming using online-judge-tools</p>
            <p className="text-sm text-muted-foreground mb-4">Built with C++</p>
            <Link href="https://github.com/isym444/OnlineJudgeToolsCustomTemplates" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">2024DYHTG</h2>
            <p className="text-muted-foreground mb-4">Small game built in 24 hours for a hackathon</p>
            <p className="text-sm text-muted-foreground mb-4">Built with GDScript</p>
            <Link href="https://github.com/isym444/2024DYHTG" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">pyqtTodo</h2>
            <p className="text-muted-foreground mb-4">A Todo application built with PyQt</p>
            <p className="text-sm text-muted-foreground mb-4">Built with Python</p>
            <Link href="https://github.com/isym444/pyqtTodo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">dinnit</h2>
            <p className="text-muted-foreground mb-4">Collaborative project for dinner planning</p>
            <p className="text-sm text-muted-foreground mb-4">Built with JavaScript</p>
            <Link href="https://github.com/Heroskin12/dinnit" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">AnkiStats on Menu</h2>
            <p className="text-muted-foreground mb-4">A macOS menu bar application that displays and automatically updates user-specified Anki decks' remaining daily reviews</p>
            <p className="text-sm text-muted-foreground mb-4">Built with Python</p>
            <Link href="https://github.com/isym444/ankistatsonmenu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">AtCoder Solutions</h2>
            <p className="text-muted-foreground mb-4">Collection of competitive programming solutions for AtCoder problems</p>
            <p className="text-sm text-muted-foreground mb-4">Built with C++</p>
            <Link href="https://github.com/isym444/atcoder_solutions" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View Project</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 