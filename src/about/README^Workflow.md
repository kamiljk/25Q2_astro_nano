# Workflow README

## Overview

This document outlines how we designed and refined our workflow for managing notes in our digital garden. It’s not just about organization—it’s about creating a system that works for us: **useful**, **portable**, and **easy to interpret**. The YAML frontmatter is the backbone of this approach, ensuring consistency and adaptability across our notes.

---

## Guidelines

### **Content Creation**

- We start with YAML templates from the
  [Frontmatter README](README^Frontmatter.md) or
  [Media README](README^Media.md). Common frontmatter fields include `title`, `slug`, `section`, `scale`, `type`, `tags`, and `confidence`. These help control how content is routed, rendered, and queried. These templates are the
  foundation of our system.
- Markdown files are kept **simple** and **clear**. Complexity is avoided because clarity is our priority.
- Notes are treated as **living documents**:
  - **Major updates?** We log them in batches to track significant changes.
  - **Minor tweaks?** These are made incrementally as ideas evolve.
- The `confidence` field in YAML reflects how mature a note is. For example:

  ```yaml
  confidence: 0.8 # Indicates the note is 80% complete or reliable.
  ```

  This field helps us track the maturity of a note, making it clear whether it is a draft, a work in progress, or nearly finalized. We’re comfortable with notes being works in progress—this field makes that explicit.

- Every `.md` file is designed to stand on its own. For example, each file includes a YAML frontmatter section that provides metadata (e.g., title, tags, and confidence level) and self-contained content that ensures the file is understandable even when viewed in isolation.

### **Portability**

- Every `.md` file is designed to stand on its own. If exported, it should make sense without needing additional context.
- Sticking to the YAML schema ensures structure and consistency, even when notes are shared or adapted.

### **Iterative Growth**

- Revisiting and revising notes is part of our process. Ideas evolve, and so do the notes.
- We document transitions openly. It’s okay to say, “This is a work in progress.”

---

## Key Principles

- **Consistency:** Following the YAML schema makes our workflow predictable and efficient.
- **Efficiency:** We remove redundancies and keep YAML lean, focusing only on what’s essential.
- **Adaptability:** As our digital garden grows, we adjust the workflow to meet new needs.

---

## Why This Matters

This workflow reflects how we think about progress—it’s not about perfection. By following these guidelines, we’ve created notes that are:

- **Easy to read**
- **Simple to interpret**
- **Ready for export**

For users, this means you can adapt our system to your needs, but for us, it’s about maintaining clarity and flexibility in how we work.

---

## Related Documents

### Core Guides

- [Frontmatter README](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow README](README^Workflow.md): Best practices for workflows.
- [User Guide README](README^User_Guide.md): Instructions for end users.
- [Data Notebooks README](README^Data_Notebooks.md): Managing structured data notebooks.
- [Accessibility Guide](README^Accessibility_Guide.md): Ensuring inclusivity and accessibility.

### Technical Documentation

- [Developer Guide README](README^Developer_Guide.md): Technical documentation for developers.
- [Components README](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework README](README^Theoretical_Framework.md): Underlying principles and concepts.
