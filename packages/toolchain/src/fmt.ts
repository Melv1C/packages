import type { FormatConfig as FmtConfig } from "oxfmt";

export const fmt = {
  sortPackageJson: { sortScripts: true },
  sortImports: {},
  sortTailwindcss: {},
} satisfies FmtConfig;
