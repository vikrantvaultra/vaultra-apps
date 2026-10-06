import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yojana Saathi",
    short_name: "Yojana Saathi",
    description: "Find the government schemes you deserve, in English and Hindi, and see your Sarkari Kundli.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#4F46E5",
    lang: "en-IN",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
