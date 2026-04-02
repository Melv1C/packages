/// <reference types="node" />

import { pack } from "@melv1c/toolchain";
import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    ...pack,
    entry: ["src/index.ts", "src/locales/index.ts"],
    copy: [
      {
        from: "src/styles/base.css",
        to: "dist/",
      },
      {
        from: "src/styles/themes/*.css",
        to: "dist/themes/",
      },
    ],
    exports: {
      customExports: {
        "./base.css": "./dist/base.css",
        "./themes/*.css": "./dist/themes/*.css",
      },
    },
  },
});
