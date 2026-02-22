import { RichTextEditorBuiltIn } from '@melv1c/rich-text-editor';
import { Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorDemo() {
  const [value, setValue] = useState(
    '<h2>Welcome</h2><p>Use the toolbar to format this text with StarterKit features.</p>',
  );

  return (
    <div className="flex max-w-2xl w-full flex-col items-start gap-6">
      <Field className="gap-2">
        <Label>Composable editor</Label>
        <RichTextEditorBuiltIn value={value} onValueChange={setValue} />
      </Field>

      <Field className="gap-2">
        <Label>HTML output</Label>
        <pre className="bg-muted max-h-60 overflow-auto rounded-md border p-3 text-xs">{value}</pre>
      </Field>
    </div>
  );
}
