'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function Contact() {
  const t = useTranslations('contact');

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-subtle/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading number="04" title={t('sectionTitle')} />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-h2 font-display text-text mb-6"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-subtle mb-10"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href={`mailto:${t('emailPrimary')}`}
                className="flex items-center gap-4 text-text hover:text-accent-green transition-colors group"
              >
                <span className="w-11 h-11 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green transition-all duration-300 group-hover:shadow-glow-green-sm">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-text-subtle text-xs mb-0.5">Email</p>
                  <span className="font-medium">{t('emailPrimary')}</span>
                </div>
              </a>

              <a
                href={`mailto:${t('emailSecondary')}`}
                className="flex items-center gap-4 text-text-subtle hover:text-accent-green transition-colors group"
              >
                <span className="w-11 h-11 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-subtle transition-all duration-300 group-hover:border-accent-green/30 group-hover:text-accent-green">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-text-subtle text-xs mb-0.5">备用邮箱</p>
                  <span className="font-medium">{t('emailSecondary')}</span>
                </div>
              </a>

              <a
                href={`https://github.com/${t('github')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-text hover:text-accent-green transition-colors group"
              >
                <span className="w-11 h-11 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-subtle transition-all duration-300 group-hover:border-accent-green/30 group-hover:text-accent-green group-hover:shadow-glow-green-sm">
                  <Github size={20} />
                </span>
                <div>
                  <p className="text-text-subtle text-xs mb-0.5">GitHub</p>
                  <span className="font-medium">@{t('github')}</span>
                </div>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-glass border border-accent-green/10 backdrop-blur-md p-8 md:p-12"
          >
            <p className="text-text-subtle text-center mb-6">{t('subtitle')}</p>
            <Button onClick={scrollToContact} className="text-base px-10 py-4">
              {t('cta')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
