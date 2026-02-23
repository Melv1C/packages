import {
  BoldButton,
  CodeButton,
  ItalicButton,
  RichTextEditor,
  RichTextEditorContent,
  RichTextEditorToolbar,
  useRichTextEditor,
} from '@melv1c/rich-text-editor';
import { Button, ButtonGroup, Field, Label } from '@melv1c/ui-core';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

function InsertSignatureButton() {
  const { editor } = useRichTextEditor();

  return (
    <Button
      variant="outline"
      size="icon-sm"
      disabled={!editor}
      onClick={() => editor?.chain().focus().insertContent(' — Team Melv1c').run()}
      aria-label="Insert signature"
    >
      <Sparkles />
    </Button>
  );
}

export default function RichTextEditorCustomAction() {
  const [value, setValue] = useState('<p>Use the sparkle button to append a signature.</p>');

  return (
    <Field className="w-full max-w-2xl gap-2">
      <Label>Custom toolbar action</Label>

      <RichTextEditor value={value} onValueChange={setValue}>
        <RichTextEditorToolbar>
          <ButtonGroup>
            <BoldButton />
            <ItalicButton />
            <CodeButton />
          </ButtonGroup>

          <InsertSignatureButton />
        </RichTextEditorToolbar>

        <RichTextEditorContent minHeight={140} />
      </RichTextEditor>
    </Field>
  );
}
