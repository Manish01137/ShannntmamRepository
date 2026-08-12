// One-off: tighten the Freedom hero photo's crop (trim dead sky/margin) and
// re-export at the same path/quality settings as process-images.mjs.
// Run with: node scripts/recrop-hero.mjs
import sharp from "sharp";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "drive-download-20260811T040226Z-1-001/Freedom-stainless steel.jpg");
const DEST = path.join(ROOT, "public/images/portfolio/freedom/freedom-installed.webp");
const MAX_DIM = 2000;
const QUALITY = 82;

const image = sharp(SRC, { failOn: "none" }).rotate();
const meta = await image.metadata();
const w = meta.width;
const h = meta.height;

// trim ~7% dead sky off the top, ~2% off the bottom
const top = Math.round(h * 0.07);
const bottom = Math.round(h * 0.02);
const cropHeight = h - top - bottom;

let pipeline = image.extract({ left: 0, top, width: w, height: cropHeight });

const longEdge = Math.max(w, cropHeight);
if (longEdge > MAX_DIM) {
  pipeline = pipeline.resize({ height: MAX_DIM });
}

pipeline = pipeline.normalize({ lower: 1, upper: 99 }).sharpen({ sigma: 0.5 });

await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(DEST);

const outMeta = await sharp(DEST).metadata();
console.log(`Recropped: ${DEST} -> ${outMeta.width}x${outMeta.height}`);
