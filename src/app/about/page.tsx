import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Users, Award, Target, Globe, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: "Impact Technology PLC — established in 2004 in Addis Ababa, Ethiopia. Over 20 years of delivering IT solutions, banking machines, and enterprise technology.",
}

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in every engagement, delivering quality that our clients can rely on.' },
  { icon: Users, title: 'Partnership', desc: 'We build long-term relationships — not just transactions. Your success is our success.' },
  { icon: Target, title: 'Innovation', desc: 'We continuously evaluate emerging technologies to bring forward-looking solutions to our clients.' },
  { icon: Globe, title: 'Integrity', desc: 'Transparency, honesty, and accountability are at the core of how we operate every day.' },
]

const offices = [
  { city: 'Addis Ababa', country: 'Ethiopia', role: 'Headquarters', detail: 'Primary operations, sales, banking equipment, and technical delivery hub — established 2004' },
  { city: 'London', country: 'United Kingdom', role: 'International Office', detail: 'European partnerships and procurement operations' },
  { city: 'Bangalore', country: 'India', role: 'Technical Centre', detail: 'Technical support, managed services, and engineering' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)',
        color: 'white', padding: '72px 24px 64px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>
          Who We Are
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>
          About Impact Technology PLC
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
          Established in 2004, Impact Technology PLC has spent over two decades building Ethiopia&apos;s digital and financial infrastructure — supplying enterprise IT, banking machines, and security equipment to organizations across the country.
        </p>
      </section>

      {/* Our Story */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <AnimatedSection direction="left">
            <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Our Story
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Two Decades of Building Ethiopia&apos;s Technology Infrastructure
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
              Founded in 2004 in Addis Ababa, Impact Technology PLC set out with a clear purpose: to bridge the technology gap and equip Ethiopian organizations to compete in a digital world. From our early focus on banking machines and security equipment, we grew into a full-spectrum enterprise technology provider serving the country&apos;s most demanding sectors.
            </p>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
              Over 20 years, we have supplied more than <strong style={{ color: '#0f172a' }}>27,000 banking machines</strong> and <strong style={{ color: '#0f172a' }}>75,000+ computers and laptops</strong> to the Ethiopian market — partnering with globally recognized brands from Korea, China, Spain, and beyond to bring world-class equipment to local enterprises.
            </p>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '24px' }}>
              Today, headquartered in Addis Ababa with international offices in London and Bangalore, we serve financial institutions, government agencies, healthcare organizations, educational establishments, and private enterprises — delivering end-to-end IT solutions that create measurable business impact.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#1a56db', color: 'white', padding: '12px 22px',
              borderRadius: '8px', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', minHeight: '44px',
            }}>
              Work With Us <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { num: '2004', label: 'Year Established' },
                { num: '27,000+', label: 'Banking Machines Supplied' },
                { num: '75,000+', label: 'Computers Deployed' },
                { num: '3', label: 'Global Offices' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: '#f7f9fc', border: '1px solid #e2e8f0',
                  borderRadius: '14px', padding: '24px 18px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a56db', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '8px', fontWeight: 500, lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                What Guides Us
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div style={{
                  background: 'white', border: '1px solid #e2e8f0',
                  borderRadius: '14px', padding: '28px', height: '100%',
                }}>
                  <div style={{
                    width: '44px', height: '44px', background: '#eff6ff',
                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '16px',
                  }}>
                    <v.icon size={20} color="#1a56db" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Where We Operate
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
                Our Global Presence
              </h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {offices.map((o, i) => (
              <AnimatedSection key={o.city} delay={i * 0.1}>
                <div style={{
                  background: i === 0 ? '#1a56db' : '#f7f9fc',
                  color: i === 0 ? 'white' : '#0f172a',
                  border: i === 0 ? 'none' : '1px solid #e2e8f0',
                  borderRadius: '14px', padding: '32px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <MapPin size={18} color={i === 0 ? '#d4a017' : '#1a56db'} />
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>
                      {o.role}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.02em' }}>{o.city}</h3>
                  <p style={{ fontSize: '14px', opacity: 0.75, marginBottom: '12px' }}>{o.country}</p>
                  <p style={{ fontSize: '13.5px', opacity: i === 0 ? 0.85 : 0.7, lineHeight: 1.65 }}>{o.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
