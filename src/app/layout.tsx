import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/sections/Navbar';

export const metadata: Metadata = {
  title: 'ASMI Transfert — Envoyez. Recevez. En toute sécurité.',
  description:
    "La plateforme de transfert de fonds nouvelle génération pour l'Afrique et l'Europe. Rapide, transparent et ultra-sécurisé.",
  keywords: ['transfert argent', 'envoi argent Afrique', 'Western Union', 'Ria Money', 'MoneyGram', 'ASMI'],
  authors: [{ name: 'HustlerLabs' }],
  creator: 'HustlerLabs',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'ASMI Transfert — Envoyez. Recevez. En toute sécurité.',
    description: "La plateforme de transfert de fonds pour l'Afrique et l'Europe.",
    siteName: 'ASMI Transfert',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ASMI Transfert' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASMI Transfert',
    description: "La plateforme de transfert de fonds pour l'Afrique et l'Europe.",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {/* Lien d'évitement pour l'accessibilité */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#E00505] focus:text-white focus:rounded-[9999px] focus:font-bold focus:text-sm focus:tracking-[1px] focus:uppercase"
        >
          Passer au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
