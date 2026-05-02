import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFab from '@/components/shared/WhatsAppFab'

export const metadata: Metadata = {
  title: 'DoMyPooja — Book Verified Pandits for Sacred Ceremonies',
  description: 'Book verified Pandits and Purohits for Puja, Homa & rituals across 30+ Indian cities. Complete samagri included. 85,000+ pujas performed.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  )
}
