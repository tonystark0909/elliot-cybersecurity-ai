"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal, Github, Twitter, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Terminal className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-bold text-xl text-primary terminal-glow">ELLIOT</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced cybersecurity AI for ethical hacking and security research.
              Empowering security professionals worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(0,255,150,0.3)]"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:shadow-[0_0_20px_rgba(0,255,150,0.3)]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,150,0.3)]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              Platform <span className="text-primary">▸</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/features", label: "Features", key: "features" },
                { href: "/tech-stack", label: "Tech Stack", key: "tech" },
                { href: "/docs", label: "Documentation", key: "docs" },
                { href: "/terminal", label: "Terminal", key: "terminal" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                    onMouseEnter={() => setHoveredLink(link.key)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`text-primary transition-all duration-300 ${
                        hoveredLink === link.key ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              Legal <span className="text-secondary">▸</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/ethics", label: "Ethical Usage" },
                { href: "/compliance", label: "Compliance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (ADMIN REMOVED) */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              Resources <span className="text-accent">▸</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/login", label: "Login" },
                { href: "/signup", label: "Get Started" },
                { href: "/support", label: "Support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-center md:text-left">
            © 2025 ELLIOT. For authorized security research only.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono">
              v2.0.1
            </span>
            <span className="px-3 py-1 rounded-full bg-card/50 border border-border/50">
              Made with ❤️ for hackers
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
