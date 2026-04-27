# OG Image — How to generate `og-image.png`

The OG image is what shows when someone shares the URL on LinkedIn, Twitter, Slack, etc.

## Generate it

The HTML mockup is at `public/og-image.html`. It renders at exactly 1200×630 (the standard OG dimensions).

### Easiest path: Chrome DevTools

1. Open `https://claude-design-beginners.vercel.app/og-image.html` in Chrome.
2. Open DevTools. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M).
3. Set custom size to **1200 × 630**.
4. Cmd+Shift+P → "Capture full size screenshot."
5. Save as `og-image.png`.

### Alternative: headless Chrome from command line

```bash
# Install puppeteer-cli once
npm install -g puppeteer-cli

# Capture
puppeteer screenshot \
  --width 1200 \
  --height 630 \
  --path public/og-image.png \
  https://claude-design-beginners.vercel.app/og-image.html
```

### Alternative: htmlcsstoimage.com

Paste the contents of `public/og-image.html`. Set size to 1200×630. Download.

## Drop it in

Save the resulting PNG as `public/og-image.png`.

```bash
git add public/og-image.png
git commit -m "Add OG image"
git push
```

Vercel auto-deploys. The meta tags in `public/index.html` already point at `/og-image.png`, so the moment the file is live, your LinkedIn / Twitter / Slack previews update.

## Verify

After deploy, paste the URL into:
- **LinkedIn post inspector:** https://www.linkedin.com/post-inspector/
- **Twitter card validator:** https://cards-dev.twitter.com/validator
- **OpenGraph debugger:** https://www.opengraph.xyz/

These caches sometimes hold the old (no-image) preview for hours. The inspectors force a refresh.
