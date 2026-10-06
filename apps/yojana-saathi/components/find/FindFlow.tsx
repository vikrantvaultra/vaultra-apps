"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CloudCheck, Lock, RotateCcw, ShieldCheck, Wand2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { QuestionInput } from "@/components/questions/QuestionInput";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { useRouter } from "@/i18n/navigation";
import { visibleQuestions } from "@/lib/questions";
import { clearProfile, saveProfile, useProfile } from "@/lib/store/profile";
import type { Locale, Profile, ProfileField } from "@/lib/types";

type Stage = { kind: "intro" } | { kind: "question"; field: ProfileField } | { kind: "finishing" };

const EMPTY: Profile = {};

export function FindFlow() {
  return (
    <MotionConfig reducedMotion="user">
      <FindFlowInner />
    </MotionConfig>
  );
}

function FindFlowInner() {
  const t = useTranslations("find");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const mounted = useMounted();
  const saved = useProfile() ?? EMPTY;

  const [stage, setStage] = useState<Stage>({ kind: "intro" });
  const [skipped, setSkipped] = useState<Set<ProfileField>>(new Set());
  const [dir, setDir] = useState<1 | -1>(1);
  const [justSaved, setJustSaved] = useState(false);
  const savedTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const headingRef = useRef<HTMLDivElement>(null);

  const list = visibleQuestions(saved);
  const answered = list.filter((q) => saved[q.field] !== undefined).length;
  const firstOpen = list.find((q) => saved[q.field] === undefined && !skipped.has(q.field));

  // Move focus to the new question so screen readers announce it
  useEffect(() => {
    if (stage.kind === "question") headingRef.current?.focus();
  }, [stage]);

  function goTo(field: ProfileField | undefined, direction: 1 | -1 = 1) {
    setDir(direction);
    if (!field) {
      setStage({ kind: "finishing" });
      router.push("/search?mine=yes&from=find");
      return;
    }
    setStage({ kind: "question", field });
  }

  /** The next question after `field`, recomputed against the newest answers (skip logic) */
  function nextAfter(field: ProfileField, profile: Profile) {
    const qs = visibleQuestions(profile);
    const i = qs.findIndex((q) => q.field === field);
    return qs[i + 1]?.field;
  }

  function answer(field: ProfileField, value: Profile[ProfileField]) {
    const next: Profile = { ...saved, [field]: value };
    // Clear answers that no longer apply (e.g. disability % after answering "not disabled")
    for (const q of visibleQuestions(saved)) {
      if (q.showIf && !q.showIf(next)) delete next[q.field];
    }
    saveProfile(next);
    setSkipped((s) => {
      const n = new Set(s);
      n.delete(field);
      return n;
    });
    clearTimeout(savedTimer.current);
    setJustSaved(true);
    savedTimer.current = setTimeout(() => setJustSaved(false), 1400);
    goTo(nextAfter(field, next));
  }

  function skip(field: ProfileField) {
    setSkipped((s) => new Set(s).add(field));
    goTo(nextAfter(field, saved));
  }

  function back(field: ProfileField) {
    const i = list.findIndex((q) => q.field === field);
    if (i <= 0) setStage({ kind: "intro" });
    else goTo(list[i - 1].field, -1);
  }

  if (stage.kind === "question") {
    const q = list.find((x) => x.field === stage.field);
    const idx = list.findIndex((x) => x.field === stage.field);
    if (!q) return null;
    const progress = Math.round(((idx + 1) / list.length) * 100);

    return (
      <section className="container-page max-w-2xl pt-6 pb-24 sm:pt-10">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={() => back(q.field)} className="-ml-3">
            <ArrowLeft aria-hidden />
            {t("back")}
          </Button>
          <span aria-live="polite" className={`inline-flex items-center gap-1.5 text-xs font-semibold text-success-ink transition-opacity ${justSaved ? "opacity-100" : "opacity-0"}`}>
            <CloudCheck className="size-4" aria-hidden />
            {t("saved")}
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
            <span>{t("progress", { n: idx + 1, total: list.length })}</span>
            <span>{progress}%</span>
          </div>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label={t("progress", { n: idx + 1, total: list.length })}
            className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
          >
            <motion.div className="h-full rounded-full bg-brand-gradient" initial={false} animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 140, damping: 22 }} />
          </div>
        </div>

        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={q.field}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8"
          >
            <div ref={headingRef} tabIndex={-1} className="outline-none">
              <QuestionInput question={q} value={saved[q.field]} locale={locale} onAnswer={(v) => answer(q.field, v)} headingLevel="h1" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={() => skip(q.field)} className="text-muted-foreground">
            {t("skip")}
          </Button>
          {saved[q.field] !== undefined && (
            <Button variant="outline" size="sm" onClick={() => goTo(nextAfter(q.field, saved))}>
              {t("next")}
              <ArrowRight aria-hidden />
            </Button>
          )}
        </div>
      </section>
    );
  }

  if (stage.kind === "finishing") {
    return (
      <section className="container-page flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center text-center" aria-live="polite">
        <span className="grid size-16 place-items-center rounded-3xl bg-brand-gradient text-white shadow-lift">
          <Check className="size-8" aria-hidden />
        </span>
        <h1 className="mt-5 text-3xl font-extrabold">{t("doneTitle")}</h1>
        <p className="mt-2 text-muted-foreground">{t("finishing")}</p>
      </section>
    );
  }

  // Intro
  const hasAnswers = mounted && answered > 0;
  const complete = mounted && !firstOpen && answered > 0;
  const points = t.raw("points") as string[];
  const icons = [Lock, CloudCheck, ShieldCheck];

  return (
    <section className="container-page max-w-2xl pt-10 pb-24 sm:pt-16">
      <span className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lift">
        <Wand2 className="size-7" aria-hidden />
      </span>
      <h1 className="mt-6 text-4xl leading-tight font-extrabold sm:text-5xl">{t("title")}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{t("subtitle")}</p>
      <ul className="mt-6 grid gap-2.5">
        {points.map((p, i) => {
          const Icon = icons[i] ?? Check;
          return (
            <li key={p} className="flex items-center gap-3 text-[0.98rem]">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-success-soft text-success-ink">
                <Icon className="size-4" aria-hidden />
              </span>
              {p}
            </li>
          );
        })}
      </ul>

      {hasAnswers && <p className="mt-6 text-sm font-medium text-muted-foreground">{t("resumeNote", { answered, total: list.length })}</p>}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {complete ? (
          <>
            <Button variant="brand" size="lg" onClick={() => goTo(undefined)}>
              {t("seeResults")}
              <ArrowRight aria-hidden />
            </Button>
            <Button variant="outline" size="lg" onClick={() => goTo(list[0].field)}>
              {t("editAnswers")}
            </Button>
          </>
        ) : (
          <Button variant="brand" size="lg" onClick={() => goTo((hasAnswers ? firstOpen : list[0])?.field)}>
            {hasAnswers ? t("continue") : t("start")}
            <ArrowRight aria-hidden />
          </Button>
        )}
        {hasAnswers && (
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              clearProfile();
              setSkipped(new Set());
              goTo(QUESTIONS_FIRST);
            }}
          >
            <RotateCcw aria-hidden />
            {t("startOver")}
          </Button>
        )}
      </div>
    </section>
  );
}

const QUESTIONS_FIRST: ProfileField = "gender";
