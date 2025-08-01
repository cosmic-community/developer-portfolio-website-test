import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full-Stack Developer',
  description: 'Professional portfolio showcasing web development projects, skills, and experience. Specializing in modern web technologies and innovative solutions.',
  keywords: 'web developer, full-stack developer, portfolio, React, Next.js, TypeScript, JavaScript',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <CosmicBadge bucketSlug={bucketSlug} />
        </ThemeProvider>
      </body>
    </html>
  )
}