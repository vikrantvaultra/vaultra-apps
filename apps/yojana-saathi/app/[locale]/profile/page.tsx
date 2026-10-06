import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProfileView } from "@/components/account/ProfileView";
import { PageHero } from "@/components/layout/PageHero";
import { allCards } from "@/lib/schemes";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("profile");
  return { title: t("metaTitle"), robots: { index: false } };
}

export default async function ProfilePage() {
  const t = await getTranslations();
  return (
    <>
      <PageHero crumbs={[{ href: "/", label: t("browse.breadcrumbHome") }, { label: t("profile.title") }]} title={t("profile.title")} description={t("profile.subtitle")} />
      <div className="container-page max-w-4xl py-8 lg:py-10">
        <ProfileView cards={allCards()} />
      </div>
    </>
  );
}
