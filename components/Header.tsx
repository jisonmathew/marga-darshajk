
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 glass-panel border-b border-cyan-500/20">
      <div className="flex items-center gap-4 group cursor-pointer">
        {/* Holographic Orb Container */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all" />
          <div className="relative w-10 h-10 rounded-full border-2 border-cyan-400/50 flex items-center justify-center animate-[spin_10s_linear_infinite] overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <img 
              src="https://images.unsplash.com/photo-1599305090598-fe179d501227?w=100&h=100&fit=crop" 
              alt="Logo" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          {/* Orbital Ring */}
          <div className="absolute inset-0 border border-cyan-400/30 rounded-full scale-125 animate-pulse" />
        </div>
        
        <div className="flex flex-col">
          <h1 className="font-futuristic text-lg font-bold tracking-widest text-cyan-400 leading-tight">
            SRI CHAITANYA GLOBAL VISTA
          </h1>
          <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-500/70 font-medium">
            The New Generation School
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {['System Status: Online', 'Network: Secure', 'User: Authorized'].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-cyan-300/60 font-semibold">{item}</span>
          </div>
        ))}
      </nav>

      <button className="px-6 py-2 glass-panel border border-cyan-400/30 rounded-none font-futuristic text-xs tracking-widest hover:bg-cyan-400/20 transition-all group overflow-hidden relative">
        <span className="relative z-10">LOGIN SYSTEM</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </button>
    </header>
  );
};

export default Header;
