"use client";

import { ArrowLeft, BadgeCheck, CircleCheck, CircleDashed, CircleHelp, CircleX, ListChecks } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { QuestionInput } from "@/components/questions/QuestionInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "@/i18n/navigation";
import { checkScheme, isLeaf, missingFields, type Evaluation } from "@/lib/engine/evaluate";
import { explainRule } from "@/lib/engine/explain";
import { QUESTIONS, QUESTION_BY_FIELD, withInferred } from "@/lib/questions";
import { readProfile, updateProfile } from "@/lib/store/profile";
import type { Locale, Profile, ProfileField, Rule } from "@/lib/types";
import { cn } from "@/lib/utils";

const ORDER = new Map(QUESTIONS.map((q, i) => [q.field, i]));

/** Missing answers in questionnaire order, limited to questions that apply to this person */
function nextMissing(eligibility: Rule, profile: Profile): ProfileField[] {
  const p = withInferred(profile);
  const r = checkScheme({ eligibility }, p);
  // Two failures already decide it. With one, keep asking: the rest tells us whether it's "almost".
  if (r.failed.length >= 2) return [];
  const fields = new Set(r.criteria.flatMap((c) => missingFields(c, p)));
  return [...fields]
    .filter((f) => {
      const q = QUESTION_BY_FIELD.get(f);
      return q && (!q.showIf || q.showIf(p));
    })
    .sort((a, b) => (ORDER.get(a) ?? 99) - (ORDER.get(b) ?? 99));
}

export function EligibilityCheck({ eligibility, className, size = "lg" }: { eligibility: Rule; className?: string; size?: "default" | "lg" }) {
  const t = useTranslations("scheme.check");
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({});
  const [history, setHistory] = useState<ProfileField[]>([]);

  function onOpenChange(next: boolean) {
    if (next) {
      setProfile(readProfile() ?? {});
      setHistory([]);
    }
    setOpen(next);
  }

  const missing = open ? nextMissing(eligibility, profile) : [];
  const current = missing[0];

  function answer(field: ProfileField, value: Profile[ProfileField]) {
    const next = { ...profile, [field]: value };
    setProfile(next);
    setHistory((h) => [...h, field]);
    updateProfile({ [field]: value });
  }

  function back() {
    const last = history[history.length - 1];
    if (!last) return;
    const next = { ...profile };
    delete next[last];
    setProfile(next);
    setHistory((h) => h.slice(0, -1));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="brand" size={size} className={className}>
          <ListChecks aria-hidden />
          {t("button")}
        </Button>
      </DialogTrigger>
      <DialogContent closeLabel={t("back")} className="sm:max-w-lg">
        {current ? (
          <QuestionStep
            key={current}
            field={current}
            profile={profile}
            remaining={missing.length}
            canGoBack={history.length > 0}
            onBack={back}
            onAnswer={(v) => answer(current, v)}
          />
        ) : (
          <Result eligibility={eligibility} profile={profile} />
        )}
      </DialogContent>
    </Dialog>
  );
}

function QuestionStep({
  field,
  profile,
  remaining,
  canGoBack,
  onBack,
  onAnswer,
}: {
  field: ProfileField;
  profile: Profile;
  remaining: number;
  canGoBack: boolean;
  onBack: () => void;
  onAnswer: (v: Profile[ProfileField]) => void;
}) {
  const t = useTranslations("scheme.check");
  const locale = useLocale() as Locale;
  const q = QUESTION_BY_FIELD.get(field)!;
  return (
    <div>
      <DialogTitle className="sr-only">{t("title")}</DialogTitle>
      <DialogDescription className="text-sm font-semibold text-primary">{t("need", { count: remaining })}</DialogDescription>
      <div className="mt-4">
        <QuestionInput question={q} value={profile[field]} locale={locale} onAnswer={onAnswer} headingLevel="h3" />
      </div>
      {canGoBack && (
        <Button variant="ghost" size="sm" onClick={onBack} className="mt-4 -ml-2">
          <ArrowLeft aria-hidden />
          {t("back")}
        </Button>
      )}
    </div>
  );
}

function Result({ eligibility, profile }: { eligibility: Rule; profile: Profile }) {
  const t = useTranslations("scheme.check");
  const locale = useLocale() as Locale;
  const p = withInferred(profile);
  const r = checkScheme({ eligibility }, p);
  const noRules = r.criteria.length === 1 && "all" in r.criteria[0].rule && r.criteria[0].rule.all.length === 0;

  const tone = {
    eligible: { icon: BadgeCheck, cls: "bg-success-soft text-success-ink", title: t("eligible"), body: t("eligibleBody") },
    almost: { icon: CircleDashed, cls: "bg-gold-soft text-gold-ink", title: t("almost"), body: t("almostBody") },
    ineligible: { icon: CircleX, cls: "bg-destructive/10 text-destructive", title: t("ineligible"), body: t("ineligibleBody") },
    incomplete: { icon: CircleHelp, cls: "bg-secondary text-secondary-foreground", title: t("incomplete"), body: "" },
  }[r.status];
  const Icon = tone.icon;

  return (
    <div>
      <div className={cn("flex items-start gap-3 rounded-2xl p-4", tone.cls)}>
        <Icon className="mt-0.5 size-7 shrink-0" aria-hidden />
        <div>
          <DialogTitle className="pr-8 text-xl">{tone.title}</DialogTitle>
          <DialogDescription className="mt-1 text-[0.95rem] text-current/90">{noRules ? t("noRules") : tone.body}</DialogDescription>
        </div>
      </div>

      {!noRules && (
        <>
          <h3 className="mt-5 text-sm font-bold tracking-wide text-muted-foreground uppercase">{t("criteria")}</h3>
          <ul className="mt-2 grid gap-1.5">
            {r.criteria.map((c, i) => (
              <Criterion key={i} ev={c} locale={locale} dependsLabel={t("depends")} incomeAnswered={p.income !== undefined} />
            ))}
          </ul>
        </>
      )}

      <p className="mt-5 text-xs text-muted-foreground">{t("disclaimer")}</p>
      <p className="mt-1 text-xs text-muted-foreground">{t("saved")}</p>
      <Button asChild variant="outline" size="sm" className="mt-4">
        <Link href="/find">{t("edit")}</Link>
      </Button>
    </div>
  );
}

function Criterion({ ev, locale, dependsLabel, incomeAnswered }: { ev: Evaluation; locale: Locale; dependsLabel: string; incomeAnswered: boolean }) {
  const Icon = ev.outcome === "pass" ? CircleCheck : ev.outcome === "fail" ? CircleX : CircleHelp;
  const incomeStraddle = incomeAnswered && ev.outcome === "unknown" && isLeaf(ev.rule) && ev.rule.field === "income";
  return (
    <li
      className={cn(
        "flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-[0.95rem]",
        ev.outcome === "pass" && "bg-success-soft/60",
        ev.outcome === "fail" && "bg-destructive/8",
        ev.outcome === "unknown" && "bg-muted",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 size-5 shrink-0",
          ev.outcome === "pass" ? "text-success-ink" : ev.outcome === "fail" ? "text-destructive" : "text-muted-foreground",
        )}
        aria-label={ev.outcome === "pass" ? "✓" : ev.outcome === "fail" ? "✗" : "?"}
      />
      <span>
        {explainRule(ev.rule, locale)}
        {incomeStraddle && <span className="block text-xs text-muted-foreground">{dependsLabel}</span>}
      </span>
    </li>
  );
}
