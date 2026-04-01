import chalk from "chalk";
/* eslint-disable no-console */

type RejectDependencyRule = {
  name: string;
  reason: string;
};

type RejectDependency = (name: string, semver: unknown) => boolean;

const INVISIBLE_SORT_KEY_BY_GROUP: Record<string, string> = {
  // Zero-width chars used only for sorting output order.
  patch: "\u200B",
  minor: "\u200C",
  major: "\u200D",
  majorVersionZero: "\u2060",
};

const MELV1C_ORANGE = "#fba026";
const EXCLUSION_COLOR = "#999";
const EXCLUSIONS_LOGGED_ONCE_KEY = "___ncu_exclusions_logged_once__";

const shouldLogExclusionsOnce = () => {
  const globalState = globalThis as Record<string, unknown>;

  if (globalState[EXCLUSIONS_LOGGED_ONCE_KEY] === true) {
    return false;
  }

  globalState[EXCLUSIONS_LOGGED_ONCE_KEY] = true;
  return true;
};

const logDependencyExclusionsFrame = (exclusions: RejectDependencyRule[]) => {
  if (exclusions.length === 0) return;

  const headerTitle = "[ncu] Packages omitted from this upgrade";
  const headerNote = [
    "Each line names a dependency we skip on purpose, with a short reason.",
    "Try to remove or narrow these exclusions as soon as you reasonably can.",
  ];
  const itemLines = exclusions.map((e) => `  • ${e.name} — ${e.reason}`);

  const innerMax = Math.max(
    56,
    headerTitle.length,
    ...headerNote.map((l) => l.length),
    ...itemLines.map((l) => l.length),
  );

  const horizontal = "─".repeat(innerMax + 2);
  const edge = chalk.hex(EXCLUSION_COLOR);

  console.log("");
  console.log(edge(`┌${horizontal}┐`));
  console.log(
    `${edge("│ ")}${chalk.bold(headerTitle)}${" ".repeat(
      Math.max(0, innerMax - headerTitle.length),
    )}${edge(" │")}`,
  );
  console.log(edge(`├${horizontal}┤`));
  for (const line of headerNote) {
    console.log(
      `${edge("│ ")}${chalk.dim(line)}${" ".repeat(
        Math.max(0, innerMax - line.length),
      )}${edge(" │")}`,
    );
  }
  console.log(edge(`├${horizontal}┤`));
  for (const exclusion of exclusions) {
    const left = `  • ${exclusion.name} — ${exclusion.reason}`;
    const pad = Math.max(0, innerMax - left.length);
    console.log(
      `${edge("│ ")}${chalk.dim("  • ")}${chalk.bold(exclusion.name)}${chalk.dim(
        ` — ${exclusion.reason}`,
      )}${" ".repeat(pad)}${edge(" │")}`,
    );
  }
  console.log(edge(`└${horizontal}┘`));
  console.log("");
};

const formatMelv1cGroup = (defaultGroup: string) => {
  const invisibleSortKey = INVISIBLE_SORT_KEY_BY_GROUP[defaultGroup] ?? "";

  return chalk.hex(MELV1C_ORANGE)(
    `${chalk.bold(`Melv1c ${invisibleSortKey}${defaultGroup}`)}   Potentially breaking changes`,
  );
};

/**
 * Add reject rules with explicit reasons and log them before the NCU run starts.
 */
export const rejectDependencies = (exclusions: RejectDependencyRule[]): RejectDependency => {
  if (shouldLogExclusionsOnce()) {
    logDependencyExclusionsFrame(exclusions);
  }

  return (name) => exclusions.some((exclusion) => exclusion.name === name);
};

export const baseNCUconfig = {
  format: ["group"],
  groupFunction: (name: string, defaultGroup: string) => {
    if (name.startsWith("@melv1c/")) {
      return formatMelv1cGroup(defaultGroup);
    }

    return defaultGroup;
  },
};

export const monorepoNCUconfig = {
  ...baseNCUconfig,
  workspaces: true,
};
