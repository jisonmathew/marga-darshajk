
import React, { useState } from 'react';
import { Brain, Waypoints, IdCard, Satellite } from 'lucide-react';

const HUB_NODES = [
  { id: 'vision', icon: <Brain size={24} />, name: 'VISION HUB', pos: { x: 20, y: 30 }, color: '#22d3ee' },
  { id: 'action', icon: <Waypoints size={24} />, name: 'ACTION HUB', pos: { x: 45, y: 70 }, color: '#38bdf8' },
  { id: 'prep', icon: <IdCard size={24} />, name: 'PREP HUB', pos: { x: 75, y: 25 }, color: '#0ea5e9' },
  { id: 'success', icon: <Satellite size={24} />, name: 'SUCCESS HUB', pos: { x: 90, y: 65 }, color: '#67e8f9' },
];

const NeuralRoadmap: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px] glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Neural Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Connection Lines */}
        {HUB_NODES.map((node, i) => (
          HUB_NODES.slice(i + 1).map((target) => (
            <line
              key={`${node.id}-${target.id}`}
              x1={`${node.pos.x}%`}
              y1={`${node.pos.y}%`}
              x2={`${target.pos.x}%`}
              y2={`${target.pos.y}%`}
              stroke="url(#nodeGradient)"
              strokeWidth="1.5"
              className="animate-pulse"
            />
          ))
        ))}
      </svg>

      {/* Nodes */}
      {HUB_NODES.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 cursor-pointer"
          style={{ left: `${node.pos.x}%`, top: `${node.pos.y}%` }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div 
            className={`relative flex items-center justify-center w-16 h-16 rounded-full glass-panel border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500 ${hoveredNode === node.id ? 'scale-125 border-cyan-300 bg-cyan-500/20' : ''}`}
          >
             <div className="text-cyan-400 group-hover:text-white transition-colors">
               {node.icon}
             </div>
             {/* Breathing Halo */}
             <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-breathe scale-150 pointer-events-none" />
          </div>
          
          <div 
            className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-1 glass-panel border border-cyan-400/20 transition-all duration-300 ${hoveredNode === node.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <span className="font-futuristic text-xs tracking-widest text-cyan-300 whitespace-nowrap">
              {node.name}
            </span>
          </div>
        </div>
      ))}

      {/* Center Label */}
      <div className="absolute top-8 left-8 flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-cyan-500/50">Navigation Protocol</span>
        <span className="font-futuristic text-lg text-cyan-200">NEURAL CONSTELLATION MAP</span>
      </div>
    </div>
  );
};

export default NeuralRoadmap;
