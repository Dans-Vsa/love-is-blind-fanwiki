import type { Locale } from '../i18n';

type L = Record<Locale, string>;

export interface Character {
  id: string;
  name: string;
  jp: string;
  role: L;
  position: L;
  description: L;
  /** Plain-language relations; spoiler-free. */
  relations: L;
  va?: { ja: string; en?: string };
  /** Source ids from src/data/sources.ts */
  sources: string[];
  /** Short fields that could not be confirmed in two sources. */
  unverified?: L;
}

export const characters: Character[] = [
  {
    id: 'ibuki',
    name: 'Ibuki',
    jp: '伊吹',
    role: { en: 'Protagonist', id: 'Protagonis' },
    position: { en: 'Student council president (third year)', id: 'Ketua OSIS (kelas tiga)' },
    description: {
      en: 'An accomplished, respected student council president who credits his achievements to Yuri. On the day before graduation — and before leaving to study abroad — he resolves to confess to her, and treats every other duty as secondary.',
      id: 'Ketua OSIS yang berprestasi dan disegani, yang menganggap semua pencapaiannya berkat Yuri. Sehari sebelum kelulusan — dan sebelum berangkat kuliah ke luar negeri — ia bertekad menyatakan cinta kepadanya, dan menomorduakan semua tugas lainnya.',
    },
    relations: { en: 'Senpai to Yuri; in love with her.', id: 'Senpai Yuri; jatuh cinta kepadanya.' },
    va: { ja: 'Shun Horie (堀江瞬)', en: 'Nick Thurston' },
    sources: ['wiki-before-csm', 'jumpsq-crown-9', 'tvtropes-fujimoto'],
  },
  {
    id: 'yuri',
    name: 'Yuri Kōnosu',
    jp: '鴻巣ユリ',
    role: { en: 'Deuteragonist', id: 'Deuteragonis' },
    position: { en: 'Student council vice-president; the council’s only other member', id: 'Wakil ketua OSIS; satu-satunya anggota OSIS selain Ibuki' },
    description: {
      en: 'Ibuki’s underclassman (kōhai) and the only other member of the student council. Jump SQ’s editors described her as the vice-president who answers “Osu!” and follows along.',
      id: 'Adik kelas (kōhai) Ibuki dan satu-satunya anggota OSIS lainnya. Editor Jump SQ menggambarkannya sebagai wakil ketua yang menjawab “Osu!” lalu ikut mengikuti.',
    },
    relations: { en: 'Kōhai and right hand of Ibuki.', id: 'Kōhai sekaligus tangan kanan Ibuki.' },
    va: { ja: 'Shion Wakayama (若山詩音)', en: 'Abby Espiritu' },
    sources: ['wiki-before-csm', 'jumpsq-tweet-2016', 'jumpsq-crown-9'],
  },
  {
    id: 'hayasaka',
    name: 'Hayasaka-sensei',
    jp: '早坂先生',
    role: { en: 'Supporting (interruption #1)', id: 'Pendukung (gangguan #1)' },
    position: { en: 'Teacher', id: 'Guru' },
    description: {
      en: 'Named in the anime cast list. Reviews of the manga mention an early interruption about the graduation ceremony; sources disagree on whether the person who interrupts is a student or a teacher.',
      id: 'Disebut dalam daftar pemeran anime. Ulasan manga menyebut gangguan awal soal upacara kelulusan; sumber berbeda pendapat apakah yang mengganggu itu murid atau guru.',
    },
    relations: { en: 'Ibuki’s school.', id: 'Pihak sekolah Ibuki.' },
    va: { ja: 'Toshiyuki Morikawa (森川智之)' },
    sources: ['wiki-before-csm', 'ashley-manning', 'medium-anitay'],
    unverified: {
      en: 'Whether this character appears by name in the manga is unverified.',
      id: 'Apakah tokoh ini muncul dengan nama yang sama di manga belum terverifikasi.',
    },
  },
  {
    id: 'robber',
    name: 'The Robber',
    jp: '強盗',
    role: { en: 'Supporting (interruption #2)', id: 'Pendukung (gangguan #2)' },
    position: { en: 'Mugger', id: 'Perampok' },
    description: {
      en: 'A mugger who holds Ibuki up on the way home. Ibuki refuses to let even a robbery derail his plan.',
      id: 'Perampok yang mencegat Ibuki di perjalanan pulang. Bahkan perampokan pun tak dibiarkan Ibuki menggagalkan rencananya.',
    },
    relations: { en: 'Stranger.', id: 'Orang asing.' },
    va: { ja: 'Takahiro Yamamoto (山本高広)' },
    sources: ['wiki-before-csm', 'jumpsq-crown-9', 'ashley-manning'],
  },
  {
    id: 'alien',
    name: 'The Alien',
    jp: '宇宙人',
    role: { en: 'Supporting (interruption #3)', id: 'Pendukung (gangguan #3)' },
    position: { en: 'Would-be invader of Earth', id: 'Calon penginvasi Bumi' },
    description: {
      en: 'An alien who announces that Earth is about to be invaded and destroyed — the biggest interruption of them all.',
      id: 'Alien yang mengumumkan bahwa Bumi akan diinvasi dan dihancurkan — gangguan terbesar dari semuanya.',
    },
    relations: { en: 'Stranger (very).', id: 'Orang asing (sangat asing).' },
    va: { ja: 'Junichi Suwabe (諏訪部順一)' },
    sources: ['wiki-before-csm', 'jumpsq-crown-9', 'tvtropes-fujimoto'],
  },
  {
    id: 'alien-bride',
    name: 'Alien Bride',
    jp: '宇宙人嫁',
    role: { en: 'Minor (anime cast)', id: 'Minor (pemeran anime)' },
    position: { en: '—', id: '—' },
    description: {
      en: 'Listed in the anime’s cast. Her role in the story is not described by the sources we could check.',
      id: 'Tercantum dalam daftar pemeran anime. Perannya dalam cerita tidak dijelaskan oleh sumber yang bisa kami periksa.',
    },
    relations: { en: 'Linked to the Alien (by name).', id: 'Terkait dengan Alien (dari namanya).' },
    va: { ja: 'Mamiko Noto (能登麻美子)' },
    sources: ['wiki-before-csm'],
    unverified: {
      en: 'Role and relationship unverified.',
      id: 'Peran dan relasinya belum terverifikasi.',
    },
  },
];
