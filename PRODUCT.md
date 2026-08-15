# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step. **Assumption, not confirmed by the user**: chosen because this is a single marketing landing page with no app logic — a static site loads fast, has zero maintenance overhead, and deploys trivially (GitHub Pages, Netlify, Vercel, or any static host) from the GitHub repo the user asked for. The user was asked to choose the stack directly; the question was dismissed, and the user then explicitly said to proceed ("Execute um novo projeto e salve em uma nova pasta em meu Github"), so this default was applied and disclosed rather than asked again.

## Users

**Assumption, inferred from page content, not confirmed by the user.** Primary users are owners/operators of pizzerias and food-service businesses in Brazil (page is in Portuguese, pricing in R$/Pix/cartão, delivery quoted by CEP) evaluating a professional gas pizza oven for their kitchen. They are comparing against traditional wood-fired ovens and care about production speed during service rushes, installation footprint, cleanliness/regulatory hassle of wood, and payment terms.

## Product Purpose

Bello Volpi Fornos sells the **F-400**, a professional gas-fired pizza oven (GLP or natural gas) positioned as a faster, cleaner, more practical alternative to a traditional wood-fired oven for a working pizzeria. Success for this landing page = a qualified operator contacts the business via WhatsApp to get price, freight, and availability.

## Positioning

A gas oven that gives a pizzeria kitchen wood-fired-caliber output (pizza ready in up to ~2 minutes) without the operational overhead of wood: no ash/soot, no fuel storage, dial-in control via GLP/natural gas, and a front viewing window to monitor the bake. Compact footprint (Ø400mm pizza / 454mm hearth) built for real service rhythm, not a showpiece.

## Operating Context

Sold direct via WhatsApp Business conversation (every CTA on the current site routes to a pre-filled WhatsApp message) — there is no on-site checkout or lead form. Freight is quoted per-CEP on request. Stock is "pronta entrega" (ready to ship) subject to availability, confirmed by the sales rep, not by real-time inventory.

## Capabilities and Constraints

- Fuel: GLP (bottled gas) or natural gas, confirmed at order time.
- Pizza capacity: up to Ø400mm diameter; hearth (lastro) Ø454mm.
- Footprint: base 480mm, height 580mm, weight 36kg.
- Build: painted aluminum body, brushed aluminum dome, front viewing window.
- Commercial terms as currently advertised: 10% discount on Pix payment, up to 12x on card, freight quoted per request, ready-to-ship stock subject to availability.
- No checkout, cart, or pricing shown on-page by design — price is disclosed only via WhatsApp conversation. **This is a preserved product/business constraint, not a limitation to design around.**
- Contact: WhatsApp (11) 94012-8477, Instagram @bellovolpifornos, based in São Caetano do Sul, SP.
- Undecided / not confirmed: exact target price point, whether other oven models exist beyond the F-400, whether the business wants this rebuilt page to eventually replace the live `chatgpt.site` page or run alongside it.

## Brand Commitments

- Name: **Bello Volpi Fornos** (brand) / **F-400** (model). Preserve as-is.
- Existing logo: circular badge mark — dotted ring border, an oven-dome glyph at top, "FORNOS" in tracked small caps, "BELLO" in bold slab caps, "Volpi" in brush script — a workshop/heritage badge treatment. Treat as a binding asset (`assets/bello-volpi-logo.png`), not to be redrawn.
- Existing product photography: two real photos of the physical F-400 unit — red-and-brushed-steel body, analog pressure gauge, digital temperature/timer display, leather-wrapped handle, front viewing window (`assets/f400-black.jpeg` on black, `assets/f400-ambient-v2.png` on a warm ember-lit backdrop). These are real product assets, not stock imagery — reuse them; do not invent alternate product depictions.
- Voice on the live page: short, confident, benefit-first Portuguese copy ("A melhor pizza. No menor tempo."), industrial/technical vocabulary for specs (ficha técnica presented like a spec sheet), a direct wood-oven vs. F-400 comparison table. Tagline "A melhor pizza, no menor tempo." repeats in the footer — treat as the brand line.

## Evidence on Hand

- Full copy, FAQ, and technical spec table captured from the live page at `https://bello-volpi-f400.khalled657986.chatgpt.site/` (content inventory below). Reused verbatim as product truth; only the visual system is being replaced.
- Real logo and two real product photos downloaded to `assets/`.
- No testimonials, press, or case studies exist on the source page — none should be fabricated.

### Content inventory (from source page, Portuguese, preserved as copy)

- Hero: "A melhor pizza. No menor tempo." / "Performance profissional para sua pizzaria produzir com ritmo, controle e a assinatura que seus clientes esperam." / badge "Pronta entrega • São Caetano do Sul, SP" / "F—400 · Até 2 min para sua pizza ficar pronta*"
- Commercial strip: 10% desconto no Pix · 12x no cartão · frete sob consulta (Brasil)
- 4 feature cards: Ritmo de produção (pizza pronta até 2 min) · Operação limpa (sem lenha/fuligem) · Controle prático (GLP ou gás natural, visor da cúpula) · Construção durável (alumínio pintado + cúpula escovada)
- Design & performance block: "Compacto no espaço. Grande na entrega." + 3 checks: Visor frontal / Dois combustíveis / Pronta entrega
- Ficha técnica: Ø400mm pizza · 454mm lastro · 480mm base · 580mm altura · 36kg peso · GLP/GN gás · alumínio (cúpula escovada com visor e corpo com pintura)
- Comparison table F-400 vs. forno a lenha tradicional across Espaço / Limpeza / Praticidade / Mobilidade
- Commercial CTA block repeating 10% Pix / 12x cartão / pronta entrega
- FAQ (5 Q&A) on gas type, pizza size, national delivery, payment terms, immediate availability
- Footer: tagline, phone, city, Instagram handle, © 2026

## Product Principles

1. **Price stays a conversation, not a number on the page.** Every commercial CTA leads to WhatsApp with the prefilled message already used on the source site; never show a final price or add a form/checkout.
2. **Spec-sheet honesty.** Technical claims (2 min bake, Ø400mm, 36kg, etc.) are load-bearing trust signals for a professional buyer — present them precisely, never round them away for style.
3. **Real hardware, not stock imagery.** The oven's actual photography and badge logo are the product's proof; the redesign should showcase them larger and better, not replace them with generic illustration.
4. **Operator, not consumer.** The buyer is evaluating equipment for a business, mid-shift — copy and layout should respect a fast, skeptical, comparison-shopping reader, not a food-blog audience.
5. **Preserve the wood-oven comparison.** It is the core purchase argument (gas vs. lenha) and must remain a clear, scannable comparison, not buried.

## Accessibility & Inclusion

No product-specific requirement confirmed. Build to standard WCAG AA practice (contrast, focus states, alt text, semantic headings) as baseline craft, not a stated user need.
