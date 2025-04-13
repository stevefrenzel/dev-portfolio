import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      thumbnail: z.string(),
      title: z.string(),
      author: z.string().default("Steve Frenzel"),
      description: z.string(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      pubDate: z.date(),
      tags: z.array(z.string()),
      hideThumbnail: z.boolean().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
