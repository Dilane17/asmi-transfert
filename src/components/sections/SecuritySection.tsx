/**
 * @section SecuritySection
 * @description Sécurité bancaire — fond noir, 4 blocs
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:112
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, staggerContainer, scaleIn } from '@/lib/animations';

const SECURITY_BLOCKS = [
  { icon: '🔐', title: 'Authentification', description: 'Protection biométrique multi-facteurs pour chaque transaction.' },
  { icon: '🔒', title: 'Chiffrement',      description: 'Protocoles SSL/TLS 256-bits de niveau militaire.' },
  { icon: '🪪', title: 'KYC Avancé',       description: "Vérification d'identité en temps réel pour lutter contre la fraude." },
  { icon: '📡', title: 'Audit Constant',   description: 'Surveillance proactive 24/7 de toutes les activités suspectes.' },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function SecuritySection() {
  return (
    <section id="security" className="bg-brand-black section-padding">
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Colonne gauche */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
        
          <h2 className="font-karst font-bold text-[72px] leading-[72px] tracking-[-3.6px] uppercase text-white whitespace-pre-line">
            {`SÉCURITÉ\nBANCAIRE.`}
          </h2>

          <p className="font-karst font-light text-lg leading-7 text-brand-text-muted max-w-[448px] mt-8">
            Nous appliquons les standards de sécurité les plus stricts pour protéger chaque centime de vos transferts.
          </p>

          <button type="button" className="btn-blue-pill mt-8">
            NOTRE CONFORMITÉ
          </button>
        </motion.div>

        {/* Colonne droite — grille 2×2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 gap-6"
        >
          {SECURITY_BLOCKS.map((block) => (
            <motion.div key={block.title} variants={scaleIn} className="security-card">
              <span className="text-2xl absolute top-7 left-9" aria-hidden="true">
                {block.icon}
              </span>
              <h3 className="font-karst font-bold text-lg text-white mt-12 mb-2">
                {block.title}
              </h3>
              <p className="font-karst font-light text-xs leading-4 text-brand-gray-text m-0">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
