import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        globals: true, // This makes `expect` and other test functions globally available
        environment: 'jsdom', // Simulates a browser environment for DOM-based tests
        setupFiles: './src/tests/setup.ts', // Path to your setup file (next step)
        coverage: {
            reporter: ['text', 'json', 'html'], // Generate text summary, JSON, and HTML reports
            reportsDirectory: './coverage',   // Save reports in the `coverage` directory
        },
    },
});