---
name: Bello Volpi F-400
description: Professional gas pizza oven, presented like a performance dashboard — light ground, one real brand red, live-looking metrics.
colors:
  bg: "#faf8f4"
  bg-alt: "#f2efe7"
  surface: "#ffffff"
  surface-2: "#f5f3ec"
  ink: "#17140f"
  ink-dim: "#57514a"
  ink-faint: "#6e6759"
  line: "#e7e2d6"
  line-strong: "#d8d1c1"
  red: "#c23a24"
  red-bright: "#db4a30"
  red-deep: "#9a2e1c"
  green: "#1f7a54"
typography:
  display:
    fontFamily: "Sora, -apple-system, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontFeature: "tabular-nums"
  scale:
    2xs: "0.75rem"
    xs: "0.8125rem"
    label-sm: "0.62rem"
    sm: "0.875rem"
    base: "1rem"
    md: "1.0625rem"
    ring-value: "1.15rem"
    lg: "1.25rem"
    xl: "1.5rem"
    2xl: "2rem"
    # fluid clamp() endpoints per heading tier, beyond the `display` role above
    section-heading-min: "1.9rem"
    section-heading-max: "3.4rem"
    hero-title-min: "2.6rem"
    spec-figure-min: "1.4rem"
    spec-figure-max: "1.9rem"
rounded:
  hairline: "1px"
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "24px"
  full: "999px"
shadows:
  sm: "0 1px 2px rgba(23,20,15,.06), 0 1px 1px rgba(23,20,15,.05)"
  md: "0 10px 26px -10px rgba(23,20,15,.16)"
  lg: "0 30px 60px -20px rgba(23,20,15,.2)"
spacing:
  edge: "clamp(1.25rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.red-bright}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.4em"
---

# Design System: Bello Volpi F-400

## Overview

**Creative North Star: "The Performance Dashboard"**

Pizza-oven marketing defaults to one of two moods: warm bakery lifestyle photography, or — our own prior pass on this project — a dark industrial-catalog mood board. Both were refused for this redesign. The F-400's actual argument is a number ("menor tempo," ready in ≤2 minutes) aimed at a buyer comparing equipment mid-shift, not browsing for inspiration. So the system borrows the register a modern analytics or ops product uses for its *own* marketing site: a light, confident ground; one real brand color used with intent; specs and comparisons presented as live-looking stat tiles a buyer can scan in seconds.

A circular progress-ring is the one recurring signature device — first as the hero's "≤2 min" bake-cycle stat, echoed in miniature inside the feature grid. It is a design metaphor for a printed spec, never a claim that the oven has telemetry or connectivity it doesn't have; copy never implies "live" or "monitorado" in the literal IoT sense.

**Key Characteristics:**
- Warm off-white ground, near-black ink, one real brand red carrying every action — never a second saturated color for CTAs
- A restrained status-green, scoped only to availability indicators (the "pronta entrega" pill), never used on a clickable element
- Sora for display (geometric, confident numerals), Hanken Grotesk for body/UI (legible, distinct from the default AI-site Inter/Geist/Space-Grotesk cluster), JetBrains Mono reserved for measured figures only
- Rounded, soft-shadowed cards (8/14/24px) — a full material break from the prior hairline-and-rivet instrument grammar
- Real product photography framed inside a contained "device card," never full-bleed
- Commerce stays a WhatsApp conversation — no price ever renders on-page (unchanged product constraint)

## Colors

