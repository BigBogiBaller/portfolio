"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Languages, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  return (
    <>
      {/* Language Tab */}
      <motion.div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm font-medium"
          aria-label="Open language selector"
        >
          <Languages className="w-4 h-4" />
          <span className="writing-mode-vertical-rl text-orientation-mixed">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
        </button>
      </motion.div>

      {/* Language Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Select Language
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close language selector"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Language Options */}
              <div className="flex-1 p-6">
                <div className="space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg transition-colors text-left ${
                        i18n.language === language.code ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                      {i18n.language === language.code && (
                        <motion.div className="ml-auto w-2 h-2 bg-current rounded-full" layoutId="activeLanguage" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
