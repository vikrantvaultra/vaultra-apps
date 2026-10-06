import { cn } from "@/lib/utils";

/**
 * Two companions leaning the same way, one in front of the other, with an emerald dot where they meet: a saathi.
 * Same drawing as LOGO_SVG (logo-data.ts) and app/icon.svg; the glossy app icon (app/apple-icon.png) follows it.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="ys-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="0.55" stopColor="#3B6FD8" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#ys-tile)" />
      <rect x="19.75" y="8" width="9" height="24" rx="4.5" fill="#fff" fillOpacity="0.5" transform="rotate(24 24.25 20)" />
      <rect x="11.25" y="8" width="9" height="24" rx="4.5" fill="#fff" transform="rotate(24 15.75 20)" />
      <circle cx="19.4" cy="20" r="2.9" fill="#10B981" />
    </svg>
  );
}

export function Logo({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-heading text-[1.15rem] leading-none font-extrabold tracking-tight">{name}</span>
    </span>
  );
}
