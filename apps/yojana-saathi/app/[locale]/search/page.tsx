import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SearchExperience, StaticResults } from "@/components/search/SearchExperience";
import { allCards, firstPage } from "@/lib/schemes";
import type { Locale } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("search");
  return { title: t("title"), description: t("metaDescription") };
}

export default async function SearchPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const cards = allCards();
  const initial = firstPage(cards, locale);

  return (
    <>
      <PageHero crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("search.title") }]} title={t("search.title")} />
      <div className="container-page py-8 lg:py-10">
        <Suspense fallback={<StaticResults cards={initial} locale={locale} />}>
          <SearchExperience scope="all" initial={initial} total={cards.length} />
        </Suspense>
      </div>
    </>
  );
}
