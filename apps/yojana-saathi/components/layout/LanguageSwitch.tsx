"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<AppLocale, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  hi: { short: "हि", full: "हिन्दी" },
};

export function LanguageSwitch({ className, full = false }: { className?: string; full?: boolean }) {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function switchTo(next: AppLocale) {
    if (next === locale) return;
    // Read the query at click time so this component never forces the page to render dynamically
    const query = window.location.search;
    startTransition(() => router.replace(`${pathname}${query}`, { locale: next, scroll: false }));
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn("inline-flex items-center gap-1 rounded-full bg-muted p-1", pending && "opacity-70", className)}
    >
      {(Object.keys(LABELS) as AppLocale[]).map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            aria-pressed={active}
            aria-label={active ? LABELS[l].full : t("switchTo", { lang: LABELS[l].full })}
            onClick={() => switchTo(l)}
            className={cn(
              "flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
              full && "flex-1",
              active && "bg-card dark:bg-white/12 text-foreground shadow-soft",
            )}
          >
            {full ? LABELS[l].full : LABELS[l].short}
          </button>
        );
      })}
    </div>
  );
}

/** One-tap switch for the compact mobile header: shows the language you'd switch to. */
export function LanguageToggle({ className }: { className?: string }) {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const next: AppLocale = locale === "en" ? "hi" : "en";

  return (
    <button
      type="button"
      lang={next}
      aria-label={t("switchTo", { lang: LABELS[next].full })}
      onClick={() => startTransition(() => router.replace(`${pathname}${window.location.search}`, { locale: next, scroll: false }))}
      className={cn(
        "grid size-12 place-items-center rounded-full text-[0.95rem] font-bold text-foreground transition-colors hover:bg-muted",
        pending && "opacity-60",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-full border border-border bg-card shadow-soft">{LABELS[next].short}</span>
    </button>
  );
}
