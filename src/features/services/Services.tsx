
import React from 'react';

const SERVICES = [
  {
    title: 'Custom Web Development',
    desc: 'We build scalable, high-performance web applications using modern stacks designed for speed and long-term stability.',
    icon: '⚡'
  },
  {
    title: 'Technical Rescue & Debugging',
    desc: 'We audit broken codebases, crush critical bugs, and eliminate technical debt to restore your system\'s integrity.',
    icon: '🛠️'
  },
  {
    title: 'Performance Optimization',
    desc: 'We refactor slow applications to ensure lightning-fast load times and perfect Core Web Vitals.',
    icon: '🚀'
  },
  {
    title: 'Managed Deployment',
    desc: 'Seamless CI/CD pipeline setup and infrastructure management across Vercel, Netlify, and AWS.',
    icon: '☁️'
  },
  {
    title: 'Workflow Automation',
    desc: 'Custom scripts and automation tools designed to eliminate manual overhead and streamline your business operations.',
    icon: '🤖'
  },
  {
    title: 'AI & API Integration',
    desc: 'Connecting your platform to LLMs and third-party services to add intelligence and extended functionality.',
    icon: '🧠'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white tracking-tight uppercase mb-4">
          Our Services
        </h2>
        <div className="h-1 w-24 bg-neonCyan mx-auto shadow-[0_0_15px_rgba(0,242,234,0.6)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neonCyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,234,0.1)] hover:-translate-y-1"
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,242,234,0.4)]">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-neonCyan transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-400 font-inter leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
