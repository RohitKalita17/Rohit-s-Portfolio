import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";

const BASE_URL = "https://www.rohitkalita.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: BASE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE_URL}/cases/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [home, ...casePages];
}
