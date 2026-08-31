import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingModal } from './BookingModal';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useLanguage();

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
    { name: t('nav.home'), href: isHome ? '#inicio' : '/' },
    { name: t('nav.services'), href: isHome ? '#servicios' : '/#servicios' },
    { name: t('nav.approach'), href: isHome ? '#enfoque' : '/#enfoque' },
    { name: t('nav.ecosystem'), href: isHome ? '#ecosistema' : '/#ecosistema' },
    { name: t('nav.testimonials'), href: isHome ? '#testimonios' : '/#testimonios' },
    { name: t('nav.team'), href: isHome ? '#equipo' : '/#equipo' },
    { name: t('nav.blog'), href: '/blog', isRoute: true },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-md shadow-slate-900/5 border-b border-slate-200/90 py-3 sm:py-3.5' 
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3.5 sm:py-4'
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
                  className="h-9 sm:h-11 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative text-slate-800 hover:text-[#0052CC] px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-blue-50/80"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative text-slate-800 hover:text-[#0052CC] px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-blue-50/80"
                  >
                    {link.name}
                  </a>
                )
              ))}

              {/* Language Switcher Button in Navbar Right */}
              <div className="ml-1 mr-1">
                <LanguageToggle variant="navbar" />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(0,82,204,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="ml-2 bg-[#0052CC] text-white hover:bg-[#0042A3] px-4 lg:px-5 py-2.5 rounded-full text-sm font-extrabold transition-all shadow-md shadow-blue-600/25 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#00D2FF]" />
                <span>{t('nav.bookCall')}</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle variant="navbar" />
              <button
                onClick={toggleMenu}
                aria-label={t('nav.openMenu')}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 focus:outline-none"
              >
                <span className="sr-only">{t('nav.openMenu')}</span>
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
              <div className="px-5 pt-4 pb-7 space-y-2">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:text-[#0052CC] hover:bg-blue-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  )
                ))}

                <div className="pt-2">
                  <LanguageToggle variant="mobile" />
                </div>

                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-base font-extrabold text-white bg-[#0052CC] hover:bg-[#0042A3] mt-3 text-center shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#00D2FF]" />
                  <span>{t('nav.bookCallMobile')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Navbar;
