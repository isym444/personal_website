import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";

// You might want to move this to a separate data file later
const blogPosts = [
  {
    title: "Building Modern Web Applications with Next.js 14",
    description: "Exploring the latest features in Next.js 14 and how they revolutionize web development",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    content: `
      // Add your full blog post content here
      This is a full article about building modern web applications with Next.js 14...
    `
  },
  {
    title: "The Power of Server Components",
    description: "Understanding React Server Components and their impact on application performance",
    date: "March 10, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance", "Architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    content: `
      // Add your full blog post content here
      This is a full article about React Server Components...
    `
  },
  {
    title: "Mastering TypeScript in 2024",
    description: "Essential TypeScript features and patterns for modern development",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    content: `
      // Add your full blog post content here
      This is a full article about mastering TypeScript...
    `
  }
];

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to find post
async function getPost(slug: string) {
  return blogPosts.find(
    post => post.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(String(slug));
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  try {
    const { slug } = await params;
    const post = await getPost(String(slug));

    if (!post) {
      notFound();
    }

    return (
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex gap-4 text-sm text-muted-foreground mb-8">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>

        <div className="mt-8">
          <BackButton />
        </div>
      </article>
    );
  } catch (error) {
    return notFound();
  }
} 