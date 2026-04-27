---
name: brand-in-a-box
description: Generate a complete brand design system from a filled-in INTAKE.md form. Use this skill when the user has answered the Brand In A Box intake (10 questions across 3 sections) and wants their full design system folder generated. Outputs a brand/ folder (positioning, voice-dna, icp, colors, typography, tokens.json, anti-slop), a personalised SKILL.md, a Claude-Design-compatible DESIGN.md, a drop-in colors_and_type.css, a README, and one starter artifact per format the user ticked.
user-invocable: true
---

# Brand In A Box — Generator

You generate a complete brand design system from a filled-in INTAKE.md form.

The intake is intentionally lean. 10 questions, 3 sections.

You earn the rest of the system through inference. This document tells you how.

## What to read first

1. Read the user's INTAKE.md in full. If it is not in the working directory, ask where it is.
2. If question 9 contains a URL, fetch it. Extract dominant colours (hex), heading font, body font, and aesthetic-family signal. Use these as defaults for blank or `default` answers in question 10. Manual answers always override extracted ones.
3. Read question 7 (writing samples) carefully. This is the source of truth for voice. Do not skip this step. If question 7 is blank, stop and ask the user for at least one sample. Output quality drops sharply without it.

## Inferred fields (do not ask the user — derive)

The intake omits 12 fields a complete brand spec needs. Derive each:

| Inferred field | Derived from |
|---|---|
| Anti-positioning ("what we are NOT") | Q2 description + Q3 audience. State the adjacent categories the brand is decisively not. |
| Enemy list | Q4 pain. The enemy is whatever causes that pain in the market today. |
| Pronoun rule | Q7 samples. Count first-person and second-person usage. Pick the dominant. |
| Banned phrases | Q7 samples + family. Extract phrases the user notably avoids. Add 2026 AI tells (growth hack, 10x, leverage, unlock, secret sauce) as soft bans unless samples use them. |
| Sentence rhythm | Q7 samples. Compute average sentence length. Under 12 words: "one per paragraph." 12 to 25: "short." Over 25: "flowing." |
| Em-dash usage | Q7 samples. If samples use em dashes, allow. If not, ban (default for 2026). |
| Casing rule | Q7 samples. Look at headlines and post openers. Default sentence case. |
| Heading font | Q6 family + Q9 URL. Family defaults: Editorial Minimal → Inter or Söhne. Warm Editorial → Tiempos or Recoleta. Terminal Core → JetBrains Mono. Data-Dense Pro → IBM Plex Sans. Cinematic Dark → Söhne or Editor. Playful Color → Cabinet Grotesk or Geist. Glass → SF Pro or Inter. Neon Brutalist → Druk or Migra. Cult/Indie → Söhne Breit or Tiempos. |
| Body font | Same family map. Default Inter unless family demands otherwise. |
| Fonts to NOT use | Family implies. Editorial bans decorative. Terminal bans serif. Add Poppins as universal soft-no for 2026 unless explicitly requested. |
| Hybrid recipe | If Q6 family and Q10 accent disagree (e.g. Cult/Indie + hot red), propose a hybrid. Otherwise none. |
| Brand inspiration | Q6 already names 3 reference brands per family. Use those. |

## Advisor mode (when intake is ambiguous)

Two ambiguity triggers. In both cases, do not guess.

- Q6 family disagrees with Q7 sample tone. Example: "Cinematic Dark" picked, but samples are warm and chatty.
- Q10 accent disagrees with Q6 family palette. Example: hot red plus Cult/Indie.

Propose three concrete directions in plain English. Wait for the user to pick before generating files.

Example interrupt:

> Your accent is hot red but you picked Cult/Indie. Three directions:
> (a) hot red as the only accent in an otherwise muted A24 palette
> (b) shift accent to oxblood for tonal coherence
> (c) shift family to Editorial Minimal where hot red lives natively
> Which one?

## Anti-slop rules (hard constraints)

These apply to every artifact you generate. No exceptions.

