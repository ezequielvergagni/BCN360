import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Sectoriales",
    description: "Experimenta los avances de tu sector en una de las ciudades más innovadoras del mundo, a través de conectar con el Clúster catalán, conocer casos de éxito local y construir conexiones estratégicas con España.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Una oportunidad para llevar tu especialización al siguiente nivel en el mayor hub de innovación del sur de Europa."
  },
  {
    title: "Ejecutivos",
    description: "Un viaje de inspiración exclusiva para altos ejecutivos y dueños de empresas, donde explorar oportunidades de negocio, conocer empresarios locales en espacios de networking e identificar potenciales partners.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Identifica potenciales partners en uno de los ecosistema de innovación más potentes de Europa."
  },
  {
    title: "Instituciones",
    description: "Explora el dinámico ecosistema catalán, descubre las últimas tendencias en innovación y aprende buenas prácticas aplicables a tu entorno empresarial.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Crea vínculos estratégicos y sinergias al interactuar con líderes de las instituciones y actores sociales relevantes."
  },
  {
    title: "Gobierno",
    description: "Aprende del entramado socio-cultural barcelonés e identifica ideas y perspectivas que les permitan desarrollar políticas públicas adaptadas a las necesidades específicas de su propia jurisdicción.",
    image: "https://images.unsplash.com/photo-1541872703-74c5963631df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "Entendiendo cómo las políticas locales pueden influir en el fomento de la innovación y la colaboración."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Una propuesta flexible que se ajusta a diferentes propósitos
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-base text-gray-500 italic border-l-4 border-blue-500 pl-4">
                  {service.details}
                </p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                  Saber más 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
