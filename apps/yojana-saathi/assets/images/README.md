Photography generated for Yojana Saathi with Z-Image Turbo (ComfyUI on RunPod), one pick per prompt out of
three seeds, then converted to JPEG. The people shown are AI-generated, not real individuals.
Prompts asked for no text, logos, flags or government insignia; picks were checked at full size for stray text
and artefacts.

Brand set (Qwen-Image 2512, same process):

- `kundli-emblem.jpg`: the gold Kundli emblem with its navy sky keyed out to pure black, so the home page can
  screen-blend it onto the night-sky band. `assets/og/kundli-emblem.jpg` is the untouched emblem for the `/kundli`
  link preview.
- `app/apple-icon.png` and `public/icons/*.png`: the glossy app icon, cropped inside its rounded corners so phones
  can apply their own mask. The maskable version keeps the artwork inside the 80% safe zone on a matching gradient.
- The logo mark (`components/brand/Logo.tsx`, `logo-data.ts`, `app/icon.svg`) is a hand-drawn SVG of the
  generated flat logo, so it stays sharp at every size. The generated wordmark and background pattern were not used.
