/**
 * @section SecuritySection
 * @description Sécurité bancaire — fond navy, 4 blocs en grid 2x2
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:112
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const SECURITY_BLOCKS = [
  {
    title: 'Authentification sécurisée',
    description:
      'OTP SMS, biométrie (Face ID / empreinte) et code PIN obligatoire pour toute soumission de demande.',
    borderClass: 'border-l-brand-blue',
  },
  {
    title: 'Données chiffrées',
    description:
      'TLS 1.3 en transit, stockage sécurisé — vos informations ne sont jamais accessibles à des tiers.',
    borderClass: 'border-l-brand-red',
  },
  {
    title: 'Vérification KYC',
    description:
      'Contrôle d\u2019identité structuré (CNI, passeport) pour prévenir la fraude et garantir la conformité réglementaire.',
    borderClass: 'border-l-brand-blue',
  },
  {
    title: 'Traçabilité totale',
    description:
      'Journal d\u2019audit complet, horodaté et non modifiable — chaque action liée à son opérateur.',
    borderClass: 'border-l-brand-red',
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function SecuritySection() {
  return (
    <section id="security" className="bg-[#0A0A2E] section-padding">
      <div className="container">

        {/* En-tête */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center mb-16"
        >
          <p className="font-karst font-bold text-xs uppercase tracking-widest text-brand-blue mb-6">
            SÉCURITÉ &amp; CONFORMITÉ
          </p>
          <h2 className="font-karst font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Votre sécurité, notre priorité
          </h2>
          <p className="font-karst font-light text-lg leading-7 text-white/60 max-w-xl mx-auto">
            Chaque transaction est protégée par une architecture pensée pour
            les services financiers en Afrique de l&apos;Ouest.
          </p>
        </motion.div>

        {/* Grille 2x2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SECURITY_BLOCKS.map((block) => (
            <motion.div
              key={block.title}
              variants={scaleIn}
              className={`bg-white/5 border border-white/10 border-l-4 ${block.borderClass} p-8`}
            >
              <h3 className="font-karst font-bold text-lg text-white mb-3">
                {block.title}
              </h3>
              <p className="font-karst font-light text-sm leading-6 text-white/60 m-0">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge conformité */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="font-karst font-bold text-xs uppercase tracking-widest text-white/40 text-center mt-12"
        >
          Conforme RGPD
          <span className="text-brand-red mx-2">·</span>
          Données protégées
          <span className="text-brand-red mx-2">·</span>
          Anti-fraude
        </motion.p>

      </div>
    </section>
  );
}
