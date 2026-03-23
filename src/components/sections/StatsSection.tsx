/**
 * @section StatsSection
 * @description Bande de statistiques clés sur fond blanc
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:261
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STATS = [
  { value: '500K+', label: 'Utilisateurs actifs', hasStarIcon: false },
  { value: '10M+', label: 'Transactions\nréussies', hasStarIcon: false },
  { value: '200+', label: 'Points de retrait en\nAfrique', hasStarIcon: false },
  { value: '4.8/5', label: 'Note moyenne sur\nles stores', hasStarIcon: true },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function StatsSection() {
  return (
    <section style={{ background: '#FFFFFF', borderBottom: '1px solid #F4F4F5' }}>
      {/* Desktop */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="hidden md:grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 40px 0',
          gridTemplateColumns: 'repeat(4, 1fr)',
          height: '305px',
        }}
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.value}
            variants={fadeInUp}
            style={{
              padding: '0 48px',
              borderRight: index < STATS.length - 1 ? '1px solid #F4F4F5' : 'none',
            }}
          >
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '60px',
                  lineHeight: '60px',
                  color: '#E00505',
                  display: 'block',
                }}
              >
                {stat.value}
              </span>
              {stat.hasStarIcon && (
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', top: 0, right: '-24px', fontSize: '20px', color: '#E00505', lineHeight: 1 }}
                >
                  ★
                </span>
              )}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '2.1px',
                textTransform: 'uppercase',
                color: '#71717A',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile */}
      <div
        className="grid md:hidden"
        style={{ gridTemplateColumns: 'repeat(2, 1fr)', padding: '48px 24px', gap: '32px 0' }}
      >
        {STATS.map((stat, index) => (
          <div
            key={stat.value}
            style={{ padding: '0 24px', borderRight: index % 2 === 0 ? '1px solid #F4F4F5' : 'none' }}
          >
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '40px',
                  lineHeight: '40px',
                  color: '#E00505',
                  display: 'block',
                }}
              >
                {stat.value}
              </span>
              {stat.hasStarIcon && (
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', top: 0, right: '-20px', fontSize: '16px', color: '#E00505', lineHeight: 1 }}
                >
                  ★
                </span>
              )}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: '#71717A',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
