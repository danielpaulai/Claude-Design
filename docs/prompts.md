# The 5 Prompts

The exact prompts that ran the workshop demo. Copy-paste each one into Claude Code with your brand-in-a-box folder loaded. They are ordered: run #1 first to set the session, then any of #2–#5 as needed.

Each prompt is engineered for a specific job. They are not interchangeable. They do not work without the brand-in-a-box folder loaded.

---

## 01 — The Master Prompt

**When to run:** First prompt of any session.
**What it does:** Loads the brand into Claude's working memory and locks every artifact you generate to your voice and visual system until you explicitly say otherwise.

```
You are my brand-in-a-box operating system for this session.

Your role: act as my senior brand systems strategist. You have read every
file in my brand-in-a-box folder and you carry the brand's soul in your
head until this session ends.

═══ FIND THE BRAND FOLDER FIRST ═══

Before reading anything, locate the brand-in-a-box folder. Try in order:

1. Current directory — does SKILL.md exist at the root? Does ./brand/ exist?
   If yes, the folder IS the current directory. Use empty prefix.
2. Any subdirectory of CWD — list folders, look for one that contains
   SKILL.md plus a brand/ subfolder (e.g., ./purely-personal/, ./my-brand/,
   ./brand-in-a-box/). If exactly one matches, use it. If multiple match,
   ask which.
3. If neither works, ask me for the absolute path. Stop and wait.

Once found, prefix every @ reference below with that folder path
(e.g., @purely-personal/SKILL.md instead of @SKILL.md).

Tell me the path you found in one line, then proceed.

═══ READ ORDER (do this first, in this order) ═══

1. @SKILL.md             — the meta-rules for this brand
2. @brand/positioning.md — what we sell, who we serve, what we stand against
3. @brand/voice-dna.md   — how we sound (this is the most important file)
4. @brand/icp.md         — the actual person we're talking to
5. @DESIGN.md            — the visual system (Claude Design native format)
6. @brand/anti-slop.md   — the things that get the brand fired
7. @brand/tokens.json    — source of truth for every color, font, size

═══ BRAND SOUL CHECK (before you reply) ═══

After reading, internally answer in one sentence each:
- Who is this brand FOR? (one specific person, not a category)
- What are we selling that nobody else sells? (the wedge)
- What sentence would make this brand wince? (the boundary)
- What sentence would make this brand smile? (the calibration)

You will NOT show me these answers. They guide every artifact you make.

═══ EVERY ARTIFACT FROM NOW ═══

Voice contract:
1. Match the rhythm, banned phrases, and pronoun rules in voice-dna.md exactly.
2. Use real example phrases from positioning.md. Never lorem ipsum.
3. Before you write any copy, ask yourself: "Would the founder say this on
   a sales call?" If no, rewrite.

Visual contract:
1. Pull every color and font from tokens.json. No improvisation.
2. The accent color appears at most ONCE per visible frame, on a verb,
   a number, or a CTA. Never on body paragraphs.
3. Match the family's signature gesture (Editorial Minimal = 0px corners
   plus black borders. Warm Editorial = 8px plus warm-gray. Cinematic
   Dark = void canvas. etc).
4. Output static HTML, one file per artifact. Inline tokens — do not
   link external CSS.

Self-critique contract (run this BEFORE showing me anything):
☐ Scan the artifact against anti-slop.md. Did you do anything banned? Fix.
☐ Read the copy out loud in your head. Does it match the rhythm in
  voice-dna.md?
☐ Count accent uses per frame. More than 1 visible at once? Cut.
☐ Any lorem ipsum, generic stock language, or hedging language? Replace.

═══ WHEN I ATTACH AN IMAGE ═══

Do not assume. Ask one question:

"Which mode?
 (a) Match-energy — borrow tone and density, not visuals.
 (b) Layout-structure — borrow composition, not colors or fonts.
 (c) Pure reference — extract one specific element, ignore the rest.
 (d) Anti-reference — do the opposite of what this image does."

Wait for my answer before generating.

═══ DELIVERY PROTOCOL ═══

When you finish an artifact, do NOT summarise what you built. Reply with
exactly three lines:

  Path:    {file path}
  Iterate: {one specific thing I might want to refine}
  Next:    {the next prompt I should run, ready to copy}

The artifact speaks for itself.

═══ NOW ═══

Confirm in one line: "Brand soul loaded. Ready."

If you cannot answer the four soul-check questions internally, say which
file you cannot find and stop.
```

---

## 02 — Topic to Carousel

**When to run:** Anytime you need a LinkedIn carousel. Replace `[INSERT TOPIC]` with your idea.
**What it does:** Generates a 7-slide carousel HTML at 1080×1350 in your brand. Cover hook, 5 lessons, soft CTA.

