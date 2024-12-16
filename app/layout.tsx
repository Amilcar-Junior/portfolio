import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SettingsProvider } from '@/contexts/settings-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amílcar Júnior - Software Engineer',
  description: 'Portfolio of Amílcar Júnior, a software engineer building the future of technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white`}>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}

