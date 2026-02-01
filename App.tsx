import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BugBackground from './components/BugBackground';

const Separator: React.FC = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neonPurple to-transparent shadow-[0_0_15px_#bd00ff] opacity-40"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-inter bg-darkBg text-white selection:bg-neonCyan selection:text-black overflow-x-hidden">
      <SpeedInsights />
      <BugBackground />
      <Navbar />

      <main className="relative z-10 pointer-events-none">
        {/* Pointer events auto allows interaction with content while letting clicks pass through to background in gaps */}
        <div className="pointer-events-auto flex flex-col gap-0">
          <Hero />
          
          <Separator />
          <ValueProposition />
          
          <Separator />
          <Services />
          
          <Separator />
          <About />
          
          <Separator />
          <Contact />
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;