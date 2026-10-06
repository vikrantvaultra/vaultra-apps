import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO_SVG } from "@/components/brand/logo-data";

/**
 * Fonts for generated images (Satori needs TTF/OTF, not woff2). OFL-licensed, from Google Fonts.
 * Generated images are English-only: Satori has no complex-script shaping, so Devanagari renders wrongly.
 */
export async function ogFonts() {
  const load = (f: string) => readFile(join(process.cwd(), "assets/og-fonts", f));
  const [jakarta, inter] = await Promise.all([load("jakarta-800.ttf"), load("inter-500.ttf")]);
  return [
    { name: "Jakarta", data: jakarta, weight: 800 as const, style: "normal" as const },
    { name: "Inter", data: inter, weight: 500 as const, style: "normal" as const },
  ];
}

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared frame: brand row, content, independent-project footer */
export function OgFrame({ brand, footer, children }: { brand: string; footer: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "56px 64px",
        background: "linear-gradient(135deg, #FAFAF7 0%, #EEF0FF 55%, #E6F7F0 100%)",
        fontFamily: "Inter",
        color: "#13152B",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_SVG} width={56} height={56} alt="" />
        <span style={{ fontFamily: "Jakarta", fontSize: 30, fontWeight: 800 }}>{brand}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>{children}</div>
      <div style={{ display: "flex", fontSize: 20, color: "#565A6E" }}>{footer}</div>
    </div>
  );
}
