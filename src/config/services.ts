import { type Category } from '@/types'

export const services: Category[] = [
  {
    title: 'Inmobiliaria',
    description: 'A través de nuestros servicios brindamos a nuestros clientes seguridad y respaldo a lo largo de todo el proceso inmobiliario, creando una relación de confianza con la empresa.',
    slug: '/inmobiliaria',
    image: '/images/solution1.webp',
    subcategories: [
      {
        title: 'Servicios inmobiliarios',
        description: 'Compra, venta, alquiler y gestión de propiedades.',
        items: [
          {
            title: 'Asesoramiento legal y financiero',
            description: 'Proporcionamos asesoramiento legal y financiero a través de alianzas con expertos en la materia, garantizando que las transacciones cumplan con todas las regulaciones y ofreciendo opciones de financiamiento adecuadas.',
            image: '/images/category1-solution1.webp'
          },
          {
            title: 'Gestión de documentación',
            description: 'Nos encargamos de la gestión de toda la documentación legal y contractual relacionada con las transacciones inmobiliarias, asegurando que todo esté en orden y que se cumplan los plazos.',
            image: '/images/category1-solution2.webp'
          },
          {
            title: 'Búsqueda personalizada de propiedades',
            description: 'Ayudamos a los compradores a encontrar propiedades que se adapten a sus necesidades específicas, ahorrando tiempo y esfuerzo en la búsqueda.',
            image: '/images/category1-solution3.webp'
          },
          {
            title: 'Marketing profesional',
            description: 'Utilizamos estrategias de marketing efectivas para promocionar las propiedades en venta, alcanzando a un público más amplio y aumentando las posibilidades de encontrar compradores calificados.',
            image: '/images/category1-solution4.webp'
          },
          {
            title: 'Negociación especializada',
            description: 'Actuamos como intermediarios expertos en la negociación de precios y condiciones, asegurando que los intereses de los clientes estén protegidos.',
            image: '/images/category1-solution5.webp'
          },
          {
            title: 'Inspecciones de propiedades',
            description: 'Coordinamos y realizamos inspecciones profesionales de propiedades para identificar posibles problemas o defectos antes de concretar una compra.',
            image: '/images/category1-solution6.webp'
          },
          {
            title: 'Análisis de inversión comercial',
            description: 'Llevamos a cabo análisis de inversión detallados para propiedades comerciales, evaluando su potencial de generación de ingresos y su capacidad para atraer inquilinos.',
            image: '/images/category1-solution7.webp'
          },
          {
            title: 'Negociación de contratos comerciales',
            description: 'Negociamos los términos y condiciones de los contratos de alquiler o venta de propiedades comerciales. Acordamos los términos del arrendamiento, como el plazo, el alquiler y las responsabilidades del propietario e inquilino.',
            image: '/images/category1-solution8.webp'
          },
          {
            title: 'Análisis de viabilidad de ubicación',
            description: 'Ayudamos a nuestros clientes comerciales a evaluar la viabilidad de la ubicación de una propiedad para sus negocios. Analizamos factores como la demografía local, la competencia y el flujo de tráfico para tomar decisiones informadas.',
            image: '/images/category1-solution9.webp'
          },
          {
            title: 'Red de contactos',
            description: 'Tenemos una amplia red de contactos en la industria, incluyendo abogados, agentes hipotecarios, inspectores de viviendas y otros profesionales, la cual es útil para facilitar las transacciones y proporcionar servicios adicionales a nuestros clientes.',
            image: '/images/category1-solution10.webp'
          }
        ]
      }
    ]
  },
  {
    title: 'Desarrolladora',
    description: 'La combinación de los siguientes servicios ayuda a maximizar el valor de las propiedades y optimizar las estrategias de comercialización en un mercado altamente competitivo.',
    slug: '/desarrolladora',
    image: '/images/solution2.jpeg',
    subcategories: [
      {
        title: 'Desarrollo inmobiliario',
        description: 'Planeación, diseño, financiamiento, construcción y gestión de  proyectos inmobiliarios.',
        items: [
          {
            title: 'Consultoría inmobiliaria',
            description: 'Proporcionamos asesoramiento y orientación en cuanto a la evaluación de propiedades, la gestión de proyectos, la inversión inmobiliaria y otros aspectos estratégicos relacionados con el mercado inmobiliario.'
          },
          {
            title: 'Estudios de mercado',
            description: 'Recopilamos y analizamos datos relevantes para entender las tendencias, la demanda, la oferta y los precios en un mercado específico. Trabajamos en pro de nuestros clientes para ayudarles a tomar decisiones informadas sobre inversiones y estrategias de marketing.'
          },
          {
            title: 'Definición del producto',
            description: 'Determinamos las características y atributos de una propiedad o desarrollo inmobiliario. Abarcamos aspectos como: el tipo de propiedad (residencial, comercial, industrial), ubicación, tamaño, diseño y precios.'
          },
          {
            title: 'Marketing inmobiliario',
            description: 'Promovemos propiedades a través de medios digitales.Creamos sitios web inmobiliarios, publicidad en redes sociales, marketing y estrategias de contenido para atraer a compradores o inquilinos potenciales.'
          },
          {
            title: 'Branding',
            description: 'Trabajamos en la creación y gestión de una identidad de marca sólida para agentes, empresas o proyectos inmobiliarios. Hacemos el diseño de logotipos, la definición de valores de marca y la construcción de una reputación en el mercado.'
          },
          {
            title: 'Proyección Financiera',
            description: 'Nos encargamos de gestionar los aspectos financieros relacionados con la inversión, la adquisición o la venta de propiedades. Abarcamos desde la evaluación de riesgos, el análisis de inversiones, la gestión de presupuestos, hasta la planificación fiscal.'
          },
          {
            title: 'Gestoría inmobiliaria',
            description: 'Estos servicios incluyen la asesoría en transacciones inmobiliarias, la elaboración de contratos, la gestión de documentos y permisos, la resolución de problemas legales y fiscales, entre otros.'
          },
          {
            title: 'Planeación y elaboración de planos',
            description: 'Creamos representaciones gráficas detalladas de una construcción o proyecto inmobiliario. Esto garantiza que un proyecto se construya de acuerdo con las especificaciones y normativas, y facilita la visualización y comprensión de la futura propiedad.'
          }
        ]
      }
    ]
  },
  {
    title: 'Constructora',
    description: 'En el mundo de la construcción, la diversidad de proyectos es tan amplia como las necesidades de las personas y las empresas, por eso orientamos nuestro esfuerzo en ofrecer estos servicios.',
    slug: '/constructora',
    image: '/images/solution3.jpeg',
    subcategories: [
      {
        title: 'Construcciones residenciales',
        description: 'Casa habitación y departamentos.',
        items: [
          {
            title: 'Diseño arquitectónico',
            description: 'Construimos viviendas que cuentan con un diseño arquitectónico atractivo y funcional que incluye distribución de espacios, acabados de alta calidad y detalles estéticos.'
          },
          {
            title: 'Instalaciones y servicios',
            description: 'Incluimos sistemas de calefacción, fontanería, electricidad y redes de comunicación modernas en todas las viviendas que construimos.'
          },
          {
            title: 'Áreas comunes',
            description: 'Creamos espacios atractivos con áreas comunes como parques, piscinas, gimnasios y zonas de recreación que elevan la calidad del complejo habitacional.'
          },
          {
            title: 'Seguridad',
            description: 'Nos aseguramos (desde la planeación del proyecto) de que los espacios cuenten con sistemas de seguridad como porteros eléctricos, cámaras de vigilancia y acceso controlado para brindar tranquilidad a nuestros clientes.'
          }
        ]
      },
      {
        title: 'Construcciones industriales',
        description: 'Bodegas y naves industriales.',
        items: [
          {
            title: 'Espacio de almacenamiento',
            description: 'Nuestras bodegas proporcionan espacio de almacenamiento seguro y versátil para mercancías, equipos o archivos.'
          },
          {
            title: 'Seguridad',
            description: 'La seguridad de nuestros clientes es muy importante, por ello contamos con sistemas de seguridad, como alarmas y cámaras de vigilancia.'
          },
          {
            title: 'Iluminación y ventilación',
            description: 'Cuidamos que las bodegas cuenten con iluminación adecuada y sistemas de ventilación para mantener el ambiente óptimo apto para resguardar los productos en perfecto estado.'
          },
          {
            title: 'Sistemas de energía',
            description: 'Tomamos en cuenta los sistemas de energía trifásica (suministro eléctrico eficiente, alimentación de motores y balance de carga) y sistemas de seguridad industrial para brindar soporte en todo momento.'
          }
        ]
      },
      {
        title: 'Construcciones comerciales',
        description: 'Oficinas y locales comerciales.',
        items: [
          {
            title: 'Diseño funcional',
            description: 'Diseñamos oficinas para ser eficientes y cómodas para el trabajo, con áreas de trabajo abiertas, oficinas privadas y salas de reuniones.'
          },
          {
            title: 'Iluminación y ventilación',
            description: 'Buscamos proporcionar un ambiente de trabajo agradable con iluminación natural y sistemas de ventilación adecuados en cada lugar que creamos.'
          },
          {
            title: 'Estacionamiento',
            description: 'Trabajamos en espacios de estacionamiento para empleados y visitantes cómodos, seguros y funcionales, con áreas adaptadas estratégicamente para discapacitados y personas con necesidades especiales.'
          },
          {
            title: 'Instalaciones específicas',
            description: 'Trabajamos con clientes muy diversos. Estamos capacitados en brindar un servicio excepcional para cubrir los requerimientos de instalaciones especiales según el tipo de negocio.'
          }
        ]
      },
      {
        title: 'Infraestructura',
        description: 'Urbanismo y servicios públicos',
        items: [
          {
            title: 'Carreteras',
            description: 'Trabajamos desde la planificación y diseño, hasta la construcción de carreteras principales y secundarias, autopistas y vías urbanas, garantizando una red de transporte eficiente y segura.'
          },
          {
            title: 'Puentes',
            description: 'Nuestro servicio incluye la concepción y construcción de puentes para cruzar ríos, arroyos, cañones u otras barreras geográficas, ya que con esto mejoramos la conectividad y la accesibilidad en una región.'
          },
          {
            title: 'Sistemas de transporte público',
            description: 'Construimos sistemas de transporte público como metro, trenes ligeros, autobuses y tranvías. Estos sistemas son esenciales para aliviar la congestión del tráfico y promover una movilidad más sostenible.'
          },
          {
            title: 'Redes de agua y alcantarillado',
            description: 'Involucramos la planificación y construcción de redes de distribución de agua potable y sistemas de alcantarillado sanitario en proyecto, garantizando el acceso a agua limpia y el tratamiento adecuado de aguas residuales.'
          }
        ]
      },
      {
        title: 'Supervisión estratégica de obra',
        description: 'Gestión y ejecución de proyectos.',
        items: [
          {
            title: 'Supervisión de cumplimiento',
            description: 'Contamos con un equipo de supervisores expertos que se encargan de garantizar que el proyecto se desarrolle de acuerdo con el plan, las especificaciones técnicas y las regulaciones aplicables.'
          },
          {
            title: 'Gestión de equipos',
            description: 'Supervisamos y coordinamos a los equipos de trabajo, incluyendo a los contratistas, subcontratistas y otros profesionales involucrados en el proyecto cuidando siempre la correcta administración de los recursos.'
          },
          {
            title: 'Resolución de problemas',
            description: 'Nos encargamos de la gestión de cambios en el diseño, retrasos imprevistos, problemas de calidad o cualquier otro obstáculo que afecte la ejecución del proyecto.'
          },
          {
            title: 'Control de calidad',
            description: 'Ponemos especial atención a los detalles, esto implica inspecciones regulares, pruebas y verificación de que los materiales y la mano de obra cumplan con las especificaciones técnicas.'
          },
          {
            title: 'Coordinación integral',
            description: 'Fomentamos la comunicación efectiva entre los diferentes equipos, la gestión de plazos y la sincronización de las actividades para garantizar la entrega oportuna de un proyecto.'
          },
          {
            title: 'Seguimiento presupuestario',
            description: 'Supervisamos el presupuesto del proyecto para asegurarnos de que los gastos se mantengan dentro de los límites establecidos.'
          }
        ]
      }
    ]
  },
  {
    title: 'Mantenimiento',
    description: 'Líderes en la gestión integral y mantenimiento de propiedades.',
    slug: '/mantenimiento',
    image: '/images/solution4.jpeg',
    subcategories: [
      {
        title: 'Mantenimiento industrial',
        description: 'Funcionamiento industrial óptimo y prolongado.',
        items: [
          {
            title: 'Mantenimiento preventivo y correctivo',
            description: 'Realizamos el mantenimiento preventivo y correctivo que implica la realización de inspecciones y tareas programadas de mantenimiento en maquinaria y equipos industriales para garantizar su funcionamiento óptimo.'
          },
          {
            title: 'Sistemas de automatización y control',
            description: 'Revisamos y ajustamos sistemas automatizados que controlan procesos industriales, como PLC y sistemas SCADA para garantizar su funcionamiento adecuado.'
          },
          {
            title: 'Soldadura y reparaciones metálicas',
            description: 'Soldamos y reparamos estructuras metálicas en instalaciones industriales para mantener la integridad estructural de edificios, soportes, plataformas y otras estructuras.'
          },
          {
            title: 'Gestión de residuos y desechos',
            description: 'Operamos desde la recolección, almacenamiento y transporte, hasta la disposición de residuos y desechos industriales, cumpliendo con todas las regulaciones ambientales.'
          },
          {
            title: 'Instalaciones eléctricas de alta tensión',
            description: 'Nos enfocamos en el mantenimiento de sistemas eléctricos de alta tensión, como subestaciones eléctricas y equipos asociados, para garantizar un suministro eléctrico seguro y confiable en la planta.'
          },
          {
            title: 'Sistemas de generación de energía',
            description: 'Le damos mantenimiento a generadores eléctricos, turbinas, sistemas de cogeneración u otras fuentes de generación de energía utilizadas en la industria.'
          },
          {
            title: 'Calibración y ensayo de equipos de medición',
            description: 'Calibramos y verificamos periódicamente los equipos de medición utilizados en la industria, como medidores de flujo, balanzas, instrumentos de análisis químico, etc.'
          },
          {
            title: 'Control de calidad industrial',
            description: 'Nos aseguramos de que los productos cumplan con altos estándares de calidad, especificaciones y normativas del sector industrial.'
          },
          {
            title: 'Plantas de producción y líneas de ensamblaje',
            description: 'Nos encargamos de supervisar y dar mantenimiento a toda la infraestructura de producción, incluyendo maquinaria, sistemas de transporte y logística, para garantizar una producción eficiente.'
          },
          {
            title: 'Sistemas de refrigeración industrial',
            description: 'Damos soporte a sistemas de enfriamiento por compresión, evaporativos o de ciclo de absorción, para mantener temperaturas adecuadas en procesos industriales y equipos.'
          }
        ]
      },
      {
        title: 'Mantenimiento comercial',
        description: 'Cuidado y reparación de estructuras comerciales y empresariales.',
        items: [
          {
            title: 'Edificios y oficinas comerciales',
            description: 'Nos encargamos de dar mantenimiento general a edificios y oficinas comerciales, incluyendo tareas como reparaciones de estructuras, fontanería, electricidad, pintura, y otros trabajos necesarios para mantener en buen estado las instalaciones.'
          },
          {
            title: 'Áreas comunes en centros comerciales',
            description: 'Llevamos a cabo la limpieza y mantenimiento de áreas compartidas en centros comerciales, como pasillos, baños públicos, áreas de descanso y estacionamientos, para asegurar un espacio agradable para los visitantes.'
          },
          {
            title: 'Servicios de seguridad',
            description: 'Hacemos servicio de instalación y mantenimiento de sistemas de seguridad, como cámaras de vigilancia, sistemas de alarma y control de acceso, para proteger las propiedades comerciales y sus activos.'
          },
          {
            title: 'Sistemas de iluminación y cableado eléctrico',
            description: 'Nos encargamos del mantenimiento de sistemas de iluminación en edificios comerciales, así como la inspección y reparación de cableado eléctrico para garantizar la seguridad y eficiencia energética.'
          },
          {
            title: 'Sistemas de climatización y refrigeración',
            description: 'Nos enfocamos en el mantenimiento y reparación de sistemas de aire acondicionado y refrigeración utilizados en entornos comerciales para mantener una temperatura confortable y eficiente.'
          },
          {
            title: 'Ascensores y escaleras mecánicas',
            description: 'Damos servicio de inspección, mantenimiento y reparación de ascensores y escaleras mecánicas para asegurar su funcionamiento seguro y confiable.'
          },
          {
            title: 'Pintura y renovación de espacios comerciales',
            description: 'Trabajamos en la renovación de interiores y exteriores de locales comerciales a través de trabajos de pintura y acabados para lograr un aspecto atractivo y cuidado.'
          },
          {
            title: 'Sistemas de extinción de incendios',
            description: 'Inspeccionamos y nos encargamos de dar mantenimiento a los sistemas de extinción de incendios, para asegurar que el local comercial tenga la preparación necesaria al momento de enfrentar situaciones de riesgo o de emergencia.'
          },
          {
            title: 'Residuos y reciclaje',
            description: 'Nos encargamos de la recolección, separación y disposición adecuada de residuos sólidos y la implementación de programas de reciclaje en instalaciones comerciales.'
          },
          {
            title: 'Sistemas de punto de venta (POS)',
            description: 'Llevamos a cabo la instalación y el soporte de sistemas de punto de venta, que incluyen hardware y software, utilizados en tiendas y negocios para gestionar las transacciones y el inventario.'
          }
        ]
      },
      {
        title: 'Mantenimiento residencial',
        description: 'Preservación del valor de propiedades habitacionales.',
        items: [
          {
            title: 'Reparación y mantenimiento de viviendas',
            description: 'Damos solución a problemas diversos, desde reparaciones menores hasta renovaciones más significativas para mantener las viviendas en perfecto estado.'
          },
          {
            title: 'Servicio de fontanería',
            description: 'Reparamos y damos mantenimiento a sistemas de fontanería, incluyendo la solución de fugas, la instalación de tuberías y grifos, así como la eliminación de atascos en tuberías y desagües.'
          },
          {
            title: 'Electricidad residencial',
            description: 'Instalamos, reparamos y actualizamos sistemas eléctricos en hogares, incluyendo la instalación de enchufes, interruptores y la actualización del cableado para garantizar la seguridad y eficiencia energética.'
          },
          {
            title: 'Sistemas climatizados',
            description: 'Nuestro servicio abarca desde el mantenimiento hasta la reparación de sistemas de calefacción, ventilación y aire acondicionado,para proporcionar un ambiente interior cómodo y saludable.'
          },
          {
            title: 'Jardinería de áreas verdes',
            description: 'Ponemos especial atención a los detalles de jardines y áreas verdes en el exterior de las propiedades, incluyendo el corte de césped, poda de arbustos, plantación de flores y el mantenimiento de paisajes.'
          },
          {
            title: 'Jardinería y mantenimiento de áreas verdes',
            description: 'Ponemos especial atención a los detalles de jardines y áreas verdes en el exterior de las propiedades, incluyendo el corte de césped, poda de arbustos, plantación de flores y el mantenimiento de paisajes. Somos expertos en transformar espacios simples en lugares inspiradores.'
          },
          {
            title: 'Reparación de techos y estructuras residenciales',
            description: 'Hacemos reparaciones generales en techos, incluyendo la reparación de goteras y daños causados por condiciones climáticas, así como la restauración de estructuras residenciales como pérgolas, terrazas, etc.'
          },
          {
            title: 'Sistemas de seguridad',
            description: 'Nos encargamos de la instalación y el mantenimiento de alarmas, cámaras de vigilancia y sistemas de control de acceso,  para proteger a los residentes y sus propiedades.'
          },
          {
            title: 'Servicios de pintura',
            description: 'Este servicio abarca la pintura de interiores y exteriores de la vivienda, así como la aplicación de acabados decorativos para mejorar la apariencia y proteger las superficies.'
          },
          {
            title: 'Remodelación y renovación de viviendas',
            description: 'Realizamos proyectos de remodelación y renovación en viviendas para mejorar su funcionalidad, estética y valor, incluyendo la ampliación de espacios, renovación de cocinas, baños y más.'
          },
          {
            title: 'Servicios de cancelería',
            description: 'Nos encargamos de la fabricación, instalación, mantenimiento o reparación de cerramientos de aluminio, vidrio, o PVC. Nuestros productos incluyen ventanas, puertas, mamparas, entre otros.'
          },
          {
            title: 'Servicios de herrería',
            description: 'Nos enfocamos en el diseño, fabricación, instalación y mantenimiento de estructuras y objetos de metal. Trabajamos con diversos metales, incluyendo el acero, hierro, aluminio, entre otros, para crear elementos funcionales y decorativos.'
          }
        ]
      }
    ]
  }
]
