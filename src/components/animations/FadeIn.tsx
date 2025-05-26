'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.4
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -350px 0px" }}
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