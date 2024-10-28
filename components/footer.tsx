import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Ian Samir Yep Manzano. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://twitter.com/isym444" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">Twitter</Button>
            </Link>
            <Link href="https://github.com/isym444" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">GitHub</Button>
            </Link>
            <Link href="https://linkedin.com/in/ian-samir-yep-manzano-5376107b" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">LinkedIn</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 