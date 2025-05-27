'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AutoFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AutoFadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.4
}: AutoFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: duration, 
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 