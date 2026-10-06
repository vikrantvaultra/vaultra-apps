import { Search, Sparkles } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { AccountButton } from "@/components/account/AccountButton";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { getPathname, Link } from "@/i18n/navigation";
import { LanguageSwitch, LanguageToggle } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { TextSizePopover } from "./TextSizePopover";
import { ThemeToggle } from "./ThemeToggle";

export async function Header() {
  const t = await getTranslations();
  const locale = await getLocale();
  const searchAction = getPathname({ href: "/search", locale });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
      <div className="container-page flex h-16 items-center gap-2 lg:h-[4.5rem] lg:gap-3">
        <Link href="/" className="-ml-1 flex shrink-0 items-center gap-2.5 rounded-xl p-1" aria-label={t("nav.home")}>
          <LogoMark />
          <span className="font-heading text-[1.1rem] leading-none font-extrabold tracking-tight whitespace-nowrap sm:text-[1.2rem]">
            {t("brand.name")}
          </span>
        </Link>

        <nav aria-label={t("nav.explore")} className="ml-2 hidden shrink-0 items-center gap-0.5 lg:flex xl:ml-4">
          <Link
            href="/kundli"
            className="inline-flex h-10 items-center gap-1.5 rounded-full px-3.5 text-sm font-semibold whitespace-nowrap text-gold-ink transition-colors hover:bg-gold-soft"
          >
            <Sparkles className="size-4" aria-hidden />
            {t("nav.kundli")}
          </Link>
          <Link href="/dashboard" className="inline-flex h-10 items-center rounded-full px-3.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            {t("nav.dashboard")}
          </Link>
        </nav>

        <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-1 lg:gap-1.5">
          <form role="search" action={searchAction} className="relative hidden min-w-0 flex-1 md:block md:max-w-64 xl:max-w-72">
            <label htmlFor="header-q" className="sr-only">{t("nav.search")}</label>
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              id="header-q"
              name="q"
              type="search"
              enterKeyHint="search"
              placeholder={t("nav.searchPlaceholder")}
              className="h-11 w-full rounded-full border border-border bg-card pr-4 pl-10 text-sm shadow-soft transition-colors outline-none placeholder:text-muted-foreground/80 focus:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 xl:w-72"
            />
          </form>

          <Button asChild variant="ghost" size="icon" className="md:hidden">
            <Link href="/search" aria-label={t("nav.search")}>
              <Search className="size-5" aria-hidden />
            </Link>
          </Button>

          <LanguageToggle className="sm:hidden" />
          <LanguageSwitch className="hidden sm:inline-flex" />
          <div className="hidden items-center lg:flex">
            <ThemeToggle />
            <TextSizePopover />
          </div>
          <div className="hidden lg:block">
            <AccountButton />
          </div>
          <Button asChild variant="brand" className="hidden lg:inline-flex">
            <Link href="/find">{t("nav.find")}</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
