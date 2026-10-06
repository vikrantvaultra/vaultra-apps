"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

/** Icon button for the header: flips between light and dark. */
export function ThemeToggle() {
  const t = useTranslations("a11y");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={t("theme")}
      title={mounted ? t("toggleTheme", { mode: t(next) }) : t("theme")}
    >
      {/* CSS decides which icon shows, so SSR and client markup always match */}
      <Sun className="size-5 dark:hidden" aria-hidden />
      <Moon className="hidden size-5 dark:block" aria-hidden />
    </Button>
  );
}

/** Light / Dark / System segmented control for the mobile menu. */
export function ThemeSegmented() {
  const t = useTranslations("a11y");
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const options = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor },
  ] as const;

  return (
    <div role="radiogroup" aria-label={t("theme")} className="grid grid-cols-3 gap-1 rounded-2xl bg-muted p-1">
      {options.map(({ value, icon: Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(value)}
            className={cn(
              "flex h-11 items-center justify-center gap-1.5 rounded-xl text-sm font-medium text-muted-foreground transition-colors",
              active && "bg-card dark:bg-white/12 text-foreground shadow-soft",
            )}
          >
            <Icon className="size-4" aria-hidden />
            {t(value)}
          </button>
        );
      })}
    </div>
  );
}
