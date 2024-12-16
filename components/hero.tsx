'use client'

import { TypeAnimation } from 'react-type-animation'
import { useSettings } from '@/contexts/settings-context'
import { TRANSLATIONS } from '@/lib/constants'
import { SectionWrapper } from './section-wrapper'

const waveAnimation = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`;

export function Hero() {
  const { language, isDark } = useSettings()
  
  const typingSequence = TRANSLATIONS[language].typing.flatMap(text => [
    text,
    2000
  ])

  return (
    <section className={`flex flex-col items-center justify-center h-screen
      ${isDark 
        ? 'bg-gradient-to-b from-[#4C1D95] to-black'
        : 'bg-gradient-to-b from-[#4C1D95] to-white'
      }`}
    >
      <SectionWrapper>
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="flex items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white">
            <span 
              role="img" 
              aria-label="wave" 
              className="text-3xl md:text-4xl inline-block animate-wave"
              style={{
                animation: 'wave 2.5s infinite',
                transformOrigin: '70% 70%',
              }}
            >
              👋
            </span>
            <span>{TRANSLATIONS[language].greeting}</span>
          </h1>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight text-white">
            {TRANSLATIONS[language].role}
          </h2>
          
          <div className="h-[1.5em] text-xl md:text-2xl lg:text-3xl font-medium text-white">
            <TypeAnimation
              sequence={typingSequence}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>
      </SectionWrapper>
      <style jsx>{`
        ${waveAnimation}
      `}</style>
    </section>
  )
}

