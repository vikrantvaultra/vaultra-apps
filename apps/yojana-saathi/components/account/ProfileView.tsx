"use client";

import { Bookmark, CloudCheck, HardDrive, LogOut, PencilLine, Sparkles, Trash2, Wand2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { SchemeCard } from "@/components/scheme/SchemeCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useMounted } from "@/hooks/use-mounted";
import { Link } from "@/i18n/navigation";
import { visibleQuestions } from "@/lib/questions";
import type { SchemeCard as Card } from "@/lib/schemes";
import { useBookmarks } from "@/lib/store/bookmarks";
import { clearProfile, useProfile } from "@/lib/store/profile";
import { clearLocalData, deleteAccount } from "@/lib/store/sync";
import { signOut, useSession } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Locale, Profile } from "@/lib/types";
import { SignInCard } from "./SignInCard";

const EMPTY: Profile = {};

export function ProfileView({ cards }: { cards: Card[] }) {
  const t = useTranslations("profile");
  const ta = useTranslations("account");
  const locale = useLocale() as Locale;
  const mounted = useMounted();
  const session = useSession();
  const profile = useProfile() ?? EMPTY;
  const bookmarks = useBookmarks();
  const [done, setDone] = useState<null | "ok" | "error">(null);

  const configured = isSupabaseConfigured();
  const questions = visibleQuestions(profile);
  const answered = questions.filter((q) => profile[q.field] !== undefined);
  const saved = bookmarks.map((s) => cards.find((c) => c.slug === s)).filter((c): c is Card => !!c);

  const answerText = (q: (typeof questions)[number]) => {
    const v = profile[q.field];
    if (v === undefined) return t("notAnswered");
    const opt = q.options?.find((o) => o.value === v);
    if (opt) return opt.label[locale];
    return q.field === "disabilityPct" ? `${v}%` : String(v);
  };

  async function wipe() {
    try {
      if (session) await deleteAccount();
      clearLocalData();
      setDone("ok");
    } catch {
      setDone("error");
    }
  }

  if (!mounted) return <div className="h-96 animate-pulse rounded-[1.25rem] bg-muted" aria-hidden />;

  return (
    <div className="grid gap-10">
      {done === "ok" && (
        <p role="status" className="rounded-2xl bg-success-soft p-4 font-medium text-success-ink">
          {t("deleted")}
        </p>
      )}

      {/* Account */}
      <section aria-label={ta("signInTitle")}>
        {configured && !session && <SignInCard />}
        {configured && session && (
          <div className="flex flex-col gap-4 rounded-[1.25rem] border bg-card p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-success-soft text-success-ink">
                <CloudCheck className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold">{ta("signedInAs", { email: session.user.email ?? "" })}</p>
                <p className="text-sm text-muted-foreground">{ta("syncOn")}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              <LogOut aria-hidden />
              {ta("signOut")}
            </Button>
          </div>
        )}
        {!configured && (
          <p className="flex items-center gap-3 rounded-[1.25rem] border bg-card p-4 text-sm text-muted-foreground shadow-soft">
            <HardDrive className="size-5 shrink-0" aria-hidden />
            {ta("notConfigured")}
          </p>
        )}
      </section>

      {/* Answers */}
      <section aria-labelledby="answers-h">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="answers-h" className="text-2xl font-extrabold">
            {t("answers")}
          </h2>
          {answered.length > 0 && (
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/find">
                  <PencilLine aria-hidden />
                  {t("edit")}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={clearProfile}>
                {t("clearAnswers")}
              </Button>
            </div>
          )}
        </div>
        {answered.length === 0 ? (
          <div className="mt-4 rounded-[1.25rem] border border-dashed bg-card/50 p-6 text-center">
            <p className="text-muted-foreground">{t("noAnswers")}</p>
            <Button asChild variant="brand" className="mt-4">
              <Link href="/find">
                <Wand2 aria-hidden />
                {t("start")}
              </Link>
            </Button>
          </div>
        ) : (
          <dl className="mt-4 grid gap-px overflow-hidden rounded-[1.25rem] border bg-border shadow-soft sm:grid-cols-2">
            {questions.map((q) => (
              <div key={q.field} className="bg-card px-4 py-3">
                <dt className="text-xs text-muted-foreground">{q.title[locale]}</dt>
                <dd className={profile[q.field] === undefined ? "mt-0.5 text-sm text-muted-foreground italic" : "mt-0.5 font-semibold"}>{answerText(q)}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {/* Bookmarks */}
      <section aria-labelledby="saved-h">
        <h2 id="saved-h" className="flex items-center gap-2 text-2xl font-extrabold">
          <Bookmark className="size-6 text-primary" aria-hidden />
          {t("saved")}
        </h2>
        {saved.length === 0 ? (
          <div className="mt-4 rounded-[1.25rem] border border-dashed bg-card/50 p-6 text-center">
            <p className="text-muted-foreground">{t("noSaved")}</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/search">{t("browse")}</Link>
            </Button>
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {saved.map((c) => (
              <li key={c.slug}>
                <SchemeCard card={c} locale={locale} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Kundli */}
      <section aria-labelledby="kundli-h" className="overflow-hidden rounded-[1.5rem] bg-cosmic p-6 text-white sm:p-8">
        <h2 id="kundli-h" className="flex items-center gap-2 text-2xl font-extrabold">
          <Sparkles className="size-6 text-gold" aria-hidden />
          {t("kundli")}
        </h2>
        <p className="mt-2 text-white/80">{t("kundliBody")}</p>
        <Button asChild variant="gold" className="mt-5">
          <Link href="/kundli">{t("openKundli")}</Link>
        </Button>
      </section>

      {/* Delete */}
      <section aria-labelledby="danger-h" className="rounded-[1.25rem] border border-destructive/30 bg-destructive/5 p-5 sm:p-6">
        <h2 id="danger-h" className="text-xl font-extrabold">
          {t("danger")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{session ? t("dangerAccount") : t("dangerLocal")}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="mt-4">
              <Trash2 aria-hidden />
              {session ? t("deleteAccount") : t("deleteLocal")}
            </Button>
          </DialogTrigger>
          <DialogContent closeLabel={t("cancel")}>
            <DialogTitle>{t("confirmTitle")}</DialogTitle>
            <DialogDescription className="text-[0.95rem]">{t("confirmBody")}</DialogDescription>
            <div className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <DialogClose asChild>
                <Button variant="ghost">{t("cancel")}</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive" onClick={wipe}>
                  <Trash2 aria-hidden />
                  {t("confirm")}
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
        {done === "error" && (
          <p role="alert" className="mt-3 text-sm text-destructive">
            {t("deleteError")}
          </p>
        )}
      </section>
    </div>
  );
}
