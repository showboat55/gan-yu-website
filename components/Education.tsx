'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const timelineOrder = ['university', 'certificate'] as const;

export default function Education() {
  const t = useTranslations('education');

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading number="03" title={t('sectionTitle')} />

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] origin-top"
            style={{
              background:
                'linear-gradient(180deg, var(--color-accent-green), var(--color-accent-orange))',
            }}
          />

          {timelineOrder.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`hidden md:block w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <span className="text-sm font-mono text-accent-orange">
                  {t(`items.${item}.period` as any)}
                </span>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.15,
                  type: 'spring',
                  stiffness: 300,
                }}
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-bg -translate-x-1/2 z-10 ${
                  i === 0 ? 'bg-accent-green' : 'bg-accent-orange'
                }`}
              />

              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] rounded-2xl bg-glass border border-border backdrop-blur-md p-6 transition-all duration-300 hover:border-accent-green/30 hover:-translate-y-1">
                <span className="md:hidden text-sm font-mono text-accent-orange block mb-2">
                  {t(`items.${item}.period` as any)}
                </span>
                <h3 className="text-xl font-display text-text mb-1">
                  {t(`items.${item}.title` as any)}
                </h3>
                <p className="text-accent-green text-sm font-medium mb-2">
                  {t(`items.${item}.subtitle` as any)}
                </p>
                <p className="text-text-subtle text-sm leading-relaxed">
                  {t(`items.${item}.desc` as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
