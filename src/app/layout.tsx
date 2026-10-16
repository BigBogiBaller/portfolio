import type React from "react"
import Script from "next/script"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pb-12 pt-20 sm:pb-24 sm:pt-28 px-6",
          fontSans.variable,
        )}
      >
        <Script
          defer
          data-website-id="dfid_6zdm1LRWqqd4W1h2NaLHA"
          data-domain="www.bogdanlekic.com"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Link
              href="/audit"
              className="fixed inset-x-0 top-0 z-[100] flex min-h-10 items-center justify-center gap-2 bg-foreground px-4 py-2 text-center text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90"
              aria-label="Kostenlosen Website-Audit anfragen"
            >
              <span>Kostenlosen Website-Audit anfragen</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            {children}
            <Navbar />
            <Toaster position="top-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
