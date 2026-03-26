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
      {/* ── DESKTOP (lg+) ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden hidden lg:block h-[1128px] pt-[72px] hero-gradient-desktop"
      >
        {/* Décoratif 1 — rectangle */}
        <div
          aria-hidden="true"
          className="absolute -left-[151px] -top-[119px] w-[526px] h-[678px] bg-white/5 pointer-events-none rotate-[-15deg]"
        />

        {/* Décoratif 2 — cercle */}
        <div
          aria-hidden="true"
          className="absolute bottom-[10px] left-[22.75%] right-[52.75%] w-[256px] h-[256px] bg-white/5 rounded-pill pointer-events-none rotate-[-15deg]"
        />

        {/* Colonne gauche — texte */}
        <div className="absolute inset-0 right-[45%] flex flex-col justify-center pl-[10%] pr-8 pt-16">
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="font-karst font-bold text-[88px] leading-[92px] tracking-[-4.4px] text-white uppercase mb-8"
          >
            {`ENVOYEZ.\nRECEVEZ.\nEN TOUTE\nSÉCURITÉ.`}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.15 }}
            className="font-karst font-light text-lg leading-7 text-white/90 max-w-[420px] mb-10"
          >
            La plateforme de transfert de fonds nouvelle génération
            pour l&apos;Afrique et l&apos;Europe. Rapide, transparent
            et ultra-sécurisé.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.3 }}
            className="flex gap-4 items-center"
          >
            <button type="button" className="btn-hero-white">
              Télécharger l&apos;app
            </button>
            <button type="button" className="btn-secondary-hero">
              Nos services
            </button>
          </motion.div>
        </div>

        {/* Colonne droite — mockup */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          className="absolute right-[-60px] top-0 bottom-0 flex items-center justify-center w-[55%]"
        >
          <div
            className="relative w-[720px] h-[720px] shrink-0"
            style={{ transform: 'rotate(-11deg) translateX(40px)' }}
          >
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ── MOBILE (< lg) ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col lg:hidden min-h-screen hero-gradient-mobile"
      >
        <div className="pt-[100px] px-6 pb-10 w-full">
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="font-karst font-bold text-[56px] leading-[60px] tracking-[-2.8px] text-white uppercase whitespace-pre-line mb-6"
          >
            {`ENVOYEZ.\nRECEVEZ.\nEN TOUTE\nSÉCURITÉ.`}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.15 }}
            className="font-karst font-light text-base leading-6 text-white/90 mb-8"
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
            className="flex flex-col gap-3"
          >
            <button type="button" className="btn-hero-white w-full">
              Télécharger l&apos;app
            </button>
            <button type="button" className="btn-secondary-hero w-full">
              Nos services
            </button>
          </motion.div>
        </div>

        {/* Mockup mobile */}
        <div className="flex justify-center pb-12">
          <div className="relative w-[280px] h-[280px] rotate-[-11deg]">
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
