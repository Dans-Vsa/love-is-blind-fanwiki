import type { Locale } from '../i18n';

/** Sister fan sites in the Fujimoto Archive family (all by the same author). */
export const ARCHIVE = 'https://dans-vsa.github.io/fujimoto-archive/';
export const ARCHIVE_ENTRY = 'https://dans-vsa.github.io/fujimoto-archive/karya.html?id=love-is-blind';
const BCM = 'https://dans-vsa.github.io/before-chainsaw-man-fanblog/';

/** Before Chainsaw Man is Indonesian at the root and English under /en/. */
export const bcmUrl = (lang: Locale, anchor = '') => `${BCM}${lang === 'en' ? 'en/' : ''}17-21/${anchor ? `#${anchor}` : ''}`;

/** The four one-shots of 17-21, in book order. */
export const collection = (lang: Locale) => [
  { no: '01', title: 'A Couple Clucking Chickens…', jp: '庭には二羽ニワトリがいた', href: 'https://dans-vsa.github.io/niwatori-fanblog/' },
  { no: '02', title: 'Sasaki Stopped a Bullet', jp: '佐々木くんが銃弾止めた', href: bcmUrl(lang, 'sasaki') },
  { no: '03', title: 'Love is Blind', jp: '恋は盲目', href: null },
  { no: '04', title: 'Shikaku', jp: 'シカク', href: bcmUrl(lang, 'shikaku') },
];
