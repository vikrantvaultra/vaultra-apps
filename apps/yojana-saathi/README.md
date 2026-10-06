# Yojana Saathi (योजना साथी)

> Your companion for every scheme you deserve.

A government scheme discovery app in plain English and Hindi: search and filter schemes, check your eligibility in a couple of minutes, and see your **Sarkari Kundli**, a playful chart of every benefit you could access across your whole life, built from real scheme rules (no stars involved).

> **Yojana Saathi is an independent project, not affiliated with the Government of India. Verify details on official portals.**

**Stack:** Next.js 16 (App Router, Turbopack, TypeScript strict) · Tailwind CSS 4 + customised shadcn/ui (Radix) · next-intl (English at `/`, Hindi at `/hi`) · next-themes · Framer Motion · Fuse.js · Recharts · html-to-image · optional Supabase (email OTP + Postgres) · Vitest · Playwright.

---

## Run locally

```bash
cd apps/yojana-saathi
npm install
npm run dev              # http://localhost:3000  (Hindi: /hi)
npm run build && npm start
```

No environment variables are needed. Without Supabase, answers, bookmarks and the Kundli live in the browser (localStorage) and sign-in is hidden.

| Script | What it does |
|---|---|
| `npm run dev` / `build` / `start` | Next.js (each regenerates the scheme index first) |
| `npm test` | Vitest: rules engine, Kundli maths, and a validator for every scheme file |
| `npm run test:coverage` | Coverage for `lib/engine` and `lib/kundli` |
| `npm run test:e2e` | Playwright against a production build (`npm run build` first). Add `PW_CHANNEL=chrome` to use your installed Chrome |
| `npm run schemes:index` | Rebuilds `data/schemes/_generated.ts` after adding/removing scheme files |
| `npm run lint` / `typecheck` | ESLint / `tsc --noEmit` |

## Where things live

| Path | What |
|---|---|
| `app/[locale]/` | Every page, under the `en`/`hi` root segment (read with `next/root-params`) |
| `data/schemes/central/*.ts`, `data/schemes/state/<state>/*.ts` | **The dataset**: one file per scheme (578 today: 64 central, 514 across 35 states and UTs) |
| `data/schemes/AUTHORING.md` | How to write a scheme file (rules, sources, Hindi, eligibility) |
| `data/NEEDS_VERIFICATION.md` | Schemes marked `check-status` and facts a human should re-check |
| `data/taxonomy.ts` | Categories, states/UTs, ministries, Kundli houses, income bands, occupations (en + hi) |
| `lib/schemes.ts` | **The data import layer**: the only module that reads scheme data |
| `lib/engine/` | Pure eligibility engine (`evaluate.ts`), rule builders (`build.ts`), bilingual explanations (`explain.ts`) |
| `lib/questions.ts` | The questionnaire (one definition shared by `/find`, scheme checks and the Kundli), with skip logic |
| `lib/kundli/` | Lifetime benefit maths (`compute.ts`) and the assumptions shown to users |
| `lib/search.ts` | URL ⇄ filter codec, Fuse index across both languages, filtering |
| `lib/store/` | localStorage stores (profile, bookmarks, Kundli) and optional cloud sync |
| `components/kundli/` | Chart, reveal, timeline, house sheets, share cards |
| `messages/en.json`, `messages/hi.json` | UI copy |
| `supabase/schema.sql` | Tables + row-level security for optional sync |
| `e2e/` | Playwright flows and an axe accessibility scan |

## Coverage

Every state and UT has a browse page that lists its own schemes plus the 64 central ones. State schemes researched so far (2026-10-06):

| Schemes | States and UTs |
|---|---|
| 60+ | Maharashtra (64, including the MahaDBT scholarships) |
| 20–27 | Tamil Nadu, Uttar Pradesh, Karnataka, Gujarat, West Bengal, Madhya Pradesh, Kerala, Bihar |
| 14–18 | Odisha, Punjab, Haryana, Andhra Pradesh, Telangana, Delhi, Rajasthan, Jharkhand, Chhattisgarh |
| 7–12 | Uttarakhand, Puducherry, Assam, Tripura, Jammu & Kashmir, Himachal Pradesh, Mizoram, Goa, Arunachal Pradesh, Sikkim, Meghalaya |
| 2–6 | Chandigarh, Nagaland, Manipur, Lakshadweep, Ladakh, Dadra & Nagar Haveli and Daman & Diu |
| 0 | Andaman & Nicobar Islands (official sites unreachable during research) |

