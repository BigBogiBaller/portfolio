"use client"

import React from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    text: "Bogdan ist ein junger, aufstrebender und vor allem unglaublich kreativer Webdesigner. Er hat all meine Wünsche nicht nur geduldig, sondern auch mit viel Liebe zum Detail perfekt umgesetzt. Wenn ihr eine Website sucht, die nicht nur funktioniert, sondern begeistert, dann ist Bogdan genau der Richtige dafür. 🚀",
    image: "/images/andy-seebacher.png",
    name: "Andy Seebacher",
    role: "Business Owner",
  },
  {
    text: "Outstanding work! delivered exactly what I needed with professionalism and attention to detail. Communication was clear and timely, and they went above and beyond to ensure the project's success. Highly recommend for anyone seeking quality and reliability!",
    image: "/images/muhammad-rizwan.jpg",
    name: "Muhammad Rizwan",
    role: "Saudi Arabia",
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
]

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
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
                <div className="p-6 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-card" key={i}>
                  <div className="text-sm text-muted-foreground leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-sm">{role}</div>
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

const firstColumn = testimonials.slice(0, 4)
const secondColumn = testimonials.slice(4, 7)
const thirdColumn = testimonials.slice(7, 10)

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Testimonials</div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-5 text-center">What clients say</h2>
          <p className="text-center mt-5 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what my clients have to say about working with me.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
