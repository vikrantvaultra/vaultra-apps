"use client";

import { Type } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextSizeControl } from "./TextSizeControl";

/** A small disclosure panel (no popover library, so the header stays light) */
export function TextSizePopover() {
  const t = useTranslations("a11y");
  const id = useId();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !wrap.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <Button
        ref={button}
        variant="ghost"
        size="icon"
        aria-label={t("textSize")}
        title={t("textSize")}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <Type className="size-5" aria-hidden />
      </Button>
      {open && (
        <div id={id} className="absolute top-full right-0 z-50 mt-2 rounded-2xl border bg-popover p-3 shadow-pop animate-in fade-in-0 zoom-in-95">
          <p className="mb-2 px-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{t("textSize")}</p>
          <TextSizeControl />
        </div>
      )}
    </div>
  );
}
