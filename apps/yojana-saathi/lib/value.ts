import { formatINR, formatINRShort } from "./format";
import type { Locale, SchemeValue } from "./types";

/** "₹6,000 a year", "₹5 lakh cover a year", "Loans up to ₹20 lakh", "₹1,000 a month pension" */
export function describeValue(v: SchemeValue, locale: Locale): string {
  const hi = locale === "hi";
  const amt = v.amount >= 100_000 ? formatINRShort(v.amount, locale) : formatINR(v.amount);
  const per = {
    "one-time": hi ? "एक बार" : "one-time",
    monthly: hi ? "हर महीने" : "a month",
    yearly: hi ? "हर साल" : "a year",
  }[v.period];

  switch (v.kind) {
    case "loan":
      return hi ? `${amt} तक का ऋण` : `Loans up to ${amt}`;
    case "cover":
      return hi ? `${amt} तक का कवर${v.period === "yearly" ? " हर साल" : ""}` : `${amt} cover${v.period === "yearly" ? " a year" : ""}`;
    case "pension":
      return hi ? `${amt} पेंशन ${per}` : `${amt} pension ${per}`;
    default:
      return v.period === "one-time" ? (hi ? `${amt} एक बार` : `${amt} one-time`) : `${amt} ${per}`;
  }
}
