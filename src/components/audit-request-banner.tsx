"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function AuditRequestBanner() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent("Kostenloser Website-Audit")
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nE-Mail: ${form.get("email")}\nWebsite: ${form.get("website")}\nFokus: ${form.get("focus")}\n\nDetails:\n${form.get("details")}`,
    )
    window.location.href = `mailto:bogilekic123@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section aria-labelledby="audit-request-title" className="w-full rounded-3xl bg-muted/40 px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
          <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Kostenlose Website-Analyse
        </div>
        <h2 id="audit-request-title" className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          Wir finden, was deine Website zurückhält. Kostenlos.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          Schick uns deine Website und wir zeigen dir kurz und konkret, wo du mehr Anfragen und Verkäufe gewinnen kannst.
        </p>
      </div>

      {submitted ? (
        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border bg-background p-6 text-center">
          <CheckCircle2 className="size-5 text-emerald-600" aria-hidden="true" />
          <p className="font-medium">Danke! Deine Anfrage wurde vorbereitet. Wir melden uns bald.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Input name="name" aria-label="Name" placeholder="Name" required className="h-14 rounded-xl bg-background" />
          <Input name="email" type="email" aria-label="E-Mail" placeholder="E-Mail" required className="h-14 rounded-xl bg-background" />
          <Input name="website" type="url" aria-label="Website URL" placeholder="Product/website URL" required className="h-14 rounded-xl bg-background" />
          <Input name="focus" aria-label="Fokusbereich" placeholder="Fokusbereich, z. B. Conversion" className="h-14 rounded-xl bg-background" />
          <Textarea name="details" aria-label="Weitere Details" placeholder="Was sollen wir uns besonders ansehen?" rows={4} className="resize-none rounded-xl bg-background sm:col-span-2" />
          <Button type="submit" size="lg" className="h-14 rounded-xl sm:col-span-2">
            Kostenlosen Audit anfragen
            <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
          </Button>
        </form>
      )}
    </section>
  )
}
