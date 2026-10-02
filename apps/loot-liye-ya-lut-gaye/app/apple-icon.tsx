import { ImageResponse } from "next/og";
import { TagIcon, ogFonts } from "@/lib/og/shared";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(<TagIcon size={180} maskable />, { ...size, fonts: await ogFonts() });
}
