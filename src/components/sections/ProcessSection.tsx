/**
 * @section ProcessSection
 * @description Comment ça marche — 3 étapes
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:75
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STEPS = [
  {
    step: '01',
    title: 'Téléchargez l\u2019application',
    description:
      'Créez votre compte gratuitement sur iOS ou Android. Vérifiez votre identité (KYC) une seule fois — vos données sont protégées et chiffrées.',
    bgClass: 'bg-white border-l-4 border-brand-red',
    numberClass: 'text-brand-red',
    titleClass: 'text-brand-text-dark',
    textClass: 'text-brand-gray-text',
  },
  {
    step: '02',
    title: 'Soumettez votre demande',
    description:
      'Choisissez Western Union, RIA ou MoneyGram. Renseignez les détails de votre transfert et confirmez avec votre code PIN sécurisé.',
    bgClass: 'bg-brand-red',
    numberClass: 'text-white/20',
    titleClass: 'text-white',
    textClass: 'text-white/80',
  },
  {
    step: '03',
    title: 'Recevez votre argent',
    description:
      'Un opérateur ASMI prend en charge votre demande, effectue les vérifications et exécute le décaissement vers votre Mobile Money. Notifié à chaque étape.',
    bgClass: 'bg-brand-blue',
    numberClass: 'text-white/20',
    titleClass: 'text-white',
    textClass: 'text-white/80',
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white section-padding">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16 text-center"
        >
          <p className="font-karst font-bold text-xs uppercase tracking-widest text-brand-gray-text mb-4">
            <span className="text-brand-red mr-2" aria-hidden="true">■</span>
            COMMENT ÇA MARCHE ?
          </p>
          <h2 className="section-title">
            3 étapes simples pour vos transferts
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeInUp}
              className={`p-10 flex flex-col ${s.bgClass}`}
            >
              <span className={`font-karst font-black text-6xl leading-none mb-6 ${s.numberClass}`}>
                {s.step}
              </span>

              <h3 className={`font-karst font-bold text-xl uppercase mb-4 ${s.titleClass}`}>
                {s.title}
              </h3>

              <p className={`font-karst font-light text-sm leading-6 ${s.textClass}`}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
