// Usage: node scripts/optimize-images.mjs <input> <outBaseName> <width>
// Writes public/assets/img/<outBaseName>.webp and .avif (resized, metadata stripped).
import sharp from 'sharp';
const [input, base, width] = process.argv.slice(2);
if (!input || !base) throw new Error('usage: <input> <outBaseName> [width]');
const w = Number(width) || undefined;
const img = sharp(input).resize({ width: w, withoutEnlargement: true });
await img.clone().webp({ quality: 78 }).toFile(`public/assets/img/${base}.webp`);
await img.clone().avif({ quality: 55 }).toFile(`public/assets/img/${base}.avif`);
console.log('ok', base);