```
═══ MISSION ═══

Topic: [INSERT TOPIC]
Outcome: One LinkedIn carousel that earns me the inbound DM from my ICP.

═══ THINK FIRST ═══

Before you generate anything, in your head:

1. Open @brand/icp.md. Who specifically opens this carousel?
2. What deeper pain from icp.md does this carousel agitate?
3. Which hook mechanism from voice-dna.md fits this topic best?
4. Pick ONE big idea per slide. If two ideas could share slide 3, you
   have two slides, not one.

═══ STRUCTURE ═══

7 slides. 1080×1350 each. Vertical PDF carousel.

Slide 1 — COVER
  Hook in 8-12 words.
  Eyebrow: tiny uppercase label using my eyebrow style.
  Visual: type-driven. Big serif/sans per family.
  Accent color on ONE word.
  Footer module: avatar + byline + repost pill.

Slides 2-6 — LESSONS (5 of them)
  Each slide does ONE job:
    - Eyebrow "STEP N" in mono if family allows
    - Lesson title in 5-9 words
    - Body in 2 sentences max (count words against voice-dna.md rhythm)
    - One visual element: card, icon, number, or quote
  No slide repeats the visual move of the previous slide.
  Vary the rhythm.

Slide 7 — CTA
  Soft, in-line, sounds like a DM not an ad.
  Pattern from my voice-dna: "Comment [WORD] and I'll DM you the [asset]."
  Below it: a P.S. that asks a question or offers a bonus
  (per my voice-dna).

═══ COPY DISCIPLINE ═══

Voice extraction from voice-dna.md:
- Match my average sentence length within ±2 words.
- Use 1-2 of my ranked hooks (e.g., contrarian observation, transformation,
  category reframe).
- Include one specific number with a timeframe.
- Banned phrases get auto-rejected. Re-read voice-dna if you reach for one.

Forbidden across all slides:
- Em dashes
- Hashtags
- Emoji
- Any word from my banned list
- "Unlock," "leverage," "transform," "10x," "secret"

═══ OUTPUT ═══

One HTML file: carousel-{topic-slug}.html
Each slide is <section class="slide"> at exactly 1080×1350.
Slides stack vertically with 32px gap.
Inline ALL tokens — do not link external CSS.

═══ SELF-CHECK BEFORE DELIVERY ═══

Run this checklist on yourself, fix anything that fails:

☐ Did I use any banned phrase, anywhere?
☐ Is the accent color used more than once on any single slide?
☐ Are the slide-1 hook and slide-7 CTA in the same voice register?
☐ Does the rhythm match voice-dna.md? (count words on 3 random slides)
☐ Does the slide-1 hook promise what slide-7 delivers?
☐ Any "AI tells" — gradient, generic illustration, em dash, generic
  stock language?

═══ AFTER DELIVERY ═══

Tell me which TWO slides are the weakest, and offer to remix them.
Suggest the next 3 carousel topics for follow-up in this series.
```

---

## 03 — Winning Ad to My Version

**When to run:** When you see an ad performing in your industry and you want to learn what makes it work, then ship the same impact in your brand.
**What it does:** Decodes the ad's structure forensically, then rebuilds the same impact in your visual and voice system. Three variations.

```
═══ INPUT ═══

[ATTACH SCREENSHOT OF THE AD]

Industry context: [my industry, e.g., "B2B SaaS founders selling to ops teams"]
Why I think this works: [one sentence — your hypothesis]

═══ STEP 1: FORENSIC DECODE ═══

Look at the ad like a designer doing a critique. Output:

📐 Composition
  - Where does the eye land first, second, third?
  - What's the negative space ratio (% of frame that's empty)?
  - What anchor (line, edge, object) holds the composition?

🎯 Copy
  - What's the hook structure? (contrarian / transformation / curiosity / etc.)
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
  - Who is it NOT for? (the anti-audience tells you who it IS for)

═══ STEP 2: BRAND TRANSLATION ═══

Now build my version. Same skeleton, my brand.

Take from the original:
✓ The composition (where eye lands)
✓ The copy structure (hook → ladder → close)
✓ The emotional beat
✓ The negative space ratio

Replace from my brand:
✗ Colors → my tokens.json
✗ Fonts → my families
✗ Voice → my voice-dna.md
✗ Specific imagery → my brand's imagery rules
✗ The accent move → wherever my system says accent goes

═══ STEP 3: VARIATIONS ═══

Generate 3 variations:

  V1. FAITHFUL — closest mapping to the original.
  V2. CONFIDENT — push my brand's signature gesture harder.
  V3. RISKY — invert one decision from the original
       (e.g., if original is dense, mine is sparse).
       This is the version I'd ship if I were brave.

Each variation: one HTML file at the original's exact dimensions.

═══ STEP 4: VERDICT ═══

After delivery, answer:

1. Which variation would YOU ship and why? Pick V1, V2, or V3.
2. If I A/B test the original brand against my V1-V3, predict engagement.
   Rank them.
3. What did the original do that I should NOT copy because it doesn't fit
   my brand?

═══ ANTI-PATTERNS ═══

Do not copy:
- The exact color palette (even subconsciously — check yours against theirs)
- Specific imagery or product shots
- The exact fonts (use my families)
- Their voice register if it conflicts with my voice-dna.md
```

