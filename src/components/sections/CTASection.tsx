/**
 * @section CTASection
 * @description Section téléchargement app — fond rouge
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:247
 */

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

interface CTASectionProps {
  ctaMockupImage?: string;
}

const VIEWPORT = { once: true, margin: '-100px' };

export default function CTASection({ ctaMockupImage }: CTASectionProps) {
  return (
    <section style={{ background: '#E00505', height: '528px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', height: '100%', display: 'flex', alignItems: 'center' }}>
        {/* Contenu côté gauche */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ maxWidth: '50%', position: 'relative', zIndex: 1 }}
          className="cta-content"
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
            {`TÉLÉCHARGEZ\nASMI TRANSFERT`}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: '28px',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '392px',
              marginTop: '32px',
            }}
          >
            Prenez le contrôle de vos finances. Envoyez de l&apos;argent partout, tout le temps, en un clic.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            {/* App Store */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#09090B',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 24px',
                textDecoration: 'none',
                transition: 'filter 200ms, transform 150ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
                <path d="M16.3 12.9c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.7-2.4-4.5-2.4-1.9-.2-3.7 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1.1-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.3 1.5 12.4 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1s2.4 1 4 .9c1.6-.1 2.7-1.5 3.7-3 1.2-1.7 1.6-3.4 1.7-3.5-.1 0-3.9-1.5-3.9-5.7zM13.2 3.6c.8-1 1.4-2.4 1.2-3.6-1.2.1-2.7.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.6 1.4.1 2.8-.6 3.6-1.8z" fill="#FFFFFF" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-karst)', fontWeight: 300, fontSize: '10px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.2 }}>Télécharger sur l&apos;</div>
                <div style={{ fontFamily: 'var(--font-karst)', fontWeight: 700, fontSize: '15px', color: '#FFFFFF', lineHeight: 1.2 }}>App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#09090B',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 24px',
                textDecoration: 'none',
                transition: 'filter 200ms, transform 150ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
                <path d="M1 1l10 10L1 21V1z" fill="#FFFFFF" opacity="0.8" />
                <path d="M1 1l11 6-2 2L1 1z" fill="#FFFFFF" />
                <path d="M1 21l11-6-2-2-9 8z" fill="#FFFFFF" opacity="0.6" />
                <path d="M19 11l-7-4-2 4 2 4 7-4z" fill="#FFFFFF" opacity="0.9" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-karst)', fontWeight: 300, fontSize: '10px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.2 }}>Disponible sur</div>
                <div style={{ fontFamily: 'var(--font-karst)', fontWeight: 700, fontSize: '15px', color: '#FFFFFF', lineHeight: 1.2 }}>Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Mockup côté droit */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          style={{ position: 'absolute', right: 0, bottom: 0, width: '600px', height: '600px', transform: 'rotate(13deg)', pointerEvents: 'none' }}
          className="cta-mockup"
        >
          <Image
            src={ctaMockupImage || '/images/cta-mockup.png'}
            alt="ASMI Transfert App"
            fill
            loading="lazy"
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .cta-content { max-width: 100% !important; }
          .cta-mockup { display: none; }
          section { height: auto !important; padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  );
}
