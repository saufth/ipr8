import { AnimatedText } from '@/components/AnimatedText'
import { Button } from '@/components/ui/Button'
import Video from '@/components/Video'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import Link from 'next/link'
import { benefist } from '@/config/organization'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <section className='overflow-hidden h-[125vh] relative z-10 pt-[90px] sm:pt-28 px'>
        <div className='container sm:px flex relative z-20'>
          <div className='max-w-2xl lg:max-w-3xl h-fit space-y-2'>
            <AnimatedText
              texts={[
                'Inmobiliaria',
                'Desarrolladora',
                'Constructora',
                'Mantenimiento'
              ]}
              className='text-h1 border-b border-white dark:border-white leading-none pb-4 text-transparent bg-clip-text bg-gradient-to-t from-[#dddddd] to-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-[#dddddd] dark:to-white'
            />
            <p>
              <Balancer className='text-p1 text-white'>
                {siteConfig.description}
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
        <div className='container absolute inset-0 -z-10 top-64 sm:top-96 lg:top-[430px] roundex-3xl px overflow-hidden'>
          <Video src='/video/hero.mp4' />
        </div>
      </section>
      <section>
        <div className='container pt-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                <h2 className='text-h2 pb-4 text-primary'>
                  Nuestras soluciones
                </h2>
                <p>
                  <Balancer className='text-p2 text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis doloremque aut maiores accusamus velit fugit debitis aliquam autem placeat et ad, qui beatae corporis sunt alias id corrupti doloribus?
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            {services.map((item, key) => {
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
                        {item.slug && (
                          <div>
                            <Button asChild size='lg'>
                              <Link href={item.slug}>
                                Saber más
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className='container py-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                <h2 className='text-h2 pb-4 text-primary'>
                  Nuestros beneficios
                </h2>
                <p>
                  <Balancer className='text-p2 text-white'>
                    Nos apasiona transformar propiedades en activos exitosos. Con IPR8, no solo obtienes resultados excepcionales,
                    sino que también obtienes un socio de confianza que comparte tu visión de éxito en el mercado inmobiliari
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            {benefist.map((item, key) => {
              return (
                <article className='space-y-12' key={key}>
                  <div className='group relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[3/3] xl:aspect-[3/2] w-full h-auto rounded-3xl overflow-hidden'>
                    <div className='absolute inset-0 py-sm px  bg-gradient-to-t from-secondary vias-secondary/60 to-secondary/10 flex items-center justify-center'>
                      <div className='max-w-lg space-y-4 lg:space-y-6 h-fit w-fit'>
                        <h3>
                          <Balancer className='text-h3 text-white'>
                            {item.title}
                          </Balancer>
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
      <div>
        <div className='container pb-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                <Balancer as='div' className='text-h2 pb-4 text-white'>
                  Conoce más acerca de nosotros
                </Balancer>
                <div>
                  <Button asChild size='lg'>
                    <Link href='/nosotros'>
                      Saber más
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
