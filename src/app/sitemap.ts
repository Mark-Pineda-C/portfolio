import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mark-pineda.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: "https://mark-pineda.dev/es",
          en: "https://mark-pineda.dev/en",
        },
      },
    },
  ];
}
