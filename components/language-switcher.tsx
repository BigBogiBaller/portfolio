"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Languages, X } from "lucide-react"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      {/* Language Tab */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-12 w-12 rounded-l-lg rounded-r-none shadow-lg transition-all duration-300",
          "bg-background border border-r-0 hover:bg-accent",
          isOpen && "rounded-r-none",
        )}
        variant="outline"
        size="icon"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Languages className="h-4 w-4" />}
      </Button>

      {/* Language Panel */}
      {isOpen && (
        <Card className="absolute right-12 top-0 w-48 shadow-xl animate-in slide-in-from-right-2 duration-300">
          <CardContent className="p-2">
            <div className="space-y-1">
              {languages.map((language) => (
                <Button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  variant={i18n.language === language.code ? "default" : "ghost"}
                  className="w-full justify-start gap-3 h-10"
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
