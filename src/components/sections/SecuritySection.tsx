/**
 * @section SecuritySection
 * @description Sécurité bancaire — fond noir, 4 blocs
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:112
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, staggerContainer, scaleIn } from '@/lib/animations';

const SECURITY_BLOCKS = [
  { icon: '🔐', title: 'Authentification', description: 'Protection biométrique multi-facteurs pour chaque transaction.' },
  { icon: '🔒', title: 'Chiffrement', description: 'Protocoles SSL/TLS 256-bits de niveau militaire.' },
  { icon: '🪪', title: 'KYC Avancé', description: "Vérification d'identité en temps réel pour lutter contre la fraude." },
  { icon: '📡', title: 'Audit Constant', description: 'Surveillance proactive 24/7 de toutes les activités suspectes.' },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

function SecurityBlock({ block }: { block: typeof SECURITY_BLOCKS[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={scaleIn}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
        borderLeft: '4px solid #0606EF',
        borderRadius: '16px',
        padding: '32px 36px',
        height: '184px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 200ms',
      }}
    >
      <span style={{ fontSize: '24px', position: 'absolute', top: '28px', left: '36px' }} aria-hidden="true">
        {block.icon}
      </span>
      <h3 style={{ fontFamily: 'var(--font-karst)', fontWeight: 700, fontSize: '18px', color: '#FFFFFF', marginTop: '48px', marginBottom: '8px' }}>
        {block.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-karst)', fontWeight: 300, fontSize: '12px', lineHeight: '16px', color: '#71717A', margin: 0 }}>
        {block.description}
      </p>
    </motion.div>
  );
}

export default function SecuritySection() {
  return (
    <section id="security" style={{ background: '#09090B', padding: '96px 0' }}>
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
        className="security-layout"
      >
        {/* Colonne gauche */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '72px',
              lineHeight: '72px',
              letterSpacing: '-3.6px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              whiteSpace: 'pre-line',
            }}
          >
            {`SÉCURITÉ\nBANCAIRE.`}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: '28px',
              color: '#A1A1AA',
              maxWidth: '448px',
              marginTop: '32px',
            }}
          >
            Nous appliquons les standards de sécurité les plus stricts pour protéger chaque centime de vos transferts.
          </p>
          <button
            type="button"
            style={{
              marginTop: '32px',
              background: '#0606EF',
              color: '#FFFFFF',
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              borderRadius: '9999px',
              padding: '16px 32px',
              border: 'none',
              cursor: 'pointer',
              transition: 'filter 200ms, transform 150ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            NOTRE CONFORMITÉ
          </button>
        </motion.div>

        {/* Colonne droite */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
        >
          {SECURITY_BLOCKS.map((block) => (
            <SecurityBlock key={block.title} block={block} />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .security-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
