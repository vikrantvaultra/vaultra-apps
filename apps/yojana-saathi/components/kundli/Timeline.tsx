"use client";

import { Flag, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
import { Link } from "@/i18n/navigation";
import type { KundliResult, Milestone } from "@/lib/kundli/compute";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const MAX_STOPS = 14;

export function Timeline({ result }: { result: KundliResult }) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const { age, countsByAge } = result;

  const stops = useMemo(() => {
    const byAge = new Map<number, Milestone[]>();
    for (const m of result.milestones.slice(0, 40)) {
      if (m.age === age) continue;
      byAge.set(m.age, [...(byAge.get(m.age) ?? []), m]);
    }
    return [...byAge.entries()].sort((a, b) => a[0] - b[0]).slice(0, MAX_STOPS);
  }, [result.milestones, age]);

  const milestoneAges = new Set(stops.map(([a]) => a));
  const max = Math.max(1, ...countsByAge.map((c) => c.count));
  const W = 100 / countsByAge.length;
  const now = result.entries.filter((e) => e.now && !e.gatedBy).sort((a, b) => b.counted - a.counted);

  const line = (m: Milestone) => {
    const name = m.entry.card.name[locale];
    if (m.kind === "opens") return t("mOpens", { name });
    if (m.kind === "pensionStarts") return t("mPension", { name });
    const joins = m.entry.contributory || m.entry.card.benefitType === "insurance";
    return joins ? t("mLastJoin", { name }) : t("mLastYear", { name });
  };

  return (
    <section aria-labelledby="timeline-h">
      <h2 id="timeline-h" className="text-2xl font-extrabold">
        {t("timeline")}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{t("timelineHint")}</p>

      {/* Overview: schemes you qualify for at each age */}
      <figure className="mt-5 rounded-[1.25rem] border bg-card p-4 shadow-soft sm:p-5">
        <figcaption className="text-sm font-semibold text-muted-foreground">{t("schemesByAge")}</figcaption>
        <div className="relative mt-3 h-28">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
            {countsByAge.map((c, i) => {
              const h = (c.count / max) * 36;
              return (
                <rect
                  key={c.age}
                  x={i * W + W * 0.15}
                  y={40 - h}
                  width={W * 0.7}
                  height={h}
                  rx={0.4}
                  fill={c.age === age ? "#10B981" : milestoneAges.has(c.age) ? "#F5B83D" : "var(--chart-1)"}
                  opacity={c.age === age || milestoneAges.has(c.age) ? 1 : 0.45}
                />
              );
            })}
          </svg>
          <span className="absolute -top-1 left-0 inline-flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-[0.7rem] font-bold text-white dark:text-ink">
            <MapPin className="size-3" aria-hidden />
            {t("youAreHere")}
          </span>
        </div>
        <div className="mt-1 flex justify-between text-xs text-muted-foreground tabular-nums" aria-hidden>
          {countsByAge
            .filter((c) => c.age === age || c.age % 10 === 0 || c.age === countsByAge.at(-1)?.age)
            .map((c) => (
              <span key={c.age}>{c.age}</span>
            ))}
        </div>
        <p className="sr-only">{t("nowSchemes", { count: result.nowCount })}</p>
      </figure>

      {/* Scrollable stops */}
      <ol className="mt-4 flex snap-x gap-3 overflow-x-auto pb-3 no-scrollbar" aria-label={t("timeline")}>
        <li className="w-72 shrink-0 snap-start rounded-[1.25rem] border-2 border-success bg-success-soft p-4">
          <p className="inline-flex items-center gap-1.5 text-sm font-bold text-success-ink">
            <MapPin className="size-4" aria-hidden />
            {t("youAreHere")} · {t("ageN", { age })}
          </p>
          <p className="mt-2 font-heading text-lg font-extrabold">{t("nowSchemes", { count: result.nowCount })}</p>
          <ul className="mt-2 grid gap-1 text-sm">
            {now.slice(0, 4).map((e) => (
              <li key={e.card.slug} className="truncate">
                <Link href={`/schemes/${e.card.slug}`} className="underline-offset-4 hover:underline">
                  {e.card.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {stops.map(([a, ms]) => (
          <li key={a} className={cn("w-64 shrink-0 snap-start rounded-[1.25rem] border bg-card p-4 shadow-soft")}>
            <p className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-ink">
              <Flag className="size-4" aria-hidden />
              {t("ageN", { age: a })}
            </p>
            <ul className="mt-2 grid gap-2 text-sm">
              {ms.slice(0, 4).map((m) => (
                <li key={`${m.kind}-${m.entry.card.slug}`}>
                  <Link href={`/schemes/${m.entry.card.slug}`} className="leading-snug underline-offset-4 hover:underline">
                    {line(m)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
