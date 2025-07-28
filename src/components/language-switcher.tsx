"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Languages, X } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <>
      {/* Language Tab */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-l-lg rounded-r-none bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-6 shadow-lg"
          size="sm"
        >
          <Languages className="h-4 w-4" />
        </Button>
      </div>

      {/* Language Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />

          {/* Panel */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-background border border-border rounded-l-lg shadow-xl p-4 min-w-[200px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">Select Language</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              {languages.map((language) => (
                <Button
                  key={language.code}
                  variant={i18n.language === language.code ? "default" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => changeLanguage(language.code)}
                >
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
