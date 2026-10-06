import { Inter, Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";

// latin-ext carries the ₹ sign (U+20B9), so rupee amounts render in the brand fonts
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Not preloaded: the browser fetches it only when Devanagari glyphs appear (unicode-range)
export const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
  preload: false,
});
