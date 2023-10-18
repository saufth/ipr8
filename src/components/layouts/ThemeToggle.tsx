'use client'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import { useTheme } from 'next-themes'

export function ThemeToggle () {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className='relative rounded-2xl bg-[#f4f4f5] hover:bg-[#ebebeb]/80'
      size='icon'
      variant='ghost'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.MoonStar
        className='h-4 sm:h-5 w-4 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-1 stroke-[#27272a]'
        aria-hidden='true'
      />
      <Icons.Sun
        className='absolute h-4 sm:h-5 w-4 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-1 stroke-[#27272a]'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
