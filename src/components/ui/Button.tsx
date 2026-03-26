/**
 * @component Button
 * @description Bouton réutilisable ASMI Transfert
 * @variants primary (rouge pill) | secondary (transparent bordure)
 */

import type { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  href?: string;
}

export default function Button({ variant, children, onClick, className = '', href }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary-hero';
  const combined = className ? `${base} ${className}` : base;

  if (href) {
    return <a href={href} className={combined} onClick={onClick}>{children}</a>;
  }

  return (
    <button type="button" onClick={onClick as MouseEventHandler<HTMLButtonElement>} className={combined}>
      {children}
    </button>
  );
}
