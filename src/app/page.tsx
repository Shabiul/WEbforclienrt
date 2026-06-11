import Link from 'next/link'
import { Server, Database, Network, Shield, Monitor, Settings, ArrowRight, CheckCircle2, Calendar, Tag, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StatsSection from '@/components/StatsSection'
import PartnersMarquee from '@/components/PartnersMarquee'

/* Update this URL when your WordPress blog is live */
const BLOG_URL = 'https://blog.impacttechnology.et'

const blogPosts = [
  {
    category: 'Digital Transformation',
    title: 'How Ethiopian Enterprises Are Accelerating Cloud Adoption in 2024',
    excerpt: 'Across banking, government, and education, Ethiopian organizations are moving workloads to hybrid cloud environments. We explore the key drivers and best practices.',
    date: 'June 5, 2024',
    slug: '/cloud-adoption-ethiopia-2024',
  },
  {
    category: 'Cybersecurity',
    title: 'Cybersecurity Essentials for East African Financial Institutions',
    excerpt: 'Financial institutions face unique threat landscapes. This post outlines the security frameworks, compliance requirements, and practical defenses every CISO should have in place.',
    date: 'May 22, 2024',
    slug: '/cybersecurity-financial-institutions',
  },
  {
    category: 'Infrastructure',
    title: 'Data Center Best Practices: Lessons from a Decade of Deployments',
    excerpt: 'After delivering more than 100 enterprise data center projects across Ethiopia, our engineers share the planning, design, and operational insights that make deployments succeed.',
    date: 'May 10, 2024',
    slug: '/data-center-best-practices',
  },
]

const services = [
  { icon: Server, title: 'Computing Infrastructure', desc: 'Enterprise-grade servers, storage, and compute platforms engineered for reliability and scale.', href: '/solutions/computing-infrastructure' },
  { icon: Database, title: 'Data Center Solutions', desc: 'End-to-end data center design, deployment, and optimization for mission-critical operations.', href: '/solutions/data-center' },
  { icon: Network, title: 'Networking', desc: 'High-performance LAN, WAN, and wireless solutions connecting your organization seamlessly.', href: '/solutions/networking' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Comprehensive security frameworks protecting your assets, data, and reputation.', href: '/solutions/cybersecurity' },
  { icon: Monitor, title: 'End User Computing', desc: 'Modern workstations, laptops, and managed device solutions for a productive workforce.', href: '/solutions/end-user-computing' },
  { icon: Settings, title: 'Managed Services', desc: 'Proactive IT management, monitoring, and support so you can focus on your core business.', href: '/solutions/managed-services' },
  { icon: Shield, title: 'Banking & Security Equipment', desc: 'Authorized distributor of currency counters, banknote sorters, safes, and vault solutions from Korea, China, and Europe.', href: '/partners' },
]

const whyUs = [
  { title: 'Two Decades of Excellence', desc: 'Over 20 years since 2004 serving Ethiopia\'s leading enterprises, government institutions, and financial organizations — earning a reputation for reliability and technical excellence.' },
  { title: 'Customer-First Philosophy', desc: 'We work closely with each client to understand their unique challenges and deliver solutions that align with their strategic objectives.' },
  { title: 'Strategic Technology Partnerships', desc: 'Strong alliances with globally recognized technology leaders enable us to provide cutting-edge products backed by industry-leading support.' },
  { title: 'End-to-End Expertise', desc: 'From computing infrastructure and networking to cloud, security, and managed services — we cover the full technology spectrum.' },
]


export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 60%, #2968e8 100%)',
        color: 'white', padding: '88px 24px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="hero-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '100px', padding: '6px 16px', fontSize: '13px',
            fontWeight: 500, marginBottom: '28px', backdropFilter: 'blur(4px)',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#d4a017', borderRadius: '50%', flexShrink: 0 }} />
            Addis Ababa &nbsp;·&nbsp; London &nbsp;·&nbsp; Bangalore
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.6rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            Empowering Ethiopia&apos;s<br />
            <span style={{ color: '#d4a017' }}>Digital Future</span>
          </h1>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', maxWidth: '600px', margin: '0 auto 36px' }}>
            Impact Technology PLC is a leading IT solutions provider enabling organizations across Ethiopia to accelerate their digital transformation through world-class technology and trusted advisory services.
          </p>

          <div className="hero-cta-row" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/solutions" style={{
              background: 'white', color: '#1a56db', padding: '14px 28px',
              borderRadius: '9px', fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              minHeight: '50px',
            }}>
              Explore Solutions <ArrowRight size={16} />
            </Link>
            <Link href="/contact" style={{
              background: 'rgba(255,255,255,0.1)', color: 'white',
              border: '1.5px solid rgba(255,255,255,0.35)',
              padding: '14px 28px', borderRadius: '9px', fontSize: '15px',
              fontWeight: 600, textDecoration: 'none',
              minHeight: '50px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              Contact Us
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '48px' }}>
            <path d="M0 48V24C360 0 720 48 1080 24L1440 0V48H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── SERVICES ── */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Our Expertise</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '14px' }}>
                Comprehensive IT Solutions
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
                From infrastructure to managed services, we deliver complete end-to-end technology solutions for enterprise organizations.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.07}>
                <Link href={svc.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="hover-card" style={{
                    background: 'white', borderRadius: '14px', padding: '28px',
                    border: '1px solid #e2e8f0', height: '100%', cursor: 'pointer',
                  }}>
                    <div style={{ width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                      <svc.icon size={22} color="#1a56db" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{svc.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, marginBottom: '18px' }}>{svc.desc}</p>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#1a56db', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Learn more <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '80px 24px' }}>
        <div className="why-us-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection direction="left">
            <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Why Impact Technology</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '18px', lineHeight: 1.2 }}>
              Trusted by Ethiopia&apos;s Leading Organizations
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75, marginBottom: '28px' }}>
              For over a decade, we have built a reputation for reliability, integrity, and technical excellence — serving financial institutions, government agencies, educational establishments, and private enterprises throughout Ethiopia.
            </p>
            <Link href="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#1a56db', color: 'white', padding: '12px 24px',
              borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              minHeight: '44px',
            }}>
              Learn About Us <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div style={{
                  background: i % 2 === 0 ? 'white' : '#f7f9fc',
                  border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px',
                }}>
                  <CheckCircle2 size={20} color="#1a56db" style={{ marginBottom: '10px' }} />
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS MARQUEE ── */}
      <PartnersMarquee />

      {/* ── MISSION & VISION ── */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <AnimatedSection direction="left">
            <div style={{ background: '#1a56db', color: 'white', borderRadius: '16px', padding: '36px', height: '100%' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>🎯</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>Our Mission</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
                To empower organizations through innovative technology solutions that drive growth, efficiency, and sustainable digital transformation across Ethiopia and beyond.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{ background: '#f7f9fc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '36px', height: '100%' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>🔭</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.02em' }}>Our Vision</h3>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.75 }}>
                To be Ethiopia&apos;s most trusted technology partner, delivering world-class solutions that enable organizations to thrive in an increasingly digital world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div style={{ background: '#0c2d72', color: 'white', borderRadius: '16px', padding: '36px', height: '100%' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>🤝</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>Our Commitment</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
                Customer satisfaction drives everything we do. We combine deep expertise, trusted partnerships, and agile execution to deliver measurable business outcomes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Insights &amp; Updates
                </p>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em' }}>
                  Latest from Our Blog
                </h2>
              </div>
              <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '14px', fontWeight: 600, color: '#1a56db', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '5px', minHeight: '44px',
                flexShrink: 0,
              }}>
                View All Posts →
              </a>
            </div>
          </AnimatedSection>

          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <a href={`${BLOG_URL}${post.slug}`} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="hover-card" style={{
                    background: 'white', borderRadius: '16px', padding: '28px',
                    border: '1px solid #e2e8f0', height: '100%',
                    display: 'flex', flexDirection: 'column', gap: '14px',
                  }}>
                    {/* Category + Date */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        background: '#eff6ff', color: '#1a56db',
                        borderRadius: '100px', padding: '4px 12px',
                        fontSize: '12px', fontWeight: 700,
                      }}>
                        <Tag size={10} />
                        {post.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#94a3b8' }}>
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, margin: 0 }}>
                      {post.title}
                    </h3>
                    {/* Excerpt */}
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, margin: 0, flex: 1 }}>
                      {post.excerpt}
                    </p>
                    {/* Read more */}
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#1a56db', marginTop: 'auto' }}>
                      Read Article →
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-pad-lg" style={{ background: 'linear-gradient(90deg, #0c2d72 0%, #1a56db 100%)', padding: '68px 24px', color: 'white', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '16px' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Let&apos;s discuss how Impact Technology can accelerate your organization&apos;s digital transformation journey.
          </p>
          <div className="hero-cta-row" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'white', color: '#1a56db', padding: '14px 30px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', minHeight: '50px' }}>
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/success-stories" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)', padding: '14px 30px', borderRadius: '9px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px' }}>
              See Our Work
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
