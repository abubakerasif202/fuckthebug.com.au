
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);

  // 2D Particle Background - Extremely Lightweight
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const isMobile = width < 768;
    const particleCount = isMobile ? 12 : 25; 
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 2 + 0.5,
          color: Math.random() > 0.6 ? '#00f2ea' : '#bd00ff'
        });
      }
    };

    initParticles();

    let animationId: number | null = null;
    let disposed = false;
    const animate = () => {
      if (disposed) {
        return;
      }

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.25;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      disposed = true;
      window.removeEventListener('resize', handleResize);
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Simplified 3D Visual (Three.js) - Matching the poster's globe intent
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!threeRef.current || isMobile) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const { mountHeroVisual } = await import('./three/mountHeroVisual');
      if (disposed || !threeRef.current) {
        return;
      }

      cleanup = mountHeroVisual(threeRef.current);
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonPurple/10 border border-neonPurple/20 text-[10px] font-mono tracking-widest text-neonPurple mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-neonPurple animate-pulse"></span>
            LOCAL BUSINESS ACCELERATOR
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black font-orbitron leading-[1] mb-6 tracking-tight">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              HIGH-OCTANE CODE.
            </span>
            <span className="block text-neonCyan opacity-0 animate-fade-in-up glitch" data-text="NO AGENCY EGO" style={{ animationDelay: '250ms' }}>
              NO AGENCY EGO.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 font-inter max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Direct, professional web development for small businesses and founders. We fix what’s broken, build what’s next, and stay out of your way.
          </p>

          <div className="mb-12 relative group cursor-default opacity-0 animate-fade-in-up w-fit mx-auto lg:mx-0" style={{ animationDelay: '500ms' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-neonCyan via-neonPurple to-neonPink rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative px-8 py-6 bg-black/90 ring-1 ring-gray-900/5 rounded-xl leading-none flex flex-col items-center lg:items-start space-y-3 border-2 border-neonCyan/50 shadow-[0_0_30px_rgba(0,242,234,0.4)] animate-neon-pulse">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚨</span>
                <p className="text-neonCyan font-black font-orbitron text-xl md:text-3xl tracking-widest drop-shadow-[0_0_10px_rgba(0,242,234,1)]">
                   SPECIAL OFFER
                </p>
                <span className="text-2xl">🚨</span>
              </div>
              <p className="text-white font-bold font-orbitron text-lg md:text-xl tracking-wide">
                SMALL BUSINESS OWNERS:
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-gray-400 font-inter text-sm uppercase tracking-widest">Full Website For Just</p>
                <p className="text-neonPink font-black font-orbitron text-5xl md:text-6xl drop-shadow-[0_0_25px_rgba(230,0,255,1)] animate-pulse">
                  $300
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold font-orbitron tracking-widest hover:bg-neonCyan transition-all shadow-neonCyan/20 text-center uppercase">
              Kill the Bugs
            </a>
            <span className="text-gray-400 font-inter text-sm md:ml-4">
              No account managers. You speak directly to the builders.
            </span>
          </div>
        </div>

        <div className="hidden lg:block relative h-[450px] w-full">
            <div ref={threeRef} className="absolute inset-0 z-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neonPurple/5 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
