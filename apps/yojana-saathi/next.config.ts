import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { BASE_PATH } from "./lib/site";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: BASE_PATH,
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
    // Tailwind's atomic CSS is small; inlining it removes render-blocking stylesheet requests
    inlineCss: true,
  },
};

export default withNextIntl(nextConfig);
