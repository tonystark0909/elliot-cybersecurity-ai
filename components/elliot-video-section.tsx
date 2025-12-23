"use client"

import { useEffect, useState, useRef } from "react"
import { Shield, Zap, Lock, Eye } from "lucide-react"

export function ElliotVideoSection() {
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

  const features = [
    {
      icon: Shield,
      title: "Advanced Security Protocols",
      description: "Military-grade encryption and security measures",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Instant threat detection and response",
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Architecture",
      description: "Your data stays private and secure",
    },
    {
      icon: Eye,
      title: "OSINT Integration",
      description: "Comprehensive intelligence gathering",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div
            className="relative group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,150,0.5)]">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10">
                <div className="text-center space-y-6 p-8">
                  <div className="relative">
                    <div className="text-7xl font-mono text-primary terminal-glow animate-pulse">ELLIOT</div>
                    <div className="absolute -inset-4 border border-primary/30 rounded-lg animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-mono text-sm">
                      Replace this placeholder with your animated 3D video
                    </p>
                    <p className="text-xs text-muted-foreground/70 font-mono">Add: {"<video>"} tag or embed URL here</p>
                    <p className="text-xs text-primary/70 font-mono">Supports: MP4, WebM, YouTube, Vimeo</p>
                  </div>
                </div>
              </div>

              {/* Scanline effect overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,255,150,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan" />

              {/* Corner accents with animation */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-60 animate-pulse" />
              <div
                className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-60 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-60 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>

            {/* Floating status indicators */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg backdrop-blur-sm animate-pulse">
              <span className="text-xs font-mono text-primary terminal-glow">SYSTEM ACTIVE</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-lg backdrop-blur-sm animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xs font-mono text-secondary terminal-glow">AI ONLINE</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Meet <span className="text-primary terminal-glow">ELLIOT</span>
              </h2>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                Your elite cybersecurity AI assistant, inspired by the legendary hacker. Powered by advanced machine
                learning and trained on cutting-edge security protocols.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,150,0.2)] group"
                    style={{
                      transform: `perspective(500px) rotateY(${mousePosition.x * 2}deg)`,
                      transition: "all 0.3s ease-out",
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-12">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
    </section>
  )
}
