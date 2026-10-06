import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { PAGES, type StaticPageKey } from "@/data/pages";
import type { Locale } from "@/lib/types";

export async function staticPageMetadata(key: StaticPageKey): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return { title: PAGES[key].title[locale], description: PAGES[key].intro[locale] };
}

export async function StaticPage({ page }: { page: StaticPageKey }) {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const p = PAGES[page];
  const date = new Date(`${p.updated}T00:00:00+05:30`).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: p.title[locale] }]}
        title={p.title[locale]}
        description={p.intro[locale]}
        meta={<p className="text-sm text-muted-foreground">{t("pages.updated", { date })}</p>}
      />
      <div className="container-page grid max-w-5xl gap-10 py-10 lg:grid-cols-[14rem_1fr]">
        <nav aria-label={t("pages.onThisPage")} className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">{t("pages.onThisPage")}</p>
            <ul className="mt-3 grid gap-1 border-l">
              {p.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#s${i}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-3 text-sm text-muted-foreground hover:border-primary hover:text-foreground">
                    {s.heading[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="grid max-w-3xl gap-10">
          {p.sections.map((s, i) => (
            <section key={i} id={`s${i}`} aria-labelledby={`s${i}-h`} className="scroll-mt-24">
              <h2 id={`s${i}-h`} className="text-2xl font-extrabold">
                {s.heading[locale]}
              </h2>
              {s.body[locale].length > 2 ? (
                <ul className="mt-4 grid gap-2.5">
                  {s.body[locale].map((line, j) => (
                    <li key={j} className="flex gap-3 text-[1.02rem] leading-relaxed">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4 grid gap-4 text-[1.02rem] leading-relaxed text-foreground/90">
                  {s.body[locale].map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
