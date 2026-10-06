"use client";

import { CosmicBackdrop } from "./CosmicBackdrop";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator, ListChecks, PencilLine, Share2, SkipForward, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { QuestionInput } from "@/components/questions/QuestionInput";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { Link } from "@/i18n/navigation";
import { KUNDLI_HOUSES, type KundliHouse } from "@/data/taxonomy";
import { formatINRCompact } from "@/lib/format";
import { computeKundli, type HouseSummary } from "@/lib/kundli/compute";
import { visibleQuestions, type Question } from "@/lib/questions";
import { useCards } from "@/lib/cards-client";
import type { SchemeCard } from "@/lib/schemes";
import { useKundliState } from "@/lib/store/kundli";
import { updateProfile, useProfile } from "@/lib/store/profile";
import type { Locale, Profile, ProfileField } from "@/lib/types";
import { HouseSheet } from "./HouseSheet";
import { HowWeCalculated } from "./HowWeCalculated";
import { KundliChart, REVEAL_MS } from "./KundliChart";
import { HousesList, NowList, Numbers } from "./KundliResultParts";
import { ShareSection } from "./ShareSection";
import { Timeline } from "./Timeline";

type Stage = "intro" | "questions" | "reveal" | "result";
const REVEALED_KEY = "ys-kundli-revealed";
const EMPTY: Profile = {};

export function KundliApp() {
  return (
    <MotionConfig reducedMotion="user">
      <KundliAppInner />
    </MotionConfig>
  );
}

const NO_CARDS: SchemeCard[] = [];

