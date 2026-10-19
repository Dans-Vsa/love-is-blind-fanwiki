export interface AssetCredit {
  asset: string;
  file: string;
  author: string;
  source: string;
  license: string;
  licenseUrl?: string;
  note?: string;
}

// Keep in sync with CREDITS.md at the repo root.
export const assetCredits: AssetCredit[] = [
  {
    asset: 'Cover of “藤本タツキ短編集 17-21” (Japanese edition)',
    file: 'public/assets/img/cover-17-21.{webp,avif}',
    author: '© Tatsuki Fujimoto / Shueisha',
    source: 'https://en.wikipedia.org/wiki/File:Tatsuki_Fujimoto_Before_Chainsaw_Man_1.png',
    license: 'Copyrighted; used under fair use (low resolution 238×375, identification and commentary)',
    note: 'Not free-licensed. Will be removed on request from the rights holder.',
  },
  {
    asset: 'Photo: Tatsuki Fujimoto’s manga volumes',
    file: 'public/assets/img/fujimoto-volumes.{webp,avif}',
    author: 'KanaArima (Wikimedia Commons)',
    source: 'https://commons.wikimedia.org/wiki/File:Tatsuki_Fujimoto%27s_Mangas.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    note: 'Resized to 960px and converted to WebP/AVIF. The covers shown remain © their owners.',
  },
  {
    asset: 'Hero illustration, gallery artworks, favicon, OG image, screentone patterns, icons, silhouettes',
    file: 'src/components/*.astro, public/favicon.svg, public/assets/og/*',
    author: 'This fan project (original work)',
    source: 'Made for this site in SVG/CSS',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    note: 'Not traced from manga pages; silhouettes are deliberately generic.',
  },
  {
    asset: 'Dela Gothic One (font)',
    file: '@fontsource/dela-gothic-one',
    author: 'artakana',
    source: 'https://fonts.google.com/specimen/Dela+Gothic+One',
    license: 'SIL Open Font License 1.1',
    licenseUrl: 'https://openfontlicense.org/',
  },
  {
    asset: 'Source Serif 4 (font)',
    file: '@fontsource-variable/source-serif-4',
    author: 'Frank Grießhammer / Adobe',
    source: 'https://fonts.google.com/specimen/Source+Serif+4',
    license: 'SIL Open Font License 1.1',
    licenseUrl: 'https://openfontlicense.org/',
  },
  {
    asset: 'IBM Plex Mono (font)',
    file: '@fontsource/ibm-plex-mono',
    author: 'Mike Abbink / IBM',
    source: 'https://fonts.google.com/specimen/IBM+Plex+Mono',
    license: 'SIL Open Font License 1.1',
    licenseUrl: 'https://openfontlicense.org/',
  },
];
