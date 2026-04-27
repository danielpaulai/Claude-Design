# Workshop Flow — From Form to Finished Design

The complete journey an attendee takes from "I have a brand idea" to "I have shipped designs in my brand."

## The 7-step journey

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   01. Open the fillable form                                     │
│       → claude-design-beginners.vercel.app                       │
│       → Browser, no install                                      │
│                                                                  │
│   02. Answer 10 questions, click Generate                        │
│       → Form composes a Claude prompt                            │
│       → Click Download brand-in-a-box.zip                        │
│                                                                  │
│   03. Generate the brand folder                                  │
│       → Open Claude Code in the unzipped folder                  │
│       → Paste the prompt                                         │
│       → ~90 seconds: brand/, DESIGN.md, SKILL.md, samples/       │
│                                                                  │
│   04. Upload DESIGN.md to Claude Design                          │
│       → claude.ai/design                                         │
│       → New project → Add assets → upload DESIGN.md              │
│                                                                  │
│   05. Run prompt 01 (Master Check)                               │
│       → Confirms DESIGN.md is loaded                             │
│       → Locks rules for the rest of the session                  │
│                                                                  │
│   06. Run prompts 02-04 to generate visuals                      │
│       → Topic to Carousel                                        │
│       → Winning Ad to My Version                                 │
│       → Pinterest to My Layout                                   │
│                                                                  │
│   07. Run prompt 05 to iterate, then export                      │
│       → V1 + V2 side by side, 60-word diff                       │
│       → Export to PDF / PPTX / HTML / Canva / Code               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Why two tools, not one

The system uses Claude Code AND Claude Design. Each does what it's best at.

| Tool | Best for | What it produces |
|---|---|---|
| **Claude Code** | Generating files, running the SKILL, bulk content | Folders with markdown, JSON, CSS, HTML |
| **Claude Design** | Visual canvas, live rendering, design iteration | On-canvas designs, exportable to many formats |

The bridge between them is `DESIGN.md`. Claude Code generates it. Claude Design ingests it. Once that handoff happens, attendees can stay in Claude Design for everything else.

## Why the form exists

Without the form, attendees have to type their answers from scratch every time they want to regenerate. The form:

- Captures the brand thinking once
- Saves answers in localStorage so they persist across sessions
- Composes a structured prompt so Claude Code doesn't have to parse free-form text
- Provides a live preview of the brand as they fill it (the wow moment)

The form is step 1 because it's the lowest-friction entry point. No install, no terminal, no learning curve.

## Why the SKILL exists

The SKILL is what turns 10 form answers into a complete design system folder. Without it, the form would just produce a markdown document.

The SKILL handles:

- **Inference.** 12 fields (anti-positioning, voice rules, font defaults, banned phrases, etc.) are derived from the 10 answers, not asked.
- **Voice extraction.** Reading samples are parsed to extract sentence rhythm, pronoun patterns, and banned phrases empirically.
- **Defaults.** Each aesthetic family has built-in font and palette defaults.
- **Advisor mode.** When inputs conflict (e.g., hot red accent + Cult/Indie aesthetic), the SKILL pauses and proposes 3 directions instead of guessing.
- **Anti-slop discipline.** Universal hard bans on every artifact (no SaaS gradients, no glassmorphism, no em dashes, etc.).

The SKILL is the difference between "Claude wrote me some files" and "Claude built me a brand."

## Why DESIGN.md is the bridge

`DESIGN.md` is the Claude-Design-native format. It's a 9-section markdown file that Claude Design's UI accepts directly under "Add assets."

The 9 sections are:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Section 9 is the one most people miss. It tells Claude Design *how to behave* when generating in this brand — what to do when the brief is ambiguous, what to never ship, what defaults to use.

When attendees upload their `DESIGN.md`, all 9 sections become persistent context for every prompt in the project. They don't re-explain themselves on every prompt.

## What "shipping" looks like in Claude Design

When an attendee finishes prompt 05 (Iterate) and is happy, they hit Export. Options:

| Format | Use case |
|---|---|
| PDF | LinkedIn document carousel, one-page handouts, brand decks |
| PPTX | PowerPoint pitches, conference talks |
| HTML | Standalone web pages, landing pages |
| Canva | Hand off to a team member who lives in Canva |
| Claude Code | Hand off to a developer for production code |
| Zip | Archive everything, version-control the assets |

The PDF and Canva exports are the most common for the workshop's target audience (founders shipping LinkedIn content).

## Failure modes to teach attendees about

These are the moments where attendees get stuck. Cover them in the workshop.

### "Claude Code can't find SKILL.md"
The brand folder is in a subdirectory, not at the CWD root. Either `cd` into the folder first, or use the auto-find logic in the updated Master Prompt (prompt 01).

### "Claude Design generates generic SaaS-purple gradient slop"
DESIGN.md is not loaded. Re-upload it under "Add assets" in the project settings.

### "The output uses words from my banned list"
Voice samples (form question 7) were too short or too generic. Re-run with 3 longer samples.

### "Every output looks the same"
The accent is over-used. Run prompt 05 (Iterate) with: *"Reduce accent color uses by 50%. Cut anywhere it's not on a verb, number, or CTA."*

### "Claude Design exports look low-res"
Set the canvas size to the largest version of the format you'll need. Use 300dpi for one-pagers, 1080×1350 for LinkedIn carousels (already optimal), 1920×1080 for pitch decks.

## Two handouts, two surfaces

| Handout | Surface | When to use |
|---|---|---|
| [handout-five-prompts.pdf](../public/handout-five-prompts.pdf) | Claude Code | When attendees prefer the developer-style workflow with @file refs |
| [handout-claude-design.pdf](../public/handout-claude-design.pdf) | Claude Design | When attendees want the visual canvas workflow at claude.ai/design |

Both produce the same kinds of artifacts (carousels, ad redos, layouts, iterations). The mechanics are different but the intent is identical.

For the workshop, **lead with Claude Design** (the canvas demo is more impressive on stage) and mention Claude Code as the developer-track option for attendees who want it.

## The system, in one sentence

The form captures the brand. Claude Code generates the system. Claude Design ships the visuals. The five prompts run on top of all three.
