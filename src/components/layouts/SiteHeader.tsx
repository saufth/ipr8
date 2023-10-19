'use client'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import React from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type TargetAndTransition,
  type Variants
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import useMediaQuery from '@/hooks/useMediaQuery'
import ButtonMenu from '@/components/layouts/MenuButton'
import { OC_STATE, useGlobalStore } from '@/lib/store'

const transition: TargetAndTransition['transition'] = {
  type: 'spring',
  duration: 0.1
}

const navbarVariants: Variants = {
  open: {
    height: '100vh',
    paddingTop: '16px'
  },
  closed: {
    paddingTop: 0
  }
}

const navbarVariantsDesktop: Variants = {
  open: {
    ...navbarVariants.open,
    transition
  },
  closed: {
    height: 92,
    ...navbarVariants.closed,
    transition
  }
}

const navbarVariantsMobile: Variants = {
  open: {
    ...navbarVariants.open,
    transition
  },
  closed: {
    height: 64,
    ...navbarVariants.closed,
    transition
  }
}

const devicesVariantsConfig: Record<string, Variants> = {
  mobile: navbarVariantsMobile,
  desktop: navbarVariantsDesktop
}

const navVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
}

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  const [
    menuState,
    setMenuState,
    setButtonMenuState
  ] = useGlobalStore(
    (state) => [
      state.menuState,
      state.setMenuState,
      state.setButtonMenuState
    ]
  )

  const closeMenu = () => {
    setMenuState('closed')
    setButtonMenuState('closed')
  }

  const isMobile = useMediaQuery('(max-width: 768px)')
  const getDeviceSize = () => isMobile ? 'mobile' : 'desktop'
  const navbarVariants = devicesVariantsConfig[getDeviceSize()]

  return (
    <motion.header
      className={cn(
        'w-full mx-auto fixed z-40 top-0 left-0 right-0 duration-500',
        menuState === OC_STATE.open && 'bg-secondary/90 backdrop-filter backdrop-blur-lg'
      )}
      variants={navbarVariants}
      animate={menuState}
      initial={false}
    >
      <nav
        className='container mx-auto h-full relative px pt-4'
        aria-label='Emah Directory'
      >
        <div
          className={cn(
            'w-full h-16 md:h-[92px] flex gap-x-2 justify-between items-center border bg-[#151515]/80 rounded-3xl backdrop-filter backdrop-blur-lg transition-all duration-500 relative z-10',
            isOnTop && menuState === OC_STATE.closed ? 'border-transparent' : 'border-[#27272a] px'
          )}
        >
          <div
            className={cn(
              'transition-all duration-500',
              isOnTop && menuState === OC_STATE.closed ? 'h-16 sm:h-20 lg:h-24' : 'h-10 sm:h-12 lg:h-14'
            )}
          >
            <Link
              href='/'
              onClick={closeMenu}
              className='hover:opacity-90'
            >
              <Icons.Logomark className='w-auto h-full fill-white' />
            </Link>
          </div>
          <div className='pr-2 h-full flex items-center lg:hidden'>
            <ButtonMenu />
          </div>
          <ul className='hidden lg:flex items-center gap-x-4 relative first:[&>li]:hidden'>
            {siteConfig.mainNav.map((navItem, key) => (
              <li key={key}>
                <Link
                  href={navItem.href}
                  onClick={closeMenu}
                  className='font-medium text-sm md:text-base lg:text-lg text-white hover:text-white/80 transition-all'
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          className='w-full h-full absolute top-0 left-0'
          variants={navVariants}
          animate={menuState}
          initial={false}
        >
          <div className='h-full overflow-y-auto pt-24 sm:pt-32'>
            <div className='w-11/12 py-6 md:py-9 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-y-8 md:gap-y-10'>
              <ul className='space-y-8 md:space-y-10 text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl w-fit mx-auto font-bold leading-none hover:[&>li]:text-primary first:[&>li]:hidden'>
                {siteConfig.mainNav.map((option, key) => (
                  <li key={key}>
                    <Link
                      href={option.href}
                      onClick={closeMenu}
                    >
                      {option.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
