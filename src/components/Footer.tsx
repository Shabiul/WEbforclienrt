import Link from 'next/link'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import Logo from './Logo'

const solutions = [
  { name: 'Computing Infrastructure', href: '/solutions/computing-infrastructure' },
  { name: 'Data Center Solutions', href: '/solutions/data-center' },
  { name: 'Networking', href: '/solutions/networking' },
  { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
  { name: 'End User Computing', href: '/solutions/end-user-computing' },
  { name: 'Managed Services', href: '/solutions/managed-services' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Technology Partners', href: '/partners' },
  { name: 'Industries Served', href: '/industries' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '48px' }}>

          {/* Brand column */}
          <div>
            <Logo variant="light" />
            <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: '1.7', color: '#94a3b8', maxWidth: '280px' }}>
              Ethiopia&apos;s leading IT solutions provider — delivering enterprise-grade technology for over a decade.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0, color: '#d4a017' }} />
                <span>Addis Ababa, Ethiopia (HQ)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                <Globe size={14} style={{ marginTop: '2px', flexShrink: 0, color: '#d4a017' }} />
                <span>London, UK &nbsp;·&nbsp; Bangalore, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <Phone size={14} style={{ flexShrink: 0, color: '#d4a017' }} />
                <span>+251 11 XXX XXXX</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <Mail size={14} style={{ flexShrink: 0, color: '#d4a017' }} />
                <span>info@impacttechnology.et</span>
              </div>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="footer-link">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>
              Get Started
            </h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Ready to accelerate your digital transformation? Our team is here to help.
            </p>
            <Link href="/contact" className="btn-primary" style={{
              display: 'inline-block', background: '#1a56db', color: 'white',
              padding: '11px 22px', borderRadius: '8px', fontSize: '14px',
              fontWeight: 600, textDecoration: 'none',
            }}>
              Contact Our Team
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px' }}>
            © {new Date().getFullYear()} Impact Technology PLC. All rights reserved.
          </p>
          <p style={{ fontSize: '13px' }}>
            Addis Ababa &nbsp;·&nbsp; London &nbsp;·&nbsp; Bangalore
          </p>
        </div>
      </div>
    </footer>
  )
}
