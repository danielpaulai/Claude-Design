# The 5 Prompts — Claude Design Edition

These are the **Claude Design** versions of the workshop prompts. Same logic as the Claude Code edition, different mechanics. Run these in the chat panel at https://claude.ai/design after you've uploaded your `DESIGN.md` as your project's design system.

If you don't yet have a `DESIGN.md`, get one in 3 minutes:

1. Open the fillable form → https://claude-design-beginners.vercel.app/
2. Answer 10 questions
3. Click **Generate Claude Prompt**, copy
4. Open Claude Code in the downloaded `brand-in-a-box.zip` folder, paste the prompt
5. Your `DESIGN.md` is generated in ~90 seconds, alongside the rest of your brand folder
6. In Claude Design, **New project → Add assets → upload `DESIGN.md`**
7. Now run any of the 5 prompts below

The form is the front door. Claude Code generates your brand. Claude Design ships the visuals. The bridge between them is the `DESIGN.md` file.

---

## 01 — The Master Check (Claude Design)

**When to run:** First message in any Claude Design project, right after uploading `DESIGN.md`.
**What it does:** Confirms the design system is loaded and locks every artifact you generate to your voice and visual rules.

```
═══ DESIGN SYSTEM CHECK ═══

You should have my DESIGN.md loaded as this project's design system.

Confirm in 4 lines, no preamble:
- My accent color (hex)
- My heading font
- My body font
- My one-sentence brand description (from DESIGN.md section 9)

If any of these come back blank, generic, or wrong, the DESIGN.md is
not loaded. Tell me and stop.

═══ STANDING RULES (apply to every artifact in this project) ═══

Voice contract:
1. Apply my voice rules from DESIGN.md section 9 to all copy.
   No em dashes, no banned phrases, no hedging language.
2. Use real example phrases from my brand description. Never lorem ipsum.
3. Before you write any copy, ask yourself: "Would the founder say this on
   a sales call?" If no, rewrite.

Visual contract:
1. Pull every color, font, spacing, and component style from DESIGN.md.
   No improvisation.
2. The accent color appears at most ONCE per visible frame, on a verb,
   a number, or a CTA. Never on body paragraphs.
3. Match the family's signature gesture (corner radius, border style,
   accent ratio).

Self-critique contract (run BEFORE rendering anything):
☐ Scan against DESIGN.md "Don'ts." Did you do anything banned? Fix it.
☐ Read the copy in your head. Does it match my rhythm rules?
☐ Count accent uses per frame. More than 1 visible at once? Cut.
☐ Any lorem ipsum, generic stock language, or hedging? Replace.

═══ WHEN I ATTACH AN IMAGE ═══

Do not assume. Ask one question:

"Which mode?
 (a) Match-energy — borrow tone and density, not visuals
 (b) Layout-structure — borrow composition, not colors or fonts
 (c) Pure reference — extract one specific element, ignore the rest
 (d) Anti-reference — do the opposite of what this image does"

Wait for my answer.

═══ DELIVERY PROTOCOL ═══

When you finish a design on canvas:
1. Render it.
2. Reply with: "Done. Iterate? {one specific thing}. Next prompt? {prompt 02-05}."

No long summaries. The canvas speaks.

═══ NOW ═══

Run the design system check above and give me the 4 lines.
```

---

## 02 — Topic to Carousel (Claude Design)

**When to run:** Anytime you need a LinkedIn carousel. Replace `[INSERT TOPIC]`.
**What it does:** Renders a 7-slide carousel on the canvas, each slide at 1080×1350. Every slide on-brand. Self-checked before delivery.

