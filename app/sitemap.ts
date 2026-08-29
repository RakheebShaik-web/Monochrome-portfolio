import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-29");
  return ["", "/work", "/systems", "/skills", "/contact"].map(path => ({ url: new URL(path || "/", siteUrl()).toString(), lastModified: updated, changeFrequency: path ? "monthly" as const : "weekly" as const, priority: path ? 0.8 : 1 }));
}
