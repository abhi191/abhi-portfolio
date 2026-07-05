# Frontend notes for this repo

This file exists for agents (and future-me) working on this codebase. It captures
the design system, conventions, and hard-won gotchas from the redesign that
turned this into the "Ink & Signal" system currently live. Read this before
touching visual code — it'll save you from re-learning things the hard way.

For the non-technical, content-editing guide (adding projects, images, colors)
see `README.md`. This file is engineering-facing.

This redesign was built with the **`design-taste-frontend`** Claude Code
skill (an anti-"AI slop" frontend skill covering typography, color, layout,
and motion defaults): https://github.com/Leonxlnx/taste-skill. If you're
picking up further visual work on this repo, install and invoke that skill
first — most of the "Anti-patterns" section below is a direct distillation
of its rules.

## Stack

- React 19 + Vite 6, TypeScript. Hash-based routing (`App.tsx` parses
  `window.location.hash`, no router library).
- Tailwind is loaded via `<script src="cdn.tailwindcss.com">` in `index.html`,
  **not** a real build step. Theme customization lives in the inline
  `tailwind.config` script block in the same file. Arbitrary CSS-var-backed
  colors work fine there (see below) — don't assume you need a PostCSS setup
  to extend the palette.
- Motion (`motion/react`, the current name for Framer Motion) is the animation
  library. Prefer `whileInView` / `useScroll` over hand-rolled
  `IntersectionObserver` + state, and never `window.addEventListener('scroll')`
  for animation-driving state — it re-renders on every frame.
- `canvas-confetti` powers the footer's 90s-mode easter egg. Leave it alone;
  it's intentional, not leftover code.

## Design system: "Ink & Signal"

Neutral paper + off-black ink + exactly one signal accent color. The whole
point of the system is that it stays coherent no matter which accent is
active, so **never hardcode a color that should be the accent** — route it
through the CSS custom properties below.

### Tokens (defined in `index.html`, `:root`)

- `--accent-rgb` — raw `R G B` triplet (space-separated, no commas) so Tailwind
  can do `rgb(var(--accent-rgb) / <alpha-value>)` for opacity variants like
  `bg-brand-accent/10`.
- `--accent` — hex string, used where JS needs a plain color (e.g. canvas
  drawing in `InteractiveGrid.tsx`).
- `--accent-contrast` — the text color that sits on a *solid* accent fill
  (paper-white on dark accents, ink-black on light accents like lime/yellow).
  Used for things like button text on an accent background.
- `--accent-text` — the color accent-as-text uses. For most hues this equals
  `--accent`, but for very light hues (lime, yellow) it can be a value the
  component chooses to keep contrast/legibility on the paper background,
  without touching the pure hue used elsewhere (dot grid, underlines, card
  tints, fills).

### CSS classes

- `.accent-word` — **display/hero-scale only.** Colored text with a hairline
  ink outline (`-webkit-text-stroke`), used for the kinetic hero word. The
  outline is what keeps very light accents (lime, yellow) legible at large
  sizes without darkening the fill. Don't reuse this for body-sized text —
  the stroke reads as heavy-handed at small sizes.
- `.accent-text` — **body/UI-scale.** Color only, no outline. Use this for
  resume headline, company names, About page inline highlights, anything
  that isn't a big display word.
- `bg-brand-accent/10` etc. — Tailwind opacity utilities work directly on the
  accent because of the `rgb(var(--accent-rgb) / <alpha-value>)` trick in the
  `tailwind.config` colors block. Don't hardcode `rgba(...)` accent tints.

### The accent switcher (`components/AccentSwitcher.tsx`)

Visitor-facing, not a dev tool — it ships. Defaults new visitors to Vermilion
(red); a manual pick is persisted to `localStorage` (`portfolio-accent` key)
so returning visitors keep their choice instead of it resetting. `ACCENT_OPTIONS`
is the single source of truth for the palette (six curated hues); add new
accents there, including a `text` value if the hue needs a distinct
body-text-legible variant.

## Component map (what to touch for what)

- `Hero.tsx` — kinetic word-reveal headline. Each word is wrapped in an
  `overflow-hidden` mask box for the slide-up entrance animation, followed by
  the "Designed for" logo strip as a separate section directly below (not
  inside the hero — see the anti-patterns section below on why).
- `FeaturedSection.tsx` — sticky-stack work gallery; cards pin under the
  header as the next one slides over.
- `AboutPage.tsx` — asymmetric intro (type + portrait), hairline-divided
  philosophy/journey sections, no cards.
- `ResumePage.tsx` — hairline experience rows, no timeline dots/card
  backgrounds. Two separate content conventions on purpose (see below).
- `icons.tsx` — hand-rolled SVG icons AND real company logos live here
  together. See the logo-color rule below before adding a new one.
- `InteractiveGrid.tsx` — canvas dot-grid background; reads `--accent` live
  via a `getComputedStyle` sync on an `accentchange` custom event, so it
  updates when the switcher changes without a re-render.

## Gotchas learned the hard way this session

