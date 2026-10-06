"use client";

import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis, type TooltipContentProps } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export interface Datum {
  label: string;
  value: number;
}

const ROW = 34;

/** Single-series horizontal bars: one hue, value at the tip, tooltip on hover. No legend (the title names the series). */
export default function BarList({ data, unit, yWidth = 150 }: { data: Datum[]; unit: (n: number) => string; yWidth?: number }) {
  return (
    <div style={{ height: data.length * ROW + 16 }} aria-hidden>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 40, bottom: 4, left: 0 }} barCategoryGap={8}>
          <XAxis type="number" hide domain={[0, "dataMax"]} />
          <YAxis
            type="category"
            dataKey="label"
            width={yWidth}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12.5 }}
            interval={0}
          />
          <Tooltip
            cursor={{ fill: "var(--muted)", radius: 8 }}
            content={({ active, payload }: TooltipContentProps<ValueType, NameType>) =>
              active && payload?.length ? (
                <div className="rounded-xl border bg-popover px-3 py-2 text-sm shadow-pop">
                  <p className="font-semibold text-foreground">{payload[0].payload.label}</p>
                  <p className="text-muted-foreground">{unit(payload[0].payload.value)}</p>
                </div>
              ) : null
            }
          />
          <Bar dataKey="value" fill="var(--chart-1)" radius={[0, 4, 4, 0]} barSize={18} isAnimationActive={false}>
            <LabelList dataKey="value" position="right" offset={8} style={{ fill: "var(--foreground)", fontSize: 12.5, fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
