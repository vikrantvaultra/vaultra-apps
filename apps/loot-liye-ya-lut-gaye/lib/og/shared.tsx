// Shared pieces for the generated images (OG cards and app icons), rendered by next/og (Satori).
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "assets/og-fonts");
const fontData = Promise.all([
  readFile(join(dir, "BricoDisplay-800.ttf")),
  readFile(join(dir, "Brico-800.ttf")),
  readFile(join(dir, "Brico-600.ttf")),
  readFile(join(dir, "PlexMono-Bold.ttf")),
]);

export async function ogFonts() {
  const [display, text800, text600, mono] = await fontData;
  return [
    { name: "Display", data: display, weight: 800 as const, style: "normal" as const },
    { name: "Text", data: text800, weight: 800 as const, style: "normal" as const },
    { name: "Text", data: text600, weight: 600 as const, style: "normal" as const },
    { name: "Mono", data: mono, weight: 700 as const, style: "normal" as const },
  ];
}

export const C = {
  bg: "#0C0A1D",
  lime: "#C6FF3D",
  pink: "#FF3D7F",
  gold: "#FFC738",
  paper: "#FFFCF3",
  ink: "#1A1530",
  dim: "#625B80",
  good: "#11843B",
  bad: "#D4134A",
  text: "#F7F3FF",
  textDim: "#ACA3D2",
};

export const bgStyle = {
  background: C.bg,
  backgroundImage: `radial-gradient(ellipse 900px 420px at 30% -10%, rgba(139,92,255,.55), transparent), radial-gradient(ellipse 700px 400px at 105% 110%, rgba(255,61,127,.35), transparent)`,
};

/** String of fairy lights for the top edge. */
export function Lights({ width }: { width: number }) {
  const cols = [C.gold, C.pink, C.lime];
  const n = Math.ceil(width / 60);
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width, height: 40, display: "flex" }}>
      {Array.from({ length: n }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 18 + i * 60,
            top: i % 2 ? 22 : 10,
            width: 14,
            height: 14,
            borderRadius: 14,
            background: cols[i % 3],
            boxShadow: `0 0 18px 6px ${cols[i % 3]}66`,
          }}
        />
      ))}
    </div>
  );
}

/** The honest receipt with an ink stamp. */
export function Receipt({ lines, stamp, stampColor, rotate = 4 }: { lines: [string, string, string?][]; stamp: string; stampColor: string; rotate?: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        padding: "34px 34px 40px",
        background: C.paper,
        color: C.ink,
        fontFamily: "Mono",
        borderRadius: 10,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 40px 70px -20px rgba(0,0,0,.7)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4, paddingBottom: 14, borderBottom: `3px dashed ${C.dim}77` }}>
        <span>SACH KA BILL</span>
        <span style={{ color: C.dim }}>#07</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "18px 0", fontSize: 22, borderBottom: `3px dashed ${C.dim}77` }}>
        {lines.map(([k, v, col]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", color: col ?? C.ink }}>
            <span style={{ color: col ?? C.dim }}>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
        <div
          style={{
            display: "flex",
            padding: "4px 20px 8px",
            border: `7px solid ${stampColor}`,
            borderRadius: 14,
            color: stampColor,
            fontFamily: "Display",
            fontSize: 58,
            lineHeight: 1,
            transform: "rotate(-8deg)",
          }}
        >
          {stamp}
        </div>
      </div>
    </div>
  );
}

/** App icon: a paper price tag with a big ₹. */
export function TagIcon({ size, maskable = false }: { size: number; maskable?: boolean }) {
  const k = maskable ? 0.62 : 0.78;
  const w = size * 0.56 * k;
  const h = size * 0.74 * k;
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.bg,
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(139,92,255,.7), transparent 70%)",
        borderRadius: maskable ? 0 : size * 0.22,
      }}
    >
      <div
        style={{
          position: "relative",
          width: w,
          height: h,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.lime,
          borderRadius: w * 0.18,
          transform: "rotate(-14deg)",
        }}
      >
        <div style={{ position: "absolute", top: h * 0.09, left: w / 2 - w * 0.08, width: w * 0.16, height: w * 0.16, borderRadius: w, background: C.bg }} />
        <span style={{ fontFamily: "Display", fontSize: h * 0.66, color: C.bg, marginTop: h * 0.14 }}>₹</span>
      </div>
    </div>
  );
}
