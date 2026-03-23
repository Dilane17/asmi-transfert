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
  { label: 'Accueil', href: '/', active: true },
  { label: 'Services', href: '#services', active: false },
  { label: 'Comment ça marche', href: '#process', active: false },
  { label: 'Sécurité', href: '#security', active: false },
  { label: 'FAQ', href: '#faq', active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-[6px] border-b border-brand-gray-border transition-shadow duration-300"
      style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none' }}
    >
      <div className="container flex items-center justify-between h-[69px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="font-[family-name:var(--font-karst)] font-bold text-[24px] leading-none"
            style={{ color: '#1a1c1c' }}
          >
            ASMI{' '}
            <span className="text-brand-red">Transfert</span>
          </span>
        </Link>

        {/* Liens desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className="font-[family-name:var(--font-karst)] font-bold text-[14px] tracking-[-0.35px] transition-colors duration-200 hover:text-brand-red"
              style={{ color: link.active ? '#E00505' : '#71717A' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button variant="primary" href="#" className="w-[173px]">
            Ouvrir un compte
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: '#E00505',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: '#E00505',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: '#E00505',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
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
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-karst)] font-bold text-[18px] transition-colors duration-200 hover:text-brand-red"
              style={{ color: link.active ? '#E00505' : '#71717A' }}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href="#" className="mt-2 w-full justify-center">
            Ouvrir un compte
          </Button>
        </nav>
      </div>
    </header>
  );
}
