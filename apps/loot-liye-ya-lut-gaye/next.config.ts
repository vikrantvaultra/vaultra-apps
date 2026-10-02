import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // fonts read from disk by the image routes (next/og)
  outputFileTracingIncludes: {
    "/api/og": ["./assets/og-fonts/**"],
    "/pwa-icon/[size]": ["./assets/og-fonts/**"],
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
