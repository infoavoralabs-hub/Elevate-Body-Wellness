import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { absoluteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/programs',
    '/testimonials',
    '/contact',
    '/faq',
    '/blog',
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogs = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt.split('T')[0],
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogs];
}
