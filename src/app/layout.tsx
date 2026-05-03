import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Kampsportstadion — DIF Kampsportsförening på Stockholm Stadion',
  description:
    'Kampsportstadion på Stockholm Stadion. Thaiboxning, BJJ, MMA, kampsportsfys och barnträning för alla nivåer. En ideell idrottsförening i Djurgårdens IF.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={inter.variable}>
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
