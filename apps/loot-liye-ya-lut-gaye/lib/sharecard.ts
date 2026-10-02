// Draws the 1080×1920 Instagram-story share card on a <canvas> and returns a PNG Blob.
// Design: the night-market background + the honest "Sach ka bill" receipt with an ink stamp.
// Key content sits between y≈200 and y≈1700 so Instagram's top/bottom UI doesn't cover it.
import type { Outcome } from "./game";
import { inr, signed } from "./format";

export interface ShareData {
  win: boolean;
  rankTitle: string;
  score: number;
  claimed: number;
  traps: number;
  missed: number;
  streak: number;
  grid: Outcome[];
  host: string;
  seed: string;
  date: string;
  fonts: { display: string; text: string; mono: string };
}

const W = 1080;
const H = 1920;
const C = {
  bg: "#0C0A1D",
  lime: "#C6FF3D",
  pink: "#FF3D7F",
  gold: "#FFC738",
  paper: "#FFFCF3",
  ink: "#1A1530",
  dim: "#625B80",
  good: "#11843B",
  bad: "#D4134A",
  meh: "#C98A00",
};
const GRID: Record<Outcome, string> = { loot: C.good, dodge: C.good, trap: C.bad, miss: C.meh };

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function fit(ctx: CanvasRenderingContext2D, text: string, font: (px: number) => string, size: number, maxW: number) {
  let s = size;
  ctx.font = font(s);
  while (ctx.measureText(text).width > maxW && s > 18) {
    s -= 2;
    ctx.font = font(s);
  }
  return s;
}

function dashed(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number) {
  ctx.save();
  ctx.strokeStyle = "rgba(26,21,48,.35)";
  ctx.lineWidth = 3;
  ctx.setLineDash([14, 10]);
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
  ctx.restore();
}

