"use client"

import { useId, useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"
import BlurFade from "@/components/magicui/blur-fade"
import { AnimatedList } from "@/components/ui/animated-list"
import { Bot, Code2, FolderKanban, Globe2, LayoutDashboard, Mail, MessageSquare, Plus, Search, Settings2, ShoppingBag, ShoppingCart, Users, X } from "lucide-react"
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

function ConversionWebsitePreview() {
  const panels = [0, 1, 2, 3, 4, 5]

  return (
    <div className="relative min-h-[280px] flex-1 overflow-hidden border-b bg-[#f7f7f5] px-5 py-6 text-[#171717] sm:min-h-[330px] sm:px-10">
      <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:linear-gradient(30deg,transparent_49%,rgba(0,0,0,.08)_50%,transparent_51%),linear-gradient(150deg,transparent_49%,rgba(0,0,0,.06)_50%,transparent_51%)] [background-size:110px_64px]" />
      <div className="relative mx-auto h-[230px] w-full max-w-[560px] [perspective:900px] sm:h-[270px]">
        <motion.div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[150px] w-[300px] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(58deg)_rotateZ(-20deg)] sm:h-[180px] sm:w-[390px]" animate={{ y: [0, -4, 0], rotateZ: [-20, -18, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          {panels.map((panel) => <motion.div key={panel} className="absolute inset-y-0 w-[52px] border border-black/15 bg-white shadow-[0_8px_16px_rgba(0,0,0,.08)] sm:w-[68px]" style={{ left: `${panel * 38}px`, transform: `translateZ(${panel * -18}px)` }} animate={{ y: panel === 2 ? [0, -3, 0] : 0 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: panel * .08 }}>
            <div className="absolute inset-x-2 top-3 h-1 rounded-full bg-black/20" />
            <div className="absolute inset-x-2 top-7 space-y-1 opacity-60"><span className="block h-px bg-black/15" /><span className="block h-px bg-black/10" /><span className="block h-px w-2/3 bg-black/10" /></div>
          </motion.div>)}
          <div className="absolute left-[76px] top-[34px] z-10 h-[88px] w-[120px] overflow-hidden rounded border border-black/20 bg-[#ededeb] shadow-[0_10px_20px_rgba(0,0,0,.14)] sm:left-[98px] sm:top-[42px] sm:h-[108px] sm:w-[150px]">
            <div className="flex h-4 items-center gap-1 border-b border-black/10 px-2"><i className="size-1 rounded-full bg-black/25" /><i className="size-1 rounded-full bg-black/15" /><i className="size-1 rounded-full bg-black/15" /></div>
            <div className="px-3 pt-3"><span className="block h-1.5 w-12 bg-black/40" /><span className="mt-2 block h-1 w-20 bg-black/15" /><span className="mt-1 block h-1 w-14 bg-black/10" /></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const shopProducts = [
  { id: "shirt", name: "Essential Tee", price: 39 },
  { id: "sneaker", name: "Studio Sneaker", price: 129 },
  { id: "bag", name: "Daily Bag", price: 79 },
]

