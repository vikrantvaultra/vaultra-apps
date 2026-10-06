import { StaticPage, staticPageMetadata } from "@/components/pages/StaticPage";

export const generateMetadata = () => staticPageMetadata("accessibility");

export default function Page() {
  return <StaticPage page="accessibility" />;
}
