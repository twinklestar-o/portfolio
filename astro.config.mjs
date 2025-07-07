import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE ?? '/twinklestar-o.github.io';

// https://astro.build/config
export default defineConfig({
    site: 'https://twinklestar-o.github.io',
    base: base,
});
