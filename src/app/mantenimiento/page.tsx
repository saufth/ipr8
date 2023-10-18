import { Balancer } from 'react-wrap-balancer'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import Video from '@/components/Video'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

const realEstateServices = services[3]!

export default function Home () {
  return (
    <>
      <section className='overflow-hidden h-[125vh] relative z-10 pt-[90px] sm:pt-28 px'>
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
                  Pongamonos en contácto
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Icons.Logomark className='w-32 sm:w-44 h-auto absolute left-0 right-0 mx-auto bottom-[24%] fill-white z-20 opacity-80' />
        <div className='w-full h-2xl sm:h-[836px] lg:h-4xl absolute left-0 top-0 bg-gradient-to-b from-secondary via-secondary to-transparent z-10' />
        <div className='container absolute inset-0 -z-10 top-64 sm:top-96 lg:top-[430px] roundex-3xl px overflow-hidden'>
          <Video src='/video/hero.mp4' />
        </div>
      </section>
      {realEstateServices.subcategories.map((subcategory, key) => {
        return (
          <section key={key}>
            <div className='container py-4 px space-y-4'>
              <div className='relative overflow-hidden'>
                <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
                  <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                    <h2 className='text-h2 pb-4 text-white'>
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
                        <div className='absolute inset-0 py-sm px bg-secondary/40 flex items-end'>
                          <div className='space-y-4 lg:space-y-6 pt-24 md:pt-12'>
                            <h3 className='text-h2 text-white'>
                              {item.title}
                            </h3>
                            <p>
                              <Balancer className='text-p3 text-white'>
                                {item.description}
                              </Balancer>
                            </p>
                            <div>
                              <Button asChild size='lg'>
                                <Link href='/contacto'>
                                  Saber más
                                </Link>
                              </Button>
                            </div>
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
