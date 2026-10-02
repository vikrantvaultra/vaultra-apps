import { ImageResponse } from "next/og";
import { TagIcon, ogFonts } from "@/lib/og/shared";

// Static PNG icons for the web app manifest: /pwa-icon/192, /pwa-icon/512, /pwa-icon/maskable
const SIZES: Record<string, { px: number; maskable: boolean }> = {
  "192": { px: 192, maskable: false },
  "512": { px: 512, maskable: false },
  maskable: { px: 512, maskable: true },
};

export function generateStaticParams() {
  return Object.keys(SIZES).map(size => ({ size }));
}

export async function GET(_req: Request, { params }: RouteContext<"/pwa-icon/[size]">) {
  const { size } = await params;
  const s = SIZES[size] ?? SIZES["192"];
  return new ImageResponse(<TagIcon size={s.px} maskable={s.maskable} />, { width: s.px, height: s.px, fonts: await ogFonts() });
}
