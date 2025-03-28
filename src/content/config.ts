import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const liminology = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    scale: z.enum(["micro", "meso", "macro"]).optional(),
    maturity: z.enum(["captured", "curated", "created"]).optional(),
    epistemic_status: z.string().optional(),
    status: z.string().optional(),
    pubDate: z.coerce.date(),
    last_tended: z.coerce.date().optional(),
    lineage: z.array(z.union([z.string(), z.object({ title: z.string(), url: z.string() })])).optional(),
    child_of: z.array(z.string()).optional(),
    missing_links: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const library = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.array(z.enum(["video_game", "movie", "book", "article", "podcast", "tv_show", "other"])),
    creator: z.string(),
    tags: z.array(z.string()).optional(),
    license: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work, projects, liminology, library };
