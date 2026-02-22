import {
  RichTextEditor,
  RichTextEditorContent,
  RichTextEditorFormattingGroup,
  RichTextEditorHeadingGroup,
  RichTextEditorHistoryGroup,
  RichTextEditorListGroup,
  RichTextEditorToolbar,
} from '@melv1c/rich-text-editor';
import { Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorComposable() {
  const [value, setValue] = useState('<h2>Composable</h2><p>Build your own toolbar layout.</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Composable primitives</Label>

      <RichTextEditor value={value} onValueChange={setValue}>
        <RichTextEditorToolbar>
          <RichTextEditorHeadingGroup mode="select" />
          <RichTextEditorFormattingGroup items={['bold', 'italic', 'code']} />
          <RichTextEditorListGroup />
          <RichTextEditorHistoryGroup />
        </RichTextEditorToolbar>

        <RichTextEditorContent minHeight={160} />
      </RichTextEditor>
    </Field>
  );
}
