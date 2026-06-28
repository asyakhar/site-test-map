import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Geist Mono — оставляем для моноширинного текста (код)
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

// Gilroy — только Bold как основной
const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})

// Sangha — только для акцентных заголовков
const sanghaKali = localFont({
  src: './fonts/SanghaKali-Regular.woff2',
  variable: '--font-sangha',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Доступная Якутия - Инклюзивный навигатор',
  description: 'Интерактивная карта медицинского и доступного туризма Республики Саха (Якутия)',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="ru" 
      className={`bg-background ${geistMono.variable} ${gilroy.variable} ${sanghaKali.variable}`}
    >
      <body className={`${gilroy.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}