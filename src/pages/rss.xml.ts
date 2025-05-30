import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection } from "astro:content";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context: APIContext) {
  let baseUrl = context.site?.href || "https://stevefrenzel.dev";
  if (baseUrl.at(-1) === "/") baseUrl = baseUrl.slice(0, -1);

  const renderers = await loadRenderers([getMDXRenderer()]);

  const container = await AstroContainer.create({ renderers });

  const posts = (await getCollection("posts")).sort((a, b) =>
    a.data.pubDate > b.data.pubDate ? -1 : 1,
  );

  const feedItems: RSSFeedItem[] = [];
  for (const post of posts) {
    const { Content } = await post.render();
    const rawContent = await container.renderToString(Content);

    const content = await transform(
      rawContent.replace(/^<!DOCTYPE html>/, ""),
      [
        async (node) => {
          await walk(node, (node) => {
            if (node.name === "a" && node.attributes.href?.startsWith("/")) {
              node.attributes.href = baseUrl + node.attributes.href;
            }
            if (node.name === "img" && node.attributes.src?.startsWith("/")) {
              node.attributes.src = baseUrl + node.attributes.src;
            }
          });
          return node;
        },
        sanitize({ dropElements: ["iframe", "script", "style"] }),
      ],
    );
    const { author, ...data } = post.data;
    feedItems.push({
      ...data,
      // @ts-ignore
      "dc:creator": author,
      link: `/posts/${post.slug}/`,
      content,
    });
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: feedItems,
  });
}
