# vaultra-apps

A home for small, standalone web apps and games. Each app is fully independent
(its own `package.json`, build, and Vercel project) so they never break each other.
They're all served from one domain, one path per app: https://vaultra-apps.vercel.app/<app-slug>
(routed by [`apps/hub`](apps/hub)).

## Layout

```
vaultra-apps/
├── apps/
│   └── <app-slug>/          one folder per app (kebab-case)
│       ├── README.md        what it is, how to run + deploy
│       ├── package.json     own deps & scripts (dev / build / preview)
│       ├── app/ components/ lib/   app code (Next.js)
│       ├── public/          static files served as-is (icons, OG image, fonts)
│       ├── assets/          build-time assets (fonts for generated images)
│       └── prototype/       original prototype / reference files
└── README.md                this index
```

## Apps

| App | What | Stack | Live |
|---|---|---|---|
| [hub](apps/hub) | Home page listing the apps + path routing | static, `vercel.json` rewrites | [vaultra-apps.vercel.app](https://vaultra-apps.vercel.app) |
| [loot-liye-ya-lut-gaye](apps/loot-liye-ya-lut-gaye) | 60-second festive-sale trap game (Hinglish) | Next.js 16, TypeScript | [/loot-liye-ya-lut-gaye](https://vaultra-apps.vercel.app/loot-liye-ya-lut-gaye) |
| [sale-sniper](apps/sale-sniper) | Chrome extension: record a sale wishlist, auto-buy on Amazon.in & Flipkart | Manifest V3, vanilla JS | [/sale-sniper](https://vaultra-apps.vercel.app/sale-sniper) (install page) |
| [yojana-saathi](apps/yojana-saathi) | Government scheme discovery + Sarkari Kundli (EN/HI) | Next.js 16, TypeScript, Tailwind | [/yojana-saathi](https://vaultra-apps.vercel.app/yojana-saathi) |

## Adding a new app

1. Scaffold inside `apps/` (e.g. `cd apps && npx create-next-app@latest <new-slug> --ts --app --use-npm --disable-git`).
2. Set `basePath: "/<new-slug>"` in its `next.config.ts` (and prefix any hard-coded `/…` URLs).
3. Add a row to the table above.
4. On Vercel: **Add New → Project →** import this repo, set **Root Directory** to `apps/<new-slug>`.
   Each app gets its own project and analytics.
5. Route it from the hub: see [apps/hub/README.md](apps/hub/README.md).
