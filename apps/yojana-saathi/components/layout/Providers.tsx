"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { restoreTextSize } from "@/lib/text-size";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(restoreTextSize, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      // React 19 warns about <script> rendered on the client; the script only needs to run from the server HTML
      scriptProps={{ type: typeof window === "undefined" ? "text/javascript" : "text/plain" }}
    >
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
