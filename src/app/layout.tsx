import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileNavbar from '../components/navbar/mobile_navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kampsportstadion',
  description: 'Kampsport | Kampsportsfys | Personlig träning | Stockholm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
