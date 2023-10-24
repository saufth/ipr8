import { Balancer } from 'react-wrap-balancer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Constructora – Industrial, Comercial y Residencial',
  description: 'Diversidad de proyectos a la medida de tus necesidades'
}

const realEstateServices = services[2]!

export default function ConstructoraPage () {
  return (
    <>
      <section className='overflow-hidden h-screen relative z-10 pt-[90px] sm:pt-28 px'>
        <div className='container sm:px flex relative z-20'>
          <div className='max-w-2xl lg:max-w-3xl h-fit space-y-2'>
            <h1 className='sr-only'>{siteConfig.description}</h1>
            <h1 className='text-h1 border-b w-fit border-white dark:border-white leading-none pb-4 text-transparent bg-clip-text bg-gradient-to-t from-[#dddddd] to-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-[#dddddd] dark:to-white'>
              {realEstateServices.title}
            </h1>
            <p>
              <Balancer className='text-p1 text-white'>
                {realEstateServices.description}
              </Balancer>
            </p>
            <div className='pt-3 md:pt-8'>
              <Button asChild size='lg'>
                <Link href='/contacto'>
                  Pongámonos en contacto
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full h-2xl sm:h-[836px] lg:h-4xl absolute left-0 top-0 bg-gradient-to-b from-secondary via-secondary to-transparent z-10' />
        <div className='container absolute inset-0 -z-10 top-64 sm:top-96 lg:top-[430px] px'>
          <div className='relative w-full h-full rounded-3xl overflow-hidden'>
            <div className='absolute -top-16 sm:-top-24 -left-[420px] lg:-left-64 2xl:left-0 w-7xl md:w-9xl'>
              <Image
                src='/images/category3-hero.webp'
                alt='Categoría Inmobiliaria'
                className='w-full h-auto relative'
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {realEstateServices.subcategories.map((subcategory, key) => {
        return (
          <section key={key}>
            <div className='container py-4 px space-y-4'>
              <div className='relative overflow-hidden'>
                <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
                  <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                    <h2 className='text-h2 pb-4 text-primary'>
                      {subcategory.title}
                    </h2>
                    <p>
                      <Balancer className='text-p2 text-white'>
                        {subcategory.description}
                      </Balancer>
                    </p>
                  </div>
                </div>
              </div>
              <div className='grid lg:grid-cols-2 gap-4'>
                {subcategory.items.map((item, key) => {
                  return (
                    <article className='space-y-12' key={key}>
                      <div className='group relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[3/3] xl:aspect-[3/2] w-full h-auto rounded-3xl overflow-hidden'>
                        {item.image && (
                          <div className='absolute inset-0 px-8 md:px-0'>
                            <Image
                              src={item.image}
                              alt={item.title}
                              className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                              sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                              fill
                              loading='lazy'
                            />
                          </div>
                        )}
                        <div className='absolute inset-0 py-sm px bg-gradient-to-t from-secondary vias-secondary/60 to-secondary/10 flex items-end'>
                          <div className='space-y-4 lg:space-y-6 pt-24 md:pt-12'>
                            <h3 className='text-h3 text-white'>
                              {item.title}
                            </h3>
                            <p>
                              <Balancer className='text-p3 text-white'>
                                {item.description}
                              </Balancer>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
