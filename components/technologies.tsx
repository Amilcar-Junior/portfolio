'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TECHNOLOGIES } from '@/lib/constants'
import { useSettings } from '@/contexts/settings-context'
import { TRANSLATIONS } from '@/lib/constants'
import { SectionWrapper } from './section-wrapper'

export function Technologies() {
  const { language, isDark } = useSettings()
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('skills');
      if (container) {
        setContainerSize({
          width: container.offsetWidth,
          height: container.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomPosition = (dimension: number) => {
    return Math.random() * dimension;
  };

  return (
    <section 
      className={`h-screen relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`} 
      id="skills"
    >
      <div className={`absolute inset-0 bg-gradient-radial ${isDark ? 'from-purple-900/20 to-transparent' : 'from-purple-200/30 to-transparent'} opacity-30`} />
      
      <SectionWrapper className="h-full flex flex-col justify-center items-center">
        <h2 className={`text-5xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}>
          {TRANSLATIONS[language].skills}
        </h2>
        
        <div className="relative w-full h-full">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`tech-tag absolute px-4 py-2 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm rounded-full 
                ${isDark ? 'text-white' : 'text-gray-900'} 
                border ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg flex items-center gap-2 
                ${isDark ? 'hover:bg-gray-800/80' : 'hover:bg-gray-100/80'}
                transition-colors duration-200`}
              initial={{
                opacity: 1,
                scale: 1,
                x: getRandomPosition(containerSize.width),
                y: getRandomPosition(containerSize.height),
              }}
              animate={{
                x: [
                  getRandomPosition(containerSize.width),
                  getRandomPosition(containerSize.width),
                  getRandomPosition(containerSize.width),
                  getRandomPosition(containerSize.width),
                ],
                y: [
                  getRandomPosition(containerSize.height),
                  getRandomPosition(containerSize.height),
                  getRandomPosition(containerSize.height),
                  getRandomPosition(containerSize.height),
                ],
              }}
              transition={{
                duration: 60 + index * 5, // Varying durations for more natural movement
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <tech.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

