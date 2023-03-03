import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(), 
    compress({
			css: true,
			html: true,
			img: true,
			js: true,
			svg: true,
		}),
  ]
});