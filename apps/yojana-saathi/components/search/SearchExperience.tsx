"use client";

import { ArrowUpDown, ChevronDown, PartyPopper, PencilLine, Search, SearchX, SlidersHorizontal, Sparkles, UserRoundCheck, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { SchemeCard, type CardBadge } from "@/components/scheme/SchemeCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BENEFIT_TYPES } from "@/data/profile-labels";
import { CATEGORIES, MINISTRIES } from "@/data/taxonomy";
import { checkScheme, isLeaf } from "@/lib/engine/evaluate";
import { explainFailure, valueLabel } from "@/lib/engine/explain";
import { withInferred } from "@/lib/questions";
import { shortOrgName } from "@/lib/filter-options";
import type { SchemeCard as Card } from "@/lib/schemes";
import { activeFilterKeys, applyFilters, buildIndex, parseFilters, serializeFilters, type FilterKey, type Filters, type SortKey } from "@/lib/search";
import { hasProfile, useProfile } from "@/lib/store/profile";
import type { Locale, Profile } from "@/lib/types";
import { FilterPanel } from "./FilterPanel";

const PAGE = 12;
const FIXED_FIELDS = new Set<keyof Profile>(["state", "gender", "caste", "minority", "area", "disabled"]);
const NO_LOCK: Partial<Filters> = {};

export function SearchExperience({ cards, locked = NO_LOCK, showQuery = true }: { cards: Card[]; locked?: Partial<Filters>; showQuery?: boolean }) {
  const t = useTranslations("search");
  const locale = useLocale() as Locale;
  const params = useSearchParams();
  const profile = useProfile();

  const urlFilters = useMemo(() => parseFilters(params), [params]);
  const filters: Filters = useMemo(() => ({ ...urlFilters, ...locked }), [urlFilters, locked]);
  const index = useMemo(() => buildIndex(cards), [cards]);
  const myProfile = useMemo(() => (hasProfile(profile) ? withInferred(profile) : null), [profile]);
  const results = useMemo(() => {
    const base = applyFilters(cards, filters, index, locale);
    if (!filters.mine || !myProfile) return base;
    // "Matching my profile": the full rules engine against the saved answers
    return base.filter((c) => {
      const st = checkScheme(c, myProfile).status;
      return st === "eligible" || st === "incomplete";
    });
  }, [cards, filters, index, locale, myProfile]);
  const fromFind = params.get("from") === "find";

  const [text, setText] = useState(urlFilters.q ?? "");
  const [sheetOpen, setSheetOpen] = useState(false);
  const debounce = useRef<ReturnType<typeof setTimeout>>(undefined);

  /** Write filters to the URL without a server round trip (Next keeps useSearchParams in sync) */
  function commit(next: Filters) {
    const own = Object.fromEntries(Object.entries(next).filter(([k]) => locked[k as FilterKey] === undefined)) as Filters;
    const qs = serializeFilters(own);
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }

  const setFilter = <K extends FilterKey>(key: K, value: Filters[K] | undefined) => commit({ ...urlFilters, [key]: value });

  function onQuery(v: string) {
    setText(v);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => commit({ ...urlFilters, q: v.trim() || undefined }), 250);
  }

  function clearAll() {
    setText("");
    commit({ sort: urlFilters.sort });
  }

  const active = activeFilterKeys(filters, locked);
  const resultKey = serializeFilters(filters);

  const chipText = (key: FilterKey): string => {
    const v = filters[key];
    const label = t(`f.${key}`);
    let shown: string;
    if (key === "mine") return t("profileFilter");
    if (typeof v === "boolean") shown = v ? t("yes") : t("no");
    else if (key === "category") shown = CATEGORIES[v as keyof typeof CATEGORIES].name[locale];
    else if (key === "ministry") {
      const name = MINISTRIES[v as keyof typeof MINISTRIES].name[locale];
      shown = locale === "en" ? shortOrgName(name) : name;
    } else if (key === "benefit") shown = BENEFIT_TYPES[v as keyof typeof BENEFIT_TYPES][locale];
    else if (key === "level") shown = v === "central" ? t("levelCentral") : t("levelState");
    else shown = valueLabel(key as keyof Profile, v, locale);
    return `${label}: ${shown}`;
  };

  const panel = <FilterPanel filters={filters} locked={locked} locale={locale} onChange={setFilter} />;

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:gap-10">
      {/* Desktop sidebar */}
      <aside aria-label={t("filters")} className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[1.25rem] border bg-card p-5 shadow-soft no-scrollbar">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-heading text-base font-bold">
              <SlidersHorizontal className="size-4" aria-hidden />
              {t("filters")}
            </h2>
            {active.length > 0 && (
              <button type="button" onClick={clearAll} className="text-sm font-semibold text-primary hover:underline">
                {t("clearAll")}
              </button>
            )}
          </div>
          {panel}
        </div>
      </aside>

      <div className="min-w-0">
        {showQuery && (
          <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
            <label htmlFor="search-q" className="sr-only">
              {t("title")}
            </label>
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              id="search-q"
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              value={text}
              onChange={(e) => onQuery(e.target.value)}
              placeholder={t("placeholder")}
              className="h-14 w-full rounded-2xl border bg-card pr-12 pl-12 text-base shadow-soft outline-none placeholder:text-muted-foreground/80 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20 [&::-webkit-search-cancel-button]:hidden"
            />
            {text && (
              <button
                type="button"
                onClick={() => onQuery("")}
                aria-label={t("clear")}
                className="absolute top-1/2 right-2 grid size-10 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
          </form>
        )}

        {/* Toolbar */}
        <div className={showQuery ? "mt-4 flex flex-wrap items-center gap-2" : "flex flex-wrap items-center gap-2"}>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal aria-hidden />
                {t("filters")}
                {active.length > 0 && (
                  <span className="grid size-5 place-items-center rounded-full bg-primary text-[0.7rem] text-primary-foreground">{active.length}</span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="gap-0 px-0 pb-0">
              <div className="flex items-center justify-between px-5 pt-3 pr-16 pb-3">
                <SheetTitle>{t("filters")}</SheetTitle>
                {active.length > 0 && (
                  <button type="button" onClick={clearAll} className="text-sm font-semibold text-primary">
                    {t("clearAll")}
                  </button>
                )}
              </div>
              <SheetDescription className="sr-only">{t("metaDescription")}</SheetDescription>
              <div className="overflow-y-auto px-5 pb-6">{panel}</div>
              <div className="border-t bg-popover p-4">
                <Button variant="brand" className="w-full" onClick={() => setSheetOpen(false)}>
                  {t("showResults", { count: results.length })}
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {hasProfile(profile) && !filters.mine && (
            <Button variant="outline" size="sm" onClick={() => commit({ ...urlFilters, mine: true })}>
              <UserRoundCheck aria-hidden />
              {t("useProfile")}
            </Button>
          )}

          <div className="relative ml-auto">
            <label htmlFor="search-sort" className="sr-only">
              {t("sort")}
            </label>
            <ArrowUpDown className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <select
              id="search-sort"
              value={filters.sort ?? "relevance"}
              onChange={(e) => commit({ ...urlFilters, sort: e.target.value as SortKey })}
              className="h-10 appearance-none rounded-full border bg-card pr-4 pl-9 text-sm font-medium shadow-soft outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
            >
              <option value="relevance">{t("sortRelevance")}</option>
              <option value="newest">{t("sortNewest")}</option>
              <option value="az">{t("sortAz")}</option>
            </select>
          </div>
        </div>

        {active.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={t("filters")}>
            {active.map((key) => {
              const text = chipText(key);
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => setFilter(key, undefined)}
                    aria-label={t("removeFilter", { label: text })}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-secondary py-1.5 pr-2.5 pl-3.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_8%)]"
                  >
                    {text}
                    <X className="size-4 opacity-70" aria-hidden />
                  </button>
                </li>
              );
            })}
            <li>
              <button type="button" onClick={clearAll} className="inline-flex min-h-10 items-center px-2 text-sm font-semibold text-primary hover:underline">
                {t("clearAll")}
              </button>
            </li>
          </ul>
        )}

        {fromFind && myProfile && <FindResultsBanner cards={cards} profile={myProfile} matched={results.length} locale={locale} />}

        <h2 className="sr-only">{t("resultsHeading")}</h2>
        <p className="mt-5 text-sm font-semibold text-muted-foreground" aria-live="polite">
          {t("results", { count: results.length })}
        </p>

        {results.length === 0 ? (
          <div className="mt-6 flex flex-col items-center rounded-[1.25rem] border border-dashed bg-card/50 px-6 py-14 text-center">
            <div className="grid size-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
              <SearchX className="size-7" aria-hidden />
            </div>
            <h2 className="mt-4 text-lg font-bold">{t("emptyTitle")}</h2>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">{t("emptyBody")}</p>
            {active.length > 0 && (
              <Button variant="outline" className="mt-5" onClick={clearAll}>
                {t("clearAll")}
              </Button>
            )}
          </div>
        ) : (
          <ResultList key={resultKey} results={results} locale={locale} profile={hasProfile(profile) ? profile : null} />
        )}
      </div>
    </div>
  );
}

