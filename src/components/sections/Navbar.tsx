/**
 * @section Navbar
 * @description Barre de navigation principale sticky avec blur
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:344
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Accueil',          href: '/',        active: true  },
  { label: 'Services',         href: '#services', active: false },
  { label: 'Comment ça marche',href: '#process',  active: false },
  { label: 'Sécurité',         href: '#security', active: false },
  { label: 'FAQ',              href: '#faq',      active: false },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[69px] bg-white/90 backdrop-blur-[6px] border-b border-brand-gray-border transition-shadow duration-200 ${scrolled ? 'shadow-navbar' : ''}`}
    >
      <div className="container flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="font-karst font-bold text-2xl leading-none text-brand-text-dark">
            ASMI <span className="text-brand-red">Transfert</span>
          </span>
        </Link>

        {/* Liens desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button variant="primary" href="#" onClick={(e) => e.preventDefault()} className="w-[173px]">
            Ouvrir un compte
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-brand-red transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-brand-gray-border"
        style={{ maxHeight: menuOpen ? '400px' : '0px' }}
      >
        <nav className="flex flex-col px-10 py-6 gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className="nav-link text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href="#" onClick={(e) => e.preventDefault()} className="mt-2 w-full justify-center">
            Ouvrir un compte
          </Button>
        </nav>
      </div>
    </header>
  );
}
