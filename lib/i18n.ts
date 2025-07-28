import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm Bogi 👋",
        description:
          "I'm a passionate developer and content creator based in Toronto. I love building beautiful websites and exploring the latest in AI technology.",
      },
      about: {
        title: "About",
        content:
          "At the end of 2022, I got introduced to AI and building beautiful websites using different tools. In the past, I ran a successful content creation business where I had my own social media pages and shot content for companies. I also had the pleasure of participating in a couple of different hackathons.",
      },
      projects: {
        title: "My Projects",
        subtitle: "Check out my latest work",
      },
      hackathons: {
        title: "Hackathons",
        subtitle: "I like building things",
        description:
          "During the last few years, I participated in a couple of hackathons. People from around the world come together and try to build incredible things in 2-3 days. It was interesting to see what you can do when you have little time but endless possibilities brought to life by a group of motivated and passionate individuals.",
      },
      contact: {
        title: "Contact",
        subtitle: "Get in Touch",
      },
    },
  },
  de: {
    translation: {
      hero: {
        greeting: "Hallo, ich bin Bogi 👋",
        description:
          "Ich bin ein leidenschaftlicher Entwickler und Content-Creator aus Toronto. Ich liebe es, schöne Websites zu erstellen und die neuesten AI-Technologien zu erkunden.",
      },
      about: {
        title: "Über mich",
        content:
          "Ende 2022 wurde ich in die KI und das Erstellen schöner Websites mit verschiedenen Tools eingeführt. In der Vergangenheit führte ich ein erfolgreiches Content-Creation-Unternehmen, wo ich meine eigenen Social-Media-Seiten hatte und Inhalte für Unternehmen drehte. Ich hatte auch das Vergnügen, an verschiedenen Hackathons teilzunehmen.",
      },
      projects: {
        title: "Meine Projekte",
        subtitle: "Schauen Sie sich meine neuesten Arbeiten an",
      },
      hackathons: {
        title: "Hackathons",
        subtitle: "Ich baue gerne Dinge",
        description:
          "In den letzten Jahren habe ich an einigen Hackathons teilgenommen. Menschen aus der ganzen Welt kommen zusammen und versuchen, in 2-3 Tagen unglaubliche Dinge zu bauen. Es war interessant zu sehen, was man schaffen kann, wenn man wenig Zeit, aber endlose Möglichkeiten hat, die von einer Gruppe motivierter und leidenschaftlicher Menschen zum Leben erweckt werden.",
      },
      contact: {
        title: "Kontakt",
        subtitle: "Kontakt aufnehmen",
      },
    },
  },
  fr: {
    translation: {
      hero: {
        greeting: "Salut, je suis Bogi 👋",
        description:
          "Je suis un développeur passionné et créateur de contenu basé à Toronto. J'adore créer de beaux sites web et explorer les dernières technologies d'IA.",
      },
      about: {
        title: "À propos",
        content:
          "À la fin de 2022, j'ai été initié à l'IA et à la création de beaux sites web en utilisant différents outils. Dans le passé, j'ai dirigé une entreprise de création de contenu prospère où j'avais mes propres pages de médias sociaux et je tournais du contenu pour des entreprises. J'ai aussi eu le plaisir de participer à quelques hackathons différents.",
      },
      projects: {
        title: "Mes Projets",
        subtitle: "Découvrez mes derniers travaux",
      },
      hackathons: {
        title: "Hackathons",
        subtitle: "J'aime construire des choses",
        description:
          "Au cours des dernières années, j'ai participé à quelques hackathons. Des gens du monde entier se réunissent et essaient de construire des choses incroyables en 2-3 jours. Il était intéressant de voir ce qu'on peut faire quand on a peu de temps mais des possibilités infinies rendues possibles par un groupe d'individus motivés et passionnés.",
      },
      contact: {
        title: "Contact",
        subtitle: "Entrer en contact",
      },
    },
  },
  sr: {
    translation: {
      hero: {
        greeting: "Zdravo, ja sam Bogi 👋",
        description:
          "Ja sam strastveni programer i kreator sadržaja iz Toronta. Volim da pravim lepe veb sajtove i istražujem najnovije AI tehnologije.",
      },
      about: {
        title: "O meni",
        content:
          "Krajem 2022. godine, upoznao sam se sa AI i pravljenjem lepih veb sajtova koristeći različite alate. U prošlosti sam vodio uspešan biznis kreiranja sadržaja gde sam imao svoje stranice na društvenim mrežama i snimao sadržaj za kompanije. Takođe sam imao zadovoljstvo da učestvujem u nekoliko različitih hakatona.",
      },
      projects: {
        title: "Moji Projekti",
        subtitle: "Pogledajte moje najnovije radove",
      },
      hackathons: {
        title: "Hakatoni",
        subtitle: "Volim da pravim stvari",
        description:
          "Tokom poslednjih nekoliko godina, učestvovao sam u nekoliko hakatona. Ljudi iz celog sveta se okupljaju i pokušavaju da naprave neverovatne stvari za 2-3 dana. Bilo je zanimljivo videti šta možete da uradite kada imate malo vremena, ali beskrajne mogućnosti koje oživljavaju grupa motivisanih i strastvenih pojedinaca.",
      },
      contact: {
        title: "Kontakt",
        subtitle: "Stupiti u kontakt",
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
