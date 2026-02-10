import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The progress tracker is fantastic. It's motivating to see how much we've improved over time. The AI has a great mix of common sense and technical precision.",
    author: "Dr. Sarah Chen",
    role: "Chen Family Dentistry",
    metric: "+45 New Patients/mo"
  },
  {
    quote: "We went from missing 30% of calls to answering 100% of them instantly. The ROI was immediate. It feels like magic, but it's just great engineering.",
    author: "Dr. James Wilson",
    role: "Wilson Orthodontics",
    metric: "2.5x Revenue Growth"
  },
  {
    quote: "Implementation took less than a week. The system integrates perfectly with Dentrix. I can finally focus on surgery instead of admin work.",
    author: "Dr. Emily Davis",
    role: "Davis Oral Surgery",
    metric: "15hrs Admin Saved/wk"
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-background overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-mono text-sm tracking-wider uppercase"
          >
            Trusted by Leaders
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-4 text-4xl font-bold text-white sm:text-5xl"
          >
            Proof in the numbers.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
              <div className="relative h-full bg-surface border border-white/10 rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <Quote className="h-8 w-8 text-white/20 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{t.author}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">Result</span>
                    <span className="text-sm font-mono text-accent">{t.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};