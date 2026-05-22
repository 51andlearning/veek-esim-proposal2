# Structure

## Folder structure

```
veek-esim-proposal/
├── docs/                         # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                   # Static image assets (Veek lockups, illustrations)
├── src/
│   ├── app/                      # Next.js App Router entry points
│   │   ├── layout.tsx            # Root layout (Veek theme)
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Tailwind v4 + Veek theme tokens
│   ├── components/
│   │   ├── sections/             # Page sections (Hero, BusinessCase, etc.)
│   │   └── ui/                   # shadcn primitives (button, card, accordion, …)
│   ├── content/                  # Structured content (TS) for sections
│   └── lib/
│       └── utils.ts              # Helpers (cn, formatters)
├── components.json               # shadcn config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Section composition rules
- Each section lives in its own file in `src/components/sections/` and exports a default React component.
- Sections are **self-contained**: they own their layout, spacing, and any section-local subcomponents.
- Sections consume content from `src/content/` rather than hardcoding copy.
- Sections use shadcn primitives from `@/components/ui/*` for interactive elements (Buttons, Cards, Accordion, Tabs, Dialog, Dropdown).
- Sections must be composable — adding/removing one from `page.tsx` should not break others.
- Use the `cn()` helper from `@/lib/utils` for conditional class names.

## Content management approach
- Content lives in `src/content/` as TypeScript modules (one per section or one consolidated `proposal.ts`).
- Each section pulls its own content module — no global content blob.
- Copy changes should require editing only `src/content/*`, not the component code.
- Images live in `public/images/` and are referenced by path (`/images/...`).
- No CMS integration for v1. Content is code-managed and ships with deploys.

## Naming conventions
- Components: `PascalCase.tsx`
- Content modules: `kebab-case.ts`
- Utility functions: `camelCase`
- CSS custom properties and design tokens: `--veek-*` for brand-specific tokens, `--kebab-case` for everything else
