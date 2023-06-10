import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://stevefrenzel.github.io',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
