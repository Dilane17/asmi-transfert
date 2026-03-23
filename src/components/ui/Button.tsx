/**
 * @component Button
 * @description Bouton réutilisable ASMI Transfert
 * @variants primary (rouge pill) | secondary (transparent bordure)
 */

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({ variant, children, onClick, className = '', href }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary-hero';
  const combined = className ? `${base} ${className}` : base;

  if (href) {
    return <a href={href} className={combined}>{children}</a>;
  }

  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
