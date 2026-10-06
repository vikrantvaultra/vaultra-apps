import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

/*
 * Latin only. The ₹ sign (U+20B9) lives in the large latin-ext subsets, so instead it comes from two tiny
 * ₹-only subsets of the same variable fonts (~1 KB each, see app/fonts/README.md), listed first in the stacks.
 *
 * Hindi uses the device's Devanagari font (see --system-devanagari in globals.css): Android ships Noto Sans
 * Devanagari itself, so most readers get it with zero download.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const rupeeSans = localFont({
  src: "./fonts/rupee-inter.woff2",
  weight: "100 900",
  variable: "--font-rupee",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+20B9" }],
});

export const rupeeHeading = localFont({
  src: "./fonts/rupee-jakarta.woff2",
  weight: "200 800",
  variable: "--font-rupee-heading",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+20B9" }],
});
