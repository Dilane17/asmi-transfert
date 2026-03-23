/**
 * @section Footer
 * @description Pied de page complet
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:286
 */

const NAV_LINKS = ['Accueil', 'Services', 'Sécurité', 'Contact'];
const PARTNER_LINKS = ['Western Union', 'Ria Money', 'MoneyGram'];

const COLUMN_TITLE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-karst)',
  fontWeight: 700,
  fontSize: '12px',
  letterSpacing: '2.4px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  marginBottom: '20px',
};

const LINK_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-karst)',
  fontWeight: 700,
  fontSize: '10px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#A1A1AA',
  textDecoration: 'none',
  display: 'block',
  transition: 'color 200ms',
};

export default function Footer() {
  return (
    <footer style={{ background: '#09090B', color: '#A1A1AA' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 40px 0',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
        }}
        className="footer-grid"
      >
        {/* Colonne 1 — Marque */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '24px',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            ASMI{' '}
            <span style={{ color: '#E00505' }}>TRANSFERT</span>
          </p>

          <p
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: '#A1A1AA',
              lineHeight: '18px',
              maxWidth: '260px',
              marginBottom: '24px',
            }}
          >
            Solutions financières structurées pour une économie globale connectée.
          </p>

          {/* Réseaux sociaux */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A1A1AA',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A1A1AA',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A1A1AA',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <p style={COLUMN_TITLE_STYLE}>NAVIGATION</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={LINK_STYLE}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 3 — Partenaires */}
        <div>
          <p style={COLUMN_TITLE_STYLE}>PARTENAIRES</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PARTNER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={LINK_STYLE}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 4 — Téléchargement */}
        <div>
          <p style={COLUMN_TITLE_STYLE}>TÉLÉCHARGEMENT</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="#"
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.05)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '10px 16px',
                textDecoration: 'none',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.6px',
                textAlign: 'center',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              App Store
            </a>
            <a
              href="#"
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.05)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '10px 16px',
                textDecoration: 'none',
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.6px',
                textAlign: 'center',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Barre bas */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 40px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
        className="footer-bottom"
      >
        <span
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#A1A1AA',
          }}
        >
          © 2024 ASMI TRANSFERT.
        </span>

        <span
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#A1A1AA',
          }}
        >
          MADE BY HUSTLERLABS
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Mentions Légales', 'Politique de Confidentialité'].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontFamily: 'var(--font-karst)',
                fontWeight: 700,
                fontSize: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#A1A1AA',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