Flagship state schemes use the full eight-section page; the long tail (341 schemes) uses the compact page (summary, benefits, eligibility, how to apply, official link, sources). Coverage favours schemes that could be confirmed on official sources; smaller schemes and states with thin official web presence have fewer entries. `data/NEEDS_VERIFICATION.md` lists what was left out and why.

## How eligibility works

Each scheme has an `eligibility` rule tree (`all` / `any` / `not` over profile fields). The engine returns **pass / fail / unknown** for every rule, so it can:

- say **eligible** (everything passes), **almost eligible** (exactly one requirement fails, with the reason), or ask only the **missing questions**;
- compare an income **band** (we never ask exact income) against a rupee cap, staying "unknown" when the cap falls inside the band;
- re-run the rules at any age (`eligibleAtAge`) for the Kundli timeline.

## Adding or updating schemes

1. Read `data/schemes/AUTHORING.md` and copy `data/schemes/central/atal-pension-yojana.ts`.
2. Save as `data/schemes/central/<slug>.ts` or `data/schemes/state/<state>/<slug>.ts` (file name = slug).
3. Use only facts from official sources, write in your own words, fill both `en` and `hi`, set `sources` and `lastVerified`.
   If you can't confirm something is current, set `status: "check-status"` and add it to `data/NEEDS_VERIFICATION.md`.
4. `npm run schemes:index && SCHEME_FILTER=<slug> npx vitest run data/schemes.test.ts`

Pages, search, filters, the dashboard, sitemaps and the Kundli pick new schemes up automatically.

### Moving the dataset to Postgres later

Everything reads schemes through `lib/schemes.ts` (and the browser reads the static card index at `/api/cards/{all,central,<state>}`) (`SCHEMES`, `getScheme`, `allCards`, counts, related). To load the full dataset from a database, store each `Scheme` object (it's plain JSON) in a table and re-implement those functions to query it, for example at build time or with cached server functions. Nothing else needs to change.

## Optional: Supabase (sign-in and sync)

1. Create a Supabase project. In **SQL editor**, run `supabase/schema.sql`.
2. **Authentication → Providers → Email**: enable it and use the **Email OTP** template (`{{ .Token }}`), so users get a code instead of a link.
3. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Signed-in users sync their answers and Kundli (last write wins) and bookmarks (merged), and can delete their account and all data from **My profile** (`delete_my_account()` removes the auth user; rows cascade). Issue reports and contact messages go to the `feedback` table, which is insert-only from the browser. Without Supabase they're only written to the server log.

## Deploy to Vercel

1. **Add New → Project →** import this repo and set **Root Directory** to `apps/yojana-saathi`.
2. Environment variables:
   - `NEXT_PUBLIC_SITE_URL`: your production URL (canonical links, sitemap, hreflang). Lighthouse flags the canonical on preview URLs because it points to this domain; that's expected.
   - Optional: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_CONTACT_EMAIL`.
3. Deploy. All ~1,350 pages are prerendered. Only `/api/feedback` and the locale proxy run as functions.

## Quality notes

- **Tests:** 4,000+ Vitest tests (engine, Kundli, every scheme file) and 51 Playwright tests across mobile and desktop: search and filters, questionnaire → results, scheme eligibility check, section tabs, Kundli → share image, and axe WCAG 2.2 AA scans of 12 pages.
- **Performance (Lighthouse mobile, local `next start`):** performance 91–93 on the main pages, with accessibility, best practices and SEO at 100 (SEO 92 on scheme pages only because the canonical points to the production domain). Key choices:
  - the Kundli, charts, Supabase, the mobile menu and the account menu are code-split;
  - fonts are Latin-only, with 1 KB ₹-only subsets and the device's Devanagari font;
  - CSS is inlined, and above-the-fold links prefetch on intent rather than on sight.
- **Share images** are rendered in the browser (correct Hindi). Open Graph images for scheme pages are English-only, because Satori can't shape Devanagari.
- **Hindi copy** was written for this project; a native-speaker review before launch is recommended.
- **Data:** 166 of 578 schemes are marked "Check status" (unconfirmed amounts, conflicting official figures, or schemes announced but not yet running), each with a reason in `data/NEEDS_VERIFICATION.md`. Unverified amounts never count toward the Kundli estimate.
