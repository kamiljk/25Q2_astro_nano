# Media Frontmatter Guide

This document outlines the recommended YAML frontmatter structure for media-specific content, such as actors, inspirations, or references. It also provides examples of YAML usage for various media formats.

## Example Frontmatter

```yaml
title: "Media Title"
slug: "media-title" # New field
description: "Brief description of the media."
type:
  - "book"
  - "movie"
  - "music"
  - "artwork"
  - "tv_show"
  - "live_event"
  - "photo"
  - "social_media"
creator: "Author, Artist, or Creator Name"
pubDate: 2025-03-01
section: "library"
scale: "nano"
tags:
  - "media"
  - "example"
related:
  - "https://example.com/related-note"
license: "CC-BY"
```

## Field Descriptions

- **`title`**: The title of the media.
- **`slug`**: A URL-friendly identifier derived from the title (e.g., lowercase, hyphen-separated).
- **`description`**: A brief summary of the media.
- **`type`**: The type of media (e.g., book, movie, music, artwork, tv show, live event, poem, photo, social media). This differs from `section`, which defines the site zone (e.g., `library`, `liminology`).
- **`creator`**: The name of the creator, author, or artist.
- **`pubDate`**: The publication or release date in `YYYY-MM-DD` format (optional).
- **`section`**: Defines which part of the site this content belongs to. Use `"library"` for most media entries.
- **`scale`**: Represents the analytical resolution or scope of the media object (`nano`, `micro`, `meso`, etc.).
- **`tags`**: Keywords for categorization.
- **`related`**: Links to related notes or media.
- **`license`**: The license under which the media is released.

## YAML Examples for Media Formats

### Movie

```yaml
title: "Inception"
slug: "inception" # New field
description: "A mind-bending thriller about dreams within dreams."
type: "movie"
creator: "Christopher Nolan"
pubDate: 2010-07-16
section: "library"
scale: "nano"
tags:
  - "sci-fi"
  - "thriller"
  - "blockbuster"
related:
  - "https://example.com/dream-theory"
license: "CC-BY-SA"
```

### Music

```yaml
title: "Bohemian Rhapsody"
slug: "bohemian-rhapsody" # New field
description: "A classic rock opera by Queen."
type: "music"
creator: "Queen"
pubDate: 1975-10-31
section: "library"
scale: "nano"
tags:
  - "rock"
  - "classic"
  - "opera"
related:
  - "https://example.com/freddie-mercury-biography"
license: "proprietary"
```

### TV Show

```yaml
title: "Breaking Bad"
slug: "breaking-bad" # New field
description: "A high school chemistry teacher turns to cooking methamphetamine."
type: "tv_show"
creator: "Vince Gilligan"
pubDate: 2008-01-20
section: "library"
scale: "nano"
tags:
  - "crime"
  - "drama"
  - "thriller"
related:
  - "https://example.com/walter-white-analysis"
license: "CC-BY"
```

### Live Event

```yaml
title: "Coldplay Live in Paris"
slug: "coldplay-live-in-paris" # New field
description: "A live concert by Coldplay in Paris."
type: "live_event"
creator: "Coldplay"
pubDate: 2023-06-15
section: "library"
scale: "nano"
tags:
  - "concert"
  - "live"
  - "music"
related:
  - "https://example.com/coldplay-discography"
license: "CC-BY-NC"
```

### Poem

```yaml
title: "The Road Not Taken"
slug: "the-road-not-taken" # New field
description: "A poem about choices and their consequences."
type: "poem"
creator: "Robert Frost"
pubDate: 1916-08-01
section: "library"
scale: "nano"
tags:
  - "poetry"
  - "classic"
  - "choices"
related:
  - "https://example.com/frost-poetry-analysis"
license: "public domain"
```

### Book

```yaml
title: "1984"
slug: "1984" # New field
description: "A dystopian novel about surveillance and totalitarianism."
type: "book"
creator: "George Orwell"
pubDate: 1949-06-08
section: "library"
scale: "nano"
tags:
  - "dystopia"
  - "classic"
  - "politics"
related:
  - "https://example.com/themes-in-1984"
license: "public domain"
```

### Photo

```yaml
title: "Earthrise"
slug: "earthrise" # New field
description: "A photograph of Earth taken from lunar orbit."
type: "photo"
creator: "William Anders"
pubDate: 1968-12-24
section: "library"
scale: "nano"
tags:
  - "space"
  - "photography"
  - "iconic"
related:
  - "https://example.com/apollo-8-mission"
license: "public domain"
```

### Social Media

```yaml
title: "Viral Tweet"
slug: "viral-tweet" # New field
description: "A tweet that gained significant attention."
type: "social_media"
creator: "Example User"
pubDate: 2023-09-15
section: "library"
scale: "nano"
tags:
  - "social media"
  - "viral"
  - "example"
related:
  - "https://example.com/social-media-trends-2023"
license: "CC-BY"
```

## Key Principles

### Portability

YAML frontmatter ensures each media note is self-contained, enabling easy sharing and reuse across systems.

### Consistency

Follow the standardized schema for all media content.

## Related Resources

### Core Guides

- [Frontmatter Guide](README^Frontmatter.md): Structuring YAML frontmatter.
- [Workflow Guide](README^Workflow.md): Best practices for workflows.
- [User Guide](README^User_Guide.md): Instructions for end users.
- [Testing Guide](README^Testing_Guide.md): Strategies and tools for testing.
- [Accessibility Guide](README^Accessibility_Guide.md): Ensuring inclusivity and accessibility.

### Technical Documentation

- [Developer Guide](README^Developer_Guide.md): Technical documentation for developers.
- [Components Guide](README^Components.md): Overview of reusable components.

### Conceptual References

- [Theoretical Framework](README^Theoretical_Framework.md): Underlying principles and concepts.
