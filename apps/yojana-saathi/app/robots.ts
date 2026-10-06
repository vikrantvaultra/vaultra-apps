import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [`${BASE_PATH}/api/`, `${BASE_PATH}/profile`, `${BASE_PATH}/hi/profile`] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
