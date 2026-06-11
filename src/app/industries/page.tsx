import type { Metadata } from 'next'
import Link from 'next/link'
import { Landmark, Building2, GraduationCap, Heart, Briefcase, Radio, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Industries Served',
  description: 'Impact Technology PLC serves financial services, government, healthcare, education, and private enterprises across Ethiopia with tailored IT solutions.',
}

const industries = [
  { icon: Building2, title: 'Financial Services', desc: "Banks, microfinance institutions, and insurance companies across Ethiopia rely on our infrastructure for transaction processing, core banking, ATM networks, and branch connectivity. We understand the uptime and security requirements of the financial sector.", solutions: ['Core Banking Infrastructure', 'ATM & POS Networks', 'Cybersecurity & Compliance', 'Disaster Recovery'] },
  { icon: Landmark, title: 'Government & Public Sector', desc: 'Federal and regional government agencies trust Impact Technology for national-scale IT deployments — from e-government platforms and data center buildouts to nationwide connectivity projects supporting public service delivery.', solutions: ['Data Center Buildouts', 'National Connectivity Projects', 'Identity Management', 'Document Management Systems'] },
  { icon: GraduationCap, title: 'Education', desc: "Universities, colleges, and primary schools across Ethiopia are transforming the learning experience with technology. We support educational institutions with student information systems, campus networking, computer labs, and e-learning infrastructure.", solutions: ['Campus Network Design', 'Computer Lab Deployments', 'E-Learning Infrastructure', 'Student Device Programs'] },
  { icon: Heart, title: 'Healthcare', desc: 'Hospitals and healthcare organizations require reliable, secure, and compliant IT environments. We deploy clinical workstations, medical imaging storage, healthcare network infrastructure, and electronic health record systems for Ethiopian healthcare providers.', solutions: ['Clinical Workstations', 'PACS & Medical Storage', 'Healthcare Network', 'EHR Infrastructure'] },
  { icon: Briefcase, title: 'Private Enterprise', desc: 'Manufacturers, retail chains, hospitality groups, and logistics companies trust Impact Technology for enterprise computing, ERP infrastructure, retail POS systems, and managed IT services — ensuring operational continuity and competitive efficiency.', solutions: ['ERP Infrastructure', 'Retail POS Systems', 'Unified Communications', 'Managed IT Services'] },
  { icon: Radio, title: 'Telecommunications', desc: "Telecom operators and ISPs in Ethiopia partner with us for network infrastructure, carrier-grade equipment, and network management solutions that support the growth of Ethiopia's digital connectivity ambitions.", solutions: ['Network Infrastructure', 'NOC Solutions', 'OSS/BSS Systems', 'Network Monitoring'] },
]

export default function IndustriesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)', color: 'white', padding: '72px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>Who We Serve</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>Industries Served</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
          Deep sector experience enabling us to deliver technology solutions that address the unique challenges of each industry we serve.
        </p>
      </section>

      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.07}>
              <div className="hover-lift" style={{ border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', height: '100%' }}>
                <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <ind.icon size={22} color="#1a56db" />
                </div>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{ind.title}</h2>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {ind.solutions.map((s) => (
                    <span key={s} style={{ background: '#f7f9fc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 600, color: '#475569' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section style={{ background: '#f7f9fc', padding: '60px 24px', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>Don&apos;t See Your Sector?</h2>
          <p style={{ color: '#64748b', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            We work across many industries. Contact our team to discuss how we can tailor our solutions to your specific sector.
          </p>
          <Link href="/contact" style={{ background: '#1a56db', color: 'white', padding: '13px 28px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Discuss Your Needs <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
