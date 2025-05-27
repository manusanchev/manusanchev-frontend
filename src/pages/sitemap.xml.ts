import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { collections } from '@/types/collections';

export const GET: APIRoute = async ({ site }) => {
  const SITE_URL = site?.toString().replace(/\/$/, '') || 'https://manusanchev.com';
  // Obtener todos los posts del blog publicados
  const allPosts = await getCollection(collections.BLOG);
  const publishedPosts = allPosts.filter(post => !post.data.draft);

  // URLs estáticas del sitio
  const staticPages = [
    {
      url: '',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  // URLs dinámicas de los posts del blog
  const blogPages = publishedPosts.map(post => ({
    url: `/blog/${post.id}`,
    lastmod: new Date(post.data.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // Combinar todas las páginas
  const allPages = [...staticPages, ...blogPages];

  // Generar el XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache por 1 hora
    }
  });
}; 