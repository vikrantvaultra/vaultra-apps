import { ArrowUpRight, BadgeCheck, CircleDashed, IndianRupee } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CATEGORIES, MINISTRIES, STATES } from "@/data/taxonomy";
import { shortOrgName } from "@/lib/filter-options";
import type { SchemeCard as Card } from "@/lib/schemes";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";
import { describeValue } from "@/lib/value";

export type CardBadge = "eligible" | "almost" | null;

/** Pure presentational card; safe in server and client components */
export function SchemeCard({ card, locale, badge = null, className }: { card: Card; locale: Locale; badge?: CardBadge; className?: string }) {
  const t = useTranslations("card");
  const org =
    card.level === "state" && card.state
      ? STATES[card.state].name[locale]
      : card.ministry
        ? locale === "en"
          ? shortOrgName(MINISTRIES[card.ministry].name.en)
          : MINISTRIES[card.ministry].name.hi
        : "";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[1.25rem] border bg-card p-5 shadow-soft hover-lift",
        badge === "eligible" && "border-success/40",
        className,
      )}
    >
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 font-semibold",
            card.level === "central" ? "bg-secondary text-secondary-foreground" : "bg-gold-soft text-gold-ink",
          )}
        >
          {card.level === "central" ? t("central") : STATES[card.state!].name[locale]}
        </span>
        {card.level === "central" && <span className="line-clamp-1">{org}</span>}
        {card.level === "state" && card.department && <span className="line-clamp-1">{card.department[locale]}</span>}
      </div>

      <h3 className="mt-3 font-heading text-[1.08rem] leading-snug font-bold">
        <Link href={`/schemes/${card.slug}`} className="outline-none after:absolute after:inset-0 after:rounded-[1.25rem] focus-visible:after:ring-4 focus-visible:after:ring-ring/40">
          {card.name[locale]}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{card.shortDescription[locale]}</p>

      {card.value && (
        <p className="mt-3 inline-flex w-fit items-center gap-1 rounded-lg bg-success-soft px-2 py-1 text-xs font-semibold text-success-ink">
          <IndianRupee className="size-3.5" aria-hidden />
          {describeValue(card.value, locale)}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
        {badge === "eligible" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-xs font-bold text-white dark:text-ink">
            <BadgeCheck className="size-3.5" aria-hidden />
            {t("eligible")}
          </span>
        )}
        {badge === "almost" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2.5 py-1 text-xs font-bold text-gold-ink">
            <CircleDashed className="size-3.5" aria-hidden />
            {t("almost")}
          </span>
        )}
        {card.categories.slice(0, 2).map((c) => (
          <span key={c} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
            {CATEGORIES[c].name[locale]}
          </span>
        ))}
        {card.isDBT && <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">{t("dbt")}</span>}
        {card.status === "pilot" && <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{t("pilot")}</span>}
        {card.status === "check-status" && (
          <span className="rounded-full bg-gold-soft px-2.5 py-1 text-xs font-semibold text-gold-ink">{t("checkStatus")}</span>
        )}
        <ArrowUpRight
          className="ml-auto size-5 text-muted-foreground/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          aria-hidden
        />
      </div>
    </article>
  );
}
