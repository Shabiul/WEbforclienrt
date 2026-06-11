import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Technology Partners',
  description: "Impact Technology PLC's global technology partnerships — Dell, NVIDIA, Apple, HP, Microsoft, Cisco, E-banking, Kisan, Myonsong, Cash Safe, Eagle, and more.",
}

const infraPartners = [
  { name: 'Dell Technologies', category: 'Servers, Storage & Infrastructure', desc: "As a Dell Technologies authorized partner, we supply and support the complete Dell portfolio — PowerEdge servers, PowerStore and PowerVault storage, Dell Networking, and Dell client devices — backed by full manufacturer warranty and certified local support." },
  { name: 'NVIDIA', category: 'GPU Computing & AI', desc: "NVIDIA partnership enables us to deliver GPU-powered computing solutions for AI, machine learning, data analytics, and visualization workloads. From DGX AI systems to professional visualization workstations, we bring NVIDIA's computing power to Ethiopian enterprises." },
  { name: 'Apple', category: 'End User Computing', desc: "As an authorized Apple reseller for business, we supply Mac computers, iPads, and accessories for enterprise environments. Our Apple deployment team integrates devices with Apple Business Manager and enterprise MDM platforms for seamless management." },
  { name: 'HP Inc. & HPE', category: 'PCs, Servers & Enterprise', desc: "HP partnership spans both consumer and enterprise product lines — HP laptops and workstations for end user computing, HP Enterprise servers and networking for data center and campus environments, with full warranty and support services." },
  { name: 'Microsoft', category: 'Software, Cloud & Devices', desc: "Microsoft partnership covers the full spectrum — Microsoft 365 licensing, Windows deployment, Azure cloud services, and Surface devices. We help organizations modernize with Microsoft's ecosystem including Teams, SharePoint, and Azure Infrastructure." },
  { name: 'Cisco Systems', category: 'Networking & Cybersecurity', desc: "As a Cisco authorized partner with CCNA, CCNP, and specialist-certified engineers, we design and deploy the full Cisco networking and security portfolio — from Catalyst and Meraki switching to Firepower security platforms and SD-WAN." },
]

const bankingPartners = [
  {
    name: 'E-banking',
    origin: 'South Korea',
    category: 'Electronic Banking Equipment',
    desc: 'E-banking is a leading Korean manufacturer of currency counters, banknote sorters, and cash handling automation systems. Impact Technology is the authorized distributor for E-banking products across Ethiopia, supplying major commercial banks and microfinance institutions.',
  },
  {
    name: 'Kisan Electronics',
    origin: 'South Korea',
    category: 'Currency Counting & Sorting',
    desc: 'Kisan is one of Korea\'s foremost manufacturers of currency handling equipment, producing high-speed banknote counters and fitness sorters used by central banks and financial institutions worldwide. We supply and service the full Kisan product range in Ethiopia.',
  },
  {
    name: 'Myonsong',
    origin: 'South Korea',
    category: 'Banking Automation',
    desc: 'Myonsong specializes in banking automation equipment including currency sorters and counting machines built to the stringent standards demanded by financial regulators. Their equipment is trusted by Ethiopian banks for accuracy and reliability.',
  },
  {
    name: 'Speedtech',
    origin: 'China',
    category: 'Banking Technology',
    desc: 'Speedtech provides cost-effective banking technology solutions including currency counters and cash management equipment. A strong supplier partner for branches and smaller financial institutions requiring reliable, affordable cash handling solutions.',
  },
  {
    name: 'Bajiya',
    origin: 'China',
    category: 'Security & Banking Equipment',
    desc: 'Bajiya manufactures a comprehensive range of banking and security equipment including safes, currency counters, and vault systems. Their products combine competitive pricing with reliability, serving banks and commercial clients across Ethiopia.',
  },
  {
    name: 'Union Century',
    origin: 'Spain',
    category: 'Banking Security Equipment',
    desc: 'Union Century is a Spanish leader in banking security equipment — vault doors, safes, strongrooms, and cash management solutions engineered to European standards. Impact Technology supplies and installs Union Century security equipment for Ethiopian banks and enterprises.',
  },
  {
    name: 'Cash Safe',
    origin: 'International',
    category: 'Cash Management & Safes',
    desc: 'Cash Safe provides robust cash management products including high-security safes, cash deposit machines, and vault solutions. Widely used by banks, retail chains, and government offices across Ethiopia seeking trusted cash security infrastructure.',
  },
  {
    name: 'Eagle',
    origin: 'International',
    category: 'Security Equipment',
    desc: 'Eagle brand security equipment covers a broad range of products from surveillance systems to physical security hardware. Impact Technology supplies and supports Eagle products for banks, corporate offices, and government facilities requiring professional-grade security solutions.',
  },
]

