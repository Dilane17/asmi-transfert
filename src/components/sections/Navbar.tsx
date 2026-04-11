/**
 * @section Navbar
 * @description Barre de navigation principale sticky avec blur
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:344
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Accueil',           href: '/'         },
  { label: 'Services',          href: '#services'  },
  { label: 'Comment ça marche', href: '#process'   },
  { label: 'Sécurité',          href: '#security'  },
  { label: 'FAQ',               href: '#faq'       },
];

const SECTION_IDS = ['services', 'process', 'security', 'faq'];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeHref, setActiveHref] = useState('/');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY < 80) setActiveHref('/');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Verrouille le scroll du body quand le menu est ouvert */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-17.25 bg-white/90 backdrop-blur-[6px] border-b border-brand-gray-border transition-shadow duration-200 ${scrolled ? 'shadow-navbar' : ''}`}
      >
        <div className="container flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="ASMI Transfert"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Liens desktop — visibles à partir de lg */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? 'page' : undefined}
                className="nav-link whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <button
              type="button"
              className="bg-brand-red text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-none text-xs font-bold uppercase tracking-wide hover:bg-brand-blue transition-colors whitespace-nowrap font-karst cursor-pointer"
            >
              Télécharger l&apos;application
            </button>
          </div>

          {/* Hamburger — visible en dessous de lg */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>

        </div>
      </header>

      {/* Menu mobile — overlay plein écran */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 bg-[#0A0A2E] flex flex-col items-center justify-center gap-8 lg:hidden">
          {/* Bouton fermer */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            className="absolute top-5 right-6 text-white text-3xl hover:text-brand-red transition-colors leading-none cursor-pointer"
          >
            ✕
          </button>

          {/* Liens */}
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-bold uppercase tracking-widest hover:text-brand-red transition-colors font-karst"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-red text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest mt-4 font-karst cursor-pointer hover:bg-brand-blue transition-colors"
          >
            Télécharger l&apos;application
          </button>
        </div>
      )}
    </>
  );
}
