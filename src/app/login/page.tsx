import Image from "next/image";

export const metadata = {
  title: "Sign in — Veek eSIM Proposal",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ error?: string; next?: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error, next } = await searchParams;
  const hasError = error === "1";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_30%_30%,#0369A1_0,transparent_50%),radial-gradient(circle_at_75%_80%,#38bdf8_0,transparent_45%)]"
      />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white shadow-2xl shadow-black/30">
          <div className="flex flex-col items-center px-8 pt-10 pb-8">
            <Image
              src="/images/veek-logo.svg"
              alt="Veek"
              width={320}
              height={120}
              priority
              className="h-12 w-auto"
            />
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
              Confidential proposal
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F172A]">
              Enter site password
            </h1>
            <p className="mt-2 text-center text-sm text-slate-500">
              This proposal is shared privately with Veek. Please enter the
              password to continue.
            </p>

            <form
              method="POST"
              action="/api/login"
              className="mt-8 w-full space-y-4"
            >
              {next ? <input type="hidden" name="next" value={next} /> : null}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  autoFocus
                  placeholder="Password"
                  className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#0369A1] focus:ring-2 focus:ring-[#0369A1]/20"
                />
              </div>
              {hasError ? (
                <p className="text-center text-sm text-[#cd2026]">
                  Incorrect password. Please try again.
                </p>
              ) : null}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0369A1] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#075985]"
              >
                Unlock
              </button>
            </form>
          </div>
          <div className="rounded-b-3xl border-t border-slate-100 bg-slate-50 px-8 py-4 text-center text-xs text-slate-400">
            Prepared by Veek
          </div>
        </div>
      </div>
    </main>
  );
}
