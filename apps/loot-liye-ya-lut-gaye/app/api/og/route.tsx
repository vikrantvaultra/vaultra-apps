import { ImageResponse } from "next/og";
import { isRankKey, rankLabel } from "@/lib/game";
import { signed } from "@/lib/format";
import { C, Lights, Receipt, bgStyle, ogFonts } from "@/lib/og/shared";

// Personalised link preview for challenge links: /api/og?s=952&r=smart
export async function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const raw = q.get("s") ?? "";
  const score = /^-?\d{1,6}$/.test(raw) ? Number(raw) : 0;
  const r = q.get("r");
  const rank = isRankKey(r) ? rankLabel(r) : null;
  const pos = score >= 0;

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", position: "relative", ...bgStyle, fontFamily: "Text" }}>
        <Lights width={1200} />
        <div style={{ display: "flex", flexDirection: "column", padding: "84px 0 0 70px", width: 720 }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", padding: "8px 18px", borderRadius: 99, background: C.pink, color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: 2 }}>
              🥊 CHALLENGE AAYA HAI
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 76, lineHeight: 0.95, color: C.text, marginTop: 26 }}>{pos ? "DOST NE" : "DOST"}</div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 168, lineHeight: 0.9, color: pos ? C.lime : C.pink }}>{signed(score)}</div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 76, lineHeight: 0.95, color: C.text }}>{pos ? "BACHAYE." : "SE LUT GAYA."}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 32, fontWeight: 600, color: C.textDim }}>
            {rank ? `${rank} · ` : ""}Beat kar sakte ho?
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", right: 70, top: 120 }}>
          <Receipt
            lines={[
              ["Deals", "12"],
              ["Har deal", "6 sec"],
              ["Wallet", "₹10,000"],
              ["Dost ka score", signed(score), pos ? C.good : C.bad],
            ]}
            stamp="BEAT KARO"
            stampColor={C.bad}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await ogFonts(),
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable" },
    }
  );
}
