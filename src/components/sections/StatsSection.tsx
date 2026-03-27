/**
 * @section StatsSection
 * @description Bande de statistiques clés sur fond blanc
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:261
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STATS = [
  { value: '500K+', label: 'Utilisateurs actifs',          hasStarIcon: false },
  { value: '10M+',  label: 'Transactions\nréussies',        hasStarIcon: false },
  { value: '200+',  label: 'Points de retrait en\nAfrique', hasStarIcon: false },
  { value: '4.8/5', label: 'Note moyenne sur\nles stores',  hasStarIcon: true  },
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
            <div className="relative inline-block mb-3">
              <span className="stat-value">{stat.value}</span>
              {stat.hasStarIcon && (
                <span aria-hidden="true" className="absolute top-0 -right-6 text-xl text-brand-red leading-none">
                  ★
                </span>
              )}
            </div>
            <p className="stat-label">{stat.label}</p>
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
            <div className="relative inline-block mb-2">
              <span className="font-karst font-bold text-[40px] leading-10 text-brand-red block">
                {stat.value}
              </span>
              {stat.hasStarIcon && (
                <span aria-hidden="true" className="absolute top-0 -right-5 text-base text-brand-red leading-none">
                  ★
                </span>
              )}
            </div>
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
