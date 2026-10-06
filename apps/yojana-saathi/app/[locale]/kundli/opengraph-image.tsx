import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LOGO_SVG } from "@/components/brand/logo-data";
import { OG_SIZE, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Sarkari Kundli: every government benefit you can access across your life, in one chart";

// English only: Satori can't shape Devanagari
export default async function Image() {
  const [fonts, emblem] = await Promise.all([ogFonts(), readFile(join(process.cwd(), "assets/og/kundli-emblem.jpg"))]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#031428", fontFamily: "Inter", color: "#fff" }}>
        {/* Emblem on the right; a left-to-right fade into its own dark blue keeps the text readable with no seam */}
        <img
          src={`data:image/jpeg;base64,${emblem.toString("base64")}`}
          width={630}
          height={630}
          alt=""
          style={{ position: "absolute", right: 0, top: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, #031428 0%, #031428 46%, rgba(3,20,40,0.75) 56%, rgba(3,20,40,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 660, padding: "52px 0 48px 60px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={LOGO_SVG} width={52} height={52} alt="" />
            <span style={{ fontFamily: "Jakarta", fontSize: 28, fontWeight: 800 }}>Yojana Saathi</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
            <span style={{ fontFamily: "Jakarta", fontWeight: 800, fontSize: 80, lineHeight: 1.04, letterSpacing: -1.5, color: "#F5B83D" }}>
              Sarkari Kundli
            </span>
            <span style={{ marginTop: 22, fontSize: 31, lineHeight: 1.3, color: "rgba(255,255,255,0.9)" }}>
              Every government benefit you can access across your whole life, in one chart.
            </span>
            <span style={{ marginTop: 16, fontSize: 23, color: "rgba(245,184,61,0.92)" }}>No stars involved, just the rules of every scheme.</span>
          </div>
          <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.62)" }}>
            Independent project, not affiliated with the Government of India.
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
