import { BadgeCheck, CalendarCheck, CircleCheck, CircleX, ExternalLink, FileText, IndianRupee, Info, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/home/FaqList";
import { PageHero } from "@/components/layout/PageHero";
import { EligibilityCheck } from "@/components/scheme/EligibilityCheck";
import { ReportIssue } from "@/components/scheme/ReportIssue";
import { ApplyButton, BookmarkButton, ShareButton } from "@/components/scheme/SchemeActions";
import { SchemeCard } from "@/components/scheme/SchemeCard";
import { SectionNav } from "@/components/scheme/SectionNav";
import { BENEFIT_TYPES } from "@/data/profile-labels";
import { CATEGORIES, MINISTRIES, STATES } from "@/data/taxonomy";
import { getPathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { allSlugs, getScheme, relatedSchemes, toCard } from "@/lib/schemes";
import { SITE_URL } from "@/lib/site";
import type { Locale, Scheme } from "@/lib/types";
import { cn } from "@/lib/utils";
import { describeValue } from "@/lib/value";

export const dynamicParams = false;
export const generateStaticParams = () => allSlugs().map((slug) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/[locale]/schemes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getScheme(slug);
  if (!s) return {};
  const locale = (await getLocale()) as Locale;
  const languages = Object.fromEntries(routing.locales.map((l) => [l, getPathname({ href: `/schemes/${slug}`, locale: l })]));
  return {
    title: s.name[locale],
    description: s.shortDescription[locale],
    alternates: { canonical: getPathname({ href: `/schemes/${slug}`, locale }), languages },
    openGraph: { title: s.name[locale], description: s.shortDescription[locale], type: "article" },
  };
}

function orgName(s: Scheme, locale: Locale) {
  if (s.level === "state" && s.state) return s.department?.[locale] ?? STATES[s.state].name[locale];
  return s.ministry ? MINISTRIES[s.ministry].name[locale] : "";
}

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
}

function List({ items, icon }: { items: string[]; icon: "check" | "x" | "doc" | "dot" }) {
  return (
  <ul className="grid gap-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-[1rem] leading-relaxed">
        {icon === "check" && <CircleCheck className="mt-1 size-5 shrink-0 text-success-ink" aria-hidden />}
        {icon === "x" && <CircleX className="mt-1 size-5 shrink-0 text-destructive" aria-hidden />}
        {icon === "doc" && <FileText className="mt-1 size-5 shrink-0 text-primary" aria-hidden />}
        {icon === "dot" && <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />}
        <span>{item}</span>
      </li>
    ))}
  </ul>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
  <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-36 border-b pb-10 last:border-0">
    <h2 id={`${id}-h`} className="text-2xl font-extrabold">
      {title}
    </h2>
    <div className="mt-4">{children}</div>
  </section>
  );
}

function Steps({ title, steps }: { title: string; steps: string[] }) {
  return (
  <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft">
    <h3 className="font-heading text-lg font-bold">{title}</h3>
    <ol className="mt-4 grid gap-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">{i + 1}</span>
          <span className="pt-0.5 leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  </div>
  );
}

