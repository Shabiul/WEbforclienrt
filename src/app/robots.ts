import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://webforclientart69.vercel.app/sitemap.xml',
    host: 'https://webforclientart69.vercel.app',
  }
}
