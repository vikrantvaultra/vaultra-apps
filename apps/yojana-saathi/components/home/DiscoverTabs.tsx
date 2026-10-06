"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabDef {
  id: string;
  label: string;
  content: React.ReactNode;
}

/** WAI-ARIA tabs. Inactive panels stay in the HTML (hidden) so every browse link is crawlable. */
export function DiscoverTabs({ tabs, label }: { tabs: TabDef[]; label: string }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: React.KeyboardEvent, i: number) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const to = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : delta ? (i + delta + tabs.length) % tabs.length : -1;
    if (to < 0) return;
    e.preventDefault();
    setActive(tabs[to].id);
    refs.current[to]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border bg-card p-1 shadow-soft no-scrollbar">
        {tabs.map((tab, i) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors sm:px-5",
                selected ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="mt-6 rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
