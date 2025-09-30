import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Packages from '../components/Packages';
import Process from '../components/Process';
import Cases from '../components/Cases';
import FAQ from '../components/FAQ';
import MiniBrief from '../components/MiniBrief';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero impactante */}
      <Hero />
      
      {/* 2. Beneficios para comercios locales */}
      <Benefits />
      
      {/* 3. Paquetes y precios */}
      <Packages />
      
      {/* 4. Cómo trabajamos (proceso) */}
      <Process />
      
      {/* 5. Muestras/casos (placeholders) */}
      <Cases />
      
      {/* 6. Preguntas frecuentes */}
      <FAQ />
      
      {/* 7. Mini-brief embebido */}
      <MiniBrief />
      
      {/* 8. Llamado final (CTA) */}
      <FinalCTA />
      
      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
