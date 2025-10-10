import { MetadataRoute } from 'next';
import { getCategoriesFromJson } from '@/lib/catalog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://absolut-stal.ru';
  const categories = getCategoriesFromJson();

  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/delivery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Страницы категорий
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/catalog/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Страницы подкатегорий
  const subcategoryPages: MetadataRoute.Sitemap = [];
  categories.forEach((category) => {
    category.subcategories?.forEach((subcategory) => {
      subcategoryPages.push({
        url: `${baseUrl}/catalog/${category.slug}/${subcategory.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...categoryPages, ...subcategoryPages];
}
