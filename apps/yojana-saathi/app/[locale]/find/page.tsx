import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FindFlow } from "@/components/find/FindFlow";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("find");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function FindPage() {
  return <FindFlow />;
}
