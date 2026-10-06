"use client";

import { LogOut, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { getSupabase, useSession } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/** Header account control: "Sign in", a profile menu when signed in, or "My profile" when sync isn't configured */
export function AccountButton() {
  const t = useTranslations("account");
  const session = useSession();

  if (!isSupabaseConfigured() || !session) {
    return (
      <Button asChild variant="ghost" className="px-4">
        <Link href="/profile">{isSupabaseConfigured() ? t("signIn") : t("myProfile")}</Link>
      </Button>
    );
  }

  const email = session.user.email ?? "";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("myProfile")}>
          <span className="grid size-9 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white uppercase">{email.slice(0, 1) || <UserRound className="size-4" />}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 rounded-2xl p-1.5">
        <DropdownMenuLabel className="truncate text-xs font-normal text-muted-foreground">{t("signedInAs", { email })}</DropdownMenuLabel>
        <DropdownMenuItem asChild className="min-h-11 rounded-xl">
          <Link href="/profile">
            <UserRound aria-hidden />
            {t("myProfile")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="min-h-11 rounded-xl" onSelect={() => getSupabase()?.auth.signOut()}>
          <LogOut aria-hidden />
          {t("signOut")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
