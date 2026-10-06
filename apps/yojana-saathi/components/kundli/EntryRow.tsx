"use client";

import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatINRCompact } from "@/lib/format";
import { CONTINGENT, type KundliEntry } from "@/lib/kundli/compute";
import { toggleClaimed } from "@/lib/store/kundli";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";
import { describeValue } from "@/lib/value";

/** One scheme inside the Kundli: when it applies, what it's worth, and the "Already receiving" tick */
export function EntryRow({ entry }: { entry: KundliEntry }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const { card, ages } = entry;
  const first = ages[0];
  const last = ages[ages.length - 1];
  const contiguousToEnd = last === ages[0] + ages.length - 1 && last >= 80;

  const when = entry.gatedBy
    ? t(entry.gatedBy === "business" ? "unlockBusiness" : "unlockHome")
    : entry.now
      ? contiguousToEnd || last === first
        ? t("availableNow")
        : `${t("availableNow")} · ${t("untilAge", { age: last })}`
      : contiguousToEnd
        ? t("fromAge", { age: first })
        : t("agesRange", { from: first, to: last });

  return (
    <li className="flex items-start gap-3 rounded-2xl border bg-card p-4">
      <div className="min-w-0 flex-1">
        <Link href={`/schemes/${card.slug}`} className="font-semibold underline-offset-4 hover:underline">
          {card.name[locale]}
        </Link>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-semibold",
              entry.gatedBy ? "bg-muted text-muted-foreground" : entry.now ? "bg-success-soft text-success-ink" : "bg-gold-soft text-gold-ink",
            )}
          >
            {when}
          </span>
          {card.value && <span className="text-muted-foreground">{describeValue(card.value, locale)}</span>}
        </div>
        {entry.counted > 0 && <p className="mt-1 text-xs text-muted-foreground">{t("worth", { amount: formatINRCompact(entry.counted, locale) })}</p>}
        {CONTINGENT.has(card.slug) && <p className="mt-1 text-xs text-muted-foreground">{t("notCounted")}</p>}
      </div>
      {entry.now && !entry.gatedBy && !CONTINGENT.has(card.slug) && (
        <label
          className={cn(
            "flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-xl border px-3 text-xs font-semibold transition-colors has-focus-visible:ring-4 has-focus-visible:ring-ring/20",
            entry.claimed ? "border-success bg-success-soft text-success-ink" : "text-muted-foreground hover:border-success/50",
          )}
        >
          <input type="checkbox" className="sr-only" checked={entry.claimed} onChange={() => toggleClaimed(card.slug)} />
          <span aria-hidden className={cn("grid size-5 place-items-center rounded-md border-2", entry.claimed ? "border-success bg-success text-white" : "border-muted-foreground/40")}>
            {entry.claimed && <Check className="size-3.5" strokeWidth={3} />}
          </span>
          {t("received")}
        </label>
      )}
    </li>
  );
}
