# Brand In A Box — Workshop Kit

This is the kit that ships inside `brand-in-a-box.zip`.

## Files

- `INTAKE.md` — fill in the 10 questions in markdown. This is the only file you edit.
- `intake-form.html` — same form as a fillable HTML page. Open it in any browser, fill in, click Generate, paste into Claude. Works offline.
- `INTAKE-EXAMPLE.md` — what a finished intake looks like (Purely Personal — Editorial Minimal).
- `SKILL.md` — the agent-invocable skill that reads `INTAKE.md` and generates your design system.
- `EXAMPLES/purely-personal/` — Editorial Minimal generated system (sans-serif, hot red, 0px corners).
- `EXAMPLES/marigold-and-oak/` — Warm Editorial generated system (serif, terracotta, 8px corners).
- `EXAMPLES/voltage-labs/` — Cinematic Dark generated system (geometric sans, electric cyan, void canvas). Three different families, same SKILL — proof the system works for any brand.

## How to use

1. Open Claude Code or Claude Desktop in this folder.
2. Fill in `INTAKE.md`. Use `INTAKE-EXAMPLE.md` as a reference.
3. Tell Claude:

   > Read my INTAKE.md and run the brand-in-a-box skill.

4. In about 90 seconds you have a complete brand design system folder named after your business.

## Tips

- Question 7 (three writing samples) is the most important. Paste 3 real writing samples, even short ones. The system extracts your voice rules from these better than you can describe them yourself.
- Question 9 (website URL) supercharges the output if you have one. The system fetches it and pre-fills colors, type, and aesthetic family.
- Skip optional questions with `default` if you are in a hurry.

## What you get

A folder named after your business slug, containing:

- `brand/` with positioning, voice DNA, ICP, colors, typography, design tokens, and anti-slop rules.
- `colors_and_type.css` — drop-in CSS variables.
- A personalised `SKILL.md` so any future Claude session writes and designs in your brand.
- A `DESIGN.md` you can drop into Claude Design at claude.ai/design to auto-skin all your projects.
- One sample HTML artifact per format you ticked in question 8.

See `EXAMPLES/purely-personal/` for a complete worked example.

## Workshop

Built for ["Build a Business That Runs By Itself"](https://purely-personal-workshop.vercel.app/) — May 2-3, 2026.

The 90-minute session: "Claude Design Killed Canva: Learn How to Master It in 90 Minutes."

## License

MIT.
