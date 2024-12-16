'use client'

import { Instagram, Linkedin, Github, Mail } from 'lucide-react'
import { useSettings } from '@/contexts/settings-context'
import { TRANSLATIONS } from '@/lib/constants'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/mikamikaus/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amilcar-junior/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Amilcar-Junior', label: 'GitHub' },
  { icon: Mail, href: 'mailto:amilcarjunior2000@gmail.com', label: 'Email' }
]

export function Footer() {
  const { language, isDark } = useSettings()

  return (
    <footer className={`h-screen ${isDark 
  ? 'from-black to-[#4C1D95] bg-gradient-to-b'
  : 'from-white to-[#4C1D95] bg-gradient-to-b'
} text-white flex flex-col justify-center`}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <p className="text-xl mb-12">
          {TRANSLATIONS[language].footer}
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        
        <p className="text-sm text-white">
          Made by Amílcar Júnior
        </p>
      </div>
    </footer>
  )
}

