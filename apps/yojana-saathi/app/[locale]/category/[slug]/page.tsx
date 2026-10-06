import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TaxonomyIcon } from "@/components/icons";
import { PageHero } from "@/components/layout/PageHero";
import { SearchExperience, StaticResults } from "@/components/search/SearchExperience";
import { CATEGORIES, type CategorySlug } from "@/data/taxonomy";
import { firstPage, schemesInCategory, toCard } from "@/lib/schemes";
import type { Locale } from "@/lib/types";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(CATEGORIES).map((slug) => ({ slug }));

const isCategory = (s: string): s is CategorySlug => s in CATEGORIES;

export async function generateMetadata({ params }: PageProps<"/[locale]/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isCategory(slug)) return {};
  const locale = (await getLocale()) as Locale;
  return { title: CATEGORIES[slug].name[locale], description: CATEGORIES[slug].blurb[locale] };
}

export default async function CategoryPage({ params }: PageProps<"/[locale]/category/[slug]">) {
  const { slug } = await params;
  if (!isCategory(slug)) notFound();
  const t = await getTranslations("browse");
  const locale = (await getLocale()) as Locale;
  const cat = CATEGORIES[slug];
  const cards = schemesInCategory(slug).map(toCard);
  const initial = firstPage(cards, locale);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: t("breadcrumbHome") }, { label: t("category") }, { label: cat.name[locale] }]}
        eyebrow={t("category")}
        title={cat.name[locale]}
        description={cat.blurb[locale]}
        icon={
          <span className="mt-1 hidden size-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lift sm:grid">
            <TaxonomyIcon name={cat.icon} className="size-7" />
          </span>
        }
        meta={<p className="text-sm font-semibold">{t("count", { count: cards.length })}</p>}
      />
      <div className="container-page py-8 lg:py-10">
        <Suspense fallback={<StaticResults cards={initial} locale={locale} />}>
          <SearchExperience scope="all" initial={initial} total={cards.length} locked={{ category: slug }} />
        </Suspense>
      </div>
    </>
  );
}