Committed strategy: a warm off-white ground (never stark white) carries the page; near-black ink carries text; the oven's real red — unchanged from the product's actual paint color — is the single action/brand accent, used for every button, link-hover, and CTA. A second color, a muted status-green, exists but is scoped exclusively to "available/ready" indicators (the pronta-entrega pill's dot); it never appears on a button or link, so a visitor is never unsure which color means "click me."

| Role | Token | Value | Usage |
|---|---|---|---|
| Ground | `bg` | `#faf8f4` | Page background |
| Ground alt | `bg-alt` | `#f2efe7` | Alternating sections (compact, footer) |
| Surface | `surface` / `surface-2` | `#ffffff` / `#f5f3ec` | Cards, panels |
| Primary text | `ink` | `#17140f` | Headings, body |
| Secondary text | `ink-dim` / `ink-faint` | `#57514a` / `#6e6759` | Subheads, meta, labels |
| Border | `line` / `line-strong` | `#e7e2d6` / `#d8d1c1` | Card borders, dividers |
| Accent | `red` / `red-bright` | `#c23a24` / `#db4a30` | Every CTA, link hover, active state |
| Accent deep | `red-deep` | `#9a2e1c` | Button pressed state |
| Status | `green` | `#1f7a54` | Availability indicator only — never on an action |

## Typography

Three families: **Sora** carries every heading — a geometric grotesk with confident numerals, distinct from the category's warm-serif or industrial-mono defaults. **Hanken Grotesk** carries body and UI copy — legible and warm, chosen specifically to avoid Inter/Geist/Space Grotesk/Plus Jakarta Sans, the small set of faces every AI-generated interface converges on. **JetBrains Mono** is reserved for measured or tabular content only: spec-sheet figures, commercial terms, the device card's stat chips.

Fixed rem scale (`typography.scale`), reused everywhere via CSS custom properties rather than picked ad hoc: `2xs` .75rem (field labels, footer legal), `xs` .8125rem (buttons, nav links, spec labels), `label-sm` .62rem (compare badge, ring-stat/chip-stat captions — the smallest live-metric labels), `sm` .875rem (secondary body copy, table cells), `base` 1rem (body default), `md` 1.0625rem (nav wordmark, button-large, faq summary), `ring-value` 1.15rem (the hero ring's own bake-time number, one size between `md` and `lg`), `lg` 1.25rem (bento tile headings, chip-stat value), `xl`/`2xl` 1.5rem/2rem (reserved headroom). Fluid display steps (hero title, section h2, spec-card figures) stay `clamp()`-driven; their endpoints are the `*-min`/`*-max` scale entries.

## Layout

Alternating density: a dense two-column hero (copy + device card), a 3-stat commercial row, a quiet centered statement, a bento feature grid (one wide "hero" tile + three supporting tiles), a photo/copy block, a spec-sheet card, a comparison matrix, a dark commercial CTA card (the one intentional inversion — near-black on the light system, for contrast and closure), an FAQ, and a light footer. Breakpoints: mobile burger nav below 900px, hero/compact/bento stacking below 900px, stat-row/spec-grid dropping to fewer columns below 720/640px.

## Elevation & Depth

Warm-tinted shadows only (`rgba(23,20,15,…)`, never pure black) on a three-step ramp: `sm` for resting cards and buttons, `md` for hover lift, `lg` for the device card and the dark CTA card — the two most "floating" elements on the page. Flat, border-only treatment (1px `line`) for lower-emphasis panels (spec card, bento tiles at rest) so shadow always signals genuine elevation, not decoration.

## Shapes

Rounded scale (`rounded`): `hairline` 1px (only for capping thin decorative strokes, like the FAQ toggle's plus/minus bars — not a shape radius), `xs` 4px (focus ring, scrollbar thumb), `sm` 8px (buttons, small controls), `md` 14px (mid panels: device photo inset, chip corners), `lg` 24px (cards: device card, bento tiles, spec card, comparison table, dark CTA card), `full` 999px (pills, dots, avatars, FAB). A deliberately softer, larger-radius language than the prior system's tight 3–10px instrument grammar — part of the flip from "industrial hardware" to "modern software product."

## Components

- **Buttons**: primary = solid red, white text, 8px radius, soft shadow, lifts 1px on hover; ghost = white surface with a border, darkens border on hover. 44px minimum height throughout (touch target).
- **Status pill**: a rounded-full chip with a small pulsing dot — green for availability, red for "condições especiais." The dot is the only continuously-animated element carrying no text, by design: earlier work on this project animated a whole badge including its curved text labels, which made them unreadable for most of the rotation; here motion never touches anything a visitor needs to read.
- **Device card**: the hero's single self-contained visual — label row, the real product photo (contained, not full-bleed), a footer of two stat chips (the ring stat + a plain figure). Replaces the prior build's separate floating hang-tag prop with one coherent card.
- **Ring stat**: an SVG circular progress ring, continuously animated (a data-metaphor for the "≤2 min" spec, not a live-data claim), echoed at smaller scale inside the bento's primary tile in a muted tone so the hero's red ring stays the one full-saturation instance.
- **Bento grid**: one wide primary tile (icon, heading, copy, mini ring) plus three equal supporting tiles — a deliberate asymmetric composition rather than four identical icon cards.
- **Comparison matrix**: a real `<table>` styled as a SaaS feature-comparison grid — check/x glyphs per row, the F-400 column tinted and topped with a "Recomendado" pill.
- **Spec card**: a single bordered card holding the technical figures as a definition-list grid, mono figures, read like a spec sheet or API reference rather than a printed nameplate.
- **Dark CTA card**: the one near-black surface in the whole system — a deliberate inversion that reads as "closing argument," with a light ledger-style terms list beside the main copy.
- **FAQ**: native `<details>/<summary>` accordion, drawn plus/minus toggle, 44px-minimum tap row.

## Do's and Don'ts

**Do**
- Keep red the only actionable color; every button, every link-hover, every active state.
- Keep green scoped to availability/status only — never a button, never a link.
- Reuse the oven's real photography and logo; keep every commercial CTA routed to the same pre-filled WhatsApp message.
- Keep any grid that could wrap (stat rows, comparisons) built as an explicit CSS grid with a real breakpoint — never `flex-wrap` plus an adjacent-sibling divider, which orphans its own border the moment an item wraps alone (a real bug fixed twice on this project before this rebuild).
- On any `<img>` using both an HTML `width`/`height` attribute and a CSS `aspect-ratio`, always set `height: auto` in the same rule — otherwise the browser treats both dimensions as definite and silently ignores the ratio (another real bug from the prior build).

**Don't**
- Don't show a final price, cart, or checkout — commerce stays a WhatsApp conversation.
- Don't imply the oven has live/connected telemetry — the ring-stat motif is a design device for a printed spec, not a smart-oven claim the product can't back up.
- Don't animate any element that carries text a visitor needs to read continuously — only shape/data-viz elements (the ring, the status dot) get continuous motion.
- Don't reintroduce a full-bleed dark ground, rivets, or hairline-instrument chrome — that was the prior world, kept only as this file's anti-reference, not a blend target.
