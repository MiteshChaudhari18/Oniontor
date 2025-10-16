import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/", 
  resolve: {
    alias: {
      // Corrected: '@' points directly to the 'src' sibling folder
      "@": path.resolve(__dirname, "src"), 
      // Corrected: Must look up one directory (..) to find the 'shared' folder
      "@shared": path.resolve(__dirname, "..", "shared"),
      // Corrected: Must look up one directory (..) to find the 'attached_assets' folder
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
  },
  root: __dirname, 
  build: {
    // Corrected: Output must go up one directory (..) to place 'dist/public'
    outDir: path.resolve(__dirname, "..", "dist/public"), 
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});