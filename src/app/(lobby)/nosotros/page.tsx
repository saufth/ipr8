import { Balancer } from 'react-wrap-balancer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import Video from '@/components/Video'
import { AnimatedText } from '@/components/AnimatedText'
import { filosophy, ourValues } from '@/config/organization'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Conócenos – Descubre la excelencia en cada proyecto con nosotros',
  description: 'Comprometidos con ofrecer soluciones integrales para construir un futuro mejor'
}

export default function AboutPage () {
  return (
    <>
      <section className='overflow-hidden h-[125vh] relative z-10 pt-[90px] sm:pt-28 px'>
        <div className='container sm:px flex relative z-20'>
          <div className='max-w-2xl lg:max-w-3xl h-fit space-y-2'>
            <h1 className='sr-only'>Innovar, construir, inspirar.</h1>
            <AnimatedText
              texts={[
                'Innovar',
                'Construir',
                'Inspirar'
              ]}
              className='text-h1 border-b border-white dark:border-white leading-none pb-4 text-transparent bg-clip-text bg-gradient-to-t from-[#dddddd] to-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-[#dddddd] dark:to-white'
            />
            <p>
              <Balancer className='text-p1 text-white'>
                Descubre la excelencia en cada proyecto con nosotros.
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
          <Video src='/video/hero-about-us.mp4' />
        </div>
      </section>
      <section>
        <div className='container py-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                <h2 className='text-h2 pb-4 text-primary'>
                  Nuestra filosofía
                </h2>
                <p>
                  <Balancer className='text-p2 text-white'>
                    Comprometidos con ofrecer soluciones integrales para construir un futuro mejor.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            {filosophy.map((item, key) => {
              return (
                <article className='space-y-12' key={key}>
                  <div className='group relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[3/3] xl:aspect-[3/2] w-full h-auto rounded-3xl overflow-hidden'>
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
                    <div className='absolute inset-0 py-sm px bg-gradient-to-t from-secondary vias-secondary/60 to-secondary/10 flex items-end'>
                      <div className='space-y-4 lg:space-y-6 pt-24 md:pt-12'>
                        <h3 className='text-h2 text-white'>
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
      <section>
        <div className='container pb-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 p-6 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/2] xl:aspect-[3/1] grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6 text-center'>
                <h2 className='text-h2 pb-4 text-primary'>
                  Nuestros principios
                </h2>
                <p>
                  <Balancer className='text-p2 text-white'>
                    En nuestra empresa, los valores son el fundamento de todo lo que hacemos.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            {ourValues.map((item, key) => {
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
      <section>
        <div className='container pb-4 px space-y-4'>
          <div className='relative overflow-hidden'>
            <div className='bg-secondary relative z-20 px py-lg grid place-content-center rounded-3xl'>
              <div className='max-w-4xl h-fit space-y-4 lg:space-y-6'>
                <h2>
                  <Balancer className='text-h2 pb-4 text-primary'>
                    Innovación y éxito en el mundo de los bienes raíces
                  </Balancer>
                </h2>
                <Balancer className='space-y-6 text-p3 text-muted-foreground pt-6'>
                  <p>
                    Hace poco más de cinco años, nació una idea que revolucionará la industria de los bienes raíces: crear
                    una empresa con un enfoque claro en brindar servicios de primera categoría en el mundo de los bienes raíces.
                  </p>
                  <p>
                    Desde el principio, la empresa tuvo una visión muy clara: conectar a compradores y vendedores de propiedades
                    de manera transparente y efectiva. Su misión era facilitar los sueños de las personas de tener un hogar propio
                    o invertir en propiedades de manera inteligente.
                  </p>
                  <p>
                    Así poco a poco se comprometió a comprender profundamente las necesidades y deseos de sus clientes. La empresa se
                    destacó en el mercado inmobiliario gracias a su equipo de expertos que conocían muy bien el mercado y se esforzaban
                    por obtener los mejores acuerdos para sus clientes. Además de los servicios tradicionales de evaluación y negociación,
                    IPR8 ofrecía servicios de inversión personalizados, ayudando a los inversionistas a tomar decisiones informadas y rentables.
                  </p>
                  <p>
                    Con el tiempo, IPR8 decidió dar un paso más allá y expandir sus operaciones. No solo se
                    conformaron con la intermediación de propiedades, sino que también se convirtieron en una empresa desarrolladora de
                    proyectos inmobiliarios. Comenzaron a diseñar y construir sus propios desarrollos, desde complejos residenciales
                    hasta edificios comerciales de vanguardia.
                  </p>
                  <p>
                    Además, IPR8 fundó una división de mantenimiento y construcción. Comprendieron que, para brindar un servicio completo
                    a sus clientes, debían ofrecer servicios de mantenimiento preventivo y correctivo de alta calidad. Esto incluía
                    reparaciones en el hogar, mantenimiento de sistemas de HVAC y electricidad, así como servicios de limpieza
                    y jardinería para las propiedades que desarrollaban y vendían.
                  </p>
                  <p>
                    La adición de estas tres nuevas divisiones permitió a IPR8 ofrecer un enfoque integral a sus clientes, desde la
                    compra de una propiedad hasta su mantenimiento continuo y mejoras a través de proyectos de construcción y desarrollo.
                  </p>
                  <p>
                    Hoy en día, la empresa continúa creciendo y evolucionando en todas sus áreas de negocio. Siguen comprometidos con
                    su misión de brindar servicios excepcionales y abrazar la innovación para satisfacer las necesidades del mercado.
                  </p>
                  <p>
                    La historia de IPR8 es un testimonio del poder de la visión, el compromiso con los valores y la
                    dedicación a los clientes en la industria inmobiliaria. Su legado perdura como un ejemplo de excelencia
                    y profesionalismo en el sector, y como una empresa que se adapta constantemente para ofrecer soluciones
                    integrales en bienes raíces y construcción.
                  </p>
                </Balancer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
