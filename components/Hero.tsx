
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'MARGDARSHAK: ACTIVATE YOUR FUTURE';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-10">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="relative z-10 space-y-4">
        <h2 className="font-futuristic text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          {text}
          <span className="animate-pulse inline-block w-1 h-12 bg-cyan-400 ml-2" />
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light tracking-widest text-cyan-100/70 uppercase">
          Neural-Synchronized Career Navigation for the 22nd Century
        </p>
        
        <div className="flex justify-center gap-12 pt-8">
          {[
            { label: 'Latency', value: '2ms' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Sync', value: 'Active' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[10px] uppercase text-cyan-500/50 mb-1">{stat.label}</span>
              <span className="font-futuristic text-sm text-cyan-300">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
