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
      // CORRECTED: '@' now points directly to the 'src' sibling folder
      "@": path.resolve(__dirname, "src"), 
      // CORRECTED: Must look up one directory (..) to find external folders
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
  },
  // CORRECTED: The project root is simply the directory where this file sits
  root: __dirname, 
  build: {
    // CORRECTED: Output must go up one directory (..) to place 'dist/public'
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
