import type { MetadataRoute } from "next";
import { listDocs } from "@/lib/content";
import { site } from "@/lib/site";

const priorityByPath: Record<string, number> = {
  "/": 1,
  "/raxi-win-register": 0.95,
  "/raxi-win-login": 0.9,
  "/raxi-win-apk": 0.85,
  "/raxi-win-game": 0.85,
  "/guides/scam-checklist": 0.75,
  "/responsible-play": 0.5,
};

const freqByPath: Record<string, MetadataRoute.Sitemap[0]["changeFrequency"]> = {
  "/": "daily",
  "/raxi-win-register": "weekly",
  "/raxi-win-login": "weekly",
  "/raxi-win-apk": "weekly",
  "/raxi-win-game": "weekly",
  "/guides/scam-checklist": "weekly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return listDocs().map((doc) => {
    const modified = doc.updated ? new Date(`${doc.updated}T00:00:00+05:30`) : new Date("2026-11-04");
    return {
      url: `${site.url}${doc.path === "/" ? "" : doc.path}`,
      lastModified: modified,
      changeFrequency: freqByPath[doc.path] ?? "monthly",
      priority: priorityByPath[doc.path] ?? 0.6,
    };
  });
}
