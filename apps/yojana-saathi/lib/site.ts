/** Served under this path on the shared vaultra-apps domain; keep in sync with `basePath` in next.config.ts */
export const BASE_PATH = "/yojana-saathi";

/** Public URL of the app, including BASE_PATH */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? `https://vaultra-apps.vercel.app${BASE_PATH}`).replace(/\/$/, "");

/** Government and public-data portals linked from the footer. */
export const USEFUL_LINKS = [
  { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
  { label: "UMANG", href: "https://web.umang.gov.in/" },
  { label: "National Portal of India", href: "https://www.india.gov.in/" },
  { label: "MyGov", href: "https://www.mygov.in/" },
  { label: "data.gov.in", href: "https://data.gov.in/" },
] as const;
