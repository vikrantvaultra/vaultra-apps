"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { getSupabase } from "@/lib/supabase/client";

/** Passwordless email OTP: send a code, then verify it */
export function SignInCard() {
  const t = useTranslations("account");
  const id = useId();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send(e?: React.FormEvent) {
    e?.preventDefault();
    const sb = await getSupabase();
    if (!sb) return;
    setBusy(true);
    setError(null);
    const { error } = await sb.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: true } });
    setBusy(false);
    if (error) setError(t("errorSend"));
    else setStep("code");
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    const sb = await getSupabase();
    if (!sb) return;
    setBusy(true);
    setError(null);
    const { error } = await sb.auth.verifyOtp({ email: email.trim(), token: code.trim(), type: "email" });
    setBusy(false);
    if (error) setError(t("errorVerify"));
  }

  return (
    <div className="rounded-[1.25rem] border bg-card p-5 shadow-soft sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
          <Mail className="size-5" aria-hidden />
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold">{t("signInTitle")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("signInBody")}</p>
        </div>
      </div>

      {step === "email" ? (
        <form onSubmit={send} className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid gap-1.5">
            <label htmlFor={`${id}-email`} className="text-sm font-semibold">
              {t("email")}
            </label>
            <input
              id={`${id}-email`}
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-xl border bg-background px-3.5 text-base outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
            />
          </div>
          <Button type="submit" variant="brand" disabled={busy}>
            {busy ? t("sending") : t("sendCode")}
          </Button>
        </form>
      ) : (
        <form onSubmit={verify} className="mt-5 grid gap-3">
          <p className="text-sm" role="status">
            {t("codeSent", { email })}
          </p>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="grid gap-1.5">
              <label htmlFor={`${id}-code`} className="text-sm font-semibold">
                {t("code")}
              </label>
              <input
                id={`${id}-code`}
                required
                autoComplete="one-time-code"
                inputMode="numeric"
                pattern="[0-9]{6,8}"
                maxLength={8}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                className="h-12 w-full rounded-xl border bg-background px-3.5 font-mono text-xl tracking-[0.3em] outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
              />
            </div>
            <Button type="submit" variant="brand" disabled={busy || code.length < 6}>
              {busy ? t("verifying") : t("verify")}
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-4 text-sm">
            <button type="button" className="min-h-10 font-semibold text-primary hover:underline" onClick={() => setStep("email")}>
              {t("changeEmail")}
            </button>
            <button type="button" className="min-h-10 font-semibold text-primary hover:underline" onClick={() => send()} disabled={busy}>
              {t("resend")}
            </button>
          </div>
        </form>
      )}
      {error && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
