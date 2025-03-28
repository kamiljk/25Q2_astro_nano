# Astro Nano Web Stack

This document explains the architecture and data flow of the Astro Nano project, with a particular focus on content schema definition and validation.

## Project Structure

```
/src
├── content/                # Content collections (data)
│   ├── config.ts           # Schema definitions for all collections
│   ├── blog/               # Blog post markdown files
│   ├── work/               # Work experience entries
│   ├── projects/           # Project showcase entries
│   ├── liminology/         # Knowledge/notes system
│   ├── library/            # Media catalog entries
│   └── about/              # About page content
├── pages/                  # Route definitions and page components
├── layouts/                # Layout components for page structure
├── components/             # Reusable UI components
└── styles/                 # CSS styling files
```

## Schema Definition and Validation Flow

### 1. Schema Definition (src/content/config.ts)

The `src/content/config.ts` file is the central location where **all content schemas are defined**. This file:

- Uses Zod (imported from `astro:content`) for schema validation
- Defines type-safe schemas for each content collection
- Exports these collections for use throughout the application

Example of schema definition:

```typescript
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});
```

### 2. Content File Creation

Content files (usually Markdown or MDX) must include frontmatter that adheres to the schema:

```markdown
---
title: "My Blog Post"
description: "A description of my blog post"
date: 2023-05-01
---

Content goes here...
```

### 3. Build-time Schema Validation

During the build process:

1. Astro reads each content file
2. Parses the frontmatter
3. **Validates the frontmatter against the schema defined in config.ts**
4. Fails the build if validation errors occur

### 4. Content Access in Components

Pages and components access validated content through Astro's content API:

```typescript
// In an Astro component
import { getCollection, getEntry } from 'astro:content';

// Get all blog posts (schema-validated)
const allPosts = await getCollection('blog');

// Get a specific entry by collection and slug
const aboutPage = await getEntry('about', 'main');
```

## Content Collections Overview

Each collection has specific schema requirements:

| Collection  | Purpose | Key Schema Fields |
|-------------|---------|-------------------|
| blog        | Blog posts | title, description, date, draft (opt) |
| work        | Work experience | company, role, dateStart, dateEnd |
| projects    | Project showcase | title, description, date, demoURL (opt), repoURL (opt) |
| liminology  | Knowledge system | title, scale, maturity, pubDate, tags (opt) |
| library     | Media catalog | title, type, creator, tags (opt) |
| about       | About information | title, description (opt) |

## Data Flow Summary

1. **Schema Definition**: All schemas centrally defined in `src/content/config.ts` using Zod
2. **Content Creation**: Content files created with frontmatter matching schemas
3. **Validation**: Astro validates content against schemas at build time
4. **Content Access**: Components access type-safe, validated content through Astro's content API
5. **Rendering**: Content is rendered within components and layouts

This architecture ensures type safety and content validation throughout the entire build and rendering process.
