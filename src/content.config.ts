import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Entries live in src/content/<collection>/<lang>/<slug>.mdx.
 * The id becomes "<lang>/<slug>", so the same slug in both folders is one translated pair.
 */
const wiki = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    kanji: z.string(), // big decorative glyph on the wiki card
    spoilers: z.boolean().default(false),
    sources: z.array(z.string()).default([]),
    updated: z.coerce.date(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Dans-Vsa'),
    tags: z.array(z.string()).default([]),
    sfx: z.string().default('ドン'),
    spoilers: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { wiki, blog };
