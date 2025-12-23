"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const stackCategories = [
  {
    title: "Frontend",
    color: "text-primary",
    technologies: [
      { name: "Next.js", logo: "⬢", description: "React framework with App Router", color: "#000000" },
      { name: "React", logo: "⚛", description: "UI component library", color: "#61DAFB" },
      { name: "TypeScript", logo: "TS", description: "Type-safe development", color: "#3178C6" },
      { name: "Tailwind", logo: "🎨", description: "Utility-first styling", color: "#06B6D4" },
      { name: "Framer", logo: "✨", description: "Animation library", color: "#FF0055" },
      { name: "Three.js", logo: "🎮", description: "3D graphics", color: "#000000" },
    ],
  },
  {
    title: "Backend & AI",
    color: "text-secondary",
    technologies: [
      { name: "Python", logo: "🐍", description: "Core AI engine", color: "#3776AB" },
      { name: "OpenAI", logo: "🤖", description: "GPT intelligence", color: "#412991" },
      { name: "LangChain", logo: "🔗", description: "AI orchestration", color: "#1C3C3C" },
      { name: "FastAPI", logo: "⚡", description: "API framework", color: "#009688" },
      { name: "WebSocket", logo: "🔌", description: "Real-time comms", color: "#010101" },
      { name: "Redis", logo: "📮", description: "Caching layer", color: "#DC382D" },
    ],
  },
  {
    title: "Security Tools",
    color: "text-accent",
    technologies: [
      { name: "Metasploit", logo: "💀", description: "Exploit framework", color: "#2596CD" },
      { name: "Nmap", logo: "🔍", description: "Network scanning", color: "#1A1A1A" },
      { name: "Burp Suite", logo: "🕷️", description: "Web vuln scanner", color: "#FF6633" },
      { name: "SQLMap", logo: "💉", description: "SQL injection", color: "#E74C3C" },
      { name: "Scrapy", logo: "🕸️", description: "Web scraping", color: "#60A839" },
      { name: "Wireshark", logo: "🦈", description: "Packet analysis", color: "#1679A7" },
    ],
  },
  {
    title: "Infrastructure",
    color: "text-primary",
    technologies: [
      { name: "Docker", logo: "🐳", description: "Containers", color: "#2496ED" },
      { name: "Kubernetes", logo: "☸", description: "Orchestration", color: "#326CE5" },
      { name: "AWS", logo: "☁️", description: "Cloud hosting", color: "#FF9900" },
      { name: "Nginx", logo: "🔧", description: "Reverse proxy", color: "#009639" },
      { name: "PostgreSQL", logo: "🐘", description: "SQL database", color: "#4169E1" },
      { name: "MongoDB", logo: "🍃", description: "NoSQL database", color: "#47A248" },
    ],
  },
  {
    title: "AI & ML",
    color: "text-secondary",
    technologies: [
      { name: "TensorFlow", logo: "🧠", description: "Machine learning", color: "#FF6F00" },
      { name: "PyTorch", logo: "🔥", description: "Deep learning", color: "#EE4C2C" },
      { name: "Hugging Face", logo: "🤗", description: "NLP models", color: "#FFD21E" },
      { name: "Scikit-learn", logo: "📊", description: "ML algorithms", color: "#F7931E" },
      { name: "Pandas", logo: "🐼", description: "Data processing", color: "#150458" },
      { name: "NumPy", logo: "🔢", description: "Numerical computing", color: "#013243" },
    ],
  },
  {
    title: "DevOps",
    color: "text-accent",
    technologies: [
      { name: "GitHub", logo: "🐙", description: "CI/CD pipeline", color: "#181717" },
      { name: "Prometheus", logo: "📈", description: "Metrics monitoring", color: "#E6522C" },
      { name: "Grafana", logo: "📉", description: "Visualization", color: "#F46800" },
      { name: "ELK Stack", logo: "🔎", description: "Log aggregation", color: "#005571" },
      { name: "Sentry", logo: "🐛", description: "Error tracking", color: "#362D59" },
      { name: "Jest", logo: "🃏", description: "Testing framework", color: "#C21325" },
    ],
  },
]

