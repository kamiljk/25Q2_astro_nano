import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import content from "@astrojs/content"; // <-- add this

export default defineConfig({
	site: "https://astro-nano-demo.vercel.app",
	integrations: [mdx(), sitemap(), tailwind(), content()], // <-- add here
});
