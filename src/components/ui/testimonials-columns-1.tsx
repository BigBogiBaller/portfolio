"use client"

import React from "react"
import { motion } from "framer-motion"

const testimonials = {
  en: [
    {
      text: "Bogdan ist ein junger, aufstrebender und vor allem unglaublich kreativer Webdesigner. Er hat all meine Wünsche nicht nur geduldig, sondern auch mit viel Liebe zum Detail perfekt umgesetzt. Wenn ihr eine Website sucht, die nicht nur funktioniert, sondern begeistert, dann ist Bogdan genau der Richtige dafür. 🚀",
      image: "/images/andy-seebacher.png",
      name: "Andy Seebacher",
      role: "Business Owner",
    },
    {
      text: "I had the pleasure of working with Bogdan on the design and development of my company website, and I couldn't recommend him more highly. He's a talented young web developer: responsive, detail-oriented, and genuinely committed to delivering great results. Throughout the project, Bogdan was proactive in suggesting improvements, quick to implement feedback, and always available when needed. A reliable and hardworking professional with a great attitude. I look forward to working with him again on future projects.",
      image: "/images/charles-baudin.png",
      name: "Charles Baudin",
      role: "Founder & CEO at Activ8Pay",
    },
    {
      text: "Outstanding work! delivered exactly what I needed with professionalism and attention to detail. Communication was clear and timely, and they went above and beyond to ensure the project's success. Highly recommend for anyone seeking quality and reliability!",
      image: "/images/muhammad-rizwan.jpg",
      name: "Muhammad Rizwan",
      role: "Saudi Arabia",
    },
    {
      text: "I highly recommend working with Bogdan Lekic. What impressed me was his quick analytical ability to understand the client's situation and make concrete, sustainable suggestions. I also appreciated his professionalism and his human side. His flexibility rounds off his profile perfectly for me.",
      image: "/images/david-ayemle.png",
      name: "David Ayemle",
      role: "Coaching for Personal Development",
    },
    {
      text: "Bogdan Lekic caught my attention here online. What appealed to me from the start was the ease of our working process. There was no sales pressure from him - just a straightforward offer. He gave me time to think it over, and then we collaborated online. On this journey, a new page for my newsletter was created. He sensitively aligned the content, format, and layout with my existing website while bringing in his own fresh perspective. That's exactly what I needed: an exchange with an innovative, fresh outside view. He also helped me get started with the newsletter tool Brevo, as I previously had no newsletter system. Beyond his professional expertise, I especially appreciate his patience and calm demeanor. He guided me through the entire process and gave me many valuable tips and tricks along the way.",
      image: "/images/elisabeth-brommer-kern.png",
      name: "Elisabeth Brommer Kern",
      role: "Founder at SJPDevelopment GmbH",
    },
    {
      text: "Working with Bogi was an absolute pleasure. His attention to detail and creative vision brought our project to life in ways we never imagined.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Sarah Johnson",
      role: "Marketing Director",
    },
    {
      text: "Bogi's technical expertise and ability to deliver on time made our collaboration seamless. The final product exceeded all expectations.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Michael Chen",
      role: "Startup Founder",
    },
    {
      text: "The website Bogi created for us not only looks stunning but also performs exceptionally well. Our conversion rates have increased significantly.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emma Rodriguez",
      role: "E-commerce Manager",
    },
    {
      text: "Bogi's innovative approach to web development and his understanding of modern design trends made our brand stand out in the market.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "David Thompson",
      role: "Creative Director",
    },
    {
      text: "Professional, reliable, and incredibly talented. Bogi delivered exactly what we needed and more. Highly recommend his services.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Lisa Park",
      role: "Business Owner",
    },
    {
      text: "The user experience Bogi designed for our platform is intuitive and engaging. Our users love the new interface.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Rachel Green",
      role: "Product Manager",
    },
    {
      text: "Bogi's ability to translate complex ideas into beautiful, functional websites is remarkable. A true professional.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "James Wilson",
      role: "Tech Lead",
    },
    {
      text: "From concept to deployment, Bogi handled everything with expertise. The project was delivered on time and within budget.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Amanda Foster",
      role: "Project Manager",
    },
    {
      text: "Bogi's work helped us establish a strong online presence. The website perfectly captures our brand identity and values.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Robert Kim",
      role: "Brand Manager",
    },
  ],
  de: [
    {
      text: "Bogdan ist ein junger, aufstrebender und vor allem unglaublich kreativer Webdesigner. Er hat all meine Wünsche nicht nur geduldig, sondern auch mit viel Liebe zum Detail perfekt umgesetzt. Wenn ihr eine Website sucht, die nicht nur funktioniert, sondern begeistert, dann ist Bogdan genau der Richtige dafür. 🚀",
      image: "/images/andy-seebacher.png",
      name: "Andy Seebacher",
      role: "Geschäftsinhaber",
    },
    {
      text: "Ich hatte das Vergnügen, mit Bogdan am Design und der Entwicklung der Website meines Unternehmens zu arbeiten, und ich kann ihn nur wärmstens empfehlen. Er ist ein talentierter junger Webentwickler: reaktionsschnell, detailorientiert und wirklich engagiert, großartige Ergebnisse zu liefern. Während des gesamten Projekts war Bogdan proaktiv darin, Verbesserungen vorzuschlagen, schnell Feedback umzusetzen und immer verfügbar, wenn er gebraucht wurde. Ein zuverlässiger und hart arbeitender Profi mit einer großartigen Einstellung. Ich freue mich darauf, in Zukunft wieder mit ihm zusammenzuarbeiten.",
      image: "/images/charles-baudin.png",
      name: "Charles Baudin",
      role: "Gründer & CEO bei Activ8Pay",
    },
    {
      text: "Herausragende Arbeit! Geliefert genau das, was ich brauchte, mit Professionalität und Liebe zum Detail. Die Kommunikation war klar und rechtzeitig, und er ging über das hinaus, was erforderlich war, um den Erfolg des Projekts sicherzustellen. Sehr empfehlenswert für alle, die Qualität und Zuverlässigkeit suchen!",
      image: "/images/muhammad-rizwan.jpg",
      name: "Muhammad Rizwan",
      role: "Saudi-Arabien",
    },
    {
      text: "Ich empfehle die Zusammenarbeit mit Bogdan Lekic sehr gerne. Was mich begeistert hat ist seine schnelle Analytische Fähigkeit, die Situation des Kunden schnell zu verstehen und konkrete Vorschläge zu unterbreiten die nachhaltig sind. Mich hat auch seine Professionalität und seine menschliche Seite gefallen. Seine Flexibilität rundet für mich sein Profil gut ab.",
      image: "/images/david-ayemle.png",
      name: "David Ayemle",
      role: "Coaching für Persönlichkeitsbildung",
    },
    {
      text: "Bogdan Lekic begegnete mir hier im Netz. Was mich von Anfang an angesprochen hat, war die Leichtigkeit in unserem Arbeitsprozess. Von ihm ging kein Verkaufsdruck aus - einfach ein sachliches Angebot. Er liess mir Zeit zum Überlegen, und dann haben wir online zusammengearbeitet. Auf dieser Reise ist eine neue Seite für meinen Newsletter entstanden. Dabei hat er Inhalte, Format und Layout sensibel an meine bestehende Webseite angelehnt und gleichzeitig einen eigenen, frischen Wind eingebracht. Genau das habe ich gebraucht: einen Austausch mit einem innovativen, frischen Blick von aussen. Ausserdem hat er mir den Einstieg in das Newsletter-Tool Brevo ermöglicht, da ich bisher kein Newsletter-System hatte. Neben seiner fachlichen Expertise schätze ich besonders seine Geduld und Ruhe. Er hat mich durch den gesamten Prozess begleitet und mir darüber hinaus viele wertvolle Tipps und Tricks mit auf den Weg gegeben.",
      image: "/images/elisabeth-brommer-kern.png",
      name: "Elisabeth Brommer Kern",
      role: "Gründerin von SJPDevelopment GmbH",
    },
    {
      text: "Die Zusammenarbeit mit Bogi war eine absolute Freude. Seine Aufmerksamkeit auf Details und kreative Vision brachten unser Projekt auf eine Weise zum Leben, die wir niemals vorstellten.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Sarah Johnson",
      role: "Marketingdirektorin",
    },
    {
      text: "Die technische Expertise von Bogi und seine Fähigkeit, pünktlich zu liefern, machte unsere Zusammenarbeit flüssig. Das endgültige Produkt überraschte uns.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Michael Chen",
      role: "Gründer eines Startups",
    },
    {
      text: "Die von Bogi erstellte Website für uns ist nicht nur ansprechend, sondern auch außergewöhnlich effizient. Unsere Konversionsraten haben sich erheblich erhöht.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emma Rodriguez",
      role: "E-Commerce-Managerin",
    },
    {
      text: "Die innovative Herangehensweise von Bogi an die Webentwicklung und sein Verständnis moderner Designtrends machten unser Markenbild im Markt auffällig.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "David Thompson",
      role: "Kreativer Direktor",
    },
    {
      text: "Professionell, zuverlässig und unglaublich talentiert. Bogi geliefert genau das, was wir brauchten und mehr. Seine Dienstleistungen empfehle ich sehr.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Lisa Park",
      role: "Geschäftsinhaberin",
    },
    {
      text: "Die Benutzererfahrung, die Bogi für unsere Plattform entwickelt hat, ist intuitiv und ansprechend. Unsere Benutzer lieben die neue Schnittstelle.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Rachel Green",
      role: "Produktmanagerin",
    },
    {
      text: "Die Fähigkeit von Bogi, komplexe Ideen in schöne, funktionale Websites umzusetzen, ist beeindruckend. Ein wahrer Profi.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "James Wilson",
      role: "Tech Lead",
    },
    {
      text: "Von Konzept bis zur Bereitstellung kümmerte sich Bogi alles mit Expertise. Das Projekt wurde pünktlich und im Budget geliefert.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Amanda Foster",
      role: "Projektmanagerin",
    },
    {
      text: "Die Arbeit von Bogi half uns, eine starke Onlinepräsenz etablieren. Die Website spiegelt unsere Markenidentität und -werte wunderbar wider.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Robert Kim",
      role: "Brandmanager",
    },
  ],
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials.en
  duration?: number
}) => {
  return (
    <div className={`flex-shrink-0 w-full max-w-[320px] ${props.className || ""}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div key={`${index}-${i}`} className="p-5 rounded-2xl border shadow-md shadow-primary/5 w-full bg-card">
                  <div className="text-sm text-muted-foreground leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="font-medium tracking-tight leading-5 text-foreground truncate">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

export const Testimonials = ({ language = "en" }: { language?: "en" | "de" }) => {
  const currentTestimonials = testimonials[language]
  const firstColumn = currentTestimonials.slice(0, 5)
  const secondColumn = currentTestimonials.slice(5, 9)
  const thirdColumn = currentTestimonials.slice(9, 13)

  return (
    <section className="bg-background my-20 relative w-full">
      <div className="z-10 mx-auto px-4 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {language === "de" ? "Referenzen" : "Testimonials"}
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-5 text-center">
            {language === "de" ? "Was Kunden sagen" : "What clients say"}
          </h2>
          <p className="text-center mt-5 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {language === "de"
              ? "Sehen Sie, was meine Kunden über die Zusammenarbeit mit mir sagen."
              : "See what my clients have to say about working with me."}
          </p>
        </motion.div>
        <div className="flex justify-center gap-4 lg:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden w-full">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  )
}
