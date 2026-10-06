"use client";

import { Type } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TextSizeControl } from "./TextSizeControl";

export function TextSizePopover() {
  const t = useTranslations("a11y");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("textSize")} title={t("textSize")}>
          <Type className="size-5" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto rounded-2xl p-3">
        <p className="mb-2 px-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{t("textSize")}</p>
        <TextSizeControl />
      </PopoverContent>
    </Popover>
  );
}
