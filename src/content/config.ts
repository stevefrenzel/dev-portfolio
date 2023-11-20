import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      layout: z.string(),
      title: z.string(),
      author: z.string(),
      description: z.string(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      pubDate: z.date(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
