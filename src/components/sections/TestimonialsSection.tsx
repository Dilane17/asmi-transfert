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
    quote: "Je transfère de l'argent à ma famille au pays chaque mois. C'est le service le plus rapide que j'ai trouvé.",
    author: 'Mariam K., Paris',
    stars: 5,
  },
  {
    quote: "L'interface est super intuitive. Même pour quelqu'un qui n'est pas tech, c'est très facile.",
    author: 'Jean-Pierre L., Lyon',
    stars: 5,
  },
  {
    quote: 'Le service client est réactif et efficace. Je me sens en totale sécurité avec ASMI.',
    author: 'Amadou T., Bruxelles',
    stars: 5,
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function TestimonialsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="section-title tracking-[-2.4px] mb-16"
        >
          ILS NOUS FONT CONFIANCE
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.author}
              variants={scaleIn}
              className="bg-brand-gray-light rounded-card p-10 relative"
            >
              {/* Guillemet décoratif */}
              <span
                aria-hidden="true"
                className="absolute -top-4 left-4 text-[96px] text-brand-blue/10 font-serif leading-none select-none"
              >
                &ldquo;
              </span>

              {/* Étoiles */}
              <div className="mb-4" role="img" aria-label={`Note : ${t.stars} étoiles sur 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-brand-red text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              <p className="font-karst font-light text-sm leading-5 text-brand-text-body mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              <p className="font-karst font-bold text-xs tracking-[0.6px] uppercase text-brand-text-dark m-0">
                — {t.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