---

## 04 — Pinterest to My Layout

**When to run:** When you find a beautiful layout (magazine cover, poster, album art) but the brand is nothing like yours.
**What it does:** Extracts compositional structure only — never colors or fonts — and applies your brand. Two variations: faithful and loosened.

```
═══ INPUT ═══

[ATTACH PINTEREST IMAGE]
(Magazine cover, poster, album art, or editorial layout.)

What I want to build: [carousel cover / image post / one-pager / banner / pitch slide]

═══ EXTRACTION TARGETS ═══

From this reference, extract ONLY structural intelligence. Tell me:

📐 The grid
  - Asymmetric, symmetric, or modular?
  - Where are the alignment lines? (left edge, center, golden ratio, etc.)
  - Column structure? (single, 2-col, 3-col, mixed)

🎯 The focal point
  - What pulls the eye first?
  - How is it framed? (negative space, border, contrast, scale)
  - Ratio of focal-area to total-area?

📏 The typography hierarchy
  - Hero size : body size ratio (rough)
  - Number of distinct type styles (1-3 max for editorial discipline)
  - Where does type sit relative to the focal point?

⚖ The density rhythm
  - Crowded → empty distribution, or even?
  - Where does the eye get to rest?

═══ APPLY TO MY BRAND ═══

Build the artifact in MY brand. Structure is borrowed, everything else
is mine.

Forbidden imports from the reference:
✗ Colors (use my tokens.json)
✗ Fonts (use my families)
✗ Imagery (use my brand's imagery rules)
✗ Mood (my brand has its own)

Required from the reference:
✓ The grid structure
✓ The focal-point framing
✓ The negative space ratio
✓ The type hierarchy ratio

═══ OUTPUT ═══

V1. FAITHFUL — structure mapped 1:1, brand applied.
V2. LOOSENED — structure simplified by 20%, more breathing room.

Both as HTML files at the canvas size for the format I requested.

═══ AFTER ═══

In ONE paragraph (no bullets), tell me:
- What you transferred from the reference (be specific about layout decisions)
- What you deliberately did not transfer
- Which variation feels more like the brand and why

═══ THE TASTE TEST ═══

Before delivering, ask yourself:

"If I removed all my brand colors and fonts and showed a designer the
wireframe side-by-side with the reference's wireframe, would they see
the same skeleton?"

If yes → you nailed the structural transfer.
If no → redo it.
```

---

## 05 — Iterate to Refine

**When to run:** After any artifact, when 80% is right and 20% needs adjusting.
**What it does:** Iterates without losing what worked. Produces V1 and V2 side-by-side with a 60-word diff explained.

```
═══ INPUT ═══

The artifact you just shipped: [filename]

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
softening, and trying. If anything is ambiguous, ask ONE question. Just one.

Step 2: Build V2 in the same canvas size.

Step 3: Output one HTML file with:
  - V1 on the left (the previous version, untouched)
  - V2 on the right (your iteration)
  - A 60-word "diff explained" section below
  - The diff names the specific decisions you made and why

═══ DIFF DISCIPLINE ═══

A real iteration changes 3-5 things, not 30.

If you find yourself rewriting half the artifact, you are starting over,
not iterating. Pause and ask me if that's what I want.

═══ TASTE CALIBRATION ═══

Before showing V2, run this gut-check:
☐ Is V2 still recognisably the same artifact, just better?
☐ Does it solve the spec or just change for the sake of changing?
☐ Have I preserved every "Keep untouched" item literally?

If any answer is no, fix V2 before showing.

═══ AFTER ═══

Two questions for me:
1. Ship V1, ship V2, or run another iteration?
2. If we iterate again, what's the smallest next change?
```

---

## How these prompts work together

The five prompts are a system. Run them in order:

```
01 (Master) → loads the brand
02 (Carousel) → ships content fast
03 (Ad redo) → ships premium content from competitor research
04 (Pinterest) → ships premium content from aesthetic research
05 (Iterate) → ships finished work, not first drafts
```

Two failure modes to avoid:
1. **Skipping #01.** Without the master prompt, every other prompt is generic.
2. **Treating #02-#04 as one-shot.** They produce drafts. Real shipping happens at #05.

The brand-in-a-box folder is the dependency. None of these work without it loaded.

Built for the [Build a Business That Runs By Itself](https://purely-personal-workshop.vercel.app/) workshop, May 2026.

Repo: https://github.com/danielpaulai/Claude-Design
Live form: https://claude-design-beginners.vercel.app/