function ResultList({ results, locale, profile }: { results: Card[]; locale: Locale; profile: Profile | null }) {
  const t = useTranslations("search");
  const [limit, setLimit] = useState(PAGE);
  const sentinel = useRef<HTMLDivElement>(null);
  const shown = results.slice(0, limit);
  const more = limit < results.length;

  // Infinite scroll, with the button below as the keyboard/screen-reader path
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !more) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setLimit((l) => l + PAGE), { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, [more]);

  const badge = (c: Card): CardBadge => {
    if (!profile) return null;
    const s = checkScheme(c, profile).status;
    return s === "eligible" ? "eligible" : s === "almost" ? "almost" : null;
  };

  return (
    <>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((c, i) => (
          <li key={c.slug} className="animate-rise" style={{ animationDelay: `${(i % PAGE) * 35}ms` }}>
            <SchemeCard card={c} locale={locale} badge={badge(c)} />
          </li>
        ))}
      </ul>
      {more && (
        <div ref={sentinel} className="mt-8 flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">{t("showing", { shown: shown.length, total: results.length })}</p>
          <Button variant="outline" onClick={() => setLimit((l) => l + PAGE)}>
            {t("loadMore")}
          </Button>
        </div>
      )}
    </>
  );
}

/** Server-rendered fallback (no JS yet / while search params resolve): first page of cards */
export function StaticResults({ cards, locale }: { cards: Card[]; locale: Locale }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.slice(0, PAGE).map((c) => (
        <li key={c.slug}>
          <SchemeCard card={c} locale={locale} />
        </li>
      ))}
    </ul>
  );
}

