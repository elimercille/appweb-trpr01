import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/appweb-trpr01/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap-icons/font/bootstrap-icons.css";`,
      },
    },
  },
});
