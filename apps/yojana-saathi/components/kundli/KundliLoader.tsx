"use client";

import { CosmicBackdrop } from "./CosmicBackdrop";
import { Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

function IntroShell() {
  const t = useTranslations("kundli");
  return (
    <section className="relative isolate overflow-hidden bg-cosmic text-white">
        <CosmicBackdrop />
      <div className="container-page flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center py-14 text-center">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-sm font-semibold text-gold">
          <Sparkles className="size-4" aria-hidden />
          {t("eyebrow")}
        </p>
        <h1 className="mt-6 text-5xl font-extrabold sm:text-7xl">
          <span className="bg-[linear-gradient(100deg,#F8CB6B,#FFF1C9_45%,#F5B83D)] bg-clip-text text-transparent">{t("title")}</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">{t("tagline")}</p>
        <p className="mt-2 text-sm font-medium text-gold/90">{t("noStars")}</p>
        <div className="mt-8 aspect-square w-full max-w-xs animate-pulse rounded-3xl border border-gold/20" aria-hidden />
      </div>
    </section>
  );
}

// The Kundli (chart, animation, share cards) is its own chunk; nothing else on the site pays for it
const KundliApp = dynamic(() => import("./KundliApp").then((m) => m.KundliApp), { ssr: false, loading: IntroShell });

export function KundliLoader() {
  return <KundliApp />;
}
