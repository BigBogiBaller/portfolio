"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
  language?: "en" | "de";
}

const defaultLogos: Logo[] = [
  {
    id: "logo-1",
    description: "Stabil Im Wandel",
    image: "/images/logos/stabil-im-wandel.png",
    className: "h-16 w-auto",
  },
  {
    id: "logo-2",
    description: "SJP",
    image: "/images/logos/sjp.png",
    className: "h-16 w-auto",
  },
  {
    id: "logo-3",
    description: "Activ8Pay",
    image: "/images/logos/activ8pay.png",
    className: "h-12 w-auto",
  },
  {
    id: "logo-4",
    description: "Spheraura",
    image: "/images/logos/spheraura.png",
    className: "h-10 w-auto",
  },
];

const translations = {
  en: {
    heading: "Trusted by these companies",
  },
  de: {
    heading: "Vertraut von diesen Unternehmen",
  },
};

const Logos3 = ({
  logos = defaultLogos,
  language = "de",
}: Logos3Props) => {
  const t = translations[language];
  
  // Duplicate logos to ensure continuous scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-xl font-bold text-pretty lg:text-2xl text-foreground">
          {t.heading}
        </h2>
      </div>
      <div className="pt-6">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {duplicatedLogos.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} object-contain dark:brightness-0 dark:invert`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>
      </div>
    </section>
  );
};

export { Logos3 };
