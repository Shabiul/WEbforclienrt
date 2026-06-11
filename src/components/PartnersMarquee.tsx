'use client'

/* Brand-styled partner logo cards for the auto-scrolling ticker */
const partners = [
  {
    name: 'Dell Technologies',
    color: '#007DB8',
    logo: (
      <svg viewBox="0 0 60 24" height="20" fill="none" aria-label="Dell Technologies">
        <text x="0" y="18" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="18" fill="#007DB8">DELL</text>
      </svg>
    ),
  },
  {
    name: 'NVIDIA',
    color: '#76B900',
    logo: (
      <svg viewBox="0 0 72 22" height="18" fill="none" aria-label="NVIDIA">
        <rect x="0" y="2" width="20" height="18" rx="2" fill="#76B900" />
        <text x="2" y="16" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="13" fill="white">N</text>
        <text x="24" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#1a1a1a">VIDIA</text>
      </svg>
    ),
  },
  {
    name: 'Apple',
    color: '#1d1d1f',
    logo: (
      <svg viewBox="0 0 60 24" height="20" fill="none" aria-label="Apple">
        <path d="M14 5.5C15.1 4.2 15.8 2.5 15.6 1c-1.3.1-2.9.9-3.8 2.1C11 4.2 10.2 5.9 10.5 7.3c1.4.1 2.8-.7 3.5-1.8z" fill="#1d1d1f"/>
        <path d="M14.1 7.6c-1.9-.1-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.7 1.5 11.5.9 1.4 2.1 2.9 3.6 2.9 1.4-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.5-.1 2.6-1.4 3.5-2.8.7-1 1.2-2.1 1.5-3.2-3.2-1.2-3.7-5.7-.5-7.4-.9-1.3-2.2-2-3.5-2z" fill="#1d1d1f"/>
        <text x="22" y="18" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="14" fill="#1d1d1f">Apple</text>
      </svg>
    ),
  },
  {
    name: 'HP',
    color: '#0096D6',
    logo: (
      <svg viewBox="0 0 52 24" height="22" fill="none" aria-label="HP">
        <rect x="0" y="1" width="22" height="22" rx="4" fill="#0096D6"/>
        <text x="3" y="17" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="14" fill="white">hp</text>
        <text x="26" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#0f172a">Inc.</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    color: '#737373',
    logo: (
      <svg viewBox="0 0 100 22" height="20" fill="none" aria-label="Microsoft">
        <rect x="0" y="1" width="10" height="10" fill="#F25022"/>
        <rect x="11" y="1" width="10" height="10" fill="#7FBA00"/>
        <rect x="0" y="12" width="10" height="10" fill="#00A4EF"/>
        <rect x="11" y="12" width="10" height="10" fill="#FFB900"/>
        <text x="26" y="17" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="13" fill="#737373">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Cisco',
    color: '#00BCEB',
    logo: (
      <svg viewBox="0 0 70 24" height="20" fill="none" aria-label="Cisco">
        <rect x="0" y="8" width="4" height="8" rx="2" fill="#00BCEB"/>
        <rect x="6" y="5" width="4" height="14" rx="2" fill="#00BCEB"/>
        <rect x="12" y="2" width="4" height="20" rx="2" fill="#00BCEB"/>
        <text x="20" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#00BCEB">Cisco</text>
      </svg>
    ),
  },
  {
    name: 'Amazon Web Services',
    color: '#FF9900',
    logo: (
      <svg viewBox="0 0 52 24" height="20" fill="none" aria-label="Amazon Web Services">
        <text x="0" y="17" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="16" fill="#FF9900">aws</text>
        <path d="M0 20 Q26 23 52 20" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    color: '#0078D4',
    logo: (
      <svg viewBox="0 0 80 24" height="20" fill="none" aria-label="Microsoft Azure">
        <path d="M8 2 L16 2 L20 18 L4 18 Z" fill="#0078D4" opacity="0.9"/>
        <path d="M4 18 L20 18 L26 22" stroke="#0078D4" strokeWidth="0" fill="none"/>
        <path d="M2 18 Q14 12 20 2" stroke="#50a0e0" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="28" y="17" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="13" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    color: '#4285F4',
    logo: (
      <svg viewBox="0 0 100 24" height="20" fill="none" aria-label="Google Cloud">
        <text x="0" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
        <text x="46" y="17" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="13" fill="#64748b">Cloud</text>
      </svg>
    ),
  },
]

/* Duplicate for seamless infinite scroll */
const track = [...partners, ...partners]

export default function PartnersMarquee() {
  return (
    <section style={{ background: '#f7f9fc', padding: '64px 0' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 24px' }}>
        <p style={{ color: '#64748b', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
          Technology Partners
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
          Backed by Global Technology Leaders
        </h2>
        <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          We partner with the world&apos;s leading technology brands to deliver best-in-class solutions.
        </p>
      </div>

      {/* Auto-scrolling logo ticker */}
      <div className="marquee-outer" style={{ padding: '8px 0 12px' }}>
        <div className="marquee-track">
          {track.map((p, i) => (
            <div key={i} className="partner-logo-card">
              {p.logo}
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', letterSpacing: '-0.01em' }}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* View all link */}
      <div style={{ textAlign: 'center', marginTop: '32px', padding: '0 24px' }}>
        <a href="/partners" style={{
          fontSize: '14px', fontWeight: 600, color: '#1a56db', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '5px', minHeight: '44px',
        }}>
          View Full Partner Portfolio →
        </a>
      </div>
    </section>
  )
}
