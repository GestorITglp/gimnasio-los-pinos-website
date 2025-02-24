import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://gimnasiolospinos.edu.co/sitemap.xml`,
  };
};

export default robots;
