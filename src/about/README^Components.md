# Components README

## Overview

This document explains how our project's frontmatter integrates with Astro and React components to render content dynamically. YAML frontmatter serves as the backbone for metadata, enabling seamless querying, parsing, and rendering across tools like Obsidian, Astro, and React. Components are designed to respond to semantic frontmatter fields like `section`, `scale`, and `type`, allowing context-aware rendering of diverse content types such as media analysis, theory notes, or linkposts.

## Astro Integration

- **Markdown Processing:** Astro automatically exposes frontmatter as JavaScript objects.
- **Component Mapping:** Use components to iterate over arrays (e.g., `sources`, `tags`) and render content conditionally.
- **Semantic Filtering:** Use fields like `scale` and `section` in frontmatter to dynamically select component layouts or apply visual distinctions.

Example:

```jsx
---
// Astro component example (Astro/React hybrid)
const { title, tags, sources } = Astro.props;
---
<h1>{title}</h1>
<ul>
  {tags.map(tag => <li>{tag}</li>)}
</ul>
<div>
  {sources.map(source => (
    <p>{source.title} by {source.author}</p>
  ))}
</div>
```

## React Integration

- **Gray Matter:** Use Gray Matter to parse YAML frontmatter from Markdown files.
- **Prop Passing:** Pass the parsed metadata as props to React components.

Example:

```jsx
import React from "react";

const Note = ({ frontmatter }) => (
  <div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.description}</p>
  </div>
);

export default Note;
```

## Key Principles

- **Modularity:** Components are reusable and adaptable.
- **Interconnectivity:** Seamless integration between YAML metadata and dynamic rendering.
- **Scalability:** Ensure components can gracefully handle arrays and objects.

## Theoretical Component Ideas

This framework can leverage a variety of components to enhance content presentation and interactivity. Below are some speculative ideas for components:

- **Linkpost Cards:** Visualize `links` content with embedded source preview, `nano`/`meso` glyphs, and destination indicator.
- **Library Entries:** Render `library` content with metadata like media type, scale, tags, and source platform.
- **Liminology Blocks:** Display theoretical fragments or diagrams with dynamic notation support.
- **Quotes & Excerpts:** Highlight phrases or cultural artifacts, potentially annotated or expandable.
- **Mega Essays:** Structured, stylized layout for authored synthesis content, with auto-generated table of contents and deep linking.

Components should be built with glyph-awareness and scale-context in mind, optionally adapting their styling or visibility based on `scale` values like `nano`, `macro`, or `mega`.

## Related Documents

### Core Guides

- [Frontmatter Guide](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow Guide](README^Workflow.md): Best practices for workflows.
- [User Guide](README^User_Guide.md): Instructions for end users.

### Technical Documentation

- [Developer Guide](README^Developer_Guide.md): Technical documentation for developers.
- [Integration Guide](README^Integration.md): Steps for integrating components.
- [Components Guide](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework](README^Theoretical_Framework.md): Underlying principles and concepts.
