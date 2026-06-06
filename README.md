# Rohit Kalita — Portfolio

A personal portfolio built as a product, not a résumé. Interactive, opinionated, and designed to show *how I think* — an interactive terminal hero, a career "changelog," a git-diff career story, and a Decision Simulator that puts the visitor in the PM's seat.

**Live sections:** Interactive terminal → The Story So Far → Changelog → Case Files → Decision Simulator → How I Work → Contact.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript 5, React 19 |
| Styling | Tailwind CSS v4 + CSS custom properties (design tokens) |
| Animation | [Framer Motion](https://www.framer.com/motion/) 12 |
| Icons | [lucide-react](https://lucide.dev) |
| Fonts | Inter + JetBrains Mono via `next/font/google` |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Does |
|--------|------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

---

## Project Structure

```
app/
  page.tsx              # Single-page composition (all sections)
  layout.tsx            # Root layout, fonts, metadata
  globals.css           # Design tokens + global styles
  not-found.tsx         # 404
  cases/[slug]/page.tsx # Dynamic case-study detail pages

components/
  ScrollProgress.tsx    # Right-rail section nav (dots)
  Hero.tsx              # Interactive terminal (typewriter + command prompt)
  About.tsx             # "The Story So Far" — Brief (git-diff) / Full story toggle
  Experience.tsx        # Career timeline as a changelog (v1.0 → v3.0)
  Projects.tsx          # Case Files grid
  DecisionSimulator.tsx # "What would you have shipped?" interactive
  Stack.tsx             # "How I Work" — tools + beliefs
  Footer.tsx            # Contact (copy-email, socials, status chips)
  GeometricAvatar1.tsx  # Generative avatar
  ReadingProgress.tsx   # Scroll progress bar on case pages

lib/
  cases.ts              # All case-study content (typed)

public/
  cases/                # Case-study images
```

---

## Editing Content

Case studies are **data-driven** — no JSX edits needed. Each case is an object in [`lib/cases.ts`](lib/cases.ts) following the `CaseFile` type:

```ts
{
  id, slug, label, company, tags,
  headline, context, problem,
  what_i_did: string[],
  outcome, learnings, honest_take,
  image?: "/cases/<file>.png"   // optional hero image
}
```

Add a case → it appears in the **Case Files** grid and gets its own page at `/cases/<slug>` automatically.

The Hero terminal's commands live in the `COMMANDS` map in [`components/Hero.tsx`](components/Hero.tsx) (`projects`, `experience`, `about`, `contact`, `whoami`, `clear`).

---

## Design System

The theme is dark with a single blue accent. Tokens live in [`app/globals.css`](app/globals.css):

```
--bg-primary / secondary / tertiary   # surfaces
--text-primary / secondary / tertiary # type
--accent: #3B82F6                      # the one accent
--terminal-text / --terminal-cursor    # terminal styling
--diff-add / --diff-remove             # git-diff career story colors
```

Prefer these tokens over hardcoded values when extending the UI.

---

## Deploy

Deploys on [Vercel](https://vercel.com) — push to the connected branch, or run `vercel`.
