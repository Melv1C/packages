import { fmt, lint } from "@melv1c/toolchain";
import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    ...lint,
    ignorePatterns: ["**/routeTree.gen.ts", "**/base/*.tsx"],
  },
  fmt: {
    ...fmt,
    ignorePatterns: ["**/routeTree.gen.ts", "**/base/*.tsx"],
  },
});
