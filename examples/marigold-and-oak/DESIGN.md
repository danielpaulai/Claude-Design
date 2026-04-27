# Marigold & Oak — DESIGN.md

This is the format Claude Design ingests directly.

Drop this file into Claude Design at claude.ai/design and your projects auto-skin.

---

## 1. Visual Theme & Atmosphere

Warm editorial. Like a beautifully made independent magazine, printed on cream paper, with one terracotta accent that earns its place.

Reference brands: Claude (Anthropic), Notion, Resend.

Atmosphere: grounded, considered, soulful without being precious. The visual equivalent of a long pour-over coffee in a slow-morning kitchen.

Tone: warm, specific, story-led. Direct without being aggressive.

---

## 2. Color Palette & Roles

```css
--color-terracotta: #c8543b;     /* Accent. ≤8% of any frame. Warmer than red. */
--color-ink: #1a1814;            /* Body text, dark sections. Slight brown undertone. */
--color-sage: #7d8a73;           /* Secondary accent. Tags, soft dividers. */
--color-warm-white: #fbf8f3;     /* Default canvas. */
--color-cream: #f4ede4;          /* Cards, subtle sections. */
--color-stone: #9a8e7e;          /* Muted text, captions. */
```

Role mapping:

- Accent: terracotta on one phrase, one CTA, one eyebrow per frame.
- Text primary: ink on warm-white or cream.
- Text secondary: warm-gray-500.
- Borders: 1px warm-gray-300 on cards. 1px warm-gray-100 on UI chrome.

---

## 3. Typography Rules

Heading family: Crimson Pro (semibold).

Body family: Inter (regular).

Hard rules:

- The serif heading is the brand. Do not substitute sans.
- Body must stay sans for legibility.
- Body size 17px minimum.
- Hero text 84-110px on 1080×1350.
- Line-height 1.65 on body — Warm Editorial breathes more than Editorial Minimal.

Stack:

- Hero: Crimson Pro 600, 84px, line-height 1.15.
- H1: Crimson Pro 600, 64px.
- H2: Crimson Pro 600, 48px.
- Body: Inter 400, 17px, line-height 1.65.
- Eyebrow: Inter 500, 12px, uppercase, 0.06em tracking.

---

## 4. Component Stylings

**Cards.** Cream background. 1px solid warm-gray-300 border. 8px corner radius. 32-48px padding. Internal hierarchy: eyebrow (sage or terracotta), then card title in serif, then body in sans.

**Pills (eyebrow, tag).** 8px corner radius (not full-round — Warm Editorial is squarer). Sage fill with ink text, or terracotta fill with warm-white text.

**Buttons (CTA).** 8px corner radius. Terracotta background, warm-white text. Hover darkens 8%. Press translates Y by 1px.

**Inputs.** 1px warm-gray-300 border. 8px corner radius. Focus ring: terracotta at 30% opacity, 3px outside.

---

## 5. Layout Principles

4px base unit. Spacing scale: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Carousel slides (1080×1350): 96px outer margin. More breathing room than Editorial Minimal.

Article headers (1080×607): hero left-aligned, photograph optional right column.

One-pagers (A4 @ 300dpi): editorial column grid. Headline top, lead paragraph in serif body, supporting columns in sans.

Generous whitespace is part of the brand.

---

## 6. Depth & Elevation

Elevation through warmth, not shadow.

Cream-on-warm-white is the primary depth signal. A card lifts because its background is cream against a warm-white canvas, not because it has a shadow.

One soft shadow allowed: `0 1px 3px rgba(26, 24, 20, 0.06)` on hovering UI chrome only.

No glow effects. No inner shadows. No backdrop blur.

---

## 7. Do's and Don'ts

**Do:**

- Use terracotta on one phrase, one CTA, one eyebrow per frame.
- Use cream on warm-white for soft elevation.
- Use the serif heading boldly. Make it big.
- Use generous whitespace.
- Use naturalistic photography (golden-hour light, hands, fabric, paper).

**Don't:**

- Don't use script or "elegant" handwriting fonts.
- Don't use SaaS gradients, glassmorphism, or backdrop blur.
- Don't use stock wellness photography (woman in white doing yoga, lotus blossoms, etc).
- Don't use em dashes.
- Don't use exclamation points except in genuine quotes.
- Don't use "namaste" or "love and light" sign-offs.

---

## 8. Responsive Behavior

Editorial-print register. Most artifacts are fixed-canvas (1080×1350, A4).

When web responsive:

- Scale type with `clamp()`.
- Maintain 96px margins down to 32px on mobile.
- Body stays at 17px on mobile.

Animation budget: 200-280ms `cubic-bezier(0.4, 0, 0.2, 1)`. Slightly slower than Editorial Minimal — the brand is calmer. Fades and small y-offsets only.

---

## 9. Agent Prompt Guide

When generating artifacts in this brand:

1. Use Crimson Pro for any heading. Inter for any body.
2. Stories before claims. Open with a moment, a person, a specific detail.
3. Sentence rhythm flows. Average 18 words. Let it breathe.
4. Terracotta is the accent. Use on one phrase, one CTA. Cap at 8% of frame.
5. Cards use 8px radius and 1px warm-gray border. No black borders, no 0px corners.
6. Photography is naturalistic, warm-lit, grounded.
7. Default canvas: 1080×1350 for LinkedIn, 1080×607 for article headers, A4 @ 300dpi for one-pagers.

If the brief conflicts with any of these, stop and ask.
