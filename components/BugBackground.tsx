
import React, { useEffect, useRef } from 'react';

const BugBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const BUG_COLORS = ['#ff00ff', '#00f0ff', '#ffffff'];
    
    interface Bug {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      scuttleTimer: number;
      deadTimer: number;
    }

    const bugs: Bug[] = [];
    // Dynamic bug count: very low on mobile, slightly more on desktop
    const isMobile = width < 768;
    const bugCount = isMobile ? 6 : 12;

    const initBugs = () => {
        bugs.length = 0;
        for (let i = 0; i < bugCount; i++) {
            bugs.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: 0,
                vy: 0,
                size: Math.random() * 2 + 1,
                color: BUG_COLORS[Math.floor(Math.random() * BUG_COLORS.length)],
                scuttleTimer: Math.random() * 100,
                deadTimer: 0
            });
        }
    };

    initBugs();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // --- Background Glitch Effects ---
      // Occasional horizontal scanline glitch
      if (Math.random() < 0.03) { 
        const color = BUG_COLORS[Math.floor(Math.random() * BUG_COLORS.length)];
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.random() * 0.05 + 0.02; // Very subtle transparency
        
        const h = Math.random() * 4 + 1; // Thin lines
        const y = Math.random() * height;
        // Draw a horizontal line across a portion or full width
        const w = Math.random() > 0.5 ? width : Math.random() * width;
        const x = Math.random() > 0.5 ? 0 : Math.random() * (width - w);
        
        ctx.fillRect(x, y, w, h);
      }

      // Occasional blocky artifact
      if (Math.random() < 0.01) {
        const color = BUG_COLORS[Math.floor(Math.random() * BUG_COLORS.length)];
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.03;
        
        const w = Math.random() * 100 + 20;
        const h = Math.random() * 100 + 20;
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillRect(x, y, w, h);
      }
      // --------------------------------

      for (let i = 0; i < bugs.length; i++) {
        const bug = bugs[i];
        
        if (bug.deadTimer > 0) {
            bug.deadTimer--;
            if (bug.deadTimer === 0) {
                bug.x = Math.random() * width;
                bug.y = Math.random() * height;
            }
            continue;
        }

        // Scuttle Logic: Move in short, fast bursts (realistic insect behavior)
        bug.scuttleTimer--;
        if (bug.scuttleTimer <= 0) {
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 5 + 2;
            bug.vx = Math.cos(angle) * force;
            bug.vy = Math.sin(angle) * force;
            bug.scuttleTimer = Math.random() * 60 + 20; // Time until next burst
        }

        // Friction to slow them down after a burst
        bug.vx *= 0.94;
        bug.vy *= 0.94;
        
        bug.x += bug.vx;
        bug.y += bug.vy;

        // Wrap around screen edges
        if (bug.x < 0) bug.x = width;
        else if (bug.x > width) bug.x = 0;
        if (bug.y < 0) bug.y = height;
        else if (bug.y > height) bug.y = 0;

        // Draw Bug - Minimalist pixels
        ctx.fillStyle = bug.color;
        ctx.globalAlpha = 0.6;
        ctx.fillRect(bug.x, bug.y, bug.size, bug.size);
        
        // Occasional twitch / glitch draw
        if (Math.random() < 0.01) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(bug.x + (Math.random() - 0.5) * 10, bug.y, bug.size * 2, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initBugs();
    };

    const handleClick = (e: MouseEvent) => {
        // Small interaction: clicking near a bug "debugs" it
        for (let i = 0; i < bugs.length; i++) {
            const bug = bugs[i];
            const dist = Math.hypot(bug.x - e.clientX, bug.y - e.clientY);
            if (dist < 40) {
                bug.deadTimer = 150;
            }
        }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[1] opacity-30 select-none"
    />
  );
};

export default BugBackground;
