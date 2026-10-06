"use client";

import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const loadSheet = () => import("./MobileMenuSheet");
const MobileMenuSheet = dynamic(loadSheet, { ssr: false });

/** The menu button is tiny; the bottom sheet (and its dialog library) loads on first use */
export function MobileMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={button}
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label={t("menu")}
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={loadSheet}
        onTouchStart={loadSheet}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
      >
        <Menu className="size-6" aria-hidden />
      </Button>
      {loaded && <MobileMenuSheet open={open} onOpenChange={setOpen} returnFocus={() => button.current?.focus()} />}
    </>
  );
}
