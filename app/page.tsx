"use client"

import { HackathonCard } from "@/components/hackathon-card"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { ProjectCard } from "@/components/project-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Testimonials } from "@/components/ui/testimonials-columns-1"
import { Pricing } from "@/components/ui/pricing"
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Markdown from "react-markdown"
import { useState } from "react"
import { ProcessTimeline } from "@/components/process-timeline"

const BLUR_FADE_DELAY = 0.04
const CALENDLY_LINK = "https://calendly.com/bogilekic123/30min"

const translations = {
  en: {
    greeting: "Hi, I'm",
    description:
      "Web Developer and Aspiring Entrepeneur. I love building things and helping people. Very active on Twitter and LinkedIn.",
    summary:
      "At the end of 2022, I got introduced to AI and building beautiful websites using different tools. In the past, I ran a successful content creation business where I had my own social media pages and shot content for companies. I also had the pleasure of participating in a couple of different hackathons. Furthermore i created some beautiful websites for different brands and agencies.",
    about: "About",
    myProjects: "My Projects",
    checkOutWork: "Check out my latest work",
    projectsDescription:
      "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    impressed: "Impressed by what you see? Let's discuss how I can help bring your vision to life.",
    scheduleCall: "Schedule a Call",
    letsWork: "Let's Work Together",
    hackathons: "Hackathons",
    likeBuildingThings: "I like building things",
    hackathonsDescription:
      "During the last few years, I participated in a couple of hackathons. People from around the world come together and try to build incredible things in 2-3 days. It was interesting to see what you can do when you have little time but endless possibilities brought to life by a group of motivated and passionate individuals.",
    contact: "Contact",
    getInTouch: "Get in Touch",
    wantToChat: "Want to chat? Just shoot me a dm",
    onTwitter: "with a direct question on twitter",
    andRespond: "and I'll respond whenever I can.",
    scheduleCallTitle: "Schedule a Call",
    scheduleCallDescription:
      "Ready to discuss your project? Book a free 30-minute consultation call and let's explore how we can work together.",
    projects: {
      activ8pay:
        "I created a website for a fintech and payment company to showcase what is possible and how to convert software copy and animations into clients!",
      vision:
        "With this design, I decided to build a modern looking agency page which allows potential leads to schedule a call and learn more about the agency and its services.",
      spheraura:
        "I redesigned the website of a digital marketing agency completely from scratch because the initial website they had was not converting very well and was also not that pleasant to look at.",
      genesis:
        "Designed, developed completely with the help of AI showcasing what is possible with the technology nowadays.",
      bolt: "I took part in the bolt.new hackathon trying to build a site that lets participants sign up to the start of the hackathon",
      hairsalon:
        "This was one of my first projects that I did when I discovered the world of web design and web development.",
      vibe: "I entered the competition in order to create a fun and interacting website for the 2025 Vibe Coding Jam organised by Peter Lievels.",
    },
    hackathonItems: {
      vibe: "Developed a fun and interactive website for the 2025 Vibe Coding Jam organised by Peter Lievels.",
      bolt: "Built a site that lets participants sign up to the start of the hackathon using React and modern web technologies.",
      ai: "Participated in an AI-focused hackathon, building innovative solutions using cutting-edge AI technologies.",
    },
  },
  de: {
    greeting: "Hallo, ich bin",
    description:
      "Webentwickler und aufstrebender Unternehmer. Ich liebe es, Dinge zu bauen und Menschen zu helfen. Sehr aktiv auf Twitter und LinkedIn.",
    summary:
      "Ende 2022 wurde ich in die Welt der KI und des Erstellens schöner Websites mit verschiedenen Tools eingeführt. In der Vergangenheit führte ich ein erfolgreiches Content-Creation-Geschäft, bei dem ich meine eigenen Social-Media-Seiten hatte und Content für Unternehmen produzierte. Ich hatte auch das Vergnügen, an einigen verschiedenen Hackathons teilzunehmen. Darüber hinaus habe ich einige schöne Websites für verschiedene Marken und Agenturen erstellt.",
    about: "Über mich",
    myProjects: "Meine Projekt",
    checkOutWork: "Schauen Sie sich meine neuesten Arbeiten an",
    projectsDescription:
      "Ich habe an verschiedenen Projekten gearbeitet, von einfachen Websites bis hin zu komplexen Webanwendungen. Hier sind einige meiner Favoriten.",
    impressed:
      "Beeindruckt von dem, was Sie sehen? Lassen Sie uns besprechen, wie ich helfen kann, Ihre Vision zum Leben zu erwecken.",
    scheduleCall: "Termin vereinbaren",
    letsWork: "Lassen Sie uns zusammenarbeiten",
    hackathons: "Hackathons",
    likeBuildingThings: "Ich baue gerne Dinge",
    hackathonsDescription:
      "In den letzten Jahren habe ich an einigen Hackathons teilgenommen. Menschen aus der ganzen Welt kommen zusammen und versuchen, in 2-3 Tagen unglaubliche Dinge zu bauen. Es war interessant zu sehen, was man in kurzer Zeit schaffen kann, wenn endlose Möglichkeiten durch eine Gruppe motivierter und leidenschaftlicher Menschen zum Leben erweckt werden.",
    contact: "Kontakt",
    getInTouch: "Kontakt aufnehmen",
    wantToChat: "Möchten Sie chatten? Schicken Sie mir einfach eine DM",
    onTwitter: "mit einer direkten Frage auf Twitter",
    andRespond: "und ich antworte, sobald ich kann.",
    scheduleCallTitle: "Termin vereinbaren",
    scheduleCallDescription:
      "Bereit, Ihr Projekt zu besprechen? Buchen Sie ein kostenloses 30-minütiges Beratungsgespräch und lassen Sie uns erkunden, wie wir zusammenarbeiten können.",
    projects: {
      activ8pay:
        "Ich habe eine Website für ein Fintech- und Zahlungsunternehmen erstellt, um zu zeigen, was möglich ist und wie man Software-Texte und Animationen in Kunden umwandelt!",
      vision:
        "Mit diesem Design habe ich beschlossen, eine modern aussehende Agenturseite zu erstellen, die es potenziellen Leads ermöglicht, einen Anruf zu vereinbaren und mehr über die Agentur und ihre Dienstleistungen zu erfahren.",
      spheraura:
        "Ich habe die Website einer Digital-Marketing-Agentur komplett neu gestaltet, da die ursprüngliche Website nicht sehr gut konvertierte und auch nicht besonders ansprechend aussah.",
      genesis:
        "Vollständig mit Hilfe von KI entworfen und entwickelt, um zu zeigen, was mit der Technologie heutzutage möglich ist.",
      bolt: "Ich habe am bolt.new Hackathon teilgenommen und versucht, eine Website zu erstellen, auf der sich Teilnehmer für den Start des Hackathons anmelden können",
      hairsalon:
        "Dies war eines meiner ersten Projekte, als ich die Welt des Webdesigns und der Webentwicklung entdeckte.",
      vibe: "Ich habe am Wettbewerb teilgenommen, um eine unterhaltsame und interaktive Website für den Vibe Coding Jam 2025 zu erstellen, der von Peter Lievels organisiert wurde.",
    },
    hackathonItems: {
      vibe: "Entwickelte eine unterhaltsame und interaktive Website für den Vibe Coding Jam 2025, organisiert von Peter Lievels.",
      bolt: "Erstellte eine Website, auf der sich Teilnehmer für den Start des Hackathons anmelden können, mit React und modernen Webtechnologien.",
      ai: "Nahm an einem KI-fokussierten Hackathon teil und entwickelte innovative Lösungen mit modernsten KI-Technologien.",
    },
  },
}

