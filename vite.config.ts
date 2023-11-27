import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite'
export default defineConfig({
	plugins: [sveltekit(), purgeCss(), imagetools()],
	server: {
		fs: {
			// Add the folder you want to allow
			allow: ['static/images'],
		},
	},
});