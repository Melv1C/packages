#!/usr/bin/env node

/* eslint-disable no-console */

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const rootDir = resolve(process.argv[2] ?? process.cwd());
const packagesDir = join(rootDir, "packages");
const bunLockPath = join(rootDir, "bun.lock");
const packageLockPath = join(rootDir, "package-lock.json");

let bunLockText = existsSync(bunLockPath) ? readFileSync(bunLockPath, "utf8") : null;
let packageLockText = existsSync(packageLockPath) ? readFileSync(packageLockPath, "utf8") : null;

for (const entry of readdirSync(packagesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) {
    continue;
  }

  const packageJsonPath = join(packagesDir, entry.name, "package.json");

  if (!existsSync(packageJsonPath)) {
    continue;
  }

  const { name, version } = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
    name?: string;
    version?: string;
  };

  if (!name || !version) {
    continue;
  }

  if (bunLockText) {
    let matched = false;
    bunLockText = bunLockText.replace(
      new RegExp(
        `("name":\\s*"${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?"version":\\s*")([^"]+)(")`,
        "g",
      ),
      (match, start, currentVersion, end) => {
        matched = true;
        if (currentVersion === version) {
          return match;
        }
        console.log(`Synced bun.lock ${name}: ${currentVersion} -> ${version}`);
        return `${start}${version}${end}`;
      },
    );

    if (!matched) {
      console.warn(`No match found in bun.lock for ${name}`);
    }
  }

  if (packageLockText) {
    let matched = false;
    packageLockText = packageLockText.replace(
      new RegExp(
        `("${`packages/${entry.name}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*\\{[\\s\\S]*?"version":\\s*")([^"]+)(")`,
        "g",
      ),
      (match, start, currentVersion, end) => {
        matched = true;
        if (currentVersion === version) {
          return match;
        }
        console.log(`Synced package-lock.json ${name}: ${currentVersion} -> ${version}`);
        return `${start}${version}${end}`;
      },
    );

    if (!matched) {
      console.warn(`No match found in package-lock.json for packages/${entry.name}`);
    }
  }
}

if (bunLockText) {
  writeFileSync(bunLockPath, bunLockText);
  console.log("bun.lock sync complete");
} else {
  console.log("Skipped bun.lock: file not found");
}

if (packageLockText) {
  writeFileSync(packageLockPath, packageLockText);
  console.log("package-lock.json sync complete");
}
