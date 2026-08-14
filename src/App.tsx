import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EcosystemPartners from './components/EcosystemPartners';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Delegations from './components/Delegations';
import BlogPreview from './components/blog/BlogPreview';
import BlogList from './components/blog/BlogList';
import Footer from './components/Footer';
import Seo from './components/Seo';

const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));

const HomePage = () => (
  <main>
    <Seo
      title="Innovación Barcelona × Latam"
      description="BCN360 conecta a líderes, empresas e instituciones de Latinoamérica con el ecosistema de innovación de Barcelona mediante experiencias a medida."
      path="/"
    />
    <Hero />
    <Features />
    <EcosystemPartners />
    <Services />
    <Ecosystem />
    <Team />
    <Delegations />
    <BlogPreview />
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
