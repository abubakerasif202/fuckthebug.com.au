
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background flares */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonCyan/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
            <div>
                <span className="text-neonCyan font-mono text-[10px] tracking-[0.4em] uppercase mb-2 block">Direct Transmission</span>
                <h3 className="text-4xl md:text-5xl font-black font-orbitron text-white leading-none mb-6">ESTABLISH <span className="text-neonCyan">UPLINK</span></h3>
                <p className="text-gray-400 font-inter text-lg leading-relaxed max-w-md">
                    Skip the queue and contact our primary node directly. We're ready to debug your infrastructure.
                </p>
            </div>

            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-neonCyan group hover:bg-neonCyan/5 transition-all">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Encrypted Mail</div>
                    <a href="mailto:abubakerasif202@yahoo.com" className="text-lg md:text-xl font-orbitron font-bold text-white hover:text-neonCyan transition-colors">
                        abubakerasif202@yahoo.com
                    </a>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-neonPurple group hover:bg-neonPurple/5 transition-all">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Secure Line</div>
                    <a href="tel:0423332037" className="text-lg md:text-xl font-orbitron font-bold text-white hover:text-neonPurple transition-colors">
                        0423 332 037
                    </a>
                </div>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    NODES ACTIVE
                </span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span>AUSTRALIA (HQ)</span>
            </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 md:p-12 relative border-t border-white/10 shadow-2xl">
          <form 
            action="https://formsubmit.co/abubakerasif202@yahoo.com" 
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Enquiry from Fuckthebug.com.au" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://fuckthebug.com.au/" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-focus-within:text-neonCyan transition-colors">Your Name</label>
                <input required name="name" type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-neonCyan focus:bg-white/5 transition-all text-white font-inter" placeholder="John Doe" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-focus-within:text-neonCyan transition-colors">Business Name</label>
                <input name="business" type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-neonCyan focus:bg-white/5 transition-all text-white font-inter" placeholder="Local Business LLC" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2 group">
                <label className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-focus-within:text-neonCyan transition-colors">Email Address</label>
                <input required name="email" type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-neonCyan focus:bg-white/5 transition-all text-white font-inter" placeholder="name@company.com" />
              </div>
               <div className="space-y-2 group">
                <label className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-focus-within:text-neonCyan transition-colors">Phone Number</label>
                <input required name="phone" type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-neonCyan focus:bg-white/5 transition-all text-white font-inter" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-focus-within:text-neonCyan transition-colors">How can we help?</label>
              <textarea required name="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-neonCyan focus:bg-white/5 transition-all text-white font-inter" placeholder="I need a new website, mobile app, or security audit..."></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-white text-black font-black font-orbitron rounded-lg hover:bg-neonCyan transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_#00f2ea] hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-none tracking-widest mt-4 transform">
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
