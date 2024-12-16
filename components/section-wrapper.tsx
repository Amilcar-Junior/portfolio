'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

export function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

