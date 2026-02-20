import { getDemoComponent, getDemoComponentCode } from '@/lib/registry';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@melv1c/ui-core';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Suspense } from 'react';

type ComponentPreviewProps = {
  name: string;
};

export const ComponentPreview = ({ name }: ComponentPreviewProps) => {
  const Component = getDemoComponent(name);
  const code = getDemoComponentCode(name);

  if (!Component) {
    return (
      <div className="flex items-center justify-center rounded-lg border p-6 text-sm text-fd-muted-foreground">
        Example &quot;{name}&quot; not found.
      </div>
    );
  }

  return (
    <Tabs defaultValue="preview" className="w-full not-prose">
      <TabsList className="justify-start">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="flex w-full items-center justify-center rounded-lg border p-6">
          <Suspense
            fallback={<div className="text-sm text-fd-muted-foreground">Loading preview...</div>}
          >
            <Component />
          </Suspense>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <DynamicCodeBlock code={code} lang="tsx" />
      </TabsContent>
    </Tabs>
  );
};
