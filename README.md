# vaultra-apps

A home for small, standalone web apps and games. Each app is fully independent
(its own `package.json`, build, and Vercel project) so they never break each other.

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
| [loot-liye-ya-lut-gaye](apps/loot-liye-ya-lut-gaye) | 60-second festive-sale trap game (Hinglish) | Next.js 16, TypeScript | lootyalut.in |
| [sale-sniper](apps/sale-sniper) | Chrome extension: record a sale wishlist, auto-buy on Amazon.in & Flipkart | Manifest V3, vanilla JS | load unpacked |

## Adding a new app

1. Scaffold inside `apps/` (e.g. `cd apps && npx create-next-app@latest <new-slug> --ts --app --use-npm --disable-git`).
2. Add a row to the table above.
3. On Vercel: **Add New → Project →** import this repo, set **Root Directory** to `apps/<new-slug>`.
   Each app gets its own project, domain and analytics.
