"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId } from "react";
import { optionsFor } from "@/lib/filter-options";
import type { FilterKey, Filters } from "@/lib/search";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

type SetFilter = <K extends FilterKey>(key: K, value: Filters[K] | undefined) => void;

const SCHEME_KEYS: FilterKey[] = ["state", "level", "category", "ministry", "benefit", "dbt"];
const PERSON_KEYS: FilterKey[] = ["gender", "age", "caste", "area", "minority", "disabled", "marital", "student", "employment", "occupation", "bpl"];
const BOOL_KEYS = new Set<FilterKey>(["dbt", "minority", "disabled", "student", "bpl"]);
const SEGMENT_KEYS = new Set<FilterKey>(["level", "gender", "area"]);

export function FilterPanel({
  filters,
  locked,
  locale,
  onChange,
}: {
  filters: Filters;
  locked: Partial<Filters>;
  locale: Locale;
  onChange: SetFilter;
}) {
  const t = useTranslations("search");
  const visible = (keys: FilterKey[]) => keys.filter((k) => locked[k] === undefined);

  const renderField = (key: FilterKey) => {
    const label = t(`f.${key}`);
    if (key === "age") return <AgeField key={key} label={label} value={filters.age} placeholder={t("agePlaceholder")} onChange={(v) => onChange("age", v)} />;
    if (BOOL_KEYS.has(key)) {
      const v = filters[key] as boolean | undefined;
      return (
        <Segment
          key={key}
          label={label}
          value={v === undefined ? "" : v ? "yes" : "no"}
          options={[
            { value: "", label: t("any") },
            { value: "yes", label: t("yes") },
            { value: "no", label: t("no") },
          ]}
          onChange={(s) => onChange(key, (s === "" ? undefined : s === "yes") as never)}
        />
      );
    }
    if (SEGMENT_KEYS.has(key)) {
      const options =
        key === "level"
          ? [
              { value: "central", label: t("levelCentral") },
              { value: "state", label: t("levelState") },
            ]
          : optionsFor(key, locale);
      return (
        <Segment
          key={key}
          label={label}
          value={(filters[key] as string | undefined) ?? ""}
          options={[{ value: "", label: t("any") }, ...options]}
          onChange={(s) => onChange(key, (s || undefined) as never)}
        />
      );
    }
    return (
      <SelectField
        key={key}
        label={label}
        anyLabel={t("any")}
        value={(filters[key] as string | undefined) ?? ""}
        options={optionsFor(key, locale)}
        onChange={(s) => onChange(key, (s || undefined) as never)}
      />
    );
  };

  return (
    <div className="grid gap-7">
      <fieldset className="grid gap-4">
        <legend className="mb-1 text-xs font-bold tracking-wide text-muted-foreground uppercase">{t("groupScheme")}</legend>
        {visible(SCHEME_KEYS).map(renderField)}
      </fieldset>
      <fieldset className="grid gap-4">
        <legend className="mb-1 text-xs font-bold tracking-wide text-muted-foreground uppercase">{t("groupYou")}</legend>
        {visible(PERSON_KEYS).map(renderField)}
      </fieldset>
    </div>
  );
}

function SelectField({
  label,
  anyLabel,
  value,
  options,
  onChange,
}: {
  label: string;
  anyLabel: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        {/* Native select: OS picker on phones, fully accessible */}
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "h-12 w-full appearance-none rounded-xl border bg-card pr-10 pl-3.5 text-[0.95rem] shadow-soft transition-colors outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20",
            value ? "border-primary/50 font-medium" : "text-muted-foreground",
          )}
        >
          <option value="">{anyLabel}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
      </div>
    </div>
  );
}

function Segment({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="grid gap-1.5">
      <span id={id} className="text-sm font-semibold">
        {label}
      </span>
      <div role="radiogroup" aria-labelledby={id} className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value || "any"}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
                active ? "border-primary bg-primary text-primary-foreground" : "bg-card text-foreground hover:border-primary/50",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AgeField({ label, value, placeholder, onChange }: { label: string; value?: number; placeholder: string; onChange: (v: number | undefined) => void }) {
  const id = useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={1}
        max={119}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => {
          const n = Number(e.target.value);
          onChange(e.target.value === "" || !Number.isFinite(n) || n < 1 || n > 119 ? undefined : Math.floor(n));
        }}
        className={cn(
          "h-12 w-full rounded-xl border bg-card px-3.5 text-[0.95rem] shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20",
          value !== undefined && "border-primary/50 font-medium",
        )}
      />
    </div>
  );
}
