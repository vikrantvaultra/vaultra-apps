"use client";

import { Bookmark, BookmarkCheck, Check, ExternalLink, Share2, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useMounted } from "@/hooks/use-mounted";
import { toggleBookmark, useBookmarks } from "@/lib/store/bookmarks";
import { cn } from "@/lib/utils";

export function BookmarkButton({ slug, className }: { slug: string; className?: string }) {
  const t = useTranslations("scheme");
  const saved = useBookmarks().includes(slug);
  const mounted = useMounted();
  const on = mounted && saved;
  return (
    <Button
      variant="outline"
      size="sm"
      aria-pressed={on}
      aria-label={on ? t("bookmarkRemove") : t("bookmarkAdd")}
      onClick={() => toggleBookmark(slug)}
      className={cn(on && "border-primary/50 text-primary", className)}
    >
      {on ? <BookmarkCheck aria-hidden /> : <Bookmark aria-hidden />}
      {on ? t("bookmarked") : t("bookmark")}
    </Button>
  );
}

export function ShareButton({ title, className }: { title: string; className?: string }) {
  const t = useTranslations("scheme");
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    const text = t("shareText", { name: title });
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (e) {
        if ((e as DOMException).name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <Button variant="outline" size="sm" onClick={share} className={className}>
      {copied ? <Check aria-hidden /> : <Share2 aria-hidden />}
      <span aria-live="polite">{copied ? t("copied") : t("share")}</span>
    </Button>
  );
}

export function ApplyButton({ url, name, className, size = "lg" }: { url: string; name: string; className?: string; size?: "default" | "lg" }) {
  const t = useTranslations("scheme.apply");
  let host = url;
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={size} className={className}>
          {t("button")}
          <ExternalLink aria-hidden />
        </Button>
      </DialogTrigger>
      <DialogContent closeLabel={t("cancel")}>
        <DialogTitle>{t("title")}</DialogTitle>
        <DialogDescription className="text-[0.95rem]">{t("body", { name })}</DialogDescription>
        <p className="rounded-xl bg-muted px-3.5 py-2.5 font-mono text-sm break-all">{host}</p>
        <p className="flex items-start gap-2 rounded-xl bg-gold-soft px-3.5 py-3 text-sm text-foreground">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden />
          {t("tip")}
        </p>
        <div className="mt-1 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <DialogClose asChild>
            <Button variant="ghost">{t("cancel")}</Button>
          </DialogClose>
          <Button asChild variant="brand">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {t("continue")}
              <ExternalLink aria-hidden />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
