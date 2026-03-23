/**
 * @section SecuritySection
 * @description Sécurité bancaire — fond noir, 4 blocs
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:112
 */

const SECURITY_BLOCKS = [
  {
    icon: '🔐',
    title: 'Authentification',
    description: 'Protection biométrique multi-facteurs pour chaque transaction.',
  },
  {
    icon: '🔒',
    title: 'Chiffrement',
    description: 'Protocoles SSL/TLS 256-bits de niveau militaire.',
  },
  {
    icon: '🪪',
    title: 'KYC Avancé',
    description: "Vérification d'identité en temps réel pour lutter contre la fraude.",
  },
  {
    icon: '📡',
    title: 'Audit Constant',
    description: 'Surveillance proactive 24/7 de toutes les activités suspectes.',
  },
] as const;

export default function SecuritySection() {
  return (
    <section id="security" style={{ background: '#09090B', padding: '96px 0' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="security-layout"
      >
        {/* Colonne gauche */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '72px',
              lineHeight: '72px',
              letterSpacing: '-3.6px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              whiteSpace: 'pre-line',
            }}
          >
            {`SÉCURITÉ\nBANCAIRE.`}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-karst)',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: '28px',
              color: '#A1A1AA',
              maxWidth: '448px',
              marginTop: '32px',
            }}
          >
            Nous appliquons les standards de sécurité les plus stricts pour protéger chaque centime de vos transferts.
          </p>

          <button
            type="button"
            style={{
              marginTop: '32px',
              background: '#0606EF',
              color: '#FFFFFF',
              fontFamily: 'var(--font-karst)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              borderRadius: '9999px',
              padding: '16px 32px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            NOTRE CONFORMITÉ
          </button>
        </div>

        {/* Colonne droite — grille 2x2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {SECURITY_BLOCKS.map((block) => (
            <div
              key={block.title}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderLeft: '4px solid #0606EF',
                borderRadius: '16px',
                padding: '32px 36px',
                height: '184px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                style={{ fontSize: '24px', position: 'absolute', top: '28px', left: '36px' }}
                aria-hidden="true"
              >
                {block.icon}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                  marginTop: '48px',
                  marginBottom: '8px',
                }}
              >
                {block.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 300,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#71717A',
                  margin: 0,
                }}
              >
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .security-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