export async function renderShareCard(d: ShareData): Promise<Blob | null> {
  const { display, text, mono } = d.fonts;
  const fD = (px: number) => `800 ${px}px ${display}`;
  const fT = (px: number, w = 600) => `${w} ${px}px ${text}`;
  const fM = (px: number, w = 500) => `${w} ${px}px ${mono}`;
  try {
    await Promise.all([document.fonts.load(fD(100)), document.fonts.load(fT(40)), document.fonts.load(fM(40, 700)), document.fonts.load(fM(40))]);
  } catch {}

  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext("2d");
  if (!ctx) return null;

  // background + glows
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);
  const g1 = ctx.createRadialGradient(W / 2, -100, 50, W / 2, -100, 1100);
  g1.addColorStop(0, "rgba(139,92,255,.55)");
  g1.addColorStop(1, "rgba(139,92,255,0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, W, H);
  const g2 = ctx.createRadialGradient(W, H + 100, 50, W, H + 100, 1000);
  g2.addColorStop(0, d.win ? "rgba(198,255,61,.28)" : "rgba(255,61,127,.32)");
  g2.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, W, H);

  // fairy lights
  ctx.strokeStyle = "#786FA8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 0; x <= W; x += 6) ctx.lineTo(x, 40 + Math.sin((x / 120) * Math.PI) * 18);
  ctx.stroke();
  const bulbs = [C.gold, C.pink, C.lime];
  for (let i = 0, x = 30; x < W; x += 80, i++) {
    const y = 40 + Math.sin((x / 120) * Math.PI) * 18 + 10;
    const col = bulbs[i % 3];
    const glow = ctx.createRadialGradient(x, y, 2, x, y, 30);
    glow.addColorStop(0, col);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.globalAlpha = 0.5;
    ctx.fillRect(x - 30, y - 30, 60, 60);
    ctx.globalAlpha = 1;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, 9, 0, Math.PI * 2);
    ctx.fill();
  }

  // title lockup (one line)
  ctx.textBaseline = "alphabetic";
  const t1 = "LOOT LIYE",
    t3 = "LUT GAYE?";
  let ts = 120;
  let w1 = 0,
    w3 = 0,
    wy = 0;
  for (; ts > 60; ts -= 4) {
    ctx.font = fD(ts);
    w1 = ctx.measureText(t1).width;
    w3 = ctx.measureText(t3).width;
    ctx.font = fT(ts * 0.34, 800);
    wy = ctx.measureText("ya").width + ts * 0.34;
    if (w1 + w3 + wy + 40 < 960) break;
  }
  let x = (W - (w1 + w3 + wy + 40)) / 2;
  const ty = 215;
  ctx.textAlign = "left";
  ctx.font = fD(ts);
  ctx.fillStyle = C.lime;
  ctx.fillText(t1, x, ty);
  x += w1 + 20;
  ctx.fillStyle = "#F7F3FF";
  rr(ctx, x, ty - ts * 0.52, wy, ts * 0.46, ts * 0.23);
  ctx.fill();
  ctx.fillStyle = C.bg;
  ctx.font = fT(ts * 0.34, 800);
  ctx.fillText("ya", x + ts * 0.17, ty - ts * 0.18);
  x += wy + 20;
  ctx.font = fD(ts);
  ctx.fillStyle = C.pink;
  ctx.fillText(t3, x, ty);

  // ── receipt (drawn on its own canvas so we can punch the perforations) ──
  const RX = 110,
    RY = 270,
    RW = 860,
    RH = 1220;
  const rc = document.createElement("canvas");
  rc.width = RW;
  rc.height = RH;
  const r = rc.getContext("2d")!;
  r.fillStyle = C.paper;
  r.fillRect(0, 0, RW, RH);
  r.textAlign = "center";
  r.fillStyle = C.ink;
  r.font = fM(40, 700);
  r.fillText("S A C H   K A   B I L L", RW / 2, 85);
  r.fillStyle = C.dim;
  r.font = fM(26);
  r.fillText(`Order #${d.seed.toUpperCase()} · ${d.date}`, RW / 2, 130);
  dashed(r, 50, RW - 50, 165);

  r.fillStyle = C.dim;
  r.font = fM(30, 700);
  r.fillText("A S L I   B A C H A T", RW / 2, 230);
  r.fillStyle = d.score >= 0 ? C.good : C.bad;
  fit(r, signed(d.score), fD, 200, RW - 100);
  r.fillText(signed(d.score), RW / 2, 405);
  r.fillStyle = C.dim;
  const claim = `Sale ka daava: ${inr(d.claimed)} bachat 🤡`;
  fit(r, claim, px => fM(px), 32, RW - 100);
  r.fillText(claim, RW / 2, 470);

  // rows
  dashed(r, 50, RW - 50, 770);
  const rows: [string, string][] = [
    ["Jaal mein fase", String(d.traps)],
    ["Asli deals chhoote", String(d.missed)],
    ["Best streak", `🔥 ${d.streak}`],
    ["Rank", d.rankTitle],
  ];
  rows.forEach(([k, v], i) => {
    const y = 840 + i * 62;
    r.textAlign = "left";
    r.fillStyle = C.dim;
    r.font = fM(34);
    r.fillText(k, 60, y);
    r.textAlign = "right";
    r.fillStyle = C.ink;
    fit(r, v, px => fM(px, 700), 34, 440);
    r.fillText(v, RW - 60, y);
  });
  dashed(r, 50, RW - 50, 1060);

  // result grid "barcode"
  const sq = 54,
    gap = 10;
  const gw = d.grid.length * sq + (d.grid.length - 1) * gap;
  let gx = (RW - gw) / 2;
  d.grid.forEach(o => {
    r.fillStyle = GRID[o];
    rr(r, gx, 1090, sq, sq, 10);
    r.fill();
    gx += sq + gap;
  });
  r.textAlign = "center";
  r.fillStyle = C.dim;
  r.font = fM(24);
  r.fillText("Dhanyavaad! Phir aana 🙏", RW / 2, 1188);

  // perforations
  r.globalCompositeOperation = "destination-out";
  for (let px = 0; px <= RW + 22; px += 22) {
    r.beginPath();
    r.arc(px, 0, 9, 0, Math.PI * 2);
    r.arc(px, RH, 9, 0, Math.PI * 2);
    r.fill();
  }
  r.globalCompositeOperation = "source-over";

  ctx.save();
  ctx.translate(RX + RW / 2, RY + RH / 2);
  ctx.rotate(-0.015);
  ctx.shadowColor = "rgba(0,0,0,.55)";
  ctx.shadowBlur = 60;
  ctx.shadowOffsetY = 30;
  ctx.drawImage(rc, -RW / 2, -RH / 2);
  ctx.restore();

  // ── ink stamp ──
  const stampText = d.win ? "LOOT LIYE 😎" : "LUT GAYE 💀";
  const sc = document.createElement("canvas");
  sc.width = 900;
  sc.height = 300;
  const s = sc.getContext("2d")!;
  const ink = d.win ? C.good : C.bad;
  const ss = fit(s, stampText, fD, 150, 720);
  const sw = s.measureText(stampText).width + 90;
  const sh = ss * 1.3;
  s.strokeStyle = ink;
  s.fillStyle = ink;
  s.lineWidth = 14;
  rr(s, (900 - sw) / 2, (300 - sh) / 2, sw, sh, 28);
  s.stroke();
  s.textAlign = "center";
  s.textBaseline = "middle";
  s.fillText(stampText, 450, 158);
  // speckle the ink
  s.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 900; i++) {
    s.globalAlpha = Math.random() * 0.7;
    s.beginPath();
    s.arc(Math.random() * 900, Math.random() * 300, Math.random() * 3.2, 0, Math.PI * 2);
    s.fill();
  }
  ctx.save();
  ctx.translate(W / 2, RY + 615);
  ctx.rotate(-0.12);
  ctx.globalAlpha = 0.92;
  ctx.drawImage(sc, -450, -150);
  ctx.restore();

  // ── CTA ──
  ctx.textAlign = "center";
  ctx.fillStyle = "#F7F3FF";
  ctx.font = fD(76);
  ctx.fillText("TUM BEAT KAR SAKTE HO? 👇", W / 2, 1600);
  ctx.font = fD(62);
  const hw = ctx.measureText(d.host).width + 100;
  ctx.fillStyle = C.lime;
  rr(ctx, W / 2 - hw / 2, 1630, hw, 100, 50);
  ctx.fill();
  ctx.fillStyle = C.bg;
  ctx.fillText(d.host, W / 2, 1702);
  ctx.fillStyle = "#ACA3D2";
  ctx.font = fT(28, 500);
  ctx.fillText("Sab products kaalpanik hain. Tricks bilkul asli hain.", W / 2, 1800);

  return new Promise(res => cv.toBlob(b => res(b), "image/png"));
}