```
═══ MISSION ═══

Topic: [INSERT TOPIC]
Outcome: One LinkedIn carousel that earns me the inbound DM from my ICP.

═══ THINK FIRST ═══

Before generating, in your head:
1. Who specifically opens this carousel? (recall ICP from DESIGN.md)
2. What deeper pain does this carousel agitate?
3. Which hook style fits best? (refer to my voice rules)
4. ONE big idea per slide. If two ideas could share slide 3, that's
   two slides not one.

═══ STRUCTURE ═══

7 slides on canvas. 1080×1350 each. Stack vertically.

Slide 1 — COVER
  Hook in 8-12 words.
  Eyebrow pill (matches my brand's eyebrow style).
  Type-driven, big.
  Accent color on ONE word.
  Footer module if my brand uses one (avatar + byline + repost pill).

Slides 2-6 — LESSONS (5 of them)
  Each slide does ONE job:
    - Eyebrow "STEP N"
    - Lesson title in 5-9 words
    - Body in 2 sentences max (count words against my rhythm)
    - One visual element: card, icon, number, or quote
  No slide repeats the visual move of the previous slide.
  Vary the rhythm.

Slide 7 — CTA
  Soft, in-line, sounds like a DM not an ad.
  "Comment [WORD] and I'll DM you the [asset]."
  P.S. that asks a question or offers a bonus.

═══ COPY DISCIPLINE ═══

- Match my average sentence length within ±2 words.
- Use 1-2 of my ranked hooks (e.g., contrarian, transformation, reframe).
- Include one specific number with timeframe.
- Banned phrases get auto-rejected.

Forbidden across all slides:
- Em dashes
- Hashtags
- Emoji
- Any word from my banned list
- "Unlock," "leverage," "transform," "10x," "secret"

═══ OUTPUT ═══

Render all 7 slides on the canvas as a vertical stack.
Each slide is its own frame at exactly 1080×1350.
I will export the canvas as PDF when we're done.

═══ SELF-CHECK BEFORE DELIVERY ═══

Run this checklist on yourself, fix anything that fails:

☐ Did I use any banned phrase, anywhere?
☐ Is the accent color used more than once on any single slide?
☐ Are slide-1 hook and slide-7 CTA in the same voice register?
☐ Does the rhythm match my voice rules?
☐ Does slide 1 hook promise what slide 7 delivers?
☐ Any AI tells — gradient, generic illustration, em dash?

═══ AFTER DELIVERY ═══

Tell me which TWO slides are weakest, offer to remix them.
Suggest the next 3 carousel topics for follow-up in this series.
```

---

## 03 — Winning Ad to My Version (Claude Design)

**When to run:** When you see an ad performing in your industry and want the same impact in your brand.
**What it does:** Decodes the ad forensically, then renders 3 variations on the canvas in your brand. Faithful, confident, risky.

```
═══ INPUT ═══

[ATTACH IMAGE OF THE AD]

Industry context: [my industry]
Why I think this works: [one sentence — your hypothesis]

═══ STEP 1: FORENSIC DECODE ═══

Look at the ad like a designer doing a critique. Tell me in chat
(don't render anything yet):

📐 Composition
  - Where does the eye land first, second, third?
  - Negative space ratio (% of frame empty)?
  - What anchor (line, edge, object) holds the composition?

🎯 Copy
  - What's the hook structure?
  - Word count of the headline.
  - Is the CTA explicit or implicit?
  - What word does the most work?

🎨 Visual signature
  - Color hierarchy (dominant, secondary, accent — rough %)
  - Type contrast (size ratio between hero and body)
  - The ONE move that makes this feel premium / cheap / trustworthy

🧠 Emotional beat
  - What feeling does it leave behind?
  - What objection does it preempt?
  - Who is it NOT for?

═══ STEP 2: BRAND TRANSLATION ═══

Now render my version on canvas. Same skeleton, my brand from DESIGN.md.

Take from the original:
✓ The composition (where eye lands)
✓ The copy structure (hook → ladder → close)
✓ The emotional beat
✓ The negative space ratio

Replace from my brand:
✗ Colors → DESIGN.md
✗ Fonts → DESIGN.md
✗ Voice → DESIGN.md voice rules
✗ Specific imagery → my brand's imagery rules
✗ The accent move → wherever my system says accent goes

═══ STEP 3: VARIATIONS ═══

Render 3 variations side by side on canvas at the original's exact dimensions:

  V1. FAITHFUL    — closest mapping to the original
  V2. CONFIDENT   — push my brand's signature gesture harder
  V3. RISKY       — invert one decision from the original
                    (if original is dense, mine is sparse)

═══ STEP 4: VERDICT ═══

After rendering:
1. Which variation would YOU ship and why? Pick V1, V2, or V3.
2. Predict A/B test ranking of original vs my V1-V3.
3. What did the original do that I should NOT copy because it doesn't
   fit my brand?

═══ ANTI-PATTERNS ═══

Do not copy:
- The exact color palette (check yours against theirs)
- Specific imagery or product shots
- The exact fonts (use my families)
- Their voice register if it conflicts with my voice rules
```

---

## 04 — Pinterest to My Layout (Claude Design)

**When to run:** When you find a beautiful layout (magazine, poster, album art) that is nothing like your brand.
**What it does:** Extracts compositional structure only — never colors or fonts — and renders 2 variations in your brand on canvas.

