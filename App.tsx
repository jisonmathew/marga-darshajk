
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NeuralRoadmap from './components/NeuralRoadmap';
import HubSlider from './components/HubSlider';
import LiveFeed from './components/LiveFeed';
import CyberSathi from './components/CyberSathi';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create data particles
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1
        };
        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#020617] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Campus with Motion Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center grayscale brightness-[0.2] transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
          filter: 'blur(4px) brightness(0.15) contrast(1.2)'
        }}
      />

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Mouse Follower Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none w-1 h-1 bg-cyan-400 rounded-full z-50 transition-all duration-1000"
          style={{ 
            left: p.x, 
            top: p.y,
            opacity: p.opacity,
            transform: `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px) scale(0)`
          }}
        />
      ))}

      {/* Application Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex flex-col items-center pt-24 pb-32">
          <Hero />
          
          <div className="w-full max-w-7xl px-4 mt-12 mb-20">
             <NeuralRoadmap />
          </div>
          
          <div className="w-full mt-auto">
            <HubSlider />
          </div>
        </main>

        <LiveFeed />
        <CyberSathi />
      </div>
    </div>
  );
};

export default App;
