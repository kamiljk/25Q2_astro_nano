# Developer README

## Overview

This document provides setup instructions, development guidelines, and contribution protocols for developers working on the project. It covers environment setup, local development practices, and best practices for collaborating effectively. The project uses a flat, frontmatter-driven structure to manage content semantics—each Markdown file is annotated with fields like `section`, `scale`, and `type` to power dynamic routing and rendering.

## Setup & Environment

- **Installation:**
  - Clone the repository.
  - Run `npm install` to install dependencies.
- **Local Development:**
  - Start the local server with `npm run dev`.
  - Access the local site at `http://localhost:4321` (or as configured in `astro.config.mjs`).
- **Testing & Debugging:**
  - Use available tools and scripts to run tests and debug changes.

## Contribution Guidelines

- **Code Style:** Adhere to the project's coding standards.
- **Branching Strategy:** Use feature branches for new features or bug fixes.
- **Pull Requests:** Provide clear, detailed descriptions for changes.
- **Documentation:** Update relevant README files and ensure that any `.mdx` content edited includes accurate, schema-valid frontmatter (e.g., `section`, `scale`, `slug`, `type`).

## Tools & Dependencies

- **Astro:** For static site generation.
- **React:** For dynamic component rendering inside Astro layouts.
- **Gray Matter:** For parsing frontmatter in Markdown/MDX content.
- **Version Control:** Git is used for source control.

## Key Principles

- **Collaboration:** Maintain clear communication and thorough documentation.
- **Modularity:** Keep code modular and components reusable.
- **Iterative Development:** Embrace an agile, iterative approach.
- **Metadata Awareness:** Ensure YAML frontmatter is consistently structured and updated.
- **Schema Alignment:** Follow the `content/config.ts` schema definitions for valid frontmatter fields to avoid build-time errors and maintain structural consistency.

## Related Documents

### Core Guides

- [Frontmatter Guide](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow Guide](README^Workflow.md): Best practices for workflows.
- [User Guide](README^User_Guide.md): Instructions for end users.
- [Testing Guide](README^Testing_Guide.md): Strategies and tools for testing.
- [Accessibility Guide](README^Accessibility_Guide.md): Ensuring inclusivity and accessibility.

### Technical Documentation

- [Developer Guide](README^Developer_Guide.md): Technical documentation for developers.
- [Integration Guide](README^Integration.md): Steps for integrating components.
- [Components Guide](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework](README^Theoretical_Framework.md): Underlying principles and concepts.
