"use client";

import { Calculator } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { ASSUMPTIONS } from "@/lib/kundli/assumptions";
import type { Locale } from "@/lib/types";

export function HowWeCalculated({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="mx-auto max-w-2xl gap-0 px-5 pb-8 sm:px-7">
        <SheetTitle className="flex items-center gap-2 pt-3 pr-14 text-xl">
          <Calculator className="size-5 text-gold-ink" aria-hidden />
          {t("howTitle")}
        </SheetTitle>
        <SheetDescription className="mt-2 text-[0.95rem]">{t("howIntro")}</SheetDescription>
        <ol className="mt-4 grid gap-3 overflow-y-auto">
          {ASSUMPTIONS.map((a, i) => (
            <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold-soft text-xs font-bold text-gold-ink">{i + 1}</span>
              <span>{a[locale]}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm font-medium text-muted-foreground">{t("noStars")}</p>
      </SheetContent>
    </Sheet>
  );
}
