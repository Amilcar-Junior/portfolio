'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'
import { Companies } from '@/components/companies'
import { Footer } from '@/components/footer'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
      <Navbar />
      <main className={`${isMobile ? '' : 'snap-y snap-mandatory'} h-screen overflow-y-scroll`}>
        <section className={`${isMobile ? '' : 'snap-start'} h-screen`}>
          <Hero />
        </section>
        <section className={`${isMobile ? '' : 'snap-start'} h-screen`}>
          <Technologies />
        </section>
        <section className={`${isMobile ? '' : 'snap-start'} h-screen`}>
          <Projects />
        </section>
        <section className={`${isMobile ? '' : 'snap-start'} h-screen`}>
          <Companies />
        </section>
        <section className={`${isMobile ? '' : 'snap-start'} h-screen`}>
          <Footer />
        </section>
      </main>
    </div>
  )
}

