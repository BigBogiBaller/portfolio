"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const CALENDLY_LINK = "https://calendly.com/bogilekic123/30min"

function getTimeLeft() {
  const now = new Date()
  let target = new Date(now.getFullYear(), 6, 31, 23, 59, 59) // July 31, 23:59:59
  if (now > target) {
    target = new Date(now.getFullYear() + 1, 6, 31, 23, 59, 59)
  }
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const translations = {
  de: {
    badge: "Limited Summer Offer",
    headline: "Deine fertige Website in 48 Stunden – nur 999 €",
    spots: "Nur noch 4 Plätze für den Juli frei",
    cta: "Jetzt Platz sichern",
    endsIn: "Angebot endet in",
    days: "Tage",
    hours: "Std",
    minutes: "Min",
    seconds: "Sek",
  },
  en: {
    badge: "Limited Summer Offer",
    headline: "Your finished website in 48 hours – only €999",
    spots: "Only 4 spots left for July",
    cta: "Claim your spot",
    endsIn: "Offer ends in",
    days: "Days",
    hours: "Hrs",
    minutes: "Min",
    seconds: "Sec",
  },
}

export function SummerOfferBanner({ language = "de" }: { language?: "en" | "de" }) {
  const t = translations[language]
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  const units = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds },
  ]

  return (
    <section aria-label={t.badge}>
      
    </section>
  )
}
