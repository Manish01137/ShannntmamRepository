// One-off Phase 0 batch: resize, auto-orient, mildly normalize exposure/white
// balance, and convert every matched source photo to web-ready .webp at a
// consistent long-edge cap, so photography shot in different rooms/lighting
// over many years reads as one coherent set. Run with: node scripts/process-images.mjs
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const ROOT = process.cwd();
const MAX_DIM = 2000; // long edge cap — next/image derives smaller responsive sizes from this at request time
const QUALITY = 82;

// [sourceRelativePath, destRelativePath]
const MAP = [
  // --- Kalpavruksha ---
  ["Ode to Nature/Shanta-samant_sculpture_Kalpavriksha_29x27x26inches_bronze,brass & copper_65,000-jpg.JPG", "public/images/portfolio/kalpavruksha/kalpavruksha-i.webp"],
  ["Ode to Nature/One with nature (2).JPG", "public/images/portfolio/kalpavruksha/kalpavruksha-i-alt.webp"],

  // --- Other Works (Kalpavruksha-adjacent) ---
  ["Ode to Nature/In my garden ..under the champa tree.jpg", "public/images/portfolio/other-works/in-my-garden-under-the-champa-tree.webp"],
  ["Ode to Nature/Shanta Sarvaiya (Samanta)_In my garden... under the champa tree_Bronze_ other view.jpg", "public/images/portfolio/other-works/in-my-garden-under-the-champa-tree-alt.webp"],
  ["drive-download-20260811T040226Z-1-001/DSC01490.JPG", "public/images/portfolio/other-works/golfer.webp"],
  ["drive-download-20260811T040226Z-1-001/In the lily pond.jpg", "public/images/portfolio/other-works/gazing-in-my-lily-pond.webp"],
  ["Faded Memories/1. Freedom- Hanging sculpture.jpg", "public/images/portfolio/other-works/hanging-sculpture.webp"],

  // --- Shringar ---
  ["Shringar/Lady with a mirror.JPG", "public/images/portfolio/shringar/lady-with-a-mirror-iii.webp"],
  ["Shringar/Lady with a parrot.JPG", "public/images/portfolio/shringar/lady-with-a-parrot-ii.webp"],
  ["Shringar/Alasya Kanya-II.JPG", "public/images/portfolio/shringar/alasya-kanya-i.webp"],
  ["Shringar/Alasya Kanya-Shringar Series.JPG", "public/images/portfolio/shringar/alasya-kanya-vi.webp"],
  ["Shringar/lady with a mobile.JPG", "public/images/portfolio/shringar/alasya-kanya-vii.webp"],
  ["Shringar/Lady wearing Necklace.JPG", "public/images/portfolio/shringar/lady-wearing-necklace.webp"],
  ["Shringar/Lady with a flower.JPG", "public/images/portfolio/shringar/lady-with-a-flower.webp"],
  ["Shringar/Lady with flowers.JPG", "public/images/portfolio/shringar/lady-with-flowers.webp"],
  ["Shringar/Lady with a punkha.JPG", "public/images/portfolio/shringar/lady-with-a-punkha.webp"],

  // --- Whispers of Innocence ---
  ["Faded Memories/3.jpg", "public/images/portfolio/whispers-of-innocence/a-page-from-our-family-album.webp"],
  ["Faded Memories/38.jpg", "public/images/portfolio/whispers-of-innocence/a-page-from-our-family-album-alt.webp"],
  ["Faded Memories/Swing-III.jpg", "public/images/portfolio/whispers-of-innocence/silent-evenings-on-the-bank-of-sublime.webp"],
  ["Faded Memories/skiing.JPG", "public/images/portfolio/whispers-of-innocence/skiing-ii.webp"],
  ["Faded Memories/P1010046.jpg", "public/images/portfolio/whispers-of-innocence/swing.webp"],
  ["Faded Memories/Swing.JPG", "public/images/portfolio/whispers-of-innocence/swing-alt.webp"],
  ["Faded Memories/Acrobat-III.JPG", "public/images/portfolio/whispers-of-innocence/acrobat-iii.webp"],
  ["Faded Memories/Acrobat-II.JPG", "public/images/portfolio/whispers-of-innocence/acrobat-ii.webp"],
  ["Faded Memories/Acrobat.jpg", "public/images/portfolio/whispers-of-innocence/acrobat.webp"],
  ["Faded Memories/DSC01086.JPG", "public/images/portfolio/whispers-of-innocence/three-dancers.webp"],
  ["Faded Memories/Funny moments.JPG", "public/images/portfolio/whispers-of-innocence/funny-moments.webp"],
  ["Faded Memories/to touch the sky.JPG", "public/images/portfolio/whispers-of-innocence/to-touch-the-sky.webp"],

  // --- Manuscript ---
  ["drive-download-20260811T040226Z-1-001/Manuscript.jpg", "public/images/portfolio/manuscript/manuscript-series.webp"],

  // --- Sanjeevani ---
  ["drive-download-20260811T040226Z-1-001/Sanjeevani- An endless journey.jpg", "public/images/portfolio/sanjeevani/sanjeevani-i.webp"],
  ["drive-download-20260811T040226Z-1-001/sanjeevani-II_.png", "public/images/portfolio/sanjeevani/sanjeevani-ii.webp"],
  ["drive-download-20260811T040226Z-1-001/Snjeevani-III.jpg", "public/images/portfolio/sanjeevani/sanjeevani-iii.webp"],

  // --- Freedom ---
  ["drive-download-20260811T040226Z-1-001/Freedom-stainless steel.jpg", "public/images/portfolio/freedom/freedom-installed.webp"],

  // --- Conversation ---
  ["drive-download-20260811T040226Z-1-001/conversation-2.JPG", "public/images/portfolio/conversation/conversation-iii.webp"],
  ["drive-download-20260811T040226Z-1-001/Conversation.jpg", "public/images/portfolio/conversation/conversation.webp"],

  // --- Living Tapestry ---
  ["drive-download-20260811T040226Z-1-001/self.jpg", "public/images/portfolio/living-tapestry/living-tapestry.webp"],
  ["drive-download-20260811T040226Z-1-001/Screenshot_2025-11-14-22-45-09-78_439a3fec0400f8974d35eed09a31f914.jpg", "public/images/portfolio/living-tapestry/living-tapestry-process.webp"],

  // --- Unlisted (real pieces, no title/statement in brief — plain captions only) ---
  ["drive-download-20260811T040226Z-1-001/Mystery II.png", "public/images/portfolio/unlisted/mystery-ii.webp"],
  ["drive-download-20260811T040226Z-1-001/Mystery -III.png", "public/images/portfolio/unlisted/mystery-iii.webp"],
  ["drive-download-20260811T040226Z-1-001/Conversation-III.jpg", "public/images/portfolio/unlisted/portrait-busts-six.webp"],
  ["drive-download-20260811T040226Z-1-001/Potraits- 3 teenagers.jpg", "public/images/portfolio/unlisted/portrait-busts-three.webp"],
  ["drive-download-20260811T040226Z-1-001/self portrait - Copy.jpg", "public/images/portfolio/unlisted/self-portrait-bust.webp"],
  ["drive-download-20260811T040226Z-1-001/Driving-driving.jpg", "public/images/portfolio/unlisted/driving-driving.webp"],
  ["drive-download-20260811T040226Z-1-001/Only for you.jpg", "public/images/portfolio/unlisted/only-for-you.webp"],

  // --- Artist portraits / process shots (About page) ---
  ["drive-download-20260811T040226Z-1-001/Self image.jpg", "public/images/about/artist-portrait.webp"],
  ["drive-download-20260811T040226Z-1-001/myself.jpg - Copy.JPG", "public/images/about/artist-studio-dancers.webp"],
];

