"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Diamond, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define the props for the PricingCard component
interface PricingCardProps {
  title: string
  price?: string
  priceDescription?: string
  description: string
  features?: string[]
  buttonText: string
  imageSrc?: string
  imageAlt?: string
  isUnique?: boolean
  className?: string
  useSparkles?: boolean
}

// Framer Motion variants for animations
const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 30px -5px hsl(var(--foreground) / 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

const imageVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -5,
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
      imageSrc,
      imageAlt,
      isUnique = false,
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
        className={cn(
          "relative flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow duration-300",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          {/* Card Header with optional image */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              {price && (
                <div className="mt-2">
                  <span className="text-4xl font-bold">{price}</span>
                  <p className="text-sm text-muted-foreground">{priceDescription}</p>
                </div>
              )}
            </div>
            {imageSrc && (
              <motion.img
                src={imageSrc}
                alt={imageAlt || title}
                width={80}
                height={80}
                className="select-none"
                variants={imageVariants}
              />
            )}
          </div>

          {/* Card Description */}
          <p className="text-muted-foreground">{description}</p>

          {/* Feature List */}
          {features && (
            <ul className="space-y-2 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {useSparkles ? (
                    <Sparkles className="h-4 w-4 text-primary" />
                  ) : (
                    <Diamond className="h-4 w-4 text-primary" />
                  )}
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer with Button */}
        <div className="mt-6">
          <Button className="w-full">{buttonText}</Button>
        </div>
      </motion.div>
    )
  },
)

PricingCard.displayName = "PricingCard"

export default function PricingSection() {
  const plans = [
    {
      title: "Starter",
      price: "€500",
      priceDescription: "Starting from",
      description: "Perfect for small projects and simple websites that need a professional touch.",
      features: ["Experienced Designer", "Fast Delivery", "Responsive Design", "Basic SEO Setup"],
      buttonText: "Let's Talk",
      imageSrc:
        "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-gyoxLFpXzRRzVsgPJOKvB2r4tvzpcy.png&w=320&q=75",
      imageAlt: "Pink cherry blossom tree",
    },
    {
      title: "Professional",
      price: "€1000",
      priceDescription: "Starting from",
      description: "Ideal for businesses that need a complete website with advanced features and functionality.",
      features: ["Experienced Designer", "Fast Delivery", "Conversion Focused", "Advanced Animations"],
      buttonText: "Let's Talk",
      imageSrc:
        "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-v98BP3EQdx0Yd0NkjHPnWx33WvzwGP.png&w=320&q=75",
      imageAlt: "Yellow autumn tree",
    },
    {
      title: "Enterprise",
      price: "€1500+",
      priceDescription: "Starting from",
      description: "For complex projects requiring custom development, integrations, and ongoing support.",
      features: ["Dedicated Design Team", "Priority Support", "Custom Development", "Full Design System"],
      buttonText: "Let's Talk",
      imageSrc:
        "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-gyoxLFpXzRRzVsgPJOKvB2r4tvzpcy.png&w=320&q=75",
      imageAlt: "Premium design",
      useSparkles: true,
    },
  ]

  return (
    <div className="w-full px-4 py-12">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing Plans</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Transparent Pricing, No Surprises</h1>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Unique Request Card */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold">Unique Request</h3>
          <p className="mt-2 text-muted-foreground">
            Are you looking for something custom? Don't hesitate to contact us, and we'll help brainstorm your product
            to success.
          </p>
          <div className="mt-6">
            <Button className="w-full md:w-auto">Let's Talk</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
