# Components README

## Overview

This document explains how the project utilizes Astro components to create a modular, reusable, and scalable architecture. Each component is designed to handle specific tasks, such as rendering links, headers, footers, or cards, while maintaining a consistent design system. The components integrate seamlessly with Astro's props system and leverage utility functions like `cn` for conditional styling.

## Current Usage of Components

### Link.astro
- **Purpose:** Renders anchor tags with optional external target and underline settings.
- **Usage:** Used across the project for navigation links, both internal and external.
- **Features:**
  - Accepts props like `href`, `external`, and `underline`.
  - Dynamically applies styles using the `cn` utility function.
  - Supports spreading additional props for flexibility.

### Header.astro
- **Purpose:** Provides the site header with navigation links.
- **Usage:** Displays the site name and links to key sections like "blog," "work," and "projects."
- **Features:**
  - Uses the `Link` component for navigation.
  - Wraps content in the `Container` component for consistent layout.

### Head.astro
- **Purpose:** Manages global metadata and theme logic.
- **Usage:** Sets metadata like title, description, and Open Graph/Twitter tags for each page.
- **Features:**
  - Preloads fonts for performance.
  - Implements theme toggling with JavaScript and `ViewTransitions`.

### FormattedDate.astro
- **Purpose:** Formats and displays dates in a user-friendly format.
- **Usage:** Used to display dates in blog posts, projects, or other content.
- **Features:**
  - Accepts a `date` prop and outputs a `<time>` element.
  - Formats dates as "MMM DD, YYYY" (e.g., "Jan 1, 2024").

### Footer.astro
- **Purpose:** Displays the site footer with theme toggle buttons and a "Back to Top" button.
- **Usage:** Appears at the bottom of every page.
- **Features:**
  - Includes the `BackToTop` component for smooth scrolling.
  - Provides buttons for toggling between light, dark, and system themes.

### Container.astro
- **Purpose:** Wraps content in a consistent layout with max-width and padding.
- **Usage:** Used in components like `Header` and `Footer` to standardize layout.
- **Features:**
  - Ensures consistent spacing and alignment across the site.

### BackToTop.astro
- **Purpose:** Adds a button to scroll back to the top of the page.
- **Usage:** Included in the footer for user convenience.
- **Features:**
  - Smooth scrolling behavior with hover animations.

### BackToPrev.astro
- **Purpose:** Displays a "back" link for navigating to the previous page.
- **Usage:** Used in pages or sections where users might need to navigate back.
- **Features:**
  - Styled `<a>` element with an arrow icon and slot for custom text.

### ArrowCard.astro
- **Purpose:** Displays a summary card with a hover arrow icon, linking to detailed content.
- **Usage:** Used for blog posts, projects, or other content previews.
- **Features:**
  - Accepts an `entry` prop for dynamic content.
  - Animates the arrow icon on hover for visual feedback.

## Key Principles

- **Modularity:** Each component is designed to handle a specific task, making it reusable and easy to maintain.
- **Scalability:** Components can handle dynamic props and adapt to different use cases.
- **Consistency:** Shared utility functions and design patterns ensure a cohesive user experience.

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
