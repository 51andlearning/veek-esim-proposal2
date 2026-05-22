import { NextRequest, NextResponse } from "next/server";

/**
 * Site-wide password gate.
 *
 * Set SITE_PASSWORD in Vercel → Project → Settings → Environment Variables.
 * If unset, the site is open.
 *
 * Visitors without a valid `veek-auth` cookie are redirected to /login.
 */
export function middleware(req: NextRequest) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return NextResponse.next();

  const cookie = req.cookies.get("veek-auth")?.value;
  if (cookie && cookie === expected) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  if (req.nextUrl.pathname !== "/" && req.nextUrl.pathname !== "/login") {
    url.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);
  }
  return NextResponse.redirect(url);
}

// Apply to everything except Next internals, static assets, the login page, and the login API.
export const config = {
  matcher: [
    "/((?!login|api/login|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|otf|txt|xml)).*)",
  ],
};
