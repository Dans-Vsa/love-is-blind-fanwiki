import en from './en.json';
import id from './id.json';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, id } satisfies Record<Locale, Record<string, string>>;
export type UIKey = keyof typeof en;

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function useTranslations(lang: Locale) {
  return (key: UIKey): string => dictionaries[lang][key] ?? dictionaries.en[key];
}

/** Prefix a path with the deploy base (for GitHub Pages sub-paths). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Localised URL, e.g. localePath('id', 'wiki/characters') -> /id/wiki/characters/ */
export function localePath(lang: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return withBase(`/${lang}/${clean ? `${clean}/` : ''}`);
}

/** Swap the locale segment of the current pathname. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.slice(base.length).replace(/^\/(en|id)(?=\/|$)/, '');
  return withBase(`/${to}${rest || '/'}`);
}

export function getStaticLocalePaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export const dateFormat = (lang: Locale, date: Date) =>
  date.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
