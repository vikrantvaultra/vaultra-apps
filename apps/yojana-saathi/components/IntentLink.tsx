"use client";

import type { ComponentProps } from "react";
import { Link, useRouter } from "@/i18n/navigation";

type Props = ComponentProps<typeof Link>;

/**
 * A Link that prefetches on intent (hover, focus, touch) instead of when it scrolls into view.
 * Used above the fold so heavy routes (Kundli, questionnaire, search) don't download during first load.
 */
export function IntentLink({ href, onPointerEnter, onFocus, onTouchStart, ...rest }: Props) {
  const router = useRouter();
  const prefetch = () => {
    try {
      router.prefetch(href as Parameters<typeof router.prefetch>[0]);
    } catch {}
  };
  return (
    <Link
      href={href}
      prefetch={false}
      onPointerEnter={(e) => {
        prefetch();
        onPointerEnter?.(e);
      }}
      onFocus={(e) => {
        prefetch();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        prefetch();
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
}
