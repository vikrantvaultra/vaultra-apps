import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { SITE_URL } from "./lib/site";

const intl = createMiddleware(routing);

// Production is only meant to be reached through the vaultra-apps hub, which proxies this app from its own
// domain. next-intl builds redirects from the request host, which would send visitors to this project's
// *.vercel.app domain, so point them at the public origin instead. Local and preview runs keep their own host.
const PUBLIC_ORIGIN = process.env.VERCEL_ENV === "production" ? new URL(SITE_URL).origin : null;

export default function proxy(req: NextRequest) {
  const res = intl(req);
  const location = res.headers.get("location");
  if (PUBLIC_ORIGIN && location) {
    const url = new URL(location, req.url);
    if (url.origin === req.nextUrl.origin && url.origin !== PUBLIC_ORIGIN) {
      // Redirect responses have immutable headers, so copy them into a new one
      const headers = new Headers(res.headers);
      headers.set("location", PUBLIC_ORIGIN + url.pathname + url.search);
      return new NextResponse(null, { status: res.status, headers });
    }
  }
  return res;
}

export const config = {
  // Everything except API routes, Next internals, Vercel internals, OG images and files with an extension
  // "/" is listed separately: under basePath the app root doesn't match the pattern below
  matcher: ["/", "/((?!api|_next|_vercel|.*opengraph-image|.*\\..*).*)"],
};
