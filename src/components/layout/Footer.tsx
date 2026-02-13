
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <h2 className="text-xl font-black font-orbitron tracking-tighter mb-2">
              FUCKTHE<span className="text-neonCyan">BUG</span>
            </h2>
          </a>
          <p className="text-[10px] text-gray-500 font-inter uppercase tracking-widest">© 2025 FUCKTHEBUG.COM.AU PRECISION SYSTEMS. ALL BUGS DESTROYED.</p>
        </div>
        
        <div className="flex space-x-6 text-[10px] font-orbitron text-gray-400">
          <a href="#" className="hover:text-neonCyan transition-colors">TERMINAL</a>
          <a href="#" className="hover:text-neonCyan transition-colors">AUDITS</a>
          <a href="/privacy.html" className="hover:text-neonCyan transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-neonCyan transition-colors">NETWORK</a>
        </div>

        <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-neonCyan cursor-pointer transition-colors text-[10px] font-mono">X</div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-neonCyan cursor-pointer transition-colors text-[10px] font-mono">GH</div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-neonCyan cursor-pointer transition-colors text-[10px] font-mono">LN</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
