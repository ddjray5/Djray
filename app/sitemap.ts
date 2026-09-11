import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https" + "://" + "djray.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/gallery",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/training",
      lastModified: new Date(),
    },
  ];
}