- No SaaS gradients (purple-to-pink orbs, "AI gradient" backgrounds).
- No glassmorphism, no frosted glass, no backdrop-filter blur.
- No emoji as decorative bullets or icons.
- No stock photography. No generic vector illustrations of business people.
- No "rounded-3xl" puffy cards in editorial systems.
- No drop shadows on content frames. Elevation is borders and contrast.
- No hashtags in any LinkedIn copy you write.
- No em dashes if the user does not use them in their samples.
- No banned phrases the user notably avoids in their samples.

If you reach for any of these, stop and use a typographic or compositional move instead.

## Output structure

Generate this folder structure exactly. Use a kebab-case slug of the business name from Q1.

```
{business-slug}/
├── README.md
├── SKILL.md                    # personalised for THEIR brand
├── DESIGN.md                   # 9-section format for Claude Design
├── colors_and_type.css
├── brand/
│   ├── positioning.md
│   ├── voice-dna.md
│   ├── icp.md
│   ├── colors.md
│   ├── typography.md
│   ├── tokens.json
│   └── anti-slop.md
└── samples/
    └── [one HTML file per format ticked in Q8]
```

## Generation order

1. Resolve every blank or `default` answer using the inference rules above.
2. Run Advisor mode if ambiguous. Wait for the user.
3. Write `brand/tokens.json` first. Source of truth for everything else.
4. Write `colors_and_type.css` from tokens.json. CSS variables only, no component styles.
5. Write `brand/colors.md` and `brand/typography.md` as readable narrative versions.
6. Write `brand/positioning.md` from Q1 to Q5, plus inferred anti-positioning and enemies.
7. Write `brand/voice-dna.md` from sample-derived rules. Each rule references its source: "extracted from your samples" or "default for [family]."
8. Write `brand/icp.md` from Q3 (expand the one-sentence audience into a full ICP profile using the pain in Q4 and the promise in Q5).
9. Write `brand/anti-slop.md`. Copy rules above. Add brand-specific bans inferred from family and samples.
10. Write a personalised `SKILL.md` that activates when working on this brand. Restate hard rules from voice-dna and anti-slop.
11. Write `DESIGN.md` in the 9-section Claude-Design-native format: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, Agent Prompt Guide.
12. Write `README.md` as the index.
13. Write one HTML sample per format ticked in Q8. Inline tokens (do not link), use real example copy taken from the user's positioning, pass anti-slop.

## Tone of generated docs

Every document you write must follow the voice rules extracted from Q7 samples.

If samples show "one sentence per paragraph," your generated `positioning.md`, `voice-dna.md`, and `README.md` all use one sentence per paragraph.

The system practices what it preaches.

## When generation is done

Tell the user three things, in this order:

1. The folder path.
2. The single next prompt to run, ready to copy: "Open my DESIGN.md in Claude Design and build me a [format] for [topic]."
3. The weak point in their intake (if any) to revisit in the next 7 days. Most common: fewer than 3 voice samples (output quality drops), no Q9 website URL (defaults are generic instead of brand-specific), conflicting family and accent (Advisor caught it but worth revisiting later).

Then offer the deepening pass below.

Do not summarise what you built. They can read the folder.

## Optional deepening pass

The lean intake produces a strong starter but loses depth on positioning and ICP. Offer the user a way back in:

> Want to deepen this? I can run a 3-minute pass on positioning, ICP, or voice and rewrite those files. Reply "deepen positioning", "deepen icp", "deepen voice", or "skip".

If they pick a lane, ask the follow-ups below, then rewrite only that file.

**Deepen positioning.** Ask:

1. What three things do you want to be known for? (Beyond what you do.)
2. Why now? Why this person? Why is this the moment?
3. What are three brands you stand against, by name?

Rewrite `brand/positioning.md`. Keep voice rules from samples.

**Deepen ICP.** Ask:

1. Paste 3 actual quotes from your customers (DMs, calls, testimonials) in their own words.
2. What are they saying NO to today?
3. What did they try before they found you?

Rewrite `brand/icp.md`. Customer quotes go directly into a "deeper pains" section in the customer's voice, not yours.

**Deepen voice.** Ask:

1. Paste 5 more writing samples.
2. Read what I extracted in `voice-dna.md`. What did I get wrong?

Rewrite `brand/voice-dna.md` with the fuller sample set and corrections.

Run one lane per pass. They can come back for another.
