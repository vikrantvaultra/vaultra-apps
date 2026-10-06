"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { Datum } from "./BarList";

// Recharts only loads on the dashboard, after the page shell
const BarList = dynamic(() => import("./BarList"), {
  ssr: false,
  loading: () => <div className="h-48 animate-pulse rounded-xl bg-muted" />,
});

/** A chart with its own data table (the table is the accessible and no-JS view) */
export function ChartCard({ id, title, note, data, yWidth }: { id: string; title: string; note?: string; data: Datum[]; yWidth?: number }) {
  const t = useTranslations("dashboard");
  return (
    <section aria-labelledby={`${id}-h`} className="rounded-[1.25rem] border bg-card p-5 shadow-soft sm:p-6">
      <h2 id={`${id}-h`} className="text-lg font-extrabold">
        {title}
      </h2>
      {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
      <div className="mt-4">
        <BarList data={data} yWidth={yWidth} unit={(n) => t("schemes", { count: n })} />
      </div>
      <details className="mt-3 text-sm">
        <summary className="min-h-10 cursor-pointer content-center font-semibold text-primary">{t("table")}</summary>
        <table className="mt-2 w-full text-left">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b text-muted-foreground">
              <th scope="col" className="py-2 font-medium">
                {t("colName")}
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                {t("colCount")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label} className="border-b last:border-0">
                <th scope="row" className="py-2 font-normal">
                  {d.label}
                </th>
                <td className="py-2 text-right font-semibold tabular-nums">{d.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </section>
  );
}
