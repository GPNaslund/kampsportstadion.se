import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileNavbar from '../components/navbar/mobile_navbar'
import Footer from '@/components/footer/footer'

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
        <div className="h-full w-full flex flex-col">
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}
