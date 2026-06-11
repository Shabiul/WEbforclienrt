import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://impact-technology.vercel.app/sitemap.xml',
    host: 'https://impact-technology.vercel.app',
  }
}
