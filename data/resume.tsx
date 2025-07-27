import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Bogi",
  initials: "BL",
  url: "https://bogi-portfolio.vercel.app",
  location: "Vienna, Austria",
  locationLink:
    "https://www.google.com/maps/place/Wien,+%C3%96sterreich/@48.2201153,16.2148352,11z/data=!3m1!4b1!4m6!3m5!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!8m2!3d48.2080696!4d16.3713095!16zL20vMGZocDk?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Web Developer and Aspiring Entrepeneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I got introduced to AI and building beautiful websites using different tools. In the past, I ran a successful content creation business where I had my own social media pages and shot content for companies. I also had the pleasure of participating in a couple of different hackathons. Furthermore i created some beautiful websites for different brands and agencies.",
  avatarUrl: "/profile-updated.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BigBogiBaller",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bogi_lekic",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@BGD-Media",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [],
  education: [],
  projects: [
    {
      title: "Vision Agency",
      href: "https://www.vision-agency.com/",
      dates: "June 2025",
      active: true,
      description:
        "With this design, I decided to build a modern looking agency page which allows potential leads to schedule a call and learn more about the agency and its services.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://www.vision-agency.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dtwg2gvyn/video/upload/therealvision_wpatsw.mp4",
    },
    {
      title: "Genesis Motorcycles",
      href: "https://preview--genesismotors.lovable.app/",
      dates: "July 2025",
      active: true,
      description:
        "Designed, developed completely with the help of AI showcasing what is possible with the technology nowadays.",
      technologies: ["Next.js", "React", "AI", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://preview--genesismotors.lovable.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dtwg2gvyn/video/upload/genesis_twe1rv.mp4",
    },
    {
      title: "bolt.new hackathon",
      href: "https://x.com/bogi_lekic/status/1903172009061720558",
      dates: "March 2025",
      active: true,
      description:
        "I took part in the bolt.new hackathon trying to build a site that lets participants sign up to the start of the hackathon",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://x.com/bogi_lekic/status/1903172009061720558",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/BigBogiBaller/github-bolt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dtwg2gvyn/video/upload/clip2_pquujh.mp4",
    },
    {
      title: "Hairsalon Website",
      href: "https://quiet-yeot-cbb426.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "This was one of my first projects that I did when I discovered the world of web design and web development.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://quiet-yeot-cbb426.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QThXtBW1AYXweS5SfyaiE2vgiEtP7g.png",
      video: "",
    },
    {
      title: "Vibe Coding Jam",
      href: "https://vibejambolt.netlify.app/",
      dates: "March 23rd - 25th, 2025",
      active: true,
      description:
        "I entered the competition in order to create a fun and interacting website for the 2025 Vibe Coding Jam organised by Peter Lievels.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://vibejambolt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyI3pJ24h4ScAcusUoXJ9FWeabYh91.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Bolt Hackathon",
      dates: "March 19 - March 21,2025",
      location: "Online",
      description: "Created a website for the Bolt Hackathon.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OFBRDYT8rTvhjIOCbaGLXo9FmUFtmh.png",
      links: [],
    },
    {
      title: "Lovable Competition",
      dates: "April 25 - April 28, 2025",
      location: "Online",
      description:
        "The company Lovable created an competition where the goal was to create a version 2.0 of any product and the winner would get 8000$.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AoTobKfDacPYhdzXaXYraD1If63x1b.png",
      links: [],
    },
    {
      title: "Vibe Coding Jam",
      dates: "March 23rd - 25th, 2025",
      location: "San Francisco, California",
      description:
        "I entered the competition in order to create a fun and interacting website for the 2025 Vibe Coding Jam organised by Peter Lievels.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4YUEsWC5jAPJi2TTa4tBFXEWWDdx9R.png",
      links: [],
    },
  ],
} as const
