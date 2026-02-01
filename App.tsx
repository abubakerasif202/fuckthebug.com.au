
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './components/Navbar';

import Hero from './components/Hero';

import Services from './components/Services';

import ValueProposition from './components/ValueProposition';

import Contact from './components/Contact';

import Footer from './components/Footer';

import BugBackground from './components/BugBackground';

import About from './components/About';



const App: React.FC = () => {

  return (

    <div className="min-h-screen font-inter selection:bg-neonCyan selection:text-black relative bg-darkBg">

      <BugBackground />

      <Navbar />

      {/* Added relative and z-10 to ensure main content sits above the interactive canvas */}

      <main className="relative z-10 pointer-events-none">
        {/* Child components need pointer-events-auto to be clickable, 
            the container is none to let clicks pass through to background in gaps */}
        <div className="pointer-events-auto">
            <Hero />
            
            <div className="max-w-7xl mx-auto px-6">
            <div className="glowing-separator opacity-40"></div>
            </div>

            <ValueProposition />

            <div className="max-w-7xl mx-auto px-6">
            <div className="glowing-separator opacity-40"></div>
            </div>

            <Services />

            <div className="max-w-7xl mx-auto px-6">
            <div className="glowing-separator opacity-40"></div>
            </div>

            <About />

            <div className="max-w-7xl mx-auto px-6">
            <div className="glowing-separator opacity-40"></div>
            </div>

            <Contact />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  );
};

export default App;
