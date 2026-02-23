import {
  BoldButton,
  BulletListButton,
  CodeButton,
  ItalicButton,
  OrderedListButton,
  RedoButton,
  RichTextEditor,
  RichTextEditorContent,
  RichTextEditorHeadingSelect,
  RichTextEditorToolbar,
  UndoButton,
} from '@melv1c/rich-text-editor';
import { ButtonGroup, Field, Label } from '@melv1c/ui-core';
import { useState } from 'react';

export default function RichTextEditorComposable() {
  const [value, setValue] = useState('<h2>Composable</h2><p>Build your own toolbar layout.</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Composable primitives</Label>

      <RichTextEditor value={value} onValueChange={setValue}>
        <RichTextEditorToolbar>
          <RichTextEditorHeadingSelect />

          <ButtonGroup>
            <BoldButton />
            <ItalicButton />
            <CodeButton />
          </ButtonGroup>

          <ButtonGroup>
            <BulletListButton />
            <OrderedListButton />
          </ButtonGroup>

          <ButtonGroup>
            <UndoButton />
            <RedoButton />
          </ButtonGroup>
        </RichTextEditorToolbar>

        <RichTextEditorContent minHeight={160} />
      </RichTextEditor>
    </Field>
  );
}
