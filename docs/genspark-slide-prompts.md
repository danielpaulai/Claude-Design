# Genspark Slide Prompts — Detailed

Detailed visual specs for all 19 slides of the workshop deck. Each prompt below includes layout, hierarchy, exact colors, fonts, sizes, spacing, and composition cues so Genspark (or any AI slide tool) renders each slide faithfully.

**How to use this doc:**

1. **Option A (one-shot):** copy the [Master Prompt](#master-prompt-paste-into-genspark) block at the top and paste it into Genspark. It generates the full deck.
2. **Option B (slide-by-slide):** if Genspark drifts on the one-shot, generate each slide individually using the per-slide prompts below.

After Genspark generates, drop your images into the placeholder slides (slides 4 and 6 — see [Image placement](#image-placement-final-step) at the bottom).

---

## Brand reference (paste at top of any prompt)

```
BRAND SYSTEM (use everywhere):
- Aesthetic family: Editorial Minimal (Linear / Stripe / Vercel territory)
- Background: off-white #f7f7f8 for most slides, near-black #0a0a0a for selected splash slides
- Primary text: near-black #0a0a0a (slight brown undertone, never pure black)
- Secondary text: gray-500 #6b7075
- Accent: hot red #e90d41 — used at most ONCE per slide, on a verb, a number, or a CTA
- Heading font: Rethink Sans (or any geometric sans, weight 700-800)
- Body font: Inter (regular, medium)
- Mono accent font: JetBrains Mono (for eyebrows, numbers, labels)
- Card corner radius: 0px (editorial, never puffy)
- No emojis. No SaaS gradients. No glassmorphism. No stock illustrations. No drop shadows on content frames.
- Generous whitespace. Big type. High contrast.
```

---

## Master Prompt (paste into Genspark)

```
Create a 19-slide presentation deck titled "Claude Design Killed Canva: Learn How to Master It in 90 Minutes."

[paste the brand reference above here]

Structure: 19 slides total. Each slide should be visually striking but RESTRAINED — big type, lots of negative space, one accent color use per slide max, no decorative junk.

GENERATE THESE SLIDES IN THIS ORDER:

1. TITLE SLIDE
2. QUOTE: "I have a designer. She is one of the best in the world."
3. QUOTE: "She came back five days later with this."
4. FULL-BLEED IMAGE PLACEHOLDER (no text overlay — entire slide is one empty image area)
5. THREE STACKED LINES: "Then I opened Claude Design. I asked for 10 options. 5 minutes later it gave me 12."
6. IMAGE GRID PLACEHOLDER: 4 columns × 3 rows of empty image cells, caption "12 variations · 5 minutes" above the grid
7. REFRAME: "This is not about replacing designers. This is about you finally being able to communicate what you want."
8. CONTRAST: "2024: Design takes 5 days. 2026: Design takes 5 minutes. Founders winning right now do not have a design team. They have a system."
9. NUMBERED LIST: 4 deliverables (the form, the system, the prompts, the kit)
10. CODE OF HONOR: 4 numbered rules
11. SPLASH: "LIVE DEMO 01: Generate a brand in 90 seconds."
12. SCREENSHOT PLACEHOLDER: empty image area with caption "DESIGN.md — section 9: Agent Prompt Guide"
13. SPLASH: "DEMO 03: Topic to Carousel. 6 minutes."
14. SPLASH: "DEMO 04: Reverse-engineer the win."
15. SPLASH: "DEMO 05: Borrow structure. Never colors."
16. CTA: "NOW YOU. Open the form. Fill the first 5 questions. 3 minutes."
17. URL BLOCK: form, kit, handouts, repo
18. CTA: "Comment AI on the post and I'll send you everything in one DM."
19. CLOSE: "The form captures the brand. Claude Code builds the system. Claude Design ships the visuals. You. Run. The whole thing. Thank you."

For exact slide-level visual specs, see the per-slide prompts below.
```

---

# PER-SLIDE PROMPTS

Each prompt below is self-contained. Copy any one and paste into Genspark to generate that slide individually.

---

## Slide 1 — Title

**Type:** Cover / title slide
**Time on slide:** ~30 seconds
**Audience purpose:** Set the tone. Establish the editorial-minimal brand visually before saying a word.

**Genspark prompt:**

```
Create a single editorial-minimal cover slide.

LAYOUT:
- Full-screen, asymmetric composition
- All text anchored top-left, leaving the bottom-right 40% as empty negative space
- Generous internal margin (80px from each edge)

ELEMENTS (top to bottom, left-aligned):

1. Eyebrow pill (top-left corner):
   - Background: hot red #e90d41
   - Text color: white
   - Padding: 6px 14px
   - Border radius: 9999px (full pill)
   - Text: "// WORKSHOP · 60 MIN"
   - Font: JetBrains Mono, weight 500, size 11px
   - Letter-spacing: 0.14em
   - Text-transform: uppercase

2. Hero title (24px gap below eyebrow), in two stacked lines:
   - Line 1: "Claude Design" in Rethink Sans bold 800, size 96-120px, color near-black #0a0a0a, line-height 0.95, letter-spacing -0.035em
   - Line 2: "KILLED Canva." with "KILLED" in red #e90d41 and "Canva." in near-black, same font and size as line 1

3. Subtitle (32px gap below hero):
   - "Learn how to master it in 90 minutes."
   - Font: Inter regular, size 22px
   - Color: gray-500 #6b7075
   - Max-width: 560px

4. Footer (bottom-left, anchored to slide bottom):
   - "Daniel Paul" in Inter semibold 14px, near-black
   - "Founder, Purely Personal" in Inter regular 13px, gray-500

5. Footer (bottom-right):
   - "2026 · 04 · 28" in JetBrains Mono 10px, uppercase, letter-spacing 0.14em, gray-500

BACKGROUND: off-white #f7f7f8
NO emojis, NO icons, NO decorative shapes.
```

---

## Slide 2 — Quote: "I have a designer"

**Type:** Quote slide
**Time on slide:** ~30 seconds
**Audience purpose:** Open the story. Calm, declarative, vulnerability incoming.

**Genspark prompt:**

```
Create an editorial-minimal quote slide.

LAYOUT:
- Vertically centered text block
- Left-aligned, max-width 800px
- Massive negative space above and below (at least 25% of slide height each)

ELEMENTS:

1. Eyebrow (top of text block):
   - "ABOUT MY DESIGNER"
   - Font: JetBrains Mono, weight 500, size 11px
   - Color: red #e90d41
   - Letter-spacing: 0.14em
   - Text-transform: uppercase

2. Quote line 1 (24px gap below eyebrow):
   - "I have a designer."
   - Font: Rethink Sans bold 800, size 84px
   - Color: near-black #0a0a0a
   - Line-height: 1.0
   - Letter-spacing: -0.03em

3. Quote line 2 (20px gap below line 1):
   - "She is one of the best in the world."
   - Font: Rethink Sans bold 800, size 64px
   - Color: near-black, but with "best" in red #e90d41
   - Line-height: 1.05
   - Letter-spacing: -0.025em

BACKGROUND: off-white #f7f7f8
NO images, NO decorations, NO logo. Just the text. The whitespace is the design.
```

---

## Slide 3 — Quote: "She came back five days later"

**Type:** Quote slide (matches slide 2's structure for visual consistency)
**Time on slide:** ~30 seconds
**Audience purpose:** Build anticipation. Audience leans forward, expecting the reveal.

**Genspark prompt:**

```
Create an editorial-minimal quote slide. Match the visual structure of the previous quote slide for consistency.

LAYOUT:
- Vertically centered text block, left-aligned, max-width 800px

ELEMENTS:

1. Eyebrow (top of text block):
   - "LAST MONTH"
   - Font: JetBrains Mono, weight 500, size 11px
   - Color: red #e90d41
   - Letter-spacing: 0.14em
   - Uppercase

2. Hero quote (24px below eyebrow):
   - "She came back five days later with this."
   - Font: Rethink Sans bold 800, size 64px
   - Color: near-black, with "five days later" in red #e90d41
   - Line-height: 1.05
   - Letter-spacing: -0.025em

3. Tiny handoff cue (bottom-right corner of slide):
   - "↓"
   - Font: Inter regular, size 16px
   - Color: gray-500
   - Subtle, almost invisible — just a visual cue that something's coming

BACKGROUND: off-white #f7f7f8
```

---

## Slide 4 — FULL-BLEED ORIGINAL (drop your image here)

**Type:** Full-bleed image slide
**Time on slide:** ~60-90 seconds (verbal vulnerability moment)
**Audience purpose:** Show the original. Hold silence. Let them look.

**Genspark prompt:**

```
Create a full-bleed image slide.

LAYOUT:
- 100% of the slide is a single image placeholder
- NO text overlay anywhere on the slide
- NO eyebrow, NO caption, NO logo, NO border
- The image should fill edge-to-edge

PURPOSE: This is a placeholder. After generation I will drop my own image into the placeholder.

If your tool requires a placeholder fill: use a flat color #1a1a1a (near-black) with a subtle "[ DROP IMAGE HERE ]" label in JetBrains Mono 14px, gray, centered. I will replace this entirely.
```

**After Genspark generates:** Replace the placeholder with `IMAGE-1.png` (your designer's original lead magnet). The image fills 100% of the slide.

---

## Slide 5 — The Pivot

**Type:** Three-line stacked quote (story turn)
**Time on slide:** ~45 seconds
**Audience purpose:** The pivot. They feel the shift coming.

**Genspark prompt:**

```
Create an editorial-minimal three-line stacked quote slide.

LAYOUT:
- Vertically centered text block, left-aligned, max-width 850px
- Each line stacks with deliberate vertical rhythm

ELEMENTS (top to bottom):

1. Eyebrow:
   - "THEN I OPENED"
   - Font: JetBrains Mono, weight 500, size 11px
   - Color: red #e90d41
   - Letter-spacing: 0.14em
   - Uppercase

2. Line 1 (24px below eyebrow):
   - "Claude Design."
   - Font: Rethink Sans bold 800, size 76px
   - Color: near-black
   - Line-height: 1.05

3. Line 2 (40px gap below line 1):
   - "I asked for 10 options."
   - Font: Rethink Sans bold 800, size 60px
   - Color: near-black
   - Line-height: 1.05

4. Line 3 (40px gap below line 2):
   - "5 minutes later it gave me 12."
   - Font: Rethink Sans bold 800, size 60px
   - Color: near-black, but with "12" in red #e90d41
   - Line-height: 1.05

BACKGROUND: off-white #f7f7f8
The vertical rhythm is the design. Big gaps between lines.
```

---

## Slide 6 — THE 12 VARIATIONS GRID (drop your images here)

**Type:** Image grid slide — THE WOW MOMENT
**Time on slide:** ~90 seconds (15 sec silence + verbal followup)
**Audience purpose:** Abundance. The "wait, that's possible?" moment.

**Genspark prompt:**

```
Create an image grid slide for showing 12 design variations.

LAYOUT:
- 80px outer margin on all four sides

ELEMENTS:

1. Caption strip at the top:
   - Left side: eyebrow text "12 VARIATIONS · 5 MINUTES"
     - Font: JetBrains Mono, weight 500, size 12px
     - Color: red #e90d41
     - Letter-spacing: 0.14em
     - Uppercase
   - Right side (optional): "Generated by Claude Design"
     - Font: Inter regular, size 11px
     - Color: gray-500

2. Below the caption (24px gap): a 4-column × 3-row grid of empty image placeholder cells
   - 12 cells total
   - 8px gutter between cells
   - Each cell is a flat near-black #0a0a0a fill with no border
   - Each cell is the same size, evenly distributed
   - The grid fills the available width below the caption

3. NO frame around the grid, NO decorations, NO icons

PURPOSE: I will drop my own variation screenshots into each cell after generation.

If your tool requires placeholder text in each cell: use a tiny "[ image ]" label in each cell, JetBrains Mono 10px, gray, centered. I will replace these.

BACKGROUND: off-white #f7f7f8
```

**After Genspark generates:** Drop your variation screenshots into each cell. If you only have 8 visible variations, leave 4 cells with their dark fill (creates a sense of "more variations exist") at opacity 0.2.

---

## Slide 7 — The Reframe

**Type:** Reframe declarative
**Time on slide:** ~60 seconds
**Audience purpose:** The thesis statement. The line they remember.

**Genspark prompt:**

```
Create an editorial-minimal reframe quote slide.

LAYOUT:
- Centered horizontally, vertically centered
- Max-width 900px

ELEMENTS:

1. Eyebrow (centered, above hero):
   - "THE REFRAME"
   - Font: JetBrains Mono, weight 500, size 11px
   - Color: red #e90d41
   - Letter-spacing: 0.14em
   - Uppercase
   - Centered

2. Hero (60px below eyebrow), three stacked lines, all centered:
   - Line 1: "This is not about replacing designers."
     - Font: Rethink Sans semibold 600, size 48px
     - Color: near-black
     - Line-height: 1.15
   - Line 2 (32px gap): "This is about you finally being able to"
     - Font: Rethink Sans semibold 600, size 48px
     - Color: near-black
   - Line 3 (16px gap): "communicate what you want."
     - Font: Rethink Sans bold 800, size 64px
     - Color: near-black, with "communicate" in red #e90d41
     - Line-height: 1.05

BACKGROUND: off-white #f7f7f8
Centered composition. Generous whitespace top and bottom.
```

---

## Slide 8 — Contrast: 2024 vs 2026

**Type:** Two-column contrast slide
**Time on slide:** ~90 seconds
**Audience purpose:** Show the cultural shift. Make the macro point land.

**Genspark prompt:**

```
Create an editorial-minimal contrast slide showing two columns.

LAYOUT:
- Two equal columns, 64px gutter between
- Each column has its own vertical text rhythm
- 80px outer margin

LEFT COLUMN:
1. Year label at top: "2024"
   - Font: JetBrains Mono, weight 500, size 13px
   - Color: gray-500 #6b7075
   - Letter-spacing: 0.14em
2. Statement (32px below): "Design takes 5 days."
   - Font: Rethink Sans bold 800, size 56px
   - Color: gray-500 #6b7075 (muted on purpose)
   - Line-height: 1.05

RIGHT COLUMN:
1. Year label at top: "2026"
   - Font: JetBrains Mono, weight 500, size 13px
   - Color: red #e90d41
   - Letter-spacing: 0.14em
2. Statement (32px below): "Design takes 5 minutes."
   - Font: Rethink Sans bold 800, size 56px
   - Color: near-black (full weight — this is the answer)
   - Line-height: 1.05

3. Below both columns (80px gap), spanning full width, centered text:
   - "Founders winning right now do not have a design team."
   - "They have a system."
   - Font: Rethink Sans semibold 600, size 38px
   - Color: near-black, with "system" in red #e90d41
   - Line-height: 1.2
   - Centered

BACKGROUND: off-white #f7f7f8
A horizontal rule (1px, color: gray-100 #e8eaec) divides the two-column block from the bottom-spanning text.
```

---

## Slide 9 — Deliverables (4 numbered)

**Type:** Numbered list slide
**Time on slide:** ~90 seconds
**Audience purpose:** Concrete deliverables. They lock in.

**Genspark prompt:**

```
Create an editorial-minimal numbered list slide.

LAYOUT:
- Eyebrow + title at top
- 4 numbered items in a 2×2 grid below
- 80px outer margin

ELEMENTS:

1. Eyebrow (top-left):
   - "WHAT YOU WALK OUT WITH"
   - JetBrains Mono 11px, red, uppercase, letter-spacing 0.14em

2. Title (24px below eyebrow):
   - "Four things."
   - Rethink Sans bold 800, size 64px, near-black, line-height 1.05

3. Below title (48px gap): a 2-column × 2-row grid of 4 numbered items, 32px gutter

   ITEM 1 (top-left):
     - Number "01" in Rethink Sans bold 800, 80px, red #e90d41, line-height 0.85
     - 16px below: "A 10-question form" — Rethink Sans semibold 600, 24px, near-black
     - 8px below: "Answer it once." — Inter regular 16px, gray-500

   ITEM 2 (top-right):
     - Number "02" in same style as 01
     - "A complete brand design system"
     - "Generated in Claude in 90 seconds."

   ITEM 3 (bottom-left):
     - Number "03" same style
     - "Five prompts"
     - "To ship anything in your brand."

   ITEM 4 (bottom-right):
     - Number "04" same style
     - "A repo. A kit. A handout PDF."
     - "All free. All MIT-licensed."

BACKGROUND: off-white #f7f7f8
Each item separated by 32px gutter. The four numbers (01, 02, 03, 04) are the only red elements — they're the visual rhythm.
```

(Note: this slide intentionally breaks the "one accent per slide" rule because the four numbers are a coordinated rhythm element, like sequence labels. If you prefer strict adherence: make 01 red and 02-04 near-black.)

---

## Slide 10 — Code of Honor

**Type:** Numbered rules slide
**Time on slide:** ~60 seconds
**Audience purpose:** Set the room's social contract. Ritual moment.

**Genspark prompt:**

```
Create an editorial-minimal numbered rules slide.

LAYOUT:
- 80px outer margin
- Single column, left-aligned

ELEMENTS:

1. Eyebrow (top-left):
   - "CODE OF HONOR · 60 MINUTES"
   - JetBrains Mono 11px, red #e90d41, uppercase, letter-spacing 0.14em

2. Title (24px below):
   - "Four rules for the room."
   - Rethink Sans bold 800, 56px, near-black

3. Below title (48px gap): 4 numbered rules in a vertical list, 24px gap between items

   Each item structure:
     - Number "1." / "2." / "3." / "4." in Rethink Sans bold 700, 32px, near-black, fixed-width column 48px
     - Rule text in Rethink Sans semibold 600, 28px, near-black, line-height 1.3

   RULE 1: "Be here. Phones face down."
   RULE 2: "Ask the dumb question. The room needs it."
   RULE 3: "Notes are private. Wins are loud."
   RULE 4: "No 'I'm not technical.' Replace with 'I haven't yet.'"
     - In rule 4, the words "I haven't yet." should be in red #e90d41 (this is the only accent on the slide)

BACKGROUND: off-white #f7f7f8
```

---

## Slide 11 — Splash: Live Demo 01

**Type:** Demo splash slide (transition between sections)
**Time on slide:** ~15 seconds
**Audience purpose:** Hard transition. They know we're going live.

**Genspark prompt:**

```
Create an editorial-minimal splash / transition slide.

LAYOUT:
- Centered horizontally, vertically centered
- High contrast — this is a transition moment, not a content slide

BACKGROUND: near-black #0a0a0a (INVERTED — this slide is dark to mark the transition)

ELEMENTS (centered):

1. Eyebrow:
   - "LIVE DEMO 01"
   - JetBrains Mono 14px, red #e90d41, uppercase, letter-spacing 0.18em

2. Hero (40px below eyebrow):
   - "Generate a brand"
   - Rethink Sans bold 800, 84px, color: white #ffffff
   - Line-height: 1.0

3. Hero line 2 (12px gap):
   - "in 90 seconds."
   - Rethink Sans bold 800, 84px, with "90 seconds" in red #e90d41
   - Line-height: 1.0

NO other elements. The dark background and the inverted color is the visual hit.
```

---

## Slide 12 — DESIGN.md screenshot placeholder

**Type:** Screenshot slide
**Time on slide:** ~60 seconds
**Audience purpose:** Show the bridge file. Make it concrete.

**Genspark prompt:**

```
Create an editorial-minimal screenshot slide.

LAYOUT:
- Caption at top
- Large screenshot area centered below

ELEMENTS:

1. Caption (top-left, 80px from edges):
   - Eyebrow: "THE BRIDGE"
     - JetBrains Mono 11px, red, uppercase, letter-spacing 0.14em
   - Title (16px below eyebrow): "DESIGN.md — section 9: Agent Prompt Guide"
     - Rethink Sans semibold 600, 32px, near-black

2. Below caption (32px gap): a single screenshot placeholder
   - Empty image area, ~70% of slide width, centered
   - Background: charcoal #0a0a0c (looks like a code editor)
   - Border: 1px solid gray-100
   - Aspect ratio: roughly 16:9 or 4:3

PURPOSE: I will drop a screenshot of my DESIGN.md file (section 9 visible) into this placeholder.

BACKGROUND: off-white #f7f7f8
```

**After Genspark generates:** Drop a screenshot of `DESIGN.md` from your editor (showing section 9 — Agent Prompt Guide) into the placeholder.

---

## Slide 13 — Splash: Demo 03 Carousel

**Type:** Demo splash (inverted dark)
**Time on slide:** ~15 seconds
**Audience purpose:** Reset attention before the big demo block.

**Genspark prompt:**

```
Create an editorial-minimal splash slide on a dark background.

BACKGROUND: near-black #0a0a0a

LAYOUT: Centered, vertically and horizontally.

ELEMENTS:

1. Eyebrow (centered):
   - "DEMO 03"
   - JetBrains Mono 14px, red #e90d41, uppercase, letter-spacing 0.18em

2. Hero (40px below):
   - "Topic to Carousel."
   - Rethink Sans bold 800, 84px, white, line-height 1.0

3. Subtitle (24px below):
   - "6 minutes."
   - Rethink Sans semibold 600, 32px, color: gray-500

NO icons, NO decorations.
```

---

## Slide 14 — Splash: Demo 04 Winning Ad

**Type:** Demo splash (inverted dark)
**Time on slide:** ~15 seconds

**Genspark prompt:**

```
Create an editorial-minimal splash slide on a dark background, matching slide 13's structure.

BACKGROUND: near-black #0a0a0a

LAYOUT: Centered.

ELEMENTS:

1. Eyebrow: "DEMO 04" — JetBrains Mono 14px, red, uppercase, letter-spacing 0.18em
2. Hero (40px below): "Reverse-engineer" — Rethink Sans bold 800, 84px, white
3. Hero line 2: "the win." — Rethink Sans bold 800, 84px, with "win" in red #e90d41
4. Subtitle (24px below): "Decode any ad. Ship your version." — Rethink Sans semibold 600, 28px, gray-500
```

---

## Slide 15 — Splash: Demo 05 Pinterest

**Type:** Demo splash (inverted dark)
**Time on slide:** ~15 seconds

**Genspark prompt:**

```
Create an editorial-minimal splash slide on a dark background, matching slides 13 and 14.

BACKGROUND: near-black #0a0a0a

LAYOUT: Centered.

ELEMENTS:

1. Eyebrow: "DEMO 05" — JetBrains Mono 14px, red, uppercase, letter-spacing 0.18em
2. Hero (40px below): "Borrow structure." — Rethink Sans bold 800, 84px, white
3. Hero line 2 (12px gap): "Never colors." — Rethink Sans bold 800, 84px, with "Never" in red #e90d41
4. Subtitle (24px below): "Compositional transfer from any reference." — Rethink Sans semibold 600, 28px, gray-500
```

---

## Slide 16 — CTA: Now Your Turn

**Type:** CTA slide (light background — this is back to action)
**Time on slide:** ~60 seconds
**Audience purpose:** Pivot to interactive. They open laptops.

**Genspark prompt:**

```
Create an editorial-minimal CTA slide on light background.

BACKGROUND: off-white #f7f7f8

LAYOUT: Centered horizontally, vertically centered.

ELEMENTS:

1. Eyebrow (centered):
   - "INTERACTIVE BLOCK"
   - JetBrains Mono 11px, red #e90d41, uppercase, letter-spacing 0.14em

2. Title (32px below):
   - "NOW YOU."
   - Rethink Sans bold 800, 120px, near-black, letter-spacing -0.04em

3. Instructions block (60px below title), centered, max-width 600px:
   - Line 1: "Open the form on your laptop."
     - Rethink Sans semibold 600, 28px, near-black
   - Line 2 (16px gap): "Fill the first 5 questions."
     - Rethink Sans semibold 600, 28px, near-black
   - Line 3 (16px gap): "3 minutes."
     - Rethink Sans bold 800, 36px, with "3 minutes" in red #e90d41

4. URL block at bottom (40px from bottom edge), centered:
   - "claude-design-beginners.vercel.app"
   - JetBrains Mono medium 500, 18px, near-black, letter-spacing 0.06em
```

---

## Slide 17 — URL Block (everything you have access to)

**Type:** Reference / handoff slide
**Time on slide:** ~90 seconds
**Audience purpose:** Take-home assets. They screenshot this.

**Genspark prompt:**

```
Create an editorial-minimal reference slide listing 4 URLs.

LAYOUT: Single column, left-aligned, max-width 800px, vertically centered.
80px outer margin.

ELEMENTS:

1. Eyebrow (top of column):
   - "EVERYTHING IS FREE"
   - JetBrains Mono 11px, red #e90d41, uppercase, letter-spacing 0.14em

2. Title (24px below eyebrow):
   - "Take it. Fork it. Ship it."
   - Rethink Sans bold 800, 56px, near-black, line-height 1.05

3. URL list (48px below title), 4 items, 24px gap between each:

   Each item structure:
     - Label in Rethink Sans semibold 600, 16px, gray-500, fixed-width column 110px (left)
     - URL in JetBrains Mono medium 500, 20px, near-black (right column)

   ITEM 1: Label "Form:" → URL "claude-design-beginners.vercel.app"
   ITEM 2: Label "Kit:" → URL "brand-in-a-box.zip (one click)"
   ITEM 3: Label "Handouts:" → URL "5 prompts (Code) · 5 prompts (Design)"
   ITEM 4: Label "Repo:" → URL "github.com/danielpaulai/Claude-Design"

4. Footer (32px below list):
   - "All free. All MIT-licensed."
   - Rethink Sans semibold 600, 22px, near-black with "MIT-licensed" in red #e90d41

BACKGROUND: off-white #f7f7f8
A 1px horizontal rule (gray-100) above the URL list adds editorial structure.
```

---

## Slide 18 — CTA: Comment AI

**Type:** Conversion CTA
**Time on slide:** ~60 seconds
**Audience purpose:** The DM hook. They comment.

**Genspark prompt:**

```
Create an editorial-minimal CTA slide.

LAYOUT: Vertically centered. Single column, left-aligned, max-width 760px, 80px outer margin.

ELEMENTS:

1. Eyebrow:
   - "ONE-DM TAKE-HOME"
   - JetBrains Mono 11px, red #e90d41, uppercase, letter-spacing 0.14em

2. Lede (24px below):
   - "If you want everything in one DM:"
   - Rethink Sans semibold 600, 28px, near-black

3. Hero CTA (32px below lede):
   - "Comment"
   - Rethink Sans bold 800, 84px, near-black, line-height 1.0
   (immediately followed inline)
   - " AI"
   - Rethink Sans bold 800, 84px, in red #e90d41
   (then on next line)
   - "on the post."
   - Rethink Sans bold 800, 84px, near-black

4. Bullet list (40px below CTA):
   - "I'll send you:"
     - Inter medium 500, 16px, gray-500
   - 4 items below, 8px gap between, each in Inter regular 18px, near-black:
     · "The kit"
     · "Both handouts"
     · "The recording"
     · "The next workshop date"

5. P.S. block (40px below bullets, 1px gray-100 horizontal rule above):
   - "P.S. What format would you ship Monday morning?"
   - Inter italic 16px, gray-500

BACKGROUND: off-white #f7f7f8
```

---

## Slide 19 — Close

**Type:** Closing slide (final emotional moment)
**Time on slide:** ~30 seconds (then applause)
**Audience purpose:** The system summary. The send-off.

**Genspark prompt:**

```
Create an editorial-minimal closing slide. This is the final slide of the deck. The emotional close.

LAYOUT: Vertically centered. Single column, centered horizontally, max-width 900px.

BACKGROUND: off-white #f7f7f8

ELEMENTS:

1. Eyebrow (centered, top of column):
   - "// THE SYSTEM"
   - JetBrains Mono 11px, red #e90d41, uppercase, letter-spacing 0.14em

2. Three statement lines (24px below eyebrow), each centered, separated by 16px gap:
   - "The form captures the brand."
   - "Claude Code builds the system."
   - "Claude Design ships the visuals."
   - All three: Rethink Sans semibold 600, 36px, near-black, line-height 1.2

3. Below the three statements (60px gap), three stacked single-word lines, centered:
   - "You."
   - "Run."
   - "The whole thing."
   - All three: Rethink Sans bold 800, 84px, near-black, line-height 0.95
   - With "Run." in red #e90d41 (the verb gets the accent)

4. Below (80px gap), centered:
   - "Thank you."
   - Rethink Sans semibold 600, 28px, gray-500, letter-spacing 0.04em

5. Bottom-left (anchored to slide bottom, 32px from edges):
   - Tiny byline: "Daniel Paul · Purely Personal · 2026"
   - JetBrains Mono 10px, gray-500, uppercase, letter-spacing 0.14em

NO logos, NO QR codes, NO social handles. This slide is the emotional landing, not a marketing surface.
```

---

# Image placement (final step after Genspark generates)

| Slide | What to drop | Notes |
|---|---|---|
| **4** | `IMAGE-1.png` (your designer's original lead magnet) | Full bleed. Replace the placeholder. The image fills 100% of the slide. |
| **6** | `IMAGE-2.png` + `IMAGE-3.png` + `IMAGE-4.png` (your Claude Design variations) | Drop into the 12-cell grid. If you only have 8 visible variations, leave 4 cells empty (their dark fill stays — implies "more variations exist"). |
| **12** | Screenshot of `DESIGN.md` from your editor (section 9 visible) | Optional but adds concrete proof. If you skip, the slide still works as-is. |

---

# Common Genspark issues + fixes

| Issue | Fix |
|---|---|
| Genspark adds emojis to titles | Add to the prompt: "ABSOLUTELY NO EMOJIS in any element. The brand bans them." |
| Genspark uses gradient backgrounds | Add: "Backgrounds are flat solid colors only. Specifically off-white #f7f7f8 or near-black #0a0a0a. No gradients ever." |
| Genspark uses generic stock photos | Add: "Do not insert any stock photography, illustrations, or icons. Image areas should be empty placeholders." |
| Slide titles get smaller than spec'd | Add explicit: "Hero text size: 84-120px depending on slide. Do not shrink below 56px." |
| Genspark ignores font specifications | Add at top: "Required fonts: Rethink Sans (heading), Inter (body), JetBrains Mono (eyebrow). If unavailable, use closest equivalents: Inter Display, Inter, JetBrains Mono via Google Fonts." |
| Genspark ignores accent rule | Add: "Hot red #e90d41 appears AT MOST ONCE per slide. If a slide has multiple red elements in your draft, remove all but one." |

---

# After Genspark — final polish checklist

```
☐ Slide 1: title hierarchy looks editorial, not corporate
☐ Slides 2, 3: quote slides match each other in layout
☐ Slide 4: full-bleed image, no overlay text
☐ Slides 5, 7: quote slides feel calm, lots of whitespace
☐ Slide 6: 12-cell grid is even, gutters consistent
☐ Slide 8: 2024/2026 contrast feels weighted (2024 muted, 2026 full)
☐ Slides 9, 10: numbered lists are vertically rhythmed, not crowded
☐ Slides 11, 13, 14, 15: dark splash slides feel like transitions, not content
☐ Slide 16: NOW YOU. is huge — 120px hero
☐ Slide 17: URL block readable from back of room (16-20px URLs)
☐ Slide 18: "Comment AI" hits at 84px hero
☐ Slide 19: "Run." in red is the only red on the close
```
