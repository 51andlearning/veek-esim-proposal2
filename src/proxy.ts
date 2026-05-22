import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HTTP Basic Auth gate for the Veek Travel eSIM proposal site.
 *
 * Gated by env vars (set in Vercel → Settings → Environment Variables):
 *   - SITE_PASSWORD   → if unset, the site is fully open
 *   - SITE_USERNAME   → defaults to "veek"
 *
 * Uses the Next.js 16 `proxy` file convention (replacement for the deprecated
 * `middleware` convention). Runtime is Node.js (the only runtime proxy supports).
 */
export function proxy(request: NextRequest) {
  const expectedPassword = process.env.SITE_PASSWORD;
  // If no password is configured, the site is open.
  if (!expectedPassword) {
    return NextResponse.next();
  }

  const expectedUsername = process.env.SITE_USERNAME || "veek";

  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice("Basic ".length));
      const sep = decoded.indexOf(":");
      const user = sep >= 0 ? decoded.slice(0, sep) : decoded;
      const pass = sep >= 0 ? decoded.slice(sep + 1) : "";
      if (user === expectedUsername && pass === expectedPassword) {
        return NextResponse.next();
      }
    } catch {
      // Malformed header — fall through to 401.
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Veek Travel eSIM Proposal", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export const config = {
  // Gate everything except Next.js internals and the favicon.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
