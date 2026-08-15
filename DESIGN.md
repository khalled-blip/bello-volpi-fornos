---
name: Bello Volpi F-400
description: Professional gas pizza oven, presented as a precision instrument — dark catalog world, enamel red, spec-sheet honesty.
colors:
  ink: "#110f0d"
  ink-2: "#18140f"
  ink-3: "#211b14"
  ink-4: "#2b241b"
  cream: "#f4eee1"
  cream-dim: "#d8cfbd"
  steel: "#9a9188"
  steel-2: "#6f6a62"
  red: "#c23a24"
  red-bright: "#e2502f"
  red-deep: "#6f2213"
  amber: "#e2954f"
  led: "#ff5a3c"
  # secondary material: the hero hang-tag reads as a real kraft-paper swing
  # tag, so it carries its own small paper palette rather than the
  # instrument ground — never used outside the tag.
  kraft-paper: "#d9c48f"
  kraft-ink: "#2c2213"
  kraft-twine: "#8a7a52"
  kraft-caption: "#4a3c22"
  # secondary material: the nameplate's four corner rivets, a radial-gradient
  # brushed-metal highlight/mid/shadow triad — never used outside the rivets.
  rivet-highlight: "#d9d3c6"
  rivet-mid: "#6b6459"
  rivet-shadow: "#37322a"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 5.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontFeature: "tabular-nums"
  # full rem scale used across UI text (see Typography section for role mapping)
  scale:
    micro: "0.55rem"
    2xs: "0.68rem"
    xs: "0.75rem"
    label: "0.8rem"
    sm: "0.85rem"
    base-tight: "0.95rem"
    base: "1rem"
    md: "1.05rem"
    lg: "1.35rem"
    xl: "1.5rem"
    # fluid clamp() endpoints used by headings/subtitles beyond the `display`
    # role above — each is one named heading tier's own min/max, not a step
    # meant to be picked standalone.
    hero-subtitle-min: "1.05rem"
    hero-subtitle-max: "1.2rem"
    section-heading-max: "4rem"
    hero-title-min: "2.75rem"
rounded:
  hairline: "1px"
  sm: "3px"
  md: "6px"
  lg: "10px"
  full: "50%"
shadows:
  xs: "0 1px 0 rgba(0,0,0,.2)"
  sm: "0 1px 2px rgba(0,0,0,.6)"
  md: "0 18px 34px -14px rgba(0,0,0,.6)"
  lg: "0 30px 60px -24px rgba(0,0,0,.65)"
  xl: "0 40px 80px -30px rgba(0,0,0,.7)"
  inset-highlight: "inset 0 1px 0 rgba(255,255,255,.06)"
  inset-shade: "inset 0 -1px 0 rgba(0,0,0,.4)"
spacing:
  edge: "clamp(1.25rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.9em 1.5em"
  button-primary-hover:
    backgroundColor: "{colors.red-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.9em 1.5em"
---

# Design System: Bello Volpi F-400

## Overview

**Creative North Star: "The Instrument Catalog"**

Bello Volpi sells a professional gas oven into a market that defaults to warm bakery-lifestyle photography, rounded friendly cards, and an orange gradient hero — the category's own visual cliché. This system refuses that arrangement and instead treats the F-400 the way a premium equipment catalog (espresso machinery, kitchen instrumentation) treats its hardware: dramatic single-source lighting on a near-black ground, a spec sheet read like a datasheet, and the oven's own physical control panel — its analog pressure gauge, its digital LED readout, its circular workshop badge — reused as the site's own iconography rather than invented from scratch.

The system is raised by the officina/workshop-badge language already true in the brand's existing logo (a dotted-ring circular badge, tracked small caps, brush-script signature) and grounded throughout in the oven's literal hardware: the gauge motif that tracks scroll progress, the LED-red glow on the spec numbers, the rivets on the "nameplate" panel. Nothing here is decorative technicality — every technical device on the page has a literal counterpart photographed on the physical product.

