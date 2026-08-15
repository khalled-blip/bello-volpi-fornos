# Bello Volpi F-400

Landing page for the Bello Volpi F-400, a professional gas-fired pizza oven. Static HTML/CSS/JS — no build step, no dependencies.

## Run locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Structure

- `index.html` — the page
- `styles.css` — all styling (self-hosted fonts, no external CSS)
- `script.js` — nav state, scroll-progress gauge, spec-sheet count-up
- `assets/` — real product photography and logo (from the brand's own assets), plus web-optimized variants
- `fonts/` — self-hosted Big Shoulders Display, Archivo, JetBrains Mono (woff2)
- `PRODUCT.md` — product/business context this build is grounded in
- `DESIGN.md` — the visual system this build committed to (palette, type, components, do's/don'ts)

## Deploying

This is a static site — it can be deployed as-is to GitHub Pages, Netlify, Vercel, or any static host. No environment variables or build step required.

## Content note

All commercial CTAs route to a pre-filled WhatsApp message (`(11) 94012-8477`), matching the source site's sales flow. No price is displayed on-page by design — pricing is a WhatsApp conversation, per `PRODUCT.md`.
