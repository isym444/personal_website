"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

// You can customize these navigation items
const navigation = [
  {
    name: "Home",
    href: "/",
    icon: "🏠"
  },
  {
    name: "Inbox",
    href: "/inbox",
    icon: "📥"
  },
]

const favorites = [
  {
    name: "Project Management",
    href: "/projects",
    icon: "📊"
  },
  // Add more favorites as needed
]

const workspaces = [
  {
    name: "Personal",
    href: "/personal",
    icon: "👤"
  },
  // Add more workspaces as needed
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <div className="hidden md:flex md:w-[300px] md:flex-col md:fixed md:inset-y-0">
          <SidebarContent />
        </div>
      </div>
    </>
  )
}

function SidebarContent() {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Company/App Selector */}
      <div className="px-4 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" />
          <div>Acme Inc</div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-2">
        <input
          type="search"
          placeholder="Search..."
          className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"
          >
            <span>{item.icon}</span>
            {item.name}
          </a>
        ))}

        {/* Favorites Section */}
        <div className="pt-4">
          <div className="px-3 text-sm font-semibold text-gray-400">Favorites</div>
          {favorites.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"
            >
              <span>{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>

        {/* Workspaces Section */}
        <div className="pt-4">
          <div className="px-3 text-sm font-semibold text-gray-400">Workspaces</div>
          {workspaces.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"
            >
              <span>{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
} 