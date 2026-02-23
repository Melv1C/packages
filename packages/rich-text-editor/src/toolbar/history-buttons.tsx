import { Redo2, Undo2 } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Button, cn } from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

export type HistoryButtonProps = ComponentProps<typeof Button>;

export function UndoButton({
  children,
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: HistoryButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <Button
      aria-label="Undo"
      variant={variant}
      size={size}
      disabled={editor ? !editor.can().chain().focus().undo().run() : true}
      onClick={() => editor?.chain().focus().undo().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Undo2 />}
    </Button>
  );
}

export function RedoButton({
  children,
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: HistoryButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <Button
      aria-label="Redo"
      variant={variant}
      size={size}
      disabled={editor ? !editor.can().chain().focus().redo().run() : true}
      onClick={() => editor?.chain().focus().redo().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Redo2 />}
    </Button>
  );
}
