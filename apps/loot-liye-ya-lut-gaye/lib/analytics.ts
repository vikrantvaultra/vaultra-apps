// Vercel Web Analytics custom events: cookieless, no personal data — only game facts.
import { track } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, props?: Props) {
  try {
    track(name, props);
  } catch {}
}
