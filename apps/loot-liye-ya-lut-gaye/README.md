# Loot Liye Ya Lut Gaye? 🛒

A 60-second mobile web game for the festive sale season. You get ₹10,000 and 12 deals at 6 seconds each. Swipe right to buy the real loot, swipe left to skip the traps.

**Stack:** Next.js 16 (App Router, TypeScript), plain CSS Modules, no UI libraries. The game is a single client component. Every page is static except the challenge link preview.

## Design: "Sale ka Sach"
The game moves between two worlds:
- **The sale:** a loud neon night market. Glossy product cards in a stack, starburst % OFF stickers, hype ribbons, and a ticker of crossed-out sale tricks.
- **The sach (truth):** an honest thermal receipt. Each card **flips** to show its "Sach ka bill" (sale price, hidden fee, what you paid, real value) with an ink stamp. The result screen prints your final bill, and the Instagram story card uses the same receipt look.

## Run locally
```bash
cd apps/loot-liye-ya-lut-gaye
npm install
npm run dev                  # http://localhost:3000/loot-liye-ya-lut-gaye
npm run build && npm start   # production build
```
To test on your phone over Wi-Fi, run `npm run dev -- -H 0.0.0.0` and open `http://<your-mac-ip>:3000`.

## Where things live
| Path | What |
|---|---|
| `lib/deals.ts` | **The deal pool.** 20 real deals + 20 traps across 10 trap types. Edit or add deals here; the field docs are at the top of the file. |
| `lib/game.ts` | Pure rules: deck building, scoring, verdict, ranks, next-goal hint, challenge parsing |
| `components/Game.tsx` | The state machine (start → countdown → deal → reveal → result), timer, keyboard, sound, haptics |
| `components/DealCard.tsx` | The swipeable, flipping card (sale front / receipt back) |
| `components/StartScreen.tsx`, `PlayScreen.tsx`, `ResultScreen.tsx` | The three screens, each with its own `*.module.css` |
| `app/globals.css` | Design tokens (dark + light), buttons, fairy lights, receipt paper, stamp ink |
| `lib/sharecard.ts` | 1080×1920 Instagram-story PNG, drawn on `<canvas>` |
| `lib/audio.ts`, `lib/fx.ts` | Web Audio sound effects (no files); confetti, bursts, shakes |
| `app/opengraph-image.tsx` | Static 1200×630 OG image (built at deploy time) |
| `app/c/page.tsx` + `app/api/og/route.tsx` | Challenge links with **personalised previews** ("Dost ne +₹952 bachaye") |
| `app/icon.svg`, `app/apple-icon.tsx`, `app/pwa-icon/[size]`, `app/manifest.ts` | Emoji favicon, home-screen icons, web app manifest |
| `app/fonts/` | Self-hosted font subsets that include ₹: Bricolage Grotesque (text + condensed display) and IBM Plex Mono (receipts). OFL licences are included. |
| `assets/og-fonts/` | TTF copies of the same fonts for the generated images |
| `prototype/` | The original single-file prototype |

### Rules (unchanged from the prototype)
- Score = Σ (real value − amount paid incl. hidden fees) over the items you bought.
- **LOOT LIYE 😎** if score ≥ ₹1,000 and you fell for at most 1 trap; otherwise **LUT GAYE 💀**.
- Ranks: Deal Ka Don 👑 (win, ≥ ₹2,000) · Smart Shopper 🧠 · Darpok Customer 🙈 (bought nothing) · Sale Ka Shikaar 🎯 (≥ 4 traps) · Thoda thoda lut gaye 😬

### Challenge links
The shared link is `https://lootyalut.in/c?s=952&r=smart&d=p2gn4t`:
- `s` is the friend's score and `r` is their rank. Together they drive the "Tumhare dost ne ₹X bachaye. Beat karo!" ticket on the start screen.
- `d` is the deck seed, so the friend plays **the same 12 deals** and gets a head-to-head "Dost vs Tum" result.
- `/c` is rendered per request so WhatsApp and Instagram previews show the friend's actual score. `/?s=…&r=…` also works (shows the banner, with the generic preview).

### Analytics (Vercel Web Analytics; cookieless, no personal data)
`game_start` {mode, replay} · `game_complete` {verdict, rank, traps, mode} · `share_click` {method: image | download | whatsapp | link} · `challenge_open` · `challenge_result` {beat}

> Pageviews work on every plan. **Custom events need a Vercel Pro (or Enterprise) plan.**

### Responsive
Tested from 320×568 (iPhone SE 1st gen) up to 1440×900 desktop, plus phones held sideways. Results:
- no horizontal scroll at any size
- the card and buttons always stay on screen
- every tap target is at least 44px

The card scales with the screen, and its text has minimum sizes so it stays readable on small phones. On short landscape screens, the card sits beside the controls.

## Deploy to Vercel
Nothing to configure: Vercel auto-detects Next.js.

**CLI**
```bash
npm i -g vercel
cd apps/loot-liye-ya-lut-gaye
vercel login
vercel            # preview deploy (first run links/creates the project)
vercel --prod     # production
```

**Git (auto-deploy on push):** push the repo to GitHub. In Vercel, go to **Add New → Project**, import it, and set **Root Directory = `apps/loot-liye-ya-lut-gaye`**.

Then turn on **Analytics** in the project dashboard and redeploy.

**Site URL:** the game is served at https://vaultra-apps.vercel.app/loot-liye-ya-lut-gaye (Next.js `basePath`, routed by the hub in `apps/hub`). OG tags and share links use that URL; to change it (e.g. for a custom domain), set `NEXT_PUBLIC_SITE_URL` including the path.

## Custom domain: lootyalut.in
1. Buy the domain.
2. Run `vercel domains add lootyalut.in` and `vercel domains add www.lootyalut.in`. You can also do this in Project → Settings → Domains; set `www` to redirect to the apex.
3. At your registrar's DNS settings, add the records Vercel shows. Typically: `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`.
4. Wait for "Valid Configuration" (HTTPS is automatic). The bare domain redirects to `/loot-liye-ya-lut-gaye`. Set `NEXT_PUBLIC_SITE_URL=https://lootyalut.in/loot-liye-ya-lut-gaye` and redeploy so the OG tags and share links use the new domain.
5. Check the preview at https://www.opengraph.xyz, or by sending the link to yourself on WhatsApp.
