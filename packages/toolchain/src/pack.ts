import type { UserConfig as PackConfig } from "tsdown";

/**
 * **Libraries**
 * - `dts: true` forces declaration emit regardless of `package.json` auto-detection ([dts](https://tsdown.dev/options/dts)).
 * - `format: ["esm", "cjs"]` — ESM first ([output format](https://tsdown.dev/options/output-format)), plus CommonJS for older tooling. Consumers should prefer `import`; `require` stays available where needed.
 *
 * Spread and override, e.g. `{ ...pack, sourcemap: true }` or `{ ...pack, format: "esm" }` for ESM-only.
 */
export const pack = {
  dts: true,
  format: ["esm", "cjs"],
  exports: true,
} satisfies PackConfig;
