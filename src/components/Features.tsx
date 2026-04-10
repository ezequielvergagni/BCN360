import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Users, MapPin, Briefcase, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    title: "Innovación Sectorial",
    description: "Conoce a fondo las innovaciones de tu sector, conversa con partners y clientes potenciales y conecta con el Cluster.",
    icon: Lightbulb,
  },
  {
    title: "Liderazgo Gaudí",
    description: "Desarrolla tus habilidades de liderazgo a partir del revolucionario enfoque con el que Antoni Gaudí realizaba sus obras.",
    icon: Users,
  },
  {
    title: "Identidad Cultural",
    description: "La ciudad condal tiene identidad propia y entender la dinámica cultural es clave para hacer negocios.",
    icon: MapPin,
  },
  {
    title: "Casos Reales",
    description: "Conocer casos reales permite extrapolar la experiencia adquirida a nuevos contextos y nuevos actores.",
    icon: Briefcase,
  },
  {
    title: "Estrategia Internacional",
    description: "Barcelona es elegida por las empresas en su estrategia de internacionalización hacia el mercado europeo.",
    icon: TrendingUp,
  },
  {
    title: "Visitas Exclusivas",
    description: "A partir de visitas a emprendedores, instituciones gubernamentales y empresas referentes de Barcelona.",
    icon: Globe,
  },
];

const Features = () => {
  return (
    <section id="enfoque" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nuestro Enfoque</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Estamos orgullosos de nuestro ecosistema.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Gobierno, corporates y startups unidas para crear un entorno único de colaboración y crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white trencadis-border hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 -mt-6 ml-6">
                <div className="inline-flex items-center justify-center p-3 bg-trencadis-blue organic-shape shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-display font-bold text-gray-900 tracking-tight">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
