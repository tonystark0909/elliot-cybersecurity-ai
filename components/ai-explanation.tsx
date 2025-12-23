"use client"

import { Card } from "@/components/ui/card"
import { Brain, MessageSquare, Shield, Zap, Lock, Code } from "lucide-react"
import { useState } from "react"

const aiCapabilities = [
  {
    icon: MessageSquare,
    title: "Natural Language Interface",
    description: "Communicate with ELLIOT using plain English commands",
    details:
      "No need to memorize complex syntax or terminal commands. Simply describe what you want to accomplish, and ELLIOT translates your natural language into precise security operations. Whether you're scanning ports, gathering OSINT, or analyzing vulnerabilities, just ask in conversational language.",
  },
  {
    icon: Brain,
    title: "Intelligent Threat Analysis",
    description: "AI-powered vulnerability assessment and risk scoring",
    details:
      "ELLIOT uses advanced machine learning models to analyze security data, identify patterns, and predict potential vulnerabilities before they're exploited. Our neural networks are trained on millions of security incidents to provide accurate threat intelligence and actionable insights.",
  },
  {
    icon: Shield,
    title: "Automated Security Workflows",
    description: "Chain multiple security tasks with intelligent automation",
    details:
      "Create complex security workflows by simply describing your objectives. ELLIOT automatically orchestrates multiple tools, manages dependencies, handles rate limiting, and optimizes execution order. From reconnaissance to exploitation, automate your entire security testing pipeline.",
  },
  {
    icon: Code,
    title: "Code Generation & Exploits",
    description: "Generate custom scripts and payloads on-demand",
    details:
      "Need a custom exploit or automation script? ELLIOT generates production-ready code in Python, Bash, PowerShell, and more. Provide your requirements, and receive optimized, commented code with error handling and security best practices built-in.",
  },
]

export function AIExplanation() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/30 bg-card/50 backdrop-blur-sm animate-float">
            <Brain className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-sm font-mono text-secondary terminal-glow">AI INTELLIGENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Meet Your </span>
            <span className="text-secondary terminal-glow">AI Security Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ELLIOT combines ChatGPT-like conversational AI with military-grade cybersecurity tools. Simply chat with the
            AI to perform complex security operations, generate exploits, and analyze threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aiCapabilities.map((capability, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 cursor-pointer group ${
                expandedIndex === index
                  ? "border-secondary/70 shadow-[0_0_30px_rgba(0,255,255,0.3)] scale-105 col-span-full"
                  : "hover:border-secondary/50 hover:scale-105"
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              style={{
                transform: expandedIndex === index ? "translateZ(50px)" : "translateZ(0)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:scale-110 transition-transform ${
                    expandedIndex === index ? "scale-110 rotate-12" : ""
                  }`}
                >
                  <capability.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>

                  {expandedIndex === index && (
                    <div className="mt-4 p-4 rounded-lg bg-secondary/5 border border-secondary/20 animate-in fade-in slide-in-from-top-2 duration-500">
                      <p className="text-sm text-foreground/90 leading-relaxed">{capability.details}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 text-xs text-secondary/60 text-center font-mono">
                {expandedIndex === index ? "▲ Click to collapse" : "▼ Click to expand"}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Zap, value: "< 100ms", label: "Response Time" },
            { icon: Brain, value: "GPT-5", label: "AI Model" },
            { icon: Lock, value: "256-bit", label: "Encryption" },
            { icon: Shield, value: "100%", label: "Ethical Use" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/30 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group animate-pulse-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all" />
              <div className="text-2xl font-bold text-secondary terminal-glow">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
