/**
 * @section HeroSection
 * @description Section hero principale avec titre, CTA et mockup smartphone oblique
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:4
 */

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

interface HeroSectionProps {
  mockupImage?: string;
}

const VIEWPORT = { once: true, margin: '-100px' };

export default function HeroSection({ mockupImage }: HeroSectionProps) {
  return (
    <>
      {/* ── DESKTOP ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden hidden md:block"
        style={{
          height: '1128px',
          background: 'linear-gradient(166.24deg, #E00505 55%, #F9F9F9 55.1%)',
          paddingTop: '72px',
        }}
      >
        {/* Décoratif 1 */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-151px',
            top: '-119px',
            width: '526px',
            height: '678px',
            background: 'rgba(255,255,255,0.05)',
            transform: 'rotate(-15deg)',
            pointerEvents: 'none',
          }}
        />

        {/* Décoratif 2 */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '22.75%',
            right: '52.75%',
            width: '256px',
            height: '256px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '9999px',
            transform: 'rotate(-15deg)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Colonne gauche ─────────────────────────────────────────── */}
        <div style={{ position: 'absolute', inset: '0 45% 0 0', paddingLeft: '96px' }}>
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              position: 'absolute',
              top: '65px',
              left: '96px',
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '96px',
              lineHeight: '96px',
              letterSpacing: '-4.8px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              whiteSpace: 'pre-line',
            }}
          >
            {`ENVOYEZ.\nRECEVEZ.\nEN TOUTE\nSÉCURITÉ.`}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.15 }}
            style={{
              position: 'absolute',
              top: '460px',
              left: '105px',
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '20px',
              lineHeight: '28px',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '448px',
            }}
          >
            La plateforme de transfert de fonds nouvelle génération pour l&apos;Afrique et
            l&apos;Europe. Rapide, transparent et ultra-sécurisé.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '581px',
              left: '105px',
              display: 'flex',
              gap: '16px',
            }}
          >
            <button
              type="button"
              style={{
                width: '246px',
                height: '56px',
                background: '#FFFFFF',
                color: '#E00505',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                padding: '18px 40px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
                transition: 'transform 150ms, filter 150ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.filter = 'brightness(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Télécharger l&apos;app
            </button>

            <button
              type="button"
              style={{
                width: '203px',
                height: '56px',
                background: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                padding: '18px 40px',
                borderRadius: '12px',
                border: '2px solid rgba(255,255,255,0.4)',
                backdropFilter: 'blur(2px)',
                cursor: 'pointer',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Nos services
            </button>
          </motion.div>
        </div>

        {/* ── Colonne droite — mockup ────────────────────────────────── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          style={{
            position: 'absolute',
            left: '426px',
            top: '-16px',
            width: '930px',
            height: '930px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(-11deg)', flexShrink: 0, position: 'relative', width: '794px', height: '794px' }}>
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              style={{ objectFit: 'cover', pointerEvents: 'none' }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col md:hidden"
        style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #E00505 60%, #F9F9F9 60.1%)' }}
      >
        <div style={{ padding: '100px 24px 40px', width: '100%' }}>
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '56px',
              lineHeight: '60px',
              letterSpacing: '-2.8px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              whiteSpace: 'pre-line',
              marginBottom: '24px',
            }}
          >
            {`ENVOYEZ.\nRECEVEZ.\nEN TOUTE\nSÉCURITÉ.`}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '24px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
            }}
          >
            La plateforme de transfert de fonds nouvelle génération pour l&apos;Afrique et
            l&apos;Europe. Rapide, transparent et ultra-sécurisé.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <button
              type="button"
              style={{
                width: '100%',
                height: '56px',
                background: '#FFFFFF',
                color: '#E00505',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
              }}
            >
              Télécharger l&apos;app
            </button>
            <button
              type="button"
              style={{
                width: '100%',
                height: '56px',
                background: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                borderRadius: '12px',
                border: '2px solid rgba(255,255,255,0.4)',
                backdropFilter: 'blur(2px)',
                cursor: 'pointer',
              }}
            >
              Nos services
            </button>
          </motion.div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '48px' }}>
          <div style={{ transform: 'rotate(-11deg)', position: 'relative', width: '280px', height: '280px' }}>
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              style={{ objectFit: 'cover', pointerEvents: 'none' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
