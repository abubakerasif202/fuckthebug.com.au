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
        <div className="flex flex-col gap-8">
          <p className="text-xl text-white font-medium">
            We’re a team of obsessed engineers who believe the web should just work.
          </p>
          
          <div className="space-y-6">
            <p>
              We started fuckthebug because we were tired of seeing founders get stuck with bloated, fragile codebases and agencies that hide behind jargon. We don’t just build apps; we fix systems, optimize for speed, and ensure your technology is an asset, not a liability.
            </p>
            <p>
              You won’t find any "account managers" or "strategy consultants" here. When you work with us, you’re talking directly to the people writing the code. We prioritize clarity over complexity, providing honest technical advice that helps you make better business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div className="space-y-2">
              <div className="text-neonCyan font-orbitron font-bold text-xs tracking-widest uppercase">Root-Cause Engineering</div>
              <p className="text-sm text-gray-400">We solve underlying issues so your software stays stable under pressure.</p>
            </div>
            <div className="space-y-2">
              <div className="text-neonPurple font-orbitron font-bold text-xs tracking-widest uppercase">Speed as a Feature</div>
              <p className="text-sm text-gray-400">Slow sites kill conversions. We build with a performance-first mindset.</p>
            </div>
            <div className="space-y-2">
              <div className="text-neonPink font-orbitron font-bold text-xs tracking-widest uppercase">Radical Transparency</div>
              <p className="text-sm text-gray-400">Clear communication, predictable pricing, and zero bullshit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
