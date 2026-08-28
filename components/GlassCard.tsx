'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  borderColor?: 'green' | 'orange';
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  borderColor = 'green',
}: GlassCardProps) {
  const borderColorClass = borderColor === 'green' ? 'border-accent-green/20' : 'border-accent-orange/20';
  const hoverBorderClass = borderColor === 'green' ? 'group-hover:border-accent-green/50 group-hover:shadow-glow-green' : 'group-hover:border-accent-orange/50 group-hover:shadow-glow-orange';

  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl bg-glass backdrop-blur-md border ${borderColorClass} ${hoverBorderClass} transition-all duration-500 group overflow-hidden ${className}`}
    >
      <div className="relative h-full w-full p-6 md:p-8">
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow:
              borderColor === 'green'
                ? 'inset 0 0 40px rgba(46, 230, 168, 0.08)'
                : 'inset 0 0 40px rgba(255, 107, 53, 0.08)',
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
