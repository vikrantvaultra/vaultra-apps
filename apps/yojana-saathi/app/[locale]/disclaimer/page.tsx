import { StaticPage, staticPageMetadata } from "@/components/pages/StaticPage";

export const generateMetadata = () => staticPageMetadata("disclaimer");

export default function Page() {
  return <StaticPage page="disclaimer" />;
}
