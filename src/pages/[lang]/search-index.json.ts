import type { APIRoute } from 'astro';
import { getStaticLocalePaths, localePath, type Locale } from '../../i18n';
import { entrySlug, getPosts, getWiki, plainText } from '../../lib/content';

export const getStaticPaths = getStaticLocalePaths;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Locale;
  const wiki = (await getWiki(lang)).map((e) => ({
    title: e.data.title,
    url: localePath(lang, `wiki/${entrySlug(e.id)}`),
    section: 'Wiki',
    text: `${e.data.description} ${plainText(e.body ?? '')}`,
  }));
  const blog = (await getPosts(lang)).map((e) => ({
    title: e.data.title,
    url: localePath(lang, `blog/${entrySlug(e.id)}`),
    section: 'Blog',
    text: `${e.data.description} ${plainText(e.body ?? '')}`,
  }));
  return new Response(JSON.stringify([...wiki, ...blog]), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
