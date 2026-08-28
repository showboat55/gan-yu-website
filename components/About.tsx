'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Brain, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const cardIcons = {
  university: GraduationCap,
  major: Brain,
  cert: Award,
};

const cardOrder: Array<keyof typeof cardIcons> = ['university', 'major', 'cert'];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionHeading number="01" title={t('sectionTitle')} />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl font-display leading-tight mb-8 gradient-text"
            >
              {t('title')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5"
            >
              <p className="text-text leading-relaxed">{t('bioZh')}</p>
              <p className="text-text-subtle leading-relaxed">{t('bioEn')}</p>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {cardOrder.map((key, i) => {
              const Icon = cardIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <GlassCard borderColor={i === 2 ? 'orange' : 'green'}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-text-subtle text-sm mb-1">{t(`cards.${key}.label` as any)}</p>
                        <h3 className="text-xl font-display text-text mb-1">
                          {t(`cards.${key}.value` as any)}
                        </h3>
                        <p className="text-text-subtle text-sm">{t(`cards.${key}.desc` as any)}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
