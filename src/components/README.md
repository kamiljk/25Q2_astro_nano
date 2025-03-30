# Components

Below is a detailed overview of each component in this folder:

- **Link.astro**  
  Renders an anchor tag with optional external target and underline settings.  
  - Accepts an `href` prop for the URL.  
  - The `external` prop automatically sets `target="_blank"` to open links in new tabs.  
  - The `underline` prop defaults to `true` but can be toggled off.  
  - Spreads any additional props (`...rest`) on the `<a>` element (e.g., `rel`, `aria-*`).  
  - Uses `cn` from `@lib/utils` to conditionally apply styling classes.

- **Header.astro**  
  Provides a site header with navigation links.  
  - Uses the `Container` component to wrap the header content.  
  - Displays the site name as a clickable link to the homepage.  
  - Includes a navigation bar with links to key sections (`blog`, `work`, `projects`) using the `Link` component.

- **Head.astro**  
  Manages global metadata and includes font preloads and theme logic.  
  - Preloads fonts for performance optimization.  
  - Dynamically sets metadata such as title, description, and Open Graph/Twitter tags.  
  - Implements theme toggling logic using `ViewTransitions` and JavaScript for smooth transitions.  
  - Handles theme persistence across page loads and user interactions.

- **FormattedDate.astro**  
  Formats a given date with a standard locale string.  
  - Accepts a `date` prop of type `Date`.  
  - Outputs a `<time>` element with the `datetime` attribute set to the ISO string of the date.  
  - Formats the date as "MMM DD, YYYY" (e.g., "Jan 1, 2024") for display.

- **Footer.astro**  
  Displays the bottom section of the site with theme toggle buttons.  
  - Uses the `Container` component to wrap the footer content.  
  - Includes a "Back to Top" button using the `BackToTop` component.  
  - Provides buttons for toggling between light, dark, and system themes with accessible labels and icons.

- **Container.astro**  
  Applies a consistent max-width and padding for wrapped content.  
  - Wraps child content in a `<div>` with a maximum width of `screen-sm` and horizontal padding.  
  - Ensures consistent layout and spacing across the site.

- **BackToTop.astro**  
  Adds a “back to top” button with a sliding arrow icon.  
  - Renders a button with a hover effect and an animated arrow icon.  
  - Smoothly scrolls the user back to the top of the page when clicked.

- **BackToPrev.astro**  
  Displays a “back” link for navigating to a previous page.  
  - Accepts an `href` prop for the target URL.  
  - Renders a styled `<a>` element with an arrow icon pointing left.  
  - Includes a slot for custom link text.

- **ArrowCard.astro**  
  Shows a summary card with a hover arrow icon, linking to detailed content.  
  - Accepts an `entry` prop of type `CollectionEntry` for `blog` or `projects`.  
  - Displays the `title` and `description` of the entry.  
  - Includes a right-pointing arrow icon that animates on hover.  
  - Links to the detailed page of the entry using its `collection` and `slug`.