"use client";

import { BarChart3, Menu, Search, Sparkles, UserRound, Wand2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { LanguageSwitch } from "./LanguageSwitch";
import { TextSizeControl } from "./TextSizeControl";
import { ThemeSegmented } from "./ThemeToggle";

export function MobileMenu() {
  const t = useTranslations();

  const links = [
    { href: "/search", label: t("nav.search"), icon: Search },
    { href: "/dashboard", label: t("nav.dashboard"), icon: BarChart3 },
    { href: "/profile", label: isSupabaseConfigured() ? t("nav.signIn") : t("account.myProfile"), icon: UserRound },
  ] as const;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
          <Menu className="size-6" aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" closeLabel={t("nav.closeMenu")} className="gap-0 overflow-y-auto px-4 pb-6">
        <SheetTitle className="px-1 pt-3 pb-1">{t("nav.menu")}</SheetTitle>
        <SheetDescription className="sr-only">{t("brand.tagline")}</SheetDescription>

        <div className="mt-3 grid gap-2">
          <SheetClose asChild>
            <Button asChild variant="brand" size="lg" className="w-full">
              <Link href="/find">
                <Wand2 aria-hidden />
                {t("nav.find")}
              </Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="gold" size="lg" className="w-full">
              <Link href="/kundli">
                <Sparkles aria-hidden />
                {t("nav.kundli")}
              </Link>
            </Button>
          </SheetClose>
        </div>

        <nav aria-label={t("nav.explore")} className="mt-4">
          <ul className="divide-y divide-border rounded-2xl border bg-card">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <SheetClose asChild>
                  <Link href={href} className="flex min-h-13 items-center gap-3 px-4 text-[0.95rem] font-medium">
                    <Icon className="size-5 text-muted-foreground" aria-hidden />
                    {label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-label={t("nav.settings")} className="mt-5 grid gap-4">
          <h2 className="px-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{t("nav.settings")}</h2>
          <LanguageSwitch full className="flex w-full" />
          <ThemeSegmented />
          <div className="flex items-center justify-between gap-3 px-1">
            <span className="text-sm font-medium">{t("a11y.textSize")}</span>
            <TextSizeControl />
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
