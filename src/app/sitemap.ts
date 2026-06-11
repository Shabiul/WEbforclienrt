import { MetadataRoute } from 'next'

const BASE = 'https://impact-technology.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/solutions', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/solutions/computing-infrastructure', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/data-center', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/networking', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/cybersecurity', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/end-user-computing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/managed-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/partners', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/industries', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/success-stories', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ]
  return pages.map(p => ({
    url: `${BASE}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
