import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Header } from "@/components/header";
import ReactMarkdown from 'react-markdown'
import aboutContent from '@/content/about.md'
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    title: "Building Modern Web Applications with Next.js 14",
    description: "Exploring the latest features in Next.js 14 and how they revolutionize web development",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "The Power of Server Components",
    description: "Understanding React Server Components and their impact on application performance",
    date: "March 10, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance", "Architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mastering TypeScript in 2024",
    description: "Essential TypeScript features and patterns for modern development",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-4 mb-8">
          {/* <h2 className="text-3xl font-bold tracking-tight">Welcome to my Website</h2> */}
          
          {/* Add the markdown content here */}
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
