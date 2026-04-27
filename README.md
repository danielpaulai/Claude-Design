# Brand In A Box

A 10-question form that turns into a complete brand design system in Claude.

Built for the [Purely Personal workshop](https://purely-personal-workshop.vercel.app/). MIT licensed. Take it, fork it, ship it.

[**→ Try the live form**](https://claude-design-beginners.vercel.app/) · [**↓ Download the zip**](https://claude-design-beginners.vercel.app/brand-in-a-box.zip) · [**Browse examples**](examples/)

[**Code-flavored prompts (PDF)**](https://claude-design-beginners.vercel.app/handout-five-prompts.pdf) · [**Claude Design prompts (PDF)**](https://claude-design-beginners.vercel.app/handout-claude-design.pdf) · [**Workshop flow**](docs/workshop-flow.md)

![Brand In A Box demo — fill the form, watch your brand appear, generate the prompt](docs/demo.gif)

---

## What this is

You answer 10 questions about your brand.

The form generates a Claude prompt.

You paste the prompt into Claude with `brand-in-a-box.zip` attached.

In about 90 seconds Claude writes you a complete brand design system: positioning, voice DNA, ICP, color tokens, typography, a CSS file, a personalised skill, a Claude-Design-native `DESIGN.md`, and one starter artifact per format you ticked.

You walk out with a starter that beats 90% of what most founders ship in their first year.

---

## What's in this repo

```
Claude-Design/
├── intake/                       The kit. Lives inside brand-in-a-box.zip.
│   ├── INTAKE.md                 The 10-question form.
│   ├── INTAKE-EXAMPLE.md         A filled-in example (Purely Personal).
│   ├── SKILL.md                  The agent-invocable generator.
│   └── README.md                 How attendees use the kit.
│
├── examples/                     Generated systems. Proof the SKILL works on different families.
│   ├── purely-personal/          Editorial Minimal — sans-serif, hot red, 0px corners.
│   ├── marigold-and-oak/         Warm Editorial — serif, terracotta, 8px corners.
│   └── voltage-labs/             Cinematic Dark — geo sans, electric cyan, void canvas.
│
├── public/                       Static assets served by Vercel.
│   ├── index.html                The interactive form with live brand preview (served at /).
│   ├── og-image.html             Source for the social card. Screenshot at 1200×630.
│   └── brand-in-a-box.zip        The downloadable kit (built by scripts/bundle-zip.sh).
│
├── docs/                         Recording instructions for the demo GIF and OG image.
│
├── scripts/
│   └── bundle-zip.sh             Builds public/brand-in-a-box.zip from intake/ + examples/.
│
├── vercel.json                   Routing + clean URLs.
├── README.md                     This file.
└── LICENSE                       MIT.
```

---

## How to use it (workshop attendee)

1. Open the [live form](https://claude-design-beginners.vercel.app/).
2. Fill in 10 questions. Four minutes if you move fast.
3. Click **Generate Claude prompt**. Copy.
4. Click **Download brand-in-a-box.zip**. Unzip.
5. Open Claude Code or Claude Desktop in the unzipped folder. Paste the prompt.
6. In ~90 seconds you have a complete brand design system folder.

Fill the fields, generate, download, paste. Four steps.

---

## How to develop it (you, on this repo)

```bash
git clone https://github.com/danielpaulai/Claude-Design.git
cd Claude-Design

# Edit intake/ or examples/ files
# Then rebuild the zip:
bash scripts/bundle-zip.sh

# Local preview of the form:
open public/design-intake.html

# Deploy to Vercel:
vercel deploy --prod
```

The zip is regenerated from `intake/` + `examples/` every time you run `scripts/bundle-zip.sh`. Don't edit the zip directly.

---

## What you get from running the SKILL

Once Claude reads your filled `INTAKE.md` and runs the brand-in-a-box skill:

```
your-brand-slug/
├── README.md                 How to use the folder
├── SKILL.md                  Personalised skill, activates for your brand
├── DESIGN.md                 9-section format Claude Design ingests directly
├── colors_and_type.css       Drop-in CSS variables
├── brand/
│   ├── positioning.md        One-line positioning, alternatives, enemies
│   ├── voice-dna.md          Voice rules extracted from your samples
│   ├── icp.md                Ideal client profile
│   ├── colors.md             Brand colors with usage rules
│   ├── typography.md         Type system with hard rules
│   ├── tokens.json           DTCG-format design tokens (source of truth)
│   └── anti-slop.md          What NOT to do
└── samples/                  One HTML artifact per format you ticked
```

Browse [`examples/`](examples/) for three complete worked examples:

- [Purely Personal](examples/purely-personal/) — Editorial Minimal (sans, hot red, 0px corners)
- [Marigold & Oak](examples/marigold-and-oak/) — Warm Editorial (serif, terracotta, 8px corners)
- [Voltage Labs](examples/voltage-labs/) — Cinematic Dark (geo sans, electric cyan, void canvas)

Same SKILL, three different aesthetic families, three coherent systems. Proof the kit works for any brand, not just the founder who built it.

---

## The 9 aesthetic families

Question 6 asks you to pick one. You can change later. Pick the closest.

| Family | Vibe | Reference brands |
|---|---|---|
| Editorial Minimal | Calm neutrals, big type, surgical density | Linear, Stripe, Vercel |
| Warm Editorial | Terracotta and cream, readable serif | Claude, Notion, Resend |
| Terminal Core | Mono type, dark, IDE energy | Warp, Raycast, Ollama |
| Data-Dense Pro | Charts everywhere, low chrome | ClickHouse, PostHog, Grafana |
| Cinematic Dark | Black backgrounds, hero imagery | RunwayML, NVIDIA, ElevenLabs |
| Playful Color | Saturated palettes, motion, joy | Figma, Duolingo, Toss |
| Glass / Soft-Futurism | Frost, depth, Apple-leaning | Apple, Arc, Airbnb |
| Neon Brutalist | Loud, layered, anti-corporate | The Verge, Pitchfork, PlayStation |
| Cult / Indie | Quiet weirdness, distinctive serif | A24, Criterion, Obsidian |

Inspired by [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) and [rohitg00/awesome-claude-design](https://github.com/rohitg00/awesome-claude-design).

---

## Why this exists

Most brand starter kits do one of two things badly.

They give you a Figma template and call it a brand.

Or they give you a 200-question worksheet and call it strategy.

Neither produces a working system you can hand to an AI agent.

This repo is the result of teaching AI workflows to thousands of founders and watching them get stuck on the same wall. Their Claude does not know who they are. So they re-explain themselves every time.

Brand In A Box fixes that. One folder, dropped into Claude, and the agent knows your voice, your ICP, your colors, your "do not ship" rules.

---

## Built on top of

- [jiji262/claude-design-skill](https://github.com/jiji262/claude-design-skill) — Advisor mode, anti-slop discipline, asset-hunt protocol.
- [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) — DESIGN.md 9-section format, 68 system inspirations.
- [rohitg00/awesome-claude-design](https://github.com/rohitg00/awesome-claude-design) — Aesthetic-family taxonomy, brand-to-DESIGN.md prompt.
- [VicUgochukwu/brand-design-skill](https://github.com/VicUgochukwu/brand-design-skill) — LinkedIn output sizes, html2canvas export pattern.
- [anthropics/skills](https://github.com/anthropics/skills) — Official skills repo, the canon.

---

## Workshop

Built for ["Build a Business That Runs By Itself"](https://purely-personal-workshop.vercel.app/) — May 2-3, 2026.

The 90-minute session is "Claude Design Killed Canva: Learn How to Master It in 90 Minutes."

---

## Roadmap

- [x] 10-question intake form
- [x] Brand-in-a-box generator skill with deepening pass
- [x] Worked example (Purely Personal — Editorial Minimal)
- [x] Worked example (Marigold & Oak — Warm Editorial)
- [x] Worked example (Voltage Labs — Cinematic Dark)
- [x] Interactive HTML form with prompt generator
- [x] Live brand preview in the form (colors and fonts update as you type)
- [x] Auto-bundling zip script
- [x] Vercel deploy config + OG meta tags
- [x] Offline-fillable HTML form bundled in the zip
- [ ] Demo GIF in this README (see [docs/demo-recording.md](docs/demo-recording.md))
- [ ] OG image PNG (see [docs/og-image-instructions.md](docs/og-image-instructions.md))
- [ ] Live brand preview in form (colors and fonts update as you type)
- [ ] Print-to-PDF of the filled form
- [ ] OG image / social share card

---

## License

MIT. Take it, fork it, ship it under your own brand. Credit appreciated, not required.

---

Built by [Daniel Paul](https://linkedin.com/in/danielpaulai) at [Purely Personal](https://purelypersonal.ai).
