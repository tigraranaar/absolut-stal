import { MetadataRoute } from 'next';
import { getCategoriesFromJson } from '@/lib/catalog-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://absolut-stal.ru';
  const categories = getCategoriesFromJson();

  const withTrailingSlash = (url: string) =>
    url.endsWith('/') ? url : `${url}/`;

  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: withTrailingSlash(baseUrl),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: withTrailingSlash(`${baseUrl}/catalog`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: withTrailingSlash(`${baseUrl}/about`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withTrailingSlash(`${baseUrl}/contacts`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withTrailingSlash(`${baseUrl}/delivery`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Страницы категорий
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: withTrailingSlash(`${baseUrl}/catalog/${category.slug}`),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages];
}
