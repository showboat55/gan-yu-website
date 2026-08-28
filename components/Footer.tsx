'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-accent-green/10 z-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-text-subtle text-sm text-center md:text-left">
            {t('copyright', { year })}
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-subtle/70 text-xs hover:text-accent-green transition-colors"
          >
            {t('icp')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/showboat55"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-text-subtle/30 flex items-center justify-center text-text-subtle hover:text-accent-green hover:border-accent-green transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-9 h-9 rounded-full border border-text-subtle/30 flex items-center justify-center text-text-subtle hover:text-accent-green hover:border-accent-green transition-colors"
            aria-label={t('backToTop')}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
