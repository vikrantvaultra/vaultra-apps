"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useSession } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

const AccountMenu = dynamic(() => import("./AccountMenu"), { ssr: false });

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
  return <AccountMenu email={session.user.email ?? ""} />;
}
