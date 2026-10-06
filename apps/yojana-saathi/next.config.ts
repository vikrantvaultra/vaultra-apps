import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { BASE_PATH } from "./lib/site";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: BASE_PATH,
  // Read from disk by the Kundli link-preview image when it renders on demand
  outputFileTracingIncludes: { "/[locale]/kundli/opengraph-image": ["./assets/og/**"] },
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
    // Tailwind's atomic CSS is small; inlining it removes render-blocking stylesheet requests
    inlineCss: true,
  },
};

export default withNextIntl(nextConfig);
