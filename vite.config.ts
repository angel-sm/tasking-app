import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@redux": path.resolve(
        __dirname,
        "./src/context/shared/infrastructure/redux"
      ),
      "@tasks": path.resolve(__dirname, "./src/context/Task"),
      "@components": path.resolve(__dirname, "./src/presentation/components"),
      "@assets": path.resolve(__dirname, "./src/presentation/assets"),
    },
  },
  plugins: [react()],
});
