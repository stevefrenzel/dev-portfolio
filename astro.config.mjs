import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  compressHTML: true,
  site: "https://www.stevefrenzel.dev",
  integrations: [mdx()],
});
