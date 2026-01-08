
import React, { useRef } from 'react';
import { Brain, Waypoints, IdCard, Satellite, ChevronRight } from 'lucide-react';

const HUBS = [
  {
    id: 'vision',
    name: 'Vision Hub',
    label: 'Career Dreamer',
    description: 'Explore the infinite horizons of professional possibilities using neural matching.',
    icon: <Brain size={32} />,
    url: 'https://grow.google/career-dreamer/home/',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'action',
    name: 'Action Hub',
    label: 'Skill-Bridge',
    description: 'Construct the bridges to your future through advanced micro-internships.',
    icon: <Waypoints size={32} />,
    url: 'https://easyshiksha.com/online_courses/internship',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'prep',
    name: 'Prep Hub',
    label: 'AI Resume',
    description: 'Synthesize your professional identity into a digital-optimized neural ID.',
    icon: <IdCard size={32} />,
    url: 'https://resume.io/',
    color: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    id: 'success',
    name: 'Success Hub',
    label: 'Job Alerts',
    description: 'Monitor global satellite transmissions for your next career synchronization.',
    icon: <Satellite size={32} />,
    url: 'https://www.freejobalert.com/',
    color: 'from-purple-500/20 to-cyan-500/20'
  }
];

const HubSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-500/50 font-bold">Portal Matrix</span>
          <h3 className="font-futuristic text-2xl text-white">THE TIME-LOOP INTERFACE</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 glass-panel flex items-center justify-center hover:bg-cyan-500/20 transition-all text-cyan-400"
          >
            <ChevronRight className="rotate-180" size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 glass-panel flex items-center justify-center hover:bg-cyan-500/20 transition-all text-cyan-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Slider Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-[10%] no-scrollbar"
        >
          {HUBS.map((hub) => (
            <a 
              key={hub.id}
              href={hub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[320px] glass-panel group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hub.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="p-8 space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 glass-panel border-cyan-400/30 text-cyan-400 rounded-xl group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                    {hub.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-cyan-500/40 font-bold">Active Portal</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-futuristic text-xl text-white group-hover:text-cyan-400 transition-colors">{hub.name}</h4>
                  <div className="inline-block px-2 py-0.5 text-[10px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 tracking-widest uppercase">
                    [{hub.label}]
                  </div>
                </div>

                <p className="text-sm text-cyan-100/60 font-light leading-relaxed">
                  {hub.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest group-hover:gap-4 transition-all uppercase">
                  INITIALIZE UPLINK <ChevronRight size={14} />
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="w-full h-1 bg-cyan-400/50 animate-[scan_3s_linear_infinite]" />
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          from { top: -10%; }
          to { top: 110%; }
        }
      `}</style>
    </div>
  );
};

export default HubSlider;
