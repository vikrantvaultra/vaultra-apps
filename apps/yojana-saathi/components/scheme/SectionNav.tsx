"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GAP = 16;

/** Sticky, horizontally scrollable section tabs that follow the reader (scroll-spy) */
export function SectionNav({ sections, label }: { sections: { id: string; label: string }[]; label: string }) {
  const [active, setActive] = useState(sections[0]?.id);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // While a tab-click scroll is running, ignore the spy so the highlight doesn't flicker through sections
  const lockUntil = useRef(0);

  /**
   * Where content should start: just below the nav *once it's stuck* (its sticky `top` + height),
   * measured live so text size and breakpoints don't matter. Before scrolling, the nav sits lower in the page.
   */
  const offset = () => {
    const nav = navRef.current;
    if (!nav) return GAP;
    return (parseFloat(getComputedStyle(nav).top) || 0) + nav.offsetHeight + GAP;
  };

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (performance.now() < lockUntil.current) return;
      const line = offset() + 8;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      // At the very bottom the last sections may never reach the line: pick the last one
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1]?.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [sections]);

  // Keep the active tab in view on small screens
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    const list = listRef.current;
    if (!el || !list) return;
    const left = el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  function go(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(id);
    // event.timeStamp shares performance.now()'s clock
    lockUntil.current = e.timeStamp + (reduce ? 50 : 900);
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset(), behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
    // Move keyboard/screen-reader focus to the section heading without scrolling again
    target.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }

  return (
    <nav
      ref={navRef}
      aria-label={label}
      className="sticky top-16 z-30 -mx-4 border-b bg-background/85 px-4 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:px-1.5 lg:top-[4.75rem]"
    >
      <ul ref={listRef} className="flex gap-1 overflow-x-auto py-1.5 no-scrollbar">
        {sections.map((s) => (
          <li key={s.id} data-id={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => go(e, s.id)}
              aria-current={active === s.id ? "location" : undefined}
              className={cn(
                "flex min-h-10 items-center rounded-full px-3.5 text-sm font-semibold whitespace-nowrap transition-colors",
                active === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
