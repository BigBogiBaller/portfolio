"use client"

import React from "react"
import { motion } from "motion/react"

const testimonials = {
  en: [
    {
      text: "Bogdan is a young, aspiring and above all incredibly creative web designer. He implemented all my wishes not only patiently, but also with great attention to detail. If you're looking for a website that not only works but inspires, then Bogdan is the right choice for you.",
      image: "/images/andy-seebacher.png",
      name: "Andy Seebacher",
      role: "Business Owner",
    },
    {
      text: "I had the pleasure of working with Bogdan on the design and development of my company website, and I couldn't recommend him more highly. He's a talented young web developer: responsive, detail-oriented, and genuinely committed to delivering great results.",
      image: "/images/charles-baudin.png",
      name: "Charles Baudin",
      role: "Founder & CEO at Activ8Pay",
    },
    {
      text: "Outstanding work! Delivered exactly what I needed with professionalism and attention to detail. Communication was clear and timely, and they went above and beyond to ensure the project's success.",
      image: "/images/muhammad-rizwan.jpg",
      name: "Muhammad Rizwan",
      role: "Saudi Arabia",
    },
    {
      text: "I highly recommend working with Bogdan Lekic. What impressed me was his quick analytical ability to understand the client's situation and make concrete, sustainable suggestions. His flexibility rounds off his profile perfectly.",
      image: "/images/david-ayemle.png",
      name: "David Ayemle",
      role: "Coaching for Personal Development",
    },
    {
      text: "Bogdan Lekic caught my attention online. What appealed to me was the ease of our working process. There was no sales pressure - just a straightforward offer. He sensitively aligned the content and layout with my existing website while bringing in his own fresh perspective.",
      image: "/images/elisabeth-brommer-kern.png",
      name: "Elisabeth Brommer Kern",
      role: "Founder at SJPDevelopment GmbH",
    },
  ],
  de: [
    {
      text: "Bogdan ist ein junger, aufstrebender und vor allem unglaublich kreativer Webdesigner. Er hat all meine Wünsche nicht nur geduldig, sondern auch mit viel Liebe zum Detail perfekt umgesetzt. Wenn ihr eine Website sucht, die nicht nur funktioniert, sondern begeistert, dann ist Bogdan genau der Richtige dafür.",
      image: "/images/andy-seebacher.png",
      name: "Andy Seebacher",
      role: "Geschäftsinhaber",
    },
    {
      text: "Ich hatte das Vergnügen, mit Bogdan am Design und der Entwicklung der Website meines Unternehmens zu arbeiten, und ich kann ihn nur wärmstens empfehlen. Er ist ein talentierter junger Webentwickler: reaktionsschnell, detailorientiert und wirklich engagiert, großartige Ergebnisse zu liefern.",
      image: "/images/charles-baudin.png",
      name: "Charles Baudin",
      role: "Gründer & CEO bei Activ8Pay",
    },
    {
      text: "Herausragende Arbeit! Geliefert genau das, was ich brauchte, mit Professionalität und Liebe zum Detail. Die Kommunikation war klar und rechtzeitig, und er ging über das hinaus, um den Erfolg des Projekts sicherzustellen.",
      image: "/images/muhammad-rizwan.jpg",
      name: "Muhammad Rizwan",
      role: "Saudi-Arabien",
    },
    {
      text: "Ich empfehle die Zusammenarbeit mit Bogdan Lekic sehr gerne. Was mich begeistert hat, ist seine schnelle analytische Fähigkeit, die Situation des Kunden schnell zu verstehen und konkrete, nachhaltige Vorschläge zu unterbreiten. Seine Flexibilität rundet sein Profil perfekt ab.",
      image: "/images/david-ayemle.png",
      name: "David Ayemle",
      role: "Coaching für Persönlichkeitsbildung",
    },
    {
      text: "Bogdan Lekic begegnete mir hier im Netz. Was mich von Anfang an angesprochen hat, war die Leichtigkeit in unserem Arbeitsprozess. Von ihm ging kein Verkaufsdruck aus - einfach ein sachliches Angebot. Er hat Inhalte und Layout sensibel an meine bestehende Webseite angelehnt und gleichzeitig einen eigenen, frischen Wind eingebracht.",
      image: "/images/elisabeth-brommer-kern.png",
      name: "Elisabeth Brommer Kern",
      role: "Gründerin von SJPDevelopment GmbH",
    },
  ],
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials.en
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-3xl border shadow-lg shadow-primary/10 w-[320px] bg-card" key={i}>
                  <div className="text-sm text-muted-foreground leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
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
  const firstColumn = currentTestimonials.slice(0, 2)
  const secondColumn = currentTestimonials.slice(2, 4)
  const thirdColumn = currentTestimonials.slice(4, 5)

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto px-4"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm">
              {language === "de" ? "Referenzen" : "Testimonials"}
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            {language === "de" ? "Was Kunden sagen" : "What clients say"}
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            {language === "de"
              ? "Sehen Sie, was meine Kunden über die Zusammenarbeit mit mir sagen."
              : "See what my clients have to say about working with me."}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-y-hidden overflow-x-visible px-6">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
