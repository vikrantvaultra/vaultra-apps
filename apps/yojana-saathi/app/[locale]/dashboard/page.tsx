import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { PageHero } from "@/components/layout/PageHero";
import { CountUp } from "@/components/motion/CountUp";
import { BENEFIT_TYPES } from "@/data/profile-labels";
import { CATEGORIES, MINISTRIES, STATES, type CategorySlug, type MinistrySlug, type StateSlug } from "@/data/taxonomy";
import { shortOrgName } from "@/lib/filter-options";
import { categoryCounts, ministryCounts, SCHEMES, stateCounts, stats } from "@/lib/schemes";
import type { BenefitType, Locale } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("dashboard");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const desc = <T,>(rows: { label: string; value: number; key: T }[]) => rows.filter((r) => r.value > 0).sort((a, b) => b.value - a.value);

export default async function DashboardPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const s = stats();
  const cat = categoryCounts();
  const st = stateCounts();
  const min = ministryCounts();
  const dbt = SCHEMES.filter((x) => x.isDBT).length;
  const check = SCHEMES.filter((x) => x.status === "check-status").length;
  const benefit = SCHEMES.reduce<Record<string, number>>((acc, x) => ({ ...acc, [x.benefitType]: (acc[x.benefitType] ?? 0) + 1 }), {});

  const tiles = [
    ["central", s.central],
    ["state", s.state],
    ["states", s.statesCovered],
    ["dbt", dbt],
    ["checkStatus", check],
  ] as const;

  return (
    <>
      <PageHero crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("dashboard.title") }]} title={t("dashboard.title")} description={t("dashboard.subtitle")} />
      <div className="container-page grid gap-6 py-8 lg:py-10">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_2fr]">
          <div className="rounded-[1.5rem] bg-brand-gradient p-6 text-white shadow-lift sm:p-8">
            <p className="font-heading text-6xl font-extrabold sm:text-7xl">
              <CountUp value={s.total} />
            </p>
            <p className="mt-2 font-medium text-white/85">{t("dashboard.total")}</p>
          </div>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map(([key, n]) => (
              <div key={key} className="rounded-[1.25rem] border bg-card p-4 shadow-soft sm:p-5">
                <dd className="font-heading text-3xl font-extrabold">
                  <CountUp value={n} />
                </dd>
                <dt className="mt-1 text-sm text-muted-foreground">{t(`dashboard.${key}`)}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            id="by-category"
            title={t("dashboard.byCategory")}
            note={t("dashboard.byCategoryNote")}
            data={desc((Object.keys(CATEGORIES) as CategorySlug[]).map((k) => ({ key: k, label: CATEGORIES[k].name[locale], value: cat[k] })))}
          />
          <div className="grid gap-6">
            <ChartCard
              id="by-state"
              title={t("dashboard.byState")}
              data={desc((Object.keys(STATES) as StateSlug[]).map((k) => ({ key: k, label: STATES[k].name[locale], value: st[k] })))}
              yWidth={120}
            />
            <ChartCard
              id="by-benefit"
              title={t("dashboard.byBenefit")}
              data={desc((Object.keys(BENEFIT_TYPES) as BenefitType[]).map((k) => ({ key: k, label: BENEFIT_TYPES[k][locale], value: benefit[k] ?? 0 })))}
              yWidth={120}
            />
          </div>
        </div>
        <ChartCard
          id="by-ministry"
          title={t("dashboard.byMinistry")}
          data={desc(
            (Object.keys(MINISTRIES) as MinistrySlug[]).map((k) => ({
              key: k,
              label: locale === "en" ? shortOrgName(MINISTRIES[k].name.en) : MINISTRIES[k].name.hi,
              value: min[k],
            })),
          )}
          yWidth={220}
        />
        <p className="text-sm text-muted-foreground">{t("dashboard.sourceNote")}</p>
      </div>
    </>
  );
}
