/**
 * @section FAQSection
 * @description Foire aux questions — accordéon interactif
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:205
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const FAQ_ITEMS = [
  {
    q: 'Comment soumettre une demande ?',
    a: "Téléchargez l'app, créez votre compte, choisissez votre opérateur (WU, RIA ou MG), renseignez les détails et confirmez avec votre code PIN. La demande est transmise instantanément à nos opérateurs.",
  },
  {
    q: 'Combien de temps prend le traitement ?',
    a: 'La majorité des demandes sont traitées en moins de 2 heures. Vous êtes notifié en temps réel à chaque changement de statut.',
  },
  {
    q: 'Pourquoi vérifier mon identité (KYC) ?',
    a: 'La vérification KYC est exigée par la réglementation financière. Elle protège votre compte contre la fraude et sécurise chaque transaction.',
  },
  {
    q: 'Quels documents sont acceptés pour le KYC ?',
    a: 'CNI ou passeport en cours de validité — photo recto/verso prise depuis l\u2019appareil photo de votre smartphone.',
  },
  {
    q: 'Y a-t-il des frais cachés ?',
    a: 'Non. Le détail complet des frais vous est affiché avant toute confirmation de demande — aucune surprise.',
  },
  {
    q: 'J\u2019ai oublié mon code PIN, que faire ?',
    a: 'Paramètres → Sécurité → Réinitialiser le code PIN. Une vérification OTP SMS confirme votre identité.',
  },
  {
    q: 'Les transferts sont-ils traités le week-end ?',
    a: 'Oui, du lundi au samedi. Les demandes du dimanche sont traitées dès le lundi matin.',
  },
  {
    q: 'Quelle différence entre WU, RIA et MoneyGram ?',
    a: 'Les trois sont des opérateurs internationaux reconnus. Le choix dépend du réseau de l\u2019expéditeur. ASMI Transfert gère les trois depuis une seule interface.',
  },
] as const;

const VIEWPORT = { once: true, margin: '-100px' };

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white section-padding">
      <div className="container">
      <div className="max-w-4xl mx-auto">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center mb-12"
        >
          <p className="font-karst font-bold text-xs uppercase tracking-widest text-brand-gray-text mb-4">
            <span className="text-brand-red mr-2" aria-hidden="true">■</span>
            FAQ
          </p>
          <h2 className="font-karst font-bold text-[36px] tracking-[-1.8px] uppercase text-brand-text-dark">
            Questions fréquentes
          </h2>
          <p className="font-karst font-light text-brand-gray-text text-base mt-4 max-w-md mx-auto">
            Tout ce que vous devez savoir sur nos services de transfert d&apos;argent.
          </p>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex justify-between items-center p-6.25 bg-transparent border-0 cursor-pointer text-left gap-4"
                >
                  <span className={`font-karst font-bold text-[15px] transition-colors duration-300 ${isOpen ? 'text-brand-red' : 'text-brand-text-dark'}`}>
                    {item.q}
                  </span>
                  <span
                    className={`font-karst font-bold text-[22px] shrink-0 leading-none transition-colors duration-300 ${isOpen ? 'text-brand-red' : 'text-brand-text-dark'}`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                  aria-hidden={!isOpen}
                >
                  <p className="font-karst font-light text-sm leading-5.5 text-brand-gray-text px-6.25 pb-6.25 m-0">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
