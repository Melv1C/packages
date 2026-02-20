# @melv1c Packages Monorepo

Turborepo workspace for all `@melv1c` packages and apps.

## Workspace Structure

- `packages/ui-core` -> `@melv1c/ui-core`
- `packages/rich-text-editor` -> `@melv1c/rich-text-editor`
- `packages/code-editor` -> `@melv1c/code-editor`
- `apps/docs` -> Next.js documentation frontend
- `apps/playground` -> Vite playground for local integration testing

## Commands

```bash
bun install
bun run dev
bun run build
bun run lint
```

## Notes

- `bun run dev` uses Turbo and starts available `dev` scripts across workspaces.
- `@melv1c/rich-text-editor` and `@melv1c/code-editor` are currently thin workspace wrappers around optional exports from `@melv1c/ui-core`.
