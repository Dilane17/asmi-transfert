/**
 * @section Footer
 * @description Pied de page complet
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:286
 */

'use client';

import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Accueil',  href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Sécurité', href: '#security' },
  { label: 'Contact',  href: '#' },
];
const PARTNER_LINKS = ['Western Union', 'Ria Money', 'MoneyGram'];
const LEGAL_LINKS   = ['Mentions Légales', 'Politique de Confidentialité'];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-text-muted">
      {/* Grille principale */}
      <div className="container pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 text-center sm:text-left">
        {/* Colonne 1 — Marque */}
        <div>
          <Image
            src="/images/logo.png"
            alt="ASMI Transfert"
            width={140}
            height={36}
            className="h-15 w-auto object-contain mb-4 brightness-0 invert mx-auto sm:mx-0"
          />

          <p className="pl-3 font-karst font-light text-xs tracking-[0.6px] uppercase text-brand-text-muted leading-4.5 max-w-65 mb-6 mx-auto sm:mx-0">
            Solutions financières structurées pour une économie globale
            connectée.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-3 justify-center sm:justify-start pl-3 ">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Facebook"
              className="footer-social-icon"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Twitter"
              className="footer-social-icon"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <span className="footer-col-title">NAVIGATION</span>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={
                  link.href === "#" ? (e) => e.preventDefault() : undefined
                }
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 3 — Partenaires */}
        <div>
          <span className="footer-col-title">PARTENAIRES</span>
          <div className="flex flex-col gap-4">
            {PARTNER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 4 — Téléchargement */}
        <div>
          <span className="footer-col-title">TÉLÉCHARGEMENT</span>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="footer-dl-btn"
            >
              App Store
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="footer-dl-btn"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Barre bas */}
      <div className="container mt-16 border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center md:items-center flex-wrap gap-4">
        <span className="footer-bottom-text">
          © {new Date().getFullYear()} ASMI TRANSFERT.
        </span>
        <span className="footer-bottom-text">MADE BY HUSTLERLABS</span>
        <div className="flex gap-6 justify-center">
          {LEGAL_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="footer-link"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
