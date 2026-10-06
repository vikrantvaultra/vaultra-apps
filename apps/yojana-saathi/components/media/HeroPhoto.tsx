import { getImageProps } from "next/image";
import { HERO } from "@/lib/images";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Art-directed hero photo: a portrait shot on phones, a wide shot on desktop. One <picture>, so each device
 * downloads only its own image, fetched early because it's above the fold.
 */
export function HeroPhoto({ locale, className }: { locale: Locale; className?: string }) {
  const {
    props: { srcSet: desktop },
  } = getImageProps({ src: HERO.desktop.src, alt: "", sizes: "(min-width: 1024px) 60vw, 100vw", placeholder: "empty" });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ src: HERO.mobile.src, alt: HERO.mobile.alt[locale], sizes: "100vw", placeholder: "empty" });

  return (
    <picture className={cn("block", className)}>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img {...rest} fetchPriority="high" loading="eager" className="h-full w-full object-cover object-[50%_72%] lg:object-[65%_50%]" />
    </picture>
  );
}
