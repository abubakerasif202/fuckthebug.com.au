
import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center relative overflow-hidden">
      {/* Decorative Sphere similar to image - Vibrant Purple Glow */}
      <div className="absolute -top-10 -right-20 md:right-0 w-64 h-64 md:w-96 md:h-96 opacity-40 pointer-events-none">
          <div className="w-full h-full rounded-full border border-neonPurple/40 shadow-[0_0_120px_rgba(189,0,255,0.4)] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,0,255,0.2)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-black font-orbitron leading-tight mb-4 text-white">
          “I thought a website was too expensive.”
        </h2>
        <p className="text-neonCyan text-2xl md:text-3xl font-orbitron mb-10 italic font-bold tracking-wide" style={{ textShadow: '0 0 25px rgba(0, 242, 234, 0.6)' }}>
          Not anymore.
        </p>
        
        <div className="space-y-4 text-gray-300 text-lg md:text-xl font-inter">
          <p>I’m a small business owner. I needed a website — but agencies wanted thousands.</p>
          <p className="font-bold text-white">Turns out, there’s a better way.</p>
        </div>
      </div>

      {/* Glowing Horizontal Line from poster */}
      <div className="glowing-separator w-full mb-16"></div>

      <h3 className="text-2xl md:text-3xl font-black font-orbitron tracking-widest text-white mb-12 uppercase">
        THE ANTI-AGENCY PROMISE.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Purple (Matches left card in poster) */}
        <div className="glass-panel p-8 rounded-2xl border-neonPurple/40 hover:border-neonPurple transition-all duration-300 group hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]">
          <h4 className="text-neonPurple text-2xl font-black font-orbitron mb-4">The Bug-Free Guarantee.</h4>
          <p className="text-gray-400 font-inter">Our name is our mission. We pride ourselves on shipping production-ready code that actually works.</p>
          <div className="mt-8 h-1 w-12 bg-neonPurple mx-auto group-hover:w-full transition-all duration-500 opacity-50"></div>
        </div>

        {/* Card 2: Cyan (Matches center card in poster) */}
        <div className="glass-panel p-8 rounded-2xl border-neonCyan/40 hover:border-neonCyan transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,242,234,0.2)]">
          <h4 className="text-neonCyan text-2xl font-black font-orbitron mb-4">Full-Stack Mastery.</h4>
          <p className="text-gray-400 font-inter">Whether it’s a high-converting landing page or a complex API, we’ve got the tools to execute.</p>
          <div className="mt-8 h-1 w-12 bg-neonCyan mx-auto group-hover:w-full transition-all duration-500 opacity-50"></div>
        </div>

        {/* Card 3: Purple (Matches right card in poster) */}
        <div className="glass-panel p-8 rounded-2xl border-neonPurple/40 hover:border-neonPurple transition-all duration-300 group hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]">
          <h4 className="text-neonPurple text-2xl font-black font-orbitron mb-4">Direct Pipeline.</h4>
          <p className="text-gray-400 font-inter">Direct access to your developers, real-time updates, and zero hidden agendas.</p>
          <div className="mt-8 h-1 w-12 bg-neonPurple mx-auto group-hover:w-full transition-all duration-500 opacity-50"></div>
        </div>
      </div>

      <p className="mt-20 text-gray-500 font-mono text-sm tracking-widest uppercase">
        Affordable websites for small businesses.
      </p>
    </section>
  );
};

export default ValueProposition;
