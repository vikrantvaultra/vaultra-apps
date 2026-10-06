import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Yojana Saathi: find every government scheme you deserve";

// English only: Satori can't shape Devanagari
export default async function Image() {
  const fonts = await ogFonts();
  return new ImageResponse(
    (
      <OgFrame brand="Yojana Saathi" footer="Independent project, not affiliated with the Government of India.">
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Jakarta", fontWeight: 800, fontSize: 76, lineHeight: 1.08, letterSpacing: -1.5 }}>
          <span>Find every government</span>
          <span style={{ display: "flex", gap: 20 }}>
            scheme <span style={{ color: "#4F46E5" }}>you deserve</span>
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#3A3D52" }}>
          Plain-language guides, an eligibility check, and your Sarkari Kundli ✦
        </div>
      </OgFrame>
    ),
    { ...size, fonts },
  );
}
