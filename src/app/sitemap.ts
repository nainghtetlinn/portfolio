import type { MetadataRoute } from "next";

import env from "@/config/env";
import { projectSource } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_APP_URL;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectSource
    .getPages()
    .map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...projectRoutes];
}

