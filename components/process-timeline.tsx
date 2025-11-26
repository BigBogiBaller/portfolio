"use client"
import { Timeline } from "@/components/ui/timeline"
import BlurFade from "@/components/magicui/blur-fade"
import { motion } from "framer-motion"

const BLUR_FADE_DELAY = 0.04

interface ProcessTimelineProps {
  language: "en" | "de"
}

const DiscoveryAnimation = () => (
  <motion.div className="w-16 h-16 mb-4 relative">
    {/* Phone icon with ringing animation */}
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full text-blue-500"
      animate={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </motion.svg>
    {/* Ring waves */}
    <motion.div
      className="absolute -top-1 -right-1 w-4 h-4 border-2 border-blue-400 rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
    />
  </motion.div>
)

const StrategyAnimation = () => (
  <motion.div className="w-16 h-16 mb-4 relative">
    {/* Clipboard with checklist */}
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full text-purple-500"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </motion.svg>
    {/* Animated checkmarks */}
    <motion.div
      className="absolute top-7 left-5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
    >
      <motion.svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <motion.path
          d="M5 12l5 5L20 7"
          className="text-green-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
        />
      </motion.svg>
    </motion.div>
    <motion.div
      className="absolute top-10 left-5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
    >
      <motion.svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <motion.path
          d="M5 12l5 5L20 7"
          className="text-green-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
        />
      </motion.svg>
    </motion.div>
  </motion.div>
)

const DesignAnimation = () => (
  <motion.div className="w-16 h-16 mb-4 relative">
    {/* Code brackets with typing animation */}
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <motion.path
        d="M16 18l6-6-6-6"
        className="text-cyan-500"
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.path
        d="M8 6l-6 6 6 6"
        className="text-cyan-500"
        animate={{ x: [0, -2, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.svg>
    {/* Cursor blink */}
    <motion.div
      className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
    />
  </motion.div>
)

const ReviewAnimation = () => (
  <motion.div className="w-16 h-16 mb-4 relative">
    {/* Magnifying glass with search animation */}
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full text-amber-500"
      animate={{ x: [0, 3, 0, -3, 0], y: [0, -2, 0, 2, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </motion.svg>
    {/* Sparkle effect */}
    <motion.div
      className="absolute top-2 right-3 w-2 h-2 bg-amber-400 rounded-full"
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
    />
  </motion.div>
)

const LaunchAnimation = () => (
  <motion.div className="w-16 h-16 mb-4 relative">
    {/* Rocket with launch animation */}
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full text-emerald-500"
      animate={{ y: [0, -5, 0], rotate: [0, -5, 5, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </motion.svg>
    {/* Flame particles */}
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
    >
      <div className="w-1 h-2 bg-orange-500 rounded-full" />
      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-0.5 mx-auto" />
    </motion.div>
  </motion.div>
)

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
            <DiscoveryAnimation />
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
            <StrategyAnimation />
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
            <DesignAnimation />
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
            <ReviewAnimation />
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
            <LaunchAnimation />
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
            <DiscoveryAnimation />
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
            <StrategyAnimation />
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
            <DesignAnimation />
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
            <ReviewAnimation />
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
            <LaunchAnimation />
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
