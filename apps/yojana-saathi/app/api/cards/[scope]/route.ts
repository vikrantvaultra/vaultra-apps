import { STATES } from "@/data/taxonomy";
import { allCards } from "@/lib/schemes";

/**
 * The scheme card index as static JSON, built once and served from the CDN:
 *   /api/cards/all       every scheme (search)
 *   /api/cards/central   central schemes
 *   /api/cards/<state>   central + that state's schemes (Kundli, state pages)
 * Keeps hundreds of scheme cards out of every page's HTML.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return ["all", "central", ...Object.keys(STATES)].map((scope) => ({ scope }));
}

export async function GET(_req: Request, { params }: RouteContext<"/api/cards/[scope]">) {
  const { scope } = await params;
  const cards = allCards();
  const body =
    scope === "all" ? cards : scope === "central" ? cards.filter((c) => c.level === "central") : cards.filter((c) => c.level === "central" || c.state === scope);
  return Response.json(body, { headers: { "cache-control": "public, max-age=3600, stale-while-revalidate=86400" } });
}
