import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Ecosystem />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
