import { RichTextEditorBuiltIn } from '@melv1c/rich-text-editor';
import { Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorSimple() {
  const [value, setValue] = useState('<h2>Simple</h2><p>Heading + formatting + history.</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Simple preset</Label>
      <RichTextEditorBuiltIn
        value={value}
        onValueChange={setValue}
        preset="simple"
        minHeight={140}
      />
    </Field>
  );
}