/** Shown on /search right after the questionnaire: matches, near-misses, and the Kundli entry point */
function FindResultsBanner({ cards, profile, matched, locale }: { cards: Card[]; profile: Profile; matched: number; locale: Locale }) {
  const t = useTranslations("findResults");
  const [open, setOpen] = useState(false);
  const almost = useMemo(
    () =>
      cards
        .map((c) => ({ c, r: checkScheme(c, profile) }))
        // Only near-misses that could realistically change (age, income, studies…), not state, gender or caste
        .filter(({ r }) => r.status === "almost" && !(isLeaf(r.failed[0].rule) && FIXED_FIELDS.has(r.failed[0].rule.field)))
        .map(({ c, r }) => ({ c, reason: explainFailure(r.failed[0], locale) })),
    [cards, profile, locale],
  );

  return (
    <section aria-labelledby="find-banner-h" className="mt-5 overflow-hidden rounded-[1.5rem] border bg-card shadow-soft">
      <div className="bg-brand-gradient p-5 text-white sm:p-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-white/85">
          <PartyPopper className="size-4" aria-hidden />
          {t("eyebrow")}
        </p>
        <h2 id="find-banner-h" className="mt-1 text-2xl font-extrabold sm:text-3xl">
          {t("title", { count: matched })}
        </h2>
        <p className="mt-1 text-white/85">{t("subtitle")}</p>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
        <div className="flex flex-wrap gap-2">
          {almost.length > 0 && (
            <Button variant="outline" size="sm" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              {t("almost", { count: almost.length })}
              <ChevronDown className={open ? "rotate-180 transition-transform" : "transition-transform"} aria-hidden />
            </Button>
          )}
          <Button asChild variant="ghost" size="sm">
            <Link href="/find">
              <PencilLine aria-hidden />
              {t("edit")}
            </Link>
          </Button>
        </div>
        <Button asChild variant="gold">
          <Link href="/kundli">
            <Sparkles aria-hidden />
            {t("kundli")}
          </Link>
        </Button>
      </div>
      {open && (
        <ul className="grid gap-2 border-t p-4 sm:p-5">
          {almost.map(({ c, reason }) => (
            <li key={c.slug} className="flex flex-col gap-0.5 rounded-xl bg-gold-soft/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <Link href={`/schemes/${c.slug}`} className="font-semibold hover:underline">
                {c.name[locale]}
              </Link>
              <span className="text-sm text-muted-foreground">
                {t("missing")}: {reason}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
