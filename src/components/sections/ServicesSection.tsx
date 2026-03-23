/**
 * @section ServicesSection
 * @description Choix des opérateurs de transfert — 3 cartes
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:30
 */

const SERVICES = [
  {
    number: '01',
    title: 'WESTERN UNION',
    description:
      "Le leader mondial du transfert d'argent. Envoyez des fonds dans plus de 200 pays instantanément.",
  },
  {
    number: '02',
    title: 'RIA MONEY',
    description:
      'Transférez de l\'argent avec des tarifs compétitifs et un réseau global fiable pour vos proches.',
  },
  {
    number: '03',
    title: 'MONEYGRAM',
    description:
      'Rapidité et simplicité pour vos envois internationaux. Recevez l\'argent en quelques minutes.',
  },
] as const;

export default function ServicesSection() {
  return (
    <section style={{ background: '#F9F9F9', padding: '96px 0' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '36px',
            letterSpacing: '-1.8px',
            textTransform: 'uppercase',
            color: '#1A1C1C',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          CHOISISSEZ VOTRE OPÉRATEUR DE TRANSFERT
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="services-grid"
        >
          {SERVICES.map((service) => (
            <div
              key={service.number}
              style={{
                background: '#FFFFFF',
                border: '1px solid #F4F4F5',
                borderRadius: '16px',
                padding: '41px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Numéro filigrane */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '8px',
                  bottom: '16px',
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '96px',
                  color: '#FAFAFA',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>

              {/* Titre */}
              <h3
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#1A1C1C',
                  marginBottom: '15px',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '22.75px',
                  color: '#71717A',
                  marginBottom: '16px',
                }}
              >
                {service.description}
              </p>

              {/* Lien */}
              <a
                href="#"
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: '#0606EF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                EN SAVOIR PLUS
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="#0606EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