1. **Italic/bold descenders clip inside animation mask boxes.** Any word
   wrapped in `overflow-hidden` for a slide-up reveal needs `pb-3 -mb-3` (padding
   to give descenders like g/y/p room, negative margin to cancel the resulting
   baseline shift). This bit us twice — once on an italic word, again on an
   upright word with a 'g' — because the mask box is sized to the tight line
   height and a bold glyph's descender loop can extend past it. If you add a
   new word-reveal animation, apply this to *every* word, not just ones that
   look "the same" as ones that clipped before.

2. **Two logo-coloring conventions, don't mix them up.** Real, recognizable
   multi-color brand logos (Google, Toast) keep their **hardcoded real hex
   values** — don't convert them to `currentColor`. Single-color wordmark
   logos where the mono-line treatment reads as intentional (Cresta, VMware,
   SAP) use `fill="currentColor"` so they follow the ambient
   `text-brand-dark/70 hover:text-brand-dark` muted/hover treatment applied in
   the "Designed for" strip. Converting a real brand mark to `currentColor` (or
   vice versa) is the kind of change that looks fine in isolation and wrong
   next to the others.

3. **Dev-server confusion across worktrees.** When previewing a redesign
   in parallel with the live site, two Vite servers were run pointed at two
   different checkouts (main repo root vs. a `.claude/worktrees/` git
   worktree). After merging the worktree branch back into `main`, a later
   edit was made to the main repo's copy of a file but the preview server was
   still serving the *stale worktree checkout* on that port — the change
   correctly didn't appear because it was, quite reasonably, never in that
   directory. If you're running two servers to compare versions, know which
   directory each one actually points at, and repoint/kill worktree-based
   servers once the branch is merged — don't leave them running as a trap.

4. **`git add -A` will happily stage nested git checkouts as broken
   gitlinks.** A worktree living inside the repo directory (e.g.
   `.claude/worktrees/<name>`) has its own `.git`, so a blanket `git add -A`
   from the parent repo stages it as an opaque gitlink entry that won't
   resolve for anyone else who clones the repo. `.claude/worktrees/` and
   `.claire/` are now in `.gitignore` for this reason — if you create a new
   kind of nested checkout, ignore it too, and double check `git status`
   after any `-A` add for stray gitlink/embedded-repo warnings.

5. **Never force-push without diffing what you're about to overwrite.**
   Mid-redesign, `origin/main` had diverged with an entirely separate,
   independently-merged redesign attempt (different branch, different design
   direction, same files). Before any force-push, run
   `git diff --stat <merge-base> origin/main` and actually look at what's
   being discarded — don't assume a rejected push just means "pull and
   retry."

## Content conventions (data files)

- `data/about.ts` → `journey.history` — each entry is one flowing **narrative
  paragraph** in `description` (see Google/Cresta entries). This is
  intentional voice for the About page; don't switch it to bullets.
- `data/resume.ts` → `experience` — each entry has a `bullets: string[]`
  array instead. This is the resume's intentional voice (scannable,
  ATS-friendly); don't switch it to a paragraph.
- Both files list experience **most-recent-first**; new roles get inserted at
  the top of the array, not appended.
- Location format is consistently `City, Country` (e.g. `Toronto, Canada`),
  not `City, Region, Country` — trim region/province even if the source
  material (like a LinkedIn export) includes it.
- Date ranges: full or abbreviated month names are both present in the
  existing data (inconsistent, not worth a global fix); match whichever
  entries are closest in the list rather than introducing a third format.

## Anti-patterns this redesign deliberately moved away from

If you're tempted to add any of these, don't — they were specifically
identified and removed as generic "AI-generated site" tells:

- Purple/blue blurred aurora blobs behind hero text, or a rainbow
  `background-clip: text` gradient on a name/headline.
- A "Scroll ↓" affordance or animated mouse-wheel icon — if the user hasn't
  scrolled, they're looking at the hero; they know what scrolling is.
- More than one accent color live on the page at once (the whole system is
  built around exactly one).
- Mixing a serif emphasis word into an otherwise sans-serif headline (or vice
  versa) — emphasis within a headline should be italic/bold of the *same*
  font, not a different family.
- Centered-hero-over-blob as a default; this site's hero is left-aligned with
  a kinetic word reveal instead.
- A trust/logo strip crammed inside the hero copy block — it's a separate
  section directly beneath the hero here.

## Dev workflow

- `npm run dev` — Vite dev server, default port 5173.
- `.claude/launch.json` defines two preview configs (`current`, `redesign`)
  for the preview tooling; both point at the repo root now that the redesign
  is merged into `main` (there is no longer a separate worktree to compare
  against — if you spin one up again for a future redesign, remember gotcha
  #3 above).
- No test suite currently exists. Verify changes with `npx tsc --noEmit` (the
  project has no dedicated tsconfig for this, so pass `--jsx react-jsx
  --module esnext --moduleResolution bundler --target es2020 --skipLibCheck`
  manually against the files you touched) and `npx vite build` to catch
  syntax/type errors before considering a UI change done.
