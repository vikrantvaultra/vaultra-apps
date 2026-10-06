import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { KundliLoader } from "@/components/kundli/KundliLoader";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("kundli");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function KundliPage() {
  return <KundliLoader />;
}
