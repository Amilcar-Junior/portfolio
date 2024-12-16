'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/types'

interface SettingsContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isDark: boolean
  toggleTheme: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <SettingsContext.Provider value={{ language, setLanguage, isDark, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) throw new Error('useSettings must be used within SettingsProvider')
  return context
}

