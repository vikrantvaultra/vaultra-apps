"use client";

import { Check, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/questions";
import type { Locale, Profile } from "@/lib/types";
import { cn } from "@/lib/utils";

type Answer = Profile[keyof Profile];

/**
 * Renders one question. Choice and list taps call onAnswer immediately (the parent auto-advances);
 * numbers are confirmed with a button or Enter.
 */
export function QuestionInput({
  question,
  value,
  locale,
  onAnswer,
  headingLevel = "h2",
}: {
  question: Question;
  value: Answer;
  locale: Locale;
  onAnswer: (v: Answer) => void;
  headingLevel?: "h1" | "h2" | "h3";
}) {
  const Heading = headingLevel;
  const id = useId();
  return (
    <fieldset aria-describedby={question.help ? `${id}-help` : undefined} className="min-w-0">
      <legend className="contents">
        <Heading className="font-heading text-2xl leading-snug font-extrabold sm:text-3xl">{question.title[locale]}</Heading>
      </legend>
      {question.help && (
        <p id={`${id}-help`} className="mt-2 text-[0.95rem] text-muted-foreground">
          {question.help[locale]}
        </p>
      )}
      <div className="mt-6">
        {question.kind === "choice" && <ChoiceCards question={question} value={value} locale={locale} onAnswer={onAnswer} />}
        {question.kind === "select" && <SearchList question={question} value={value} locale={locale} onAnswer={onAnswer} />}
        {question.kind === "number" && <NumberAnswer question={question} value={value} onAnswer={onAnswer} />}
      </div>
    </fieldset>
  );
}

function ChoiceCards({ question, value, locale, onAnswer }: { question: Question; value: Answer; locale: Locale; onAnswer: (v: Answer) => void }) {
  const opts = question.options ?? [];
  const twoCol = opts.length > 3;
  return (
    <div role="radiogroup" className={cn("grid gap-2.5", twoCol && "sm:grid-cols-2")}>
      {opts.map((o) => {
        const selected = value === o.value;
        return (
          <button
            key={String(o.value)}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onAnswer(o.value as Answer)}
            className={cn(
              "flex min-h-14 items-center justify-between gap-3 rounded-2xl border-2 bg-card px-4 py-3 text-left text-base font-semibold shadow-soft transition-all active:scale-[0.99]",
              selected ? "border-primary bg-accent text-accent-foreground" : "border-transparent ring-1 ring-border hover:ring-primary/50",
            )}
          >
            <span>
              {o.label[locale]}
              {o.hint && <span className="mt-0.5 block text-sm font-normal text-muted-foreground">{o.hint[locale]}</span>}
            </span>
            <span
              aria-hidden
              className={cn(
                "grid size-6 shrink-0 place-items-center rounded-full border-2 transition-colors",
                selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30",
              )}
            >
              {selected && <Check className="size-3.5" strokeWidth={3} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SearchList({ question, value, locale, onAnswer }: { question: Question; value: Answer; locale: Locale; onAnswer: (v: Answer) => void }) {
  const t = useTranslations("find");
  const [q, setQ] = useState("");
  const id = useId();
  const opts = useMemo(() => {
    const all = question.options ?? [];
    const needle = q.trim().toLowerCase();
    if (!needle) return all;
    return all.filter((o) => o.label.en.toLowerCase().includes(needle) || o.label.hi.includes(q.trim()));
  }, [q, question.options]);

  return (
    <div>
      {(question.options?.length ?? 0) > 8 && (
        <div className="relative mb-3">
          <label htmlFor={id} className="sr-only">
            {t("filterList")}
          </label>
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            id={id}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("filterList")}
            className="h-12 w-full rounded-xl border bg-card pr-3 pl-10 text-base shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
          />
        </div>
      )}
      <div role="radiogroup" className="grid max-h-[52dvh] gap-1.5 overflow-y-auto rounded-2xl border bg-card p-1.5 shadow-soft">
        {opts.map((o) => {
          const selected = value === o.value;
          return (
            <button
              key={String(o.value)}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onAnswer(o.value as Answer)}
              className={cn(
                "flex min-h-12 items-center justify-between gap-3 rounded-xl px-3.5 text-left text-[0.95rem] font-medium transition-colors",
                selected ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {o.label[locale]}
              {selected && <Check className="size-4 shrink-0" aria-hidden />}
            </button>
          );
        })}
        {opts.length === 0 && <p className="p-4 text-center text-sm text-muted-foreground">{t("noMatch")}</p>}
      </div>
    </div>
  );
}

function NumberAnswer({ question, value, onAnswer }: { question: Question; value: Answer; onAnswer: (v: Answer) => void }) {
  const t = useTranslations("find");
  const id = useId();
  const [text, setText] = useState(typeof value === "number" ? String(value) : "");
  const n = Number(text);
  const valid = text !== "" && Number.isInteger(n) && n >= (question.min ?? 0) && n <= (question.max ?? 999);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) onAnswer(n);
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <label htmlFor={id} className="sr-only">
        {question.title.en}
      </label>
      <input
        id={id}
        autoFocus
        type="number"
        inputMode="numeric"
        min={question.min}
        max={question.max}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-invalid={text !== "" && !valid}
        className="h-16 w-full rounded-2xl border-2 bg-card px-5 font-heading text-3xl font-bold shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20 aria-invalid:border-destructive sm:max-w-56"
      />
      <Button type="submit" size="lg" variant="brand" disabled={!valid} className="sm:h-16">
        {t("next")}
      </Button>
      {text !== "" && !valid && (
        <p role="alert" className="text-sm text-destructive sm:sr-only">
          {t("range", { min: question.min ?? 0, max: question.max ?? 999 })}
        </p>
      )}
    </form>
  );
}
