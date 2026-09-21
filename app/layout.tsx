import type React from "react"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import Script from "next/script"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "D4Y Software & Automatisierung für KMU | Bogdan Lekic",
    template: `%s | Bogdan Lekic`,
  },
  description:
    "Verkaufsoptimierte Websites, Onlineshops und Automatisierungen für KMU, CEOs, Coaches und Berater in Wien und Österreich. Gewinne Zeit und Geld mit digitalen Systemen.",
  keywords: [
    "Webdesign Wien",
    "Website erstellen lassen Österreich",
    "verkaufsoptimierte Website",
    "Onlineshop erstellen lassen",
    "Automatisierung KMU",
    "KI Automatisierung Österreich",
    "Bogdan Lekic",
  ],
  authors: [{ name: "Bogdan Lekic", url: DATA.url }],
  creator: "Bogdan Lekic",
  publisher: "Bogdan Lekic",
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "de_AT",
    type: "website",
    images: [{ url: "/profile-linkedin.png", width: 800, height: 800, alt: "Bogdan Lekic – Webentwicklung und Automatisierung" }],
  },
  alternates: {
    canonical: DATA.url,
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-AT" suppressHydrationWarning>
      <head>
        <Script
          defer
          data-website-id="dfid_6zdm1LRWqqd4W1h2NaLHA"
          data-domain="www.bogdanlekic.com"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Toaster position="top-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
