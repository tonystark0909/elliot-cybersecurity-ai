"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 0 20px rgba(0, 255, 150, 0.8), 0 0 40px rgba(0, 255, 150, 0.4)",
        }}
      />
    </div>
  )
}
