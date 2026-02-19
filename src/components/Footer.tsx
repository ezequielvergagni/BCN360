import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cuéntanos tu idea y te ayudaremos a concretarla</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Estamos listos para diseñar una experiencia a medida para tu organización. Conecta con nosotros para empezar a planificar tu inmersión en Barcelona.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:info@bcn360experience.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg">info@bcn360experience.com</span>
              </a>
              
              <a href="tel:+34611182088" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg">+34 611 182 088</span>
              </a>

              <a href="https://www.linkedin.com/company/bcn360experience/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Barcelona, España</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BCN360 Experience. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
