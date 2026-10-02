import { ImageResponse } from "next/og";
import { C, Lights, Receipt, bgStyle, ogFonts } from "@/lib/og/shared";

export const alt = "Loot Liye Ya Lut Gaye? — 60-second sale trap game";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", position: "relative", ...bgStyle, fontFamily: "Text" }}>
        <Lights width={1200} />
        <div style={{ display: "flex", flexDirection: "column", padding: "86px 0 0 70px", width: 700 }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", padding: "8px 18px", borderRadius: 99, background: C.gold, color: "#2a1a00", fontSize: 24, fontWeight: 800, letterSpacing: 1 }}>
              60 SECOND SALE GAME
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 150, lineHeight: 0.86, color: C.lime, marginTop: 22 }}>LOOT LIYE</div>
          <div style={{ display: "flex", margin: "8px 0 4px" }}>
            <div style={{ display: "flex", padding: "4px 22px 8px", borderRadius: 99, background: C.text, color: C.bg, fontSize: 40, fontWeight: 800, transform: "rotate(-6deg)" }}>ya</div>
          </div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 150, lineHeight: 0.86, color: C.pink }}>LUT GAYE?</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 32, fontWeight: 600, color: C.textDim }}>₹10,000 · 12 deals · 6 second har deal</div>
        </div>
        <div style={{ display: "flex", position: "absolute", right: 70, top: 110 }}>
          <Receipt
            lines={[
              ["Sale price", "₹1,999"],
              ["Hidden fee", "+₹236", C.bad],
              ["Tumne diye", "₹2,235"],
              ["Asli keemat", "₹1,799"],
            ]}
            stamp="JAAL!"
            stampColor={C.bad}
          />
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
