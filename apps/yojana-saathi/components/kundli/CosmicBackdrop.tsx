import { getImageProps } from "next/image";
import { COSMIC } from "@/lib/images";

/**
 * Night-sky photo behind Kundli screens: the tall image on phones, the wide one on desktop.
 * A <picture> so only one is downloaded; eager, since each Kundli screen opens with it in view.
 * The parent needs `relative isolate overflow-hidden`.
 */
export function CosmicBackdrop() {
  const { props: { srcSet: wide } } = getImageProps({ src: COSMIC.wide, alt: "", sizes: "100vw" });
  const { props: { srcSet: story, ...rest } } = getImageProps({ src: COSMIC.story, alt: "", sizes: "100vw" });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <picture>
        <source media="(min-width: 1024px)" srcSet={wide} />
        <source srcSet={story} />
        <img {...rest} alt="" loading="eager" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgb(30_27_75/0.35),rgb(11_13_23/0.7)_70%)]" />
    </div>
  );
}
