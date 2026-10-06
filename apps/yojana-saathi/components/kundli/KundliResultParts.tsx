"use client";

import { ChevronRight, HandCoins, HeartPulse, Landmark, Trophy } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { TaxonomyIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { KUNDLI_HOUSES, type KundliHouse } from "@/data/taxonomy";
import { formatINRCompact } from "@/lib/format";
import { CONTINGENT, type KundliResult } from "@/lib/kundli/compute";
import type { Locale } from "@/lib/types";
import { EntryRow } from "./EntryRow";

export function scoreCopyKey(pct: number, available: number) {
  if (!available || pct === 0) return "scoreCopy0" as const;
  if (pct < 34) return "scoreCopy1" as const;
  if (pct < 67) return "scoreCopy2" as const;
  if (pct < 100) return "scoreCopy3" as const;
  return "scoreCopy4" as const;
}

export function ScoreRing({ pct, size = 112, dark = false }: { pct: number; size?: number; dark?: boolean }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
      <circle cx="50" cy="50" r={r} fill="none" stroke={dark ? "rgba(255,255,255,0.12)" : "var(--muted)"} strokeWidth="9" />
      {pct > 0 && <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="#10B981"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 50 50)"
        className="transition-[stroke-dasharray] duration-700"
      />}
      <text x="50" y="57" textAnchor="middle" fontSize="24" fontWeight="800" fill={dark ? "#fff" : "currentColor"}>
        {pct}
      </text>
    </svg>
  );
}

export function Numbers({ result, onHow }: { result: KundliResult; onHow: () => void }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const { totals, score } = result;
  const fmt = (n: number) => formatINRCompact(n, locale);

  return (
    <section aria-label={t("lifetime")} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <HandCoins className="size-4 text-gold-ink" aria-hidden />
          {t("lifetime")}
        </p>
        <p className="mt-2 font-heading text-4xl font-extrabold">{fmt(totals.cash)}</p>
        <p className="mt-1 text-xs font-semibold tracking-wide text-gold-ink uppercase">{t("estimate")}</p>
        <button type="button" onClick={onHow} className="mt-3 min-h-10 text-sm font-semibold text-primary hover:underline">
          {t("how")}
        </button>
      </div>
      <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <HeartPulse className="size-4 text-success-ink" aria-hidden />
          {t("cover")}
        </p>
        {totals.healthCover || totals.lifeCover ? (
          <ul className="mt-2 grid gap-1.5">
            {totals.healthCover > 0 && <li className="font-heading text-lg leading-snug font-bold">{t("healthCover", { amount: fmt(totals.healthCover) })}</li>}
            {totals.lifeCover > 0 && <li className="font-heading text-lg leading-snug font-bold">{t("lifeCover", { amount: fmt(totals.lifeCover) })}</li>}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">{t("noCover")}</p>
        )}
        <p className="mt-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{t("estimate")}</p>
      </div>
      <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <Landmark className="size-4 text-primary" aria-hidden />
          {t("loan")}
        </p>
        {totals.loan > 0 ? (
          <p className="mt-2 font-heading text-lg leading-snug font-bold">{t("loanUpTo", { amount: fmt(totals.loan) })}</p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">{t("noLoan")}</p>
        )}
        <p className="mt-2 text-xs text-muted-foreground">{t("loanNote")}</p>
      </div>
      <div className="flex items-center gap-4 rounded-[1.25rem] border bg-card p-5 shadow-soft">
        <ScoreRing pct={score.pct} size={96} />
        <div>
          <p className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
            <Trophy className="size-4 text-gold-ink" aria-hidden />
            {t("score")}
          </p>
          <p className="mt-1 text-sm font-semibold">{t(scoreCopyKey(score.pct, score.available))}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("scoreOf", { claimed: score.claimed, available: score.available })}</p>
        </div>
      </div>
    </section>
  );
}

export function NowList({ result }: { result: KundliResult }) {
  const t = useTranslations("kundli");
  const [all, setAll] = useState(false);
  const now = result.entries.filter((e) => e.now && !e.gatedBy && !CONTINGENT.has(e.card.slug)).sort((a, b) => b.counted - a.counted);
  const shown = all ? now : now.slice(0, 6);
  return (
    <section aria-labelledby="now-h">
      <h2 id="now-h" className="text-2xl font-extrabold">
        {t("nowTitle")}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{t("scoreHelp")}</p>
      {now.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("nowEmpty")}</p>
      ) : (
        <>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {shown.map((e) => (
              <EntryRow key={e.card.slug} entry={e} />
            ))}
          </ul>
          {now.length > 6 && (
            <Button variant="outline" size="sm" className="mt-3" onClick={() => setAll((v) => !v)} aria-expanded={all}>
              {all ? t("showLess") : t("showAll", { count: now.length })}
            </Button>
          )}
        </>
      )}
    </section>
  );
}

export function HousesList({ result, onHouse }: { result: KundliResult; onHouse: (h: KundliHouse) => void }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  return (
    <section aria-labelledby="houses-h">
      <h2 id="houses-h" className="text-2xl font-extrabold">
        {t("houses")}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {result.houses.map((h) => {
          const meta = KUNDLI_HOUSES[h.house];
          return (
            <li key={h.house}>
              <button
                type="button"
                onClick={() => onHouse(h.house)}
                className="flex min-h-16 w-full items-center gap-3 rounded-2xl border bg-card p-3 text-left shadow-soft hover-lift"
              >
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl text-gold-ink"
                  style={{ background: `color-mix(in oklab, var(--gold) ${Math.round(12 + h.intensity * 45)}%, transparent)` }}
                >
                  <TaxonomyIcon name={meta.icon} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-muted-foreground">{t("house", { n: meta.n })}</span>
                  <span className="block font-semibold">{meta.name[locale]}</span>
                </span>
                <span className="text-right text-sm">
                  <span className="block font-bold">{t("schemesCount", { count: h.count })}</span>
                  {h.cash > 0 && <span className="block text-xs text-muted-foreground">{formatINRCompact(h.cash, locale)}</span>}
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
