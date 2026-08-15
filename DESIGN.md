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
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
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

## Typography

Three families, each functionally justified rather than decorative: **Big Shoulders Display** (condensed industrial grotesk) carries every heading — its steelworks-adjacent character matches an equipment brand without leaning on an overused "editorial serif" or "SaaS geometric sans" default. **Archivo** carries body copy and UI labels — a technical, warm-enough grotesk with a full weight range. **JetBrains Mono** is reserved exclusively for measured or tabular content: spec-sheet figures, commercial terms (10%, 12x), the gauge label, the hang-tag countdown — never used as a generic "technical" costume on prose.

Display sizes clamp between `2.1rem` and `6rem` (the craft ceiling); body measure stays 62ch; tracking never drops below the `-0.04em` floor.

## Layout

Full-bleed sections alternate density deliberately: a dense hero, a quiet full-width statement, a dense annotated-diagram section, alternating photo/copy blocks, a nameplate panel, a data table, a ticket-style commercial block, and an FAQ — one consistent spacing rhythm throughout (more space above a heading than below it), never a uniform repeating card grid as the page's structural spine. Breakpoints: mobile burger nav below 860px, single-column stacking below ~900–980px per section, nameplate grid drops from 3 to 2 columns below 640px.

## Elevation & Depth

Flat/matte for structural panels (nameplate, ticket) — depth is signaled through material (brushed-metal gradient texture, rivets, hairline rules) rather than shadow. Photography and floating elements (hero photo frame, hang-tag, ticket, FAB) carry soft, offset shadows (`0 40px 80px -30px rgba(0,0,0,.7)`-class values) — never a zero-offset colored glow standing in for depth.

## Shapes

Small consistent radius (`3px` controls, `6–10px` panels) — enough to soften without softening into a generic rounded-SaaS register. Circular forms are reserved for the badge/stamp and gauge motifs, echoing the product's own dials and the logo's ring.

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
