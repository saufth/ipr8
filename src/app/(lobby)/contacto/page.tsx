import ContactForm from '@/components/forms/ContactForm'

export default function Contact () {
  return (
    <>
      <section className='container px pt-32 space-y-8 md:space-y-12 pb-4'>
        <div className='relative overflow-hidden'>
          <div className='bg-secondary relative z-20 py grid space-y-12 place-content-center rounded-3xl'>
            <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
              <h2 className='text-h2 pb-4 text-primary'>
                Ponte en contacto con nosotros
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
