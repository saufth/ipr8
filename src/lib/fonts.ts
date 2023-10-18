import { IBM_Plex_Mono as IBMPlexMono } from 'next/font/google'

export const fontPrimary = IBMPlexMono({
  weight: ['100', '200', '300', '400', '600', '600', '700'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap'
})
