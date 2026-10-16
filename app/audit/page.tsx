"use client"

import { useState } from "react"
import { ArrowRight, Paperclip } from "lucide-react"

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent("Free product/website audit")
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nProduct/website URL: ${form.get("website")}\nFocus area: ${form.get("focus")}\n\nMore details:\n${form.get("details")}`,
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
            Limited spots available
          </div>
        </div>
        <h1 className="mx-auto max-w-[620px] text-center text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          We&apos;ll find what&apos;s holding back your design. For free.
        </h1>
        <p className="mx-auto mt-5 max-w-[590px] text-center text-base leading-6 text-[#667085] sm:text-lg">
          Send us a link, whether it&apos;s a website, web app, desktop app or mobile app. A senior designer will record a 2–3 minute Loom showing exactly what to fix in your UX and conversion.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-2xl bg-white p-8 text-center font-medium shadow-sm">Thanks — your audit request is ready to send.</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-8 sm:grid-cols-2">
            <label className="grid gap-3 text-base font-semibold">Name<input name="name" required placeholder="Jeremiah Bouchard" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none ring-0 placeholder:text-[#667085] focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold">Email<input name="email" required type="email" placeholder="jeremiah@kargul.studio" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold">Product/website URL<input name="website" required type="url" placeholder="https://kargul.studio" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold">Focus area<input name="focus" placeholder="iOS app onboarding, homepage, etc" className="h-14 rounded-xl border-0 bg-white px-5 font-normal text-[#667085] outline-none focus:ring-2 focus:ring-[#222]" /></label>
            <label className="grid gap-3 text-base font-semibold sm:col-span-2">More details<textarea name="details" rows={6} placeholder="Anything we should know before we start?" className="resize-none rounded-xl border-0 bg-white px-5 py-5 font-normal text-[#667085] outline-none placeholder:text-[#667085] focus:ring-2 focus:ring-[#222]" /></label>
            <label className="flex h-14 items-center justify-between rounded-xl bg-white px-5 text-[#667085] sm:col-span-2">Upload attachment<Paperclip className="size-5" aria-hidden="true" /><input type="file" className="sr-only" /></label>
            <button type="submit" className="flex h-16 items-center justify-center gap-2 rounded-full bg-[#232323] text-base font-semibold text-white transition-colors hover:bg-black sm:col-span-2">Get my free audit <ArrowRight className="size-4" aria-hidden="true" /></button>
          </form>
        )}
      </div>
    </main>
  )
}
