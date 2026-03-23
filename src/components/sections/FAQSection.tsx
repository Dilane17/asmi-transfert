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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = FAQ_DATA[activeCategory];

  return (
    <section id="faq" style={{ background: '#F9F9F9', padding: '96px 0' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '36px',
              letterSpacing: '-1.8px',
              textTransform: 'uppercase',
              color: '#1A1C1C',
              textAlign: 'center',
            }}
          >
            FOIRE AUX QUESTIONS
          </h2>

          {/* Filtres */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '32px 0', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  style={{
                    fontFamily: 'var(--font-karst)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    borderRadius: '9999px',
                    padding: '10px 24px',
                    border: isActive ? 'none' : '1px solid #F4F4F5',
                    background: isActive ? '#E00505' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#71717A',
                    cursor: 'pointer',
                    transition: 'all 200ms',
                  }}
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
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={fadeInUp}
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1px solid rgba(224, 5, 5, 0.2)' : '1px solid #F4F4F5',
                  borderRadius: '12px',
                  boxShadow: isOpen ? '0px 10px 15px -3px #fef2f2' : 'none',
                  transition: 'border-color 300ms, box-shadow 300ms',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '25px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-karst)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: isOpen ? '#E00505' : '#1A1C1C',
                      transition: 'color 300ms',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-karst)',
                      fontWeight: 700,
                      fontSize: '22px',
                      color: isOpen ? '#E00505' : '#1A1C1C',
                      flexShrink: 0,
                      transition: 'color 300ms',
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  style={{ maxHeight: isOpen ? '300px' : '0', overflow: 'hidden', transition: 'max-height 300ms ease' }}
                  aria-hidden={!isOpen}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-karst)',
                      fontWeight: 300,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#71717A',
                      padding: '0 25px 25px',
                      margin: 0,
                    }}
                  >
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
