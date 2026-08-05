import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cardo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import MetaPixel from '@/components/MetaPixel'
import ConsentBanner from '@/components/ConsentBanner'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
  display: 'swap',
})

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Construindo — Gestão de Obras na Palma da Mão',
  description:
    'Do canteiro ao escritório — cronograma, orçamento, equipes e documentos em um único app.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${cardo.variable}`}>
      <body>{children}<Analytics /><MetaPixel /><ConsentBanner /></body>
    </html>
  )
}