**Key Characteristics:**
- Near-black instrument ground, one committed enamel red (never a second saturated hue)
- Condensed industrial display face for headlines; tabular monospace exclusively for measured/technical figures, never as a "tech" costume
- Real product photography at dramatic scale, not thumbnails
- Spec-sheet and nameplate conventions (rivets, hairline rules, tabular data) standing in for card grids
- Commerce stays a WhatsApp conversation — no price ever renders on-page

## Colors

Committed color strategy: a near-black charcoal ground carries the whole surface, with enamel red — the oven's own paint color, not a generic brand red — as the single saturated accent carrying CTAs, active states, and structural bands. Warm cream (never pure white) carries text; brushed-steel grey carries secondary/meta text tinted from the same warm hue family, never plain gray. Amber and LED-red are reserved for glow/active micro-states (focus rings, the gauge needle, count-up numbers) and never used as base color.

| Role | Token | Value | Usage |
|---|---|---|---|
| Ground | `ink` | `#110f0d` | Page background |
| Panel | `ink-2` / `ink-3` / `ink-4` | `#18140f` / `#211b14` / `#2b241b` | Section and card panels, nameplate gradient |
| Primary text | `cream` | `#f4eee1` | Headings, body |
| Secondary text | `cream-dim` / `steel` | `#d8cfbd` / `#9a9188` | Subheads, meta, labels |
| Accent | `red` / `red-bright` | `#c23a24` / `#e2502f` | CTAs, links, active states, hover |
| Accent deep | `red-deep` | `#6f2213` | Pressed states |
| Highlight | `amber` | `#e2954f` | Focus ring only |
| Readout | `led` | `#ff5a3c` | Spec-sheet count-up glow only |

Two secondary materials sit outside this ground palette and are never used past their one prop: the hang-tag's **kraft paper** family (`kraft-paper` / `kraft-ink` / `kraft-twine` / `kraft-caption`) makes it read as a real swing tag rather than a UI card, and the nameplate's **rivet** triad (`rivet-highlight` / `rivet-mid` / `rivet-shadow`) is the radial-gradient highlight/mid/shadow of four brushed-metal corner rivets.

## Typography

Three families, each functionally justified rather than decorative: **Big Shoulders Display** (condensed industrial grotesk) carries every heading — its steelworks-adjacent character matches an equipment brand without leaning on an overused "editorial serif" or "SaaS geometric sans" default. **Archivo** carries body copy and UI labels — a technical, warm-enough grotesk with a full weight range. **JetBrains Mono** is reserved exclusively for measured or tabular content: spec-sheet figures, commercial terms (10%, 12x), the gauge label, the hang-tag countdown — never used as a generic "technical" costume on prose.

Fixed rem scale (`typography.scale` in the frontmatter), reused consistently rather than picked ad hoc per component:

| Step | Value | Used for |
|---|---|---|
| `micro` | `.55rem` | gauge label, nav sub-wordmark, nameplate unit suffix |
| `2xs` | `.68rem` | field labels: terms strip, nameplate `dt`, footer label, ticket stub `dt` |
| `xs` | `.75rem` | statement eyebrow, compare-table head, ticket eyebrow, faq intro copy |
| `label` | `.8rem` | small button, callout index numeral, nameplate model line |
| `sm` | `.85rem` | secondary meta: footer tagline/nameplate foot/ticket note/checklist sub-line |
| `base-tight` | `.95rem` | primary button label, body copy inside constrained columns (callouts, table cells, faq answers) |
| `base` | `1rem` | checklist headline |
| `md` | `1.05rem` | nav wordmark, stamp center mark, large button, faq summary, footer name, nameplate brand, ticket stub value |
| `lg` | `1.35rem` | callout heading |
| `xl` | `1.5rem` | hang-tag countdown value |

