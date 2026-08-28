'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden group';

  const variantStyles =
    variant === 'primary'
      ? 'bg-accent-green text-bg hover:shadow-glow-green hover:-translate-y-0.5'
      : 'bg-transparent border border-text-subtle/40 text-text hover:border-accent-green hover:text-accent-green hover:shadow-glow-green-sm hover:-translate-y-0.5';

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick, type };

  return (
    <Component
      {...props}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
    </Component>
  );
}
