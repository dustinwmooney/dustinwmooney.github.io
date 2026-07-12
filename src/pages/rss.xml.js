import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS doubles as the feed the ESP (M31.e) turns into subscriber emails.
export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Dustin Mooney — Writing',
    description: 'Essays, features, and pointers from Dustin Mooney.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: p.data.type === 'link' ? p.data.link : `/writing/${p.id}/`,
    })),
  });
}
