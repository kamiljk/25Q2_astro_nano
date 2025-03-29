import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kamil JK",
  EMAIL: "kamil.j.krawczyk@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
  URL: "https://kamiljk.com", // Example additional property
  DESCRIPTION: "Help I'm Stuck", // Example additional property
};

// Moved ALL_CONSTS to the end of the file to ensure all variables are declared before being used.

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const LIMINOLOGY: Metadata = {
  TITLE: "Liminology",
  DESCRIPTION: "Exploring thresholds and transitions.",
};

export const LIBRARY: Metadata = {
  TITLE: "Library",
  DESCRIPTION: "Library & Antilibrary.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/kamiljk",
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kamiljk",
  }
];
