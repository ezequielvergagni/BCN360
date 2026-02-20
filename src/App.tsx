import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Footer from './components/Footer';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';

import BlogPreview from './components/blog/BlogPreview';

const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <Services />
    <Ecosystem />
    <Team />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
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
