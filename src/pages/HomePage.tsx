import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BugBackground from '../components/layout/BugBackground';
import Hero from '../features/home/Hero';
import ValueProposition from '../features/home/ValueProposition';
import About from '../features/home/About';
import Dashboard from '../features/home/Dashboard';
import Services from '../features/services/Services';
import Contact from '../features/contact/Contact';
import Separator from '../components/ui/Separator';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter bg-darkBg text-white selection:bg-neonCyan selection:text-black overflow-x-hidden">
      <BugBackground />
      <Navbar />

      <main className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-0">
          <Hero />
          <Separator />
          <ValueProposition />
          <Separator />
          <Dashboard />
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

export default HomePage;
