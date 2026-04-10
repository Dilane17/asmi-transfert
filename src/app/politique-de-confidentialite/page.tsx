import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ASMI Transfert',
  description:
    'Découvrez comment ASMI Transfert collecte, utilise et protège vos données personnelles conformément à la réglementation.',
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-600">
          <span className="text-[#E00505] mt-1 flex-shrink-0 text-xs" aria-hidden="true">■</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function DataTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full border-collapse mb-8 text-sm">
      <thead>
        <tr className="bg-[#0A0A2E] text-white">
          <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Finalité</th>
          <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Base légale</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([col1, col2]) => (
          <tr key={col1} className="border-b border-gray-100 hover:bg-[#F7F7F7] transition-colors">
            <td className="px-4 py-3 text-gray-600">{col1}</td>
            <td className="px-4 py-3 text-gray-600">{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ConservationTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full border-collapse mb-8 text-sm">
      <thead>
        <tr className="bg-[#0A0A2E] text-white">
          <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Catégorie</th>
          <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Durée</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([col1, col2]) => (
          <tr key={col1} className="border-b border-gray-100 hover:bg-[#F7F7F7] transition-colors">
            <td className="px-4 py-3 text-gray-600">{col1}</td>
            <td className="px-4 py-3 text-gray-600">{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const FINALITES: [string, string][] = [
  ['Création et gestion du compte', 'Exécution du contrat'],
  ["Vérification d'identité (KYC)", 'Obligation légale'],
  ['Traitement des transferts', 'Exécution du contrat'],
  ['Prévention de la fraude', 'Obligation légale'],
  ['Notifications de statut', 'Exécution du contrat'],
  ['Amélioration des services', 'Intérêt légitime'],
  ['Communication commerciale', 'Consentement'],
];

const CONSERVATION: [string, string][] = [
  ['Données de compte actif', 'Durée de la relation contractuelle'],
  ['Documents KYC', '5 ans après clôture du compte'],
  ['Historique des transactions', '10 ans (obligation légale)'],
  ['Données techniques', '12 mois'],
  ['Données marketing', "Jusqu'au retrait du consentement"],
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A2E] pt-36 pb-20">
        <div className="container">
          <p className="text-sm text-gray-400 mb-6 block">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-[#E00505] mx-2">→</span>
            <span className="text-white">Politique de Confidentialité</span>
          </p>
          <h1 className="text-5xl font-black text-white uppercase tracking-tight">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-500 text-sm mt-4">Dernière mise à jour : avril 2026</p>
        </div>
      </section>

      {/* Contenu */}
      <div className="bg-[#F7F7F7] pb-24">
        <div className="container">
          <div className="bg-white max-w-4xl mx-auto px-8 py-16 -mt-8 relative z-10 shadow-sm">

            <SectionH2>1. Présentation</SectionH2>
            <BodyText>
              ASMI Transfert est un service de transfert d&apos;argent international opérant en Afrique
              de l&apos;Ouest, proposant des services via les réseaux Western Union, RIA Money Transfer
              et MoneyGram. La présente politique décrit la manière dont nous collectons, utilisons,
              stockons et protégeons vos données personnelles dans le cadre de l&apos;utilisation de notre
              application mobile et de notre site web.
            </BodyText>

            <SectionH2>2. Responsable du traitement</SectionH2>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>ASMI Transfert</strong> — Cotonou, République du Bénin<br />
                Email : <a href="mailto:contact@asmitransfert.com" className="text-[#0606EF] hover:underline">contact@asmitransfert.com</a><br />
                Téléphone : +229 XX XX XX XX
              </p>
            </InfoBox>

            <SectionH2>3. Données collectées</SectionH2>

            <SectionH3>3.1 Données d&apos;identification</SectionH3>
            <BulletList items={[
              'Nom et prénom',
              'Date de naissance',
              'Nationalité',
              'Numéro de téléphone',
              'Adresse email',
            ]} />

            <SectionH3>3.2 Données de vérification (KYC)</SectionH3>
            <BulletList items={[
              "Copie de la pièce d'identité (CNI ou passeport)",
              'Photo recto/verso du document',
              'Statut de vérification KYC',
            ]} />

            <SectionH3>3.3 Données de transaction</SectionH3>
            <BulletList items={[
              'Montant des transferts',
              'Opérateur utilisé (Western Union, RIA, MoneyGram)',
              'Numéro de contrôle de transaction',
              'Numéro Mobile Money du bénéficiaire',
              'Historique des demandes et statuts',
            ]} />

            <SectionH3>3.4 Données techniques</SectionH3>
            <BulletList items={[
              'Adresse IP',
              "Type d'appareil et système d'exploitation",
              "Données de connexion et d'utilisation",
              "Jetons d'authentification (JWT)",
            ]} />

            <SectionH2>4. Finalités du traitement</SectionH2>
            <DataTable rows={FINALITES} />

            <SectionH2>5. Partage des données</SectionH2>

            <SectionH3>5.1 Partenaires opérateurs</SectionH3>
            <BodyText>
              Western Union, RIA Money Transfer et MoneyGram, dans le strict cadre du traitement
              de vos demandes de transfert.
            </BodyText>

            <SectionH3>5.2 Prestataires techniques</SectionH3>
            <BodyText>
              Nos prestataires d&apos;hébergement, de notifications push (Firebase Cloud Messaging)
              et de stockage sécurisé, liés par des obligations contractuelles de confidentialité.
            </BodyText>

            <SectionH3>5.3 Autorités compétentes</SectionH3>
            <BodyText>
              En cas d&apos;obligation légale ou judiciaire, vos données peuvent être communiquées
              aux autorités compétentes de la République du Bénin.
            </BodyText>

            <InfoBox>
              <p className="text-gray-700 text-sm font-semibold">
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </InfoBox>

            <SectionH2>6. Durée de conservation</SectionH2>
            <ConservationTable rows={CONSERVATION} />

            <SectionH2>7. Sécurité des données</SectionH2>
            <BulletList items={[
              'Chiffrement TLS 1.3 des données en transit',
              'Stockage sécurisé des documents KYC',
              'Authentification forte : OTP SMS, biométrie, code PIN',
              "Journal d'audit horodaté et non modifiable",
              "Contrôle d\u2019accès basé sur les rôles (RBAC)",
              'Déconnexion automatique après inactivité',
            ]} />

            <SectionH2>8. Vos droits</SectionH2>
            <BulletList items={[
              "Droit d'accès : obtenir une copie de vos données",
              'Droit de rectification : corriger des données inexactes',
              "Droit à l'effacement : sous réserve des obligations légales",
              'Droit à la limitation : restreindre temporairement le traitement',
              "Droit d'opposition : pour les finalités marketing",
              'Droit à la portabilité : recevoir vos données structurées',
            ]} />
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pour exercer vos droits :{' '}
                <a href="mailto:contact@asmitransfert.com" className="text-[#0606EF] hover:underline">
                  contact@asmitransfert.com
                </a>
                <br />
                Délai de réponse : 30 jours ouvrés maximum.
              </p>
            </InfoBox>

            <SectionH2>9. Modifications</SectionH2>
            <BodyText>
              Nous nous réservons le droit de modifier la présente politique à tout moment.
              En cas de modification substantielle, vous serez notifié par email ou via
              l&apos;application. La date de dernière mise à jour fait foi.
            </BodyText>

            <SectionH2>10. Contact</SectionH2>
            <InfoBox>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>ASMI Transfert</strong><br />
                Email :{' '}
                <a href="mailto:contact@asmitransfert.com" className="text-[#0606EF] hover:underline">
                  contact@asmitransfert.com
                </a><br />
                Adresse : Cotonou, République du Bénin<br />
                Téléphone : +229 XX XX XX XX
              </p>
            </InfoBox>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
