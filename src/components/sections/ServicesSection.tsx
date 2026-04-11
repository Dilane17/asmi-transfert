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
    title: 'Western Union',
    description:
      "Envoyez ou retirez un transfert Western Union en toute simplicité. Renseignez votre numéro de contrôle, notre opérateur vérifie et exécute le décaissement vers votre Mobile Money.",
    linkColorClass: 'text-brand-red',
  },
  {
    number: '02',
    title: 'RIA Money Transfer',
    description:
      "Accédez au réseau RIA pour vos transferts internationaux. Soumettez votre demande en quelques secondes, suivez son statut en temps réel.",
    linkColorClass: 'text-brand-blue',
  },
  {
    number: '03',
    title: 'MoneyGram',
    description:
      "Retirez ou envoyez de l'argent via MoneyGram avec une traçabilité complète. Chaque étape confirmée par notification jusqu'au décaissement.",
    linkColorClass: 'text-brand-red',
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-gray-light section-padding">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12 text-center"
        >
          <p className="font-karst font-bold text-xs uppercase tracking-widest text-brand-gray-text mb-4">
            <span className="text-brand-red mr-2" aria-hidden="true">■</span>
            NOS SERVICES
          </p>

          <h2 className="section-title">
            Choisissez votre{' '}
            <span className="text-brand-red">opérateur</span>{' '}
            de transfert
          </h2>

          <p className="font-karst font-light text-brand-gray-text text-base mt-4 max-w-md mx-auto">
            Soumettez votre demande depuis l&apos;app, notre équipe s&apos;occupe du reste.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className={`font-karst font-bold text-xs tracking-[1.2px] uppercase flex items-center gap-2 no-underline transition-opacity duration-200 hover:opacity-80 ${service.linkColorClass}`}
              >
                En savoir plus →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
