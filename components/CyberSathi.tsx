
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { chatWithAI } from '../services/gemini';
import { Message } from '../types';

const CyberSathi: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Neural Link established. I am Cyber-Sathi, your career navigator. How shall we synchronize your future today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithAI(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || 'Uplink failed. Please re-synchronize.' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-16 right-8 z-[60]">
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] ${isOpen ? 'bg-red-500/20 border-red-500/50 rotate-90 scale-0' : 'bg-cyan-500/20 border border-cyan-400/50 hover:scale-110 active:scale-95'}`}
      >
        <div className="relative">
          <Bot size={28} className="text-cyan-400" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
        </div>
      </button>

      {/* Chat Window */}
      <div 
        className={`absolute bottom-0 right-0 w-[350px] max-h-[500px] flex flex-col glass-panel border border-cyan-400/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-[-70px]' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-cyan-400/20 flex items-center justify-between bg-cyan-900/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 border border-cyan-400/40">
              <Bot size={18} />
            </div>
            <div>
              <h5 className="font-futuristic text-sm text-cyan-300">CYBER-SATHI AI</h5>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest text-cyan-500/60 font-bold">Uplink Active</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-cyan-500/50 hover:text-cyan-300 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 text-xs tracking-wide leading-relaxed ${m.role === 'user' ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-t-xl rounded-bl-xl' : 'glass-panel border-cyan-400/20 text-cyan-300 rounded-t-xl rounded-br-xl'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="p-3 glass-panel border-cyan-400/20 rounded-t-xl rounded-br-xl">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-cyan-400/20 bg-cyan-900/5">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Transmit prompt..."
              className="w-full bg-black/40 border border-cyan-400/30 rounded-lg px-4 py-2 text-xs text-cyan-100 focus:outline-none focus:border-cyan-400/60 placeholder:text-cyan-800 transition-all font-light tracking-widest"
            />
            <button 
              type="submit"
              disabled={isTyping || !input.trim()}
              className="absolute right-2 text-cyan-400 disabled:text-cyan-900 hover:text-cyan-200 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CyberSathi;
