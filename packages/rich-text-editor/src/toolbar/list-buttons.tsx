import { useEditorState } from '@tiptap/react';
import { List, ListOrdered } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Toggle, cn } from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

export type ListButtonProps = Omit<
  ComponentProps<typeof Toggle>,
  'pressed' | 'defaultPressed' | 'onPressedChange'
>;

export function BulletListButton({
  children,
  className,
  variant = 'outline',
  ...props
}: ListButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('bulletList') ?? false,
  });

  return (
    <Toggle
      aria-label="Bullet list"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleBulletList().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleBulletList().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <List />}
    </Toggle>
  );
}

export function OrderedListButton({
  children,
  className,
  variant = 'outline',
  ...props
}: ListButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('orderedList') ?? false,
  });

  return (
    <Toggle
      aria-label="Ordered list"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleOrderedList().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleOrderedList().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <ListOrdered />}
    </Toggle>
  );
}
