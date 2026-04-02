import path from "node:path";

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "fumadocs-mdx/vite";
import { defineConfig } from "vite";

import * as MdxConfig from "./source.config";

export default defineConfig({
  plugins: [mdx(MdxConfig), tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "fumadocs-mdx:collections": path.resolve(__dirname, "./.source"),
    },
  },
});
