import { Info, Mail } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/pages/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage() {
  const t = await getTranslations();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <>
      <PageHero crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("contact.title") }]} title={t("contact.title")} description={t("contact.subtitle")} />
      <div className="container-page grid max-w-5xl gap-8 py-10 lg:grid-cols-[1fr_20rem]">
        <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft sm:p-6">
          <ContactForm />
        </div>
        <aside className="grid content-start gap-4 text-sm">
          {email && (
            <p className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-soft">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                {t("contact.emailUs")}{" "}
                <a href={`mailto:${email}`} className="font-semibold break-all text-primary underline-offset-4 hover:underline">
                  {email}
                </a>
              </span>
            </p>
          )}
          <p className="flex items-start gap-3 rounded-2xl bg-secondary p-4 text-secondary-foreground">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden />
            {t("contact.schemeTip")}
          </p>
          <p className="flex items-start gap-3 rounded-2xl bg-gold-soft p-4">
            <Info className="mt-0.5 size-5 shrink-0 text-gold-ink" aria-hidden />
            {t("contact.notGov")}
          </p>
        </aside>
      </div>
    </>
  );
}
