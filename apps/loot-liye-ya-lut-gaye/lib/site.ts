// Public URL used for metadata (canonical, OG) and for share links when running locally.
// Priority: NEXT_PUBLIC_SITE_URL → Vercel's production domain (auto, incl. custom domain) → localhost.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = "Loot Liye Ya Lut Gaye?";
export const SITE_TITLE = "Loot Liye Ya Lut Gaye? 🛒 60-second sale trap game";
export const SITE_DESC =
  "₹10,000. 12 deals. 6 second har deal. Sale season ka asli test — real loot pakdo, Fake MRP aur No Cost EMI ke jaal se bacho. Dosto ko challenge karo!";
