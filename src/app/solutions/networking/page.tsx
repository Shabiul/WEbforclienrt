import type { Metadata } from 'next'
import { Network } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'Networking Solutions',
  description: 'Enterprise LAN, WAN, SD-WAN, and wireless networking solutions by Impact Technology PLC — Cisco authorized partner in Ethiopia.',
}

export default function NetworkingPage() {
  return (
    <SolutionPageTemplate
      icon={Network}
      label="Networking"
      title="Enterprise Networking Solutions"
      subtitle="High-performance LAN, WAN, SD-WAN, and wireless solutions — connecting your organization across branches, campuses, and the cloud with reliability and speed."
      intro="Reliable network connectivity is fundamental to everything your organization does. Impact Technology PLC is a Cisco-authorized partner delivering enterprise networking solutions across Ethiopia — from headquarters campus networks to multi-branch WAN designs and carrier-grade wireless deployments. Our network architects design for performance, resilience, and security, ensuring that your connectivity infrastructure supports business growth rather than limiting it."
      benefits={[
        'Enterprise-grade performance across LAN, WAN, and wireless environments',
        'Reduced network complexity with centrally managed SD-WAN',
        'Improved security with segmentation and next-generation firewall integration',
        'Faster troubleshooting through network observability and monitoring',
        'Scalable architecture that accommodates organizational growth',
        'Cisco certified engineers providing world-class local support',
      ]}
      offerings={[
        { title: 'Campus & Branch LAN', desc: 'Cisco Catalyst and Meraki switching deployments for headquarters, campuses, and branch office environments.' },
        { title: 'SD-WAN & WAN Optimization', desc: 'Cisco SD-WAN deployments replacing expensive MPLS circuits with intelligent, application-aware WAN connectivity.' },
        { title: 'Enterprise Wireless', desc: 'High-density Wi-Fi 6 and Wi-Fi 6E deployments for offices, campuses, hospitals, and large venues.' },
        { title: 'Network Security', desc: 'Integrated firewall, IDS/IPS, and network segmentation to protect against modern threats at the network layer.' },
        { title: 'Network Assessment & Design', desc: 'Detailed current-state analysis and future-state network architecture design aligned to business objectives.' },
        { title: 'NOC & Network Monitoring', desc: '24/7 network operations center services with proactive fault detection, performance monitoring, and incident response.' },
      ]}
      technologies={['Cisco Catalyst', 'Cisco Meraki', 'Cisco SD-WAN (Viptela)', 'Fortinet FortiGate', 'Aruba Networks', 'Juniper Networks', 'Palo Alto Networks', 'SolarWinds NPM']}
      faq={[
        { q: 'Is Impact Technology an authorized Cisco partner in Ethiopia?', a: 'Yes. We maintain an active Cisco partnership with certified CCNA, CCNP, and CCIE engineers on our team, enabling us to supply, deploy, and support the full Cisco product portfolio.' },
        { q: 'Can you connect multiple office locations across Ethiopia via WAN?', a: 'Absolutely. We design and deploy multi-site WAN solutions using a combination of fiber, microwave, and SD-WAN technologies tailored to the connectivity landscape in Ethiopia.' },
        { q: 'What is SD-WAN and how does it benefit Ethiopian enterprises?', a: 'SD-WAN (Software-Defined Wide Area Network) centralizes WAN management, improves application performance, and reduces circuit costs by intelligently routing traffic over multiple connection types including broadband, LTE, and MPLS.' },
        { q: 'Do you offer network monitoring as a service?', a: 'Yes. Our managed network monitoring service provides continuous visibility into your network health, proactive alerting for anomalies, and monthly performance reporting.' },
      ]}
    />
  )
}
