# Purely Personal — DESIGN.md

This is the format Claude Design ingests directly.

Drop this file into Claude Design at claude.ai/design and your projects auto-skin.

---

## 1. Visual Theme & Atmosphere

Editorial print magazine meets founder-first LinkedIn creator.

Calm neutrals. Off-white paper canvas. One hot accent. Big type. Generous whitespace. High contrast. Minimal motion.

Reference brands: Linear, Stripe, Vercel.

Tone: confident, direct, outcome-first. The visual equivalent of "no jargon."

---

## 2. Color Palette & Roles

```css
--color-red: #e90d41;        /* Accent only. ≤5% of any frame. */
--color-near-black: #0a0a0a; /* Body text, dark backgrounds. Not pure black. */
--color-silver: #b8bec1;     /* Secondary text, hairline borders. */
--color-off-white: #f7f7f8;  /* Paper canvas. Full-bleed. */
--color-white: #ffffff;      /* Card interiors. */
```

Pastel category backgrounds (cheatsheet only): `#E6F4EA` mint, `#FFE9D6` peach, `#FFE1E8` pink, `#E4EBFA` lavender. Each pairs with a saturated pill label.

Role mapping:

- Accent: red, on one verb / one number / one CTA per frame.
- Text primary: near-black on off-white or white.
- Text secondary: gray-500.
- Borders: 2-3px solid near-black on cards. 1px silver on UI chrome.

---

## 3. Typography Rules

Heading family: Rethink Sans (700 / 600).

Body family: Inter (400 / 500).

Hard rules:

- Never substitute Poppins.
- Never use decorative or hand-drawn fonts.
- Hero text 72-120px on a 1080×1350 canvas.
- Body never below 16px shipped.
- Tracking -0.02em on hero / H1, 0em on body, 0.04em on uppercase eyebrows.

Stack:

- Hero: Rethink Sans 700, 72-120px, line-height 1.1.
- H1: Rethink Sans 700, 56px.
- H2: Rethink Sans 700, 40px.
- Body: Inter 400, 16px, line-height 1.5.
- Eyebrow: Rethink Sans 700, 12px, uppercase, 0.04em tracking.

---

## 4. Component Stylings

**Cards.** White background. 2-3px solid near-black border. 0px corner radius. 24-32px padding. Internal hierarchy: eyebrow pill or "STEP N" label, then card title (Rethink Sans 600, 24-32px), then body (Inter 400, 16px).

**Pills (CTA, category, eyebrow).** 999px corner radius. Solid red or solid near-black fill. Inverted text. Eyebrow pills small (8px y-padding, 16px x-padding). CTA pills medium (12px y-padding, 24px x-padding).

**Buttons (UI chrome only).** 8px corner radius. Solid red, white text. Hover darkens 6%. Press translates Y by 1px.

**Inputs (UI chrome).** 1px silver border. 8px corner radius. Focus outline 2px red at 60% opacity, 2px offset.

---

## 5. Layout Principles

4px base unit. Spacing scale: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Carousel slides (1080×1350): 80px outer margin. Footer module 120px tall at bottom (avatar + byline + repost pill), present on every slide except cover.

Cheatsheets (1080×1350): title block top-left, repost pill top-right, dense grid below, footer row at bottom.

One-pagers (A4 @ 300dpi, 2480×3508): 2/3 top for hero + offer, 1/3 bottom for proof + CTA. Golden-section feel.

---

## 6. Depth & Elevation

There is essentially no shadow system.

Elevation is borders and white-on-paper contrast.

One exception: `--shadow-soft: 0 1px 2px rgba(10,10,10,0.06), 0 4px 12px rgba(10,10,10,0.04)` on small UI chrome only. Never on content frames.

No glow effects. No inner shadows. No neumorphism. No backdrop blur.

---

## 7. Do's and Don'ts

**Do:**

- Use red on one verb, one number, or one CTA per frame.
- Use solid 2-3px near-black borders on cards.
- Use real founder portraits, shot moody and desaturated.
- Use generous whitespace.
- One sentence per paragraph in any copy.

**Don't:**

- Don't use red on paragraphs.
- Don't use SaaS gradients, glassmorphism, or backdrop blur.
- Don't use stock photography or generic illustration.
- Don't use em dashes anywhere.
- Don't use Poppins.
- Don't use emojis or hashtags.

---

## 8. Responsive Behavior

This is a print-first brand. Most artifacts are fixed-canvas (1080×1350, A4).

When web responsive is needed:

- Scale type with `clamp()`.
- Maintain 80px margins to a minimum of 24px on mobile.
- Never break the 80px margin rule on desktop above 1024px.

Animation budget: 120-180ms `cubic-bezier(0.4, 0, 0.2, 1)`. Fades and small y-offsets only. No bounce, no spring, no parallax.

---

## 9. Agent Prompt Guide

When generating artifacts in this brand:

1. Use Rethink Sans for any heading. Inter for any body. Never substitute.
2. One sentence per paragraph in any copy. No em dashes.
3. Red is the only accent. Cap at 5% of frame. Use on one verb, number, or CTA.
4. Cards have 2-3px solid near-black borders, 0px corner radius.
5. No emojis, no hashtags, no stock images, no gradients.
6. Founder portraits are the only imagery. Moody, desaturated, near-black backdrop.
7. Default canvas: 1080×1350 for LinkedIn formats, A4 @ 300dpi for one-pagers.
8. Footer module on every carousel slide except the cover.

If the brief conflicts with any of these, stop and ask.
