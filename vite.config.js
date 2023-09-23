import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import Icons from "unplugin-icons/vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
		})
	],
	css: {
		postcss: {
			plugins: [autoprefixer({})]
		}
	}
});
