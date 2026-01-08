
import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
}

const HolographicOrb: React.FC = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* Glow effect surrounding the orb */}
      <div className="absolute -inset-2 bg-cyan-400/30 rounded-full blur-xl group-hover:bg-cyan-400/50 transition-all duration-1000 animate-pulse"></div>
      
      {/* The Orb Container */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-slate-900 flex items-center justify-center">
        {/* Rotating Texture Layer */}
        <div className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20"></div>
          <img 
            src="https://api.dicebear.com/7.x/initials/svg?seed=SC&backgroundColor=00a99d" 
            alt="Texture" 
            className="w-full h-full opacity-40 scale-150 rotate-45"
          />
        </div>

        {/* Static Central Emblem (Holographic look) */}
        <div className="relative z-10 w-10 h-10 flex flex-col items-center justify-center">
           <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/initials/svg?seed=Vista&backgroundColor=ed1c24" 
                alt="Emblem" 
                className="w-6 h-6 animate-pulse" 
              />
           </div>
           <div className="absolute -bottom-1 flex justify-center gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-1 h-1 rounded-full ${['bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-red-400'][i-1]}`}></div>
              ))}
           </div>
        </div>

        {/* Refraction & Shine Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const navItems = [
    { label: 'Hubs', id: 'hubs' },
    { label: 'About Us', id: 'about-section' },
    { label: 'Timeline', id: 'roadmap' },
    { label: 'Success', id: 'success' },
    { label: 'Resources', id: 'resources' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-white/80 backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-4 lg:px-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-6">
        <HolographicOrb />

        {/* Text Branding */}
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <h1 className="text-lg md:text-xl font-black text-[#0072bc] leading-none tracking-tight">
              Sri Chaitanya
            </h1>
            <h2 className="text-lg md:text-xl font-black text-[#ed1c24] leading-none tracking-tight">
              GLOBAL VISTA
            </h2>
          </div>
          <div className="mt-1 flex flex-col">
            <div className="bg-[#fff200] px-2 py-0.5 inline-block rounded-sm">
              <span className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-tighter">
                THE NEW GENERATION SCHOOL
              </span>
            </div>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 ml-1">
              With Futuristic Education
            </span>
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`}
            className="text-sm font-bold text-slate-600 hover:text-[#0072bc] transition-all uppercase tracking-wider hover:tracking-widest"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={onLoginClick}
          className="group relative px-6 py-2 bg-slate-900 text-white rounded-md font-black text-sm transition-all overflow-hidden uppercase tracking-widest"
        >
          <span className="relative z-10">Margdarshak Login</span>
          <div className="absolute inset-0 bg-[#0072bc] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </header>
  );
};

export default Header;
