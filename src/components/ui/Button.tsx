/**
 * @component Button
 * @description Bouton réutilisable ASMI Transfert
 * @variants primary (rouge pill) | secondary (transparent bordure)
 */

import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({ variant, children, onClick, className = '', href }: ButtonProps) {
  const primaryStyles = [
    'inline-flex items-center justify-center',
    'bg-brand-red text-brand-white',
    'font-[family-name:var(--font-karst)] font-bold text-[12px] tracking-[0.3px] uppercase',
    'px-6 py-[10px]',
    'rounded-[9999px]',
    'shadow-[0px_10px_15px_-3px_#fecaca,0px_4px_6px_-4px_#fecaca]',
    'transition-opacity duration-200 hover:opacity-90',
    'cursor-pointer border-none',
  ].join(' ');

  const secondaryStyles = [
    'inline-flex items-center justify-center',
    'bg-transparent text-brand-white',
    'border-2 border-white/40',
    'font-[family-name:var(--font-karst)] font-bold text-[12px] tracking-[0.3px] uppercase',
    'px-10 py-[18px]',
    'rounded-[12px]',
    'backdrop-blur-[2px]',
    'transition-opacity duration-200 hover:opacity-80',
    'cursor-pointer',
  ].join(' ');

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;
  const combined = `${styles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
