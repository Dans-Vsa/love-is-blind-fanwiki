// Generates favicon.ico (PNG-in-ICO), apple-touch-icon.png and the default OG image
// from original SVG artwork. Run: node scripts/generate-icons.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const favicon = await readFile('public/favicon.svg');
await sharp(favicon).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// Minimal ICO container holding one 32x32 PNG.
const png32 = await sharp(favicon).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // planes
header.writeUInt16LE(32, 12); // bpp
header.writeUInt32LE(png32.length, 14); // size
header.writeUInt32LE(22, 18); // offset
await writeFile('public/favicon.ico', Buffer.concat([header, png32]));

const rain = Array.from({ length: 60 }, (_, i) => {
  const x = (i * 37) % 1240;
  const y = (i * 71) % 630;
  return `<line x1="${x}" y1="${y}" x2="${x - 14}" y2="${y + 60}" stroke="#f4f1ea" stroke-width="2" opacity=".28"/>`;
}).join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="2.2" fill="#f4f1ea" opacity=".35"/></pattern>
    <pattern id="red" width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="5.5" cy="5.5" r="3" fill="#d7192d"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#0b0b0b"/>
  <circle cx="960" cy="230" r="190" fill="url(#dots)"/>
  <circle cx="960" cy="230" r="190" fill="none" stroke="#f4f1ea" stroke-width="4"/>
  ${rain}
  <path d="M960 420 C880 365 850 320 850 280 C850 245 878 222 910 222 C934 222 952 236 960 254 C968 236 986 222 1010 222 C1042 222 1070 245 1070 280 C1070 320 1040 365 960 420 Z" fill="url(#red)" stroke="#d7192d" stroke-width="6"/>
  <rect x="60" y="60" width="640" height="510" fill="#f4f1ea" stroke="#f4f1ea" stroke-width="6"/>
  <text x="100" y="140" font-family="Consolas, 'Courier New', monospace" font-size="24" letter-spacing="4" fill="#5f5b54">TATSUKI FUJIMOTO · 2014 · FAN WIKI</text>
  <text x="96" y="268" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="128" fill="#0b0b0b">LOVE IS</text>
  <text x="96" y="400" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="150" fill="#d7192d">BLIND</text>
  <text x="100" y="500" font-family="'Yu Gothic', 'MS Gothic', 'Noto Sans JP', sans-serif" font-weight="700" font-size="56" fill="#0b0b0b">恋は盲目</text>
  <rect x="60" y="60" width="640" height="510" fill="none" stroke="#0b0b0b" stroke-width="6"/>
  <rect x="3" y="3" width="1194" height="624" fill="none" stroke="#f4f1ea" stroke-width="6"/>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/assets/og/og-default.png');
console.log('icons + og generated');
