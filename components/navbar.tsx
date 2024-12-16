'use client'

import { useState, useCallback } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSettings } from '@/contexts/settings-context'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const { language, setLanguage, isDark, toggleTheme } = useSettings()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container flex items-center justify-between h-16">
        <button onClick={() => scrollToSection('#home')} className="font-semibold text-xl ">
          Amilcar Júnior
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_ITEMS[language].map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('/docs/curriculo.pdf', '_blank')}
            title={language === 'en' ? 'Download CV' : 'Baixar Currículo'}
          >
            <Download className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          >
            {language.toUpperCase()}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container py-4">
            {NAV_ITEMS[language].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block py-2 text-sm font-medium hover:text-primary transition-colors w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

