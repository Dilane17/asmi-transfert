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
    <section className="bg-brand-red relative overflow-hidden h-auto md:h-[528px] py-16 md:py-0">
      <div className="container h-full flex items-center">

        {/* Contenu gauche */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="max-w-full md:max-w-[50%] relative z-10"
        >
          <h2 className="font-karst font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[72px] tracking-[-2.4px] md:tracking-[-3.6px] uppercase text-white whitespace-pre-line">
            {`TÉLÉCHARGEZ\nASMI TRANSFERT`}
          </h2>

          <p className="font-karst font-light text-lg leading-7 text-white/80 max-w-[392px] mt-8">
            Prenez le contrôle de vos finances. Envoyez de l&apos;argent partout, tout le temps, en un clic.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            {/* App Store */}
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Télécharger ASMI Transfert sur l'App Store" className="btn-store">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
                <path d="M16.3 12.9c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.7-2.4-4.5-2.4-1.9-.2-3.7 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1.1-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.3 1.5 12.4 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1s2.4 1 4 .9c1.6-.1 2.7-1.5 3.7-3 1.2-1.7 1.6-3.4 1.7-3.5-.1 0-3.9-1.5-3.9-5.7zM13.2 3.6c.8-1 1.4-2.4 1.2-3.6-1.2.1-2.7.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.6 1.4.1 2.8-.6 3.6-1.8z" fill="#FFFFFF" />
              </svg>
              <div>
                <div className="font-karst font-light text-[10px] text-white/70 leading-[1.2]">Télécharger sur l&apos;</div>
                <div className="font-karst font-bold text-[15px] text-white leading-[1.2]">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Télécharger ASMI Transfert sur Google Play" className="btn-store">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
                <path d="M1 1l10 10L1 21V1z" fill="#FFFFFF" opacity="0.8" />
                <path d="M1 1l11 6-2 2L1 1z" fill="#FFFFFF" />
                <path d="M1 21l11-6-2-2-9 8z" fill="#FFFFFF" opacity="0.6" />
                <path d="M19 11l-7-4-2 4 2 4 7-4z" fill="#FFFFFF" opacity="0.9" />
              </svg>
              <div>
                <div className="font-karst font-light text-[10px] text-white/70 leading-[1.2]">Disponible sur</div>
                <div className="font-karst font-bold text-[15px] text-white leading-[1.2]">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Mockup droit */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          className="hidden md:block absolute right-18 bottom-0 top-8 w-[560px] pointer-events-none rotate-1"
        >
          <Image
            src={ctaMockupImage || '/images/cta-mockup.png'}
            alt="ASMI Transfert App"
            fill
            loading="lazy"
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}
