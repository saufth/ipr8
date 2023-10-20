import localFont from 'next/font/local'

export const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/NormalidadCompact-Thin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/NormalidadCompact-Light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/NormalidadCompact-Regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/NormalidadCompact-Medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/NormalidadCompact-Bold.woff2',
      weight: '700'
    },
    {
      path: '../../public/fonts/NormalidadCompact-Black.woff2',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-primary'
})
