import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export const entryLang = (id: string) => id.split('/')[0] as Locale;
export const entrySlug = (id: string) => id.split('/').slice(1).join('/');

export async function getWiki(lang: Locale) {
  const all = await getCollection('wiki', (e) => entryLang(e.id) === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts(lang: Locale) {
  const all = await getCollection('blog', (e) => entryLang(e.id) === lang && !e.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function readingMinutes(entry: CollectionEntry<'blog'> | CollectionEntry<'wiki'>) {
  const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Strip MDX/markdown syntax down to plain text for the search index. */
export function plainText(md: string) {
  return md
    .replace(/<Spoiler[\s\S]*?<\/Spoiler>/g, ' ') // never index spoilers
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[#*_>`|~[\]()]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
