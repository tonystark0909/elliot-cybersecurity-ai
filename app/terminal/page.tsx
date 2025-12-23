import { Navbar } from "@/components/navbar"
import { TerminalInterface } from "@/components/terminal-interface"
import { Shield, Activity, Lock } from "lucide-react"

export default function TerminalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  <span className="text-foreground">Terminal </span>
                  <span className="text-primary terminal-glow">Interface</span>
                </h1>
                <p className="text-muted-foreground">Chat with ELLIOT or execute security commands</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/50">
                  <Activity className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">ONLINE</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/50">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-xs font-mono text-muted-foreground">SECURE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <TerminalInterface />

          {/* Quick Commands */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card/30 border border-border/50">
              <div className="text-sm font-mono text-primary mb-1">Quick Scan</div>
              <div className="text-xs text-muted-foreground">scan {"<target>"}</div>
            </div>
            <div className="p-4 rounded-lg bg-card/30 border border-border/50">
              <div className="text-sm font-mono text-primary mb-1">OSINT Lookup</div>
              <div className="text-xs text-muted-foreground">osint {"<subject>"}</div>
            </div>
            <div className="p-4 rounded-lg bg-card/30 border border-border/50">
              <div className="text-sm font-mono text-primary mb-1">System Status</div>
              <div className="text-xs text-muted-foreground">status</div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <Lock className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-destructive">Security Notice:</span> All commands and conversations are
              logged for compliance. Only use ELLIOT on authorized systems with explicit permission.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
