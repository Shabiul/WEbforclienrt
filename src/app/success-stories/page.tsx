import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Landmark, GraduationCap, Heart } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'See how Impact Technology PLC has helped Ethiopian financial institutions, government agencies, and enterprises achieve digital transformation milestones.',
}

const stories = [
  { icon: Building2, sector: 'Financial Services', title: 'Core Banking Infrastructure Modernization for a Leading Ethiopian Bank', challenge: "A major commercial bank with 200+ branches needed to replace aging server infrastructure that was causing performance bottlenecks during peak transaction periods, impacting customer experience and teller productivity.", solution: "Impact Technology designed and deployed a fully redundant data center infrastructure using Dell PowerEdge servers and EMC storage, integrated with the bank's core banking platform. The deployment included structured cabling, high-availability networking, and a comprehensive backup and DR solution.", outcome: 'Transaction processing times reduced by 65%. Zero unplanned downtime in the first 18 months post-deployment. The bank successfully onboarded 40 additional branches on the new infrastructure.', tags: ['Dell Technologies', 'Data Center', 'Networking', 'DR & Backup'] },
  { icon: Landmark, sector: 'Government', title: 'Nationwide Network Connectivity for a Federal Government Agency', challenge: 'A federal agency with offices in all regions of Ethiopia required a unified WAN to enable centralized data management, real-time reporting, and secure inter-office communication — replacing a fragmented, unreliable patchwork of connections.', solution: 'We designed a hybrid WAN architecture combining fiber, microwave, and SD-WAN technologies. Cisco routing and switching equipment was deployed at all regional offices, with centralized management from the Addis Ababa headquarters data center.', outcome: "Reliable, secure connectivity achieved across 12 regional offices. Administrative reporting time reduced by 70%. The agency's IT team now manages the entire national network from a single dashboard.", tags: ['Cisco Networking', 'SD-WAN', 'Cybersecurity', 'Managed Services'] },
  { icon: GraduationCap, sector: 'Education', title: 'Campus Technology Transformation for a Major Ethiopian University', challenge: 'A large university sought to modernize its IT infrastructure to support growing student enrollment, improve campus-wide Wi-Fi coverage, and deploy a new student information management system across multiple faculties.', solution: 'Impact Technology delivered a complete campus network refresh — deploying Cisco Meraki access points across all academic buildings, student dormitories, and the library. A new student information system was deployed on Dell PowerEdge servers with high-availability storage.', outcome: 'Campus-wide Wi-Fi coverage increased from 40% to 98%. Student information system now serves 25,000+ students. Faculty reported significant improvement in administrative efficiency and student access to digital resources.', tags: ['Campus Networking', 'Cisco Meraki', 'Server Infrastructure', 'EUC'] },
  { icon: Heart, sector: 'Healthcare', title: 'Clinical IT Infrastructure for a Multi-Site Hospital Group', challenge: 'A growing hospital group needed to implement a unified clinical IT infrastructure supporting electronic health records, medical imaging (PACS), and clinical workstations across three hospitals — with strict requirements for uptime and data security.', solution: 'We deployed dedicated healthcare IT infrastructure at each site, including HP workstations certified for clinical environments, a centralized PACS storage solution, and a secure healthcare VLAN architecture. Comprehensive data backup and encryption was implemented throughout.', outcome: 'EHR access time reduced by 80% compared to paper-based processes. Medical imaging accessible from any clinical workstation within seconds. HIPAA-aligned security controls implemented across all three hospital sites.', tags: ['Healthcare IT', 'HP Workstations', 'PACS Storage', 'Cybersecurity'] },
]

export default function SuccessStoriesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)', color: 'white', padding: '72px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>Our Track Record</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>Success Stories</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
          Real deployments. Measurable outcomes. See how we have helped Ethiopia&apos;s leading organizations accelerate their digital transformation.
        </p>
      </section>

      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {stories.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <article className="hover-lift" style={{ border: '1px solid #e2e8f0', borderRadius: '18px', overflow: 'hidden' }}>
                <div style={{ background: '#f7f9fc', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <s.icon size={18} color="#1a56db" />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a56db', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.sector}</span>
                </div>
                <div style={{ padding: '32px' }}>
                  <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: 1.35 }}>{s.title}</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>Challenge</div>
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7 }}>{s.challenge}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>Solution</div>
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.7 }}>{s.solution}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a017', marginBottom: '8px' }}>Outcome</div>
                      <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.7, fontWeight: 500 }}>{s.outcome}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{ background: '#eff6ff', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 600, color: '#1a56db' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section style={{ background: '#1a56db', padding: '60px 24px', textAlign: 'center', color: 'white' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '14px' }}>Ready to Write Your Success Story?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Let&apos;s discuss your technology challenges and how Impact Technology can help your organization achieve measurable results.
          </p>
          <Link href="/contact" style={{ background: 'white', color: '#1a56db', padding: '13px 28px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Start a Conversation <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
