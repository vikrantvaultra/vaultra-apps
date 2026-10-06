import type { MetadataRoute } from "next";
import { CATEGORIES, MINISTRIES, STATES } from "@/data/taxonomy";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SCHEMES } from "@/lib/schemes";
import { SITE_URL } from "@/lib/site";

const STATIC = ["/", "/find", "/search", "/kundli", "/dashboard", "/about", "/contact", "/faqs", "/disclaimer", "/terms", "/privacy", "/accessibility"];

/** Every page in both languages, with hreflang alternates */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (href: string, lastModified?: string, priority = 0.6): MetadataRoute.Sitemap[number] => ({
    url: SITE_URL + getPathname({ href, locale: routing.defaultLocale }),
    lastModified: lastModified ?? "2026-10-06",
    priority,
    alternates: { languages: Object.fromEntries(routing.locales.map((l) => [l, SITE_URL + getPathname({ href, locale: l })])) },
  });

  return [
    ...STATIC.map((p) => entry(p, undefined, p === "/" ? 1 : 0.8)),
    ...SCHEMES.map((s) => entry(`/schemes/${s.slug}`, s.lastVerified, 0.9)),
    ...Object.keys(CATEGORIES).map((c) => entry(`/category/${c}`)),
    ...Object.keys(STATES).map((s) => entry(`/state/${s}`, undefined, 0.5)),
    ...Object.keys(MINISTRIES).map((m) => entry(`/ministry/${m}`, undefined, 0.5)),
  ];
}
