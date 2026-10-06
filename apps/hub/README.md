# hub

The front door at https://vaultra-apps.vercel.app. A static page listing the apps, plus rewrites that serve each
app under its own path from its own Vercel project:

| Path | Vercel project (Root Directory) |
|---|---|
| `/yojana-saathi` | `vaultra-yojana-saathi` (`apps/yojana-saathi`) |
| `/loot-liye-ya-lut-gaye` | `vaultra-loot-liye` (`apps/loot-liye-ya-lut-gaye`) |
| `/sale-sniper` | `vaultra-sale-sniper` (`apps/sale-sniper`) |

Each app is built to live under its path (Next.js `basePath`, or `/sale-sniper/` in the static build), so it works
the same through the hub and on its own `*.vercel.app` domain, and apps still deploy independently.

## Adding an app

1. Build the app under `/<slug>` (`basePath: "/<slug>"` for Next.js, and prefix any hard-coded `/…` URLs).
2. Create its own Vercel project with Root Directory `apps/<slug>`.
3. Add a rewrite to `vercel.json`: `/<slug>/:path*` → `https://<project>.vercel.app/<slug>/:path*`.
4. Add a card to `public/index.html` (and its sitemap/disallows to `public/robots.txt`).
