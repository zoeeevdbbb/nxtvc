import type { Metadata } from 'next'
import { Press_Start_2P, Space_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-px',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-grot',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NXTVC — The next generation of venture capitalists',
  description:
    'A community for pre-partner venture capital investors across North America. Built by junior VCs, for junior VCs.',
  openGraph: {
    title: 'NXTVC — The next generation of venture capitalists',
    description:
      'A community for pre-partner venture capital investors across North America.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${spaceMono.variable} ${spaceGrotesk.variable}`}
    >
      <body data-scanlines="on" data-blink="on">
        {children}
      </body>
    </html>
  )
}
