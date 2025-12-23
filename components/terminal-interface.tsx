"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, Send, Trash2, Download } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
}

export function TerminalInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "system",
      content: "ELLIOT v2.1.0 initialized. Type 'help' for available commands or chat naturally.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(
      () => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: getCommandResponse(input),
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const getCommandResponse = (cmd: string): string => {
    const command = cmd.toLowerCase().trim()

    if (command === "help") {
      return `Available Commands:
> scan [target] - Perform security scan
> osint [subject] - Gather intelligence
> exploit [cve] - Check exploitation details
> clear - Clear terminal
> status - System status
> help - Show this message

You can also chat naturally for AI assistance.`
    }

    if (command === "status") {
      return `System Status:
├─ Core Engine: ONLINE
├─ AI Model: GPT-4 Connected
├─ Scan Modules: 12 Active
├─ Network: Stable (48ms)
└─ Rate Limit: 95/100 requests available`
    }

    if (command.startsWith("scan ")) {
      const target = command.replace("scan ", "")
      return `Initiating security scan on: ${target}
[+] Port scan started...
[+] Service detection running...
[+] Vulnerability analysis in progress...

Found 3 open ports: 22, 80, 443
Scan complete. Use 'report ${target}' for details.`
    }

    if (command.startsWith("osint ")) {
      const subject = command.replace("osint ", "")
      return `OSINT gathering for: ${subject}
[+] Searching public databases...
[+] Social media enumeration...
[+] Domain intelligence collection...

Found 15 related entities.
Report saved to /reports/${subject}_osint.json`
    }

    return `Processing your request: "${cmd}"

This is a demo interface. In production, ELLIOT would:
• Execute the requested security operation
• Analyze results using AI
• Provide detailed recommendations
• Log all activities for compliance

Type 'help' for available commands.`
  }

  const clearTerminal = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "system",
        content: "Terminal cleared. ELLIOT ready.",
        timestamp: new Date(),
      },
    ])
  }

  const exportChat = () => {
    const chatLog = messages
      .map((msg) => `[${msg.timestamp.toLocaleTimeString()}] ${msg.role.toUpperCase()}: ${msg.content}`)
      .join("\n\n")

    const blob = new Blob([chatLog], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `elliot-session-${Date.now()}.txt`
    a.click()
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col perspective-1000">
      <Card
        className="flex-1 flex flex-col bg-card/95 backdrop-blur-sm border-primary/30 overflow-hidden transition-transform duration-300 hover:shadow-[0_0_50px_rgba(0,255,150,0.3)]"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/30 bg-card/50">
          <div className="flex items-center gap-3">
            <Terminal className="h-5 w-5 text-primary terminal-glow animate-pulse" />
            <span className="font-mono text-sm text-primary">root@elliot:~#</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={exportChat}
              className="h-8 text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearTerminal}
              className="h-8 text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-180 transition-all duration-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="space-y-1 animate-in slide-in-from-bottom duration-300 hover:translate-x-1 transition-transform"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{message.timestamp.toLocaleTimeString()}</span>
                <span>
                  {message.role === "system" && "[SYSTEM]"}
                  {message.role === "user" && "[USER]"}
                  {message.role === "assistant" && "[ELLIOT]"}
                </span>
              </div>
              <div
                className={`whitespace-pre-wrap leading-relaxed ${
                  message.role === "system"
                    ? "text-accent"
                    : message.role === "user"
                      ? "text-foreground"
                      : "text-primary terminal-glow"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-primary">
              <span className="animate-pulse">▸</span>
              <span className="text-sm">Processing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-primary/30 bg-card/50">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm terminal-glow flex-shrink-0 animate-pulse">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command or chat with ELLIOT..."
              className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm placeholder:text-muted-foreground"
              autoFocus
            />
            {!input && showCursor && <span className="w-2 h-4 bg-primary animate-pulse inline-block flex-shrink-0" />}
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,150,0.5)] transition-all duration-300"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
