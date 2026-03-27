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
      {/* ── DESKTOP (lg+) ──────────────────────────────────────── */}
      <section
        className="relative hidden lg:block"
        style={{
          height: '100vh',
          minHeight: '800px',
          background: 'linear-gradient(160deg, #E00505 60%, #F9F9F9 60.1%)',
        }}
      >
        {/* Texte — aligné sur le container navbar */}
        <div className="container h-full flex items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col justify-center gap-3 w-[52%]"
          >
            <h1
              className="font-karst font-bold text-white uppercase leading-none"
              style={{
                fontSize: 'clamp(48px, 5.5vw, 80px)',
                letterSpacing: '-3px',
              }}
            >
              ENVOYEZ. RECEVEZ.<br />
              EN TOUTE SÉCURITÉ.
            </h1>

            <p className="font-karst font-light text-white/90 text-base leading-relaxed max-w-110">
              La plateforme de transfert de fonds nouvelle génération pour
              l&apos;Afrique et l&apos;Europe. Rapide, transparent et ultra-sécurisé.
            </p>

            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-center"
            >
              <button
                type="button"
                className="font-karst font-bold text-brand-red uppercase tracking-wider text-sm bg-white rounded-pill px-7 py-4 border-none cursor-pointer"
                style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              >
                Télécharger l&apos;app
              </button>
              <button
                type="button"
                className="font-karst font-bold text-white uppercase tracking-wider text-sm bg-transparent rounded-pill px-7 py-3.5 cursor-pointer"
                style={{ border: '2px solid rgba(255,255,255,0.7)' }}
              >
                Nos services
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image — absolute sur toute la moitié droite, grande sans contrainte */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          className="absolute -top-60 -bottom-24 right-40 w-[52%] flex items-center justify-center pointer-events-none"
        >
          <div
            className="relative shrink-0"
            style={{
              width: '720px',
              height: '820px',
              transform: 'rotate(12deg) translateX(60px) translateY(10px)',
            }}
          >
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              className="object-contain pointer-events-none mt-15"
              priority
            />
          </div>
        </motion.div>

        {/* Éléments décoratifs */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none bg-white/5"
          style={{
            left: '-151px',
            top: '-119px',
            width: '526px',
            height: '678px',
            transform: 'rotate(-15deg)',
          }}
        />
      </section>

      {/* ── MOBILE (< lg) ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col lg:hidden min-h-screen"
        style={{
          background: 'linear-gradient(180deg, #E00505 65%, #F9F9F9 65.1%)',
        }}
      >
        <div className="pt-24 px-6 pb-8 flex flex-col gap-6">
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="font-karst font-bold text-white uppercase leading-tight"
            style={{ fontSize: 'clamp(40px, 10vw, 56px)', letterSpacing: '-2px' }}
          >
            ENVOYEZ. RECEVEZ.<br />
            EN TOUTE SÉCURITÉ.
          </motion.h1>

          <p className="font-karst font-light text-white/90 text-sm leading-relaxed">
            La plateforme de transfert de fonds nouvelle génération pour
            l&apos;Afrique et l&apos;Europe. Rapide, transparent et ultra-sécurisé.
          </p>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="font-karst font-bold text-brand-red uppercase tracking-wider text-sm bg-white rounded-pill px-6 py-4 border-none w-full cursor-pointer"
            >
              Télécharger l&apos;app
            </button>
            <button
              type="button"
              className="font-karst font-bold text-white uppercase tracking-wider text-sm bg-transparent rounded-pill px-6 py-3.5 w-full cursor-pointer"
              style={{ border: '2px solid rgba(255,255,255,0.7)' }}
            >
              Nos services
            </button>
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <div
            className="relative"
            style={{
              width: '260px',
              height: '320px',
              transform: 'rotate(12deg)',
            }}
          >
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
