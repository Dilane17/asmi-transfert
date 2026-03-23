export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#FFFFFF',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            border: '4px solid #F4F4F5',
            borderTopColor: '#E00505',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-karst)',
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#71717A',
          }}
        >
          Chargement...
        </p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
