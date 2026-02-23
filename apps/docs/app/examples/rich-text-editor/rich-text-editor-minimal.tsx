import { RichTextEditorBuiltIn } from '@melv1c/rich-text-editor';
import { Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorMinimal() {
  const [value, setValue] = useState('<p>Minimal preset with inline formatting.</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Minimal preset</Label>
      <RichTextEditorBuiltIn
        value={value}
        onValueChange={setValue}
        preset="minimal"
        minHeight={120}
      />
    </Field>
  );
}
