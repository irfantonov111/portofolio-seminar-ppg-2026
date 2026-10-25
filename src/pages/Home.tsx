import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Target, BookOpen, Award, Compass } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { PageTransition } from '../components/PageTransition';

interface HomeProps {
  onNavigate: (tab: string) => void;
  key?: React.Key;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <PageTransition>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] sm:text-xs font-bold mb-4 sm:mb-6 tracking-widest uppercase border border-brand-primary/20">
            <Sparkles className="w-3.5 h-3.5" /> E-Portfolio Digital PPG
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.15] mb-4 sm:mb-6 text-slate-800">
            Membangun Karakter <br className="hidden sm:inline" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-teal-600 to-brand-secondary italic">
              Guru Profesional.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed text-justify">
            Refleksi perjalanan akademik dan kepenulisan pedagogis sebagai fondasi pengembangan karakter calon pendidik 
            PPG Prajabatan di Universitas Kristen Satya Wacana (UKSW).
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button 
              onClick={() => onNavigate('profil')} 
              className="px-5 sm:px-6 py-3 sm:py-3.5 bg-brand-primary text-white rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-brand-primary/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Eksplorasi Profil</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('identifikasi-diri')} 
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-slate-700 rounded-2xl font-bold text-xs sm:text-sm border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Target className="w-4 h-4 text-brand-primary" />
              <span>Identifikasi Diri</span>
            </button>
            <button 
              onClick={() => onNavigate('refleksi-ppg')} 
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-slate-700 rounded-2xl font-bold text-xs sm:text-sm border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-primary" />
              <span>Refleksi PPG</span>
            </button>
            <button 
              onClick={() => onNavigate('filosofi-pendidikan')} 
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-slate-700 rounded-2xl font-bold text-xs sm:text-sm border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-brand-primary" />
              <span>Refleksi Mata Kuliah</span>
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mt-4 md:mt-0">
          <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full -z-10"></div>
          <GlassCard className="aspect-square max-w-[320px] sm:max-w-md mx-auto p-3.5 sm:p-4 rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-500 border-brand-primary/20 shadow-2xl">
            <div className="w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden mb-3.5 relative shadow-inner">
              <img 
                src="/images/foto-formal.jpg" 
                alt="Profile Irfan Hananto" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
            <div className="flex justify-between items-center px-1 sm:px-2">
              <div>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base">Irfan Hananto</h4>
                <p className="text-[10px] sm:text-xs text-brand-primary uppercase tracking-widest font-bold">Informatics Educator &bull; PPG UKSW</p>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Target size={18} className="text-brand-primary" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageTransition>
  );
};
