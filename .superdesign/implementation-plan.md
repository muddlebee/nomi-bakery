# Implementation plan: Nomi Bakery — Cat Theme Landing Page

**Superdesign project:** `918cdb52-d552-40ef-b8ed-73046dc4788b`  
**Draft:** `79fc3a80-da0d-48f4-b3e6-e89ce40d9ea7` — *Nomi Bakery - Cat Theme Landing Page*  
**Repo:** `nomi-3` (Vite + React + Tailwind)

## Design snapshot (from `superdesign get-design`)

- Full-bleed night background image + left readability gradient.
- Header: text wordmark (**Zodiak** “nomi”, **Satoshi** supporting lines), horizontal nav, pill **VISIT US** CTA.
- Hero: large **Zodiak** headline stack (“Good coffee / Warm bread / Happy cats”), light **Satoshi** supporting copy, pill **OUR STORY** + text link **EXPLORE MENU**.
- Draft-only sections not yet in app: right-column “Today’s Goodies” glass card, bottom floating multi-feature bar + circular quote badge, extra starfield / corner paw marks.

## Completed in codebase (this pass)

1. **Typography**
   - Load **Zodiak** (400 / 500 / 700) and **Satoshi** (300 / 400 / 500 / 600) via Fontshare in `index.html`.
   - Map Tailwind `font-display` → Zodiak and `font-sans` → Satoshi in `tailwind.config.js`.
   - Replace raster logo with **LogoWordmark** (のみ + nomi + subtitle) using Zodiak + Satoshi weights aligned to the spec.
   - Hero `h1`: Zodiak weights 400 / 500 / 700 across lines; body blurb: Satoshi **light** (300).

2. **Alignment with draft tokens (partial)**
   - Draft CSS variables (`--color-gold`, `--color-cream`, etc.) are **not** wired yet; current page keeps existing hex palette. Next step is to centralize tokens (Tailwind theme or CSS variables) and reconcile names.

## Phase A — Parity with draft layout (medium effort)

1. **Hero grid**
   - On `lg+`, mirror draft `grid lg:grid-cols-2`: left column = existing hero; right column = “Today’s Goodies” card (static content first; CMS later if needed).
   - Preserve current mobile stacking (single column).

2. **Bottom floating bar**
   - Port draft `.floating-bar` strip: four feature columns + circular testimonial; hide or simplify on small breakpoints (horizontal scroll or accordion) to avoid clutter.

3. **Decorative layers**
   - Unify star treatment (draft `star-twinkle` vs existing `.nomi-star` keyframes): either merge animations or match timing to draft.

## Phase B — Component structure & assets

1. Split `App.tsx` into `components/` (`Header`, `Hero`, `FeatureBar`, etc.) once Phase A grows the JSX surface.
2. Replace remote draft background URL with continued use of local `/background.png` (already matches intent); keep Supabase URL only as reference.
3. Icons: draft uses Iconify; app uses inline SVG. Decide one approach for consistency (keep SVG for bundle control, or add Iconify if faster iteration is preferred).

## Phase C — Superdesign workflow (optional)

1. If iterating visually again: `superdesign iterate-design-draft --draft-id 79fc3a80-da0d-48f4-b3e6-e89ce40d9ea7 --mode branch --context-file src/App.tsx` (add line ranges only if files exceed tool limits).
2. Consider `superdesign execute-flow-pages` if the draft expands to multiple routes (menu, gallery, contact).

## Verification checklist

- [ ] Fonts render (network allows `api.fontshare.com` / `cdn.fontshare.com`).
- [ ] Header wordmark scales on `compact` vs `featured` without clipping next to **VISIT US**.
- [ ] Lighthouse / a11y: single logical `h1` per view remains the hero headline; logo is plain text (no duplicate `h1`).
- [ ] Visual diff against draft at 1440 / 1024 / 390 widths after Phase A.
