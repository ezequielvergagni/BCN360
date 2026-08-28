import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, BookOpen, CheckCircle2, Sparkles, FileText, Lock, Globe, Building, Mail, User } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

const guideChapters = [
  "Mapeo de los 15 centros de I+D y clústeres más activos",
  "Guía de fondos de Venture Capital en Barcelona abiertos a LatAm",
  "Directorio de programas de soft-landing e incentivos públicos (22@)",
  "Plantilla de preparación de agenda para misiones ejecutivas"
];

const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'Chile',
    profile: 'Empresa / Corporativo',
  });
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDownloaded(true);
    }, 900);
  };

  return (
    <section id="guia" className="py-24 bg-gradient-to-b from-[#050D1A] via-[#0A192F] to-[#050D1A] text-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#0052CC]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00D2FF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Guide Presentation (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>RECURSO ESTRATÉGICO GRATUITO • EDICIÓN 2026</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Guía del Ecosistema de Innovación de Barcelona para LatAm
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Descarga el informe completo de 38 páginas preparado por nuestro equipo sobre cómo navegar, conectar y cerrar alianzas estratégicas en el mayor hub de innovación del sur de Europa.
            </p>

            {/* Included Content Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] block">
                ¿Qué encontrarás dentro de la guía?
              </span>
              {guideChapters.map((ch, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{ch}</span>
                </div>
              ))}
            </div>

            {/* Micro Badge */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 text-xs text-slate-300">
              <FileText className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <span>Formato PDF ejecutivo • 38 páginas • Actualizado con datos y contactos 2026</span>
            </div>
          </div>

          {/* Right Column: Lead Magnet Form Card (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0052CC]/30 rounded-full blur-[80px] pointer-events-none" />

              {!isDownloaded ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                      Descárgala gratis al instante
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      Completa tus datos para enviarte el documento y acceder a la versión digital.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Nombre completo *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Tu nombre"
                            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email corporativo *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="tu@empresa.com"
                            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-xs sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Empresa u Organización *
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Nombre entidad"
                            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          País
                        </label>
                        <div className="relative">
                          <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-xs sm:text-sm"
                          >
                            <option value="Chile">🇨🇱 Chile</option>
                            <option value="Colombia">🇨🇴 Colombia</option>
                            <option value="México">🇲🇽 México</option>
                            <option value="Argentina">🇦🇷 Argentina</option>
                            <option value="Perú">🇵🇪 Perú</option>
                            <option value="Uruguay">🇺🇾 Uruguay</option>
                            <option value="Ecuador">🇪🇨 Ecuador</option>
                            <option value="Otro">🌎 Otro país</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Tipo de perfil
                      </label>
                      <select
                        value={formData.profile}
                        onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-xs sm:text-sm"
                      >
                        <option value="Empresa / Corporativo">Empresa / Corporativo (Innovación Abierta / Scouting)</option>
                        <option value="Institución / Gobierno">Institución / Gobierno / Cámara de Comercio</option>
                        <option value="Startup / Scaleup">Startup / Scaleup (Soft-landing y Expansión)</option>
                        <option value="Universidad / Centro I+D">Universidad / Centro Tecnológico / I+D</option>
                        <option value="Fondo de Inversión">Fondo de Inversión / Business Angel</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#0052CC] to-[#0088FF] hover:from-[#0042A3] hover:to-[#0070D6] text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#0052CC]/40 flex items-center justify-center gap-2 text-sm sm:text-base group disabled:opacity-75"
                      >
                        {isLoading ? (
                          <span>Generando tu acceso seguro...</span>
                        ) : (
                          <>
                            <Download className="w-5 h-5 text-[#00D2FF] group-hover:translate-y-0.5 transition-transform" />
                            <span>Descargar Guía Estratégica (PDF Gratis)</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center mt-2">
                      <Lock className="w-3 h-3 text-[#00D2FF]" />
                      <span>Tus datos están 100% protegidos. No enviamos spam.</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    ¡Guía enviada a tu correo!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Hemos enviado la copia a <strong className="text-white">{formData.email}</strong>. También puedes leer los artículos clave directamente en nuestro blog.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href="/blog"
                      className="px-6 py-3 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-xl text-xs sm:text-sm transition-all"
                    >
                      Explorar artículos del Blog
                    </a>
                    <button
                      onClick={() => setIsDownloaded(false)}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm transition-all"
                    >
                      Descargar otra copia
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadMagnet;
