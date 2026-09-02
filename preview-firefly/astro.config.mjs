import { defineConfig } from 'astro/config';
import {site, base} from './site-settings.mjs';
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static'
});
