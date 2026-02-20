/// <reference types="node" />

import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/locales/index.ts'],
  clean: false,
  onSuccess: async () => {
    // Copy base CSS file
    mkdirSync(join(process.cwd(), 'dist'), { recursive: true });
    copyFileSync(
      join(process.cwd(), 'src/styles/base.css'),
      join(process.cwd(), 'dist/base.css'),
    );

    // Copy all theme CSS files
    const themesDir = join(process.cwd(), 'src/styles/themes');
    const themeFiles = readdirSync(themesDir).filter((file) =>
      file.endsWith('.css'),
    );

    mkdirSync(join(process.cwd(), 'dist/themes'), { recursive: true });
    for (const file of themeFiles) {
      copyFileSync(
        join(themesDir, file),
        join(process.cwd(), 'dist/themes', file),
      );
    }

    console.log(
      `✅ CSS files copied to dist folder (${themeFiles.length} themes)`,
    );
  },
});
