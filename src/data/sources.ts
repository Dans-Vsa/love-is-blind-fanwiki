export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  kind: 'official' | 'reference' | 'review' | 'database';
  accessed: string; // ISO date
  note?: string;
}

const ACCESSED = '2026-10-20';

export const sources: Source[] = [
  {
    id: 'jumpsq-crown-9',
    title: 'クラウン新人漫画賞 第9回 結果発表 (9th Crown Newcomer Manga Award results)',
    publisher: 'Jump SQ. / Shueisha',
    url: 'https://jumpsq.shueisha.co.jp/mangasyou/crown/index09.html',
    kind: 'official',
    accessed: ACCESSED,
    note: 'Honorable Mention (佳作), 31 pages, age 21 / Yamagata, judge Takeshi Konomi; official one-line synopsis.',
  },
  {
    id: 'jumpsq-tweet-2016',
    title: 'Jump SQ. editorial post announcing the limited re-release of “Love is Blind” on Shōnen Jump+',
    publisher: 'Jump SQ. editorial (X / Twitter)',
    url: 'https://x.com/JUMP_SQ/status/770037136376627202',
    kind: 'official',
    accessed: ACCESSED,
    note: 'Calls it Fujimoto’s debut work; describes Yuri as the vice-president who says “Osu”.',
  },
  {
    id: 'wiki-before-csm',
    title: 'Tatsuki Fujimoto Before Chainsaw Man',
    publisher: 'Wikipedia (English)',
    url: 'https://en.wikipedia.org/wiki/Tatsuki_Fujimoto_Before_Chainsaw_Man',
    kind: 'reference',
    accessed: ACCESSED,
    note: 'Volume contents, release dates, ISBNs, anime staff and cast.',
  },
  {
    id: 'wiki-fujimoto',
    title: 'Tatsuki Fujimoto',
    publisher: 'Wikipedia (English)',
    url: 'https://en.wikipedia.org/wiki/Tatsuki_Fujimoto',
    kind: 'reference',
    accessed: ACCESSED,
    note: 'Biography, career timeline, awards and influences.',
  },
  {
    id: 'wiki-fujimoto-ja',
    title: '藤本タツキ',
    publisher: 'Wikipedia (Japanese)',
    url: 'https://ja.wikipedia.org/wiki/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD',
    kind: 'reference',
    accessed: ACCESSED,
    note: 'Debut in Jump SQ.19 Vol. 13 (2014); Jump+ re-release on 29 Aug 2016.',
  },
  {
    id: 'mangadex',
    title: 'Fujimoto Tatsuki Tanpenshuu: 17-21',
    publisher: 'MangaDex (title info page)',
    url: 'https://mangadex.org/title/991e9f15-8368-4843-a78a-5605918f9c3e',
    kind: 'database',
    accessed: ACCESSED,
  },
  {
    id: 'viz-17-21',
    title: 'Tatsuki Fujimoto Before Chainsaw Man: 17-21',
    publisher: 'VIZ Media',
    url: 'https://www.viz.com/read/manga/tatsuki-fujimoto-before-chainsaw-man/product/7330',
    kind: 'official',
    accessed: ACCESSED,
  },
  {
    id: 'tcj-review',
    title: 'Tatsuki Fujimoto Before Chainsaw Man: 17–21 (review)',
    publisher: 'The Comics Journal',
    url: 'https://www.tcj.com/reviews/tatsuki-fujimoto-before-chainsaw-man-17-21/',
    kind: 'review',
    accessed: ACCESSED,
    note: 'Calls “Love is Blind” probably the best-written piece in the book.',
  },
  {
    id: 'medium-anitay',
    title: 'Both Then and Now: A Review of Tatsuki Fujimoto’s 17-21',
    publisher: 'Anitay (Medium)',
    url: 'https://medium.com/anitay-official/both-then-and-now-a-review-of-tatsuki-fujimotos-17-21-29d4a08013ad',
    kind: 'review',
    accessed: ACCESSED,
    note: 'Discusses the “least of my priorities” refrain and quotes Fujimoto’s afterword about page count.',
  },
  {
    id: 'ashley-manning',
    title: 'Tatsuki Fujimoto Before Chainsaw Man: 17-21 — manga review',
    publisher: 'Ashley Manning',
    url: 'https://ashleymanning.com/2023/02/09/tatsuki-fujimoto-before-chainsaw-man-17-21-manga-review/',
    kind: 'review',
    accessed: ACCESSED,
  },
  {
    id: 'tvtropes-fujimoto',
    title: 'Tatsuki Fujimoto (Creator)',
    publisher: 'TV Tropes',
    url: 'https://tvtropes.org/pmwiki/pmwiki.php/Creator/TatsukiFujimoto',
    kind: 'reference',
    accessed: ACCESSED,
    note: 'Fan-edited; used only for ending details, flagged where it is the sole source.',
  },
  {
    id: 'anime-planet',
    title: 'Love is Blind (Tatsuki FUJIMOTO)',
    publisher: 'Anime-Planet',
    url: 'https://www.anime-planet.com/manga/love-is-blind-tatsuki-fujimoto',
    kind: 'database',
    accessed: ACCESSED,
  },
  {
    id: 'ann-17-26',
    title: 'Chainsaw Man Creator Tatsuki Fujimoto’s 8 Short Stories Get Anthology Anime Series on Prime Video',
    publisher: 'Anime News Network',
    url: 'https://www.animenewsnetwork.com/news/2025-09-02/chainsaw-man-creator-tatsuki-fujimoto-8-short-stories-get-anthology-anime-series-on-prime-video-on-/.228352',
    kind: 'reference',
    accessed: ACCESSED,
    note: 'Announcement of Tatsuki Fujimoto 17-26: stories drawn between ages 17 and 26.',
  },
  {
    id: 'anidb-ep3',
    title: 'Fujimoto Tatsuki 17-26 — Episode 3: Love Is Blind',
    publisher: 'AniDB',
    url: 'https://anidb.net/episode/300842',
    kind: 'database',
    accessed: ACCESSED,
    note: 'Episode staff (music: Yuma Yamaguchi) and runtime.',
  },
  {
    id: 'peoples-movies',
    title: 'Tatsuki Fujimoto 17-26 Review (Scotland Loves Anime 2025)',
    publisher: 'The People’s Movies',
    url: 'https://thepeoplesmovies.com/tatsuki-fujimoto-17-26-review-scotland-loves-anime-2025/',
    kind: 'review',
    accessed: ACCESSED,
  },
  {
    id: 'comicbook-ranking',
    title: 'All 8 Tatsuki Fujimoto 17-26 Episodes, Ranked',
    publisher: 'ComicBook.com',
    url: 'https://comicbook.com/anime/list/all-8-tatsuki-fujimoto-17-26-episodes-ranked-from-worst-to-best/',
    kind: 'review',
    accessed: ACCESSED,
  },
  {
    id: 'manba-review',
    title: '[ネタバレ感想] 新世代セカイ系ギャグコメディ 恋は盲目レビュー',
    publisher: 'マンバ (Manba)',
    url: 'https://manba.co.jp/topics/18240',
    kind: 'review',
    accessed: ACCESSED,
    note: 'Japanese fan review framing the story as a “new-generation sekai-kei gag comedy”.',
  },
];

export const sourceById = (id: string) => sources.find((s) => s.id === id);
