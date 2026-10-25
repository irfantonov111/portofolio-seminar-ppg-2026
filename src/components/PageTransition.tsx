import React from 'react';
import { motion } from 'motion/react';

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="container mx-auto px-4 sm:px-6 max-w-6xl pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20"
  >
    {children}
  </motion.div>
);
