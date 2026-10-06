"use client";

import { Check, Download, Link2, MessageCircle, Share2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { forwardRef, useId, useRef, useState } from "react";
import { LOGO_SVG } from "@/components/brand/logo-data";
import { TaxonomyIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { KUNDLI_HOUSES } from "@/data/taxonomy";
import { COSMIC } from "@/lib/images";
import { usePathname } from "@/i18n/navigation";
import { formatINRCompact } from "@/lib/format";
import type { KundliResult } from "@/lib/kundli/compute";
import { useKundliState, writeKundliState } from "@/lib/store/kundli";
import type { Locale } from "@/lib/types";
import { KundliChart } from "./KundliChart";
import { ScoreRing } from "./KundliResultParts";

type Format = "story" | "square";
const SIZES: Record<Format, { w: number; h: number }> = { story: { w: 1080, h: 1920 }, square: { w: 1080, h: 1080 } };

export const ShareSection = forwardRef<HTMLElement, { result: KundliResult }>(function ShareSection({ result }, ref) {
  const t = useTranslations("kundli");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const id = useId();
  const state = useKundliState();
  const [busy, setBusy] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

  const shareUrl = () => `${window.location.origin}${locale === "en" ? "" : `/${locale}`}${pathname}`;
  const shareText = () => `${t("whatsappText")} ${shareUrl()}`;

  async function render(format: Format): Promise<Blob | null> {
    const node = format === "story" ? storyRef.current : squareRef.current;
    if (!node) return null;
    const { toBlob } = await import("html-to-image");
    const { w, h } = SIZES[format];
    return toBlob(node, { width: w, height: h, pixelRatio: 1, cacheBust: true, backgroundColor: "#0B0D17" });
  }

  async function run(label: string, fn: () => Promise<void>) {
    setError(false);
    setBusy(label);
    try {
      await fn();
    } catch (e) {
      if ((e as DOMException)?.name !== "AbortError") setError(true);
    } finally {
      setBusy(null);
    }
  }

  const download = (format: Format) =>
    run(format, async () => {
      const blob = await render(format);
      if (!blob) throw new Error("no image");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `sarkari-kundli-${format}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    });

  const share = () =>
    run("share", async () => {
      const blob = await render("story");
      if (!blob) throw new Error("no image");
      const file = new File([blob], "sarkari-kundli.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: shareText() });
        return;
      }
      if (navigator.share) {
        await navigator.share({ text: t("whatsappText"), url: shareUrl() });
        return;
      }
      await download("story");
    });

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <section ref={ref} aria-labelledby="share-h" className="scroll-mt-24 rounded-[1.5rem] border bg-card p-5 shadow-soft sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 id="share-h" className="text-2xl font-extrabold">
            {t("share")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("shareIntro")}</p>

          <div className="mt-5 grid max-w-sm gap-1.5">
            <label htmlFor={`${id}-name`} className="text-sm font-semibold">
              {t("firstName")}
            </label>
            <input
              id={`${id}-name`}
              value={state.firstName ?? ""}
              maxLength={20}
              autoComplete="given-name"
              onChange={(e) => writeKundliState({ ...state, firstName: e.target.value.replace(/[^\p{L}\p{M} .'-]/gu, "") || undefined })}
              aria-describedby={`${id}-nh`}
              className="h-12 w-full rounded-xl border bg-background px-3.5 text-base outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/20"
            />
            <p id={`${id}-nh`} className="text-xs text-muted-foreground">
              {t("firstNameHelp")}
            </p>
          </div>

          <div className="mt-6 grid gap-2 sm:flex sm:flex-wrap">
            <Button variant="gold" onClick={share} disabled={!!busy}>
              <Share2 aria-hidden />
              {busy === "share" ? t("making") : t("shareButton")}
            </Button>
            <Button variant="outline" onClick={() => download("story")} disabled={!!busy}>
              <Download aria-hidden />
              {busy === "story" ? t("making") : t("download", { format: t("story") })}
            </Button>
            <Button variant="outline" onClick={() => download("square")} disabled={!!busy}>
              <Download aria-hidden />
              {busy === "square" ? t("making") : t("download", { format: t("square") })}
            </Button>
            <Button variant="outline" onClick={copy}>
              {copied ? <Check aria-hidden /> : <Link2 aria-hidden />}
              <span aria-live="polite">{copied ? t("copied") : t("copyLink")}</span>
            </Button>
            <Button asChild variant="outline">
              <a href={`https://wa.me/?text=${encodeURIComponent(typeof window === "undefined" ? t("whatsappText") : shareText())}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden />
                {t("whatsapp")}
              </a>
            </Button>
          </div>
          {error && (
            <p role="alert" className="mt-3 text-sm text-destructive">
              {t("shareError")}
            </p>
          )}
        </div>

        {/* Live preview of the story card */}
        <div className="mx-auto overflow-hidden rounded-2xl shadow-pop" style={{ width: 216, height: 384 }} aria-hidden>
          <div style={{ transform: "scale(0.2)", transformOrigin: "top left" }}>
            <ShareCard format="story" result={result} name={state.firstName} />
          </div>
        </div>
      </div>

      {/* Full-size cards, off-screen, captured to PNG on demand */}
      <div aria-hidden className="pointer-events-none fixed top-0 -left-[20000px]">
        <div ref={storyRef}>
          <ShareCard format="story" result={result} name={state.firstName} />
        </div>
        <div ref={squareRef}>
          <ShareCard format="square" result={result} name={state.firstName} />
        </div>
      </div>
    </section>
  );
});

/** The share image. Deliberately contains no caste, income, disability or other sensitive answers. */
function ShareCard({ format, result, name }: { format: Format; result: KundliResult; name?: string }) {
  const t = useTranslations("kundli");
  const tb = useTranslations("brand");
  const locale = useLocale() as Locale;
  const { w, h } = SIZES[format];
  const story = format === "story";
  const top = [...result.houses].filter((x) => x.count > 0).sort((a, b) => b.cash - a.cash || b.count - a.count).slice(0, 3);
  const host = typeof window === "undefined" ? "" : window.location.host;

  const chart = (
    <KundliChart
      houses={result.houses}
      totalAmount={result.totals.cash}
      formatTotal={(n) => formatINRCompact(n, locale)}
      estimateLabel={t("estimate")}
      houseLabel={() => ""}
      chartLabel=""
      interactive={false}
      className={story ? "w-[880px]" : "w-[560px]"}
    />
  );

  const stats = (
    <div style={{ display: "flex", flexDirection: "column", gap: story ? 28 : 22 }}>
      <div>
        <div style={{ fontSize: story ? 30 : 24, color: "rgba(255,255,255,0.7)" }}>{t("lifetime")}</div>
        <div style={{ fontSize: story ? 92 : 54, fontWeight: 800, color: "#F8CB6B", lineHeight: 1.05 }} className="font-heading">
          {formatINRCompact(result.totals.cash, locale)}*
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <ScoreRing pct={result.score.pct} size={story ? 130 : 104} dark />
        <div style={{ fontSize: story ? 34 : 26, fontWeight: 700 }}>{t("score")}</div>
      </div>
      {top.length > 0 && (
        <div>
          <div style={{ fontSize: story ? 26 : 20, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>{t("cardTop")}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {top.map((x) => (
              <span
                key={x.house}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: story ? "14px 22px" : "10px 16px", borderRadius: 999, border: "2px solid rgba(245,184,61,0.5)", background: "rgba(245,184,61,0.12)", fontSize: story ? 30 : 22, fontWeight: 700 }}
              >
                <TaxonomyIcon name={KUNDLI_HOUSES[x.house].icon} className={story ? "size-8 text-[#F8CB6B]" : "size-6 text-[#F8CB6B]"} />
                {KUNDLI_HOUSES[x.house].name[locale]}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      lang={locale}
      style={{
        width: w,
        height: h,
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        background:
          "radial-gradient(2px 2px at 12% 18%, rgba(245,184,61,.8), transparent 60%), radial-gradient(2px 2px at 82% 10%, rgba(245,184,61,.6), transparent 60%), radial-gradient(3px 3px at 64% 76%, rgba(245,184,61,.5), transparent 60%), radial-gradient(2px 2px at 26% 86%, rgba(255,255,255,.4), transparent 60%), radial-gradient(120% 80% at 50% 0%, #1E1B4B 0%, #0B0D17 70%)",
      }}
      className="font-sans"
    >
      {/* Night-sky photo (embedded by html-to-image), darkened so text and chart stay readable */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={(story ? COSMIC.story : COSMIC.wide).src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,13,23,0.62) 0%, rgba(11,13,23,0.45) 45%, rgba(11,13,23,0.85) 100%)" }} />
      <div style={{ position: "relative", height: "100%", padding: story ? "90px 80px" : "60px 64px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_SVG} width={story ? 72 : 56} height={story ? 72 : 56} alt="" />
        <span style={{ fontSize: story ? 40 : 32, fontWeight: 800 }} className="font-heading">
          {tb("name")}
        </span>
      </div>
      <div style={{ fontSize: story ? 76 : 54, fontWeight: 800, color: "#F8CB6B", marginTop: story ? 50 : 26, lineHeight: 1.1 }} className="font-heading">
        {name ? t("cardTitle", { name }) : t("cardTitleAnon")}
      </div>

      {story ? (
        <>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>{chart}</div>
          <div style={{ marginTop: 50 }}>{stats}</div>
        </>
      ) : (
        <div style={{ display: "flex", gap: 40, alignItems: "center", marginTop: 24, flex: 1 }}>
          {chart}
          <div style={{ flex: 1 }}>{stats}</div>
        </div>
      )}

      <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div style={{ fontSize: story ? 34 : 26, fontWeight: 700, color: "#F8CB6B" }}>{host}</div>
        <div style={{ fontSize: story ? 24 : 18, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
          * {t("cardFooter")} {t("noStars")}
        </div>
      </div>
      </div>
    </div>
  );
}
