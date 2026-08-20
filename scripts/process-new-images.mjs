// One-off: process the 3 newly supplied photos (Shackled, Object Study, Dancing
// Trio) using the same settings as scripts/process-images.mjs, and trim the
// Object Study PNG's excess transparent margin first.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const ROOT = process.cwd();
const MAX_DIM = 2000;
const QUALITY = 82;

const MAP = [
  ["public/images/about/shakeled.jpg", "public/images/portfolio/shackled/shackled.webp", false],
  ["public/images/about/dancers.jpg", "public/images/portfolio/other-works/dancing-trio.webp", false],
  [
    "public/images/about/An object study-where the subject becomes the object.png",
    "public/images/portfolio/object-study/object-study.webp",
    true,
  ],
];

async function processOne(srcRel, destRel, shouldTrim) {
  const src = path.join(ROOT, srcRel);
  const dest = path.join(ROOT, destRel);
  await fs.mkdir(path.dirname(dest), { recursive: true });

  let pipeline = sharp(src, { failOn: "none" }).rotate();
  if (shouldTrim) pipeline = pipeline.trim();

  const meta = await pipeline.clone().metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  if (longEdge > MAX_DIM) {
    pipeline =
      (meta.width ?? 0) >= (meta.height ?? 0)
        ? pipeline.resize({ width: MAX_DIM })
        : pipeline.resize({ height: MAX_DIM });
  }

  pipeline = pipeline.normalize({ lower: 1, upper: 99 }).sharpen({ sigma: 0.5 });

  // flatten transparency onto ivory so the PNG's alpha channel doesn't turn black in webp
  pipeline = pipeline.flatten({ background: "#F7F2E9" });

  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(dest);

  const outMeta = await sharp(dest).metadata();
  return { destRel, w: outMeta.width, h: outMeta.height, kb: Math.round((await fs.stat(dest)).size / 1024) };
}

for (const [srcRel, destRel, shouldTrim] of MAP) {
  const r = await processOne(srcRel, destRel, shouldTrim);
  console.log(`${r.destRel}  (${r.w}x${r.h}, ${r.kb}KB)`);
}
