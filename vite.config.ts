import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Better minification
    minify: 'esbuild',
    // CSS code splitting for lazy-loaded routes
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Core React runtime - rarely changes, cached long
          'react-vendor': ['react', 'react-dom'],
          // Router + query - semi-stable
          'router': ['react-router-dom'],
          // UI framework chunks
          'radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-accordion',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
          ],
        },
      },
    },
    // Increase chunk size warning threshold (we want controlled chunks)
    chunkSizeWarningLimit: 600,
  },
}));
