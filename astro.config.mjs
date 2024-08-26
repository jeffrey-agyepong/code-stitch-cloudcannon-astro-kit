import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
    site:'',
    integrations:[
        react(),
        tailwind(),
        bookshop(),
        mdx(),
        alpine()
    ]
})