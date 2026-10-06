import { Landmark } from "lucide-react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SearchExperience, StaticResults } from "@/components/search/SearchExperience";
import { MINISTRIES, type MinistrySlug } from "@/data/taxonomy";
import { firstPage, schemesByMinistry, toCard } from "@/lib/schemes";
import type { Locale } from "@/lib/types";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(MINISTRIES).map((slug) => ({ slug }));

const isMinistry = (s: string): s is MinistrySlug => s in MINISTRIES;

export async function generateMetadata({ params }: PageProps<"/[locale]/ministry/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isMinistry(slug)) return {};
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("browse");
  return { title: MINISTRIES[slug].name[locale], description: t("ministryIntro", { ministry: MINISTRIES[slug].name[locale] }) };
}

export default async function MinistryPage({ params }: PageProps<"/[locale]/ministry/[slug]">) {
  const { slug } = await params;
  if (!isMinistry(slug)) notFound();
  const t = await getTranslations("browse");
  const locale = (await getLocale()) as Locale;
  const name = MINISTRIES[slug].name[locale];
  const cards = schemesByMinistry(slug).map(toCard);
  const initial = firstPage(cards, locale);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: t("breadcrumbHome") }, { label: t("ministry") }, { label: name }]}
        eyebrow={t("ministry")}
        title={name}
        description={t("ministryIntro", { ministry: name })}
        icon={
          <span className="mt-1 hidden size-14 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground sm:grid">
            <Landmark className="size-7" aria-hidden />
          </span>
        }
        meta={<p className="text-sm font-semibold">{t("count", { count: cards.length })}</p>}
      />
      <div className="container-page py-8 lg:py-10">
        <Suspense fallback={<StaticResults cards={initial} locale={locale} />}>
          <SearchExperience scope="central" initial={initial} total={cards.length} locked={{ ministry: slug }} />
        </Suspense>
      </div>
    </>
  );
}
