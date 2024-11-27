import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,        // Aktiviert globale Funktionen wie expect
		environment: 'jsdom', // Stellt DOM-Funktionen zur Verfügung
		setupFiles: './test/setup.ts', // Initialisierung
	  },
	resolve: process.env.VITEST
	? {
			conditions: ['browser']
		}
	: undefined
});
