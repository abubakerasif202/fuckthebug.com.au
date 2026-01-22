
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ServiceInfo } from '../types';

const SERVICES: ServiceInfo[] = [
  {
    id: 'web',
    title: 'Web Engineering',
    desc: 'Hyper-optimized websites designed to dominate local search results and load instantly.',
    features: [
      'React/Next.js Architecture', 
      'Local SEO Dominance', 
      'High-Conversion UI/UX',
      'Mobile-First Design', 
      'Google Maps Optimization',
      'Fast Loading Speeds'
    ],
    icon: '⚡'
  },
  {
    id: 'mobile',
    title: 'Mobile Systems',
    desc: 'Custom mobile apps to engage customers and streamline your business operations.',
    features: [
      'iOS & Android Apps', 
      'Customer Loyalty Programs', 
      'Push Notifications', 
      'Inventory Tracking',
      'QR Code Integration',
      'Appointment Booking'
    ],
    icon: '📱'
  },
  {
    id: 'cloud',
    title: 'Cloud Core',
    desc: 'Scalable infrastructure ensuring 24/7 reliability for your digital assets.',
    features: [
      'Automated Backups', 
      'Cloud Hosting', 
      'Data Protection', 
      'CRM Integration', 
      'Disaster Recovery', 
      'Remote Work Setup'
    ],
    icon: '☁️'
  },
  {
    id: 'security',
    title: 'Cyber Fortress',
    desc: 'Advanced security protocols to protect your business and customer data.',
    features: [
      'Ransomware Protection', 
      'Encrypted Data', 
      'Compliance Audits', 
      'Threat Monitoring', 
      'Firewall Configuration',
      'Vulnerability Scanning'
    ],
    icon: '🔒'
  },
];

const Service3DVisual: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Simple geometric shapes based on service
    let geometry;
    let color = 0x00f0ff;
    
    if (serviceId === 'web') geometry = new THREE.IcosahedronGeometry(1.5, 1);
    else if (serviceId === 'mobile') { geometry = new THREE.BoxGeometry(1.2, 2.2, 0.2); color = 0xff00ff; }
    else if (serviceId === 'cloud') { geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16); color = 0xa855ff; }
    else { geometry = new THREE.OctahedronGeometry(1.5, 0); color = 0xff00ff; }

    const material = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.4 });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    let animationId: number;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.01;
        group.rotation.x += 0.005;
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [serviceId]);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-50" />;
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web');
  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 text-center">
        <span className="text-neonPurple font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Our Arsenal</span>
        <h3 className="text-4xl md:text-5xl font-black font-orbitron text-white">CORE SOLUTIONS</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`group relative flex-shrink-0 flex items-center p-5 rounded-xl border transition-all duration-300 text-left ${
                activeTab === s.id
                  ? 'border-neonCyan bg-neonCyan/5 text-white'
                  : 'border-white/5 text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative z-10 flex items-center w-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4 transition-all duration-300 relative ${
                      activeTab === s.id ? 'text-black' : 'bg-white/10 text-gray-500'
                  }`}>
                    {activeTab === s.id && (
                        // Clean single-element pulse animation
                        <div className="absolute inset-0 rounded-lg bg-neonCyan animate-neon-pulse"></div>
                    )}
                    <span className="relative z-10">{s.icon}</span>
                  </div>
                  <div>
                    <span className="font-orbitron font-bold text-sm tracking-widest block">{s.title.toUpperCase()}</span>
                    <span className="text-[10px] font-mono opacity-60">SYSTEM_READY</span>
                  </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col border-white/10">
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                 <span className="text-5xl">{activeService.icon}</span>
                 <h4 className="text-3xl md:text-5xl font-black font-orbitron text-white">
                    {activeService.title}
                </h4>
            </div>

            <div className="w-full h-48 md:h-64 mb-10 rounded-xl overflow-hidden border border-white/10 relative bg-black/40">
                <Service3DVisual serviceId={activeTab} />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 to-transparent"></div>
                <div className="absolute bottom-4 right-6 font-mono text-[10px] text-neonCyan tracking-widest">
                    VISUALIZING_STRUCTURAL_MATRIX...
                </div>
            </div>
            
            <p className="text-xl text-gray-400 font-inter leading-relaxed max-w-2xl mb-12 border-l-2 border-neonCyan pl-8">
              {activeService.desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeService.features.map((f, i) => (
                <div key={i} className="flex items-center p-4 rounded-lg bg-white/5 border border-white/5 hover:border-neonPurple/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-neonPurple mr-4 shadow-neonPurple"></div>
                  <span className="text-sm font-mono text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
