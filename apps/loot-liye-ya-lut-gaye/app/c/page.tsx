import type { Metadata } from "next";
import Game from "@/components/Game";
import { parseChallenge, rankLabel } from "@/lib/game";
import { signed } from "@/lib/format";
import { SITE_URL } from "@/lib/site";

// Challenge links: /c?s=<score>&r=<rank>&d=<seed>
// Rendered per request so WhatsApp / Instagram previews show the friend's actual score.
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

function read(sp: Record<string, string | string[] | undefined>) {
  return parseChallenge({ get: k => (typeof sp[k] === "string" ? (sp[k] as string) : null) });
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const c = read(await searchParams);
  if (!c) return {};
  const title = c.score >= 0 ? `Dost ne ${signed(c.score)} bachaye. Beat kar sakte ho? 🥊` : `Dost ${signed(c.score)} se lut gaya 💀 Tum bachoge?`;
  const description = `${c.rank ? rankLabel(c.rank) + " · " : ""}Same 12 deals, 6 second har deal. Loot Liye Ya Lut Gaye? — 60 second ka sale game.`;
  const og = `/api/og?s=${c.score}${c.rank ? `&r=${c.rank}` : ""}`;
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: "/" },
    openGraph: { title, description, images: [{ url: og, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [og] },
  };
}

export default async function ChallengePage({ searchParams }: Props) {
  const c = read(await searchParams);
  return <Game initialChallenge={c} siteUrl={SITE_URL} />;
}
