import SiteFooter from '@/components/layouts/SiteFooter'
import SiteHeader from '@/components/layouts/SiteHeader'
import React from 'react'

export default async function LobbyLayout ({ children }: React.PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
