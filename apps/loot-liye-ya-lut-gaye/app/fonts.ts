import localFont from "next/font/local";

// Self-hosted subsets (latin + ₹). Bricolage Grotesque for text and condensed display, IBM Plex Mono for receipts.
export const display = localFont({
  src: "./fonts/bricolage-display.woff2",
  weight: "700 800",
  variable: "--font-display",
  display: "swap",
});

export const text = localFont({
  src: "./fonts/bricolage-text.woff2",
  weight: "400 800",
  variable: "--font-text",
  display: "swap",
});

export const mono = localFont({
  src: [
    { path: "./fonts/plexmono-Medium.woff2", weight: "500" },
    { path: "./fonts/plexmono-Bold.woff2", weight: "700" },
  ],
  variable: "--font-mono",
  display: "swap",
  preload: false, // only needed once the first card flips
});
