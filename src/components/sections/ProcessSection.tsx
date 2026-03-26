/**
 * @section ProcessSection
 * @description Comment ça marche — 3 étapes
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:75
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STEPS = [
  {
    step: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4v16M6 12l8 8 8-8" stroke="#E00505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22h20" stroke="#E00505" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    iconBg: 'bg-brand-red/10',
    title: 'TÉLÉCHARGEZ',
    description: "Créez votre compte ASMI en quelques minutes sur iOS ou Android.",
  },
  {
    step: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="#E00505" strokeWidth="2" />
        <path d="M9 9h10M9 14h10M9 19h6" stroke="#E00505" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    iconBg: 'bg-brand-red/[0.16]',
    title: 'SOUMETTEZ',
    description: "Remplissez le formulaire de transfert avec les détails du bénéficiaire.",
  },
  {
    step: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#E00505" strokeWidth="2" />
        <path d="M9 14l4 4 6-7" stroke="#E00505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: 'bg-brand-red/20',
    title: 'RECEVEZ',
    description: "Votre transfert est validé et les fonds sont envoyés immédiatement.",
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white section-padding">
      <div className="container-main">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="section-title mb-16"
        >
          COMMENT ÇA MARCHE ?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeInUp}
              className="bg-white border border-brand-gray-border rounded-card p-[41px] flex flex-col items-center text-center"
            >
              <div className={`step-icon ${s.iconBg}`}>{s.icon}</div>

              <h3 className="font-karst font-bold text-xl uppercase text-brand-text-dark mb-4">
                {s.title}
              </h3>

              <p className="font-karst font-light text-sm leading-5 text-brand-gray-text text-center">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
