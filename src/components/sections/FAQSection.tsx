/**
 * @section FAQSection
 * @description Foire aux questions — accordéon interactif
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:205
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

type Category = 'Général' | 'Transferts' | 'Sécurité';

const FAQ_DATA: Record<Category, { q: string; a: string }[]> = {
  Général: [
    { q: 'Quels sont les délais de transfert ?', a: "Les transferts sont généralement traités en quelques minutes selon l'opérateur choisi." },
    { q: 'Quels sont les documents requis ?', a: "Une pièce d'identité valide (CNI, Passeport) est nécessaire pour toute opération conformément aux réglementations bancaires en vigueur." },
    { q: "Où puis-je retirer l'argent ?", a: 'Vous pouvez retirer dans plus de 200 points de retrait en Afrique et en Europe.' },
    { q: 'Quels sont les frais de service ?', a: 'Les frais varient selon le montant et la destination. Consultez notre simulateur pour une estimation précise.' },
  ],
  Transferts: [
    { q: 'Quel est le montant maximum par transfert ?', a: 'Le plafond de transfert dépend de votre niveau de vérification KYC et de la réglementation en vigueur dans votre pays.' },
    { q: 'Puis-je annuler un transfert en cours ?', a: "Un transfert peut être annulé tant qu'il n'a pas été récupéré par le bénéficiaire. Contactez notre support immédiatement." },
    { q: "Dans quels pays puis-je envoyer de l'argent ?", a: "Nous couvrons plus de 50 pays en Afrique et en Europe via nos partenaires Western Union, Ria Money et MoneyGram." },
  ],
  Sécurité: [
    { q: 'Mes données sont-elles protégées ?', a: 'Oui, toutes les données sont chiffrées en SSL/TLS 256-bits et stockées conformément au RGPD.' },
    { q: "Que faire en cas d'activité suspecte ?", a: "Contactez immédiatement notre support disponible 24/7. Votre compte sera temporairement suspendu par mesure de précaution." },
    { q: 'Comment fonctionne le KYC ?', a: "La vérification d'identité se fait en temps réel via notre partenaire de vérification. Elle prend généralement moins de 5 minutes." },
  ],
};

const CATEGORIES: Category[] = ['Général', 'Transferts', 'Sécurité'];
const VIEWPORT = { once: true, margin: '-100px' };

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Général');
  const [openIndex, setOpenIndex]           = useState<number | null>(null);

  const items = FAQ_DATA[activeCategory];

  return (
    <section id="faq" className="bg-brand-gray-light section-padding">
      <div className="max-w-4xl mx-auto px-10">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2 className="font-karst font-bold text-[36px] tracking-[-1.8px] uppercase text-brand-text-dark text-center">
            FOIRE AUX QUESTIONS
          </h2>

          {/* Filtres */}
          <div className="flex justify-center gap-4 mt-8 mb-8 flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  className={`font-karst font-bold text-xs tracking-[1.2px] uppercase rounded-pill px-6 py-2.5 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-red text-white border-0'
                      : 'bg-white text-brand-gray-text border border-brand-gray-border'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-3"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={fadeInUp}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
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
    </section>
  );
}
