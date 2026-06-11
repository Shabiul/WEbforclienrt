import type { Metadata } from 'next'
import { Shield } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions',
  description: 'Comprehensive cybersecurity solutions for Ethiopian enterprises — firewall, endpoint protection, security audits, and SOC services by Impact Technology PLC.',
}

export default function CybersecurityPage() {
  return (
    <SolutionPageTemplate
      icon={Shield}
      label="Cybersecurity"
      title="Cybersecurity Solutions"
      subtitle="Comprehensive security frameworks protecting your organization's assets, data, and reputation from evolving cyber threats — from perimeter defense to endpoint and cloud security."
      intro="As cyber threats grow in sophistication, Ethiopian organizations face increasing risk from ransomware, data breaches, and advanced persistent threats. Impact Technology PLC provides end-to-end cybersecurity services — combining leading technology platforms with deep expertise to build layered security architectures. Whether you need a firewall deployment, a full security audit, or an ongoing managed SOC service, our certified security team is equipped to protect what matters most to your organization."
      benefits={[
        'Proactive threat detection before incidents become breaches',
        'Compliance with industry regulations and data protection requirements',
        'Reduced attack surface through zero-trust architecture principles',
        'Rapid incident response minimizing operational impact',
        'Ongoing security posture improvement through regular assessments',
        'Trained security professionals providing continuous oversight',
      ]}
      offerings={[
        { title: 'Next-Gen Firewall & Perimeter Security', desc: 'Fortinet FortiGate, Palo Alto, and Cisco ASA/FTD deployments providing advanced threat prevention at the network perimeter.' },
        { title: 'Endpoint Detection & Response (EDR)', desc: 'AI-powered endpoint security protecting workstations, laptops, and servers from malware, ransomware, and zero-day exploits.' },
        { title: 'Security Information & Event Management (SIEM)', desc: 'Centralized log collection, correlation, and alerting providing visibility across your entire IT environment.' },
        { title: 'Security Audits & Penetration Testing', desc: 'Independent assessment of your security posture, vulnerability scanning, and authorized penetration testing to identify weaknesses before attackers do.' },
        { title: 'Identity & Access Management', desc: 'Multi-factor authentication, privileged access management, and Active Directory hardening to control who accesses what.' },
        { title: 'Security Awareness Training', desc: 'Regular phishing simulations and employee training programs to build a human firewall across your organization.' },
      ]}
      technologies={[
        { src: '/cybersecurity/Fortinet-Logo.wine.svg', alt: 'Fortinet FortiGate' },
        { src: '/cybersecurity/PaloAltoNetworks_2020_Logo.svg.png', alt: 'Palo Alto Networks' },
        { src: '/cybersecurity/crowdstrike-2.svg', alt: 'CrowdStrike Falcon' },
        { src: '/cybersecurity/microsoft-defender.svg', alt: 'Microsoft Defender' },
        { src: '/cybersecurity/Splunk Symbol SVG.svg', alt: 'Splunk SIEM' },
        { src: '/Networking/Cisco_logo.svg.png', alt: 'Cisco SecureX' },
        { src: '/cybersecurity/varonis.svg', alt: 'Varonis' },
        { src: '/cybersecurity/knowbe4-ar21.svg', alt: 'KnowBe4' },
      ]}
      faq={[
        { q: 'What cybersecurity threats are most common for Ethiopian enterprises?', a: 'Ethiopian organizations most frequently face phishing and social engineering attacks, ransomware targeting financial and government sectors, insider threats, and vulnerabilities in internet-facing systems. Building layered defenses addresses all these vectors.' },
        { q: 'How long does a cybersecurity audit take?', a: 'A standard security audit for a mid-size organization typically takes 2–4 weeks, covering network infrastructure, endpoint security, access controls, policies, and procedures. We provide a detailed findings report with prioritized remediation guidance.' },
        { q: 'Can Impact Technology provide ongoing security monitoring?', a: 'Yes. Our managed SOC service provides 24/7 threat monitoring, real-time alerting, and incident response support — giving you enterprise-grade security operations without the cost of building an internal team.' },
        { q: 'Do you help organizations achieve ISO 27001 certification?', a: 'Yes. We provide ISO 27001 gap assessments, policy development, and implementation support to help organizations meet information security management requirements and achieve certification.' },
      ]}
    />
  )
}
