"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { FaqList } from "@/components/home/FaqList";

export function FaqSearch({ items }: { items: { id: string; q: string; a: string }[] }) {
  const t = useTranslations("faqsPage");
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return needle ? items.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(needle)) : items;
  }, [q, items]);

  return (
    <div>
      <div className="relative">
        <label htmlFor="faq-q" className="sr-only">
          {t("search")}
        </label>
        <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <input
          id="faq-q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("search")}
          className="h-14 w-full rounded-2xl border bg-card pr-4 pl-12 text-base shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
        />
      </div>
      <div className="mt-6" aria-live="polite">
        {shown.length ? <FaqList items={shown} /> : <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("empty")}</p>}
      </div>
    </div>
  );
}
