import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import { AboutContent } from '@/components/AboutContent'

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div>
          <AboutContent />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        </div>
      </main>

      <Footer />
    </div>
  );
}
