import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Proof } from './components/Proof';
import { RevenueCalculator } from './components/RevenueCalculator';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom element wrapper to avoid global JSX type conflicts
  const ConvaiWidget = 'elevenlabs-convai' as any;

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-white/20">
      
      {/* Global Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.05), transparent 80%)`
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-lg">D</div>
             <span className="font-bold text-xl tracking-tight">DentAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="text-sm font-medium text-black bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
            Get Access
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <ValueProp />
        <Proof />
        <RevenueCalculator />
        <CTA />
      </main>

      <Footer />
      <ConvaiWidget agent-id="agent_8201kh1hcxb1etj9pe6380s5dqwp"></ConvaiWidget>
    </div>
  );
}

export default App;