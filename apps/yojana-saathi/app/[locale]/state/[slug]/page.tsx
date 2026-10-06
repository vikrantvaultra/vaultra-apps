import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SearchExperience, StaticResults } from "@/components/search/SearchExperience";
import { STATES, type StateSlug } from "@/data/taxonomy";
import { allCards, schemesInState } from "@/lib/schemes";
import type { Locale } from "@/lib/types";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(STATES).map((slug) => ({ slug }));

const isState = (s: string): s is StateSlug => s in STATES;

export async function generateMetadata({ params }: PageProps<"/[locale]/state/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isState(slug)) return {};
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("browse");
  return { title: STATES[slug].name[locale], description: t("stateIntro", { state: STATES[slug].name[locale] }) };
}

export default async function StatePage({ params }: PageProps<"/[locale]/state/[slug]">) {
  const { slug } = await params;
  if (!isState(slug)) notFound();
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const name = STATES[slug].name[locale];
  const own = schemesInState(slug).length;
  // Everything a resident can use: this state's schemes plus every central scheme
  const cards = allCards().filter((c) => c.level === "central" || c.state === slug);
  const central = cards.length - own;

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("browse.state") }, { label: name }]}
        eyebrow={t("browse.state")}
        title={name}
        description={t("browse.stateIntro", { state: name })}
        icon={
          <span className="mt-1 hidden size-14 shrink-0 place-items-center rounded-2xl bg-gold-soft text-gold-ink sm:grid">
            <MapPin className="size-7" aria-hidden />
          </span>
        }
        meta={
          <p className="flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-gold-soft px-3 py-1 text-gold-ink">{t("home.discover.stateCount", { count: own })}</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              {t("search.levelCentral")}: {central}
            </span>
          </p>
        }
      />
      <div className="container-page py-8 lg:py-10">
        <Suspense fallback={<StaticResults cards={cards} locale={locale} />}>
          <SearchExperience cards={cards} locked={{ state: slug }} />
        </Suspense>
      </div>
    </>
  );
}
