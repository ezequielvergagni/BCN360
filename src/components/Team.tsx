import React from 'react';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: "Leo Gimenez",
    role: "Co-Founder & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://www.linkedin.com/in/soyleogimenez/"
  },
  {
    name: "André Bartilotti",
    role: "Partner & Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://www.linkedin.com/in/abartilotti/"
  },
  {
    name: "Ezequiel Vergagni",
    role: "Partner & Operations",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://www.linkedin.com/in/ezequielvergagni/"
  },
  {
    name: "Vady Guerra",
    role: "Innovation Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://www.linkedin.com/in/vadyguerra/"
  },
  {
    name: "Jorge Farías Campo",
    role: "Ecosystem Builder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://www.linkedin.com/in/jorgefariascampos/"
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nuestro Equipo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contamos con la experiencia para crear programas de impacto
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Un equipo multidisciplinar apasionado por la innovación y el desarrollo empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">Ver perfil</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
