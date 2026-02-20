import { lazy, type ComponentType } from 'react';

type ExampleEntry = {
  name: string;
  component: React.LazyExoticComponent<ComponentType>;
  code: string;
};

const exampleModules = import.meta.glob<string>('../examples/**/*.tsx', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const exampleComponents = import.meta.glob<{ default: ComponentType }>(
  '../examples/**/*.tsx',
);

function buildRegistry(): Record<string, ExampleEntry> {
  const registry: Record<string, ExampleEntry> = {};

  for (const [path, code] of Object.entries(exampleModules)) {
    const fileName = path.split('/').pop()?.replace('.tsx', '');
    if (!fileName) continue;

    const componentLoader = exampleComponents[path];
    if (!componentLoader) continue;

    registry[fileName] = {
      name: fileName,
      component: lazy(componentLoader),
      code,
    };
  }

  return registry;
}

export const examplesRegistry = buildRegistry();

export function getDemoComponent(name: string) {
  return examplesRegistry[name]?.component ?? null;
}

export function getDemoComponentCode(name: string) {
  return (
    examplesRegistry[name]?.code ?? `// Source code for "${name}" not found.`
  );
}
