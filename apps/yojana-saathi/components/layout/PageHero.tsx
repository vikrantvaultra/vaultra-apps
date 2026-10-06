import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  description,
  meta,
  icon,
}: {
  crumbs: { href?: string; label: string }[];
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_15%_0%,rgb(79_70_229/0.12),transparent_70%),radial-gradient(40%_70%_at_90%_10%,rgb(16_185_129/0.10),transparent_70%)]"
      />
      <div className="container-page relative py-8 sm:py-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="rounded hover:text-foreground hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-foreground">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-5 flex items-start gap-4">
          {icon}
          <div className="min-w-0">
            {eyebrow && <p className="text-sm font-semibold text-primary">{eyebrow}</p>}
            <h1 className="text-3xl leading-tight font-extrabold sm:text-5xl">{title}</h1>
          </div>
        </div>
        {description && <p className="mt-4 max-w-3xl text-[1.05rem] text-muted-foreground">{description}</p>}
        {meta && <div className="mt-4">{meta}</div>}
      </div>
    </section>
  );
}