function KundliAppInner() {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const mounted = useMounted();
  const profile = useProfile() ?? EMPTY;
  const kundliState = useKundliState();
  // Only central schemes + the person's own state are relevant to their Kundli
  const { cards: loaded } = useCards(profile.state ?? "central");
  const cards = loaded ?? NO_CARDS;
  const currentYear = new Date().getFullYear();

  // Client-only component (loaded with ssr: false), so sessionStorage is available here.
  // Seen the reveal this session? Go straight to the chart.
  const [stage, setStage] = useState<Stage>(() => {
    try {
      return sessionStorage.getItem(REVEALED_KEY) ? "result" : "intro";
    } catch {
      return "intro";
    }
  });
  const [qIndex, setQIndex] = useState(0);
  const [openHouse, setOpenHouse] = useState<KundliHouse | null>(null);
  const [howOpen, setHowOpen] = useState(false);
  const shareRef = useRef<HTMLElement>(null);

  // The three Kundli-only questions, in this locale
  const extras: Question[] = useMemo(() => {
    const l = (s: string) => ({ en: s, hi: s });
    const yesNo = [
      { value: true, label: l(t("yes")) },
      { value: false, label: l(t("no")) },
    ];
    return [
      { field: "birthYear", kind: "number", title: l(t("extraBirthYear")), help: l(t("extraBirthYearHelp")), min: currentYear - 100, max: currentYear - 1 },
      { field: "planningBusiness", kind: "choice", title: l(t("extraBusiness")), options: yesNo },
      { field: "planningHome", kind: "choice", title: l(t("extraHome")), options: yesNo },
    ];
  }, [t, currentYear]);

  // Ask only what's missing: the regular questionnaire (age comes from year of birth) plus the extras
  const [plan, setPlan] = useState<Question[]>([]);
  const missing = useMemo(() => {
    const core = visibleQuestions(profile).filter((q) => q.field !== "age" && profile[q.field] === undefined);
    return [...core, ...extras.filter((q) => profile[q.field] === undefined)];
  }, [profile, extras]);

  const result = useMemo(
    () => (profile.birthYear && loaded ? computeKundli(cards, profile, { currentYear, claimed: kundliState.claimed }) : null),
    [cards, loaded, profile, currentYear, kundliState.claimed],
  );

  function begin() {
    if (missing.length) {
      setPlan(missing);
      setQIndex(0);
      setStage("questions");
    } else startReveal();
  }

  function startReveal() {
    setStage("reveal");
    window.scrollTo({ top: 0 });
  }

  function finishReveal() {
    try {
      sessionStorage.setItem(REVEALED_KEY, "1");
    } catch {}
    setStage("result");
  }

  useEffect(() => {
    if (stage !== "reveal") return;
    const id = setTimeout(finishReveal, REVEAL_MS + 400);
    return () => clearTimeout(id);
  }, [stage]);

  function answer(field: ProfileField, value: Profile[ProfileField]) {
    const patch: Profile = { [field]: value };
    if (field === "birthYear" && typeof value === "number") patch.age = currentYear - value;
    updateProfile(patch);
    // Re-plan: earlier answers can make later questions irrelevant
    const next = { ...profile, ...patch };
    const remaining = plan.slice(qIndex + 1).filter((q) => !q.showIf || q.showIf(next));
    if (remaining.length === 0) startReveal();
    else {
      setPlan([...plan.slice(0, qIndex + 1), ...remaining]);
      setQIndex(qIndex + 1);
    }
  }

  const format = (n: number) => formatINRCompact(n, locale);
  const houseLabel = (h: HouseSummary) => t("houseLabel", { n: KUNDLI_HOUSES[h.house].n, name: KUNDLI_HOUSES[h.house].name[locale], count: h.count });

  /* ---------------- Intro ---------------- */
  if (stage === "intro" || !mounted) {
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
          <div className="mt-8 w-full max-w-xs opacity-90" aria-hidden>
            <KundliChart
              houses={[]}
              totalAmount={0}
              formatTotal={() => "₹ ?"}
              estimateLabel={t("estimate")}
              houseLabel={() => ""}
              chartLabel=""
              interactive={false}
            />
          </div>
          <Button variant="gold" size="lg" className="mt-8" onClick={begin} disabled={!mounted}>
            <Sparkles aria-hidden />
            {missing.length ? t("startQuestions", { count: missing.length }) : t("reveal")}
          </Button>
          <p className="mt-3 text-sm text-white/60">{t("takes")}</p>
        </div>
      </section>
    );
  }

  /* ---------------- Questions ---------------- */
  if (stage === "questions") {
    const q = plan[qIndex];
    if (!q) return null;
    const pct = Math.round(((qIndex + 1) / plan.length) * 100);
    return (
      <section className="relative isolate overflow-hidden bg-cosmic text-white">
        <CosmicBackdrop />
        <div className="container-page min-h-[calc(100dvh-4rem)] max-w-2xl pt-6 pb-24">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 text-white hover:bg-white/10 hover:text-white"
              onClick={() => (qIndex === 0 ? setStage("intro") : setQIndex(qIndex - 1))}
            >
              <ArrowLeft aria-hidden />
              {t("back")}
            </Button>
            <span className="text-sm font-semibold text-white/70">{t("questionOf", { n: qIndex + 1, total: plan.length })}</span>
          </div>
          <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label={t("questionOf", { n: qIndex + 1, total: plan.length })} className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-[linear-gradient(90deg,#F5B83D,#F8CB6B)]" initial={false} animate={{ width: `${pct}%` }} />
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={q.field}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="mt-8 rounded-[1.5rem] bg-card p-5 text-card-foreground shadow-pop sm:p-7"
            >
              <QuestionInput question={q} value={profile[q.field]} locale={locale} onAnswer={(v) => answer(q.field, v)} headingLevel="h1" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  }

  if (!loaded && profile.birthYear) {
    return (
      <section className="relative isolate overflow-hidden bg-cosmic text-white" aria-busy="true">
        <CosmicBackdrop />
        <div className="container-page flex min-h-[60dvh] flex-col items-center justify-center text-center">
          <Sparkles className="size-8 animate-pulse text-gold" aria-hidden />
          <p className="mt-4 text-white/80">{t("revealing")}</p>
        </div>
      </section>
    );
  }

  if (!result) {
    // Answers were cleared since the last visit: start again
    return (
      <section className="relative isolate overflow-hidden bg-cosmic text-white">
        <CosmicBackdrop />
        <div className="container-page flex min-h-[60dvh] flex-col items-center justify-center text-center">
          <p className="text-white/80">{t("needAnswers")}</p>
          <Button variant="gold" className="mt-5" onClick={begin}>
            <Sparkles aria-hidden />
            {t("start")}
          </Button>
        </div>
      </section>
    );
  }

  /* ---------------- Reveal ---------------- */
  if (stage === "reveal") {
    return (
      <section className="relative isolate overflow-hidden bg-cosmic text-white">
        <CosmicBackdrop />
        <div className="container-page flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center py-10">
          <Button variant="ghost" size="sm" onClick={finishReveal} className="absolute top-4 right-4 text-white/80 hover:bg-white/10 hover:text-white">
            {t("skipIntro")}
            <SkipForward aria-hidden />
          </Button>
          <p className="text-sm font-medium text-gold/90" aria-live="polite">
            {t("revealing")}
          </p>
          <KundliChart
            houses={result.houses}
            totalAmount={result.totals.cash}
            formatTotal={format}
            estimateLabel={t("estimate")}
            houseLabel={houseLabel}
            chartLabel={t("chartLabel")}
            revealing
            interactive={false}
            className="mt-6 w-full max-w-[min(30rem,88vw)]"
          />
          <p className="mt-6 text-sm text-white/70">{t("noStars")}</p>
        </div>
      </section>
    );
  }

  /* ---------------- Result ---------------- */
  const house = openHouse ? result.houses.find((h) => h.house === openHouse) ?? null : null;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-cosmic text-white">
        <CosmicBackdrop />
        <div className="container-page grid items-center gap-8 py-10 lg:grid-cols-[1fr_1.1fr] lg:py-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              <Sparkles className="size-4" aria-hidden />
              {t("eyebrow")}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{kundliState.firstName ? t("cardTitle", { name: kundliState.firstName }) : t("title")}</h1>
            <p className="mt-3 text-white/75">{t("noStars")}</p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-2xl border border-gold/30 bg-white/5 p-4">
                <dt className="text-sm text-white/70">{t("lifetime")}</dt>
                <dd className="mt-1 font-heading text-2xl font-extrabold text-gold">{format(result.totals.cash)}</dd>
                <dd className="text-xs text-white/60">{t("estimateNote")}</dd>
              </div>
              <div className="rounded-2xl border border-success/30 bg-white/5 p-4">
                <dt className="text-sm text-white/70">{t("availableNow")}</dt>
                <dd className="mt-1 font-heading text-2xl font-extrabold text-success">{result.nowCount}</dd>
                <dd className="text-xs text-white/60">{t("nowSchemes", { count: result.nowCount })}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Button variant="gold" onClick={() => shareRef.current?.scrollIntoView({ behavior: "smooth" })}>
                <Share2 aria-hidden />
                {t("share")}
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" onClick={() => setHowOpen(true)}>
                <Calculator aria-hidden />
                {t("how")}
              </Button>
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-[min(32rem,92vw)] lg:order-2">
            <KundliChart
              houses={result.houses}
              totalAmount={result.totals.cash}
              formatTotal={format}
              estimateLabel={t("estimate")}
              houseLabel={houseLabel}
              chartLabel={t("chartLabel")}
              onHouse={setOpenHouse}
              className="w-full drop-shadow-[0_0_40px_rgba(245,184,61,0.15)]"
            />
          </div>
        </div>
      </section>

      <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-12 py-10 lg:py-14">
        <Numbers result={result} onHow={() => setHowOpen(true)} />
        <NowList result={result} />
        <Timeline result={result} />
        <HousesList result={result} onHouse={setOpenHouse} />
        <ShareSection ref={shareRef} result={result} />

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/search?mine=yes&from=find">
              <ListChecks aria-hidden />
              {t("seeSchemes")}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/find">
              <PencilLine aria-hidden />
              {t("editAnswers")}
            </Link>
          </Button>
        </div>
      </div>

      <HouseSheet house={house} onClose={() => setOpenHouse(null)} />
      <HowWeCalculated open={howOpen} onOpenChange={setHowOpen} />
    </>
  );
}
