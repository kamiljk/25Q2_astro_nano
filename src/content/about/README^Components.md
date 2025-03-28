# Components README

## Overview

This document explains how our project's frontmatter integrates with Astro and React components to render content dynamically. YAML frontmatter serves as the backbone for metadata, enabling seamless querying, parsing, and rendering across tools like Obsidian, Astro, and React.

## Astro Integration

- **Markdown Processing:** Astro automatically exposes frontmatter as JavaScript objects.
- **Component Mapping:** Use components to iterate over arrays (e.g., `sources`, `tags`) and render content conditionally.

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
import React from 'react';

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

- **Standard Posts:** Render blog-style posts with metadata like title, author, and date.
- **Media Tiles:** Display visual media (e.g., images, videos) with captions and metadata.
- **Quotes:** Highlight quotes with attribution and optional styling for emphasis.
- **Songs:** Embed links to songs (e.g., Apple Music) with metadata like artist and album.
- **Movies:** Provide links to movies (e.g., IMDb, Apple) with metadata like title, director, and release year.

Example for a Media Tile component:

```jsx
import React from 'react';

const MediaTile = ({ media }) => (
  <div className="media-tile">
    <img src={media.image} alt={media.title} />
    <h3>{media.title}</h3>
    <p>{media.description}</p>
  </div>
);

export default MediaTile;
```

Example for a Song component:

```jsx
import React from 'react';

const Song = ({ song }) => (
  <div className="song">
    <h3>{song.title}</h3>
    <p>By {song.artist}</p>
    <a href={song.link} target="_blank" rel="noopener noreferrer">Listen on Apple Music</a>
  </div>
);

export default Song;
```

These components can be further extended to support dynamic rendering based on frontmatter metadata.

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