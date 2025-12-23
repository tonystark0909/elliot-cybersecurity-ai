"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "> INITIALIZING ELLIOT PROTOCOL..."
  const [showCursor, setShowCursor] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.05)_1px,transparent_1px)] bg-[size:50px_50px] transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse transition-transform duration-500"
        style={{
          transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 50}px, 0) scale(${1 + mousePosition.y * 0.1})`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] animate-pulse transition-transform duration-500"
        style={{
          animationDelay: "1s",
          transform: `translate3d(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px, 0) scale(${1 - mousePosition.y * 0.1})`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center space-y-8 transition-transform duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          }}
        >
          {/* Terminal Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,150,0.2)]">
            <Terminal className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary terminal-glow">
              {text}
              {showCursor && <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight hover:scale-105 transition-transform duration-300">
            <span className="text-foreground">Elite </span>
            <span className="text-primary terminal-glow">Cybersecurity</span>
            <br />
            <span className="text-foreground">AI Assistant</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Advanced AI-powered platform for ethical hacking, OSINT intelligence gathering, automated security scanning,
            and real-time threat analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/terminal">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border group hover:scale-110 hover:shadow-[0_0_40px_rgba(0,255,150,0.6)] transition-all duration-300 text-lg px-8 py-6"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                Launch Terminal
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent hover:scale-110 transition-all duration-300 text-lg px-8 py-6 hover:border-primary"
              >
                Explore Capabilities
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { value: "100+", label: "Security Scans", color: "primary" },
              { value: "99.9%", label: "Uptime", color: "secondary" },
              { value: "24/7", label: "AI Support", color: "accent" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-2 p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,150,0.4)] group"
                style={{
                  transform: `perspective(500px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`,
                  transition: "all 0.3s ease-out",
                }}
              >
                <div className="text-4xl font-bold text-primary terminal-glow group-hover:scale-125 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
