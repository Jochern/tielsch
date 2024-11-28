//this file isnt used. We should have the vite test config in here not in vite config

import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'json', 'html'], // Generate text summary, JSON, and HTML reports
            reportsDirectory: './coverage',   // Save reports in the `coverage` directory
        },
    },
});