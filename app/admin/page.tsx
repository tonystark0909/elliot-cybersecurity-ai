"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Activity, AlertTriangle, Terminal, Eye, Clock, Download } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const router = useRouter()
  const [timeFilter, setTimeFilter] = useState("24h")

  // 🔒 HARD HIDE ADMIN PANEL
  useEffect(() => {
    const isAuthorized = false // change later when auth exists

    if (!isAuthorized) {
      router.replace("/") // kick user out silently
    }
  }, [router])

  return null // prevents UI flash
}
