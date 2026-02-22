import { RichTextEditorBuiltIn } from '@melv1c/rich-text-editor';
import { Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorOneline() {
  const [value, setValue] = useState('<p>One line only</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Oneline preset</Label>
      <RichTextEditorBuiltIn
        value={value}
        onValueChange={setValue}
        preset="oneline"
        className="w-full"
      />
    </Field>
  );
}
