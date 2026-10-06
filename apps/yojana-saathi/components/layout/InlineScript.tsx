"use client";

/**
 * Runs during HTML parsing on a hard load; inert (text/plain) when React renders it on the client,
 * which also keeps React from warning about client-rendered <script> tags.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
