"use client"

import { useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"
import BlurFade from "@/components/magicui/blur-fade"
import { Bot, Code2, FolderKanban, Globe2, LayoutDashboard, Mail, MessageSquare, Search, Settings2, ShoppingBag, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceIcons = [Code2, Globe2, ShoppingBag, Bot, Mail]

const services = {
  de: [
    { title: "Software Lösungen", description: "Individuelle digitale Produkte und SaaS-Lösungen, die Abläufe vereinfachen und dein Unternehmen skalierbar machen.", accent: "01" },
    { title: "Verkaufsoptimierte Websites", description: "Websites mit klarer Positionierung, überzeugendem Design und starken Nutzerflows, die aus Besuchern Kunden machen.", accent: "02" },
    { title: "Online Shops", description: "Schnelle, vertrauenswürdige Onlineshops mit einem reibungslosen Einkaufserlebnis und Fokus auf mehr Verkäufe.", accent: "03" },
    { title: "KI Automatisierung", description: "Intelligente Automatisierungen, die wiederkehrende Aufgaben übernehmen und dir wertvolle Zeit sparen.", accent: "04" },
    { title: "Email Funnels", description: "Strategische E-Mail-Sequenzen, die Leads aufbauen, Vertrauen schaffen und aus Interesse Umsatz machen.", accent: "05" },
  ],
  en: [
    { title: "Software Solutions", description: "Custom digital products and SaaS solutions that simplify operations and help your business scale.", accent: "01" },
    { title: "Conversion-focused Websites", description: "Clear positioning, persuasive design and strong user flows that turn visitors into customers.", accent: "02" },
    { title: "Online Shops", description: "Fast, trustworthy online stores with a smooth shopping experience and a focus on more sales.", accent: "03" },
    { title: "AI Automation", description: "Intelligent automations that take repetitive tasks off your plate and save valuable time.", accent: "04" },
    { title: "Email Funnels", description: "Strategic email sequences that nurture leads, build trust and turn interest into revenue.", accent: "05" },
  ],
}

const dashboardTabs = [
  { id: "overview", label: "Übersicht", icon: LayoutDashboard },
  { id: "team", label: "Team", icon: Users },
  { id: "projects", label: "Projekte", icon: FolderKanban },
  { id: "messages", label: "Nachrichten", icon: MessageSquare },
]

function SoftwareDashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview")
  const tab = dashboardTabs.find((item) => item.id === activeTab) ?? dashboardTabs[0]

  return (
    <div className="relative min-h-[190px] flex-1 overflow-hidden border-b bg-muted/20 p-3 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_88%,transparent)]">
      <div className="relative mx-auto flex h-[178px] w-[92%] max-w-[360px] overflow-hidden rounded-xl border border-border/70 bg-background shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
        <aside className="hidden w-[92px] shrink-0 border-r bg-muted/20 p-2 sm:block">
          <div className="mb-4 h-2 w-12 rounded-full bg-foreground/20" />
          <LayoutGroup>
            {dashboardTabs.map((item) => {
              const Icon = item.icon
              const active = item.id === activeTab
              return <button key={item.id} type="button" onClick={() => setActiveTab(item.id)} aria-label={item.label} className={cn("relative mb-1 flex w-full items-center gap-1.5 rounded-md px-1.5 py-1.5 text-[8px] transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {active && <motion.span layoutId="software-tab" className="absolute inset-0 rounded-md bg-muted" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                <Icon aria-hidden="true" className="relative z-10 size-3" />
                <span className="relative z-10 truncate">{item.label}</span>
              </button>
            })}
          </LayoutGroup>
        </aside>
        <div className="min-w-0 flex-1 p-3">
          <div className="mb-3 flex items-center justify-between border-b pb-2"><div><p className="text-[9px] font-semibold">{tab.label}</p><p className="text-[7px] text-muted-foreground">Projektübersicht</p></div><div className="flex gap-1"><Search className="size-3 text-muted-foreground" /><Settings2 className="size-3 text-muted-foreground" /></div></div>
          <AnimatePresence mode="popLayout" initial={false}><motion.div key={activeTab} initial={{ opacity: 0, y: 8, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -8, filter: "blur(3px)" }} transition={{ duration: 0.3 }} className="grid grid-cols-2 gap-2"><div className="rounded-lg border bg-muted/20 p-2"><p className="text-[7px] text-muted-foreground">Performance</p><p className="mt-1 text-sm font-semibold">94.2%</p><div className="mt-1 h-1 overflow-hidden rounded-full bg-muted"><motion.div initial={{ width: 0 }} animate={{ width: "94%" }} className="h-full rounded-full bg-foreground" /></div></div><div className="rounded-lg border bg-muted/20 p-2"><p className="text-[7px] text-muted-foreground">Aktive Nutzer</p><p className="mt-1 text-sm font-semibold">1,070</p><p className="mt-1 text-[7px] text-muted-foreground">+12.8% diesen Monat</p></div><div className="col-span-2 flex items-end gap-1 rounded-lg border bg-muted/10 p-2">{[36, 52, 42, 68, 58, 82, 74, 94].map((height, i) => <motion.span key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: i * 0.04 }} className="flex-1 rounded-t bg-foreground/25" />)}</div></motion.div></AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection({ language = "de" }: { language?: "de" | "en" }) {
  const items = services[language]

  return (
    <section id="services" aria-labelledby="services-heading" className="w-full py-12">
      <BlurFade delay={0.24}>
        <div className="mb-8 text-center">
          <div className="mb-3 inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
            {language === "de" ? "Dienstleistungen" : "Services"}
          </div>
          <h2 id="services-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {language === "de" ? "Digitale Lösungen, die voranbringen" : "Digital solutions that move you forward"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {language === "de" ? "Fokus auf mehr Verkäufe, weniger Aufwand und nachhaltiges Wachstum." : "Focused on more sales, less manual work and sustainable growth."}
          </p>
        </div>
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {items.map((service, index) => (
          <BlurFade key={service.title} delay={0.28 + index * 0.05} className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
            <article className="group relative flex min-h-[390px] h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-card shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl dark:border-white/10">
              {index === 0 ? (
                <SoftwareDashboardPreview />
              ) : (
                <div aria-hidden="true" className="relative flex min-h-[190px] flex-1 items-center justify-center overflow-hidden border-b bg-muted/20 [background-image:linear-gradient(to_right,hsl(var(--muted-foreground)/.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/.1)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_82%,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.08] via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute size-32 rounded-full border border-foreground/10 transition-all duration-700 group-hover:size-40 group-hover:rotate-45" />
                  <div className="absolute size-24 rounded-2xl border border-foreground/15 bg-background/60 shadow-2xl backdrop-blur-sm transition-all duration-700 group-hover:rotate-6 group-hover:scale-110">
                    <div className="absolute inset-3 rounded-xl border border-foreground/10" />
                    {(() => { const Icon = serviceIcons[index]; return <Icon aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-foreground transition-transform duration-500 group-hover:scale-125" strokeWidth={1.4} /> })()}
                  </div>
                  <span className="absolute left-[16%] top-[28%] size-2 rounded-full bg-foreground/40 transition-all duration-700 group-hover:left-[24%] group-hover:top-[20%]" />
                  <span className="absolute right-[16%] bottom-[28%] size-2 rounded-full bg-foreground/30 transition-all duration-700 group-hover:right-[24%] group-hover:bottom-[20%]" />
                </div>
              )}
              <div className="relative p-6 pt-5">
                <div className="mb-5 flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{service.accent}</span>
                  <span aria-hidden="true" className="size-2 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-150" />
                </div>
                <h3 className="text-[20px] leading-7 font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
