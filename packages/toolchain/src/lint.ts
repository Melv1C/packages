import type { OxlintConfig as LintConfig } from "oxlint";

/**
 * Core built-in plugins Oxlint applies when `plugins` is omitted (`null`).
 * Confirm with `oxlint --print-config` if upgrading oxlint major versions.
 */
export const oxlintDefaultCorePlugins = ["eslint", "unicorn", "typescript", "oxc"] as const;

/**
 * `options.typeAware` and `options.typeCheck` require `oxlint-tsgolint` (Vite+ ships it for `vp lint` / `vp check`).
 * That path is the slowest; keep `tsconfig` `include` tight in large repos.
 *
 * To enable extra built-in plugins, set `plugins` to `[...oxlintDefaultCorePlugins, "import"]` (etc.).
 * Do not use `[...(lint.plugins ?? []), "x"]` when this object omits `plugins`, or defaults are dropped.
 */
export const lint = {
  ignorePatterns: ["dist/**", "tsconfigs/**", ".vscode/**"],
  options: { typeAware: true, typeCheck: true },
  rules: { "no-unused-vars": "error", "no-console": "allow", "no-floating-promises": "allow" },
} satisfies LintConfig;
