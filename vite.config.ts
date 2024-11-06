import { defineConfig } from "vite";

export default defineConfig({
  // base: "/Groundhog/",
  base: process.env.SERVER_BASE_URL,
  // build: {
  //   outDir: "dist",
  // },
});
