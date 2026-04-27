# Demo GIF — How to record `docs/demo.gif`

A 20-30 second GIF at the top of the README is the single highest-leverage upgrade for repo virality. People decide whether to read in 2 seconds. Show them the magic.

## What to capture

**Open** `https://claude-design-beginners.vercel.app/`.

Show in this order:

1. **The form, untouched** (1 second). Establish the starting state.
2. **Type a business name** (3 seconds). Watch the eyebrow update in the live preview.
3. **Type the description** (4 seconds). Hero text fills in.
4. **Switch the family dropdown** through 3-4 options (8 seconds). The whole preview transforms — fonts, colors, canvas. **This is the wow moment.**
5. **Override the accent color** (3 seconds). Type `#ff5e3a` or similar. The CTA pill changes color.
6. **Scroll to bottom, click Generate** (2 seconds). Watch the prompt appear.
7. **Click Copy** (1 second). Status pill fires.

Total: ~22 seconds. Speed up 1.5× if needed.

## Recording tools (free)

- **macOS: [Kap](https://getkap.co)** — free, exports GIF directly. Resize window to ~1200px wide before recording for best quality.
- **macOS / Windows: [Loom](https://loom.com)** — record video, then convert to GIF via [ezgif.com/video-to-gif](https://ezgif.com/video-to-gif).
- **Linux / cross-platform: [Peek](https://github.com/phw/peek)** — Linux-native GIF recorder.

## Encoding settings

- **Width:** 1200px (or 1100px). Smaller = sharper at GitHub display size.
- **Frame rate:** 15 fps. Higher = bigger file, lower = jerky.
- **File size cap:** 4MB. GitHub README will display GIFs up to ~10MB but slower load = fewer views.

If the GIF is over 4MB, run it through [ezgif.com/optimize](https://ezgif.com/optimize) — drop frame rate or use lossy compression.

## Drop it in

```bash
mv ~/Desktop/demo.gif docs/demo.gif
git add docs/demo.gif
git commit -m "Add demo GIF to README"
git push
```

The README already references it at `docs/demo.gif`. The moment the file is live, the README hero shows the demo.

## Pro tip — capture two

A 30-second demo for the README. **And** a 5-second snippet of just the family-switch moment. Use the 5-second clip in the LinkedIn announcement post (LinkedIn auto-plays GIFs). It's the highest-conversion 5 seconds you'll record this year.
