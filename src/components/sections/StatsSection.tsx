/**
 * @section StatsSection
 * @description Bande de statistiques clés sur fond blanc
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:261
 */

'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-200 py-12 md:py-16"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-4"
            >
              <span className={`font-karst font-black text-4xl sm:text-5xl whitespace-nowrap leading-none mb-2 block ${stat.colorClass}`}>
                {stat.value}
              </span>
              <p className="font-karst font-bold text-xs uppercase tracking-wide text-gray-500 font-medium leading-tight text-center m-0">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
