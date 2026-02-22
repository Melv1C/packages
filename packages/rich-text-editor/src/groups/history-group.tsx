import { Redo2, Undo2 } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Button, ButtonGroup, cn } from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

type RichTextEditorActionButtonProps = ComponentProps<typeof Button>;
type RichTextEditorHistoryItem = 'undo' | 'redo';

function UndoButton({ className, ...props }: RichTextEditorActionButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <Button
      data-slot="rich-text-editor-action-button"
      aria-label="Undo"
      variant="outline"
      size="icon-sm"
      disabled={editor ? !editor.can().chain().focus().undo().run() : true}
      onClick={() => editor?.chain().focus().undo().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Undo2 />}
    </Button>
  );
}

function RedoButton({ className, ...props }: RichTextEditorActionButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <Button
      data-slot="rich-text-editor-action-button"
      aria-label="Redo"
      variant="outline"
      size="icon-sm"
      disabled={editor ? !editor.can().chain().focus().redo().run() : true}
      onClick={() => editor?.chain().focus().redo().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Redo2 />}
    </Button>
  );
}

export type RichTextEditorHistoryGroupProps = ComponentProps<typeof ButtonGroup> & {
  undoProps?: ComponentProps<typeof UndoButton>;
  redoProps?: ComponentProps<typeof RedoButton>;
  items?: RichTextEditorHistoryItem[];
};

export function RichTextEditorHistoryGroup({
  undoProps,
  redoProps,
  items = ['undo', 'redo'],
  ...props
}: RichTextEditorHistoryGroupProps) {
  const visibleItems = new Set(items);

  return (
    <ButtonGroup {...props}>
      {visibleItems.has('undo') && <UndoButton {...undoProps} />}
      {visibleItems.has('redo') && <RedoButton {...redoProps} />}
    </ButtonGroup>
  );
}
