import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { FaqSearch } from "@/components/pages/FaqSearch";
import { FAQS } from "@/data/faqs";
import type { Locale } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faqsPage");
  return { title: t("title"), description: t("subtitle") };
}

export default async function FaqsPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const items = FAQS.map((f) => ({ id: f.id, q: f.q[locale], a: f.a[locale] }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("faqsPage.title") }]} title={t("faqsPage.title")} description={t("faqsPage.subtitle")} />
      <div className="container-page max-w-3xl py-10">
        <FaqSearch items={items} />
      </div>
    </>
  );
}
