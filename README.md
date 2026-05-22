# Veek Travel eSIM — Proposal Site

A standalone, password-protected proposal website that presents a **Travel eSIM** opportunity for **Veek** — Brazil's digital-first MVNO. Branded in Veek's CI, written in English, sized against Veek's 5M MVNO customer base with a 10–20% annual penetration target.

## What's in this repo

| Path | What it is |
|------|------------|
| `proposal-veek-esim.md` | Canonical long-form proposal narrative (the source-of-truth text). |
| `src/content/proposal.ts` | Structured content consumed by the React sections. |
| `src/components/sections/` | Modular page sections (Hero, Business Case, etc.). |
| `src/app/` | Next.js App Router entry points. |
| `docs/` | Project documentation — scope, structure, assumptions, brand, deployment, tracking. |

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Vercel auto-deploys `main`. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for project setup, env vars, password protection, and custom-domain steps.

## Docs

- [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) — what this is and who it's for
- [docs/SCOPE.md](docs/SCOPE.md) — pages, sections, and what's explicitly excluded
- [docs/STRUCTURE.md](docs/STRUCTURE.md) — folder layout and section composition rules
- [docs/ASSUMPTIONS.md](docs/ASSUMPTIONS.md) — directional caveats and validation list
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — GitHub + Vercel setup, env vars, contact form
- [docs/TRACKING_PLAN.md](docs/TRACKING_PLAN.md) — analytics, events, LGPD posture
- [docs/BRAND.md](docs/BRAND.md) — Veek CI tokens, voice, do's and don'ts

## Confidentiality

This proposal is confidential to Veek and the MVNE partner. The deployed site **must be password-protected** before any external URL is shared. See `docs/DEPLOYMENT.md` for the env-var-driven HTTP Basic Auth approach.
