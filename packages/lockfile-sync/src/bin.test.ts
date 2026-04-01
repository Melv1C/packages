import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it } from "vite-plus/test";

const tempDirs: string[] = [];
const cliPath = join(dirname(fileURLToPath(import.meta.url)), "bin.ts");

const createFixture = () => {
  const rootDir = mkdtempSync(join(tmpdir(), "lockfile-sync-"));
  tempDirs.push(rootDir);
  mkdirSync(join(rootDir, "packages", "example"), { recursive: true });
  return rootDir;
};

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { force: true, recursive: true });
  }
});

describe("lockfile sync CLI", () => {
  it("updates matching workspace versions in bun.lock", () => {
    const rootDir = createFixture();

    writeFileSync(
      join(rootDir, "packages", "example", "package.json"),
      JSON.stringify({ name: "@melv1c/example", version: "2.0.0" }),
    );

    writeFileSync(
      join(rootDir, "bun.lock"),
      `{
  "packages": {
    "packages/example": {
      "name": "@melv1c/example",
      "version": "1.0.0"
    }
  }
}`,
    );

    const result = spawnSync("bun", [cliPath, rootDir], { encoding: "utf8" });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Synced bun.lock @melv1c/example: 1.0.0 -> 2.0.0");
    expect(readFileSync(join(rootDir, "bun.lock"), "utf8")).toContain(`"version": "2.0.0"`);
  });

  it("updates matching workspace versions in package-lock.json", () => {
    const rootDir = createFixture();

    writeFileSync(
      join(rootDir, "packages", "example", "package.json"),
      JSON.stringify({ name: "@melv1c/example", version: "2.0.0" }),
    );

    writeFileSync(
      join(rootDir, "package-lock.json"),
      `{
  "packages": {
    "packages/example": {
      "version": "0.0.0",
      "devDependencies": {
        "tsconfig": "*"
      }
    }
  }
}`,
    );

    const result = spawnSync("bun", [cliPath, rootDir], { encoding: "utf8" });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Synced package-lock.json @melv1c/example: 0.0.0 -> 2.0.0");
    expect(readFileSync(join(rootDir, "package-lock.json"), "utf8")).toContain(
      `"version": "2.0.0"`,
    );
  });

  it("reports when bun.lock is missing", () => {
    const rootDir = createFixture();

    writeFileSync(
      join(rootDir, "packages", "example", "package.json"),
      JSON.stringify({ name: "@melv1c/example", version: "2.0.0" }),
    );

    const result = spawnSync("bun", [cliPath, rootDir], { encoding: "utf8" });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Skipped bun.lock: file not found");
  });
});
