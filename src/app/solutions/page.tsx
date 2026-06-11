import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, Database, Network, Shield, Monitor, Settings, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = { title: 'Solutions & Services' }

const services = [
  { icon: Server, title: 'Computing Infrastructure', href: '/solutions/computing-infrastructure', desc: 'Enterprise servers, storage systems, and compute platforms from world-class manufacturers — designed for performance, reliability, and growth.', points: ['Dell PowerEdge Servers', 'NVIDIA GPU Computing', 'HP Enterprise Solutions', 'Hyperconverged Infrastructure'] },
  { icon: Database, title: 'Data Center Solutions', href: '/solutions/data-center', desc: 'End-to-end data center design, build, and management — from physical infrastructure to virtualization and cloud integration.', points: ['Data Center Design & Build', 'Virtualization & Automation', 'Backup & Disaster Recovery', 'Colocation Services'] },
  { icon: Network, title: 'Networking', href: '/solutions/networking', desc: 'High-performance enterprise networking including LAN, WAN, SD-WAN, and wireless solutions powered by Cisco and leading vendors.', points: ['Cisco Enterprise Networking', 'SD-WAN & WAN Optimization', 'Wireless Solutions', 'Network Security'] },
  { icon: Shield, title: 'Cybersecurity', href: '/solutions/cybersecurity', desc: 'Comprehensive security frameworks protecting your organization from evolving threats — from perimeter defense to endpoint protection.', points: ['Firewall & Perimeter Security', 'Endpoint Detection & Response', 'Security Audits', 'SOC Services'] },
  { icon: Monitor, title: 'End User Computing', href: '/solutions/end-user-computing', desc: 'Modern workstations, laptops, and peripherals from Apple, HP, Dell, and Lenovo — equipped, configured, and supported for your team.', points: ['Apple Mac Deployments', 'HP & Dell Workstations', 'Device Management (MDM)', 'Peripherals & Accessories'] },
  { icon: Settings, title: 'Managed Services', href: '/solutions/managed-services', desc: 'Proactive IT management, 24/7 monitoring, and on-demand support — so your team can focus on business, not infrastructure.', points: ['24/7 Infrastructure Monitoring', 'Helpdesk & Support', 'Patch & Update Management', 'IT Consulting'] },
]

export default function SolutionsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)', color: 'white', padding: '72px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>What We Offer</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>Solutions &amp; Services</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
          Comprehensive, end-to-end technology solutions built for enterprise organizations across Ethiopia.
        </p>
      </section>

      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {services.map((svc, i) => (
            <AnimatedSection key={svc.href} delay={i * 0.06}>
              <div className="hover-lift" style={{ border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', height: '100%', background: 'white' }}>
                <div style={{ width: '52px', height: '52px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svc.icon size={24} color="#1a56db" />
                </div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{svc.title}</h2>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {svc.points.map((pt) => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1a56db', flexShrink: 0 }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13.5px', fontWeight: 600, color: '#1a56db', textDecoration: 'none' }}>
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section style={{ background: '#1a56db', padding: '60px 24px', textAlign: 'center', color: 'white' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '14px' }}>Need a Custom Solution?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Our team of experts can design a tailored technology roadmap for your organization&apos;s unique needs.
          </p>
          <Link href="/contact" style={{ background: 'white', color: '#1a56db', padding: '13px 28px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
            Talk to Our Team
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
