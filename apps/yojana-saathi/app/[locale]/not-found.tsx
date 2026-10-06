import { SearchX } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations();
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <div className="grid size-16 place-items-center rounded-3xl bg-secondary text-secondary-foreground">
        <SearchX className="size-8" aria-hidden />
      </div>
      <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{t("common.notFoundTitle")}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("common.notFoundBody")}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="brand">
          <Link href="/search">{t("nav.search")}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">{t("common.backHome")}</Link>
        </Button>
      </div>
    </section>
  );
}
