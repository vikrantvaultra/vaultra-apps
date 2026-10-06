"use client";

import { LogOut, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { signOut } from "@/lib/supabase/client";

/** Signed-in menu; loaded only once someone is signed in */
export default function AccountMenu({ email }: { email: string }) {
  const t = useTranslations("account");
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
        <DropdownMenuItem className="min-h-11 rounded-xl" onSelect={() => signOut()}>
          <LogOut aria-hidden />
          {t("signOut")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
