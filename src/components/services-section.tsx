"use client"

import { useId, useState } from "react"
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

function AutomationPreview() {
  const id = useId()
  const integrations = [
    { id: "figma", icon: Globe2, x: 18, y: 22, path: "M 50 105 V 50 H 115" },
    { id: "claude", icon: Bot, x: 84, y: 18, path: "M 205 105 V 42 H 270" },
    { id: "database", icon: Settings2, x: 28, y: 51, path: "M 105 105 H 145" },
    { id: "apps", icon: ShoppingBag, x: 82, y: 51, path: "M 205 105 H 250" },
    { id: "analytics", icon: Search, x: 50, y: 86, path: "M 175 135 V 190" },
    { id: "mail", icon: Mail, x: 78, y: 84, path: "M 198 125 V 170 H 255" },
  ]

  return (
    <div className="relative min-h-[300px] flex-1 overflow-hidden border-b bg-muted/20 p-4 [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_92%,transparent)]">
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)] [background-size:28px_28px]" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 320 230" fill="none" preserveAspectRatio="none">
        <defs>{integrations.map((item, index) => <linearGradient key={item.id} id={`${id}-${index}`} gradientUnits="userSpaceOnUse"><stop stopColor="currentColor" stopOpacity="0" /><stop offset=".5" stopColor="currentColor" stopOpacity=".6" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient>)}</defs>
        {integrations.map((item, index) => <g key={item.id}><path d={item.path} stroke="currentColor" strokeOpacity=".14" strokeWidth="1" /><motion.path d={item.path} stroke={`url(#${id}-${index})`} strokeWidth="2" strokeDasharray="40 160" initial={{ strokeDashoffset: 200 }} animate={{ strokeDashoffset: -200 }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * .16 }} /></g>)}
      </svg>
      <motion.div aria-hidden="true" className="absolute left-1/2 top-1/2 z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-background p-1 shadow-xl sm:size-20 sm:rounded-3xl sm:p-2" animate={{ scale: [1, 1.04, 1], opacity: [.92, 1, .92] }} transition={{ duration: 3, repeat: Infinity }}>
        <div className="flex size-full items-center justify-center rounded-xl border border-border bg-muted/30"><Bot aria-hidden="true" className="size-8 sm:size-10" strokeWidth={1.2} /></div>
        <motion.span className="absolute inset-0 rounded-2xl border-2 border-foreground/10" animate={{ scale: [1, 1.18, 1], opacity: [.35, 0, .35] }} transition={{ duration: 3, repeat: Infinity }} />
      </motion.div>
      {integrations.map((item, index) => { const Icon = item.icon; return <motion.div key={item.id} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .1 }} className="absolute z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm sm:size-12 sm:rounded-2xl" style={{ left: `${item.x}%`, top: `${item.y}%` }}><Icon aria-hidden="true" className="size-5 sm:size-6" strokeWidth={1.4} /></motion.div> })}
    </div>
  )
}

const funnelMessages = [
  { subject: "Willkommen in deiner Inbox", preview: "Deine neue Kampagne ist bereit...", time: "jetzt" },
  { subject: "3 Tipps für mehr Verkäufe", preview: "Heute zeigen wir dir, wie...", time: "vor 2 Min." },
  { subject: "Dein persönliches Angebot", preview: "Nur noch heute verfügbar...", time: "vor 5 Min." },
  { subject: "Was möchtest du erreichen?", preview: "Antworte einfach auf diese Mail...", time: "vor 8 Min." },
]

function EmailFunnelPreview() {
  const [visibleCount, setVisibleCount] = useState(1)
  const visibleMessages = Array.from({ length: visibleCount }, (_, index) => funnelMessages[index % funnelMessages.length]).reverse()

  return (
    <div className="relative min-h-[250px] flex-1 overflow-hidden border-b bg-muted/20 p-4 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_88%,transparent)]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--foreground)/.1),transparent_65%)]" />
      <div className="relative mx-auto flex h-full min-h-[220px] w-full max-w-[540px] flex-col items-center justify-center gap-2 overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleMessages.map((message, index) => (
            <motion.div key={`${message.subject}-${visibleCount}-${index}`} initial={{ opacity: 0, scale: 0, y: -12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0, y: 12 }} transition={{ type: "spring", stiffness: 350, damping: 32 }} className="w-full max-w-[410px] rounded-2xl border border-border bg-background/90 p-3 shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background"><Mail aria-hidden="true" className="size-5" /></div>
                <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="truncate text-sm font-medium">{message.subject}</p><span className="shrink-0 text-[10px] text-muted-foreground">{message.time}</span></div><p className="truncate text-xs text-muted-foreground">{message.preview}</p></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div aria-hidden="true" className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-foreground/20" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      </div>
      <motion.div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2 py-1 text-[9px] text-muted-foreground shadow-sm" animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2, repeat: Infinity }}><span className="size-1.5 rounded-full bg-foreground" />Live Funnel</motion.div>
      <motion.div onAnimationComplete={() => setVisibleCount((count) => count === funnelMessages.length ? 1 : count + 1)} animate={{ opacity: [0, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.8 }} className="pointer-events-none absolute size-px" />
    </div>
  )
}

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
          <BlurFade key={service.title} delay={0.28 + index * 0.05} className={index === 0 || index === 3 || index === 4 ? "lg:col-span-4" : "lg:col-span-2"}>
            <article className="group relative flex min-h-[390px] h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-card shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl dark:border-white/10">
              {index === 0 ? (
                <SoftwareDashboardPreview />
              ) : index === 3 ? (
                <AutomationPreview />
              ) : index === 4 ? (
                <EmailFunnelPreview />
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
