import { pack } from "@melv1c/toolchain";
import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    ...pack,
    entry: "src/bin.ts",
  },
});
