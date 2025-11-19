import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Global constant as requested
  const WHATSAPP_DIRECT_LINK = "whatsapp://chat?code=F5AO9r1uqT2Kcz7xB7Q1pT";

  return (
    <div className="min-h-screen flex flex-col text-gray-800 antialiased overflow-x-hidden">
      <Header whatsappLink={WHATSAPP_DIRECT_LINK} />
      
      <main className="flex-grow pt-20"> {/* pt-20 adds space for fixed header */}
        <HeroSection whatsappLink={WHATSAPP_DIRECT_LINK} />
        <FinalCtaSection whatsappLink={WHATSAPP_DIRECT_LINK} />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;