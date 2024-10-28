// "use client"

// import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"
// import { Moon, Sun } from "lucide-react"

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light")
//   }

//   return (
//     <Button 
//       variant="ghost"
//       size="icon"
//       onClick={toggleTheme}
//       className="border-0"
//     >
//       {theme === "dark" ? (
//         <Moon className="h-[1.2rem] w-[1.2rem]" />
//       ) : (
//         <Sun className="h-[1.2rem] w-[1.2rem]" />
//       )}
//     </Button>
//   )
// } 