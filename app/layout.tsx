import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cardo } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
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

const bogue = localFont({
  src: [
    { path: '../public/fonts/bogue-regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/bogue-medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/bogue-semibold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-bogue',
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
    <html lang="pt-BR" className={`${jakarta.variable} ${bogue.variable} ${cardo.variable}`}>
      <body>{children}<Analytics /></body>
    </html>
  )
}
