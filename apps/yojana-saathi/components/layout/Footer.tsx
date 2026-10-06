import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LogoMark } from "@/components/brand/Logo";
import { Link } from "@/i18n/navigation";
import { USEFUL_LINKS } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations();

  const columns = [
    {
      title: t("footer.explore"),
      links: [
        { href: "/find", label: t("nav.find") },
        { href: "/search", label: t("nav.search") },
        { href: "/kundli", label: t("nav.kundli") },
        { href: "/dashboard", label: t("nav.dashboard") },
      ],
    },
    {
      title: t("footer.about"),
      links: [
        { href: "/about", label: t("footer.aboutUs") },
        { href: "/contact", label: t("footer.contact") },
        { href: "/faqs", label: t("footer.faqs") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { href: "/disclaimer", label: t("footer.disclaimerLink") },
        { href: "/terms", label: t("footer.terms") },
        { href: "/privacy", label: t("footer.privacy") },
        { href: "/accessibility", label: t("footer.accessibility") },
      ],
    },
  ] as const;

  return (
    <footer className="mt-24 border-t bg-card/60">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-heading text-lg font-extrabold tracking-tight">{t("brand.name")}</span>
            </div>
            <p className="mt-4 text-[0.95rem] text-muted-foreground">{t("brand.tagline")}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t("footer.builtWith")}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm font-bold">{col.title}</h2>
                <ul className="mt-3 grid gap-1">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="inline-flex min-h-10 items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label={t("footer.useful")}>
              <h2 className="text-sm font-bold">{t("footer.useful")}</h2>
              <ul className="mt-3 grid gap-1">
                {USEFUL_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-10 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                      <ArrowUpRight className="size-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                      <span className="sr-only">({t("footer.external")})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold-soft p-4 text-sm text-foreground">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-ink" aria-hidden />
          <p>{t("brand.disclaimer")}</p>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
