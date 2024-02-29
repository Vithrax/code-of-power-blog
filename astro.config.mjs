import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), markdoc(), keystatic()],
  output: "hybrid",
  adapter: vercel({
    functionPerRoute: false,
    isr: true,
  }),
  prefetch: {
    prefetchAll: true,
  },
  site: "https://code-of-power-blog.vercel.app",
});
