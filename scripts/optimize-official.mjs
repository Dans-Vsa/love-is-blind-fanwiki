// Usage: node scripts/optimize-official.mjs <inputDir>
// Converts the official anime promo images (downloaded from fujimototatsuki17-26.com and the
// official YouTube PV thumbnails) into small AVIF/WebP files in public/assets/img/official.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const dir = process.argv[2];
if (!dir) throw new Error('usage: <inputDir>');
const out = 'public/assets/img/official';
await mkdir(out, { recursive: true });

const jobs = [
  // character cutouts: trim the white/transparent margin, keep alpha
  { src: 'chara_img_ibuki.png', name: 'ibuki', height: 760, trim: true },
  { src: 'chara_img_kounosu.png', name: 'yuri', height: 760, trim: true },
  { src: 'stories03_kv.jpg', name: 'key-visual', width: 720 },
  { src: 'yt-bnnbCdR6sIE.jpg', name: 'pv-love-is-blind', width: 960 },
  { src: 'yt-NRxLpXAqWiw.jpg', name: 'pv-17-26-trailer', width: 960 },
];

for (const j of jobs) {
  let img = sharp(join(dir, j.src));
  if (j.trim) img = sharp(await img.trim({ threshold: 10 }).toBuffer());
  img = img.resize({ width: j.width, height: j.height, withoutEnlargement: true });
  const meta = await img.clone().webp({ quality: 80 }).toFile(join(out, `${j.name}.webp`));
  await img.clone().avif({ quality: 55 }).toFile(join(out, `${j.name}.avif`));
  console.log(j.name, `${meta.width}x${meta.height}`, `${Math.round(meta.size / 1024)}KB webp`);
}
