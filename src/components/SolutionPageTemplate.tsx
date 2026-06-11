import Link from 'next/link'
import { LucideIcon, ChevronRight, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface FaqItem { q: string; a: string }
interface SolutionPageProps {
  icon: LucideIcon
  label: string
  title: string
  subtitle: string
  intro: string
  offerings: { title: string; desc: string }[]
  benefits: string[]
  technologies: string[]
  faq: FaqItem[]
}

export default function SolutionPageTemplate({
  icon: Icon, label, title, subtitle, intro, offerings, benefits, technologies, faq,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)',
        color: 'white', padding: '72px 24px 64px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Link href="/solutions" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', textDecoration: 'none' }}>
              Solutions
            </Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px' }}>{label}</span>
          </div>
          <div style={{
            width: '56px', height: '56px', background: 'rgba(255,255,255,0.15)',
            borderRadius: '14px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', marginBottom: '20px',
          }}>
            <Icon size={26} color="white" />
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '14px' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>{subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad-md" style={{ background: 'white', padding: '60px 24px' }}>
        <div className="solution-intro-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection direction="left">
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.025em' }}>
              Overview
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '24px' }}>{intro}</p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#1a56db', color: 'white', padding: '12px 22px',
              borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none',
              minHeight: '44px',
            }}>
              Request a Consultation <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a56db', marginBottom: '16px' }}>
              Key Benefits
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#334155', lineHeight: 1.6 }}>
                  <span style={{
                    width: '20px', height: '20px', background: '#eff6ff', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px',
                  }}>
                    <span style={{ width: '6px', height: '6px', background: '#1a56db', borderRadius: '50%' }} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>What We Deliver</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, color: '#0f172a' }}>Our Offerings</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {offerings.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.07}>
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', height: '100%' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{o.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.65 }}>{o.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-pad-md" style={{ background: 'white', padding: '60px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px' }}>Technologies &amp; Vendors</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {technologies.map((t) => (
                <span key={t} style={{
                  background: '#f7f9fc', border: '1px solid #e2e8f0',
                  borderRadius: '8px', padding: '9px 16px',
                  fontSize: '13.5px', fontWeight: 600, color: '#334155',
                  minHeight: '40px', display: 'inline-flex', alignItems: 'center',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '40px' }}>
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faq.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px 22px' }}>
                  <summary style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                    {item.q}
                  </summary>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75, marginTop: '12px' }}>{item.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-lg" style={{ background: 'linear-gradient(90deg, #0c2d72 0%, #1a56db 100%)', padding: '60px 24px', textAlign: 'center', color: 'white' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '14px' }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Talk to our specialists and discover how we can tailor this solution for your organization.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'white', color: '#1a56db', padding: '14px 28px',
            borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none',
            minHeight: '50px',
          }}>
            Request a Consultation
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
