// Verifies that every internal href/src in the built site (dist/) resolves to a file.
// Run after `astro build`: node scripts/check-links.mjs
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = 'dist';
const base = (process.env.BASE ?? '/').replace(/\/$/, '');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function exists(p) {
  try {
    const s = await stat(p);
    if (s.isDirectory()) return exists(join(p, 'index.html'));
    return true;
  } catch {
    return false;
  }
}

const files = (await walk(DIST)).filter((f) => extname(f) === '.html');
const broken = [];
let checked = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const urls = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)].map((m) => m[1].split(' ')[0]);
  for (const url of urls) {
    if (/^(https?:|mailto:|data:|#|javascript:)/.test(url)) continue;
    let path = url.split('#')[0].split('?')[0];
    if (!path) continue;
    if (!path.startsWith('/')) {
      // relative link: resolve against the page directory
      const pageDir = file.slice(DIST.length).replaceAll('\\', '/').replace(/[^/]*$/, '');
      path = new URL(path, `http://x${pageDir}`).pathname;
    }
    if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
    checked++;
    if (!(await exists(join(DIST, decodeURIComponent(path))))) broken.push(`${file}: ${url}`);
  }
}
console.log(`Checked ${checked} internal links/assets across ${files.length} pages.`);
if (broken.length) {
  console.error(`Broken (${broken.length}):\n` + [...new Set(broken)].join('\n'));
  process.exit(1);
}
console.log('All internal links and assets resolve.');
