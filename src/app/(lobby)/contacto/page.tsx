import ContactForm from '@/components/forms/ContactForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Contáctanos – Innovar, construir, inspirar',
  description: 'Comprometidos con ofrecer soluciones integrales para construir un futuro mejor'
}

export default function ContactPage () {
  return (
    <>
      <section className='relative z-10'>
        <div className='container px py-24 md:pt-48 pb-4 relative overflow-hidden z-20'>
          <div className='py grid gap-y-8 sm:gap-y-12 place-content-center rounded-3xl'>
            <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
              <h2 className='text-h2 pb-4 text-primary'>
                Pongámonos en contacto
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className='w-full h-2xl sm:h-[836px] lg:h-4xl absolute left-0 top-0 bg-gradient-to-b from-secondary via-secondary to-transparent z-10' />
      </section>
    </>
  )
}
