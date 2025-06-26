"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetClose } from "@/components/ui/sheet"
import { Menu, Moon, Sun, X } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import { UserCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const { currentUser, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleLogin = () => {
    router.push("/login")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" }
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-2 sm:py-3 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        : "py-3 sm:py-4 md:py-6 bg-background/80 backdrop-blur-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center pl-4 sm:pl-6 lg:pl-8 space-x-2 sm:space-x-3 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm sm:text-base md:text-lg">A</span>
            </div>
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-foreground no-underline">Artistly</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 relative group text-sm xl:text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}

            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <UserCircle className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <motion.a
                key="login"
                href="/login"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 relative group text-sm xl:text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5 * 0.1 }}
              >
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            )}

            {/* Desktop Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-9 w-9"
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === "dark" ? (
                    <Sun className="h-[1.1rem] w-[1.1rem]" />
                  ) : (
                    <Moon className="h-[1.1rem] w-[1.1rem]" />
                  )
                )}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden pr-4 sm-pr-6 lg:pr-8 flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-8 w-8 sm:h-9 sm:w-9"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  <Sun className="h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              )}
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-8 w-8 sm:h-9 sm:w-9"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background/95 backdrop-blur-md border-l border-border w-[280px] sm:w-[320px] p-0 [&>button:first-of-type]:hidden"
              >
                <SheetHeader className="px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                        <span className="text-background font-bold text-base">A</span>
                      </div>
                      <span className="text-xl font-bold text-foreground">Artistly</span>
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full"
                        aria-label="Close menu"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>

                  </div>
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                </SheetHeader>

                <div className="flex flex-col px-6 py-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleMobileNavClick}
                      className="text-lg font-medium text-foreground no-underline hover:text-background transition-colors duration-200 py-3 border-none"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  {currentUser ? (
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleLogout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="mt-4"
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleLogin()
                        setIsMobileMenuOpen(false)
                      }}
                      className="mt-4"
                    >
                      Login
                    </Button>
                  )}

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
