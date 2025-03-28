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
    epistemic: z.string().optional(),
    epistemic_status: z.string().optional(),
    status: z.string().optional(),
    pubDate: z.string().optional(),
    last_tended: z.string().optional(),
    lineage: z.array(z.string()).optional(),
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
    author: z.string().optional(),
    description: z.string().optional(),
    type: z.enum(["book", "article", "video", "podcast", "other"]).optional(),
    pubDate: z.coerce.date().optional(),
    url: z.string().optional(),
    antilibrary: z.boolean().optional(), // true if it's an "antilibrary" item
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work, projects, liminology, library };
