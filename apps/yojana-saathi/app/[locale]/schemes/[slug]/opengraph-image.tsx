import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { CATEGORIES, MINISTRIES, STATES } from "@/data/taxonomy";
import { OG_SIZE, OgFrame, ogFonts } from "@/lib/og";
import { allSlugs, getScheme } from "@/lib/schemes";
import { describeValue } from "@/lib/value";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Yojana Saathi scheme";

export const generateStaticParams = () => allSlugs().map((slug) => ({ slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Satori can't shape Devanagari (conjuncts and matras break), so share cards are always English
  const locale = "en";
  const s = getScheme(slug);
  const t = await getTranslations({ locale });
  const fonts = await ogFonts();
  if (!s) return new ImageResponse(<div />, { ...size, fonts });

  const org = s.level === "state" && s.state ? STATES[s.state].name[locale] : s.ministry ? MINISTRIES[s.ministry].name[locale] : "";
  const name = s.name[locale];

  return new ImageResponse(
    (
      <OgFrame brand={t("brand.name")} footer={t("brand.disclaimer")}>
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <span style={{ display: "flex", padding: "6px 16px", borderRadius: 999, background: "#4F46E5", color: "#fff", fontSize: 22 }}>
            {CATEGORIES[s.categories[0]].name[locale]}
          </span>
          {org && (
            <span style={{ display: "flex", padding: "6px 16px", borderRadius: 999, background: "#ffffff", color: "#13152B", fontSize: 22, border: "1px solid #E5E4DC" }}>
              {org.length > 48 ? org.slice(0, 46) + "…" : org}
            </span>
          )}
        </div>
        <div style={{ display: "flex", fontFamily: "Jakarta", fontWeight: 800, fontSize: name.length > 40 ? 62 : 76, lineHeight: 1.12, letterSpacing: -1 }}>{name}</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#3A3D52", lineHeight: 1.4, maxWidth: 1000 }}>
          {s.shortDescription[locale].length > 150 ? s.shortDescription[locale].slice(0, 148) + "…" : s.shortDescription[locale]}
        </div>
        {s.value && (
          <div style={{ display: "flex", marginTop: 26 }}>
            <span style={{ display: "flex", padding: "10px 20px", borderRadius: 16, background: "#E6F7F0", color: "#047857", fontSize: 30, fontWeight: 800, fontFamily: "Jakarta" }}>
              {describeValue(s.value, locale)}
            </span>
          </div>
        )}
      </OgFrame>
    ),
    { ...size, fonts },
  );
}
