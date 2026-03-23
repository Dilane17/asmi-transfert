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
        className="relative overflow-hidden hidden md:block h-[1128px] pt-[72px]"
        style={{ background: 'linear-gradient(166.24deg, #E00505 55%, #F9F9F9 55.1%)' }}
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
        <div className="hero-text-col">
          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="absolute top-[65px] left-[96px] font-karst font-bold text-[96px] leading-[96px] tracking-[-4.8px] text-white uppercase whitespace-pre-line"
          >
            {`ENVOYEZ.\nRECEVEZ.\nEN TOUTE\nSÉCURITÉ.`}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.15 }}
            className="absolute top-[460px] left-[105px] font-karst font-light text-xl leading-7 text-white/90 max-w-[448px]"
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
            className="absolute top-[581px] left-[105px] flex gap-4"
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
          className="hero-image-col"
        >
          <div className="relative w-[794px] h-[794px] shrink-0 rotate-[-11deg]">
            <Image
              src={mockupImage || '/images/hero-mockup.png'}
              alt="ASMI Transfert App"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col md:hidden min-h-screen"
        style={{ background: 'linear-gradient(180deg, #E00505 60%, #F9F9F9 60.1%)' }}
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
            <button
              type="button"
              className="btn-hero-white w-full"
              style={{ width: '100%' }}
            >
              Télécharger l&apos;app
            </button>
            <button
              type="button"
              className="btn-secondary-hero w-full"
              style={{ width: '100%' }}
            >
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
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
