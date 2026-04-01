import { Tabs, TabsContent, TabsList, TabsTrigger } from "@melv1c/ui-core";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Suspense } from "react";

import { getDemoComponent, getDemoComponentCode } from "@/lib/registry";

type ComponentPreviewProps = {
  name: string;
};

export const ComponentPreview = ({ name }: ComponentPreviewProps) => {
  const Component = getDemoComponent(name);
  const code = getDemoComponentCode(name);

  if (!Component) {
    return (
      <div className="text-fd-muted-foreground flex items-center justify-center rounded-lg border p-6 text-sm">
        Example &quot;{name}&quot; not found.
      </div>
    );
  }

  return (
    <Tabs defaultValue="preview" className="not-prose w-full">
      <TabsList className="justify-start">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="flex w-full items-center justify-center rounded-lg border p-6">
          <Suspense
            fallback={<div className="text-fd-muted-foreground text-sm">Loading preview...</div>}
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