function OnlineShopPreview() {
  const [cart, setCart] = useState<string[]>([])
  const addToCart = (id: string) => setCart((current) => [...current, id])
  const removeFromCart = () => setCart((current) => current.slice(0, -1))
  const total = cart.reduce((sum, id) => sum + (shopProducts.find((product) => product.id === id)?.price ?? 0), 0)

  return (
    <div className="relative min-h-[250px] flex-1 overflow-hidden border-b bg-muted/20 p-3 sm:min-h-[280px] sm:p-4">
      <div className="relative mx-auto flex h-full min-h-[218px] max-w-[560px] gap-3 rounded-xl border border-border bg-background p-3 shadow-sm sm:gap-4 sm:p-4">
        <div className="min-w-0 flex-1 space-y-2 overflow-hidden">
          <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold sm:text-xs">Shop Collection</span><ShoppingBag className="size-3 text-muted-foreground" /></div>
          {shopProducts.map((product, index) => <motion.div key={product.id} layout className="flex items-center gap-2 rounded-lg border bg-muted/20 p-2" whileHover={{ scale: 1.02 }}>
            <div className={cn("size-9 shrink-0 rounded-md bg-gradient-to-br", index === 0 ? "from-foreground/20 to-foreground/5" : index === 1 ? "from-foreground/30 to-muted" : "from-muted to-foreground/15")} />
            <div className="min-w-0 flex-1"><p className="truncate text-[9px] font-medium sm:text-[10px]">{product.name}</p><p className="text-[9px] text-muted-foreground">${product.price}</p></div>
            <motion.button type="button" aria-label={`Add ${product.name}`} onClick={() => addToCart(product.id)} whileTap={{ scale: .9 }} className="flex size-6 items-center justify-center rounded-md bg-foreground text-background"><Plus className="size-3" /></motion.button>
          </motion.div>)}
        </div>
        <motion.aside layout className="flex w-[108px] shrink-0 flex-col rounded-lg border bg-muted/20 p-2.5 sm:w-[145px] sm:p-3">
          <div className="mb-3 flex items-center gap-1.5"><ShoppingCart className="size-3" /><span className="text-[9px] font-medium sm:text-[10px]">Cart ({cart.length})</span></div>
          <div className="min-h-0 flex-1 space-y-1.5 overflow-hidden">{cart.slice(-3).map((id, index) => { const product = shopProducts.find((item) => item.id === id); return <motion.div key={`${id}-${index}`} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between rounded bg-background px-1.5 py-1 text-[8px]"><span className="truncate">{product?.name}</span><X className="size-2.5 shrink-0 text-muted-foreground" /></motion.div> })}</div>
          <div className="mt-2 border-t pt-2"><div className="mb-2 flex justify-between text-[9px]"><span>Total</span><motion.span key={total}>${total}</motion.span></div><motion.button type="button" onClick={removeFromCart} disabled={!cart.length} whileTap={{ scale: .97 }} className="w-full rounded-md bg-foreground py-1.5 text-[8px] text-background disabled:opacity-40">Checkout</motion.button></div>
        </motion.aside>
      </div>
    </div>
  )
}

function AutomationPreview() {
  const cards = [
    { icon: Globe2, side: "left", position: "top" },
    { icon: Bot, side: "left", position: "middle" },
    { icon: Settings2, side: "left", position: "bottom" },
    { icon: ShoppingBag, side: "right", position: "top" },
    { icon: Search, side: "right", position: "middle" },
    { icon: Mail, side: "right", position: "bottom" },
  ] as const

  return (
    <div className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden border-b bg-muted/20 px-4 py-5 sm:min-h-[340px] sm:px-8">
      <div aria-hidden="true" className="absolute inset-1/4 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-40 [--dots-color:currentColor] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="relative flex w-full max-w-[430px] items-center justify-between">
        <div className="z-10 flex flex-col gap-4 sm:gap-6">
          {cards.filter((card) => card.side === "left").map((card) => <IntegrationCard key={card.position} icon={card.icon} side="left" position={card.position} />)}
        </div>
        <div className="relative z-20 rounded-2xl border bg-muted p-1 sm:rounded-3xl">
          <div className="flex size-14 items-center justify-center rounded-xl border border-border bg-background shadow-xl sm:size-20 sm:rounded-2xl"><Bot aria-hidden="true" className="size-7 sm:size-10" strokeWidth={1.2} /></div>
        </div>
        <div className="z-10 flex flex-col gap-4 sm:gap-6">
          {cards.filter((card) => card.side === "right").map((card) => <IntegrationCard key={card.position} icon={card.icon} side="right" position={card.position} />)}
        </div>
      </div>
    </div>
  )
}

function IntegrationCard({ icon: Icon, side, position }: { icon: typeof Globe2; side: "left" | "right"; position: "top" | "middle" | "bottom" }) {
  const rotation = position === "top" ? (side === "left" ? "rotate-[25deg]" : "rotate-[-25deg]") : position === "bottom" ? (side === "left" ? "rotate-[-25deg]" : "rotate-[25deg]") : ""
  return <div className="relative flex size-10 items-center justify-center rounded-xl border bg-background sm:size-12">
    <Icon aria-hidden="true" className="size-5 sm:size-6" strokeWidth={1.4} />
    <div aria-hidden="true" className={cn("absolute top-1/2 h-px w-[clamp(42px,11vw,82px)] bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/10", side === "left" ? "left-full origin-left" : "right-full origin-right bg-gradient-to-l", rotation)} />
  </div>
}

const funnelNotifications = [
  { name: "Payment received", description: "D4Y Software", icon: "💸", color: "#00C9A7", time: "15m ago" },
  { name: "User signed up", description: "D4Y Software", icon: "👤", color: "#FFB800", time: "10m ago" },
  { name: "New message", description: "D4Y Software", icon: "💬", color: "#FF3D71", time: "5m ago" },
  { name: "New event", description: "D4Y Software", icon: "🗞️", color: "#1E86FF", time: "2m ago" },
]

function EmailFunnelNotification({ item }: { item: (typeof funnelNotifications)[number] }) {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transition-all duration-200 ease-in-out hover:scale-[1.03] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl" style={{ backgroundColor: item.color }}><span className="text-lg" aria-hidden="true">{item.icon}</span></div>
        <div className="flex flex-col overflow-hidden"><figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white"><span className="text-sm sm:text-lg">{item.name}</span><span className="mx-1">·</span><span className="text-xs text-gray-500">{item.time}</span></figcaption><p className="text-sm font-normal dark:text-white/60">{item.description}</p></div>
      </div>
    </figure>
  )
}

function EmailFunnelPreview() {
  return (
    <div className="relative h-[250px] min-h-[250px] flex-1 overflow-hidden border-b bg-background p-4">
      <AnimatedList delay={1400} maxItems={3} className="absolute inset-4 flex h-[218px] w-auto flex-col justify-end gap-3 overflow-hidden">
        {funnelNotifications.map((item) => <EmailFunnelNotification item={item} key={item.name} />)}
      </AnimatedList>
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
    <section id="services" aria-labelledby="services-heading" className="w-full py-12 lg:px-4 xl:px-8">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:-mx-10 lg:grid-cols-12 lg:gap-6 xl:-mx-16 2xl:-mx-24">
        {items.map((service, index) => (
          <BlurFade key={service.title} delay={0.28 + index * 0.05} className={index < 3 ? "lg:col-span-4" : index === 3 ? "lg:col-start-2 lg:col-span-5" : "lg:col-start-7 lg:col-span-5"}>
            <article className="group relative flex min-h-0 h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-card shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl dark:border-white/10">
              {index === 0 ? (
                <SoftwareDashboardPreview />
              ) : index === 1 ? (
                <ConversionWebsitePreview />
              ) : index === 2 ? (
                <OnlineShopPreview />
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
