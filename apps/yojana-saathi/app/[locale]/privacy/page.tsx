import { StaticPage, staticPageMetadata } from "@/components/pages/StaticPage";

export const generateMetadata = () => staticPageMetadata("privacy");

export default function Page() {
  return <StaticPage page="privacy" />;
}
