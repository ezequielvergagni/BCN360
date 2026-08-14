import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

const services = [
  {
    tag: "PROGRAMA SECTORIAL",
    title: "Sectoriales",
    description: "Experimenta los avances de tu sector en una de las ciudades más innovadoras del mundo, a través de conectar con el Clúster catalán, conocer casos de éxito local y construir conexiones estratégicas con España.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Una oportunidad para llevar tu especialización al siguiente nivel en el mayor hub de innovación del sur de Europa."
  },
  {
    tag: "PROGRAMA EXECUTIVE",
    title: "Ejecutivos",
    description: "Un viaje de inspiración exclusiva para altos ejecutivos y dueños de empresas, donde explorar oportunidades de negocio, conocer empresarios locales en espacios de networking e identificar potenciales partners.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Identifica potenciales partners en uno de los ecosistemas de innovación más potentes de Europa."
  },
  {
    tag: "INSTITUCIONAL & CLUSTERS",
    title: "Instituciones",
    description: "Explora el dinámico ecosistema catalán, descubre las últimas tendencias en innovación y aprende buenas prácticas aplicables a tu entorno empresarial.",
    image: "https://images.pexels.com/photos/7653774/pexels-photo-7653774.jpeg?auto=compress&cs=tinysrgb&w=1200",
    details: "Crea vínculos estratégicos y sinergias al interactuar con líderes de las instituciones y actores sociales relevantes."
  },
  {
    tag: "POLÍTICAS PÚBLICAS & CIUDAD",
    title: "Gobierno",
    description: "Aprende del entramado socio-cultural barcelonés e identifica ideas y perspectivas que les permitan desarrollar políticas públicas adaptadas a las necesidades específicas de su propia jurisdicción.",
    image: "https://images.pexels.com/photos/4347459/pexels-photo-4347459.jpeg?auto=compress&cs=tinysrgb&w=1200",
    details: "Entendiendo cómo las políticas locales pueden influir en el fomento de la innovación y la colaboración público-privada."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Tech Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Nuestras Modalidades de Inmersión</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text="Una propuesta flexible que se ajusta a diferentes propósitos"
              highlightText="flexible"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>
          <p className="text-slate-600 text-lg">
            Diseñamos programas e itinerarios hiper-personalizados según el perfil de tu delegación u organización.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 hover:border-[#0052CC]/40 transition-all duration-300 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-[#0052CC]/10`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-200">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 lg:h-[400px] object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating Tech Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-[#050D1A]/80 backdrop-blur-md text-[#00D2FF] text-xs font-bold rounded-full border border-[#00D2FF]/30 tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0052CC] to-[#00D2FF] rounded-full mb-6" />
                </div>

                <p className="text-lg text-slate-700 leading-relaxed font-normal">
                  {service.description}
                </p>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border-l-4 border-[#0052CC] shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700 font-medium">
                    {service.details}
                  </p>
                </div>

                <div className="pt-2">
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#contacto" 
                    className="inline-flex items-center gap-2 text-[#0052CC] font-bold hover:text-[#00388A] transition-colors group text-base"
                  >
                    <span>Solicitar programa a medida</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