async function processOne(srcRel, destRel) {
  const src = path.join(ROOT, srcRel);
  const dest = path.join(ROOT, destRel);
  await fs.mkdir(path.dirname(dest), { recursive: true });

  const image = sharp(src, { failOn: "none" }).rotate(); // auto-orient via EXIF
  const meta = await image.metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);

  let pipeline = image;
  if (longEdge > MAX_DIM) {
    pipeline =
      (meta.width ?? 0) >= (meta.height ?? 0)
        ? pipeline.resize({ width: MAX_DIM })
        : pipeline.resize({ height: MAX_DIM });
  }

  // Gentle, uniform normalization pass so photos shot in different rooms/light
  // over many years read as one coherent set, without looking over-processed.
  pipeline = pipeline.normalize({ lower: 1, upper: 99 }).sharpen({ sigma: 0.5 });

  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(dest);

  const outMeta = await sharp(dest).metadata();
  return { srcRel, destRel, w: outMeta.width, h: outMeta.height, kb: Math.round((await fs.stat(dest)).size / 1024) };
}

const results = [];
const errors = [];
for (const [srcRel, destRel] of MAP) {
  try {
    results.push(await processOne(srcRel, destRel));
  } catch (err) {
    errors.push({ srcRel, destRel, error: err.message });
  }
}

console.log(`Processed ${results.length}/${MAP.length} images.`);
for (const r of results) {
  console.log(`  ${r.destRel}  (${r.w}x${r.h}, ${r.kb}KB)`);
}
if (errors.length) {
  console.log(`\n${errors.length} FAILED:`);
  for (const e of errors) console.log(`  ${e.srcRel} -> ${e.destRel}: ${e.error}`);
  process.exitCode = 1;
}
