import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales | ASMI Transfert',
  description:
    "Mentions légales du site ASMI Transfert — éditeur, hébergement, propriété intellectuelle et droit applicable.",
};

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F7F7F7] border-l-4 border-[#0606EF] p-6 my-8 rounded-none">
      {children}
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-[#09090B] mt-12 mb-4 pb-3 border-b-2 border-[#E00505] first:mt-0">
      {children}
    </h2>
  );
}

function SectionH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-[#09090B] mt-8 mb-3 flex items-center gap-2">
      <span className="w-3 h-3 bg-[#E00505] inline-block flex-shrink-0" aria-hidden="true" />
      {children}
    </h3>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 leading-relaxed text-base mb-4">{children}</p>;
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A2E] pt-36 pb-20">
        <div className="container">
          <p className="text-sm text-gray-400 mb-6 block">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-[#E00505] mx-2">→</span>
            <span className="text-white">Mentions Légales</span>
          </p>
          <h1 className="text-5xl font-black text-white uppercase tracking-tight">
            Mentions Légales
          </h1>
          <p className="text-gray-500 text-sm mt-4">Dernière mise à jour : avril 2026</p>
        </div>
      </section>

      {/* Contenu */}
      <div className="bg-[#F7F7F7] pb-24">
        <div className="container">
          <div className="bg-white max-w-4xl mx-auto px-8 py-16 -mt-8 relative z-10 shadow-sm">

            <SectionH2>1. Éditeur du site</SectionH2>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dénomination : <strong>ASMI Transfert</strong><br />
                Forme juridique : [À compléter]<br />
                Siège social : Cotonou, République du Bénin<br />
                N° immatriculation : [À compléter — RCCM]<br />
                Email :{' '}
                <a href="mailto:contact@asmitransfert.com" className="text-[#0606EF] hover:underline">
                  contact@asmitransfert.com
                </a><br />
                Directeur de publication : [À compléter]
              </p>
            </InfoBox>

            <SectionH2>2. Hébergement</SectionH2>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                Prestataire : [Nom du prestataire VPS]<br />
                Adresse : [À compléter]
              </p>
            </InfoBox>

            <SectionH2>3. Activité réglementée</SectionH2>
            <BodyText>
              ASMI Transfert opère en tant qu&apos;intermédiaire de confiance pour des services
              de transfert d&apos;argent international via Western Union, RIA Money Transfer
              et MoneyGram, dans le respect de la réglementation financière en vigueur en
              République du Bénin et dans l&apos;espace UEMOA.
            </BodyText>
            <InfoBox>
              <p className="text-gray-700 text-sm">
                Numéro d&apos;agrément BCEAO : [À compléter si applicable]
              </p>
            </InfoBox>

            <SectionH2>4. Propriété intellectuelle</SectionH2>
            <BodyText>
              L&apos;ensemble des éléments du site et de l&apos;application ASMI Transfert —
              textes, logos, graphismes, charte graphique et architecture — sont la propriété
              exclusive d&apos;ASMI Transfert ou font l&apos;objet d&apos;autorisations d&apos;utilisation.
            </BodyText>
            <BodyText>
              Toute reproduction ou représentation sans autorisation écrite préalable est interdite.
            </BodyText>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                Les marques Western Union®, RIA Money Transfer® et MoneyGram® sont la propriété
                de leurs sociétés respectives. ASMI Transfert est un agent intermédiaire indépendant.
              </p>
            </InfoBox>

            <SectionH2>5. Limitation de responsabilité</SectionH2>

            <SectionH3>5.1 Contenu du site</SectionH3>
            <BodyText>
              ASMI Transfert s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées
              mais ne peut garantir leur exhaustivité ou actualité à tout moment.
            </BodyText>

            <SectionH3>5.2 Disponibilité du service</SectionH3>
            <BodyText>
              ASMI Transfert ne saurait être tenue responsable des interruptions liées aux
              maintenances techniques, défaillances réseau, pannes des opérateurs partenaires
              ou événements de force majeure.
            </BodyText>

            <SectionH3>5.3 Liens externes</SectionH3>
            <BodyText>
              Le site peut contenir des liens vers des sites tiers. ASMI Transfert décline toute
              responsabilité quant à leur contenu.
            </BodyText>

            <SectionH2>6. Droit applicable</SectionH2>
            <BodyText>
              Les présentes mentions légales sont régies par le droit de la République du Bénin.
            </BodyText>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tout litige relève de la compétence exclusive des tribunaux compétents de Cotonou,
                sauf disposition légale impérative contraire.
              </p>
            </InfoBox>

            <SectionH2>7. Contact</SectionH2>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>ASMI Transfert</strong><br />
                Email :{' '}
                <a href="mailto:contact@asmitransfert.com" className="text-[#0606EF] hover:underline">
                  contact@asmitransfert.com
                </a><br />
                Adresse : Cotonou, République du Bénin<br />
                Délai de réponse : 30 jours ouvrés maximum.
              </p>
            </InfoBox>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
