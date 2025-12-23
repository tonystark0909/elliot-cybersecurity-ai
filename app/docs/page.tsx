"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Terminal, Book, Code, Shield, ChevronRight } from "lucide-react"

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Terminal,
  },
  {
    id: "commands",
    title: "Command Reference",
    icon: Code,
  },
  {
    id: "security",
    title: "Security Guidelines",
    icon: Shield,
  },
  {
    id: "api",
    title: "API Documentation",
    icon: Book,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started")

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm">
              <Book className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-primary">DOCUMENTATION</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="text-foreground">Technical </span>
              <span className="text-primary terminal-glow">Manual</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 sticky top-24">
                <div className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/20 text-primary border border-primary/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <section.icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {activeSection === "getting-started" && <GettingStarted />}
              {activeSection === "commands" && <CommandReference />}
              {activeSection === "security" && <SecurityGuidelines />}
              {activeSection === "api" && <APIDocumentation />}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function GettingStarted() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Getting Started</h2>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to ELLIOT. This guide will help you understand the basics of using the platform.
        </p>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
        <h3 className="text-xl font-bold text-primary mb-4 font-mono">Installation</h3>
        <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-2 border border-border/50">
          <div className="text-muted-foreground"># Clone the repository</div>
          <div className="text-primary">git clone https://github.com/elliot/platform.git</div>
          <div className="text-muted-foreground mt-4"># Install dependencies</div>
          <div className="text-primary">npm install</div>
          <div className="text-muted-foreground mt-4"># Start the platform</div>
          <div className="text-primary">npm run dev</div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Quick Start</h3>
        <ol className="space-y-4 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono flex-shrink-0">01.</span>
            <span className="leading-relaxed">
              <strong className="text-foreground">Create an account</strong> and verify your email address for secure
              access
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono flex-shrink-0">02.</span>
            <span className="leading-relaxed">
              <strong className="text-foreground">Access the terminal</strong> to start chatting with ELLIOT
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono flex-shrink-0">03.</span>
            <span className="leading-relaxed">
              <strong className="text-foreground">Execute commands</strong> or chat naturally for AI assistance
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono flex-shrink-0">04.</span>
            <span className="leading-relaxed">
              <strong className="text-foreground">Review reports</strong> and export results for documentation
            </span>
          </li>
        </ol>
      </Card>
    </div>
  )
}

function CommandReference() {
  const commands = [
    {
      command: "scan [target]",
      description: "Perform comprehensive security scan on specified target",
      example: "scan example.com",
    },
    {
      command: "osint [subject]",
      description: "Gather open-source intelligence on subject",
      example: "osint company-name",
    },
    {
      command: "exploit [cve]",
      description: "Check exploitation details for CVE",
      example: "exploit CVE-2024-1234",
    },
    {
      command: "status",
      description: "Display system status and available resources",
      example: "status",
    },
    {
      command: "report [target]",
      description: "Generate detailed report for previous scan",
      example: "report example.com",
    },
    {
      command: "help",
      description: "Display all available commands",
      example: "help",
    },
    {
      command: "clear",
      description: "Clear terminal history",
      example: "clear",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Command Reference</h2>
        <p className="text-muted-foreground leading-relaxed">
          Complete list of commands available in the ELLIOT terminal interface.
        </p>
      </div>

      <div className="space-y-4">
        {commands.map((cmd, index) => (
          <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ChevronRight className="h-4 w-4 text-primary" />
                <code className="text-lg font-mono text-primary terminal-glow">{cmd.command}</code>
              </div>
              <p className="text-muted-foreground pl-7 leading-relaxed">{cmd.description}</p>
              <div className="pl-7">
                <div className="bg-background/50 rounded-lg p-3 font-mono text-sm border border-border/50">
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-primary">{cmd.example}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SecurityGuidelines() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Security Guidelines</h2>
        <p className="text-muted-foreground leading-relaxed">
          Important security practices and ethical guidelines for using ELLIOT.
        </p>
      </div>

      <Card className="p-6 bg-destructive/10 backdrop-blur-sm border-destructive/30">
        <h3 className="text-xl font-bold text-destructive mb-4 font-mono">Legal Requirements</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-destructive flex-shrink-0">▸</span>
            <span className="leading-relaxed">
              Obtain explicit written authorization before conducting security assessments
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-destructive flex-shrink-0">▸</span>
            <span className="leading-relaxed">Only test systems and networks you own or have permission to assess</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-destructive flex-shrink-0">▸</span>
            <span className="leading-relaxed">
              Comply with all applicable laws and regulations in your jurisdiction
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-destructive flex-shrink-0">▸</span>
            <span className="leading-relaxed">
              Report vulnerabilities responsibly through proper disclosure channels
            </span>
          </li>
        </ul>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Best Practices</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary flex-shrink-0">▸</span>
            <span className="leading-relaxed">Use VPN and proxy rotation to protect your identity</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary flex-shrink-0">▸</span>
            <span className="leading-relaxed">Implement rate limiting to avoid detection and system overload</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary flex-shrink-0">▸</span>
            <span className="leading-relaxed">Document all activities and maintain detailed logs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary flex-shrink-0">▸</span>
            <span className="leading-relaxed">Respect scope limitations defined in authorization agreements</span>
          </li>
        </ul>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Activity Logging</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          All operations performed through ELLIOT are automatically logged for compliance and audit purposes:
        </p>
        <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-1 border border-border/50">
          <div className="text-muted-foreground">• Command execution timestamps</div>
          <div className="text-muted-foreground">• Target identification and scope</div>
          <div className="text-muted-foreground">• Results and findings summary</div>
          <div className="text-muted-foreground">• User authentication records</div>
        </div>
      </Card>
    </div>
  )
}

function APIDocumentation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">API Documentation</h2>
        <p className="text-muted-foreground leading-relaxed">
          RESTful API endpoints for integrating ELLIOT into your workflows.
        </p>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
        <h3 className="text-xl font-bold text-primary mb-4 font-mono">Authentication</h3>
        <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-3 border border-border/50">
          <div className="text-muted-foreground">POST /api/auth/login</div>
          <div className="text-foreground">{"{"}</div>
          <div className="text-foreground ml-4">"email": "user@domain.com",</div>
          <div className="text-foreground ml-4">"password": "secure_password"</div>
          <div className="text-foreground">{"}"}</div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Scan Endpoint</h3>
        <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-3 border border-border/50">
          <div className="text-muted-foreground">POST /api/scan</div>
          <div className="text-foreground">{"{"}</div>
          <div className="text-foreground ml-4">"target": "example.com",</div>
          <div className="text-foreground ml-4">"scan_type": "comprehensive",</div>
          <div className="text-foreground ml-4">"options": {"{"}</div>
          <div className="text-foreground ml-8">"ports": "1-1000",</div>
          <div className="text-foreground ml-8">"timeout": 60</div>
          <div className="text-foreground ml-4">{"}"}</div>
          <div className="text-foreground">{"}"}</div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">OSINT Endpoint</h3>
        <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-3 border border-border/50">
          <div className="text-muted-foreground">POST /api/osint</div>
          <div className="text-foreground">{"{"}</div>
          <div className="text-foreground ml-4">"subject": "target_name",</div>
          <div className="text-foreground ml-4">"sources": ["social", "domains", "emails"]</div>
          <div className="text-foreground">{"}"}</div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 font-mono">Rate Limits</h3>
        <div className="space-y-2 font-mono text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Free Tier:</span>
            <span className="text-primary">100 requests/hour</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Pro Tier:</span>
            <span className="text-primary">1000 requests/hour</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Enterprise:</span>
            <span className="text-primary">Unlimited</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
