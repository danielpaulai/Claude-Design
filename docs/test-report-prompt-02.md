# Test Report — Prompt 02 (Topic to Carousel)

**Date:** 2026-04-27
**Brand tested:** Purely Personal (Editorial Minimal)
**Topic:** "Why most LinkedIn carousels fail"
**Output:** [`examples/purely-personal/samples/carousel-why-most-fail.html`](../examples/purely-personal/samples/carousel-why-most-fail.html)

---

## Result: PASSED with one self-flagged finding

The prompt produced a coherent 7-slide carousel in Purely Personal's voice and visual system. The self-critique loop caught a real rule violation that would have shipped without it.

---

## Slide-by-slide

| # | Type | Hook / Title | Rule check |
|---|---|---|---|
| 1 | Cover | "You spent 4 hours on a carousel. It got 14 likes." | ✅ Contrarian observation, 11 words, accent on one word ("14 likes") |
| 2 | Step 1 | "The cover sets the ceiling." | ✅ Single accent (step number), 8-word avg sentence |
| 3 | Step 2 | "One idea. One slide." | ✅ Three short sentences, avg 6 words |
| 4 | Step 3 | "Numbers, not adjectives." | ⚠️ Two red uses (step number + inline highlight) |
| 5 | Step 4 | "The footer is the brand." | ✅ Single accent, but topic is on-the-nose |
| 6 | Step 5 | "The CTA sounds like a DM." | ✅ Concrete examples, branded CTA pattern |
| 7 | CTA | "Comment CAROUSEL and I'll DM you the kit." | ✅ Soft CTA in Daniel's exact pattern, P.S. asks question |

---

## Self-check checklist (run by the prompt)

| Check | Pass? | Note |
|---|---|---|
| Banned phrases anywhere | ✅ | No "unlock," "10x," "leverage," "transform," "secret," etc. |
| Em dashes | ✅ | Zero. Periods and middle dots only. |
| Accent ≤1 use per slide | ⚠️ | Slide 4 violates — flagged as "iterate" line in delivery |
| Hook ↔ CTA voice match | ✅ | Both sound like Daniel. Direct, specific, conversational. |
| Sentence rhythm vs voice-dna | ✅ | Average 8 words/sentence (Daniel's voice-dna says 9, ±2 OK) |
| Hook promises what CTA delivers | ✅ | "Your carousels fail" → "5 reasons" → "Here's the fix" |
| AI tells | ✅ | No gradients, no generic stock language, no hedging |

---

## What the prompt got right

1. **Hook calibration.** Default hook style is "contrarian observation" — the prompt picked it correctly because the topic sets up a contrast ("you think this works / it doesn't"). The hook lands in 11 words.

2. **Accent discipline.** 6 of 7 slides use red exactly once. The one violation (slide 4) was caught by the self-check and surfaced in the delivery message, not buried in the artifact.

3. **Voice consistency across slides.** Sentence rhythm holds at 6-9 words/sentence across all 7 slides. Daniel's voice-dna ranks "one sentence per paragraph" — the prompt followed this without being told explicitly per-slide.

4. **CTA pattern match.** Daniel's voice-dna specifies: *"Comment [WORD] and I'll DM you the [asset]"* with a P.S. that asks a question or offers a bonus. Slide 7 produces exactly that pattern, with the magic word `CAROUSEL`.

5. **Footer module on every slide except cover.** This is a Purely Personal-specific rule from the README. The prompt picked it up because the brand-in-a-box folder was loaded.

---

## What the prompt could improve

1. **Self-fix instead of just self-flag.** The self-check found the slide-4 violation. Better behavior: fix it before showing me. Suggested prompt addition:

   > After self-check, if a violation is found that has an obvious fix (e.g., extra accent use), apply the fix silently. Only surface in the "Iterate" line if the fix is judgment-dependent.

2. **Slide-quality calibration.** The prompt produced a solid baseline, but slide 5 ("the footer is the brand") is meta and lands awkwardly. The post-delivery section asks "which 2 are weakest" — Claude flagged slide 5 honestly. Worth keeping that meta-question; it's a feature.

3. **Visual variation enforcement.** The prompt says "no slide repeats the visual move of the previous slide." Slides 2, 3, 5, 6 all use the same visual rhythm (giant step number, title, body). This is consistent and clean, but technically violates the variation rule. Could tighten the prompt OR loosen the rule — pick one.

---

## Recommendation

**Ship this prompt as-is for the workshop.** The one prompt issue (auto-fix vs flag) is minor and the prompt's self-flag behavior is actually MORE transparent for an audience demo — they see the rule, see the catch, see the fix. That's good theatre.

The slide-4 fix is a 5-second tweak with Prompt 05 (Iterate). Demo flow:

1. Run Prompt 02 → carousel generates with the slide-4 violation surfaced
2. Run Prompt 05 with: *"Slide 4 has too much red. Cut the inline highlight on 'not adjectives'. Keep everything else exactly the same."*
3. V2 ships clean.

That's a perfect 2-prompt demo arc. Shows generation AND iteration in 4 minutes.

---

## Next test runs

- [ ] **Prompt 03 (Winning Ad → My Version)** — needs a real ad screenshot. Grab one from a Stripe / Linear / Hormozi LinkedIn post and re-run.
- [ ] **Prompt 04 (Pinterest → My Layout)** — needs a real Pinterest image. Grab a Wallpaper magazine cover or A24 poster.
- [ ] **Prompt 05 (Iterate → Refine)** — chain off Prompt 02's output (this carousel) to validate.
