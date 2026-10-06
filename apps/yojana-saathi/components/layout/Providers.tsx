"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useCloudSync } from "@/lib/store/sync";
import { restoreTextSize } from "@/lib/text-size";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(restoreTextSize, []);
  useCloudSync();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      // React 19 warns about <script> rendered on the client; the script only needs to run from the server HTML
      scriptProps={{ type: typeof window === "undefined" ? "text/javascript" : "text/plain" }}
    >
      {children}
    </ThemeProvider>
  );
}
