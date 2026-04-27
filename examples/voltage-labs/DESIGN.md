# Voltage Labs — DESIGN.md

This is the format Claude Design ingests directly.

Drop this file into Claude Design at claude.ai/design and your projects auto-skin.

---

## 1. Visual Theme & Atmosphere

Cinematic dark. Pure black canvas. Electric cyan accent. Geometric sans display type. Mono eyebrows.

Reference brands: RunwayML, NVIDIA, ElevenLabs, Linear (dark mode).

Atmosphere: a control room at 11pm. Quiet. Precise. The numbers on screen are doing something real.

Tone: declarative, numbers-first, technical without being inaccessible. No hype, no hedge.

---

## 2. Color Palette & Roles

```css
--color-cyan: #00d4ff;        /* Accent. ≤6% of any frame. Glows on void. */
--color-pearl: #f5f5f7;       /* Primary text on dark. Slightly off-white. */
--color-iron: #2c2c30;        /* Borders. */
--color-void: #000000;        /* Default canvas. Pure black. */
--color-charcoal: #0a0a0c;    /* Cards, elevated surfaces. */
--color-graphite: #16161a;    /* Higher elevation, hover. */
```

Role mapping:

- Accent: cyan on one CTA, one number, one eyebrow per frame.
- Text primary: pearl on void or charcoal.
- Text secondary: fog (#98989d).
- Borders: 1px iron on cards.
- Elevation: void → charcoal → graphite, three steps.

---

## 3. Typography Rules

Heading: Space Grotesk (700 / 600). Geometric, slightly mechanical.

Body: Inter (400 / 500).

Mono: JetBrains Mono. For eyebrows, code, technical labels.

Hard rules:

- Eyebrows are mono. Always.
- Hero line-height tight (1.05).
- Display scale (120px) only on landing heroes.
- Body 16px minimum.
- Tracking -0.02em on hero. -0.04em on display.

Stack:

- Display: Space Grotesk 700, 120px, line-height 1.05.
- Hero: Space Grotesk 700, 88px.
- H1: Space Grotesk 700, 64px.
- Body: Inter 400, 16px, line-height 1.5.
- Eyebrow: JetBrains Mono 500, 11px, 0.12em tracking, uppercase, in cyan.

---

## 4. Component Stylings

**Cards.** Charcoal background. 1px solid iron border. 6px corner radius. 24-40px padding. Internal hierarchy: mono eyebrow in cyan, then card title in Space Grotesk 600, then body in Inter.

**Pills (eyebrow, tag).** 4px corner radius. Iron border, transparent fill. Mono text in cyan or pearl.

**Buttons (CTA).** Cyan background, void text, 6px radius. Hover: lighten 10%. Press: translate Y by 1px. Or: void background, cyan border 1px, cyan text — the secondary CTA.

**Inputs.** Charcoal background, 1px iron border, 6px radius. Focus: cyan border, 0 0 0 3px rgba(0, 212, 255, 0.2) ring.

---

## 5. Layout Principles

4px base unit.

Landing pages (1440 wide): 96px outer margin, 12-column grid with 32px gutter.

Carousel (1080×1350): 64px outer margin, footer module 100px tall.

Banner (1584×396): centered hero left, logo bottom-right, 64px margin.

Pitch deck (1920×1080): 120px outer margin, single-column for hero slides, two-column for data slides.

Generous void around content. The empty space is the brand.

---

## 6. Depth & Elevation

No shadows.

Elevation through dark layering: void → charcoal → graphite. Three steps, each ~1% lighter.

A card lifts because its background is charcoal against void. A modal lifts because its background is graphite against charcoal.

One exception: focus states use a `0 0 0 3px rgba(0, 212, 255, 0.2)` glow on inputs and primary buttons. The cyan glow signals interactivity.

---

## 7. Do's and Don'ts

**Do:**

- Use cyan on one CTA, one number, one eyebrow per frame.
- Use mono eyebrows. Always.
- Use specific numbers in any copy ($50M, 6 weeks, 18 months, 35 minutes).
- Use generous void around hero text.
- Use case studies with measurable outcomes.

**Don't:**

- Don't use serifs.
- Don't use cyan on body paragraphs.
- Don't use SaaS gradients, glassmorphism, or backdrop blur.
- Don't use stock "AI" imagery (glowing brain, wireframe globe, neural-net visualisations).
- Don't use hedging language (may, could, potentially).
- Don't use exclamation points.

---

## 8. Responsive Behavior

Landing pages and pitch decks are the primary canvases. Mobile is secondary.

When responsive:

- Display scale collapses 120px → 64px on mobile.
- Hero collapses 88px → 48px.
- Maintain 96px desktop margin → 24px mobile.
- Body stays 16px on mobile.

Animation budget: 100-150ms `cubic-bezier(0.4, 0, 0.2, 1)`. Fast, mechanical. Cinematic Dark moves quickly. No fades over 200ms. No bounce, no spring.

---

## 9. Agent Prompt Guide

When generating artifacts in this brand:

1. Use Space Grotesk for headings. Inter for body. JetBrains Mono for eyebrows and code.
2. Pure black canvas. Cyan accent only on one CTA, one number, one eyebrow per frame.
3. Numbers are the brand's currency. Every claim has a metric.
4. Sentence rhythm tight. Average 11 words. Period-heavy.
5. No emojis, no exclamation points, no hedging.
6. Cards: 6px radius, 1px iron border, charcoal fill on void canvas.
7. Imagery: cinematic, low-key, deep shadows. No stock AI tropes.
8. Default canvases: 1440 wide for landing, 1080×1350 for LinkedIn, 1920×1080 for decks.

If the brief conflicts with any of these, stop and ask.
