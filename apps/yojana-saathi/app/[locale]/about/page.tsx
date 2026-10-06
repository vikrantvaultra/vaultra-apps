import { StaticPage, staticPageMetadata } from "@/components/pages/StaticPage";

export const generateMetadata = () => staticPageMetadata("about");

export default function Page() {
  return <StaticPage page="about" />;
}
