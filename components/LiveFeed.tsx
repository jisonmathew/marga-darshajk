
import React from 'react';

const OPPORTUNITIES = [
  "NEURAL INTERFACE DESIGNER @ TOKYO QUANTUM LABS",
  "SPACE-TIME ENGINEER @ MARS BASE ALPHA",
  "CYBERNETIC ETHICS OFFICER @ GENEVA GLOBAL",
  "SYNTHETIC BIOLOGIST @ NEO-BERLIN",
  "HOLOGRAPHIC ARCHITECT @ DUBAI VIRTUAL DISTRICT",
  "QUANTUM DATA SCIENTIST @ SINGAPORE SYSTEMS",
  "AI GUARDIAN @ ANTARCTIC RESEARCH CORE"
];

const LiveFeed: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 glass-panel border-t border-cyan-500/20 py-2 overflow-hidden h-10">
      <div className="flex items-center gap-4 h-full">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-cyan-500/20 bg-cyan-900/20">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-cyan-300 tracking-[0.2em] uppercase">LIVE TRANSIMISSION</span>
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...OPPORTUNITIES, ...OPPORTUNITIES].map((op, idx) => (
              <span key={idx} className="text-xs font-medium tracking-widest text-cyan-400/70 hover:text-cyan-300 cursor-default transition-colors">
                <span className="text-cyan-500/30 mr-4">>>></span>
                {op}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex-shrink-0 px-4 border-l border-cyan-500/20 text-[10px] font-mono text-cyan-500/60">
          TIME_STAMP: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
};

export default LiveFeed;
