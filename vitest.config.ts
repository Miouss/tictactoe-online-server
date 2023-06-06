import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@database": path.resolve(__dirname, "src/database"),
      "@server": path.resolve(__dirname, "src/server"),
      "@handlers": path.resolve(__dirname, "src/handlers"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@types": path.resolve(__dirname, "src/types"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@classes": path.resolve(__dirname, "src/classes"),
      "@config": path.resolve(__dirname, "src/config"),
    },
  },
});
