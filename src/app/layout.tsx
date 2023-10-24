import ThemeProvider from '@/components/layouts/ThemeProvider'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'
import { type LayoutProps } from '@/types'
import { fontPrimary } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.description}`,
    template: `${siteConfig.name} – %s`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.description
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  generator: 'Next.js 13',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
}

export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={cn(fontPrimary.variable, 'bg-muted font-primary min-h-screen antialiased !scroll-smooth')}>
        <ThemeProvider attribute='class' defaultTheme='dark' forcedTheme='dark'>
          <div className='z-10'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
