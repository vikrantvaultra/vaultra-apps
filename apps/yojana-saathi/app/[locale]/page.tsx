import { ArrowRight, BadgeCheck, ChevronRight, ClipboardList, Languages, Link2, ListChecks, Lock, Search, Send, Wand2 } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { DiscoverTabs } from "@/components/home/DiscoverTabs";
import { FaqList } from "@/components/home/FaqList";
import { TaxonomyIcon } from "@/components/icons";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/data/faqs";
import { CATEGORIES, MINISTRIES, STATES, type CategorySlug, type MinistrySlug, type StateSlug } from "@/data/taxonomy";
import { getPathname, Link } from "@/i18n/navigation";
import { shortOrgName } from "@/lib/filter-options";
import { categoryCounts, ministryCounts, stateCounts, stats } from "@/lib/schemes";
import type { Locale } from "@/lib/types";

export default async function HomePage() {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;
  const s = stats();
  const catCounts = categoryCounts();
  const stCounts = stateCounts();
  const minCounts = ministryCounts();
  const searchAction = getPathname({ href: "/search", locale });
  const popular = t.raw("popularTerms") as string[];

  const states = (Object.keys(STATES) as StateSlug[]).sort((a, b) => stCounts[b] - stCounts[a] || STATES[a].name[locale].localeCompare(STATES[b].name[locale], locale));
  const ministries = (Object.keys(MINISTRIES) as MinistrySlug[]).filter((m) => minCounts[m] > 0).sort((a, b) => minCounts[b] - minCounts[a]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(55%_55%_at_25%_30%,rgb(79_70_229/0.16),transparent_70%),radial-gradient(45%_45%_at_80%_35%,rgb(16_185_129/0.14),transparent_70%)]"
        />
        <div className="container-page relative pt-12 pb-14 sm:pt-20 lg:pt-24 lg:pb-20">
          <p className="inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft sm:text-sm">{t("eyebrow")}</p>
          <h1 className="mt-6 max-w-3xl text-[2.35rem] leading-[1.08] font-extrabold sm:text-6xl">
            {t.rich("title", { hl: (chunks) => <span className="text-brand-gradient">{chunks}</span> })}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("subtitle")}</p>

          <form role="search" action={searchAction} className="mt-8 max-w-2xl">
            <label htmlFor="hero-q" className="sr-only">
              {t("searchLabel")}
            </label>
            <div className="relative flex items-center rounded-[1.25rem] border bg-card p-1.5 shadow-lift focus-within:border-primary focus-within:ring-4 focus-within:ring-ring/20">
              <Search className="pointer-events-none ml-3 size-5 shrink-0 text-muted-foreground" aria-hidden />
              <input
                id="hero-q"
                name="q"
                type="search"
                enterKeyHint="search"
                placeholder={t("searchLabel") + "…"}
                className="h-12 min-w-0 flex-1 bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground/80 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              <Button type="submit" className="shrink-0">
                {t("searchButton")}
              </Button>
            </div>
          </form>
          <div className="mt-3 flex max-w-2xl flex-wrap items-center gap-1.5 text-sm">
            <span className="mr-1 text-muted-foreground">{t("popular")}</span>
            {popular.map((term) => (
              <Link
                key={term}
                href={{ pathname: "/search", query: { q: term } }}
                className="inline-flex min-h-9 items-center rounded-full border bg-card/70 px-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                {term}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg">
              <Link href="/find">
                <Wand2 aria-hidden />
                {t("ctaFind")}
                <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="gold" size="lg">
              <Link href="/kundli">
                {t("ctaKundli")} <span aria-hidden>✨</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live stats */}
      <section aria-label={t("stats.note")} className="container-page">
        <dl className="grid grid-cols-2 gap-3 rounded-[1.5rem] border bg-card p-3 shadow-soft sm:grid-cols-4 sm:p-4">
          {(
            [
              ["total", s.total],
              ["central", s.central],
              ["state", s.state],
              ["categories", s.categories],
            ] as const
          ).map(([key, n], i) => (
            <div key={key} className={i === 0 ? "rounded-2xl bg-brand-gradient p-4 text-white sm:p-5" : "rounded-2xl bg-muted/60 p-4 sm:p-5"}>
              <dd className="font-heading text-3xl font-extrabold sm:text-4xl">
                <CountUp value={n} />
              </dd>
              <dt className={i === 0 ? "mt-1 text-sm font-medium text-white/85" : "mt-1 text-sm font-medium text-muted-foreground"}>{t(`stats.${key}`)}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-right text-xs text-muted-foreground">{t("stats.note")}</p>
      </section>

      {/* Discover */}
      <section className="container-page mt-20" aria-labelledby="discover-title">
        <h2 id="discover-title" className="text-3xl font-extrabold sm:text-4xl">
          {t("discover.title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("discover.subtitle")}</p>
        <div className="mt-6">
          <DiscoverTabs
            label={t("discover.title")}
            tabs={[
              {
                id: "categories",
                label: t("discover.categories"),
                content: (
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {(Object.keys(CATEGORIES) as CategorySlug[]).map((c) => (
                      <li key={c}>
                        <Link href={`/category/${c}`} className="group flex h-full flex-col rounded-[1.25rem] border bg-card p-4 shadow-soft hover-lift sm:p-5">
                          <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <TaxonomyIcon name={CATEGORIES[c].icon} className="size-5" />
                          </span>
                          <span className="mt-3 font-heading text-[0.95rem] leading-snug font-bold sm:text-base">{CATEGORIES[c].name[locale]}</span>
                          <span className="mt-1 text-xs text-muted-foreground sm:text-sm">{t("discover.count", { count: catCounts[c] })}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "states",
                label: t("discover.states"),
                content: (
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {states.map((st) => (
                      <li key={st}>
                        <Link href={`/state/${st}`} className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl border bg-card px-4 py-3 shadow-soft hover-lift">
                          <span>
                            <span className="block font-semibold">{STATES[st].name[locale]}</span>
                            <span className="text-xs text-muted-foreground">{t("discover.stateCount", { count: stCounts[st] })}</span>
                          </span>
                          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "ministries",
                label: t("discover.ministries"),
                content: (
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {ministries.map((m) => (
                      <li key={m}>
                        <Link href={`/ministry/${m}`} className="group flex min-h-16 items-center justify-between gap-3 rounded-2xl border bg-card px-4 py-3 shadow-soft hover-lift">
                          <span>
                            <span className="block leading-snug font-semibold">
                              {locale === "en" ? shortOrgName(MINISTRIES[m].name.en) : MINISTRIES[m].name.hi}
                            </span>
                            <span className="text-xs text-muted-foreground">{t("discover.count", { count: minCounts[m] })}</span>
                          </span>
                          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="container-page mt-24" aria-labelledby="how-title">
        <h2 id="how-title" className="text-3xl font-extrabold sm:text-4xl">
          {t("how.title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("how.subtitle")}</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {(
            [
              ["s1", ClipboardList],
              ["s2", ListChecks],
              ["s3", Send],
            ] as const
          ).map(([k, Icon], i) => (
            <li key={k} className="relative rounded-[1.25rem] border bg-card p-6 shadow-soft">
              <span aria-hidden className="absolute top-5 right-6 font-heading text-5xl font-extrabold text-muted-foreground/15">
                {i + 1}
              </span>
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lift">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{t(`how.${k}t`)}</h3>
              <p className="mt-2 text-[0.95rem] text-muted-foreground">{t(`how.${k}d`)}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="brand" size="lg">
            <Link href="/find">
              {t("ctaFind")}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="container-page mt-24" aria-labelledby="about-title">
        <div className="grid gap-8 rounded-[1.75rem] border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <h2 id="about-title" className="text-3xl font-extrabold sm:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">{t("about.body")}</p>
          </div>
          <ul className="grid gap-4">
            {(
              [
                ["p1", Languages],
                ["p2", Lock],
                ["p3", Link2],
              ] as const
            ).map(([k, Icon]) => (
              <li key={k} className="flex gap-4 rounded-2xl bg-muted/60 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-success-soft text-success-ink">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-bold">{t(`about.${k}t`)}</span>
                  <span className="text-sm text-muted-foreground">{t(`about.${k}d`)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-page mt-24" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-title" className="flex items-center gap-2 text-3xl font-extrabold sm:text-4xl">
            <BadgeCheck className="size-8 text-success-ink" aria-hidden />
            {t("faq.title")}
          </h2>
          <div className="mt-6">
            <FaqList items={FAQS.slice(0, 5).map((f) => ({ id: f.id, q: f.q[locale], a: f.a[locale] }))} />
          </div>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/faqs">
              {t("faq.viewMore")}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
