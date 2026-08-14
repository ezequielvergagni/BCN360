import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Sparkles } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

const team = [
  {
    name: "Leo Gimenez",
    role: "Partner Manager",
    image: "https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/65c4cf412f4b9d4b16a59e7c_Speaker%20Journey%20-%201%20%E2%80%93%20101.webp",
    linkedin: "https://www.linkedin.com/in/soyleogimenez/"
  },
  {
    name: "André Bartilotti",
    role: "Innovation Manager",
    image: "https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/65cdf45ad396a07d7711d6a6_Speaker%20Journey%20-%201%20%E2%80%93%20105.webp",
    linkedin: "https://www.linkedin.com/in/abartilotti/"
  },
  {
    name: "Ezequiel Vergagni",
    role: "Project Manager",
    image: "https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/687429690b50cc9feb0ccd85_WhatsApp%20Image%202025-07-10%20at%2018.16.52%20(2).jpeg",
    linkedin: "https://www.linkedin.com/in/ezequielvergagni/"
  },
  {
    name: "Vady Guerra",
    role: "Innovation Lead",
    image: "https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/672bcacbf949407ed857d698_Imagen%20Vady%20Guerra%20BN%20Alta%20Definicion.jpg",
    linkedin: "https://www.linkedin.com/in/vadyguerra/"
  },
  {
    name: "Jorge Farías Camposs",
    role: "Ecosystem Builder",
    image: "https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/6a7c3bae1107c4d28208c2c7_Perfil%20Jorge.jpeg",
    linkedin: "https://www.linkedin.com/in/jorgefariascampos/"
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Liderazgo BCN360</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            <AnimatedHeadingWords
              text="Contamos con la experiencia para crear programas de impacto"
              highlightText="impacto"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-lg text-slate-600">
            Un equipo multidisciplinar con amplia trayectoria en innovación corporativa, misiones internacionales y desarrollo de ecosistemas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-4 border border-slate-200 hover:border-[#0052CC]/40 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-[#0052CC]/15 transition-all duration-300"
            >
              <div className="relative w-full h-80 bg-slate-100 rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/90 via-[#050D1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0052CC] hover:bg-[#0042A3] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Perfil LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 pb-2 text-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
