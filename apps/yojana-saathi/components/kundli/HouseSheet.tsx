"use client";

import { useLocale, useTranslations } from "next-intl";
import { TaxonomyIcon } from "@/components/icons";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { KUNDLI_HOUSES } from "@/data/taxonomy";
import type { HouseSummary } from "@/lib/kundli/compute";
import type { Locale } from "@/lib/types";
import { EntryRow } from "./EntryRow";

export function HouseSheet({ house, onClose }: { house: HouseSummary | null; onClose: () => void }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const meta = house ? KUNDLI_HOUSES[house.house] : null;
  // Available now first, then by when they open, gated last
  const entries = house
    ? [...house.entries].sort((a, b) => Number(!!a.gatedBy) - Number(!!b.gatedBy) || Number(b.now) - Number(a.now) || a.ages[0] - b.ages[0])
    : [];

  return (
    <Sheet open={!!house} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="bottom" className="mx-auto max-w-2xl gap-0 px-4 pb-6 sm:px-6">
        {meta && house && (
          <>
            <div className="flex items-center gap-3 pt-3 pr-14">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-gold-ink">
                <TaxonomyIcon name={meta.icon} className="size-6" />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">{t("house", { n: meta.n })}</p>
                <SheetTitle className="text-xl">{meta.name[locale]}</SheetTitle>
              </div>
            </div>
            <SheetDescription className="mt-2">{t("schemesCount", { count: house.count })}</SheetDescription>
            <div className="mt-4 overflow-y-auto">
              {entries.length ? (
                <ul className="grid gap-2">
                  {entries.map((e) => (
                    <EntryRow key={e.card.slug} entry={e} />
                  ))}
                </ul>
              ) : (
                <p className="rounded-2xl border border-dashed p-6 text-center text-sm text-muted-foreground">{t("emptyHouse")}</p>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
