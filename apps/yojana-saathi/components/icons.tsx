import {
  Accessibility,
  Armchair,
  Baby,
  Briefcase,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  PiggyBank,
  ShieldCheck,
  Store,
  Users,
  Wheat,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Icon names used in data/taxonomy.ts, mapped to components (keeps the taxonomy serialisable) */
export const ICONS: Record<string, LucideIcon> = {
  Accessibility,
  Armchair,
  Baby,
  Briefcase,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  PiggyBank,
  ShieldCheck,
  Store,
  Users,
  Wheat,
  Zap,
};

export function TaxonomyIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? ShieldCheck;
  return <Icon className={className} aria-hidden />;
}
