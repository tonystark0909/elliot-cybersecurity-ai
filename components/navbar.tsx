"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-[0_0_30px_rgba(0,255,150,0.1)]" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 terminal-glow hover:scale-110 transition-all duration-300">
            <Terminal className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-bold text-primary">ELLIOT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
              Features
            </Link>
            <Link
              href="/tech-stack"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
              Tech Stack
            </Link>
            <Link
              href="/docs"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
              Documentation
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="neon-border bg-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,150,0.3)] transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,150,0.5)] transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            {isOpen ? (
              <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 hover:rotate-90 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top duration-300">
            <Link href="/features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link
              href="/tech-stack"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </Link>
            <Link href="/docs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm" className="w-full neon-border bg-transparent">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="w-full bg-primary text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
