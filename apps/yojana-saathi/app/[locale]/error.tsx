"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("common");
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <div className="grid size-16 place-items-center rounded-3xl bg-gold-soft text-gold-ink">
        <TriangleAlert className="size-8" aria-hidden />
      </div>
      <h1 className="mt-6 text-3xl font-extrabold">{t("errorTitle")}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("errorBody")}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="brand" onClick={reset}>
          <RotateCcw aria-hidden />
          {t("retry")}
        </Button>
        <Button asChild variant="outline">
          <Link href="/">{t("backHome")}</Link>
        </Button>
      </div>
    </section>
  );
}
