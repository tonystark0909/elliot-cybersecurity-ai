"use client"

import { useEffect, useRef, useState } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01ELLIOT@#$%^&*"
    const fontSize = 20
    const columns = canvas.width / fontSize

    const drops: number[] = []
    const speeds: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
      speeds[i] = Math.random() * 0.3 + 0.5
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const charX = i * fontSize
        const charY = drops[i] * fontSize
        const distanceFromMouse = Math.sqrt(Math.pow(charX - mousePosition.x, 2) + Math.pow(charY - mousePosition.y, 2))
        const hideRadius = 120

        // Only draw if outside the mouse radius
        if (distanceFromMouse > hideRadius) {
          const fadeDistance = 80
          const alpha = Math.min(1, (distanceFromMouse - hideRadius) / fadeDistance)

          ctx.fillStyle = `rgba(0, 255, 150, ${alpha * 0.8})`
          ctx.font = `${fontSize}px monospace`

          const text = characters[Math.floor(Math.random() * characters.length)]
          ctx.fillText(text, charX, charY)

          // Glow effect for characters
          if (Math.random() > 0.95) {
            ctx.shadowBlur = 15
            ctx.shadowColor = "rgba(0, 255, 150, 0.9)"
            ctx.fillText(text, charX, charY)
            ctx.shadowBlur = 0
          }
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          speeds[i] = Math.random() * 0.3 + 0.5
        }

        drops[i] += speeds[i]
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />
}
