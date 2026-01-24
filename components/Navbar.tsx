
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-black font-orbitron tracking-tighter group">
          FUCKTHE<span className="text-neonCyan group-hover:text-white transition-colors">BUG</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-neonCyan inline-block animate-pulse"></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] font-orbitron text-gray-400">
          <a href="#services" className="hover:text-neonCyan transition-colors relative group">
            SERVICES
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-neonCyan transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-neonCyan transition-colors relative group">
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-neonCyan transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="text-[10px] font-bold px-6 py-2.5 border border-neonCyan text-neonCyan rounded-none hover:bg-neonCyan hover:text-black transition-all duration-300 font-orbitron uppercase tracking-wider"
          >
            Login
          </button>
          <a href="#contact" className="text-[10px] font-bold px-6 py-2.5 border border-white/20 text-white rounded-none hover:bg-neonCyan hover:border-neonCyan hover:text-black transition-all duration-300 font-orbitron uppercase tracking-wider relative overflow-hidden group">
            <span className="relative z-10">Direct Uplink</span>
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
