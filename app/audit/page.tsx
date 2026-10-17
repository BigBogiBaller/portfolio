"use client"

import { useState } from "react"
import { ArrowRight, Paperclip } from "lucide-react"

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent("Kostenloser Produkt-/Website-Audit")
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nE-Mail: ${form.get("email")}\nProdukt-/Website-URL: ${form.get("website")}\nFokusbereich: ${form.get("focus")}\n\nWeitere Details:\n${form.get("details")}`,
    )
    window.location.href = `mailto:bogilekic123@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f4f4f4] px-4 pb-16 pt-12 text-[#202020] sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-[710px]">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#666] shadow-sm">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Nur wenige Plätze verfügbar
          </div>
        </div>
        <h1 className="mx-auto max-w-[620px] text-center text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          Wir finden heraus, was dein Design zurückhält. Kostenlos.
        </h1>
        <p className="mx-auto mt-5 max-w-[590px] text-center text-base leading-6 text-[#667085] sm:text-lg">
          Sende uns einen Link zu deiner Website, Web-App, Desktop-App oder mobilen App. Ich nehme dann eine 2–3-minütige Loom-Aufnahme auf und zeigt dir genau, was du für bessere Nutzererfahrung und Conversion verbessern kannst.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-2xl bg-white p-8 text-center font-medium shadow-sm">Danke — deine Audit-Anfrage ist bereit zum Versenden.</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-8 sm:grid-cols-2">
            <label className="grid gap-3 text-base font-semibold">Name<input name="name" required placeholder="Dein Name" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none ring-0 placeholder:text-[#667085] focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold">E-Mail<input name="email" required type="email" placeholder="deinname@beispiel.de" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold">Produkt-/Website-URL<input name="website" required type="url" placeholder="https://deine-website.de" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold" htmlFor="focus">Fokusbereich<select id="focus" name="focus" required defaultValue="" className="h-14 appearance-none rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]"><option value="" disabled>Bitte auswählen</option><option value="Website und Startseite">Website und Startseite</option><option value="Onboarding">Onboarding</option><option value="Online-Shop">Online-Shop</option><option value="Mobile App">Mobile App</option><option value="Web-App">Web-App</option><option value="SEO und Conversion">SEO und Conversion</option><option value="Branding und Design">Branding und Design</option><option value="Sonstiges">Sonstiges</option></select></label>
            <label className="grid gap-3 text-base font-semibold sm:col-span-2">Weitere Details<textarea name="details" rows={6} placeholder="Gibt es etwas, das wir vorab wissen sollten?" className="resize-none rounded-xl border-0 bg-white px-5 py-5 font-normal text-[#667085] outline-none placeholder:text-[#667085] focus:ring-2 focus:ring-[#222]" /></label>
            <label className="flex h-14 items-center justify-between rounded-xl bg-white px-5 text-[#667085] sm:col-span-2">Datei hochladen<Paperclip className="size-5" aria-hidden="true" /><input type="file" className="sr-only" /></label>
            <button type="submit" className="flex h-16 items-center justify-center gap-2 rounded-full bg-[#232323] text-base font-semibold text-white transition-colors hover:bg-black sm:col-span-2">Kostenlosen Audit anfordern <ArrowRight className="size-4" aria-hidden="true" /></button>
          </form>
        )}
      </div>
    </main>
  )
}
