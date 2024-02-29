import { z, defineCollection, type Render } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
  tags: z.array(z.string()),
});

const postsCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};

// for typesafety in PostLayout
export type Post = {
  id: string;
  slug: string;
  body: string;
  collection: "pages";
  data: z.infer<typeof postSchema>;
} & { render(): Render[".md"] };
