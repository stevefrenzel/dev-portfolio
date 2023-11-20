import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

interface ItemProps {
  title: string;
  pubDate: string;
  description: string;
  link: string;
}

interface Props {
  title: string;
  description: string;
  site: any;
  items: ItemProps[];
  customData: string;
}

export async function GET(context: Props) {
  const allPosts = await getCollection("blog");
  return rss({
    title: "Steve Frenzel - Web Developer & Accessibility Advocate",
    description: "Writing mostly about web stuff and music",
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
