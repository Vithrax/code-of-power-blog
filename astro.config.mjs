import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel({
    functionPerRoute: false,
  }),
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://code-of-power-blog.vercel.app',
});
