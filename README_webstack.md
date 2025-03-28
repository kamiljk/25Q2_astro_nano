# Astro Nano Web Stack

This document explains the architecture and data flow of the Astro Nano project, with a particular focus on content schema definition and validation.

## Project Structure
The rewritten markdown content that would fit at $SELECTION_PLACEHOLDER$ is:

```plaintext
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
│   ├── index.astro         # Homepage
│   ├── blog/               # Blog routes
│   │   ├── index.astro     # Blog listing page
│   │   └── [...slug].astro # Dynamic route for individual blog posts
│   ├── projects/           # Project routes
│   ├── liminology/         # Knowledge system routes
│   ├── library/            # Media catalog routes
│   └── about.astro         # About page
├── layouts/                # Layout components for page structure
│   ├── PageLayout.astro    # Main site layout (header, footer, etc.)
│   ├── BlogPost.astro      # Layout for blog posts
│   ├── ProjectLayout.astro # Layout for project pages
│   └── NoteLayout.astro    # Layout for liminology notes
├── components/             # Reusable UI components
│   ├── common/             # Site-wide components
│   │   ├── Header.astro    # Site header
│   │   ├── Footer.astro    # Site footer
│   │   └── Navigation.astro # Main navigation
│   ├── blog/               # Blog-specific components
│   ├── projects/           # Project-specific components
│   └── ui/                 # Generic UI components
├── styles/                 # CSS styling files
│   ├── global.css          # Global styles
│   └── variables.css       # CSS variables
└── utils/                  # Utility functions
    ├── utils.ts            # General utility functions
    └── content-helpers.ts  # Content manipulation helpers
```


### Key Highlights

- **`content/`**: Houses all content collections, with schemas defined in `config.ts` for type safety.
- **`pages/`**: Defines routes and page components using Astro's file-based routing.
- **`layouts/`**: Provides reusable layout components for consistent page structure.
- **`components/`**: Contains modular UI components, organized by feature or page type.
- **`styles/`**: Centralized styling with global CSS and reusable variables.
- **`utils/`**: Utility functions for common logic, such as date formatting and content manipulation.

This structure promotes a clean separation of concerns, making the project scalable and easy to maintain.

## Directory Structure Details

### /src/pages

The `pages` directory defines the routing structure of your site following Astro's file-based routing:

- **File-based routing**: Each `.astro` file becomes a route
- **Index files**: `index.astro` files become the root of their directory path
- **Dynamic routes**: Files like `[slug].astro` or `[...slug].astro` create dynamic routes

Example page component:
```astro
---
// src/pages/blog/index.astro
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

// Get all non-draft blog posts
const posts = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? !data.draft : true;
});
---

<Layout title="Blog">
  <h1>Blog Posts</h1>
  <ul>
    {posts.map(post => (
      <li>
        <a href={`/blog/${post.slug}`}>{post.data.title}</a>
      </li>
    ))}
  </ul>
</Layout>
```

### /src/layouts

Layouts define the structure that wraps your page content:

- Provide consistent page structure (header, footer, metadata)
- Can be nested for complex layouts
- Accept props and slots for content insertion

Example layout component:
```astro
---
// src/layouts/BlogPost.astro
import Layout from './Layout.astro';
const { frontmatter } = Astro.props;
---

<Layout title={frontmatter.title}>
  <article>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.description}</p>
    <time>{new Date(frontmatter.date).toLocaleDateString()}</time>
    <slot /> <!-- Content from the markdown file goes here -->
  </article>
</Layout>
```

### /src/components

Components directory contains reusable UI elements:

- **Organization**: Components are grouped by feature or page type
- **Framework-agnostic**: Can include Astro components (.astro) or framework components (.jsx, .vue, etc.)
- **Islands architecture**: Interactive components can be isolated for partial hydration

Example component:
```astro
---
// src/components/common/Header.astro
---

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/projects">Projects</a>
    <a href="/liminology">Liminology</a>
    <a href="/library">Library</a>
    <a href="/about">About</a>
  </nav>
</header>
```

### /src/utils

Utility functions that provide reusable logic across components:

- Date formatting
- Content parsing and manipulation
- Helper functions
- Type definitions

## Data Flow Across Directories

1. **Content Definition**: 
   - Content schemas defined in `src/content/config.ts`
   - Content files stored in respective collection directories

2. **Page Rendering**:
   - Pages in `src/pages` fetch content using `getCollection` or `getEntry`
   - Pages use layouts from `src/layouts` for structure
   - Components from `src/components` provide UI elements

3. **Component Composition**:
   - Layouts compose page structure and include common components
   - Components may access content directly or receive it as props
   - Styles applied through global CSS or component-specific styles

## Schema to UI Flow Example

For a blog post, the data flows:

1. Schema defined in `src/content/config.ts`
2. Content created in `src/content/blog/my-post.md`
3. Page component `src/pages/blog/[...slug].astro` fetches the content
4. Content is passed to `src/layouts/BlogPost.astro`
5. Layout renders the content using components from `src/components/blog`
6. Styles from `src/styles` are applied to the rendered HTML

This architecture ensures a clean separation of concerns while maintaining type safety throughout the application.
