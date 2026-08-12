import type { MetadataRoute } from "next";
import { pieces } from "@/content/pieces";

const siteUrl = "https://www.shantasamanta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/exhibitions`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/press`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const pieceRoutes: MetadataRoute.Sitemap = pieces.map((p) => ({
    url: `${siteUrl}/portfolio/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...pieceRoutes];
}
