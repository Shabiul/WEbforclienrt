import type { Metadata } from 'next'
import { Database } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'Data Center Solutions',
  description: 'End-to-end data center design, build, and management for Ethiopian enterprises. Physical infrastructure, virtualization, backup, and DR by Impact Technology PLC.',
}

export default function DataCenterPage() {
  return (
    <SolutionPageTemplate
      icon={Database}
      label="Data Center Solutions"
      title="Data Center Solutions"
      subtitle="End-to-end data center design, build, and optimization — from physical infrastructure to virtualization and cloud integration — for mission-critical Ethiopian enterprises."
      intro="A well-designed data center is the backbone of any modern organization. Impact Technology PLC delivers comprehensive data center services encompassing facility design, power and cooling systems, structured cabling, rack and stack deployment, and virtualization. We work with Ethiopia's leading organizations to build data centers that are reliable, energy-efficient, and ready to scale. Our team holds internationally recognized certifications and brings hands-on experience from deployments across banking, government, and telecommunications sectors."
      benefits={[
        'Purpose-built facility designs optimized for Ethiopian climate and power conditions',
        'Reduced operational costs through efficient power and cooling architecture',
        'High availability and fault-tolerant infrastructure design',
        'Integrated backup and disaster recovery from day one',
        'Clear migration path to hybrid cloud environments',
        'Certified engineers with proven large-scale deployment experience',
      ]}
      offerings={[
        { title: 'Data Center Design & Build', desc: 'Full facility design including rack layout, power distribution, cooling, cabling, and security systems.' },
        { title: 'Virtualization & Automation', desc: 'VMware, Hyper-V, and Nutanix deployments to maximize hardware utilization and operational agility.' },
        { title: 'Backup & Disaster Recovery', desc: 'Structured backup architectures and DR planning ensuring business continuity in any scenario.' },
        { title: 'Structured Cabling', desc: 'Cat6A, fiber optic, and data center cabling to TIA-942 and ISO/IEC 11801 standards.' },
        { title: 'Power & Cooling Systems', desc: 'UPS, PDU, precision cooling, and generator integration for maximum uptime and efficiency.' },
        { title: 'Data Center Audits', desc: 'Independent assessment of existing data centers with detailed remediation plans and risk ratings.' },
      ]}
      technologies={[
        { src: '/data-center-solutions/vmware.svg', alt: 'VMware vSphere' },
        { src: '/data-center-solutions/Nutanix_Logo.svg.png', alt: 'Nutanix AHV' },
        { src: '/data-center-solutions/Microsoft_Azure_Logo.svg.png', alt: 'Microsoft Azure Stack' },
        { src: '/data-center-solutions/Dell_EMC_logo.svg.png', alt: 'Dell EMC' },
        { src: '/data-center-solutions/Veeam_logo.svg.png', alt: 'Veeam Backup' },
        { src: '/data-center-solutions/APC_by_Schneider_Electric.png', alt: 'APC by Schneider Electric' },
        { src: '/data-center-solutions/Vertiv_logo.svg.png', alt: 'Vertiv' },
        { src: '/data-center-solutions/Commscope-Logo.png', alt: 'CommScope Cabling' },
      ]}
      faq={[
        { q: 'Can Impact Technology design a data center for a new building in Ethiopia?', a: 'Yes. We provide end-to-end data center consulting and design services, working alongside construction and electrical teams from the early project phases.' },
        { q: 'What standards do your data center deployments follow?', a: 'Our designs conform to TIA-942 (data center infrastructure), ISO/IEC 27001 (information security), and Uptime Institute Tier classification guidelines.' },
        { q: 'Do you support hybrid cloud integration?', a: 'Yes. We help organizations adopt hybrid cloud architectures that connect on-premises data centers to AWS, Microsoft Azure, and Google Cloud platforms.' },
        { q: 'What is your approach to data center disaster recovery in Ethiopia?', a: 'We assess organizational RPO and RTO requirements, then design geographically separated backup sites or cloud-based DR solutions tailored to each client\'s budget and compliance needs.' },
      ]}
    />
  )
}
