# Frontmatter README

## Overview

This document outlines the core YAML frontmatter template used for annotating textual notes within our digital garden. It provides a standardized schema to capture metadata, making each note a self-contained, portable artifact that can evolve independently. Our approach is grounded in liminology (the study of thresholds), ANT, and assemblage theory, which emphasize interconnectedness, fluidity, and emergent systems. YAML frontmatter also ensures interoperability across tools like Obsidian, Astro, and React.

## Template

```yaml
title: "Descriptive Title"
description: "Brief summary of the note"
pubDate: 2025-03-01
tendDate: 2025-03-05
scale: nano | micro | meso | macro | mega
confidence: "low | moderate | high"
tags:
  - "example"
  - "tutorial"
priority: "low | medium | high"
license: "MIT | CC-BY | CC-BY-SA | proprietary | etc." # New field
sources:
  - type: "historical | book | original | etc."
    author: "Author Name"
    title: "Source Title"
    link: "https://example.com"
relationships:
  parent: "[[Parent Note or Project]]"
  children:
    - "[[Child Note 1]]"
    - "[[Child Note 2]]"
  related:
    - "[[Related Note]]"
layout: "DefaultLayout"
component: "p5Sketch"
assets:
  images:
    - "images/example.jpg"
  code:
    - "scripts/logic.js"
visibility:
  hide:
    - "pubDate"
    - "relationships"
```

## Key Principles

- Portability: Each note is an exportable .md file, ensuring long-term data freedom.
- Iterative Growth: Use the confidence field to reflect the evolving maturity of your note.
- Modularity: Designed to be extended as needed while keeping the core minimal.
- Interoperability: YAML frontmatter enables seamless integration with external tools.
- **License Awareness**: Use the `license` field to specify the license type for each note. This ensures clarity on usage rights and compliance.

---

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
