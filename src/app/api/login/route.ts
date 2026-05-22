import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

function isSafeNext(value: string | null): value is string {
  return !!value && value.startsWith("/") && !value.startsWith("//");
}

export async function POST(req: NextRequest) {
  const expected = process.env.SITE_PASSWORD;
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const nextRaw = form.get("next");
  const next =
    typeof nextRaw === "string" && isSafeNext(nextRaw) ? nextRaw : "/";

  const origin = req.nextUrl.origin;

  if (!expected || password !== expected) {
    const failUrl = new URL("/login", origin);
    failUrl.searchParams.set("error", "1");
    if (typeof nextRaw === "string" && isSafeNext(nextRaw)) {
      failUrl.searchParams.set("next", nextRaw);
    }
    return NextResponse.redirect(failUrl, { status: 303 });
  }

  const res = NextResponse.redirect(new URL(next, origin), { status: 303 });
  res.cookies.set("veek-auth", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
