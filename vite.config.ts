import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Relative assets allow the production bundle to be hosted at any path.
  base: "./",
  build: {
    // Images are embedded so the standalone HTML has no local asset dependencies.
    assetsInlineLimit: Number.POSITIVE_INFINITY,
    // The standalone build intentionally keeps the application in one script.
    chunkSizeWarningLimit: 700,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
