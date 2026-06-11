// JSON-LD structured data for SEO, AEO (Answer Engine), and GEO (Generative Engine Optimization)
const BASE = 'https://www.impacttechnology.et'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ITService'],
    name: 'Impact Technology PLC',
    alternateName: 'Impact Technology',
    url: BASE,
    logo: `${BASE}/logo.png`,
    description: "Ethiopia's leading IT solutions provider — enterprise computing, data center, networking, cybersecurity, and managed services for over a decade.",
    foundingDate: '2013',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
    slogan: "Empowering Ethiopia's Digital Future",
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
        streetAddress: 'Bole Road',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'IN',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+251-11-XXX-XXXX',
        email: 'info@impacttechnology.et',
        availableLanguage: ['English', 'Amharic'],
        areaServed: 'ET',
      },
    ],
    sameAs: [],
    knowsAbout: [
      'Enterprise Computing Infrastructure',
      'Data Center Solutions',
      'Network Engineering',
      'Cybersecurity',
      'Managed IT Services',
      'End User Computing',
      'Cloud Computing',
      'Digital Transformation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Solutions & Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computing Infrastructure', url: `${BASE}/solutions/computing-infrastructure` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Center Solutions', url: `${BASE}/solutions/data-center` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Networking Solutions', url: `${BASE}/solutions/networking` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity', url: `${BASE}/solutions/cybersecurity` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End User Computing', url: `${BASE}/solutions/end-user-computing` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Services', url: `${BASE}/solutions/managed-services` } },
      ],
    },
    areaServed: [
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'India' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Impact Technology PLC',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.url}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
