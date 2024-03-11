import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

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
  const allPosts = await getCollection("posts");
  return rss({
    title: "Blog by Steve Frenzel",
    description:
      "A blog about web accessibility, nerdy music stuff, everything beyond and in-between by Steve Frenzel. Fuck off if these things offend you: 🏳️‍⚧️ 🏳️‍🌈 ✊🏿 🇺🇦",
    site: context.site,
    items: allPosts.map((post) => ({
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    customData: `<language>en-us</language>`,
  });
}