Fluid display steps (hero title, section headings, hero subtitle, nameplate figures) stay `clamp()`-driven rather than fixed — see the `display` token and the individual `clamp()` calls in `styles.css`. Two SVG-only labels (the circular stamp's curved text, `10.5px`/`9px`) are set in raw px because they live inside the stamp's own `viewBox` coordinate space, not the page's rem grid — sized to that badge, not the type ramp.

Display sizes clamp between `2.1rem` and `6rem` (the craft ceiling); body measure stays 62ch; tracking never drops below the `-0.04em` floor.

## Layout

Full-bleed sections alternate density deliberately: a dense hero, a quiet full-width statement, a dense annotated-diagram section, alternating photo/copy blocks, a nameplate panel, a data table, a ticket-style commercial block, and an FAQ — one consistent spacing rhythm throughout (more space above a heading than below it), never a uniform repeating card grid as the page's structural spine. Breakpoints: mobile burger nav below 860px, single-column stacking below ~900–980px per section, nameplate grid drops from 3 to 2 columns below 640px.

## Elevation & Depth

Flat/matte for structural panels (nameplate, ticket) — depth is signaled through material (brushed-metal gradient texture, rivets, hairline rules) rather than shadow. Photography and floating elements carry soft, offset shadows on a five-step ramp (`shadows` in the frontmatter, `xs`→`xl`) scaled to the element's own size — a tiny rivet gets `sm`, the hero photo frame gets `xl` — never a zero-offset colored glow standing in for depth. Panels needing a lit top edge (nameplate, rivets) add `inset-highlight`/`inset-shade` rather than a border.

## Shapes

Fixed radius scale (`rounded` in the frontmatter): `hairline` (1px, only for capping thin decorative strokes like the FAQ toggle bars — not a shape radius), `sm` (3px, controls, buttons, focus ring), `md` (6px, mid-size panels, scrollbar thumb), `lg` (10px, large panels: nameplate, ticket), `full` (50%, circles and pills — badge, dots, avatars, FAB). No arbitrary radius outside this scale.

## Components

- **Buttons**: primary = solid enamel red, cream text, small radius, offset colored shadow; hover brightens and lifts 1px; ghost = transparent with hairline border, brightens border on hover. No pill shapes, no gradients.
- **Nav**: fixed, transparent over the hero, gains an always-present blurred dark backdrop layer (revealed by opacity, not by toggling `background`/`backdrop-filter` directly on the nav element — see `styles.css` comment for why) past 12px of scroll.
- **Callouts** (feature list): a divided list with leader-style icon + index + heading + copy, not boxed cards — deliberately refuses the icon-card-grid default.
- **Nameplate** (spec sheet): a riveted brushed-metal panel; tabular mono figures; count up with an LED-red flicker the first time it scrolls into view.
- **Comparison table**: real `<table>`, F-400 column tinted with the red-tint token, never a colored border-left accent.
- **Ticket** (commercial CTA): two-column panel with a dashed perforation and circular "punch" cutouts, ledger-style term stub — borrows the register of an order ticket rather than a generic pricing card, since price itself never renders.
- **FAQ**: native `<details>/<summary>` accordion, drawn plus/minus toggle (two lines rotating), no default marker.
- **Gauge scroll indicator**: fixed bottom-left semi-circular dial with a needle that sweeps 0–180° across total scroll progress, labeled `kgf/cm²` after the oven's own pressure gauge; fades out near the footer.

## Do's and Don'ts

**Do**
- Reuse the oven's real photography and real logo; treat both as fixed brand assets.
- Keep every commercial CTA routed to the same pre-filled WhatsApp message used on the source site.
- Keep monospace scoped to measured/tabular content only.
- Keep the red accent to a single hue family (no secondary saturated color).

**Don't**
- Don't show a final price, a cart, or a checkout flow anywhere — commerce is a WhatsApp conversation by product design, not a missing feature.
- Don't introduce a second saturated accent color (e.g. a green "WhatsApp brand" button) — the WhatsApp glyph icon carries that recognition inside the existing red system instead.
- Don't reintroduce kickers/eyebrows above headings, section numbers as decoration, or uniform icon-card grids — these were deliberately refused in favor of the instrument-catalog grammar.
