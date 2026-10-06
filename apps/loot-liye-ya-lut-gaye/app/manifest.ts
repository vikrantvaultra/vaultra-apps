import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loot Liye Ya Lut Gaye?",
    short_name: "Loot Ya Lut",
    description: "60-second sale trap game. Asli loot pakdo, jaal se bacho.",
    lang: "hi-Latn",
    start_url: `${BASE_PATH}/?source=pwa`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    orientation: "portrait",
    background_color: "#0C0A1D",
    theme_color: "#0C0A1D",
    icons: [
      { src: `${BASE_PATH}/pwa-icon/192`, sizes: "192x192", type: "image/png" },
      { src: `${BASE_PATH}/pwa-icon/512`, sizes: "512x512", type: "image/png" },
      { src: `${BASE_PATH}/pwa-icon/maskable`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
