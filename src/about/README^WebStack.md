# Astro Nano Web Stack

This document explains the architecture and data flow of the Astro Nano project, with a particular focus on content schema definition and validation.

## Project Structure

```
/src
├── content/                # Contains collections of content data, including schema definitions and markdown files
│   ├── config.ts           # Central file for defining schemas for all content collections
│   ├── bits/               # Directory containing all markdown content files with frontmatter for each entry
├── pages/                  # Defines the routes for the application that correspond to different URLs (e.g. /library, /links)
│   ├── [slug].astro        # Dynamic page that renders content based on the provided slug
│   ├── library.astro       # Landing page for the library section, which filters and displays related content
│   ├── index.astro         # Home page that showcases summaries or featured content from various sections
├── layouts/                # Contains layout components that provide a consistent structure for the pages
│   ├── BaseLayout.astro    # Global layout component that includes shared UI elements like header, navigation, and footer
│   ├── SectionLayout.astro # Layouts designed specifically for different sections, such as library or links
├── components/             # Reusable UI components that encapsulate display logic and styling for various elements
│   ├── Card.astro          # Component used for displaying previews or summaries of content items
│   ├── GlyphLegend.astro   # UI component that visually represents symbolic notation in the content
│   ├── TagList.astro       # Component for visually displaying metadata related to tags
└── styles/                 # Contains CSS and styling files, which may be scoped to specific components or applied globally
    ├── base.css            # Base styles that are applied across the entiokre site
    ├── tokens.css          # File for design tokens or theme variables that define consistent styling
    ├── library.css         # Styles specific to the library section of the site
```

## Schema Definition and Validation Flow

### 1. Schema Definition (src/content/config.ts)

The `src/content/config.ts` file is the central location where **all content schemas are defined**. This file:

- Uses Zod (imported from `astro:content`) for schema validation
- Defines type-safe schemas for each content collection
- Exports these collections for use throughout the application

Example of schema definition:

```typescript
const bits = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    section: z.enum(["library", "liminology", "links", "about"]),
    scale: z.enum(["nano", "micro", "meso", "macro", "mega"]),
    type: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sourceURL: z.string().optional(),
    maturity: z.string().optional(),
  }),
});
```

### 2. Content File Creation

Content files (usually Markdown or MDX) must include frontmatter that adheres to the schema:

```yaml
---
title: "My First Note"
slug: "my-first-note"
section: "library"
scale: "micro"
type: "music"
tags: ["aesthetic", "sample"]
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
import { getCollection, getEntry } from "astro:content";

// Get all library items (schema-validated)
const libraryItems = await getCollection(
  "bits",
  ({ data }) => data.section === "library"
);

// Get a specific entry by collection and slug
const aboutPage = await getCollection(
  "bits",
  ({ data }) => data.section === "about"
);
```

## Content Collections Overview

Each collection has specific schema requirements:

| Section    | Purpose                              | Key Schema Fields                            |
| ---------- | ------------------------------------ | -------------------------------------------- |
| library    | Media analysis across scales         | title, type, scale, section, tags (opt)      |
| liminology | Conceptual system & notation content | title, scale, section, maturity, tags (opt)  |
| links      | Ingress/egress portal to fragments   | title, sourceURL, scale, section, tags (opt) |
| about      | Site/about metadata                  | title, description (opt), section            |

## Data Flow Summary

1. **Schema Definition**: All schemas centrally defined in `src/content/config.ts` using Zod
2. **Content Creation**: Content files created with frontmatter matching schemas
3. **Validation**: Astro validates content against schemas at build time
4. **Content Access**: Components access type-safe, validated content through Astro's content API
5. **Rendering**: Content is rendered within components and layouts

This architecture ensures type safety and content validation throughout the entire build and rendering process.

## Conceptual Layer Summary

The architecture of this project favors:

- **Flat content structure**, avoiding deep folder hierarchies
- **Rich frontmatter metadata**, driving navigation and rendering
- **Semantic scaling**, where each piece is tagged by its depth (nano → mega)
- **Sectional separation**, powered entirely through the `section` frontmatter field

This enables a recursive, dynamic, and scale-aware digital garden optimized for both clarity and flexibility.
