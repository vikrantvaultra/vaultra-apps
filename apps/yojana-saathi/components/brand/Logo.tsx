import { cn } from "@/lib/utils";

/** Two overlapping rounded forms: one leaning on the other, i.e. a saathi. */
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
      <rect width="40" height="40" rx="12" fill="url(#ys-tile)" />
      <rect x="7.5" y="12" width="15" height="19" rx="7.5" fill="#fff" fillOpacity="0.55" transform="rotate(-12 15 21.5)" />
      <rect x="17.5" y="9" width="15" height="19" rx="7.5" fill="#fff" transform="rotate(12 25 18.5)" />
      <circle cx="21.2" cy="22.6" r="2.1" fill="#10B981" />
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
