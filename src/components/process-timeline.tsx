"use client"
import { Timeline } from "@/components/ui/timeline"
import BlurFade from "@/components/magicui/blur-fade"

const BLUR_FADE_DELAY = 0.04

interface ProcessTimelineProps {
  language: "en" | "de"
}

const processTranslations = {
  en: {
    sectionLabel: "My Process",
    title: "From Vision to Reality",
    subtitle: "Here's how we go from 0 to 1 together",
    steps: [
      {
        title: "Discovery Call",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              We start with a free 30-minute discovery call to understand your vision, goals, and requirements.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Understand your business and target audience
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Discuss your goals and expectations
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Identify key features and functionality needed
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Establish timeline and budget
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Strategy & Planning",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Based on our discovery call, I create a detailed project plan and strategy tailored to your needs.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Sitemap and user flow creation
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Content strategy and structure
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Technology stack selection
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Project milestones and deliverables
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Design & Development",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              This is where the magic happens. I design and build your website with attention to every detail.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Custom UI/UX design tailored to your brand
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Responsive development for all devices
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Modern animations and interactions
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Regular updates and feedback sessions
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Review & Refinement",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              We review the website together and make any necessary adjustments to ensure it's perfect.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Comprehensive testing across browsers
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Performance optimization
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ SEO implementation
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Final revisions based on your feedback
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Launch & Support",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              We launch your website and I provide ongoing support to ensure everything runs smoothly.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Deployment to your preferred hosting
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Domain and SSL setup
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Training on how to manage your site
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Ongoing maintenance and support
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  de: {
    sectionLabel: "Mein Prozess",
    title: "Von der Vision zur Realität",
    subtitle: "So gehen wir gemeinsam von 0 auf 1",
    steps: [
      {
        title: "Erstgespräch",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Wir beginnen mit einem kostenlosen 30-minütigen Erstgespräch, um Ihre Vision, Ziele und Anforderungen zu
              verstehen.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Ihr Unternehmen und Ihre Zielgruppe verstehen
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Ihre Ziele und Erwartungen besprechen
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Wichtige Funktionen und Features identifizieren
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Zeitrahmen und Budget festlegen
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Strategie & Planung",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Basierend auf unserem Erstgespräch erstelle ich einen detaillierten Projektplan und eine auf Ihre
              Bedürfnisse zugeschnittene Strategie.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Sitemap und User-Flow-Erstellung
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Content-Strategie und -Struktur
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Auswahl des Technologie-Stacks
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Projekt-Meilensteine und Lieferungen
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Design & Entwicklung",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Hier passiert die Magie. Ich designe und baue Ihre Website mit Liebe zum Detail.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Individuelles UI/UX-Design für Ihre Marke
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Responsive Entwicklung für alle Geräte
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Moderne Animationen und Interaktionen
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Regelmäßige Updates und Feedback-Sitzungen
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Review & Verfeinerung",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Wir überprüfen die Website gemeinsam und nehmen alle notwendigen Anpassungen vor, um sicherzustellen, dass
              sie perfekt ist.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Umfassende Tests in allen Browsern
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Performance-Optimierung
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ SEO-Implementierung
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Finale Überarbeitungen basierend auf Ihrem Feedback
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Launch & Support",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
              Wir starten Ihre Website und ich biete fortlaufenden Support, um sicherzustellen, dass alles reibungslos
              läuft.
            </p>
            <div className="mb-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Deployment auf Ihrem bevorzugten Hosting
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Domain- und SSL-Einrichtung
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Schulung zur Verwaltung Ihrer Website
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                ✓ Laufende Wartung und Support
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
}

export function ProcessTimeline({ language }: ProcessTimelineProps) {
  const t = processTranslations[language]

  return (
    <section id="process" className="w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {t.sectionLabel}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <Timeline data={t.steps} />
      </BlurFade>
    </section>
  )
}