```
═══ INPUT ═══

[ATTACH PINTEREST IMAGE]
(Magazine cover, poster, album art, or editorial layout.)

What I want to build: [carousel cover / image post / one-pager / banner / pitch slide]

═══ EXTRACTION TARGETS ═══

Tell me in chat (no rendering yet):

📐 The grid
  - Asymmetric, symmetric, or modular?
  - Where are the alignment lines?
  - Column structure?

🎯 The focal point
  - What pulls the eye first?
  - How is it framed?
  - Ratio of focal-area to total-area?

📏 The typography hierarchy
  - Hero size : body size ratio (rough)
  - Number of distinct type styles
  - Where does type sit relative to focal point?

⚖ The density rhythm
  - Crowded → empty distribution, or even?
  - Where does the eye get to rest?

═══ APPLY TO MY BRAND ═══

Render the artifact on canvas in MY brand. Structure borrowed,
everything else mine.

Forbidden imports from the reference:
✗ Colors (use DESIGN.md)
✗ Fonts (use DESIGN.md)
✗ Imagery (use my brand's imagery rules)
✗ Mood (my brand has its own)

Required from the reference:
✓ The grid structure
✓ The focal-point framing
✓ The negative space ratio
✓ The type hierarchy ratio

═══ OUTPUT ═══

Render two variations side by side on canvas:

  V1. FAITHFUL  — structure mapped 1:1, brand applied
  V2. LOOSENED  — structure simplified by 20%, more breathing room

Both at the canvas size for the format I requested.

═══ AFTER ═══

In ONE paragraph (no bullets), tell me:
- What you transferred from the reference (be specific about layout)
- What you deliberately did not transfer
- Which variation feels more like the brand and why

═══ THE TASTE TEST ═══

Before rendering, ask yourself:

"If I removed all my brand colors and fonts and showed a designer the
wireframe side-by-side with the reference's wireframe, would they see
the same skeleton?"

If yes → you nailed the structural transfer.
If no → redo it before showing me.
```

---

## 05 — Iterate to Refine (Claude Design)

**When to run:** After any artifact, when 80% is right and 20% needs adjusting. Use Claude Design's inline comments OR the chat — both work.
**What it does:** Iterates without losing what worked. Renders V1 and V2 side by side on canvas with a 60-word diff explained in chat.

```
═══ INPUT ═══

The artifact you just rendered: [name it, e.g., "the carousel cover"]

═══ MY DIRECTION ═══

Want to push:
  + [thing to amplify]
  + [thing to amplify]

Want to soften:
  - [thing to dial back]
  - [thing to dial back]

Want to try:
  ? [experiment, optional]

Keep untouched: [list anything sacred]

═══ EXECUTION ═══

Step 1: Acknowledge the spec. Repeat back what you're amplifying,
softening, and trying. If anything is ambiguous, ask ONE question.

Step 2: Render V2 on canvas next to V1 (split view, same canvas size).

Step 3: In chat, give me:
  - 60-word "diff explained" — the specific decisions you made and why

═══ DIFF DISCIPLINE ═══

A real iteration changes 3-5 things, not 30.

If you find yourself rebuilding half the artifact, you are starting over,
not iterating. Pause and ask if that's what I want.

═══ TASTE CALIBRATION ═══

Before rendering V2, run this gut-check:

☐ Is V2 still recognisably the same artifact, just better?
☐ Does it solve the spec or just change for change's sake?
☐ Have I preserved every "Keep untouched" item literally?

If any answer is no, fix V2 before rendering.

═══ AFTER ═══

Two questions:
1. Ship V1, ship V2, or run another iteration?
2. If we iterate again, what's the smallest next change?
```

---

## How these prompts fit the workshop journey

```
01. Fillable form (claude-design-beginners.vercel.app)
       │
       ▼
02. Generate brand folder (Claude Code, paste form's prompt)
       │
       ▼
03. Upload DESIGN.md to Claude Design (claude.ai/design)
       │
       ▼
04. Run prompt 01 (Master Check) to confirm system loaded
       │
       ▼
05. Run prompts 02-04 to generate visual outputs
       │
       ▼
06. Run prompt 05 to iterate
       │
       ▼
07. Export from Claude Design (PDF, PPTX, HTML, Canva, Code)
```

**Why this flow exists:**

- **The form** captures the brand thinking. 10 questions, 4 minutes.
- **Claude Code** converts the form into a working folder. The SKILL does this in ~90 seconds.
- **Claude Design** uses the folder's `DESIGN.md` to skin every visual you build.
- **The 5 prompts** turn that skinned canvas into shippable assets in 5-10 minutes each.

The brand-in-a-box folder is the dependency for both tools. Without it, both tools produce generic output. With it, both tools produce on-brand output. Same folder, two surfaces.

Built for the [Build a Business That Runs By Itself](https://purely-personal-workshop.vercel.app/) workshop, May 2026.

Form: https://claude-design-beginners.vercel.app/
Repo: https://github.com/danielpaulai/Claude-Design
Code-flavored prompts: [docs/prompts.md](prompts.md)
