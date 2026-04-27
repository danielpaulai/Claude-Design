// Records the demo by driving system Chrome and capturing frames.
// Then ffmpeg stitches them into docs/demo.gif.
// Usage: node scripts/record-demo.js

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const FRAMES_DIR = path.join(__dirname, '..', '.demo-frames');
const FORM_URL = 'file://' + path.join(__dirname, '..', 'public', 'index.html');

if (!fs.existsSync(FRAMES_DIR)) fs.mkdirSync(FRAMES_DIR);
// Clean previous frames
fs.readdirSync(FRAMES_DIR).forEach(f => {
  if (f.endsWith('.png')) fs.unlinkSync(path.join(FRAMES_DIR, f));
});

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    defaultViewport: null,
    args: ['--no-sandbox', '--hide-scrollbars'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });

  await page.goto(FORM_URL, { waitUntil: 'networkidle0' });

  // Clear localStorage so we start fresh every run
  await page.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForSelector('#preview-canvas');
  await new Promise(r => setTimeout(r, 700)); // let fonts settle

  // Scroll so the form's first section AND the preview panel are both visible
  await page.evaluate(() => {
    const layout = document.querySelector('.layout');
    if (layout) {
      const top = layout.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo(0, top);
    }
  });
  await new Promise(r => setTimeout(r, 300));

  let frameIdx = 0;
  async function snap(holdMs = 0) {
    if (holdMs) await new Promise(r => setTimeout(r, holdMs));
    frameIdx++;
    const file = path.join(FRAMES_DIR, `frame_${String(frameIdx).padStart(3, '0')}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1200, height: 800 } });
    console.log(`  ${frameIdx.toString().padStart(2)}  ${path.basename(file)}`);
  }

  // Helper: type text with realistic pacing
  async function typeInto(selector, text, delayMs = 35) {
    await page.click(selector);
    await page.evaluate((sel) => { document.querySelector(sel).value = ''; }, selector);
    for (const ch of text) {
      await page.type(selector, ch);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }

  // === Begin demo ===

  // 1. Empty starting state
  await snap();

  // 2. Type business name (preview eyebrow updates live)
  await typeInto('#biz_name', 'Marigold & Oak', 50);
  await snap(400);

  // 3. Type description (preview hero updates)
  await typeInto('#description', 'I help wellness brands grow without losing their soul.', 25);
  await snap(400);

  // 4. Type promise (preview body updates)
  await typeInto('#pain', 'My brand looks like a Pinterest board, not a business.', 18);
  await snap(300);

  // Open section 3 by clicking its header
  await page.evaluate(() => {
    const sections = document.querySelectorAll('.section');
    if (sections[2] && !sections[2].classList.contains('open')) {
      sections[2].querySelector('.section-header').click();
    }
  });
  await new Promise(r => setTimeout(r, 400));

  // Scroll to keep preview in view
  await page.evaluate(() => {
    const family = document.getElementById('family');
    family.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 300));

  // 5. Pick Warm Editorial — the preview transforms
  await page.select('#family', 'Warm Editorial');
  await page.evaluate(() => document.getElementById('family').dispatchEvent(new Event('change', { bubbles: true })));
  await snap(700);

  // 6. Pick Cinematic Dark — preview goes void
  await page.select('#family', 'Cinematic Dark');
  await page.evaluate(() => document.getElementById('family').dispatchEvent(new Event('change', { bubbles: true })));
  await snap(700);

  // 7. Pick Neon Brutalist — preview goes loud
  await page.select('#family', 'Neon Brutalist');
  await page.evaluate(() => document.getElementById('family').dispatchEvent(new Event('change', { bubbles: true })));
  await snap(700);

  // 8. Back to Editorial Minimal
  await page.select('#family', 'Editorial Minimal');
  await page.evaluate(() => document.getElementById('family').dispatchEvent(new Event('change', { bubbles: true })));
  await snap(700);

  // 9. Type accent override — preview eyebrow + CTA color shift
  await typeInto('#accent', '#7c3aed', 70);
  await snap(700);

  await browser.close();
  console.log(`Captured ${frameIdx} frames in ${FRAMES_DIR}`);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
