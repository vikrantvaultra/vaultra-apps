// Tiny synth sound effects with the Web Audio API — no audio files to download.
let ctx: AudioContext | null = null;
let muted = true;

function ac() {
  if (muted || typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** unlock=true creates/resumes the AudioContext — only do that inside a user tap. */
export function setMuted(m: boolean, unlock = true) {
  muted = m;
  if (unlock) ac();
}

type ToneOpts = { type?: OscillatorType; vol?: number; to?: number };

function tone(freq: number, at: number, dur: number, { type = "triangle", vol = 0.16, to = 0 }: ToneOpts = {}) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime + at;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

const semi = (f: number, n: number) => f * 2 ** (n / 12);

export const sfx = {
  /** ka-ching — climbs in pitch with the streak */
  buy(streak = 0) {
    const up = Math.min(streak, 8);
    tone(semi(1046, up), 0, 0.09, { type: "square", vol: 0.07 });
    tone(semi(1568, up), 0.07, 0.22, { type: "square", vol: 0.07 });
    tone(semi(2093, up), 0.07, 0.3, { vol: 0.08 });
  },
  dodge(streak = 0) {
    const up = Math.min(streak, 8);
    tone(semi(659, up), 0, 0.1, { vol: 0.12 });
    tone(semi(988, up), 0.08, 0.18, { vol: 0.12 });
  },
  trap() {
    tone(320, 0, 0.28, { type: "sawtooth", vol: 0.1, to: 150 });
    tone(240, 0.26, 0.42, { type: "sawtooth", vol: 0.1, to: 90 });
  },
  miss() {
    tone(392, 0, 0.14, { vol: 0.12 });
    tone(311, 0.12, 0.26, { vol: 0.12 });
  },
  tick() {
    tone(1400, 0, 0.04, { type: "square", vol: 0.05 });
  },
  flip() {
    tone(500, 0, 0.08, { type: "sine", vol: 0.06, to: 900 });
  },
  count(final = false) {
    tone(final ? 1318 : 659, 0, final ? 0.32 : 0.12, { type: "square", vol: 0.06 });
  },
  win() {
    [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, i * 0.09, 0.26, { type: "square", vol: 0.06 }));
    tone(1568, 0.48, 0.6, { vol: 0.1 });
  },
  lose() {
    [392, 370, 349].forEach((f, i) => tone(f, i * 0.28, 0.3, { type: "sawtooth", vol: 0.07 }));
    tone(330, 0.84, 0.7, { type: "sawtooth", vol: 0.07, to: 300 });
  },
};

export const buzz = (p: number | number[]) => {
  try {
    navigator.vibrate?.(p);
  } catch {}
};
