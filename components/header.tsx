import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
    return (
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/logo.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Ian Samir Yep Manzano</h1>
              <p className="text-sm text-muted-foreground">Medicine, Languages, Software Engineering, Classical Music</p>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
    );
  }
  