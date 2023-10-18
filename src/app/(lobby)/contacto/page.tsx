import ContactForm from '@/components/forms/ContactForm'
import { Balancer } from 'react-wrap-balancer'

export default function Contact () {
  return (
    <>
      <section className='max-w-4xl mx-auto py-8 md:py-12 lg:pb-24 px-4 sm:px-6 space-y-8 md:space-y-12'>
        <h2>
          <Balancer>
            Ponte en contacto con nosostros
          </Balancer>
        </h2>
        <ContactForm />
      </section>
    </>
  )
}
