'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Code2,
  Database,
  Brain,
  BookOpen,
  FileSpreadsheet,
  Globe,
  GitBranch,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const skillConfig = [
  { key: 'python', icon: Code2 },
  { key: 'ml', icon: Brain },
  { key: 'data', icon: Database },
  { key: 'aiEd', icon: BookOpen },
  { key: 'office', icon: FileSpreadsheet },
  { key: 'frontend', icon: Globe },
  { key: 'git', icon: GitBranch },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-bg-subtle/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading number="02" title={t('sectionTitle')} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-subtle mb-12 max-w-2xl"
        >
          {t('title')}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skillConfig.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group relative rounded-2xl bg-glass backdrop-blur-md border border-accent-green/10 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent-green/40 hover:shadow-glow-green hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-green-sm">
                <Icon size={28} />
              </div>
              <span className="text-text font-medium text-sm text-center">
                {t(`items.${key}` as any)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
