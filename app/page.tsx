import { Header } from "@/components/header";
import ReactMarkdown from 'react-markdown'
import aboutContent from '@/content/about.md'
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-4 mb-8">
          <div className="prose dark:prose-invert max-w-none prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-li:marker:text-foreground">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        </div>
      </main>

      <Footer />
    </div>
  );
}
