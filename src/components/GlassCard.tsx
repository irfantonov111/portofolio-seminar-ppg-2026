import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const GlassCard = ({ children, className = "", onClick }: GlassCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className={`glass rounded-3xl p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </motion.div>
);
