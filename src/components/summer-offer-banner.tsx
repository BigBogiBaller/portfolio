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
      <div className="rounded-2xl border border-amber-500/30 bg-foreground px-5 py-5 text-background shadow-xl sm:px-8 sm:py-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              {t.badge}
            </span>
            <h2 className="text-lg font-bold tracking-tight text-balance sm:text-2xl">{t.headline}</h2>
            <p className="flex items-center gap-2 text-sm font-medium text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              {t.spots}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end lg:flex-col lg:items-end">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest text-background/60">{t.endsIn}</span>
              <div className="flex gap-2" aria-live="polite">
                {units.map((unit) => (
                  <div
                    key={unit.label}
                    className="flex min-w-[54px] flex-col items-center rounded-lg bg-background/10 px-2 py-1.5"
                  >
                    <span className="font-mono text-xl font-bold tabular-nums">
                      {mounted ? pad(unit.value) : "--"}
                    </span>
                    <span className="text-[10px] uppercase tracking-wide text-background/60">{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-11 gap-2 bg-amber-500 px-6 font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-400 active:scale-100"
              >
                {t.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
