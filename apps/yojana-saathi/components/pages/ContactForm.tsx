"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { BASE_PATH } from "@/lib/site";

export function ContactForm() {
  const t = useTranslations("contact");
  const id = useId();
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch(`${BASE_PATH}/api/feedback`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "contact", name: f.get("name"), email: f.get("email"), message: f.get("message"), page: window.location.pathname }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done")
    return (
      <p role="status" className="rounded-2xl bg-success-soft p-5 font-medium text-success-ink">
        {t("thanks")}
      </p>
    );

  const field = "w-full rounded-xl border bg-card px-3.5 text-base shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20";
  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-1.5">
        <label htmlFor={`${id}-n`} className="text-sm font-semibold">
          {t("name")}
        </label>
        <input id={`${id}-n`} name="name" autoComplete="name" maxLength={120} className={`${field} h-12`} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={`${id}-e`} className="text-sm font-semibold">
          {t("email")}
        </label>
        <input id={`${id}-e`} name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={`${id}-m`} className="text-sm font-semibold">
          {t("message")}
        </label>
        <textarea id={`${id}-m`} name="message" required minLength={5} maxLength={2000} rows={6} className={`${field} py-3`} />
      </div>
      {state === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {t("error")}
        </p>
      )}
      <Button type="submit" variant="brand" disabled={state === "sending"} className="w-fit">
        <Send aria-hidden />
        {state === "sending" ? t("sending") : t("send")}
      </Button>
    </form>
  );
}
