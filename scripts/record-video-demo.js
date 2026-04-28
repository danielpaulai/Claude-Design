// Records the Claude Design explainer video by loading scripts/explainer.html
// in headless Chromium and capturing the auto-advancing scenes.
//
// Output: .video-out/demo.webm — convert to mp4 with ffmpeg afterward.
//
// Usage: node scripts/record-video-demo.js

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, '.video-out');
const EXPLAINER_URL = 'file://' + path.join(ROOT, 'scripts', 'explainer.html');

if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1.5,
    recordVideo: {
      dir: OUT_DIR,
      size: { width: 1280, height: 720 }
    }
  });

  const page = await context.newPage();
  await page.goto(EXPLAINER_URL, { waitUntil: 'networkidle' });

  // Wait for explainer-done event (fires when last scene's hold expires)
  await page.waitForFunction(() => document.body.dataset.done === 'true', null, { timeout: 90000 });

  await context.close();
  await browser.close();

  // Find and rename the rendered video
  const files = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.webm'));
  if (files.length > 0) {
    const src = path.join(OUT_DIR, files[0]);
    const dst = path.join(OUT_DIR, 'explainer.webm');
    if (src !== dst) fs.renameSync(src, dst);
    const sizeMB = (fs.statSync(dst).size / 1024 / 1024).toFixed(2);
    console.log(`✓ Recorded: ${dst} (${sizeMB} MB)`);
  } else {
    console.error('No video recorded.');
    process.exit(1);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
