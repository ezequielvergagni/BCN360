import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Enfoque', href: isHome ? '#enfoque' : '/#enfoque' },
    { name: 'Servicios', href: isHome ? '#servicios' : '/#servicios' },
    { name: 'Equipo', href: isHome ? '#equipo' : '/#equipo' },
    { name: 'Blog', href: '/blog', isRoute: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-md shadow-slate-900/5 border-b border-slate-200/90 py-3.5 sm:py-4' 
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-2">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://cdn.prod.website-files.com/6596be80cb5d98bf1d75f148/6598266776fbfaccd3d3ae9d_bcn360_learning_experiece_blue.svg" 
                alt="BCN360 Experience" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1.5 lg:space-x-3">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-slate-800 hover:text-[#0052CC] px-4 sm:px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 hover:bg-blue-50/80"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-slate-800 hover:text-[#0052CC] px-4 sm:px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 hover:bg-blue-50/80"
                >
                  {link.name}
                </a>
              )
            ))}
            
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto" 
              className="ml-4 bg-[#0052CC] text-white hover:bg-[#0042A3] px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all shadow-md shadow-blue-600/25 flex items-center gap-1.5"
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-7 space-y-2.5">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-base font-semibold text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-base font-semibold text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 rounded-xl text-base font-bold text-white bg-[#0052CC] hover:bg-[#0042A3] mt-4 text-center shadow-md shadow-blue-600/20"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
