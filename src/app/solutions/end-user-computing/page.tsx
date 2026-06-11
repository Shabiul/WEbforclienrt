import type { Metadata } from 'next'
import { Monitor } from 'lucide-react'
import SolutionPageTemplate from '@/components/SolutionPageTemplate'

export const metadata: Metadata = {
  title: 'End User Computing Solutions',
  description: 'Modern workstations, laptops, and managed device solutions from Apple, HP, and Dell — supplied, configured, and supported by Impact Technology PLC in Ethiopia.',
}

export default function EndUserComputingPage() {
  return (
    <SolutionPageTemplate
      icon={Monitor}
      label="End User Computing"
      title="End User Computing Solutions"
      subtitle="Modern workstations, laptops, and managed device solutions from Apple, HP, and Dell — equipped, configured, and supported to maximize workforce productivity."
      intro="The devices your employees use every day directly impact their productivity and your organization's security posture. Impact Technology PLC supplies and manages the complete end user computing lifecycle — from device procurement and standardization through configuration, deployment, and ongoing device management. As an authorized Apple, HP, and Dell reseller, we provide genuine products with full warranty support and dedicated local service."
      benefits={[
        'Standardized device fleet reducing support complexity and costs',
        'Modern hardware boosting employee productivity and satisfaction',
        'Centralized device management improving security and compliance',
        'Streamlined procurement through a single trusted local partner',
        'Rapid hardware replacement minimizing employee downtime',
        'Full warranty and accidental damage coverage options',
      ]}
      offerings={[
        { title: 'Apple Mac Deployments', desc: 'MacBook, iMac, and Mac Mini deployments with Apple Business Manager and Jamf MDM integration for enterprise environments.' },
        { title: 'HP & Dell Workstations and Laptops', desc: 'HP EliteBook, Dell Latitude, and Precision workstations configured to organizational standards and deployed at scale.' },
        { title: 'Mobile Device Management (MDM)', desc: 'Centralized management of all devices using Microsoft Intune, Jamf, or VMware Workspace ONE — enforcing policies and enabling remote wipe.' },
        { title: 'Peripherals & Accessories', desc: 'Monitors, docking stations, keyboards, headsets, and conference room equipment from premium brands.' },
        { title: 'Device Lifecycle Management', desc: 'Structured processes for device provisioning, reassignment, and secure disposal aligned to data protection requirements.' },
        { title: 'Tech Refresh Planning', desc: 'Strategic device refresh roadmaps helping organizations upgrade technology on schedule within budget constraints.' },
      ]}
      technologies={['Apple Business Manager', 'Microsoft Intune', 'Jamf Pro', 'HP Device as a Service', 'Dell Unified Workspace', 'VMware Workspace ONE', 'Microsoft 365', 'Cisco Webex Devices']}
      faq={[
        { q: 'Is Impact Technology an authorized Apple reseller in Ethiopia?', a: 'Yes. We are an authorized Apple reseller for business and enterprise, providing genuine Apple products with manufacturer warranty and access to Apple Business Manager for enterprise device management.' },
        { q: 'Can you manage devices for employees working from multiple locations?', a: 'Yes. With cloud-based MDM solutions like Microsoft Intune and Jamf, we can manage, secure, and support devices regardless of where employees are located — whether in Addis Ababa, regional offices, or working remotely.' },
        { q: 'What happens when a device breaks down or needs replacement?', a: 'We maintain a pool of spare devices and offer advance hardware replacement services to minimize downtime. Our support team handles warranty claims, repairs, and loaner device provision.' },
        { q: 'How do you secure devices against data theft or loss?', a: 'All managed devices are enrolled in MDM with full-disk encryption enforced, remote wipe capability enabled, and security policies applied. Lost or stolen devices can be wiped remotely within minutes.' },
      ]}
    />
  )
}
