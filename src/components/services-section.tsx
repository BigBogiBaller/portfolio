"use client"

import BlurFade from "@/components/magicui/blur-fade"

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
            <article className="group relative h-full overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-foreground/30 hover:shadow-xl">
              <div aria-hidden="true" className="relative h-36 overflow-hidden border-b bg-muted/30 [background-image:linear-gradient(to_right,hsl(var(--muted-foreground)/.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/.08)_1px,transparent_1px)] [background-size:28px_28px]">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-2xl border border-foreground/20 bg-background/40 shadow-2xl backdrop-blur-sm transition-all duration-700 group-hover:rotate-0 group-hover:scale-110">
                  <div className="absolute inset-3 rounded-xl border border-foreground/15" />
                  <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow-[0_0_24px_hsl(var(--foreground)/.7)] animate-pulse" />
                </div>
                <div className="absolute left-[18%] top-8 size-2 rounded-full bg-foreground/50 transition-all duration-700 group-hover:left-[28%] group-hover:top-5" />
                <div className="absolute right-[18%] bottom-8 size-2 rounded-full bg-foreground/40 transition-all duration-700 group-hover:right-[28%] group-hover:bottom-5" />
              </div>
              <div className="relative p-6">
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">{service.accent}</span>
                  <span aria-hidden="true" className="size-3 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-150" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
