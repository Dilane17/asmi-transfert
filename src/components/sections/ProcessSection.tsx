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
    iconBg: 'rgba(224, 5, 5, 0.10)',
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
    iconBg: 'rgba(224, 5, 5, 0.16)',
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
    iconBg: 'rgba(224, 5, 5, 0.20)',
    title: 'RECEVEZ',
    description: "Votre transfert est validé et les fonds sont envoyés immédiatement.",
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function ProcessSection() {
  return (
    <section id="process" style={{ background: '#FFFFFF', padding: '96px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '36px',
            letterSpacing: '-1.8px',
            textTransform: 'uppercase',
            color: '#1A1C1C',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          COMMENT ÇA MARCHE ?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            justifyItems: 'center',
          }}
          className="process-grid"
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeInUp}
              style={{
                background: '#FFFFFF',
                border: '1px solid #F4F4F5',
                borderRadius: '16px',
                padding: '41px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '9999px',
                  background: s.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '20px',
                  textTransform: 'uppercase',
                  color: '#1A1C1C',
                  marginBottom: '16px',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#71717A',
                  textAlign: 'center',
                }}
              >
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
