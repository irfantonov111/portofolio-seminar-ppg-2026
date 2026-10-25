import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: any }) => (
  <div className="mb-8 sm:mb-12 text-center px-2">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center justify-center p-3 mb-3 sm:mb-4 rounded-2xl bg-brand-primary/10 shadow-sm"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
    </motion.div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 font-serif tracking-tight">{title}</h2>
    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
  </div>
);
