# Studio Space Client

A single-package Next.js App Router site (`src/app`). This is a UI-first project: build visual interfaces with static/placeholder content. There is no backend, API layer, or test suite.

## Project rules (owner-defined)

- **UI/UX first:** premium, unique, creative, professional design — avoid generic templates. Strong typography, consistent spacing, polished on desktop, tablet, and mobile.
- **Functionality only when requested:** never add backend logic, API integrations, state management, or complex interactions unless explicitly asked. When asked for a section or page, build only its visual interface.
- **Implement only what is asked:** no over-engineering, extra components, or new dependencies without need. Don't change unrelated files or existing functionality.

## Commands

- `npm run dev` — Turbopack dev server. Note: it also (re)writes the managed Next.js block at the bottom of this file.
- `npm run lint` — ESLint flat config (`eslint-config-next`).
- `npm run build` / `npm run start` — production build / serve.
- No test or typecheck script exists. Type-check with `npx tsc --noEmit`.

## Stack quirks

- **Next.js 16.4 + React 19 with React Compiler on** (`babel-plugin-react-compiler`), plus `cacheComponents` and `partialPrefetching` in `next.config.ts`.
- **Tailwind CSS v4 is CSS-first** — no `tailwind.config` file. Design tokens live in `src/app/globals.css` under `@theme inline`; CSS compiles via the `@tailwindcss/turbopack` loader rule in `next.config.ts`. Add new tokens there.
- **shadcn style is `base-nova`** (see `components.json`): generated components in `src/components/ui/` are built on `@base-ui/react`, **not Radix**. Add components with `npx shadcn add <name>`. `cn()` is re-exported from the `cn` npm package via `src/lib/utils.ts` (not clsx + tailwind-merge).
- Fonts load through `next/font` in `src/app/layout.tsx` (currently Josefin Sans).

## Editing this file

Custom content must stay **outside** the `<!-- BEGIN:nextjs-agent-rules -->` … `<!-- END:nextjs-agent-rules -->` markers below. `next dev` replaces everything between the markers with its canonical block, so anything placed inside is silently deleted on the next run.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
