// Served under this path on the shared vaultra-apps domain; keep in sync with `basePath` in next.config.ts
export const BASE_PATH = "/loot-liye-ya-lut-gaye";

// Public URL (including BASE_PATH) used for metadata (canonical, OG) and for share links when running locally.
// The app's own Vercel project only serves the hub's rewrites, so its domain is not the public one.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://vaultra-apps.vercel.app${BASE_PATH}`).replace(/\/$/, "");

export const SITE_NAME = "Loot Liye Ya Lut Gaye?";
export const SITE_TITLE = "Loot Liye Ya Lut Gaye? 🛒 60-second sale trap game";
export const SITE_DESC =
  "₹10,000. 12 deals. 6 second har deal. Sale season ka asli test — real loot pakdo, Fake MRP aur No Cost EMI ke jaal se bacho. Dosto ko challenge karo!";
