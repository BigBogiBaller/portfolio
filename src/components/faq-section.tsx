"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BlurFade from "@/components/magicui/blur-fade"
import Link from "next/link"

const CALENDLY_LINK = "https://calendly.com/bogilekic123/30min"
const WHATSAPP_LINK = "https://wa.me/436764716297"

const BLUR_FADE_DELAY = 0.04

const faqData = {
  en: {
    title: "Frequently Asked Questions",
    description:
      "Here are some common questions and answers about my services. If you don't find the answer you're looking for, feel free to reach out.",
    contactText: "Can't find what you're looking for? Send me a",
    contactLink: "WhatsApp message",
    questions: [
      {
        id: "item-1",
        title: "What services do you offer?",
        content:
          "I offer a range of digital services including custom website development, e-commerce/online shop creation, AI automation solutions, and sales funnel building. I help businesses establish a strong online presence and optimize their digital workflows.",
      },
      {
        id: "item-2",
        title: "How long does it take to build a website?",
        content:
          "The timeline depends on the project complexity. A simple landing page can be completed in 1-2 weeks, while a full e-commerce store or complex web application may take 4-8 weeks. I'll provide a detailed timeline during our initial consultation.",
      },
      {
        id: "item-3",
        title: "What is AI automation and how can it help my business?",
        content:
          "AI automation involves using artificial intelligence to automate repetitive tasks, improve customer service, and streamline business processes. This can include chatbots, automated email sequences, data processing, and more. It saves time, reduces errors, and allows you to focus on growing your business.",
      },
      {
        id: "item-4",
        title: "Do you offer ongoing support and maintenance?",
        content:
          "Yes! I offer ongoing support and maintenance packages to ensure your website stays up-to-date, secure, and performing optimally. This includes regular updates, security monitoring, and technical support.",
      },
      {
        id: "item-5",
        title: "What is a sales funnel and why do I need one?",
        content:
          "A sales funnel is a step-by-step process that guides potential customers from initial awareness to making a purchase. It helps convert visitors into leads and leads into customers through targeted content, landing pages, and automated follow-ups. A well-designed funnel can significantly increase your conversion rates.",
      },
      {
        id: "item-6",
        title: "How do we get started?",
        content:
          "Simply schedule a free 30-minute consultation call using the booking link on this page. We'll discuss your project requirements, goals, and I'll provide recommendations on the best approach to achieve your objectives.",
      },
    ],
  },
  de: {
    title: "Häufig gestellte Fragen",
    description:
      "Hier finden Sie häufig gestellte Fragen und Antworten zu meinen Dienstleistungen. Falls Sie nicht finden, wonach Sie suchen, kontaktieren Sie mich gerne.",
    contactText: "Können Sie nicht finden, wonach Sie suchen? Schicken Sie mir einfach eine",
    contactLink: "Nachricht auf Whatsapp",
    questions: [
      {
        id: "item-1",
        title: "Welche Dienstleistungen bieten Sie an?",
        content:
          "Ich biete eine Reihe von digitalen Dienstleistungen an, darunter individuelle Website-Entwicklung, E-Commerce/Online-Shop-Erstellung, KI-Automatisierungslösungen und Aufbau von Verkaufstrichtern. Ich helfe Unternehmen, eine starke Online-Präsenz aufzubauen und ihre digitalen Arbeitsabläufe zu optimieren.",
      },
      {
        id: "item-2",
        title: "Wie lange dauert es, eine Website zu erstellen?",
        content:
          "Der Zeitrahmen hängt von der Projektkomplexität ab. Eine einfache Landing Page kann in 1-2 Wochen fertiggestellt werden, während ein vollständiger E-Commerce-Shop oder eine komplexe Webanwendung 4-8 Wochen dauern kann. Ich werde Ihnen während unserer ersten Beratung einen detaillierten Zeitplan vorlegen.",
      },
      {
        id: "item-3",
        title: "Was ist KI-Automatisierung und wie kann sie meinem Unternehmen helfen?",
        content:
          "KI-Automatisierung beinhaltet die Verwendung von künstlicher Intelligenz zur Automatisierung wiederkehrender Aufgaben, zur Verbesserung des Kundenservice und zur Optimierung von Geschäftsprozessen. Dies kann Chatbots, automatisierte E-Mail-Sequenzen, Datenverarbeitung und mehr umfassen. Es spart Zeit, reduziert Fehler und ermöglicht es Ihnen, sich auf das Wachstum Ihres Unternehmens zu konzentrieren.",
      },
      {
        id: "item-4",
        title: "Bieten Sie fortlaufende Unterstützung und Wartung an?",
        content:
          "Ja! Ich biete fortlaufende Support- und Wartungspakete an, um sicherzustellen, dass Ihre Website aktuell, sicher und optimal funktioniert. Dies umfasst regelmäßige Updates, Sicherheitsüberwachung und technischen Support.",
      },
      {
        id: "item-5",
        title: "Was ist ein Verkaufstrichter und warum brauche ich einen?",
        content:
          "Ein Verkaufstrichter ist ein schrittweiser Prozess, der potenzielle Kunden von der ersten Wahrnehmung bis zum Kauf führt. Er hilft dabei, Besucher in Leads und Leads in Kunden umzuwandeln, durch gezielte Inhalte, Landing Pages und automatisierte Follow-ups. Ein gut gestalteter Trichter kann Ihre Konversionsraten erheblich steigern.",
      },
      {
        id: "item-6",
        title: "Wie können wir starten?",
        content:
          "Vereinbaren Sie einfach ein kostenloses 30-minütiges Beratungsgespräch über den Buchungslink auf dieser Seite. Wir besprechen Ihre Projektanforderungen, Ziele, und ich werde Empfehlungen zum besten Ansatz geben, um Ihre Ziele zu erreichen.",
      },
    ],
  },
}

interface FaqSectionProps {
  language: "en" | "de"
}

export function FaqSection({ language }: FaqSectionProps) {
  const t = faqData[language]

  return (
    <section id="faq" className="w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="mx-auto w-full max-w-3xl space-y-7 px-4">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
            defaultValue="item-1"
          >
            {t.questions.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
              >
                <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline text-left">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 px-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-muted-foreground text-center">
            {t.contactText}{" "}
            <Link href={WHATSAPP_LINK} className="text-primary hover:underline">
              {t.contactLink}
            </Link>
          </p>
        </div>
      </BlurFade>
    </section>
  )
}
