import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const fillColor = variant === 'light' ? '#ffffff' : '#1a56db'
  const textColor = variant === 'light' ? '#ffffff' : '#0f172a'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.75)' : '#64748b'
  const sizes = { sm: 34, md: 42, lg: 50 }
  const titleSize = { sm: '1rem', md: '1.2rem', lg: '1.4rem' }
  const s = sizes[size]

  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <svg width={s} height={s} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="42" height="42" rx="8" fill={fillColor} />
        {/* I-beam: top bar */}
        <rect x="8" y="9" width="26" height="5" rx="1.5" fill="white" />
        {/* I-beam: bottom bar */}
        <rect x="8" y="28" width="26" height="5" rx="1.5" fill="white" />
        {/* I-beam: stem */}
        <rect x="18.5" y="14" width="5" height="14" fill="white" />
        {/* Gold accent dot */}
        <circle cx="34.5" cy="11.5" r="4.5" fill="#d4a017" />
      </svg>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 800, fontSize: titleSize[size], letterSpacing: '-0.02em', color: textColor }}>
          IMPACT
        </div>
        <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: subColor, marginTop: '2px' }}>
          Technology PLC
        </div>
      </div>
    </Link>
  )
}
