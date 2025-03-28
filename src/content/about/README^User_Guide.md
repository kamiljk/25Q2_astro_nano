# User Guide README

## Overview

This guide explains how we navigate and use our digital garden. It’s designed to help us find specific notes, explore relationships, and export data when needed. The YAML frontmatter is central to how we structure and interact with our content.

---

## Navigation

### **Site Structure**

- We start at the homepage to see the latest notes—it’s the garden’s entrance.
- Filters like **tags**, **dates**, or **confidence levels** allow us to focus on specific areas of interest.

### **Search & Query**

- Tools like Obsidian’s Dataview make querying straightforward. For example:

  ```dataview
  TABLE title, pubDate, confidence
  FROM "notes"
  WHERE confidence = "high"
  ```

- This helps us quickly locate the most polished, high-confidence notes.

---

## Interactivity

### **Dynamic Rendering**

- We use **Astro** and **React** to bring our content to life. YAML frontmatter drives this interactivity, ensuring every field in the UI is backed by structured metadata.

### **Updating Content**

- Notes are never “done.” They grow and change as our ideas evolve. Version histories help us track these changes over time.

---

## Portability & Export

### **Exportability**

- Every note is a self-contained Markdown file. This means we can take it anywhere, and so can you.

### **Data Freedom**

- Our notes are designed to remain independent. You’re not locked into any one tool or platform, and neither are we.

---

## Why This Matters

This guide reflects how we think about our digital garden—it’s not just a collection of notes; it’s a system for exploring and organizing ideas. By leveraging YAML frontmatter and available tools, we’ve created a workflow that’s both **structured** and **flexible**. Users can adapt this approach to their own needs, but for us, it’s about clarity and usability.

---

## Related Documents

### Core Guides

- [Frontmatter README](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow README](README^Workflow.md): Best practices for workflows.
- [User Guide README](README^User_Guide.md): Instructions for end users.
- [Data Notebooks README](README^Data_Notebooks.md): Managing structured data notebooks.
- [Testing Guide](README^Testing_Guide.md): Strategies and tools for testing.
- [Accessibility Guide](README^Accessibility_Guide.md): Ensuring inclusivity and accessibility.

### Technical Documentation

- [Developer Guide README](README^Developer_Guide.md): Technical documentation for developers.
- [Integration README](README^Integration.md): Steps for integrating components.
- [Components README](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework README](README^Theoretical_Framework.md): Underlying principles and concepts.
- [Media README](README^Media.md): Handling media-specific content.
