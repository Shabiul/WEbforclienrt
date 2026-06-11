import type { Metadata } from 'next'
import { Settings } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'Managed IT Services',
  description: 'Proactive managed IT services — 24/7 monitoring, helpdesk, patch management, and IT consulting by Impact Technology PLC in Ethiopia.',
}

export default function ManagedServicesPage() {
  return (
    <SolutionPageTemplate
      icon={Settings}
      label="Managed Services"
      title="Managed IT Services"
      subtitle="Proactive IT management, 24/7 monitoring, and expert support — freeing your team to focus on business objectives while we keep your technology running at peak performance."
      intro="Managing a modern IT environment requires constant vigilance, specialized expertise, and significant investment in tools and staff. Impact Technology PLC's Managed Services deliver enterprise-grade IT operations support on a subscription basis — giving you predictable costs, proactive management, and access to our full team of certified engineers. Our managed services clients benefit from faster issue resolution, fewer unplanned outages, and technology that evolves with their business needs."
      benefits={[
        'Predictable monthly IT costs replacing unpredictable break-fix expenses',
        'Proactive issue resolution before problems impact the business',
        'Access to multi-disciplinary team of certified engineers',
        'Faster incident resolution with defined SLAs and escalation paths',
        'Strategic IT advisory to align technology with business objectives',
        'Compliance support including patch management and security hygiene',
      ]}
      offerings={[
        { title: '24/7 Infrastructure Monitoring', desc: 'Continuous monitoring of servers, networks, storage, and security systems with automated alerting and NOC response.' },
        { title: 'Helpdesk & End User Support', desc: 'Multi-channel IT helpdesk providing Level 1–3 support to your employees via phone, email, and remote access.' },
        { title: 'Patch & Vulnerability Management', desc: 'Regular OS and application patching across all managed devices, reducing exposure to known vulnerabilities.' },
        { title: 'Backup Monitoring & Management', desc: 'Daily backup verification, restoration testing, and proactive management of backup infrastructure and cloud storage.' },
        { title: 'IT Consulting & Advisory', desc: 'Regular technology reviews, roadmap planning, and vendor management advisory from experienced IT strategists.' },
        { title: 'Cloud Managed Services', desc: 'Management and optimization of AWS, Azure, and Google Cloud environments including cost management and security posture reviews.' },
      ]}
      technologies={[
        { src: '/managed services/ServiceNow_logo.svg.png', alt: 'ServiceNow ITSM' },
        { src: '/managed services/freshservice.svg', alt: 'Freshservice' },
        { src: '/managed services/Official_SolarWinds_Logo.svg.png', alt: 'SolarWinds' },
        { src: '/managed services/Zabbix_logo.svg.png', alt: 'Zabbix' },
        { src: '/managed services/Microsoft_Azure_Logo.svg.png', alt: 'Microsoft Azure Monitor' },
        { src: '/managed services/ConnectWise_id-txRDG2s_1.svg', alt: 'ConnectWise' },
        { src: '/managed services/Veeam_logo.svg.png', alt: 'Veeam Cloud' },
        { src: '/managed services/pagerduty.svg', alt: 'PagerDuty' },
      ]}
      faq={[
        { q: 'What is the difference between managed services and break-fix IT support?', a: 'Break-fix support is reactive — you call when something breaks. Managed services are proactive — we continuously monitor, maintain, and optimize your environment to prevent issues before they occur, at a predictable monthly cost.' },
        { q: 'What SLAs do Impact Technology\'s managed services include?', a: 'We offer tiered SLA packages. Our standard SLA provides 4-hour response for critical incidents, with premium packages offering 1-hour response and 24/7 on-site engineer availability depending on contract level.' },
        { q: 'Can managed services cover our offices in different cities?', a: 'Yes. We provide nationwide managed services coverage across Ethiopia, with field engineers in major cities for on-site interventions when remote resolution is not possible.' },
        { q: 'How do you handle security incidents under a managed services contract?', a: 'Security incidents are classified as Priority 1 events under our managed services framework. Our response team initiates containment within 1 hour, coordinates remediation, and provides full incident reports to management.' },
      ]}
    />
  )
}
