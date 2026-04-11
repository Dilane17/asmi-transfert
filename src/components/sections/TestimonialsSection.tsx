/**
 * @section TestimonialsSection
 * @description Témoignages clients — 3 avis
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:146
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const TESTIMONIALS = [
  {
    quote:
      "J\u2019avais l\u2019habitude d\u2019envoyer mes demandes par WhatsApp \u2014 je ne savais jamais o\u00f9 en \u00e9tait mon transfert. Avec ASMI Transfert, je suis notifi\u00e9 \u00e0 chaque \u00e9tape. C\u2019est rassurant.",
    name: 'Fatou K.',
    role: 'Cliente, Cotonou',
    stars: 5,
    borderClass: 'border-t-4 border-brand-red',
    starClass: 'text-brand-red',
    quoteClass: 'text-brand-red',
    offsetClass: '',
  },
  {
    quote:
      'Mon retrait RIA a \u00e9t\u00e9 trait\u00e9 en moins d\u2019une heure. L\u2019op\u00e9rateur a tout v\u00e9rifi\u00e9 et j\u2019ai re\u00e7u mon argent sur Mobile Money directement. Je recommande \u00e0 toute ma famille.',
    name: 'Moussa D.',
    role: 'Client, Porto-Novo',
    stars: 5,
    borderClass: 'border-t-4 border-brand-blue',
    starClass: 'text-brand-blue',
    quoteClass: 'text-brand-blue',
    offsetClass: 'md:-mt-4',
  },
  {
    quote:
      'La v\u00e9rification KYC m\u2019a pris 5 minutes, une seule fois. Depuis, tous mes transferts MoneyGram sont trait\u00e9s sans friction. Une vraie diff\u00e9rence avec avant.',
    name: 'A\u00efcha S.',
    role: 'Cliente, Parakou',
    stars: 5,
    borderClass: 'border-t-4 border-brand-red',
    starClass: 'text-brand-red',
    quoteClass: 'text-brand-red',
    offsetClass: '',
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F7F7] section-padding">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center mb-16"
        >
          <p className="font-karst font-bold text-xs uppercase tracking-widest text-brand-gray-text mb-4">
            <span className="text-brand-red mr-2" aria-hidden="true">■</span>
            ILS NOUS FONT CONFIANCE
          </p>
          <h2 className="section-title">Ce que disent nos clients</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              className={`bg-white shadow-sm p-8 sm:p-10 relative ${t.borderClass} ${t.offsetClass}`}
            >
              {/* Guillemet décoratif */}
              <span
                aria-hidden="true"
                className={`block font-karst font-black text-6xl leading-none select-none mb-2 ${t.quoteClass}`}
              >
                &ldquo;
              </span>

              {/* Étoiles */}
              <div className="mb-4" role="img" aria-label={`Note : ${t.stars} étoiles sur 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className={`text-sm ${t.starClass}`} aria-hidden="true">★</span>
                ))}
              </div>

              <p className="font-karst font-light text-sm leading-6 text-brand-text-body mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="font-karst font-bold text-sm text-brand-text-dark m-0">
                  {t.name}
                </p>
                <p className="font-karst font-light text-xs text-brand-gray-text m-0 mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
