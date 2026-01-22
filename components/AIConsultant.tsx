
import React, { useState, useRef, useEffect } from 'react';
import { generateProjectBrief, chatWithArchitect } from '../services/geminiService';
import { ProjectBrief, ChatMessage } from '../types';

const LOADING_STAGES = [
  { threshold: 15, label: "INITIATING HANDSHAKE...", hex: "0x4A6F68" },
  { threshold: 35, label: "ENCRYPTING DATA PACKETS...", hex: "0x2E4D61" },
  { threshold: 55, label: "MAPPING NEURAL VECTORS...", hex: "0x6C6173" },
  { threshold: 75, label: "SYNTHESIZING MATRIX...", hex: "0x746572" },
  { threshold: 90, label: "OPTIMIZING BLUEPRINT...", hex: "0x537973" },
  { threshold: 100, label: "DECRYPTING FINAL RESPONSE...", hex: "0x446F6E" }
];

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [brief, setBrief] = useState<ProjectBrief | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentHex, setCurrentHex] = useState('0x000000');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) {
             scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, brief, loading]);

  // Simulated Loading Progress Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 98) return prev;
          // Non-linear progress simulation
          const inc = prev < 40 ? 1.5 : prev < 70 ? 0.8 : 0.4;
          return Math.min(99, prev + inc);
        });
        // Random Hex Ticker
        setCurrentHex('0x' + Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0'));
      }, 80);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const activeStage = LOADING_STAGES.find(s => progress <= s.threshold) || LOADING_STAGES[LOADING_STAGES.length - 1];

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    try {
      if (messages.length === 0 && !brief) {
        setMessages([{ role: 'user', text: userMsg }]);
        const result = await generateProjectBrief(userMsg);
        setBrief(result);
        setMessages(prev => [...prev, { role: 'model', text: `Analysis complete. Project "${result.projectName}" structure initialized. Using ${result.techStack[0]} as core. What vector should we optimize next?` }]);
      } else {
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        const history = messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));
        const response = await chatWithArchitect(history, userMsg);
        setMessages(prev => [...prev, { role: 'model', text: response || "Data corruption detected. Retry transmission." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection severed. Secure link failed." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
         <div className="inline-block px-4 py-1 rounded-full border border-neonPurple/30 bg-neonPurple/5 text-neonPurple text-[10px] font-mono mb-4 tracking-[0.2em] animate-pulse">
             NEURAL_ARCHITECT_CORE_V4.0
         </div>
        <h3 className="text-3xl md:text-5xl font-black font-orbitron mb-4 text-white">INTELLIGENT <span className="text-neonPurple">DESIGN</span></h3>
        <p className="text-gray-400 font-inter max-w-xl mx-auto">Generate enterprise architectures and optimize your tech stack with our senior systems AI.</p>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col h-[700px] shadow-2xl relative bg-[#030014]/50 backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="bg-[#0c0a1f] p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neonPink/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neonPurple/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neonCyan/40"></div>
            </div>
            <div className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">system_uplink_active.bin</div>
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] text-green-500 font-mono font-bold">READY</span>
            </div>
        </div>

        {/* Chat History */}
        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-8 bg-black/10 font-mono text-sm relative scrollbar-thin scrollbar-thumb-neonPurple/20 scrollbar-track-transparent">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none"></div>

          {messages.length === 0 && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-6 opacity-40 z-10 relative">
              <div className="w-20 h-20 rounded-full border border-dashed border-neonPurple/40 flex items-center justify-center animate-[spin_15s_linear_infinite]">
                <span className="text-3xl opacity-50">✦</span>
              </div>
              <p className="max-w-xs font-inter text-sm">
                Describe your project idea to begin.
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`max-w-[85%] md:max-w-[70%] rounded-xl p-4 ${
                m.role === 'user' 
                ? 'bg-neonPurple/10 border border-neonPurple/20 text-gray-100' 
                : 'bg-[#121025] border border-white/10 text-gray-300 shadow-xl'
              }`}>
                <div className="text-[9px] opacity-40 mb-2 uppercase tracking-widest font-bold">
                    {m.role === 'user' ? 'Local_Terminal' : 'Gemini_Core'}
                </div>
                <div className="leading-relaxed whitespace-pre-wrap font-inter text-sm md:text-base">{m.text}</div>
              </div>
            </div>
          ))}

          {/* Project Brief Card with Animation */}
          {brief && (
            <div className="mx-2 md:mx-6 mt-6 animate-fade-in-up" ref={cardRef} style={{ animationDelay: '300ms' }}>
                <div className="relative glass-panel bg-[#0c0a1f]/95 rounded-xl border border-white/10 overflow-hidden group">
                  {/* Decorative Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,242,234,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                  
                  {/* Top Bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-neonCyan via-neonPurple to-neonCyan"></div>
                  
                  <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                          <div>
                              <div className="text-xs font-mono text-neonCyan mb-1 tracking-widest">PROJECT_BLUEPRINT</div>
                              <h4 className="text-3xl font-black font-orbitron text-white">{brief.projectName}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                              {brief.techStack.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 bg-neonPurple/10 border border-neonPurple/30 rounded text-xs text-neonPurple font-mono">
                                      {tech}
                                  </span>
                              ))}
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                              <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Core Features</h5>
                              <ul className="space-y-3">
                                  {brief.keyFeatures.map((feat, i) => (
                                      <li key={i} className="flex items-start text-sm text-gray-300">
                                          <span className="text-neonCyan mr-2">▹</span>
                                          {feat}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                          <div>
                              <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Architecture</h5>
                              <p className="text-sm text-gray-300 leading-relaxed mb-4">{brief.architecture.overview}</p>
                              
                              <div className="bg-black/40 rounded p-3 border border-white/5 mb-3">
                                  <div className="text-[10px] text-gray-500 mb-2 uppercase">Data Flow</div>
                                  <p className="text-xs font-mono text-neonCyan">{brief.architecture.dataFlow}</p>
                              </div>

                              <div className="bg-black/40 rounded p-3 border border-white/5">
                                  <div className="text-[10px] text-gray-500 mb-2 uppercase">System Protocols</div>
                                  <div className="flex flex-wrap gap-2">
                                    {brief.architecture.protocols.map((proto, i) => (
                                      <span key={i} className="text-[10px] font-mono text-neonPurple bg-neonPurple/10 border border-neonPurple/20 px-2 py-1 rounded">
                                        {proto}
                                      </span>
                                    ))}
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                          <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Microservices Matrix</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {brief.architecture.microservices.map((ms, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded bg-black/50 border border-white/10 flex items-center justify-center text-neonPurple font-bold text-xs">
                                          {i + 1}
                                      </div>
                                      <div>
                                          <div className="text-sm font-bold text-white">{ms.name}</div>
                                          <div className="text-xs text-gray-500">{ms.description}</div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  
                  <div className="bg-black/40 p-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>GENERATED_BY_GEMINI_3.0</span>
                      <button className="text-neonCyan hover:text-white transition-colors uppercase tracking-widest">Download JSON ⇩</button>
                  </div>
                </div>
            </div>
          )}

          {loading && (
             <div className="mx-2 md:mx-6 animate-pulse flex items-center gap-3 p-4 rounded-xl bg-neonPurple/5 border border-neonPurple/20">
                <div className="w-4 h-4 rounded-full border-2 border-neonPurple border-t-transparent animate-spin"></div>
                <div className="flex-1">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden w-full max-w-xs mb-1">
                        <div className="h-full bg-neonPurple transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center w-full max-w-xs">
                        <span className="text-[9px] font-mono text-neonPurple">{activeStage?.label}</span>
                        <span className="text-[9px] font-mono text-gray-600">{currentHex}</span>
                    </div>
                </div>
             </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0c0a1f] border-t border-white/10 relative z-20">
            <form onSubmit={handleConsult} className="relative">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={loading ? "PROCESSING..." : "Describe your project (e.g., 'A realtime auction platform for vintage cars')..."}
                    disabled={loading}
                    className="w-full bg-[#1a1635] text-white font-inter text-sm rounded-lg pl-4 pr-32 py-4 border border-white/10 focus:animate-border-pulse focus:outline-none focus:bg-[#231e45] transition-all placeholder:text-gray-600"
                />
                <button 
                    type="submit" 
                    disabled={loading || !input.trim()}
                    className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black font-bold font-orbitron text-xs rounded hover:bg-neonCyan transition-all disabled:opacity-50 disabled:hover:bg-white uppercase tracking-wider"
                >
                    {loading ? 'WAIT' : 'INIT'}
                </button>
            </form>
            <div className="text-[10px] text-gray-600 font-mono mt-2 text-center">
                SESSION ID: {Math.random().toString(36).substring(7).toUpperCase()} // SECURE
            </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
