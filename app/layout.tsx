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
    // Основной фавикон — logo_homus (app/favicon.ico подключается автоматически).
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
        {/* Применяем сохранённый режим контраста до первой отрисовки — без мигания */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var p=sessionStorage.getItem('visionPreference');if(p==='partial'){document.documentElement.classList.add('high-contrast','large-font');}}catch(e){}",
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}