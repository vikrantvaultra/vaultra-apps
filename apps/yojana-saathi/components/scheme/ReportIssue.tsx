"use client";

import { Flag, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/site";

const TYPES = ["outdated", "wrong", "link", "other"] as const;

export function ReportIssue({ slug }: { slug: string }) {
  const t = useTranslations("scheme.report");
  const id = useId();
  const [type, setType] = useState<(typeof TYPES)[number]>("outdated");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch(`${BASE_PATH}/api/feedback`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind: "scheme-issue",
          slug,
          type,
          message: String(form.get("message") ?? ""),
          email: String(form.get("email") ?? ""),
          page: window.location.pathname,
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <Dialog onOpenChange={(o) => o && setState("idle")}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Flag aria-hidden />
          {t("button")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{t("title")}</DialogTitle>
        {state === "done" ? (
          <DialogDescription role="status" className="rounded-xl bg-success-soft p-4 text-[0.95rem] font-medium text-success-ink">
            {t("thanks")}
          </DialogDescription>
        ) : (
          <form onSubmit={submit} className="grid gap-4">
            <DialogDescription className="text-[0.95rem]">{t("intro")}</DialogDescription>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">{t("type")}</legend>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {TYPES.map((k) => (
                  <label
                    key={k}
                    className={cn(
                      "flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border px-3 text-sm font-medium transition-colors has-focus-visible:ring-4 has-focus-visible:ring-ring/20",
                      type === k ? "border-primary bg-accent text-accent-foreground" : "bg-card hover:border-primary/40",
                    )}
                  >
                    <input type="radio" name="type" value={k} checked={type === k} onChange={() => setType(k)} className="size-4 accent-[var(--primary)]" />
                    {t(`types.${k}`)}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-1.5">
              <label htmlFor={`${id}-m`} className="text-sm font-semibold">
                {t("message")}
              </label>
              <textarea
                id={`${id}-m`}
                name="message"
                required
                minLength={5}
                maxLength={2000}
                rows={4}
                placeholder={t("messagePlaceholder")}
                className="w-full rounded-xl border bg-card p-3.5 text-[0.95rem] shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor={`${id}-e`} className="text-sm font-semibold">
                {t("email")}
              </label>
              <input
                id={`${id}-e`}
                name="email"
                type="email"
                autoComplete="email"
                aria-describedby={`${id}-eh`}
                className="h-12 w-full rounded-xl border bg-card px-3.5 text-[0.95rem] shadow-soft outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
              />
              <p id={`${id}-eh`} className="text-xs text-muted-foreground">
                {t("emailHelp")}
              </p>
            </div>
            {state === "error" && (
              <p role="alert" className="text-sm text-destructive">
                {t("error")}
              </p>
            )}
            <Button type="submit" variant="brand" disabled={state === "sending"}>
              <Send aria-hidden />
              {state === "sending" ? t("sending") : t("submit")}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
