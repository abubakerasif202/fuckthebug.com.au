import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-neonPurple font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Our Identity</span>
        <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white">
          ABOUT <span className="text-neonCyan">US</span>
        </h2>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-xl border border-white/10 text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            Precision Systems is dedicated to providing top-tier AI and digital solutions. We bridge the gap between complex technology and practical business results.
          </p>
          <p>
            Our mission is to empower businesses with hyper-optimized websites, mobile systems, and secure cloud infrastructure that scales with your growth.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="h-1 flex-1 bg-gradient-to-r from-neonCyan/20 to-transparent rounded"></div>
            <div className="h-1 flex-1 bg-gradient-to-r from-neonPurple/20 to-transparent rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
