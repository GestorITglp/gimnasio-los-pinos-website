import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['en', 'es', 'fr'];
  const baseUrl = 'https://gimnasiolospinos.edu.co';
  const metadataRoutesWithoutBaseUrl: MetadataRoute.Sitemap = [
    {
      url: '',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'educational-project',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'international-baccalaureate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'contacts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'admissions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return metadataRoutesWithoutBaseUrl.flatMap((obj) => {
    return languages.map((lang) => {
      return {
        ...obj,
        url: `${baseUrl}/${lang}/${obj.url}`,
      };
    }) as MetadataRoute.Sitemap;
  });
}
