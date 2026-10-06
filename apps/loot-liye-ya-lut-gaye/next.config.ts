import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/site";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: BASE_PATH,
  // fonts read from disk by the image routes (next/og)
  outputFileTracingIncludes: {
    "/api/og": ["./assets/og-fonts/**"],
    "/pwa-icon/[size]": ["./assets/og-fonts/**"],
  },
  // Opening this project's own domain (not via the hub) lands on the game
  async redirects() {
    return [{ source: "/", destination: BASE_PATH, basePath: false, permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
