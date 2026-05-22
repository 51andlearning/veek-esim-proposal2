# Deployment

## GitHub repo setup
1. Create a new GitHub repository (**private** — this proposal is confidential to Veek and the MVNE partner).
2. From the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial build: veek-esim-proposal"
   git branch -M main
   git remote add origin git@github.com:<org>/veek-esim-proposal.git
   git push -u origin main
   ```
3. Protect `main` (PRs + passing build required) once collaborators are added.

## Vercel project setup
1. In the Vercel dashboard, **Add New → Project** and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Root directory: **project root** (leave default — repo root equals project root).
4. Install command: `pnpm install`
5. Build command: `pnpm build`
6. Output directory: **leave blank** (Next.js handles this).
7. Node.js version: leave default (Vercel-managed).
8. Project name suggestion: `veek-esim-proposal` so the default Vercel URL is recognisable to reviewers.

## Root directory rules
- The repo root IS the Next.js project root.
- If the repo is later reorganised into a monorepo, set Vercel's **Root Directory** to the subfolder containing `package.json` and redeploy.

## Build command
- Local: `pnpm build`
- Vercel: `pnpm build` (configured in project settings)
- Do not commit a `vercel.json` unless routing, redirects, or function configuration require it.

## Environment variables
Manage via **Vercel → Project → Settings → Environment Variables**. Never commit secrets.

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_GA_ID` | Production, Preview | GA4 Measurement ID (optional) |
| `NEXT_PUBLIC_SITE_URL` | Production, Preview | Canonical site URL |
| `SITE_USERNAME` | Production, Preview | Basic-auth username (default: `veek`) |
| `SITE_PASSWORD` | Production, Preview | Basic-auth password — **site is open if unset** |

Add more as features land. Mirror them in a local `.env.local` (gitignored) for development.

## Password protection
The site ships with HTTP Basic Auth via **`src/proxy.ts`** (Next.js 16's replacement for the deprecated `middleware` convention). It is currently **active on production**.

How it works:
1. If `SITE_PASSWORD` is unset, the proxy is a no-op and the site is fully open.
2. If `SITE_PASSWORD` is set, every request outside `_next/static`, `_next/image`, and `/favicon.ico` is challenged with HTTP Basic Auth.
3. The username defaults to `veek` (override via `SITE_USERNAME`).

To disable: delete `SITE_PASSWORD` from Vercel → Settings → Environment Variables and redeploy.

To rotate the password: update `SITE_PASSWORD` in the dashboard and redeploy. Sensitive env vars cannot be read back once set, only overwritten.

For team-scale access control (SSO, audit logs) consider Vercel Deployment Protection on the Pro plan as an alternative.

## How to redeploy
- **Automatic:** Every push to `main` triggers a production deploy. Every PR gets its own preview deploy.
- **Manual:** Vercel dashboard → Deployments → **Redeploy** on any prior successful deployment.
- **Rollback:** Vercel dashboard → Deployments → promote a previous deployment to Production.

## Custom domain
- Post-approval, add the custom domain in Vercel → Domains and update DNS (CNAME to `cname.vercel-dns.com`, or A records per Vercel guidance).
- Suggested subdomain pattern: `proposal.veek-esim.mvne.co.za` or a Veek-owned subdomain once branding is ratified.
- Enforce HTTPS (default on Vercel).
