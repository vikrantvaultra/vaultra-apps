import { StaticPage, staticPageMetadata } from "@/components/pages/StaticPage";

export const generateMetadata = () => staticPageMetadata("terms");

export default function Page() {
  return <StaticPage page="terms" />;
}
