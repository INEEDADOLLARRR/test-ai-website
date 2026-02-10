import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Bot, CalendarClock, ShieldCheck, BarChart3, Users, Zap } from 'lucide-react';

const features = [
  {
    title: "Autonomous Booking Agent",
    description: "AI that answers calls, texts, and emails 24/7. It qualifies patients and books them directly into your PMS.",
    icon: <Bot className="h-6 w-6 text-blue-400" />,
    stat: "98% Response Rate"
  },
  {
    title: "Reactivation Engine",
    description: "Automatically identify and contact inactive patients with personalized offers to fill schedule gaps.",
    icon: <Users className="h-6 w-6 text-purple-400" />,
    stat: "+30% Retention"
  },
  {
    title: "Insurance Verification",
    description: "Real-time eligibility checks before the patient arrives. No more surprise billing issues.",
    icon: <ShieldCheck className="h-6 w-6 text-green-400" />,
    stat: "Zero Errors"
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section className="relative bg-background py-24 sm:py-32 border-b border-white/5">
      {/* Baseten Style Dotted Lines - Vertical */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:flex justify-between pointer-events-none px-6">
        <div className="h-full w-px border-r border-dotted border-white/10" />
        <div className="h-full w-px border-r border-dotted border-white/10" />
        <div className="h-full w-px border-r border-dotted border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Inference is <br/> 
                <span className="text-gray-500">everything.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Your front desk is overwhelmed. Our systems aren't. 
                Experience the fastest model runtimes for patient communication, 
                cross-channel high availability, and seamless PMS integration.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <span>Instant implementation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span>Real-time ROI dashboard</span>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-dotted border-white/10">
                 <p className="text-xs font-mono text-secondary mb-2">OPERATING METRICS</p>
                 <div className="text-5xl font-mono text-white tracking-tighter">
                   $2.4M<span className="text-lg text-gray-600 ml-1">/mo</span>
                 </div>
                 <p className="text-sm text-gray-500 mt-1">generated for partner clinics</p>
              </div>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
             {features.map((feature, idx) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className={idx === 2 ? "md:col-span-2" : ""}
               >
                 <SpotlightCard className="h-full p-8 flex flex-col justify-between group">
                    <div>
                      <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-white/5 p-3 border border-white/10 group-hover:border-white/20 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Impact</span>
                      <span className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full">
                        {feature.stat}
                      </span>
                    </div>
                 </SpotlightCard>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};