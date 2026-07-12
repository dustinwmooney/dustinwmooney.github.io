import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The writing collection: three post types (M31.b).
//   essay   — a standard piece, lives on this site
//   link    — a pointer to something elsewhere (interview, article), à la Dario
//   feature — an art-directed longform story (M31.c kit)
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.enum(['essay', 'link', 'feature']).default('essay'),
    link: z.string().url().optional(), // required when type === 'link'
    hero: z.string().optional(), // feature hero image/video path
    heroAlt: z.string().optional(),
    accent: z.string().optional(), // per-post accent color (feature art direction)
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
