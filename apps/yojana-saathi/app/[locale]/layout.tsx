import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InlineScript } from "@/components/layout/InlineScript";
import { Providers } from "@/components/layout/Providers";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { textSizeBootScript } from "@/lib/text-size-boot";
import { inter, jakarta, rupeeHeading, rupeeSans } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  const brand = await getTranslations("brand");
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: `%s · ${brand("name")}` },
    description: t("description"),
    applicationName: brand("name"),
    openGraph: { type: "website", siteName: brand("name"), title: t("title"), description: t("description") },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D17" },
  ],
  colorScheme: "light dark",
};

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations("nav");

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${rupeeSans.variable} ${rupeeHeading.variable}`}
    >
      <head>
        <InlineScript html={textSizeBootScript} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-pop transition-transform focus:translate-y-0"
        >
          {t("skip")}
        </a>
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
