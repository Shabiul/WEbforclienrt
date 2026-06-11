import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Users, Award, Target, Globe, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = { title: 'About Us' }

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in every engagement, delivering quality that our clients can rely on.' },
  { icon: Users, title: 'Partnership', desc: 'We build long-term relationships — not just transactions. Your success is our success.' },
  { icon: Target, title: 'Innovation', desc: 'We continuously evaluate emerging technologies to bring forward-looking solutions to our clients.' },
  { icon: Globe, title: 'Integrity', desc: 'Transparency, honesty, and accountability are at the core of how we operate every day.' },
]

const offices = [
  { city: 'Addis Ababa', country: 'Ethiopia', role: 'Headquarters', detail: 'Primary operations, sales, and technical delivery hub' },
  { city: 'London', country: 'United Kingdom', role: 'International Office', detail: 'European partnerships and procurement operations' },
  { city: 'Bangalore', country: 'India', role: 'Technical Centre', detail: 'Technical support, managed services, and engineering' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)',
        color: 'white', padding: '72px 24px 64px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>
          Who We Are
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>
          About Impact Technology PLC
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
          Over a decade of enabling Ethiopia&apos;s digital transformation through world-class technology solutions and trusted partnerships.
        </p>
      </section>

      {/* Our Story */}
      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <AnimatedSection direction="left">
            <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Our Story
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              A Decade of Building Ethiopia&apos;s Digital Infrastructure
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
              Impact Technology PLC was founded with a clear purpose: to bridge the technology gap and help Ethiopian organizations compete in an increasingly digital world. Headquartered in Addis Ababa with international offices in London and Bangalore, we have grown from a regional IT provider into a trusted enterprise technology partner.
            </p>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '24px' }}>
              We serve a diverse portfolio of clients — financial institutions, government agencies, educational establishments, healthcare organizations, and private enterprises — delivering solutions that create real, measurable business impact.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#1a56db', color: 'white', padding: '12px 22px',
              borderRadius: '8px', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none',
            }}>
              Work With Us <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { num: '10+', label: 'Years of Experience' },
                { num: '100+', label: 'Enterprise Deployments' },
                { num: '3', label: 'Global Offices' },
                { num: '6+', label: 'Technology Partners' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: '#f7f9fc', border: '1px solid #e2e8f0',
                  borderRadius: '14px', padding: '28px 20px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a56db', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '8px', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#f7f9fc', padding: '72px 24px' }}>
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
      <section style={{ background: 'white', padding: '72px 24px' }}>
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
