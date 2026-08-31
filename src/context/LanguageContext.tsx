import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      approach: 'Enfoque',
      ecosystem: 'Ecosistema',
      testimonials: 'Testimonios',
      team: 'Equipo',
      blog: 'Blog',
      bookCall: 'Agendar Llamada',
      bookCallMobile: 'Agendar Llamada (20 min)',
      openMenu: 'Abrir menú principal',
    },
    // Hero
    hero: {
      titleLine1: 'Conectamos líderes de',
      titleLine2: 'Latam con la innovación de',
      titleHighlight: 'Barcelona.',
      ctaPrimary: 'Empieza tu viaje',
      ctaSecondary: 'Explorar Enfoque',
      scroll: 'SCROLL',
    },
    // Profile Segmentation
    profileSegmentation: {
      badge: 'RUTAS DE INMERSIÓN ESTRATÉGICA',
      title: 'Diseñado exactamente para tu tipo de organización',
      highlight: 'tu tipo de organización',
      description: 'Cada programa se estructura en torno al retorno específico y los objetivos estratégicos que tu entidad necesita conseguir.',
      profiles: {
        empresas: {
          tag: 'EMPRESAS & CORPORATIVOS',
          title: 'Empresas y Corporativos',
          promise: 'Scouting curado sin que tu equipo pierda meses.',
          description: 'Accede a las tecnologías, proveedores punteros y modelos de negocio que están transformando tu industria en Europa, con reuniones 1-a-1 preparadas según tus desafíos.',
          benefits: [
            'Reuniones B2B con startups y scaleups filtradas por madurez',
            'Benchmarking directo con directores de innovación abierta',
            'Visitas privadas a centros tecnológicos y clústeres sectoriales',
            'Detección de proveedores de IA, biotecnología, logística y sostenibilidad'
          ],
          ctaLabel: 'Diseñar scouting corporativo'
        },
        instituciones: {
          tag: 'INSTITUCIONES & GOBIERNOS',
          title: 'Instituciones y Gobiernos',
          promise: 'Misiones oficiales llave en mano con agenda de alto nivel.',
          description: 'Conecta a tus autoridades, gremios o cámaras con los protagonistas del modelo de desarrollo económico, regeneración urbana (22@) y políticas de innovación de Barcelona.',
          benefits: [
            'Enlace institucional con Barcelona Activa, MWCapital y clústeres',
            'Mesas de trabajo público-privadas y transferencia de políticas públicas',
            'Coordinación protocolar, moderación bilingüe y logística integral',
            'Visitas a universidades de excelencia (UPC, UB, La Salle, ESADE)'
          ],
          ctaLabel: 'Solicitar agenda institucional'
        },
        scaleups: {
          tag: 'EMPRENDEDORES & SCALEUPS',
          title: 'Emprendedores y Scaleups',
          promise: 'Aterriza y expándete en Barcelona/Europa.',
          description: 'Utiliza Barcelona como tu trampolín de internacionalización: valida tu encaje comercial en la Unión Europea, conecta con fondos de Venture Capital y cierra tus primeros clientes.',
          benefits: [
            'Pitch sessions con fondos de VC (BStartup Sabadell, CaixaBank DayOne)',
            'Acceso a aceleradoras y hubs (Tech Barcelona Pier01, SeedRocket)',
            'Asesoría de soft-landing legal, migratorio, corporativo y fiscal',
            'Networking con fundadores de unicornios (Glovo, TravelPerk, Factorial)'
          ],
          ctaLabel: 'Acelerar expansión europea'
        }
      }
    },
    // What is Included
    whatIsIncluded: {
      badge: 'ALCANCE TANGIBLE DEL SERVICIO',
      title: '¿Qué incluye una misión inmersiva BCN360?',
      subtitle: 'Un servicio llave en mano donde tu única tarea es asistir a las reuniones y cerrar alianzas. Nosotros nos encargamos del diseño, la curaduría y la ejecución.',
      ctaBooking: 'Agendar llamada de diagnóstico (20 min)',
      ctaProposal: 'Solicitar propuesta técnica y cotización',
      satisfactionNote: '100% agendas curadas a medida • Acompañamiento local senior durante toda la estancia',
      viewProgram: 'Conoce el programa detallado',
      items: [
        {
          tag: 'ACCESO DIRECTO C-LEVEL',
          title: 'Agenda con Corporativos, Startups y Fondos',
          shortText: 'Reuniones 1-a-1 confirmadas con directores de innovación, fundadores de scaleups y gestores de fondos europeos.',
          details: [
            'Mesas redondas privadas según tu sector',
            'Reuniones bilaterales sin intermediarios',
            'Conexión con tomadores de decisiones reales'
          ]
        },
        {
          tag: 'INMERSIÓN TERRITORIAL',
          title: 'Visitas Guiadas a Hubs de Excelencia',
          shortText: 'Acceso exclusivo al distrito 22@, Tech Barcelona (Pier01), Barcelona Supercomputing Center y aceleradoras de punta.',
          details: [
            'Tours técnicos y estratégicos en el 22@',
            'Acceso a laboratorios de I+D y clústeres',
            'Conocimiento in situ de infraestructuras pioneras'
          ]
        },
        {
          tag: 'FILTRO & CONVERSIÓN',
          title: 'Matchmaking Curado y Calificado',
          shortText: 'Filtramos previamente a cada interlocutor local para garantizar que comparta intereses comerciales o de innovación con tu delegación.',
          details: [
            'Diagnóstico exhaustivo de objetivos previos',
            'Interlocutores con capacidad de decisión',
            'Cero tiempo perdido en reuniones irrelevantes'
          ]
        },
        {
          tag: 'TRANSFERENCIA & MENTORÍA',
          title: 'Mentorías Estratégicas y Pitch Sessions',
          shortText: 'Sesiones de preparación con fundadores y consultores de Barcelona para adaptar tu propuesta de valor al estándar europeo.',
          details: [
            'Adaptación del pitch para inversores de la UE',
            'Feedback honesto de referentes locales',
            'Talleres de cultura de negocios en España'
          ]
        },
        {
          tag: 'FACILITACIÓN IN SITU',
          title: 'Acompañamiento y Moderación en Barcelona',
          shortText: 'Un equipo local senior te acompaña durante todas las jornadas, facilitando la dinámica de cada sesión y gestionando la logística.',
          details: [
            'Coordinación integral de traslados y accesos',
            'Moderación bilingüe y contextualización',
            'Resolución de imprevistos en tiempo real'
          ]
        },
        {
          tag: 'RESULTADOS CONCRETOS',
          title: 'Seguimiento Post-Misión y Acuerdos',
          shortText: 'La misión no termina al volver a casa. Entregamos un reporte ejecutivo de acuerdos y te apoyamos en los siguientes pasos.',
          details: [
            'Minutas y acuerdos estructurados post-viaje',
            'Hoja de ruta para cerrar alianzas y pilotos',
            'Soporte de seguimiento durante 90 días'
          ]
        }
      ]
    },
    // Features (Value Approach)
    features: {
      badge: 'Nuestro Enfoque de Valor',
      title: 'Estamos orgullosos de nuestro ecosistema',
      highlight: 'ecosistema',
      subtitle: 'Gobierno, corporaciones líderes, universidades y startups unidas en Barcelona para crear un entorno dinámico e inigualable de colaboración internacional.',
      cardCta: 'Conoce la experiencia BCN360',
      items: [
        {
          badge: 'Ecosistema',
          title: 'Innovación Sectorial',
          description: 'Conoce a fondo las innovaciones de tu sector, conversa con partners y clientes potenciales y conecta con el Clúster catalán.'
        },
        {
          badge: 'Metodología',
          title: 'Liderazgo Gaudí',
          description: 'Desarrolla tus habilidades de liderazgo a partir del revolucionario enfoque con el que Antoni Gaudí abordaba sus obras.'
        },
        {
          badge: 'Cultura BCN',
          title: 'Identidad Cultural',
          description: 'La ciudad condal posee una identidad propia; comprender su dinámica cultural y social es clave para crear negocios sostenibles.'
        },
        {
          badge: 'Práctica',
          title: 'Casos Reales',
          description: 'Análisis y contacto directo con casos de éxito reales que te permitirán extrapolar aprendizajes estratégicos a tu mercado.'
        },
        {
          badge: 'Global',
          title: 'Estrategia Internacional',
          description: 'Descubre cómo Barcelona es elegida globalmente por corporaciones en su expansión estratégica hacia el mercado europeo.'
        },
        {
          badge: 'Networking',
          title: 'Visitas Exclusivas',
          description: 'Acceso privado y agendas directas con emprendedores, aceleradoras, instituciones gubernamentales y referentes de la ciudad.'
        }
      ]
    },
    // Services (Modalities)
    services: {
      badge: 'Nuestras Modalidades de Inmersión',
      title: 'Una propuesta flexible que se ajusta a diferentes propósitos',
      highlight: 'flexible',
      subtitle: 'Diseñamos programas e itinerarios hiper-personalizados según el perfil de tu delegación u organización.',
      exploreModality: 'Explorar esta modalidad',
      items: [
        {
          tag: 'PROGRAMA SECTORIAL',
          title: 'Sectoriales',
          description: 'Experimenta los avances de tu sector en una de las ciudades más innovadoras del mundo, a través de conectar con el Clúster catalán, conocer casos de éxito local y construir conexiones estratégicas con España.',
          details: 'Una oportunidad para llevar tu especialización al siguiente nivel en el mayor hub de innovación del sur de Europa.'
        },
        {
          tag: 'PROGRAMA EXECUTIVE',
          title: 'Ejecutivos',
          description: 'Un viaje de inspiración exclusiva para altos ejecutivos y dueños de empresas, donde explorar oportunidades de negocio, conocer empresarios locales en espacios de networking e identificar potenciales partners.',
          details: 'Identifica potenciales partners en uno de los ecosistemas de innovación más potentes de Europa.'
        },
        {
          tag: 'INSTITUCIONAL & CLUSTERS',
          title: 'Instituciones',
          description: 'Explora el dinámico ecosistema catalán, descubre las últimas tendencias en innovación y aprende buenas prácticas aplicables a tu entorno empresarial.',
          details: 'Crea vínculos estratégicos y sinergias al interactuar con líderes de las instituciones y actores sociales relevantes.'
        },
        {
          tag: 'POLÍTICAS PÚBLICAS & CIUDAD',
          title: 'Gobierno',
          description: 'Aprende del entramado socio-cultural barcelonés e identifica ideas y perspectivas que les permitan desarrollar políticas públicas adaptadas a las necesidades específicas de su propia jurisdicción.',
          details: 'Entendiendo cómo las políticas locales pueden influir en el fomento de la innovación y la colaboración público-privada.'
        }
      ]
    },
    // Ecosystem Partners
    ecosystemPartners: {
      badge: 'ACCESO DIRECTO Y VALIDADO',
      title: 'Conectamos a tu delegación con los protagonistas de Barcelona',
      highlight: 'protagonistas de Barcelona',
      subtitle: 'Desde instituciones públicas pioneras y centros de I+D hasta unicornios tecnológicos y fondos de Venture Capital de primer nivel.',
      tabAll: 'Todos los Aliados',
      verifiedText: 'Nuestros participantes tienen acceso directo a mesas de trabajo, visitas privadas y reuniones con directores y fundadores de estas organizaciones.',
      categories: {
        instituciones: 'Instituciones & Universidades',
        aceleradoras: 'Hubs & Fondos de Inversión',
        unicornios: 'Unicornios Tecnológicos',
        corporates: 'Corporativos & Scaleups'
      }
    },
    // Ecosystem Metrics
    ecosystem: {
      title: 'Un ecosistema en constante',
      highlight: 'expansión',
      subtitle: 'Barcelona se consolida como el hub tecnológico más activo del sur de Europa, atrayendo talento internacional e inversión multinacional.',
      metrics: [
        { label: 'Universidades & Centros I+D', count: '15+' },
        { label: 'Startups de Alto Impacto', count: '1900+' },
        { label: 'Hubs Tecnológicos Globales', count: '100+' },
        { label: 'Venture Capital & Inversión', count: '€1.5B+' }
      ]
    },
    // Delegations & Testimonials
    delegations: {
      badge: 'PRUEBA & RESULTADOS COMPROBADOS',
      title: 'Lo que dicen los líderes que ya viajaron con nosotros',
      highlight: 'ya viajaron con nosotros',
      subtitle: 'Delegaciones de empresas, fondos, universidades y gobiernos de toda Latinoamérica confían en BCN360 para su conexión con Europa.',
      missionTag: 'MISIÓN SECTORIAL DESTACADA',
      missionTitle: 'Misión Tecnológica Vinos & AgroTech LatAm – Cataluña',
      missionDesc: 'Delegación de fundadores y directores técnicos de Chile y Argentina: 14 reuniones bilaterales con bodegas de Penedès, centros de investigación del IRTA e inversión.',
      satisfactionBadge: '100% de delegaciones recomiendan la experiencia',
      resultLabel: 'Resultado Clave:',
      ctaLead: '¿Quieres resultados como estos para tu delegación?',
      ctaButton: 'Agenda tu llamada de 20 min',
      testimonials: [
        {
          name: 'Juan Carlos Ortega',
          role: 'Fundador',
          organization: 'Verdana',
          techFocus: 'Desalcoholización de vinos por osmodiálisis',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'Para nosotros, poder reunirnos con bodegas y con el sistema científico del vino en Cataluña fue un antes y un después. BCN360 preparó cada encuentro pensando en nuestra tecnología, y eso se notó: fueron conversaciones concretas, no visitas de cortesía. Nos fuimos con contactos que hoy siguen activos y con una claridad enorme sobre cómo entrar al mercado europeo.',
          result: 'Alianzas con bodegas y centros científicos en Cataluña'
        },
        {
          name: 'Jairo Pereira',
          role: 'Co-Fundador',
          organization: 'Flux Biofactories',
          techFocus: 'Biotecnología para salud animal acuícola',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'Somos una startup de biotecnología en pleno escalado, y necesitábamos aprender de quienes ya recorrieron ese camino. BCN360 nos conectó con centros de investigación y empresas del sector que nos dieron respuestas que buscábamos hacía meses. La semana fue intensa, pero cada reunión sumó. Es la forma más rápida que conozco de meterse de lleno en el ecosistema de Barcelona.',
          result: 'Conexión directa con centros de I+D y líderes del sector'
        },
        {
          name: 'Erwin Uribe',
          role: 'Fundador',
          organization: 'GreenBricks',
          techFocus: 'Construcción sostenible a partir de residuos',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'Llegamos a Barcelona sin saber por dónde empezar y en cinco días nos sentamos con constructoras, arquitectos y clusters que jamás habríamos alcanzado por nuestra cuenta. El equipo de BCN360 no armó una agenda genérica: entendió que GreenBricks necesitaba pilotos reales y nos conectó exactamente con quienes podían dárnoslos. Volvimos a Chile con puertas abiertas en Europa.',
          result: 'Reuniones con constructoras, arquitectos y clusters'
        }
      ]
    },
    // Team
    team: {
      badge: 'Liderazgo BCN360',
      title: 'Contamos con la experiencia para crear programas de impacto',
      highlight: 'impacto',
      subtitle: 'Un equipo multidisciplinar con amplia trayectoria en innovación corporativa, misiones internacionales y desarrollo de ecosistemas.',
      linkedin: 'Perfil LinkedIn'
    },
    // Blog Preview
    blogPreview: {
      badge: 'Novedades & Tendencias',
      title: 'Últimas publicaciones del Blog',
      highlight: 'Blog',
      subtitle: 'Artículos, entrevistas e informes sobre el ecosistema de innovación en Barcelona y casos de éxito Latam.',
      viewAll: 'Ver todas las publicaciones',
      viewAllMobile: 'Ver todo el blog',
      readArticle: 'Leer artículo'
    },
    // Blog List & Post
    blog: {
      badge: 'Actualidad & Ecosistema',
      title: 'Blog & Artículos Estratégicos',
      highlight: 'Estratégicos',
      subtitle: 'Perspectivas, casos de éxito y claves del ecosistema de innovación de Barcelona para líderes y fundadores de Latinoamérica.',
      allCategories: 'Todos',
      readTimeSuffix: 'lectura',
      backToBlog: 'Volver a todas las publicaciones',
      notFoundTitle: 'Artículo no encontrado',
      shareText: 'Compartir artículo',
      sidebarCtaTitle: '¿Quieres conectar con el ecosistema de Barcelona?',
      sidebarCtaDesc: 'Diseñamos misiones tecnológicas y agendas 1-a-1 a medida para delegaciones y empresas de LatAm.',
      sidebarCtaBtn: 'Agendar diagnóstico (20 min)'
    },
    // Final CTA
    finalCta: {
      badge: 'DA EL PRIMER PASO HOY',
      title: '¿Listo para conectar tu organización con el ecosistema de Barcelona?',
      highlight: 'ecosistema de Barcelona',
      subtitle: 'En una videollamada de 20 minutos analizamos las necesidades de tu delegación y te presentamos un borrador preliminar de agenda sin compromiso.',
      ctaBook: 'Agenda tu llamada (20 min)',
      ctaProposal: 'Solicitar propuesta a medida',
      bookBtn: 'Agenda tu llamada (20 min)',
      proposalBtn: 'Solicitar propuesta a medida',
      guarantee1: 'Respuesta en menos de 24h',
      guarantee2: 'Agenda 100% personalizada',
      guarantee3: 'Atención telefónica directa (+34 610 691 957)'
    },
    // Footer
    footer: {
      badge: 'CONTACTO DIRECTO & ASESORÍA',
      title: 'Hablemos de tu próxima misión en Barcelona',
      subtitle: 'Conectamos a líderes, directores y fundadores de Latinoamérica con el ecosistema de innovación, tecnología y desarrollo de Barcelona a través de misiones de inmersión ejecutivas.',
      emailLabel: 'Correo Corporativo',
      emailInputLabel: 'Correo Corporativo',
      phoneLabel: 'Atención Telefónica Directa',
      linkedinLabel: 'Página Oficial en LinkedIn',
      navTitle: 'Navegación',
      contactTitle: 'Contacto Directo',
      formTitle: 'Envíanos un Mensaje Directo',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre y apellido',
      emailPlaceholder: 'tu@empresa.com',
      messageLabel: 'Detalles de tu consulta o misión',
      messagePlaceholder: '¿En qué fechas prevés tu visita o cuál es el propósito de tu delegación?',
      sendBtn: 'Enviar Mensaje',
      sendingBtn: 'Enviando mensaje...',
      successTitle: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Gracias por contactarnos. Hemos recibido tus datos y te responderemos a la brevedad a',
      sendAnother: 'Enviar otro mensaje',
      rights: 'Todos los derechos reservados.',
      address: 'Barcelona, España • Distrito 22@'
    },
    // Booking Modal
    bookingModal: {
      badge: 'LLAMADA ESTRATÉGICA DE 20 MINUTOS',
      title: 'Agenda una llamada de diagnóstico con nuestro equipo',
      subtitle: 'En 20 minutos evaluaremos los objetivos de tu delegación y definiremos las organizaciones clave de Barcelona para tu agenda.',
      name: 'Nombre completo',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej: María González',
      email: 'Correo corporativo',
      emailLabel: 'Correo corporativo',
      emailPlaceholder: 'maria@empresa.com',
      company: 'Empresa u Organización',
      companyLabel: 'Empresa u Organización',
      companyPlaceholder: 'Nombre de tu organización',
      country: 'País de origen',
      countryLabel: 'País de origen',
      profile: 'Tipo de perfil / Organización',
      profileLabel: 'Tipo de perfil / Organización',
      time: 'Horario preferido para la llamada',
      goal: '¿Cuál es el principal objetivo de tu visita a Barcelona? (Opcional)',
      goalLabel: '¿Cuál es el principal objetivo de tu visita a Barcelona? (Opcional)',
      goalPlaceholder: 'Ej: Conectar con startups de IA, validar mercado europeo, explorar centros I+D...',
      submitBtn: 'Confirmar Solicitud de Llamada (20 min)',
      submittingBtn: 'Enviando solicitud...',
      disclaimer: 'Llamada de 20 min sin costo ni compromiso. Te contactaremos en <24h.',
      successTitle: '¡Solicitud Recibida con Éxito!',
      successDesc: 'Te hemos enviado un correo de confirmación a',
      successSub: 'Nuestro equipo senior revisará tu perfil y te contactará en menos de 24 horas hábiles.',
      closeBtn: 'Entendido, volver a la web',
      benefits: ['Sin compromiso', 'Enfoque 100% técnico', 'Respuesta en <24h']
    },
    // Proposal Modal
    proposalModal: {
      badge: 'PROPUESTA TÉCNICA A MEDIDA',
      title: 'Solicita una propuesta personalizada para tu delegación',
      subtitle: 'Cuéntanos sobre tu organización y prepararemos una estructura de agenda con presupuestos estimados y organizaciones sugeridas.',
      name: 'Nombre del responsable',
      nameLabel: 'Nombre del responsable',
      namePlaceholder: 'Ej: Alejandro Silva',
      email: 'Correo corporativo',
      emailLabel: 'Correo corporativo',
      emailPlaceholder: 'alejandro@organizacion.org',
      company: 'Empresa, Gremio o Entidad',
      companyLabel: 'Empresa, Gremio o Entidad',
      companyPlaceholder: 'Nombre de tu institución',
      country: 'País de la delegación',
      countryLabel: 'País de la delegación',
      profile: 'Tipo de delegación',
      profileLabel: 'Tipo de delegación',
      delegationSize: 'Tamaño estimado de la delegación',
      delegationSizeLabel: 'Tamaño estimado de la delegación',
      timeframeLabel: 'Ventana de tiempo prevista',
      quarter: 'Ventana de tiempo prevista',
      details: 'Detalles del viaje y foco sectorial deseado',
      focusLabel: 'Detalles del viaje y foco sectorial deseado',
      focusPlaceholder: 'Describe las industrias de interés, perfil de los participantes, duración esperada (ej: 4-5 días) y resultados esperados.',
      detailsPlaceholder: 'Describe las industrias de interés, perfil de los participantes, duración esperada (ej: 4-5 días) y resultados esperados.',
      submitBtn: 'Solicitar Propuesta y Presupuesto Detallado',
      submittingBtn: 'Procesando requerimiento...',
      disclaimer: 'Presupuesto y borrador de agenda 100% confidencial en <48 horas.',
      successTitle: '¡Propuesta Solicitada con Éxito!',
      successDesc: 'Hemos recibido los detalles de la delegación de',
      successDesc2: 'Te responderemos a',
      successSub: 'Te enviaremos una propuesta formal en un plazo máximo de 48 horas hábiles.',
      closeBtn: 'Cerrar y volver al sitio'
    },
    // Lead Magnet
    leadMagnet: {
      badge: 'RECURSO ESTRATÉGICO GRATUITO • EDICIÓN 2026',
      title: 'Guía del Ecosistema de Innovación de Barcelona para LatAm',
      subtitle: 'Descarga el informe completo de 38 páginas preparado por nuestro equipo sobre cómo navegar, conectar y cerrar alianzas estratégicas en el mayor hub de innovación del sur de Europa.',
      whatInside: '¿Qué encontrarás dentro de la guía?',
      chapters: [
        'Mapeo de los 15 centros de I+D y clústeres más activos',
        'Guía de fondos de Venture Capital en Barcelona abiertos a LatAm',
        'Directorio de programas de soft-landing e incentivos públicos (22@)',
        'Plantilla de preparación de agenda para misiones ejecutivas'
      ],
      formTitle: 'Descarga gratuita inmediata en PDF',
      name: 'Nombre completo *',
      namePlaceholder: 'Ej: Carlos Mendoza',
      email: 'Correo electrónico *',
      emailPlaceholder: 'carlos@empresa.com',
      company: 'Empresa / Institución *',
      companyPlaceholder: 'Nombre de tu empresa',
      country: 'País',
      profile: 'Perfil principal',
      submitBtn: 'Descargar Guía Completa (PDF)',
      submittingBtn: 'Generando tu acceso seguro...',
      successTitle: '¡Acceso listo!',
      successDesc: 'Te hemos enviado el PDF a tu correo. También puedes abrirlo de inmediato:',
      directDownload: 'Abrir Guía en PDF Directamente',
      secureNote: 'Tus datos están protegidos. Sin spam, solo contenido de valor estratégico.'
    },
    // WhatsApp
    whatsapp: {
      tooltip: '¿Hablamos por WhatsApp? Consulta tu misión a medida',
      defaultMessage: '¡Hola! Me gustaría recibir más información sobre las misiones de innovación de BCN360 Experience en Barcelona.'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      approach: 'Approach',
      ecosystem: 'Ecosystem',
      testimonials: 'Testimonials',
      team: 'Team',
      blog: 'Blog',
      bookCall: 'Book a Call',
      bookCallMobile: 'Book a Call (20 min)',
      openMenu: 'Open main menu',
    },
    // Hero
    hero: {
      titleLine1: 'Connecting Latam leaders',
      titleLine2: 'with the innovation ecosystem of',
      titleHighlight: 'Barcelona.',
      ctaPrimary: 'Start your journey',
      ctaSecondary: 'Explore Approach',
      scroll: 'SCROLL',
    },
    // Profile Segmentation
    profileSegmentation: {
      badge: 'STRATEGIC IMMERSION PATHWAYS',
      title: 'Designed precisely for your type of organization',
      highlight: 'your type of organization',
      description: 'Each program is structured around the specific ROI and strategic objectives your organization needs to achieve.',
      profiles: {
        empresas: {
          tag: 'COMPANIES & CORPORATES',
          title: 'Companies & Corporates',
          promise: 'Curated scouting without wasting your team’s months.',
          description: 'Access cutting-edge technologies, top suppliers, and business models transforming your industry across Europe, through 1-on-1 meetings tailored to your strategic challenges.',
          benefits: [
            'B2B meetings with startups & scaleups filtered by maturity',
            'Direct benchmarking with open innovation directors',
            'Private visits to R&D centers and sectorial clusters',
            'Sourcing AI, biotech, logistics, and sustainability providers'
          ],
          ctaLabel: 'Design corporate scouting'
        },
        instituciones: {
          tag: 'INSTITUTIONS & GOVERNMENTS',
          title: 'Institutions & Governments',
          promise: 'Turnkey official missions with high-level agenda.',
          description: 'Connect your authorities, trade associations, or chambers with the architects of Barcelona’s economic development model, 22@ urban regeneration, and innovation policies.',
          benefits: [
            'Institutional links with Barcelona Activa, MWCapital & clusters',
            'Public-private roundtables & public policy knowledge transfer',
            'Protocol coordination, bilingual moderation & complete logistics',
            'Visits to top universities (UPC, UB, La Salle, ESADE)'
          ],
          ctaLabel: 'Request institutional agenda'
        },
        scaleups: {
          tag: 'ENTREPRENEURS & SCALEUPS',
          title: 'Entrepreneurs & Scaleups',
          promise: 'Land and expand across Barcelona & Europe.',
          description: 'Use Barcelona as your springboard for European internationalization: validate your product-market fit, connect with Venture Capital funds, and secure your first European clients.',
          benefits: [
            'Pitch sessions with VC funds (BStartup Sabadell, CaixaBank DayOne)',
            'Access to premier hubs & accelerators (Tech Barcelona Pier01, SeedRocket)',
            'Legal, corporate, immigration, and tax soft-landing advisory',
            'Networking with unicorn founders (Glovo, TravelPerk, Factorial)'
          ],
          ctaLabel: 'Accelerate European expansion'
        }
      }
    },
    // What is Included
    whatIsIncluded: {
      badge: 'TANGIBLE SERVICE SCOPE',
      title: 'What does a BCN360 immersive mission include?',
      subtitle: 'A turnkey service where your only task is to attend meetings and close partnerships. We handle the strategic design, curation, and local execution.',
      ctaBooking: 'Book diagnostic call (20 min)',
      ctaProposal: 'Request custom proposal & pricing',
      satisfactionNote: '100% custom-curated agendas • Senior local team on-site throughout your stay',
      viewProgram: 'Discover the full program',
      items: [
        {
          tag: 'DIRECT C-LEVEL ACCESS',
          title: 'Agenda with Corporates, Startups & Funds',
          shortText: 'Confirmed 1-on-1 meetings with innovation leaders, scaleup founders, and European VC fund managers.',
          details: [
            'Private roundtables tailored to your industry',
            'Direct bilateral meetings without intermediaries',
            'Connection with real decision-makers'
          ]
        },
        {
          tag: 'TERRITORIAL IMMERSION',
          title: 'Guided Visits to Centers of Excellence',
          shortText: 'Exclusive access to the 22@ district, Tech Barcelona (Pier01), Barcelona Supercomputing Center, and top accelerators.',
          details: [
            'Technical & strategic tours in 22@ district',
            'Access to R&D labs and industry clusters',
            'On-site insights into pioneering infrastructure'
          ]
        },
        {
          tag: 'FILTER & CONVERSION',
          title: 'Curated & Qualified Matchmaking',
          shortText: 'We pre-screen every local counterpart to ensure they share genuine commercial or innovation interests with your delegation.',
          details: [
            'Thorough diagnostic of preliminary goals',
            'Interlocutors with decision-making power',
            'Zero time wasted on irrelevant meetings'
          ]
        },
        {
          tag: 'TRANSFER & MENTORING',
          title: 'Strategic Mentoring & Pitch Sessions',
          shortText: 'Preparation sessions with Barcelona founders and advisors to adapt your value proposition to European standards.',
          details: [
            'Pitch adaptation for EU investors',
            'Honest feedback from local industry leaders',
            'Business culture workshops for Spain & Europe'
          ]
        },
        {
          tag: 'ON-SITE FACILITATION',
          title: 'On-Site Support & Moderation in Barcelona',
          shortText: 'A senior local team accompanies you throughout all days, facilitating session dynamics and managing all logistics.',
          details: [
            'End-to-end transport and access coordination',
            'Bilingual moderation and contextual insights',
            'Real-time problem solving on the ground'
          ]
        },
        {
          tag: 'TANGIBLE RESULTS',
          title: 'Post-Mission Follow-Up & Agreements',
          shortText: 'The mission does not end upon returning home. We provide an executive report of agreements and support your next steps.',
          details: [
            'Structured minutes and post-trip agreements',
            'Roadmap for closing partnerships and pilots',
            '90-day follow-up and introduction support'
          ]
        }
      ]
    },
    // Features (Value Approach)
    features: {
      badge: 'Our Value Approach',
      title: 'We are proud of our innovation ecosystem',
      highlight: 'ecosystem',
      subtitle: 'Government, leading corporations, top universities, and startups united in Barcelona to create a dynamic and unmatched hub for international collaboration.',
      cardCta: 'Explore the BCN360 experience',
      items: [
        {
          badge: 'Ecosystem',
          title: 'Sectorial Innovation',
          description: 'Explore in depth the breakthroughs in your sector, meet potential partners and clients, and connect with Catalan clusters.'
        },
        {
          badge: 'Methodology',
          title: 'Gaudí Leadership',
          description: 'Develop your leadership and strategic vision inspired by Antoni Gaudí’s revolutionary approach to complex architectural challenges.'
        },
        {
          badge: 'BCN Culture',
          title: 'Cultural Identity',
          description: 'Barcelona has a unique identity; understanding its cultural and social dynamics is essential for creating sustainable businesses.'
        },
        {
          badge: 'Practice',
          title: 'Real-World Cases',
          description: 'Direct contact with real case studies that allow you to extrapolate strategic takeaways directly into your home market.'
        },
        {
          badge: 'Global',
          title: 'International Strategy',
          description: 'Learn why Barcelona is globally chosen by international corporations for strategic expansion into the European market.'
        },
        {
          badge: 'Networking',
          title: 'Exclusive Visits',
          description: 'Private access and direct agendas with entrepreneurs, accelerators, governmental institutions, and city leaders.'
        }
      ]
    },
    // Services (Modalities)
    services: {
      badge: 'Our Immersion Modalities',
      title: 'A flexible proposition tailored to different goals',
      highlight: 'flexible',
      subtitle: 'We design hyper-personalized programs and itineraries aligned with your delegation or organization’s profile.',
      exploreModality: 'Explore this modality',
      items: [
        {
          tag: 'SECTORIAL PROGRAM',
          title: 'Sectorial',
          description: 'Experience the breakthroughs of your industry in one of the world’s most innovative cities, connecting with the Catalan cluster, learning from local case studies, and building strategic connections with Spain.',
          details: 'An opportunity to take your industry specialization to the next level in southern Europe’s premier tech hub.'
        },
        {
          tag: 'EXECUTIVE PROGRAM',
          title: 'Executive',
          description: 'An exclusive inspiration journey for C-suite executives and business owners to explore new business models, meet local leaders in curated networking spaces, and identify strategic partners.',
          details: 'Identify high-impact partners in one of Europe’s most powerful innovation ecosystems.'
        },
        {
          tag: 'INSTITUTIONAL & CLUSTERS',
          title: 'Institutions',
          description: 'Explore the dynamic Catalan ecosystem, discover the latest trends in innovation governance, and learn best practices applicable to your business or regional environment.',
          details: 'Create strategic links and synergies by interacting with leaders of key institutions and socio-economic actors.'
        },
        {
          tag: 'PUBLIC POLICY & CITY',
          title: 'Government',
          description: 'Learn from Barcelona’s socio-cultural framework and gain actionable perspectives to develop public policies tailored to your jurisdiction’s specific needs.',
          details: 'Understand how local policies foster open innovation, urban regeneration, and public-private collaboration.'
        }
      ]
    },
    // Ecosystem Partners
    ecosystemPartners: {
      badge: 'DIRECT & VALIDATED ACCESS',
      title: 'We connect your delegation with Barcelona’s key leaders',
      highlight: 'Barcelona’s key leaders',
      subtitle: 'From pioneering public institutions and R&D centers to tech unicorns and top-tier Venture Capital funds.',
      tabAll: 'All Partners',
      verifiedText: 'Our participants gain direct access to roundtables, private site visits, and meetings with directors and founders of these organizations.',
      categories: {
        instituciones: 'Institutions & Universities',
        aceleradoras: 'Hubs & VC Funds',
        unicornios: 'Tech Unicorns',
        corporates: 'Corporates & Scaleups'
      }
    },
    // Ecosystem Metrics
    ecosystem: {
      title: 'An ecosystem in constant',
      highlight: 'expansion',
      subtitle: 'Barcelona has established itself as southern Europe’s most active tech hub, attracting international talent and global investment.',
      metrics: [
        { label: 'Universities & R&D Centers', count: '15+' },
        { label: 'High-Impact Startups', count: '1900+' },
        { label: 'Global Tech Hubs', count: '100+' },
        { label: 'Venture Capital & Investment', count: '€1.5B+' }
      ]
    },
    // Delegations & Testimonials
    delegations: {
      badge: 'PROVEN EVIDENCE & RESULTS',
      title: 'What leaders who traveled with us say',
      highlight: 'who traveled with us',
      subtitle: 'Delegations from companies, funds, universities, and governments across Latin America trust BCN360 for their connection with Europe.',
      missionTag: 'FEATURED SECTORIAL MISSION',
      missionTitle: 'Wine & AgroTech Tech Mission LatAm – Catalonia',
      missionDesc: 'Delegation of founders and technical directors from Chile and Argentina: 14 bilateral meetings with Penedès wineries, IRTA research centers, and investors.',
      satisfactionBadge: '100% of delegations recommend the experience',
      resultLabel: 'Key Result:',
      ctaLead: 'Want results like these for your delegation?',
      ctaButton: 'Book your 20-min call',
      testimonials: [
        {
          name: 'Juan Carlos Ortega',
          role: 'Founder',
          organization: 'Verdana',
          techFocus: 'Wine dealcoholization via osmodialysis',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'For us, meeting with wineries and the scientific wine ecosystem in Catalonia was a turning point. BCN360 prepared every meeting around our specific technology, and it showed: they were actionable conversations, not courtesy visits. We left with active contacts and great clarity on entering the European market.',
          result: 'Partnerships with wineries and scientific centers in Catalonia'
        },
        {
          name: 'Jairo Pereira',
          role: 'Co-Founder',
          organization: 'Flux Biofactories',
          techFocus: 'Biotechnology for aquaculture animal health',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'We are a biotech startup in full scaling mode, and we needed to learn from those who have already walked that path. BCN360 connected us with research centers and corporate leaders who gave us answers we had been seeking for months. It is the fastest way I know to dive deep into Barcelona’s ecosystem.',
          result: 'Direct connection with R&D centers and industry leaders'
        },
        {
          name: 'Erwin Uribe',
          role: 'Founder',
          organization: 'GreenBricks',
          techFocus: 'Sustainable construction from recycled waste',
          country: 'Chile',
          flag: '🇨🇱',
          quote: 'We arrived in Barcelona not knowing where to start, and in five days we sat down with construction companies, architects, and clusters we never could have reached on our own. BCN360 understood that GreenBricks needed real pilot opportunities and connected us with the right decision-makers. We returned with open doors in Europe.',
          result: 'Meetings with construction firms, architects, and clusters'
        }
      ]
    },
    // Team
    team: {
      badge: 'BCN360 Leadership',
      title: 'We have the track record to create high-impact programs',
      highlight: 'high-impact',
      subtitle: 'A multidisciplinary team with deep experience in corporate innovation, international missions, and ecosystem development.',
      linkedin: 'LinkedIn Profile'
    },
    // Blog Preview
    blogPreview: {
      badge: 'Insights & Trends',
      title: 'Latest Blog Publications',
      highlight: 'Blog',
      subtitle: 'Articles, interviews, and reports on the Barcelona innovation ecosystem and LatAm success stories.',
      viewAll: 'View all publications',
      viewAllMobile: 'View full blog',
      readArticle: 'Read article'
    },
    // Blog List & Post
    blog: {
      badge: 'News & Ecosystem',
      title: 'Blog & Strategic Insights',
      highlight: 'Insights',
      subtitle: 'Perspectives, success stories, and keys to Barcelona’s innovation ecosystem for Latin American leaders and founders.',
      allCategories: 'All',
      readTimeSuffix: 'read',
      backToBlog: 'Back to all publications',
      notFoundTitle: 'Article not found',
      shareText: 'Share article',
      sidebarCtaTitle: 'Want to connect with Barcelona’s ecosystem?',
      sidebarCtaDesc: 'We design bespoke technology missions and 1-on-1 agendas for LatAm delegations and organizations.',
      sidebarCtaBtn: 'Book diagnostic call (20 min)'
    },
    // Final CTA
    finalCta: {
      badge: 'TAKE THE FIRST STEP TODAY',
      title: 'Ready to connect your organization with Barcelona’s ecosystem?',
      highlight: 'Barcelona’s ecosystem',
      subtitle: 'In a 20-minute video call, we will analyze your delegation’s objectives and present a preliminary draft agenda with zero commitment.',
      ctaBook: 'Book your call (20 min)',
      ctaProposal: 'Request custom proposal',
      bookBtn: 'Book your call (20 min)',
      proposalBtn: 'Request custom proposal',
      guarantee1: 'Response in under 24h',
      guarantee2: '100% personalized agenda',
      guarantee3: 'Direct phone line (+34 610 691 957)'
    },
    // Footer
    footer: {
      badge: 'DIRECT CONTACT & ADVISORY',
      title: 'Let’s discuss your next mission in Barcelona',
      subtitle: 'We connect Latin American leaders, executives, and founders with Barcelona’s innovation, tech, and business ecosystem through executive immersion missions.',
      emailLabel: 'Corporate Email',
      emailInputLabel: 'Corporate Email',
      phoneLabel: 'Direct Phone Line',
      linkedinLabel: 'Official LinkedIn Page',
      navTitle: 'Navigation',
      contactTitle: 'Direct Contact',
      formTitle: 'Send Us a Direct Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'you@company.com',
      messageLabel: 'Details of your mission or inquiry',
      messagePlaceholder: 'When do you plan to visit or what is the primary goal of your delegation?',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending message...',
      successTitle: 'Message Sent Successfully!',
      successDesc: 'Thank you for reaching out. We have received your inquiry and will reply shortly to',
      sendAnother: 'Send another message',
      rights: 'All rights reserved.',
      address: 'Barcelona, Spain • 22@ Innovation District'
    },
    // Booking Modal
    bookingModal: {
      badge: '20-MINUTE STRATEGIC CALL',
      title: 'Book a diagnostic call with our team',
      subtitle: 'In 20 minutes we will evaluate your delegation’s goals and identify the key Barcelona organizations for your agenda.',
      name: 'Full Name',
      nameLabel: 'Full Name',
      namePlaceholder: 'E.g., Maria Gonzalez',
      email: 'Corporate Email',
      emailLabel: 'Corporate Email',
      emailPlaceholder: 'maria@company.com',
      company: 'Company or Organization',
      companyLabel: 'Company or Organization',
      companyPlaceholder: 'Your organization name',
      country: 'Country of origin',
      countryLabel: 'Country of origin',
      profile: 'Profile / Organization type',
      profileLabel: 'Profile / Organization type',
      time: 'Preferred time slot',
      goal: 'What is the primary objective of your visit to Barcelona? (Optional)',
      goalLabel: 'What is the primary objective of your visit to Barcelona? (Optional)',
      goalPlaceholder: 'E.g., Connect with AI startups, validate EU market, explore R&D centers...',
      submitBtn: 'Confirm Call Request (20 min)',
      submittingBtn: 'Submitting request...',
      disclaimer: 'Free 20-minute call with zero commitment. We reply within <24h.',
      successTitle: 'Request Received Successfully!',
      successDesc: 'We have sent a confirmation email to',
      successSub: 'Our senior team will review your profile and contact you within 24 business hours.',
      closeBtn: 'Got it, return to site',
      benefits: ['Zero commitment', '100% technical focus', 'Response in <24h']
    },
    // Proposal Modal
    proposalModal: {
      badge: 'CUSTOM TECHNICAL PROPOSAL',
      title: 'Request a customized proposal for your delegation',
      subtitle: 'Tell us about your organization and we will draft an agenda structure with budget estimates and recommended counterparts.',
      name: 'Contact Lead Name',
      nameLabel: 'Contact Lead Name',
      namePlaceholder: 'E.g., Alexander Smith',
      email: 'Corporate Email',
      emailLabel: 'Corporate Email',
      emailPlaceholder: 'alexander@organization.org',
      company: 'Company, Association or Entity',
      companyLabel: 'Company, Association or Entity',
      companyPlaceholder: 'Your institution name',
      country: 'Delegation country',
      countryLabel: 'Delegation country',
      profile: 'Type of delegation',
      profileLabel: 'Type of delegation',
      delegationSize: 'Estimated delegation size',
      delegationSizeLabel: 'Estimated delegation size',
      timeframeLabel: 'Planned timeline / quarter',
      quarter: 'Planned timeline / quarter',
      details: 'Trip details and desired sector focus',
      focusLabel: 'Trip details and desired sector focus',
      focusPlaceholder: 'Describe sectors of interest, participant profiles, expected duration (e.g. 4-5 days), and desired business outcomes.',
      detailsPlaceholder: 'Describe sectors of interest, participant profiles, expected duration (e.g. 4-5 days), and desired business outcomes.',
      submitBtn: 'Request Detailed Proposal & Budget',
      submittingBtn: 'Processing request...',
      disclaimer: 'Confidential budget and agenda outline within <48 business hours.',
      successTitle: 'Proposal Requested Successfully!',
      successDesc: 'We have received the delegation details for',
      successDesc2: 'We will reach out to',
      successSub: 'We will send you a comprehensive formal proposal within 48 business hours.',
      closeBtn: 'Close and return to site'
    },
    // Lead Magnet
    leadMagnet: {
      badge: 'FREE STRATEGIC RESOURCE • 2026 EDITION',
      title: 'Barcelona Innovation Ecosystem Guide for LatAm',
      subtitle: 'Download the comprehensive 38-page report prepared by our team on how to navigate, connect, and close strategic partnerships in southern Europe’s largest innovation hub.',
      whatInside: 'What will you find inside the guide?',
      chapters: [
        'Mapping of the 15 most active R&D centers and clusters',
        'Guide to Venture Capital funds in Barcelona open to LatAm',
        'Directory of soft-landing programs and public incentives (22@)',
        'Agenda preparation template for executive missions'
      ],
      formTitle: 'Instant Free PDF Download',
      name: 'Full Name *',
      namePlaceholder: 'E.g., Carlos Mendoza',
      email: 'Email Address *',
      emailPlaceholder: 'carlos@company.com',
      company: 'Company / Institution *',
      companyPlaceholder: 'Your organization name',
      country: 'Country',
      profile: 'Primary profile',
      submitBtn: 'Download Complete Guide (PDF)',
      submittingBtn: 'Generating your secure access...',
      successTitle: 'Access Ready!',
      successDesc: 'We have sent the PDF to your email. You can also open it immediately below:',
      directDownload: 'Open Guide PDF Directly',
      secureNote: 'Your information is protected. No spam, only high-value strategic content.'
    },
    // WhatsApp
    whatsapp: {
      tooltip: 'Chat with us on WhatsApp? Inquire about your custom mission',
      defaultMessage: 'Hello! I would like to receive more information about BCN360 Experience innovation missions in Barcelona.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bcn360_language');
    if (saved === 'en' || saved === 'es') return saved;
    // Auto-detect browser language if preferred
    if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('en')) {
      return 'en';
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bcn360_language', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current === undefined || current === null) return path;
      current = current[key];
    }
    return current !== undefined ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
