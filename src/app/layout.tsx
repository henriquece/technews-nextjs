import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Header } from './components/Header'
import './globals.css'

const inter = Ubuntu({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Tech News'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
