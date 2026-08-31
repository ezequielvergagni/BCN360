import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSegmentation from './components/ProfileSegmentation';
import WhatIsIncluded from './components/WhatIsIncluded';
import Features from './components/Features';
import Services from './components/Services';
import EcosystemPartners from './components/EcosystemPartners';
import Ecosystem from './components/Ecosystem';
import Delegations from './components/Delegations';
import Team from './components/Team';
import BlogPreview from './components/blog/BlogPreview';
import BlogList from './components/blog/BlogList';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Seo from './components/Seo';
import { LanguageProvider } from './context/LanguageContext';

const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));

const HomePage = () => (
  <main>
    <Seo
      title="Misiones de Innovación Barcelona × LatAm | BCN360 Experience"
      description="Conecta a tu empresa, institución o scaleup con el ecosistema de innovación de Barcelona (startups, corporativos, centros I+D y fondos) a través de misiones inmersivas de alto impacto."
      path="/"
    />
    {/* 1. Hero */}
    <Hero />
    
    {/* 2. Sección: Diseñado exactamente para tu tipo de organización */}
    <ProfileSegmentation />
    
    {/* 3. Sección: ¿Qué incluye una misión inmersiva BCN360? */}
    <WhatIsIncluded />
    
    {/* 4. Enfoque de Valor: Innovación, Liderazgo Gaudí, Identidad, Casos Reales */}
    <Features />
    
    {/* 5. Modalidades de Inmersión: Sectoriales, Ejecutivos, Instituciones, Gobierno */}
    <Services />
    
    {/* 6. Aliados del Ecosistema (16 Logos Interactivos) */}
    <EcosystemPartners />
    
    {/* 7. Métricas de Impacto */}
    <Ecosystem />
    
    {/* 8. Delegaciones y Testimonios */}
    <Delegations />
    
    {/* 9. Equipo de Liderazgo BCN360 */}
    <Team />
    
    {/* 10. Blog de Innovación */}
    <BlogPreview />
    
    {/* 11. Cierre y Llamado a la Acción */}
    <FinalCta />
  </main>
);

function AppContent() {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <React.Suspense fallback={<div className="min-h-screen bg-white" aria-label="Cargando contenido" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/:slug" element={<BlogPost />} />
        </Routes>
      </React.Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
