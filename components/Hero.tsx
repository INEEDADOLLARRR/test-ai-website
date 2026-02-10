import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Activity, Zap } from 'lucide-react';
import { AnimatedGrid } from './ui/AnimatedGrid';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-white/5">
      <AnimatedGrid />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl w-full text-center space-y-8 z-10 relative">
        
        {/* Badge / Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-secondary hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Dental AI Systems v2.0 Live
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.1]"
        >
          Go Where <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
            Dollars Won't.
          </span>
        </motion.h1>

        {/* Sub-headline / Value Prop */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed font-light"
        >
          The future of patient acquisition is automated. 
          We deploy <span className="text-white font-medium">autonomous AI agents</span> to fill your schedule 
          while you focus on clinical excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background">
            <span className="mr-2">Start Integration</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
          </button>
          
          <button className="group inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white transition-colors hover:text-gray-300">
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Tech Stack Hints / Social Proof ticker */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="pt-16 sm:pt-24 opacity-60"
        >
          <p className="text-xs font-mono text-gray-500 mb-6 tracking-widest uppercase">Integration Partners</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
             {/* Simple text-based logos for clean look */}
             {['OpenDental', 'Dentrix', 'Eaglesoft', 'Curve Hero'].map(partner => (
               <span key={partner} className="text-lg font-bold font-sans tracking-tight text-white/80">{partner}</span>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};