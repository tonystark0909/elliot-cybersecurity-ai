import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Search, Zap, Lock, Globe, Database, Terminal, Code, Network, Eye, Bug, Cpu } from "lucide-react"
import { Card } from "@/components/ui/card"

const mainFeatures = [
  {
    icon: Shield,
    title: "Web Scraping & Crawling",
    description: "Advanced data extraction from complex web architectures with anti-detection measures",
    capabilities: [
      "JavaScript rendering support",
      "Anti-bot detection bypass",
      "Rate limiting & proxy rotation",
      "Custom headers & cookies",
    ],
  },
  {
    icon: Search,
    title: "OSINT Intelligence",
    description: "Comprehensive open-source intelligence gathering and threat reconnaissance",
    capabilities: [
      "Social media profiling",
      "Domain & subdomain enumeration",
      "Email & phone lookup",
      "Dark web monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Automated Scanning",
    description: "Real-time vulnerability detection and security assessment automation",
    capabilities: [
      "Port scanning & enumeration",
      "Service version detection",
      "CVE matching & analysis",
      "Custom scan profiles",
    ],
  },
  {
    icon: Lock,
    title: "Ethical Exploitation",
    description: "Controlled penetration testing in authorized security research environments",
    capabilities: ["Payload generation", "Exploit framework integration", "Report generation", "Compliance tracking"],
  },
  {
    icon: Globe,
    title: "Network Analysis",
    description: "Deep packet inspection and traffic pattern recognition",
    capabilities: ["Protocol analysis", "Traffic monitoring", "Anomaly detection", "Network mapping"],
  },
  {
    icon: Database,
    title: "Data Extraction",
    description: "Intelligent data mining and structured information retrieval",
    capabilities: ["Database enumeration", "SQL injection testing", "NoSQL exploitation", "Data exfiltration analysis"],
  },
]

const aiFeatures = [
  {
    icon: Terminal,
    title: "Natural Language Commands",
    description: "Execute complex security operations using conversational AI",
  },
  {
    icon: Code,
    title: "Script Generation",
    description: "Automatically generate exploit scripts and automation tools",
  },
  {
    icon: Network,
    title: "Threat Intelligence",
    description: "Real-time threat feeds and vulnerability analysis",
  },
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "ML-powered anomaly detection and pattern recognition",
  },
  {
    icon: Bug,
    title: "Bug Bounty Assistant",
    description: "Automated vulnerability discovery and triage",
  },
  {
    icon: Cpu,
    title: "AI-Powered Recon",
    description: "Intelligent target profiling and attack surface mapping",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-primary">SYSTEM CAPABILITIES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="text-foreground">Complete </span>
              <span className="text-primary terminal-glow">Arsenal</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Military-grade cybersecurity tools powered by advanced AI for ethical hacking and security research
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="text-foreground">AI-Powered </span>
              <span className="text-secondary terminal-glow">Intelligence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ChatGPT-like conversational interface combined with advanced security capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all group"
              >
                <feature.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Use Disclaimer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-destructive/50">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Ethical Usage Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ELLIOT is designed exclusively for authorized security research, penetration testing and educational
                  purposes. All operations are logged and monitored. Unauthorized or malicious use is strictly
                  prohibited and may result in legal action. Users must obtain explicit permission before conducting
                  security assessments on any systems or networks they do not own.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
