import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Translation resources
const resources = {
  en: {
    translation: {
      "hero.greeting": "Hi, I'm {{name}} 👋",
      "hero.description": "I'm a passionate developer who loves building beautiful and functional web applications.",
      "about.title": "About",
      "about.content":
        "At the end of 2022, I got introduced to AI and building beautiful websites using different tools. In the past, I ran a successful content creation business where I had my own social media pages and shot content for companies. I also had the pleasure of participating in a couple of different hackathons.",
      "projects.title": "My Projects",
      "projects.subtitle": "Check out my latest work",
      "projects.description":
        "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
      "hackathons.title": "Hackathons",
      "hackathons.subtitle": "I like building things",
      "hackathons.description":
        "During the last few years, I participated in a couple of hackathons. People from around the world come together and try to build incredible things in 2-3 days. It was interesting to see what you can do when you have little time but endless possibilities brought to life by a group of motivated and passionate individuals.",
      "contact.title": "Contact",
      "contact.subtitle": "Get in Touch",
      "contact.description": "Want to chat? Just shoot me a dm",
      "navbar.home": "Home",
      "navbar.about": "About",
      "navbar.projects": "Projects",
      "navbar.hackathons": "Hackathons",
      "navbar.contact": "Contact",
    },
  },
  de: {
    translation: {
      "hero.greeting": "Hallo, ich bin {{name}} 👋",
      "hero.description":
        "Ich bin ein leidenschaftlicher Entwickler, der gerne schöne und funktionale Webanwendungen erstellt.",
      "about.title": "Über mich",
      "about.content":
        "Ende 2022 wurde ich in die KI und das Erstellen schöner Websites mit verschiedenen Tools eingeführt. In der Vergangenheit führte ich ein erfolgreiches Content-Creation-Unternehmen, wo ich meine eigenen Social-Media-Seiten hatte und Inhalte für Unternehmen drehte. Ich hatte auch das Vergnügen, an verschiedenen Hackathons teilzunehmen.",
      "projects.title": "Meine Projekte",
      "projects.subtitle": "Schauen Sie sich meine neuesten Arbeiten an",
      "projects.description":
        "Ich habe an verschiedenen Projekten gearbeitet, von einfachen Websites bis hin zu komplexen Webanwendungen. Hier sind einige meiner Favoriten.",
      "hackathons.title": "Hackathons",
      "hackathons.subtitle": "Ich baue gerne Dinge",
      "hackathons.description":
        "In den letzten Jahren habe ich an verschiedenen Hackathons teilgenommen. Menschen aus der ganzen Welt kommen zusammen und versuchen, unglaubliche Dinge in 2-3 Tagen zu bauen. Es war interessant zu sehen, was man schaffen kann, wenn man wenig Zeit, aber endlose Möglichkeiten hat.",
      "contact.title": "Kontakt",
      "contact.subtitle": "Kontakt aufnehmen",
      "contact.description": "Möchten Sie chatten? Schicken Sie mir einfach eine DM",
      "navbar.home": "Startseite",
      "navbar.about": "Über mich",
      "navbar.projects": "Projekte",
      "navbar.hackathons": "Hackathons",
      "navbar.contact": "Kontakt",
    },
  },
  fr: {
    translation: {
      "hero.greeting": "Salut, je suis {{name}} 👋",
      "hero.description": "Je suis un développeur passionné qui aime créer de belles applications web fonctionnelles.",
      "about.title": "À propos",
      "about.content":
        "Fin 2022, j'ai été initié à l'IA et à la création de beaux sites web avec différents outils. Dans le passé, j'ai dirigé une entreprise de création de contenu prospère où j'avais mes propres pages de médias sociaux et tournais du contenu pour des entreprises. J'ai aussi eu le plaisir de participer à plusieurs hackathons.",
      "projects.title": "Mes Projets",
      "projects.subtitle": "Découvrez mes derniers travaux",
      "projects.description":
        "J'ai travaillé sur une variété de projets, des sites web simples aux applications web complexes. Voici quelques-uns de mes favoris.",
      "hackathons.title": "Hackathons",
      "hackathons.subtitle": "J'aime construire des choses",
      "hackathons.description":
        "Au cours des dernières années, j'ai participé à plusieurs hackathons. Des gens du monde entier se réunissent et essaient de construire des choses incroyables en 2-3 jours. C'était intéressant de voir ce qu'on peut faire quand on a peu de temps mais des possibilités infinies.",
      "contact.title": "Contact",
      "contact.subtitle": "Entrer en contact",
      "contact.description": "Envie de discuter ? Envoyez-moi simplement un message",
      "navbar.home": "Accueil",
      "navbar.about": "À propos",
      "navbar.projects": "Projets",
      "navbar.hackathons": "Hackathons",
      "navbar.contact": "Contact",
    },
  },
  sr: {
    translation: {
      "hero.greeting": "Zdravo, ja sam {{name}} 👋",
      "hero.description": "Ja sam strastveni programer koji voli da pravi lepe i funkcionalne web aplikacije.",
      "about.title": "O meni",
      "about.content":
        "Krajem 2022. godine, upoznao sam se sa AI i pravljenjem lepih web sajtova koristeći različite alate. U prošlosti sam vodio uspešan biznis kreiranja sadržaja gde sam imao svoje stranice na društvenim mrežama i snimao sadržaj za kompanije. Takođe sam imao zadovoljstvo da učestvujem u nekoliko različitih hakatona.",
      "projects.title": "Moji Projekti",
      "projects.subtitle": "Pogledajte moj najnoviji rad",
      "projects.description":
        "Radio sam na različitim projektima, od jednostavnih web sajtova do složenih web aplikacija. Evo nekoliko mojih favorita.",
      "hackathons.title": "Hakatoni",
      "hackathons.subtitle": "Volim da pravim stvari",
      "hackathons.description":
        "Tokom poslednjih nekoliko godina, učestvovao sam u nekoliko hakatona. Ljudi iz celog sveta se okupljaju i pokušavaju da naprave neverovatne stvari za 2-3 dana. Bilo je zanimljivo videti šta možete da uradite kada imate malo vremena ali beskrajne mogućnosti.",
      "contact.title": "Kontakt",
      "contact.subtitle": "Stupite u kontakt",
      "contact.description": "Želite da ćaskamo? Samo mi pošaljite poruku",
      "navbar.home": "Početna",
      "navbar.about": "O meni",
      "navbar.projects": "Projekti",
      "navbar.hackathons": "Hakatoni",
      "navbar.contact": "Kontakt",
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
  react: {
    useSuspense: false,
  },
})

export default i18n
