/**
 * @section TestimonialsSection
 * @description Témoignages clients — 3 avis
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:146
 */

const TESTIMONIALS = [
  {
    quote:
      "Je transfère de l'argent à ma famille au pays chaque mois. C'est le service le plus rapide que j'ai trouvé.",
    author: 'Mariam K., Paris',
    stars: 5,
  },
  {
    quote:
      "L'interface est super intuitive. Même pour quelqu'un qui n'est pas tech, c'est très facile.",
    author: 'Jean-Pierre L., Lyon',
    stars: 5,
  },
  {
    quote:
      'Le service client est réactif et efficace. Je me sens en totale sécurité avec ASMI.',
    author: 'Amadou T., Bruxelles',
    stars: 5,
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: '96px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '36px',
            letterSpacing: '-2.4px',
            textTransform: 'uppercase',
            color: '#1A1C1C',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          ILS NOUS FONT CONFIANCE
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              style={{
                background: '#F9F9F9',
                borderRadius: '16px',
                padding: '40px',
                position: 'relative',
              }}
            >
              {/* Guillemet décoratif */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '16px',
                  fontSize: '96px',
                  color: '#0606EF',
                  opacity: 0.10,
                  fontFamily: 'serif',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </span>

              {/* Étoiles */}
              <div style={{ marginBottom: '16px' }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span
                    key={i}
                    style={{ color: '#E00505', fontSize: '14px' }}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Citation */}
              <p
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#3F3F46',
                  marginBottom: '16px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Auteur */}
              <p
                style={{
                  fontFamily: 'var(--font-karst)',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  color: '#1A1C1C',
                  margin: 0,
                }}
              >
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
