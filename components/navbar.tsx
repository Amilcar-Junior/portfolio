'use client'

import { useState, useCallback } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSettings } from '@/contexts/settings-context'
import { NAV_ITEMS } from '@/lib/constants'
import Image from 'next/image'

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
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-black backdrop-blur-sm">
      <nav className="container mx-auto px-6 flex items-center justify-between h-16">
        <button 
          onClick={() => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMenuOpen(false);
          }} 
          className="flex items-center pl-4"
        >
          <Image
            src={isDark ? './img/logo_wite.png' : './img/logo_black.png'}
            alt="Amilcar Júnior Logo"
            width={100}
            height={100}
            className="mr-2"
          />
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-8">
          {NAV_ITEMS[language].map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors mx-2"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('./docs/curriculo.pdf', '_blank')}
            title={language === 'en' ? 'Download CV' : 'Baixar Currículo'}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Download className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {language.toUpperCase()}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 backdrop-blur-sm">
          <div className="container py-4">
            {NAV_ITEMS[language].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors w-full text-left"
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