export default function Page() {
  const [language, setLanguage] = useState<"en" | "de">("de")
  const t = translations[language]

  const translatedProjects = DATA.projects.map((project) => ({
    ...project,
    description:
      language === "de"
        ? project.title === "Activ8Pay"
          ? t.projects.activ8pay
          : project.title === "Vision Agency"
            ? t.projects.vision
            : project.title === "SpherAura"
              ? t.projects.spheraura
              : project.title === "Genesis Motorcycles"
                ? t.projects.genesis
                : project.title === "bolt.new hackathon"
                  ? t.projects.bolt
                  : project.title === "Hairsalon Website"
                    ? t.projects.hairsalon
                    : project.title === "Vibe Coding Jam"
                      ? t.projects.vibe
                      : project.description
        : project.description,
  }))

  const translatedHackathons = DATA.hackathons.map((hackathon) => ({
    ...hackathon,
    description:
      language === "de"
        ? hackathon.title === "Vibe Coding Jam"
          ? t.hackathonItems.vibe
          : hackathon.title === "bolt.new Hackathon"
            ? t.hackathonItems.bolt
            : hackathon.title === "AI Hackathon"
              ? t.hackathonItems.ai
              : hackathon.description
        : hackathon.description,
  }))

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg">
        <button
          onClick={() => setLanguage("de")}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === "de" ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === "en" ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
        >
          EN
        </button>
      </div>

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${t.greeting} ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={t.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border mt-2">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl || "/placeholder.svg"} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                <Button
                  size="lg"
                  className="w-full gap-2 h-12 px-8 text-base font-semibold bg-black hover:bg-black/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
                >
                  <Icons.calendar className="size-5" />
                  {t.scheduleCall}
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t.about}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t.summary}
          </Markdown>
        </BlurFade>
      </section>

      <ProcessTimeline language={language} />

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t.myProjects}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.checkOutWork}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.projectsDescription}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {translatedProjects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center gap-4 pt-8">
              <p className="text-sm text-muted-foreground text-center max-w-md">{t.impressed}</p>
              <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 h-12 px-8 text-base font-semibold bg-black hover:bg-black/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
                >
                  <Icons.sparkles className="size-5" />
                  {t.letsWork}
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t.hackathons}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.likeBuildingThings}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.hackathonsDescription}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {translatedHackathons.map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <Testimonials language={language} />

      <Pricing language={language} />

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t.contact}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.getInTouch}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.wantToChat}{" "}
                <Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
                  {t.onTwitter}
                </Link>{" "}
                {t.andRespond}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="schedule">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">{t.scheduleCallTitle}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">{t.scheduleCallDescription}</p>
              <div className="pt-4">
                <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gap-2 h-12 px-8 text-base font-semibold bg-black hover:bg-black/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
                  >
                    <Icons.calendar className="size-5" />
                    {t.scheduleCall}
                  </Button>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
