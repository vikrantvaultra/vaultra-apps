import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { display, mono, text } from "./fonts";
import { BASE_PATH, SITE_DESC, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: "Loot Liye Ya Lut Gaye? 🛒 Sale ka asli test",
    description: "₹10,000. 12 deals. 6 second har deal. Asli loot pakdo ya jaal mein phaso. Tumhara score kya hoga?",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loot Liye Ya Lut Gaye? 🛒 Sale ka asli test",
    description: "₹10,000. 12 deals. 6 second har deal. Asli loot pakdo ya jaal mein phaso.",
  },
  appleWebApp: { title: "Loot Ya Lut", capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0A1D" },
    { media: "(prefers-color-scheme: light)", color: "#F5F1FF" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-Latn" className={`${display.variable} ${text.variable} ${mono.variable}`}>
      <body>
        {children}
        {/* Through the hub, Vercel's /_vercel endpoints are reached under our path (see apps/hub/vercel.json) */}
        <Analytics scriptSrc={`${BASE_PATH}/_vercel/insights/script.js`} endpoint={`${BASE_PATH}/_vercel/insights`} />
      </body>
    </html>
  );
}
