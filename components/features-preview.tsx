"use client"

import { useState } from "react"
import { Shield, Search, Zap, Lock, Globe, Database, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Web Scraping & Crawling",
    description: "Advanced data extraction from complex web architectures with anti-detection measures",
    details: {
      capabilities: [
        "JavaScript rendering with headless browsers",
        "CAPTCHA solving integration",
        "Rotating proxies and user agents",
        "Rate limiting with smart delays",
      ],
      useCases: [
        "E-commerce price monitoring",
        "Competitive intelligence gathering",
        "Lead generation and contact extraction",
        "Content aggregation and monitoring",
      ],
      tools: ["Scrapy", "Beautiful Soup", "Selenium", "Puppeteer"],
    },
  },
  {
    icon: Search,
    title: "OSINT Intelligence",
    description: "Comprehensive open-source intelligence gathering and threat reconnaissance",
    details: {
      capabilities: [
        "Social media profiling across platforms",
        "Domain and subdomain enumeration",
        "Email breach monitoring",
        "Dark web marketplace surveillance",
      ],
      useCases: [
        "Digital footprint analysis",
        "Threat actor identification",
        "Brand monitoring and reputation management",
        "Pre-engagement reconnaissance",
      ],
      tools: ["Maltego", "theHarvester", "Recon-ng", "Shodan"],
    },
  },
  {
    icon: Zap,
    title: "Automated Scanning",
    description: "Real-time vulnerability detection and security assessment automation",
    details: {
      capabilities: [
        "Multi-protocol port scanning",
        "Service version fingerprinting",
        "CVE vulnerability matching",
        "Automated report generation with remediation steps",
      ],
      useCases: [
        "Network security audits",
        "Asset discovery and inventory",
        "Compliance validation",
        "Continuous security monitoring",
      ],
      tools: ["Nmap", "Masscan", "Nuclei", "OpenVAS"],
    },
  },
  {
    icon: Lock,
    title: "Ethical Exploitation",
    description: "Controlled penetration testing in authorized security research environments",
    details: {
      capabilities: [
        "Custom payload generation",
        "Exploit framework integration",
        "Post-exploitation modules",
        "Evidence collection and chain of custody",
      ],
      useCases: [
        "Penetration testing engagements",
        "Red team operations",
        "Bug bounty hunting",
        "Security research and POC development",
      ],
      tools: ["Metasploit", "Cobalt Strike", "Empire", "Covenant"],
    },
  },
  {
    icon: Globe,
    title: "Network Analysis",
    description: "Deep packet inspection and traffic pattern recognition",
    details: {
      capabilities: [
        "Real-time packet capture and analysis",
        "Protocol dissection and reconstruction",
        "Network behavior anomaly detection",
        "Traffic flow visualization",
      ],
      useCases: [
        "Malware traffic analysis",
        "Data exfiltration detection",
        "Network forensics",
        "Performance troubleshooting",
      ],
      tools: ["Wireshark", "tcpdump", "Zeek", "Suricata"],
    },
  },
  {
    icon: Database,
    title: "Data Extraction",
    description: "Intelligent data mining and structured information retrieval",
    details: {
      capabilities: [
        "SQL injection vulnerability testing",
        "NoSQL database exploitation",
        "Automated data enumeration",
        "Encrypted data analysis",
      ],
      useCases: ["Database security audits", "Data leak detection", "Backup file recovery", "Legacy system analysis"],
      tools: ["SQLMap", "NoSQLMap", "Hydra", "John the Ripper"],
    },
  },
]

export function FeaturesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold hover:scale-105 transition-transform duration-300 inline-block">
            <span className="text-foreground">Capabilities & </span>
            <span className="text-primary terminal-glow">Functions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Military-grade tools for cybersecurity professionals and ethical hackers
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            perspective: "1000px",
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 group cursor-pointer ${
                expandedIndex === index
                  ? "col-span-full border-primary/70 shadow-[0_0_30px_rgba(0,255,150,0.3)]"
                  : "hover:border-primary/50"
              }`}
              style={{
                transform:
                  expandedIndex === index
                    ? "translateZ(50px) scale(1.02)"
                    : hoveredIndex === index
                      ? "translateZ(50px) rotateX(5deg) scale(1.05)"
                      : hoveredIndex !== null
                        ? "translateZ(-20px) scale(0.95)"
                        : "translateZ(0)",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-start gap-4">
                <div
                  className="relative"
                  style={{
                    transform: hoveredIndex === index || expandedIndex === index ? "translateZ(30px)" : "translateZ(0)",
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedIndex === index && (
                <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary font-mono">▸ CAPABILITIES</h4>
                      <ul className="space-y-1">
                        {feature.details.capabilities.map((cap, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary font-mono">▸ USE CASES</h4>
                      <ul className="space-y-1">
                        {feature.details.useCases.map((useCase, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-primary font-mono">▸ INTEGRATED TOOLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.details.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-xs font-mono text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {hoveredIndex === index && expandedIndex !== index && (
                <div className="absolute inset-0 rounded-lg bg-primary/5 pointer-events-none animate-pulse" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
