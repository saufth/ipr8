import { Icons } from '@/components/Icons'
import { siteConfig } from '@/config/site'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'

export default function SiteFooter () {
  return (
    <footer className='container px pb-4'>
      <div className='border border-muted-foreground rounded-3xl py-lg space-y-6 sm:space-y-8'>
        <div className='flex flex-col items-center gap-y-6 sm:gap-y-8'>
          <Icons.Logotype className='w-20 sm:w-24 h-auto fill-foreground' />
          <nav>
            <ul className='flex sm:flex-row flex-col items-center gap-y-1 gap-x-4'>
              {siteConfig.mainNav.map((navItem, key) => (
                <li key={key}>
                  <Link
                    className='text-sm sm:text-base'
                    href={navItem.href}
                    color='foreground'
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='text-sm sm:text-base px-6 text-center'>
          <p>
            <Balancer>
              {`Copyright ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`}
            </Balancer>
          </p>
        </div>
      </div>
    </footer>
  )
}
