import { ArrowRight, Wand2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 h-[34rem] bg-[radial-gradient(60%_60%_at_30%_30%,rgb(79_70_229/0.16),transparent_70%),radial-gradient(50%_50%_at_75%_40%,rgb(16_185_129/0.14),transparent_70%)]" />
      <div className="container-page relative pt-14 pb-20 sm:pt-20 lg:pt-28">
        <p className="inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft sm:text-sm">
          {t("eyebrow")}
        </p>
        <h1 className="mt-6 max-w-3xl text-[2.35rem] leading-[1.08] font-extrabold sm:text-6xl">
          {t.rich("title", { hl: (chunks) => <span className="text-brand-gradient">{chunks}</span> })}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("subtitle")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="/find">
              <Wand2 aria-hidden />
              {t("ctaFind")}
              <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="gold" size="lg">
            <Link href="/kundli">
              {t("ctaKundli")} <span aria-hidden>✨</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