export default function TechStackPage() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm">
              <span className="text-2xl">⚙️</span>
              <span className="text-sm font-mono text-primary">TECHNOLOGY STACK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="text-foreground">Built with </span>
              <span className="text-primary terminal-glow">Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Enterprise-grade technologies powering the most advanced cybersecurity AI platform
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1500px" }}>
            {stackCategories.map((category, catIndex) => (
              <Card
                key={catIndex}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>{category.title}</h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredTech(`${catIndex}-${techIndex}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/50 transition-all duration-500"
                        style={{
                          transform:
                            hoveredTech === `${catIndex}-${techIndex}`
                              ? "translateZ(50px) rotateY(10deg) scale(1.1)"
                              : "translateZ(0)",
                          transformStyle: "preserve-3d",
                          boxShadow:
                            hoveredTech === `${catIndex}-${techIndex}` ? "0 20px 40px rgba(0, 255, 150, 0.3)" : "none",
                        }}
                      >
                        <div
                          className="text-4xl transition-all duration-500"
                          style={{
                            transform:
                              hoveredTech === `${catIndex}-${techIndex}`
                                ? "translateZ(30px) rotateY(360deg) scale(1.3)"
                                : "translateZ(0)",
                            filter:
                              hoveredTech === `${catIndex}-${techIndex}`
                                ? "drop-shadow(0 0 20px rgba(0, 255, 150, 0.8))"
                                : "none",
                          }}
                        >
                          {tech.logo}
                        </div>
                        <div className="text-xs font-mono font-bold text-center text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </div>

                        {/* Tooltip on hover */}
                        {hoveredTech === `${catIndex}-${techIndex}` && (
                          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-card/95 border border-primary/50 rounded-lg px-3 py-2 text-xs text-center whitespace-nowrap z-50 animate-in fade-in slide-in-from-top-1 duration-300">
                            {tech.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-foreground">System </span>
              <span className="text-primary terminal-glow">Architecture</span>
            </h2>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-6 font-mono text-sm">
                <div>
                  <div className="text-primary mb-2">┌─ Frontend Layer</div>
                  <div className="text-muted-foreground ml-4">
                    │ Next.js App Router → React Components → Tailwind UI
                  </div>
                  <div className="text-muted-foreground ml-4">│ WebSocket Client → Real-time Updates</div>
                  <div className="text-muted-foreground ml-4">└─ Three.js → 3D Visualizations</div>
                </div>

                <div>
                  <div className="text-secondary mb-2">┌─ API Gateway</div>
                  <div className="text-muted-foreground ml-4">│ Next.js API Routes → Authentication</div>
                  <div className="text-muted-foreground ml-4">│ Rate Limiting → Request Validation</div>
                  <div className="text-muted-foreground ml-4">└─ WebSocket Server → Bidirectional Comms</div>
                </div>

                <div>
                  <div className="text-accent mb-2">┌─ AI Engine</div>
                  <div className="text-muted-foreground ml-4">│ Python Backend → FastAPI</div>
                  <div className="text-muted-foreground ml-4">│ LangChain → AI Orchestration</div>
                  <div className="text-muted-foreground ml-4">│ OpenAI GPT → Natural Language</div>
                  <div className="text-muted-foreground ml-4">└─ Security Tools → Automated Execution</div>
                </div>

                <div>
                  <div className="text-primary mb-2">┌─ Data Layer</div>
                  <div className="text-muted-foreground ml-4">│ PostgreSQL → Structured Data</div>
                  <div className="text-muted-foreground ml-4">│ MongoDB → Scan Results</div>
                  <div className="text-muted-foreground ml-4">│ Redis → Caching & Sessions</div>
                  <div className="text-muted-foreground ml-4">└─ S3 → File Storage</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
