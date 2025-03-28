# Media Frontmatter Guide

This document outlines the recommended YAML frontmatter structure for media-specific content, such as actors, inspirations, or references. It also provides examples of YAML usage for various media formats.

## Example Frontmatter

```yaml
title: "Media Title"
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
tags:
  - "media"
  - "example"
related:
  - "https://example.com/related-note"
license: "CC-BY" # New field
```

## Field Descriptions

- **`title`**: The title of the media.
- **`description`**: A brief summary of the media.
- **`type`**: The type of media (e.g., book, movie, music, artwork, tv show, live event, poem, photo, social media).
- **`creator`**: The name of the creator, author, or artist.
- **`pubDate`**: The publication or release date in `YYYY-MM-DD` format (optional).
- **`tags`**: Keywords for categorization.
- **`related`**: Links to related notes or media.
- **`license`**: The license under which the media is released.

## YAML Examples for Media Formats

### Movie
```yaml
title: "Inception"
description: "A mind-bending thriller about dreams within dreams."
type: "movie"
creator: "Christopher Nolan"
pubDate: 2010-07-16
tags:
  - "sci-fi"
  - "thriller"
  - "blockbuster"
related:
  - "https://example.com/dream-theory"
license: "CC-BY-SA" # New field
```

### Music
```yaml
title: "Bohemian Rhapsody"
description: "A classic rock opera by Queen."
type: "music"
creator: "Queen"
pubDate: 1975-10-31
tags:
  - "rock"
  - "classic"
  - "opera"
related:
  - "https://example.com/freddie-mercury-biography"
license: "proprietary" # New field
```

### TV Show
```yaml
title: "Breaking Bad"
description: "A high school chemistry teacher turns to cooking methamphetamine."
type: "tv_show"
creator: "Vince Gilligan"
pubDate: 2008-01-20
tags:
  - "crime"
  - "drama"
  - "thriller"
related:
  - "https://example.com/walter-white-analysis"
license: "CC-BY" # New field
```

### Live Event
```yaml
title: "Coldplay Live in Paris"
description: "A live concert by Coldplay in Paris."
type: "live_event"
creator: "Coldplay"
pubDate: 2023-06-15
tags:
  - "concert"
  - "live"
  - "music"
related:
  - "https://example.com/coldplay-discography"
license: "CC-BY-NC" # New field
```

### Poem
```yaml
title: "The Road Not Taken"
description: "A poem about choices and their consequences."
type: "poem"
creator: "Robert Frost"
pubDate: 1916-08-01
tags:
  - "poetry"
  - "classic"
  - "choices"
related:
  - "https://example.com/frost-poetry-analysis"
license: "public domain" # New field
```

### Book
```yaml
title: "1984"
description: "A dystopian novel about surveillance and totalitarianism."
type: "book"
creator: "George Orwell"
pubDate: 1949-06-08
tags:
  - "dystopia"
  - "classic"
  - "politics"
related:
  - "https://example.com/themes-in-1984"
license: "public domain" # New field
```

### Photo
```yaml
title: "Earthrise"
description: "A photograph of Earth taken from lunar orbit."
type: "photo"
creator: "William Anders"
pubDate: 1968-12-24
tags:
  - "space"
  - "photography"
  - "iconic"
related:
  - "https://example.com/apollo-8-mission"
license: "public domain" # New field
```

### Social Media
```yaml
title: "Viral Tweet"
description: "A tweet that gained significant attention."
type: "social_media"
creator: "Example User"
pubDate: 2023-09-15
tags:
  - "social media"
  - "viral"
  - "example"
related:
  - "https://example.com/social-media-trends-2023"
license: "CC-BY" # New field
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
- [Integration Guide](README^Integration.md): Steps for integrating components.
- [Components Guide](README^Components.md): Overview of reusable components.

### Conceptual References
- [Theoretical Framework](README^Theoretical_Framework.md): Underlying principles and concepts.
