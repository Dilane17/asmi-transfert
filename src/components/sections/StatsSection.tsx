/**
 * @section StatsSection
 * @description Bande de statistiques clés sur fond blanc
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:261
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STATS = [
  { value: '3',     label: 'Opérateurs partenaires',    colorClass: 'text-brand-red'  },
  { value: '100%',  label: 'Transactions sécurisées',   colorClass: 'text-brand-blue' },
  { value: '< 2h',  label: 'Délai de traitement moyen', colorClass: 'text-brand-red'  },
  { value: '24/7',  label: 'Suivi en temps réel',       colorClass: 'text-brand-blue' },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-brand-gray-border">
      <div className="container">
      {/* Desktop */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="hidden md:grid grid-cols-4 pt-24 h-76.25"
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.value}
            variants={fadeInUp}
            className={`px-12 ${index < STATS.length - 1 ? 'border-r border-brand-gray-border' : ''}`}
          >
            <span className={`font-karst font-bold text-[60px] leading-[60px] block mb-3 ${stat.colorClass}`}>
              {stat.value}
            </span>
            <p className="font-karst font-bold text-sm tracking-[2.1px] uppercase text-brand-gray-text whitespace-pre-line m-0">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile */}
      <div className="grid md:hidden grid-cols-2 py-8 gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.value}
            className={`px-6 ${index % 2 === 0 ? 'border-r border-brand-gray-border' : ''}`}
          >
            <span className={`font-karst font-bold text-[40px] leading-10 block mb-2 ${stat.colorClass}`}>
              {stat.value}
            </span>
            <p className="font-karst font-bold text-xs tracking-[1.8px] uppercase text-brand-gray-text whitespace-pre-line m-0">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
