import Game from "@/components/Game";
import { SITE_URL } from "@/lib/site";

// Fully static. Old-style ?s=&r=&d= links still show the challenge banner (read client-side).
export default function Home() {
  return <Game siteUrl={SITE_URL} />;
}
