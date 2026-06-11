'use client'
import Image from 'next/image'

/* Brand-styled partner logo cards for the auto-scrolling ticker */
const partners = [
  {
    name: 'Dell Technologies',
    color: '#007DB8',
    logo: (
      <Image 
        src="/Dell_Logo.svg.png" 
        alt="Dell Technologies" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'NVIDIA',
    color: '#76B900',
    logo: (
      <Image 
        src="/NVIDIA_logo.svg.png" 
        alt="NVIDIA" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'Apple',
    color: '#1d1d1f',
    logo: (
      <Image 
        src="/Apple_logo_black.svg.png" 
        alt="Apple" 
        width={30} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'HP',
    color: '#0096D6',
    logo: (
      <Image 
        src="/Hewlett-Packard_logo_1979_color.svg.png" 
        alt="HP" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'Microsoft',
    color: '#737373',
    logo: (
      <Image 
        src="/Microsoft_logo_(2012).svg.png" 
        alt="Microsoft" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'Cisco',
    color: '#00BCEB',
    logo: (
      <Image 
        src="/Cisco_logo.svg.png" 
        alt="Cisco" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'Amazon Web Services',
    color: '#FF9900',
    logo: (
      <Image 
        src="/Amazon_Web_Services_Logo.svg.png" 
        alt="AWS" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'Microsoft Azure',
    color: '#0078D4',
    logo: (
      <Image 
        src="/Microsoft_Azure_Logo.svg.png" 
        alt="Azure" 
        width={80} 
        height={30} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
    ),
  },
  {
    name: 'E-banking',
    color: '#0c2d72',
    logo: (
      <svg viewBox="0 0 80 24" height="20" fill="none" aria-label="E-banking">
        <rect x="0" y="2" width="22" height="20" rx="3" fill="#0c2d72"/>
        <text x="3" y="17" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="13" fill="white">EB</text>
        <text x="26" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="#0c2d72">E-banking</text>
      </svg>
    ),
  },
  {
    name: 'Kisan',
    color: '#c0392b',
    logo: (
      <svg viewBox="0 0 70 24" height="20" fill="none" aria-label="Kisan">
        <rect x="0" y="2" width="22" height="20" rx="3" fill="#c0392b"/>
        <text x="3" y="17" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="13" fill="white">KS</text>
        <text x="26" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#c0392b">Kisan</text>
      </svg>
    ),
  },
  {
    name: 'Cash Safe',
    color: '#16a34a',
    logo: (
      <svg viewBox="0 0 90 24" height="20" fill="none" aria-label="Cash Safe">
        <rect x="0" y="2" width="22" height="20" rx="3" fill="#16a34a"/>
        <text x="3" y="17" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="13" fill="white">CS</text>
        <text x="26" y="17" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="#16a34a">Cash Safe</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    color: '#4285F4',
    logo: (
      <Image 
        src="/google-ar21.svg" 
        alt="Google Cloud" 
        width={80} 
        height={40} 
        style={{ maxHeight: '24px', width: 'auto' }}
      />
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
