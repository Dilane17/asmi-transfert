/**
 * @section ServicesSection
 * @description Choix des opérateurs de transfert — 3 cartes
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:30
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const SERVICES = [
  {
    number: '01',
    title: 'WESTERN UNION',
    description: "Le leader mondial du transfert d'argent. Envoyez des fonds dans plus de 200 pays instantanément.",
  },
  {
    number: '02',
    title: 'RIA MONEY',
    description: "Transférez de l'argent avec des tarifs compétitifs et un réseau global fiable pour vos proches.",
  },
  {
    number: '03',
    title: 'MONEYGRAM',
    description: "Rapidité et simplicité pour vos envois internationaux. Recevez l'argent en quelques minutes.",
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-gray-light section-padding">
      <div className="container-main">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="section-title mb-12"
        >
          CHOISISSEZ VOTRE OPÉRATEUR DE TRANSFERT
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.number} variants={scaleIn} className="card">
              {/* Numéro filigrane */}
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-4 font-karst font-bold text-[96px] text-brand-gray-light pointer-events-none select-none leading-none"
              >
                {service.number}
              </span>

              <h3 className="font-karst font-bold text-2xl leading-8 text-brand-text-dark mb-3.75">
                {service.title}
              </h3>

              <p className="font-karst font-light text-sm leading-[22.75px] text-brand-gray-text mb-4">
                {service.description}
              </p>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-karst font-bold text-xs tracking-[1.2px] uppercase text-brand-blue flex items-center gap-2 no-underline transition-opacity duration-200 hover:opacity-80"
              >
                EN SAVOIR PLUS
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="#0606EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