const cloudPartners = [
  { name: 'Amazon Web Services (AWS)', desc: "Cloud infrastructure, compute, storage, databases, and AI/ML services. We help organizations architect, migrate, and optimize workloads on AWS — Ethiopia's most widely adopted cloud platform." },
  { name: 'Microsoft Azure', desc: "Enterprise cloud services tightly integrated with Microsoft 365 and on-premises infrastructure. Ideal for organizations standardized on Microsoft technologies seeking hybrid cloud adoption." },
  { name: 'Google Cloud', desc: "Advanced data analytics, AI, and cloud infrastructure from Google. Particularly suited for organizations prioritizing big data, machine learning, and containerized application development." },
]

export default function PartnersPage() {
  return (
    <>
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)', color: 'white', padding: '72px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>Our Alliances</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>Technology Partners</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.75 }}>
          Since 2004, we have built authorized partnerships with the world&apos;s leading technology and banking equipment vendors — from Korean and Chinese banking machine manufacturers to global IT leaders — ensuring clients receive genuine products, certified support, and access to the latest innovations.
        </p>
      </section>

      {/* IT Infrastructure Partners */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Infrastructure & Hardware</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>IT Infrastructure Partners</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {infraPartners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.07}>
                <div className="hover-lift" style={{ border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px', height: '100%' }}>
                  <div style={{ marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{p.name}</h3>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a56db', background: '#eff6ff', borderRadius: '100px', padding: '3px 10px', letterSpacing: '0.04em' }}>
                      {p.category}
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Banking & Security Equipment Brands */}
      <section className="section-pad-lg" style={{ background: '#f7f9fc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ color: '#d4a017', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Banking & Security
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                Banking Equipment &amp; Security Brands
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '680px', lineHeight: 1.7, marginBottom: '48px' }}>
                Since our founding in 2004, Impact Technology has been Ethiopia&apos;s leading supplier of banking machines and security equipment — distributing trusted brands from South Korea, China, and Europe to banks, government bodies, and commercial enterprises across the country.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {bankingPartners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.06}>
                <div className="hover-lift" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{p.name}</h3>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#d4a017', background: '#fefbec', borderRadius: '100px', padding: '3px 10px', letterSpacing: '0.04em' }}>
                        {p.category}
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, background: '#f1f5f9', borderRadius: '6px', padding: '4px 8px', flexShrink: 0, marginTop: '2px' }}>
                      {p.origin}
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Supply numbers callout */}
          <AnimatedSection delay={0.3}>
            <div style={{
              marginTop: '48px', background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)',
              borderRadius: '16px', padding: '36px', color: 'white',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center',
            }}>
              {[
                { num: '27,000+', label: 'Banking Machines Supplied to Ethiopia' },
                { num: '75,000+', label: 'Computers & Laptops Deployed' },
                { num: '20,000+', label: 'Laptops Delivered Nationwide' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#d4a017', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cloud Partners */}
      <section className="section-pad-lg" style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: '48px' }}>
              <p style={{ color: '#1a56db', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Cloud Platforms</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>Cloud &amp; Software Partners</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {cloudPartners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div style={{ background: '#f7f9fc', border: '1.5px dashed #c7d9f8', borderRadius: '14px', padding: '28px', height: '100%' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a56db', marginBottom: '12px' }}>{p.name}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#1a56db', padding: '60px 24px', textAlign: 'center', color: 'white' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', fontWeight: 800, marginBottom: '14px' }}>Looking for a Specific Technology?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Our partnerships span hundreds of vendors and product lines. Contact our team and we&apos;ll source the right technology for your needs.
          </p>
          <Link href="/contact" style={{ background: 'white', color: '#1a56db', padding: '14px 28px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', minHeight: '50px' }}>
            Talk to Our Team <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
