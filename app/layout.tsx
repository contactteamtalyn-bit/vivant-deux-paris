import type { Metadata } from 'next'
import { Abril_Fatface, DM_Sans } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { DemoModalProvider } from '@/components/DemoModal'
import { Navigation } from '@/components/Navigation'

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
  display: 'swap',
})
const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivant 2 · Bistronomie & vins nature — Paris 10e',
  description:
    'Vivant 2, restaurant du groupe Savoir Vivre. Good food, wines full of life, a you-might-start-singing-at-the-end soundtrack. 43 rue des Petites Écuries, Paris 10e.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${abril.variable} ${dm.variable}`}>
      <body className="font-dm">
        <DemoBanner />
        <DemoModalProvider>
          <Navigation />
          <main>{children}</main>
        </DemoModalProvider>
      </body>
    </html>
  )
}
