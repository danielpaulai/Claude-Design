# Cheatsheet UI Kit — 1080×1350

Single-frame, dense info graphic. Exported as JPEG. Two canonical patterns:

- **Process cheatsheet** — numbered steps with red arrow connectors (see `reference/cheatsheet-example.jpeg`).
- **List cheatsheet** — pastel category bands each with a pill label (see `reference/cheatsheet-example-2.jpeg`).

## Components

- `CheatsheetFrame.jsx` — 1080×1350 paper canvas + title block + repost pill + footer byline
- `StepCard.jsx` — black-bordered card with step number, title, prompt, outcome
- `CategoryBand.jsx` — pastel row with pill label + horizontal item grid
- `PersonTile.jsx` — circle avatar + name (for list cheatsheets)

Open `index.html` for a process-style cheatsheet mock.
