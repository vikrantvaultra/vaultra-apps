import type { Locale } from "./types";

/** ₹2,50,000 → "₹2.5 lakh"; ₹1,20,00,000 → "₹1.2 crore"; smaller amounts use Indian grouping. */
export function formatINRShort(amount: number, locale: Locale = "en"): string {
  const lakh = locale === "hi" ? "लाख" : "lakh";
  const crore = locale === "hi" ? "करोड़" : "crore";
  const trim = (n: number) => String(Number(n.toFixed(2)));
  if (amount >= 1e7) return `₹${trim(amount / 1e7)} ${crore}`;
  if (amount >= 1e5) return `₹${trim(amount / 1e5)} ${lakh}`;
  return formatINR(amount);
}

export function formatINR(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

/** Compact rupees for tight spaces: ₹20.1 lakh, ₹1.2 crore, ₹45,000 */
export function formatINRCompact(amount: number, locale: Locale = "en"): string {
  const lakh = locale === "hi" ? "लाख" : "lakh";
  const crore = locale === "hi" ? "करोड़" : "crore";
  const one = (n: number) => String(Number(n.toFixed(1)));
  if (amount >= 1e7) return `₹${one(amount / 1e7)} ${crore}`;
  if (amount >= 1e5) return `₹${one(amount / 1e5)} ${lakh}`;
  return formatINR(amount);
}
