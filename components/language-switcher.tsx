"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Languages } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (languageCode: string) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(languageCode)
      setIsOpen(false)
    }
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n?.language) || languages[0]

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200"
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">Change language</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle>Select Language</SheetTitle>
            <SheetDescription>Choose your preferred language for the interface.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-3 py-6">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant={i18n?.language === language.code ? "default" : "outline"}
                className="justify-start h-12 text-left"
                onClick={() => changeLanguage(language.code)}
              >
                <span className="text-xl mr-3">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
