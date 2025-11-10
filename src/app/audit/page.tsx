"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import Image from "next/image"

export default function AuditPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/audit-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setHasAccess(true)
        setIsOpen(false)
        toast.success("Access granted! Opening your audit...")

        // Open PDF in new tab after a short delay
        setTimeout(() => {
          window.open("/website-conversion-audit.pdf", "_blank")
        }, 500)
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCoverClick = () => {
    if (hasAccess) {
      window.open("/website-conversion-audit.pdf", "_blank")
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Ultimate Website Conversion Audit</h1>
            <p className="text-xl text-muted-foreground mb-2">by Bogdan Lekic</p>
            <p className="text-lg text-muted-foreground">Clarity-Driven Web Design for Business Growth</p>
          </div>

          {/* PDF Cover Preview */}
          <div className="relative group cursor-pointer mb-8" onClick={handleCoverClick}>
            <div className="relative aspect-[8.5/11] w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-2xl transition-transform group-hover:scale-[1.02]">
              <Image
                src="/audit-cover.png"
                alt="Website Conversion Audit Cover"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="text-lg px-8 py-6">
                    {hasAccess ? "Open PDF" : "Get Free Access"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center space-y-4 mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This comprehensive 10-section audit will help you identify exactly where your website is losing potential
              customers and how to fix it.
            </p>
            <Button size="lg" onClick={handleCoverClick} className="text-lg px-8 py-6">
              {hasAccess ? "View Audit PDF" : "Download Free Audit"}
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            {[
              "Messaging Clarity Assessment",
              "Visual Hierarchy Review",
              "CTA Strategy Analysis",
              "Trust Signal Evaluation",
              "Performance Optimization",
              "SEO & Content Structure",
              "Mobile Optimization Check",
              "Conversion Health Score",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="mt-1 text-primary">✓</div>
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Gate Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Your Free Audit</DialogTitle>
            <DialogDescription>Enter your email to access the Ultimate Website Conversion Audit PDF</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get Instant Access"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
