import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: true },
  plugins: [
    react(),
    tsconfigPaths(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false, // Keep the original files after compression
      threshold: 10240, // Compress files larger than 10kB
      minRatio: 0.8, // Only compress files that achieve a compression ratio of at least 0.8
    }),
  ],
});
