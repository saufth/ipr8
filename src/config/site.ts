import { type MainNavItem } from '@/types'

export const domain = 'ipr8.com'

export const siteConfig = {
  name: 'IPR8',
  description: 'Inmobiliaria. Desarrolladora. Constructora. Mantenimiento.',
  url: `https://${domain}`,
  author: {
    name: 'saufth',
    url: 'https://github.com/saufth'
  },
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    {
      title: 'Inmobiliaria',
      href: '/inmobiliaria'
    },
    {
      title: 'Desarrolladora',
      href: '/desarrolladora'
    },
    {
      title: 'Constructora',
      href: '/constructora'
    },
    {
      title: 'Mantenimiento',
      href: '/mantenimiento'
    },
    {
      title: 'Nosotros',
      href: '/nosotros'
    },
    {
      title: 'Contacto',
      href: '/contacto'
    }
  ] satisfies MainNavItem[]
}
