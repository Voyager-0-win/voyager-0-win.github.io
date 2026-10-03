import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://voyager-0-win.github.io/",
  base: "voyager-0-win.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
});
