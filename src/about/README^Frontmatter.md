# Frontmatter README

## Overview

This document outlines the core YAML frontmatter template used for annotating textual notes within our digital garden. It provides a standardized schema to capture metadata, making each note a self-contained, portable artifact that can evolve independently. Our approach is grounded in liminology (the study of thresholds), ANT, and assemblage theory, which emphasize interconnectedness, fluidity, and emergent systems. YAML frontmatter also ensures interoperability across tools like Obsidian, Astro, and React.

## Template

```yaml
title: "Post-Truth Vibes"
slug: "post-truth-vibes"
description: "Brief summary of the note"
pubDate: 2025-03-01
tendDate: 2025-03-05
section: "liminology"
scale: "meso"
type: "theory"
tags:
  - "truth"
  - "disinfo"
  - "memetics"
confidence: "moderate"
priority: "medium"
sources:
  - type: "book"
    author: "Author Name"
    title: "Source Title"
    link: "https://example.com/source"
relationships:
  parent: "[[Truth Systems]]"
  related:
    - "[[Media Fractures]]"
    - "[[Memetic Drift]]"
layout: "DefaultLayout"
component: "ArticleComponent"
assets:
  images:
    - "images/example.jpg"
  code:
    - "scripts/logic.js"
visibility:
  hide:
    - "pubDate"
    - "relationships"
license: "CC-BY"
sourceURL: "https://example.com/post-truth-essay"
```

## Key Principles

- Portability: Each note is an exportable .md file, ensuring long-term data freedom.
- Iterative Growth: Use the confidence field to reflect the evolving maturity of your note.
- Modularity: Designed to be extended as needed while keeping the core minimal.
- Interoperability: YAML frontmatter enables seamless integration with external tools.
- **License Awareness**: Use the `license` field to specify the license type for each note. This ensures clarity on usage rights and compliance.
- **Slug Field**: Use the `slug` field to define a URL-friendly identifier for each note, improving accessibility and linking.
- **Section Field:** Define the note's placement within the digital garden (e.g., `library`, `liminology`, `links`, `about`).
- **Type Field:** Optionally provide additional granularity (e.g., `music`, `film`, `social`, `theory`) to further categorize content.

---

## Related Documents

### Core Guides

- [Frontmatter Guide](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow Guide](README^Workflow.md): Best practices for workflows.
- [User Guide](README^User_Guide.md): Instructions for end users.

### Technical Documentation

- [Developer Guide](README^Developer_Guide.md): Technical documentation for developers.
- [Components Guide](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework](README^Theoretical_Framework.md): Underlying principles and concepts.
