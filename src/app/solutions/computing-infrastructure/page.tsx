import type { Metadata } from 'next'
import { Server } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'Computing Infrastructure Solutions',
  description: 'Enterprise servers, storage, and compute platforms from Dell, HP, and NVIDIA — deployed and supported by Impact Technology PLC in Ethiopia.',
}

export default function ComputingInfraPage() {
  return (
    <SolutionPageTemplate
      icon={Server}
      label="Computing Infrastructure"
      title="Computing Infrastructure Solutions"
      subtitle="Enterprise-grade servers, storage systems, and compute platforms engineered for reliability, performance, and the demands of a growing digital Ethiopia."
      intro="Impact Technology PLC delivers world-class computing infrastructure solutions for organizations that demand performance, uptime, and scalability. We partner with Dell Technologies, HP Enterprise, and NVIDIA to provide the full spectrum of compute hardware — from edge deployments to mission-critical data center buildouts. Our certified engineers handle everything from infrastructure assessment and design through procurement, deployment, and ongoing support."
      benefits={[
        'Improved application performance and user experience',
        'Reduced infrastructure downtime and operational risk',
        'Scalable platforms that grow with your organization',
        'Vendor-agnostic advisory to choose the right platform',
        'Local expertise backed by global technology partnerships',
        'Comprehensive warranty and support coverage',
      ]}
      offerings={[
        { title: 'Server Procurement & Deployment', desc: 'Dell PowerEdge, HP ProLiant, and Supermicro server deployment for data centers and branch offices.' },
        { title: 'Storage Solutions', desc: 'SAN, NAS, and All-Flash storage arrays for high-performance workloads and enterprise applications.' },
        { title: 'GPU Computing', desc: 'NVIDIA-powered GPU servers for AI, machine learning, visualization, and high-performance computing.' },
        { title: 'Hyperconverged Infrastructure', desc: 'Simplified, software-defined HCI platforms combining compute, storage, and networking.' },
        { title: 'Infrastructure Assessment', desc: 'Detailed evaluation of existing infrastructure with performance benchmarking and upgrade roadmaps.' },
        { title: 'Migration & Modernization', desc: 'Seamless migration from legacy infrastructure to modern platforms with minimal disruption.' },
      ]}
      technologies={[
        { src: '/Dell_EMC_logo.svg.png', alt: 'Dell EMC' },
        { src: '/hp-proliant-servers.svg', alt: 'HP ProLiant' },
        { src: '/NVIDIA_logo.svg.png', alt: 'NVIDIA DGX' },
        { src: '/vmware.svg', alt: 'VMware vSphere' },
        { src: '/Nutanix_Logo.svg.png', alt: 'Nutanix' },
        { src: '/HPE-logo-full-clr-pos-rgb (3).png', alt: 'HPE Alletra' },
        { src: '/Hyper-V_Logo.png', alt: 'Microsoft Hyper-V' },
      ]}
      faq={[
        { q: 'What computing infrastructure brands does Impact Technology supply in Ethiopia?', a: 'We are authorized partners for Dell Technologies, HP Enterprise, and NVIDIA — providing genuine products with full manufacturer warranty and local support coverage.' },
        { q: 'Can you handle large-scale server deployments across multiple locations?', a: 'Yes. We have experience deploying computing infrastructure for large government agencies, financial institutions, and enterprises with multiple branches across Ethiopia.' },
        { q: 'Do you provide post-deployment support and maintenance?', a: 'Absolutely. We offer structured support contracts including preventive maintenance, on-site engineer visits, and 24/7 remote monitoring and response.' },
        { q: 'How long does a typical server deployment take?', a: 'Timelines vary by scale, but most standard rack deployments are completed within 2–4 weeks from order confirmation, including configuration, testing, and handover.' },
      ]}
    />
  )
}
