import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://djray.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://djray.vercel.app/gallery",
      lastModified: new Date(),
    },
  ];
}
