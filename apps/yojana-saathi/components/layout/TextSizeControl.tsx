"use client";

import { useTranslations } from "next-intl";
import { setTextSize, TEXT_SIZES, useTextSize } from "@/lib/text-size";
import { cn } from "@/lib/utils";

export function TextSizeControl({ className }: { className?: string }) {
  const t = useTranslations("a11y");
  const size = useTextSize();
  const min = TEXT_SIZES[0];
  const max = TEXT_SIZES[TEXT_SIZES.length - 1];

  const btn =
    "flex h-11 min-w-11 items-center justify-center rounded-xl px-2 font-heading font-bold text-foreground transition-colors hover:bg-card dark:hover:bg-white/8 disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div role="group" aria-label={t("textSize")} className={cn("inline-flex items-center gap-1 rounded-2xl bg-muted p-1", className)}>
      <button type="button" className={cn(btn, "text-sm")} aria-label={t("decrease")} disabled={size <= min} onClick={() => setTextSize((size - 1) as typeof size)}>
        A<span aria-hidden>−</span>
      </button>
      <button type="button" className={cn(btn, "text-base", size === 0 && "bg-card dark:bg-white/12 shadow-soft")} aria-label={t("reset")} aria-pressed={size === 0} onClick={() => setTextSize(0)}>
        A
      </button>
      <button type="button" className={cn(btn, "text-lg")} aria-label={t("increase")} disabled={size >= max} onClick={() => setTextSize((size + 1) as typeof size)}>
        A<span aria-hidden>+</span>
      </button>
    </div>
  );
}
