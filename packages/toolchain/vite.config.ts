import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    dts: true,
    format: ["esm", "cjs"],
    exports: {
      customExports: {
        "./vscode/extensions.json": "./vscode/extensions.json",
        "./vscode/settings.json": "./vscode/settings.json",
        "./tsconfigs/base.json": "./tsconfigs/base.json",
        "./tsconfigs/node.json": "./tsconfigs/node.json",
        "./tsconfigs/react.json": "./tsconfigs/react.json",
      },
    },
  },
});
