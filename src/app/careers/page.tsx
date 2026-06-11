import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Users, TrendingUp, Award, Globe } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Careers',
  description: "Join Impact Technology PLC — Ethiopia's leading IT solutions provider. Explore career opportunities in technology, sales, and operations.",
}

const openRoles = [
  { title: 'Senior Network Engineer', dept: 'Engineering', location: 'Addis Ababa', type: 'Full-time', req: ['CCNP or CCIE certification', '5+ years enterprise networking', 'Cisco SD-WAN experience preferred'] },
  { title: 'Cybersecurity Analyst', dept: 'Security', location: 'Addis Ababa', type: 'Full-time', req: ['CEH, CISSP, or equivalent certification', '3+ years security operations experience', 'SIEM and EDR platform experience'] },
  { title: 'Pre-Sales Solutions Architect', dept: 'Sales', location: 'Addis Ababa', type: 'Full-time', req: ['Strong presentation and communication skills', 'Technical background in infrastructure', 'Experience with enterprise proposals and RFPs'] },
  { title: 'IT Support Engineer', dept: 'Managed Services', location: 'Addis Ababa', type: 'Full-time', req: ['CompTIA A+, Network+ or equivalent', '2+ years helpdesk or field support experience', 'Windows Server and Active Directory knowledge'] },
  { title: 'Account Manager — Financial Sector', dept: 'Sales', location: 'Addis Ababa', type: 'Full-time', req: ['5+ years B2B sales experience', 'Existing relationships in Ethiopian banking sector', 'Strong negotiation and presentation skills'] },
  { title: 'Data Center Infrastructure Engineer', dept: 'Engineering', location: 'Addis Ababa', type: 'Full-time', req: ['Experience with Dell, HP, or Cisco data center platforms', 'Structured cabling and physical infrastructure knowledge', 'DCIM and virtualization experience'] },
]

const perks = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Structured career development paths with access to vendor certifications and training programs.' },
  { icon: Award, title: 'Certification Support', desc: 'Full funding for professional certifications including Cisco, Microsoft, CompTIA, and more.' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work with international technology vendors and access to our London and Bangalore offices.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'A team-first environment where knowledge sharing and mentorship are part of everyday work.' },
]

export default function CareersPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)', color: 'white', padding: '72px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>Join Our Team</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>Careers at Impact Technology</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
          Help build Ethiopia&apos;s digital future. We&apos;re looking for talented professionals who are passionate about technology and driven to make an impact.
        </p>
      </section>

      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Why Join Us</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>Build Your Career with Impact</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div style={{ background: '#f7f9fc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px', height: '100%' }}>
                  <div style={{ width: '44px', height: '44px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <p.icon size={20} color="#1a56db" />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f9fc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: '40px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Open Positions</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>Current Opportunities</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {openRoles.map((role, i) => (
              <AnimatedSection key={role.title} delay={i * 0.06}>
                <div className="hover-lift" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '24px 28px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{role.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                        <span style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {role.location}</span>
                        <span style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {role.type}</span>
                        <span style={{ background: '#eff6ff', color: '#1a56db', fontSize: '11.5px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px' }}>{role.dept}</span>
                      </div>
                    </div>
                    <Link href="/contact" style={{ background: '#1a56db', color: 'white', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
                      Apply Now
                    </Link>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {role.req.map((r) => (
                      <li key={r} style={{ background: '#f7f9fc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', color: '#475569' }}>{r}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div style={{ marginTop: '32px', background: '#eff6ff', border: '1.5px dashed #c7d9f8', borderRadius: '14px', padding: '28px', textAlign: 'center' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Don&apos;t see a role that matches?</p>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
                We&apos;re always looking for exceptional talent. Send us your CV and we&apos;ll be in touch when the right opportunity arises.
              </p>
              <Link href="/contact" style={{ background: '#1a56db', color: 'white', padding: '11px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Send Your CV <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
