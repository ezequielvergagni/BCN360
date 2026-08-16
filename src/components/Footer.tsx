import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-[#050D1A] text-white relative overflow-hidden">
      {/* High-Tech BCN Brand Blue Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0052CC] via-[#00D2FF] to-[#00388A]" />

      {/* Tech Grid Background overlay */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0052CC]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Hablemos de tu Misión</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Cuéntanos tu idea y te ayudaremos a concretarla
            </h2>
            
            <p className="text-slate-300 mb-10 text-lg leading-relaxed font-normal">
              Estamos listos para diseñar una experiencia a medida para tu organización o delegación. Conecta con nosotros para empezar a planificar tu inmersión estratégica en Barcelona.
            </p>
            
            <div className="space-y-5">
              <a 
                href="mailto:info@bcn360experience.com" 
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <div className="p-3.5 bg-[#0052CC]/20 border border-[#0052CC]/40 rounded-2xl text-[#00D2FF] group-hover:bg-[#0052CC] group-hover:text-white transition-all shadow-md">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email Directo</div>
                  <div className="text-base sm:text-lg font-semibold">info@bcn360experience.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+34610691957" 
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <div className="p-3.5 bg-[#0052CC]/20 border border-[#0052CC]/40 rounded-2xl text-[#00D2FF] group-hover:bg-[#0052CC] group-hover:text-white transition-all shadow-md">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Atención Telefónica</div>
                  <div className="text-base sm:text-lg font-semibold">+34 610 691 957</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/company/bcn360experience/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <div className="p-3.5 bg-[#0052CC]/20 border border-[#0052CC]/40 rounded-2xl text-[#00D2FF] group-hover:bg-[#0052CC] group-hover:text-white transition-all shadow-md">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Comunidad Institucional</div>
                  <div className="text-base sm:text-lg font-semibold">LinkedIn BCN360 Experience</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - High-Tech Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 hover:border-[#0052CC]/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>Formulario de Contacto</span>
              <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white placeholder-slate-500 transition-all text-sm font-medium"
                  placeholder="Tu nombre y apellido"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Correo Corporativo</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white placeholder-slate-500 transition-all text-sm font-medium"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Detalles de tu consulta o misión</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white placeholder-slate-500 transition-all text-sm font-medium resize-none"
                  placeholder="¿En qué fechas prevés tu visita o cuál es el propósito de tu delegación?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0, 82, 204, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#0052CC]/30 flex items-center justify-center gap-2 text-base"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="h-4 w-4 text-[#00D2FF]" />
            <span>22@ Innovation District • Barcelona, España</span>
          </div>

          <p>
            © {new Date().getFullYear()} BCN360 Experience. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