export default async function SchemePage({ params }: PageProps<"/[locale]/schemes/[slug]">) {
  const { slug } = await params;
  const s = getScheme(slug);
  if (!s) notFound();

  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const name = s.name[locale];
  const org = orgName(s, locale);
  const related = relatedSchemes(s, 3);
  const primary = s.categories[0];

  const sections = [
    { id: "details", label: t("scheme.tabs.details") },
    { id: "benefits", label: t("scheme.tabs.benefits") },
    { id: "eligibility", label: t("scheme.tabs.eligibility") },
    { id: "exclusions", label: t("scheme.tabs.exclusions") },
    { id: "apply", label: t("scheme.tabs.apply") },
    { id: "documents", label: t("scheme.tabs.documents") },
    { id: "faqs", label: t("scheme.tabs.faqs") },
    { id: "sources", label: t("scheme.tabs.sources") },
  ];

  const pageUrl = `${SITE_URL}${getPathname({ href: `/schemes/${slug}`, locale })}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      name,
      description: s.shortDescription[locale],
      url: pageUrl,
      serviceType: CATEGORIES[primary].name[locale],
      areaServed: s.state ? { "@type": "State", name: STATES[s.state].name.en } : { "@type": "Country", name: "India" },
      provider: { "@type": "GovernmentOrganization", name: org },
      sameAs: s.officialUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q[locale], acceptedAnswer: { "@type": "Answer", text: f.a[locale] } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("browse.breadcrumbHome"), item: `${SITE_URL}${getPathname({ href: "/", locale })}` },
        { "@type": "ListItem", position: 2, name: CATEGORIES[primary].name[locale], item: `${SITE_URL}${getPathname({ href: `/category/${primary}`, locale })}` },
        { "@type": "ListItem", position: 3, name, item: pageUrl },
      ],
    },
  ];

  const statusTone = s.status === "active" ? "bg-success-soft text-success-ink" : s.status === "pilot" ? "bg-accent text-accent-foreground" : "bg-gold-soft text-gold-ink";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <PageHero
        crumbs={[
          { href: "/", label: t("browse.breadcrumbHome") },
          { href: `/category/${primary}`, label: CATEGORIES[primary].name[locale] },
          { label: name },
        ]}
        title={name}
        description={s.shortDescription[locale]}
        meta={
          <div className="grid gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className={cn("rounded-full px-3 py-1 font-semibold", s.level === "central" ? "bg-secondary text-secondary-foreground" : "bg-gold-soft text-gold-ink")}>
                {s.level === "central" ? t("scheme.level.central") : t("scheme.level.state", { state: STATES[s.state!].name[locale] })}
              </span>
              <span className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold", statusTone)}>
                {s.status === "active" && <BadgeCheck className="size-4" aria-hidden />}
                {t(`scheme.status.${s.status}`)}
              </span>
              {s.categories.map((c) => (
                <Link key={c} href={`/category/${c}`} className="rounded-full border bg-card px-3 py-1 text-muted-foreground hover:border-primary/50 hover:text-foreground">
                  {CATEGORIES[c].name[locale]}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
              {org && (
                <span>
                  {s.ministry ? (
                    <Link href={`/ministry/${s.ministry}`} className="underline-offset-4 hover:text-foreground hover:underline">
                      {org}
                    </Link>
                  ) : (
                    org
                  )}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="size-4" aria-hidden />
                {t("scheme.lastVerified", { date: formatDate(s.lastVerified, locale) })}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <BookmarkButton slug={s.slug} />
              <ShareButton title={name} />
            </div>
          </div>
        }
      />

      <div className="container-page grid gap-10 pt-6 pb-28 lg:grid-cols-[1fr_20rem] lg:gap-12 lg:pb-10">
        <div className="min-w-0">
          {s.status !== "active" && (
            <p className="mb-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gold-soft p-4 text-[0.95rem]">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-ink" aria-hidden />
              {t(`scheme.statusNote.${s.status}`)}
            </p>
          )}

          <SectionNav sections={sections} label={t("scheme.sectionNav")} />

          <div className="mt-8 grid gap-10">
            <Section id="details" title={t("scheme.tabs.details")}>
              <div className="grid gap-4 text-[1.02rem] leading-relaxed">
                {s.details[locale].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Section>
            <Section id="benefits" title={t("scheme.tabs.benefits")}>
              <List items={s.benefits[locale]} icon="check" />
            </Section>
            <Section id="eligibility" title={t("scheme.tabs.eligibility")}>
              <List items={s.eligibilityText[locale]} icon="dot" />
              <div className="mt-6 lg:hidden">
                <EligibilityCheck eligibility={s.eligibility} className="w-full sm:w-auto" />
              </div>
            </Section>
            <Section id="exclusions" title={t("scheme.tabs.exclusions")}>
              <List items={s.exclusions[locale]} icon="x" />
            </Section>
            <Section id="apply" title={t("scheme.tabs.apply")}>
              <div className="grid gap-4 xl:grid-cols-2">
                {s.applicationProcess.online && <Steps title={t("scheme.online")} steps={s.applicationProcess.online[locale]} />}
                {s.applicationProcess.offline && <Steps title={t("scheme.offline")} steps={s.applicationProcess.offline[locale]} />}
              </div>
            </Section>
            <Section id="documents" title={t("scheme.tabs.documents")}>
              <List items={s.documents[locale]} icon="doc" />
            </Section>
            <Section id="faqs" title={t("scheme.tabs.faqs")}>
              <FaqList items={s.faqs.map((f, i) => ({ id: `faq-${i}`, q: f.q[locale], a: f.a[locale] }))} />
            </Section>
            <Section id="sources" title={t("scheme.tabs.sources")}>
              <p className="text-[0.95rem] text-muted-foreground">{t("scheme.sourcesIntro")}</p>
              <ul className="mt-3 grid gap-2">
                {s.sources.map((u) => (
                  <li key={u}>
                    <a href={u} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 text-[0.95rem] break-all text-primary underline-offset-4 hover:underline">
                      {u.replace(/^https:\/\/(www\.)?/, "")}
                      <ExternalLink className="mt-1 size-3.5 shrink-0" aria-hidden />
                      <span className="sr-only">({t("footer.external")})</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <CalendarCheck className="size-4" aria-hidden />
                {t("scheme.lastVerified", { date: formatDate(s.lastVerified, locale) })}
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold-soft p-4 text-sm">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-ink" aria-hidden />
                <p>{t("brand.disclaimer")}</p>
              </div>
              <div className="mt-4">
                <ReportIssue slug={s.slug} />
              </div>
            </Section>
          </div>
        </div>

        {/* Desktop action rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 grid gap-4">
            <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft">
              {s.value && (
                <div className="mb-5 rounded-2xl bg-success-soft p-4">
                  <p className="text-xs font-semibold tracking-wide text-success-ink uppercase">{t("scheme.value")}</p>
                  <p className="mt-1 flex items-center gap-1 font-heading text-xl font-extrabold text-success-ink">
                    <IndianRupee className="size-5" aria-hidden />
                    {describeValue(s.value, locale).replace(/^₹/, "")}
                  </p>
                </div>
              )}
              <div className="grid gap-2.5">
                <EligibilityCheck eligibility={s.eligibility} className="w-full" />
                <ApplyButton url={s.officialUrl} name={name} className="w-full" />
              </div>
            </div>
            <dl className="grid gap-3 rounded-[1.25rem] border bg-card p-5 text-sm shadow-soft">
              <h2 className="font-heading text-base font-bold">{t("scheme.keyFacts")}</h2>
              <div>
                <dt className="text-muted-foreground">{t("scheme.benefitType")}</dt>
                <dd className="font-semibold">{BENEFIT_TYPES[s.benefitType][locale]}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{t("scheme.dbt")}</dt>
                <dd className="font-semibold">{s.isDBT ? t("scheme.dbtYes") : t("scheme.dbtNo")}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{t("scheme.since")}</dt>
                <dd className="font-semibold">{s.launchedYear}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{t("scheme.officialSite")}</dt>
                <dd className="font-semibold break-all">{new URL(s.officialUrl).hostname.replace(/^www\./, "")}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="container-page pb-10" aria-labelledby="related-h">
          <h2 id="related-h" className="text-2xl font-extrabold">
            {t("scheme.related")}
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <SchemeCard card={toCard(r)} locale={locale} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          <EligibilityCheck eligibility={s.eligibility} size="default" className="w-full px-3" />
          <ApplyButton url={s.officialUrl} name={name} size="default" className="w-full px-3" />
        </div>
      </div>
    </>
  );
}
