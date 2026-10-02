// Juice: floating numbers, bursts, confetti, shakes. All skipped under reduced motion.
export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function particle(text: string, x: number, y: number, cls: string) {
  const s = document.createElement("span");
  s.className = "fx " + cls;
  s.textContent = text;
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.setAttribute("aria-hidden", "true");
  document.body.appendChild(s);
  return s;
}

const center = (el: Element) => {
  const r = el.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2] as const;
};

export function floatText(el: Element | null, text: string, cls = "") {
  if (!el) return;
  const [x, y] = center(el);
  const s = particle(text, x, y, "fx-float " + cls);
  const frames = reducedMotion()
    ? [{ opacity: 1 }, { opacity: 0 }]
    : [
        { transform: "translate(-50%,-50%) scale(.6)", opacity: 0 },
        { transform: "translate(-50%,-90%) scale(1.15)", opacity: 1, offset: 0.25 },
        { transform: "translate(-50%,-240%) scale(1)", opacity: 0 },
      ];
  s.animate(frames, { duration: 1150, easing: "cubic-bezier(.2,.8,.3,1)" }).onfinish = () => s.remove();
}

export function burst(el: Element | null, emojis: string[], n = 12) {
  if (!el || reducedMotion()) return;
  const [x, y] = center(el);
  for (let i = 0; i < n; i++) {
    const s = particle(emojis[i % emojis.length], x, y, "fx-bit");
    const ang = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const dist = 100 + Math.random() * 120;
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist - 70;
    s.animate(
      [
        { transform: "translate(-50%,-50%) scale(.4) rotate(0)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1) rotate(${dx}deg)`, opacity: 1, offset: 0.6 },
        { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 140}px)) scale(.8) rotate(${dx * 2}deg)`, opacity: 0 },
      ],
      { duration: 800 + Math.random() * 300, easing: "cubic-bezier(.15,.7,.4,1)" }
    ).onfinish = () => s.remove();
  }
}

const CONFETTI = ["#C6FF3D", "#FF3D7F", "#FFC738", "#8B5CFF", "#3DE0FF"];

export function confetti(n = 110) {
  if (reducedMotion()) return;
  const w = window.innerWidth;
  for (let i = 0; i < n; i++) {
    const s = particle("", Math.random() * w, -20, "fx-confetti");
    s.style.background = CONFETTI[i % CONFETTI.length];
    s.style.width = 6 + Math.random() * 6 + "px";
    s.style.height = 10 + Math.random() * 9 + "px";
    const dx = (Math.random() - 0.5) * 260;
    s.animate(
      [
        { transform: "translate(0,0) rotate(0)" },
        { transform: `translate(${dx}px, ${window.innerHeight + 60}px) rotate(${(Math.random() - 0.5) * 1080}deg)` },
      ],
      { duration: 1800 + Math.random() * 1600, delay: Math.random() * 500, easing: "cubic-bezier(.25,.6,.5,1)", fill: "backwards" }
    ).onfinish = () => s.remove();
  }
}

export function shake(el: Element | null, k = 10) {
  if (!el || reducedMotion()) return;
  el.animate(
    [
      { transform: "translateX(0)" },
      { transform: `translateX(${-k}px) rotate(-1deg)` },
      { transform: `translateX(${k}px) rotate(1deg)` },
      { transform: `translateX(${-k * 0.6}px)` },
      { transform: `translateX(${k * 0.4}px)` },
      { transform: "translateX(0)" },
    ],
    { duration: 380, easing: "ease-out" }
  );
}

export function pop(el: Element | null) {
  if (!el || reducedMotion()) return;
  el.animate([{ transform: "scale(1)" }, { transform: "scale(1.35)" }, { transform: "scale(1)" }], { duration: 300, easing: "ease-out" });
}

/** Animate a number from `from` → `to`, calling paint(n) each frame. */
export function countUp(to: number, paint: (n: number) => void, ms = 900, from = 0) {
  if (reducedMotion() || to === from) return paint(to);
  const t0 = performance.now();
  const step = (now: number) => {
    const k = Math.min(1, (now - t0) / ms);
    const e = 1 - (1 - k) ** 3;
    paint(Math.round(from + (to - from) * e));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
