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

export function Pricing() {
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

  const plans = [
    {
      title: "Starter",
      price: formatPrice("€500"),
      priceDescription: "Starting from",
      description: "Perfect for small projects and simple websites that need a professional touch.",
      features: ["Experienced Designer", "Fast Delivery", "Responsive Design", "Basic SEO Setup"],
      buttonText: "Let's Talk",
      buttonLink: CALENDLY_LINK,
    },
    {
      title: "Professional",
      price: formatPrice("€1000"),
      priceDescription: "Starting from",
      description: "Ideal for businesses that need a complete website with advanced features and functionality.",
      features: ["Experienced Designer", "Fast Delivery", "Conversion Focused", "Advanced Animations"],
      buttonText: "Let's Talk",
      buttonLink: CALENDLY_LINK,
    },
    {
      title: "Enterprise",
      price: formatPrice("€1500+"),
      priceDescription: "Starting from",
      description: "For complex projects requiring custom development, integrations, and ongoing support.",
      features: ["Dedicated Design Team", "Priority Support", "Custom Development", "Full Design System"],
      buttonText: "Let's Talk",
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
          {/* Title Section */}
          <div className="text-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">
              Pricing Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing, No Surprises</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
              Choose the perfect plan for your project. All packages include responsive design and modern development
              practices.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Showing prices in:</span>
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

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>

          {/* Unique Request Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm max-w-7xl mx-auto"
          >
            <h3 className="text-xl font-semibold">Unique Request</h3>
            <p className="mt-2 text-muted-foreground">
              Are you looking for something custom? {"Don't"} hesitate to contact us, and {"we'll"} help brainstorm your
              product to success.
            </p>
            <div className="mt-6">
              <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto">{"Let's"} Talk</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
