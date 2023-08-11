import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  compressHTML: true,
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    ,
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: 'storyblok/BlogPost',
        blogPostList: 'storyblok/BlogPostList',
        page: 'storyblok/Page',
      },
    }),
  ],
  site: 'https://www.stevefrenzel.dev',
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
