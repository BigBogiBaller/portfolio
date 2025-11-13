"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Diamond, Sparkles } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price?: string
  priceDescription?: string
  description: string
  features?: string[]
  buttonText: string
  buttonLink: string
  useSparkles?: boolean
  className?: string
}

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 30px -5px hsl(var(--foreground) / 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      priceDescription,
      description,
      features,
      buttonText,
      buttonLink,
      useSparkles = false,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        className={`relative flex flex-col justify-between rounded-lg border bg-card p-8 text-card-foreground shadow-sm transition-shadow duration-300 ${className || ""}`}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {price && (
              <div className="mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold inline-block"
                  >
                    {price}
                  </motion.span>
                </AnimatePresence>
                <p className="text-sm text-muted-foreground">{priceDescription}</p>
              </div>
            )}
          </div>

          <p className="text-muted-foreground">{description}</p>

          {features && (
            <ul className="space-y-2 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {useSparkles ? (
                    <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                  ) : (
                    <Diamond className="h-4 w-4 text-primary flex-shrink-0" />
                  )}
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6">
          <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">{buttonText}</Button>
          </Link>
        </div>
      </motion.div>
    )
  },
)
PricingCard.displayName = "PricingCard"

export function Pricing({ language = "en" }: { language?: "en" | "de" }) {
  const CALENDLY_LINK = "https://calendly.com/bogilekic123/30min"

  const [currency, setCurrency] = React.useState<"EUR" | "USD">("EUR")

  const EUR_TO_USD = 1.1

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrency((prev) => (prev === "EUR" ? "USD" : "EUR"))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (eurPrice: string) => {
    const numericPrice = Number.parseFloat(eurPrice.replace(/[^0-9.]/g, ""))

    if (isNaN(numericPrice)) {
      if (eurPrice.includes("+")) {
        const basePrice = Number.parseFloat(eurPrice.replace(/[^0-9]/g, ""))
        if (currency === "USD") {
          return `$${Math.round(basePrice * EUR_TO_USD)}+`
        }
        return eurPrice
      }
      return eurPrice
    }

    if (currency === "USD") {
      return `$${Math.round(numericPrice * EUR_TO_USD)}`
    }
    return eurPrice
  }

  const translations = {
    en: {
      tag: "Pricing Plans",
      title: "Transparent Pricing, No Surprises",
      description:
        "Choose the perfect plan for your project. All packages include responsive design and modern development practices.",
      showingPrices: "Showing prices in:",
      starter: "Starter",
      starterDesc: "Perfect for small projects and simple websites that need a professional touch.",
      professional: "Professional",
      professionalDesc: "Ideal for businesses that need a complete website with advanced features and functionality.",
      enterprise: "Enterprise",
      enterpriseDesc: "For complex projects requiring custom development, integrations, and ongoing support.",
      startingFrom: "Starting from",
      letsTalk: "Let's Talk",
      features: {
        designer: "Experienced Designer",
        fastDelivery: "Fast Delivery",
        responsive: "Responsive Design",
        seo: "Basic SEO Setup",
        conversion: "Conversion Focused",
        animations: "Advanced Animations",
        team: "Dedicated Design Team",
        support: "Priority Support",
        custom: "Custom Development",
        system: "Full Design System",
      },
      uniqueRequest: "Unique Request",
      uniqueDesc:
        "Are you looking for something custom? Don't hesitate to contact us, and we'll help brainstorm your product to success.",
    },
    de: {
      tag: "Preispläne",
      title: "Transparente Preise, keine Überraschungen",
      description:
        "Wählen Sie den perfekten Plan für Ihr Projekt. Alle Pakete beinhalten responsives Design und moderne Entwicklungspraktiken.",
      showingPrices: "Preise werden angezeigt in:",
      starter: "Starter",
      starterDesc: "Perfekt für kleine Projekte und einfache Websites, die eine professionelle Note benötigen.",
      professional: "Professionell",
      professionalDesc: "Ideal für Unternehmen, die eine vollständige Website mit erweiterten Funktionen benötigen.",
      enterprise: "Enterprise",
      enterpriseDesc:
        "Für komplexe Projekte, die individuelle Entwicklung, Integrationen und laufenden Support erfordern.",
      startingFrom: "Ab",
      letsTalk: "Kontakt",
      letsTalkUnique: "Lassen Sie Uns Sprechen",
      features: {
        designer: "Erfahrener Designer",
        fastDelivery: "Schnelle Lieferung",
        responsive: "Responsives Design",
        seo: "Grundlegendes SEO-Setup",
        conversion: "Conversion-fokussiert",
        animations: "Erweiterte Animationen",
        team: "Dediziertes Design-Team",
        support: "Prioritäts-Support",
        custom: "Individuelle Entwicklung",
        system: "Vollständiges Design-System",
      },
      uniqueRequest: "Individuelle Anfrage",
      uniqueDesc:
        "Suchen Sie etwas Individuelles? Zögern Sie nicht, uns zu kontaktieren, und wir helfen Ihnen, Ihr Produkt zum Erfolg zu führen.",
    },
  }

  const t = translations[language]

  const plans = [
    {
      title: t.starter,
      price: formatPrice("€1000"),
      priceDescription: t.startingFrom,
      description: t.starterDesc,
      features: [t.features.designer, t.features.fastDelivery, t.features.responsive, t.features.seo],
      buttonText: t.letsTalk,
      buttonLink: CALENDLY_LINK,
    },
    {
      title: t.professional,
      price: formatPrice("€2000"),
      priceDescription: t.startingFrom,
      description: t.professionalDesc,
      features: [t.features.designer, t.features.fastDelivery, t.features.conversion, t.features.animations],
      buttonText: t.letsTalk,
      buttonLink: CALENDLY_LINK,
    },
    {
      title: t.enterprise,
      price: formatPrice("€3000+"),
      priceDescription: t.startingFrom,
      description: t.enterpriseDesc,
      features: [t.features.team, t.features.support, t.features.custom, t.features.system],
      buttonText: t.letsTalk,
      buttonLink: CALENDLY_LINK,
      useSparkles: true,
    },
  ]

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">{t.tag}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
              {t.description}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">{t.showingPrices}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-primary"
                >
                  {currency === "EUR" ? "🇪🇺 Euros (€)" : "🇺🇸 US Dollars ($)"}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm max-w-7xl mx-auto"
          >
            <h3 className="text-xl font-semibold">{t.uniqueRequest}</h3>
            <p className="mt-2 text-muted-foreground">{t.uniqueDesc}</p>
            <div className="mt-6">
              <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto">{language === "de" ? t.letsTalkUnique : t.letsTalk}</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
