import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Point this to the sitemap file we created above
    sitemap: 'https://ishak-qureshee-akib.netlify.app/sitemap.xml',
  }
}