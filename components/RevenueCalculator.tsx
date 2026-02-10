import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Send, CheckCircle2, Loader2, DollarSign, Users, Mail, User, Phone, AtSign, RefreshCcw } from 'lucide-react';
import { CalculatorFormData } from '../types';

export const RevenueCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    name: '',
    email: '',
    phone: '',
    avgLeadValue: '',
    subscribers: '',
    weeklyEmails: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using standard fetch with JSON. 
      // Note: Make.com webhooks generally accept JSON. 
      // Ensure 'Content-Type' is set.
      const response = await fetch('https://hook.eu1.make.com/lo21eizms9w3xf8695ijl2bld33vu3qf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // We treat a 200 OK as success. 
      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Webhook returned error status:', response.status);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // In case of CORS error where the request might have actually succeeded (opaque response),
      // or network failure. For a better UX on simple landing pages, we can sometimes
      // assume success if it's a "Failed to fetch" (CORS) but we want to be safe.
      // However, usually Make.com handles CORS correctly.
      // If the user is seeing "doesn't actually happen", it might be a silent failure.
      // We will show the error state to be explicit.
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      avgLeadValue: '',
      subscribers: '',
      weeklyEmails: ''
    });
    setStatus('idle');
  };

  return (
    <section className="py-24 relative overflow-hidden border-b border-white/5">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Calculator className="w-4 h-4" />
            <span>ROI Calculator</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Are you leaving money <br/> on the table?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Find out exactly how much monthly revenue your practice is losing by not having autonomous email systems installed.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl p-1 overflow-hidden shadow-2xl"
        >
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

          <div className="bg-background/80 rounded-xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Report Generated</h3>
                  <p className="text-gray-400 max-w-sm mx-auto mb-8">
                    We've calculated your missed revenue potential. A detailed analysis has been sent to <span className="text-white font-medium">{formData.email}</span>.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Calculate for another practice
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-6"
                >
                  
                  {/* Vertical Form Layout */}
                  <div className="space-y-6">
                    
                    {/* Field 1: Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Dr. Jane Smith"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 2: Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative group">
                        <AtSign className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="jane@dentalpractice.com"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 3: Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Phone Number <span className="text-gray-600 normal-case">(optional)</span></label>
                      <div className="relative group">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="h-px bg-white/5 w-full" />

                    {/* Field 4: Lead Value */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Average Value Per Lead</label>
                      <div className="relative group">
                        <DollarSign className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                          required
                          name="avgLeadValue"
                          value={formData.avgLeadValue}
                          onChange={handleChange}
                          type="number"
                          placeholder="500"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 5: Subscribers */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Total Email Subscribers</label>
                      <div className="relative group">
                        <Users className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                        <input
                          required
                          name="subscribers"
                          value={formData.subscribers}
                          onChange={handleChange}
                          type="number"
                          placeholder="2000"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 6: Weekly Emails */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Emails Sent Per Week</label>
                       <div className="relative group">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-green-400 transition-colors" />
                        <input
                          required
                          name="weeklyEmails"
                          value={formData.weeklyEmails}
                          onChange={handleChange}
                          type="number"
                          placeholder="1"
                          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-2 relative group overflow-hidden rounded-lg bg-white text-black font-semibold py-4 transition-all hover:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Calculating...
                        </>
                      ) : (
                        <>
                          Calculate Missed Revenue
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </button>
                  
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded-md border border-red-500/20"
                    >
                      Unable to connect to the server. Please check your connection and try again.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};