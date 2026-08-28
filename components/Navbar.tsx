'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Github, Menu, X } from 'lucide-react';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = locale === 'zh' ? '甘' : 'Gan Yu';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-glass/80 backdrop-blur-xl border-b border-accent-green/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-semibold text-xl text-text hover:text-accent-green transition-colors"
          >
            {displayName}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm text-text-subtle hover:text-text transition-colors group"
              >
                {t(item.key as any)}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-accent-green group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/showboat55"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-9 h-9 rounded-full border border-text-subtle/30 items-center justify-center text-text-subtle hover:text-accent-green hover:border-accent-green transition-colors"
              aria-label={t('github')}
            >
              <Github size={18} />
            </a>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-text-subtle/30 text-text-subtle hover:text-accent-green hover:border-accent-green transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full border border-text-subtle/30 flex items-center justify-center text-text-subtle hover:text-accent-green hover:border-accent-green transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-2xl font-display text-text hover:text-accent-green transition-colors"
                  >
                    {t(item.key as any)}
                  </motion.button>
                ))}
              </nav>

              <div className="flex justify-center pb-8">
                <a
                  href="https://github.com/showboat55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-subtle hover:text-accent-green transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
