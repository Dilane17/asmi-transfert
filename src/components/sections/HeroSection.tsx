/**
 * @section HeroSection
 * @description Section hero principale avec titre, CTA et mockup smartphone
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
    <section className="flex flex-col md:flex-row min-h-screen">

      {/* ── Panneau droit — bleu / image (en premier sur mobile) ── */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        transition={{ delay: 0.2 }}
        className="w-full md:w-[45%] bg-brand-blue flex items-center justify-center pt-24 pb-10 md:py-0 order-1 md:order-2 min-h-[45vw] md:min-h-screen"
      >
        <Image
          src={mockupImage || '/images/hero-mockup.png'}
          alt="ASMI Transfert App"
          width={400}
          height={800}
          className="w-40 sm:w-50 md:w-[75%] max-w-80 h-auto object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* ── Panneau gauche — rouge / texte ── */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="w-full md:w-[55%] bg-brand-red px-6 sm:px-10 md:px-16 pt-20 pb-12 md:py-24 flex flex-col justify-center order-2 md:order-1"
      >
        {/* Pill label */}
        <span className="border border-white/60 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full inline-block mb-4 md:mb-8 tracking-widest uppercase bg-white/10 w-fit font-karst font-light">
          Western Union · RIA · MoneyGram
        </span>

        {/* H1 */}
        <h1 className="font-karst font-black text-[2.8rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-none uppercase tracking-tight">
          <span className="block">ENVOYEZ.</span>
          <span className="block">RECEVEZ.</span>
          <span className="block">EN TOUTE SÉCURITÉ.</span>
        </h1>

        {/* Sous-titre */}
        <p className="font-karst font-light text-sm sm:text-base md:text-lg text-white/85 mt-4 mb-6 md:mt-6 md:mb-8 max-w-sm leading-relaxed">
          Western Union, RIA, MoneyGram — un seul canal sécurisé pour toutes
          vos demandes de transfert international.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            className="font-karst font-bold bg-white text-brand-red px-6 py-3 sm:px-8 sm:py-4 rounded-none text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all duration-200 border-2 border-white text-center cursor-pointer"
          >
            Télécharger l&apos;app
          </button>
          <button
            type="button"
            className="font-karst font-semibold border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-none text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-200 text-center cursor-pointer"
          >
            Découvrir nos services
          </button>
        </div>

        {/* Badge bas */}
        <p className="font-karst font-light text-white/70 text-xs mt-4">
          Disponible iOS &amp; Android — Gratuit
        </p>
      </motion.div>

    </section>
  );
}
