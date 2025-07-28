import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        work: "Work",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        hackathons: "Hackathons",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        name: "Bogi Lekic",
        title: "Full Stack Developer",
        description:
          "At the end of 2022, I got introduced to AI and building beautiful websites using different tools. In the past, I ran a successful content creation business where I had my own social media pages and shot content for companies. I also had the pleasure of participating in a couple of different hackathons.",
        location: "Based in Toronto, Canada",
        available: "Available for new opportunities",
      },
      sections: {
        about: "About",
        work: "Work Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        hackathons: "Hackathons",
        contact: "Get in Touch",
      },
      contact: {
        title: "Get in Touch",
        description:
          "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
      },
    },
  },
  de: {
    translation: {
      nav: {
        about: "Über mich",
        work: "Arbeit",
        education: "Bildung",
        skills: "Fähigkeiten",
        projects: "Projekte",
        hackathons: "Hackathons",
        contact: "Kontakt",
      },
      hero: {
        greeting: "Hallo, ich bin",
        name: "Bogi Lekic",
        title: "Full Stack Entwickler",
        description:
          "Ende 2022 wurde ich in die KI und das Erstellen schöner Websites mit verschiedenen Tools eingeführt. In der Vergangenheit führte ich ein erfolgreiches Content-Creation-Geschäft, wo ich meine eigenen Social-Media-Seiten hatte und Inhalte für Unternehmen drehte. Ich hatte auch das Vergnügen, an verschiedenen Hackathons teilzunehmen.",
        location: "Ansässig in Toronto, Kanada",
        available: "Verfügbar für neue Möglichkeiten",
      },
      sections: {
        about: "Über mich",
        work: "Berufserfahrung",
        education: "Bildung",
        skills: "Fähigkeiten",
        projects: "Projekte",
        hackathons: "Hackathons",
        contact: "Kontakt aufnehmen",
      },
      contact: {
        title: "Kontakt aufnehmen",
        description:
          "Möchten Sie chatten? Schicken Sie mir einfach eine DM mit einer direkten Frage auf Twitter und ich antworte, wann immer ich kann. Ich werde alle Werbung ignorieren.",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        work: "Travail",
        education: "Éducation",
        skills: "Compétences",
        projects: "Projets",
        hackathons: "Hackathons",
        contact: "Contact",
      },
      hero: {
        greeting: "Salut, je suis",
        name: "Bogi Lekic",
        title: "Développeur Full Stack",
        description:
          "À la fin de 2022, j'ai été initié à l'IA et à la création de beaux sites web en utilisant différents outils. Dans le passé, j'ai dirigé une entreprise de création de contenu prospère où j'avais mes propres pages de médias sociaux et je tournais du contenu pour des entreprises. J'ai aussi eu le plaisir de participer à quelques hackathons différents.",
        location: "Basé à Toronto, Canada",
        available: "Disponible pour de nouvelles opportunités",
      },
      sections: {
        about: "À propos",
        work: "Expérience professionnelle",
        education: "Éducation",
        skills: "Compétences",
        projects: "Projets",
        hackathons: "Hackathons",
        contact: "Entrer en contact",
      },
      contact: {
        title: "Entrer en contact",
        description:
          "Vous voulez discuter ? Envoyez-moi simplement un DM avec une question directe sur Twitter et je répondrai quand je le pourrai. J'ignorerai toute sollicitation.",
      },
    },
  },
  sr: {
    translation: {
      nav: {
        about: "O meni",
        work: "Posao",
        education: "Obrazovanje",
        skills: "Veštine",
        projects: "Projekti",
        hackathons: "Hakatoni",
        contact: "Kontakt",
      },
      hero: {
        greeting: "Zdravo, ja sam",
        name: "Bogi Lekić",
        title: "Full Stack Developer",
        description:
          "Krajem 2022. godine, upoznao sam se sa AI i pravljenjem lepih veb sajtova koristeći različite alate. U prošlosti sam vodio uspešan biznis kreiranja sadržaja gde sam imao svoje stranice na društvenim mrežama i snimao sadržaj za kompanije. Takođe sam imao zadovoljstvo da učestvujem u nekoliko različitih hakatona.",
        location: "Baziran u Torontu, Kanada",
        available: "Dostupan za nove prilike",
      },
      sections: {
        about: "O meni",
        work: "Radno iskustvo",
        education: "Obrazovanje",
        skills: "Veštine",
        projects: "Projekti",
        hackathons: "Hakatoni",
        contact: "Stupiti u kontakt",
      },
      contact: {
        title: "Stupiti u kontakt",
        description:
          "Želite da ćaskamo? Samo mi pošaljite DM sa direktnim pitanjem na Twitteru i odgovoriću kad god mogu. Ignoriću sve zahteve za saradnju.",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
