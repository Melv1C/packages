import { Toggle, cn } from '@melv1c/ui-core';
import { useEditorState } from '@tiptap/react';
import { Bold, Code, Italic, Strikethrough } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useRichTextEditor } from '../context';

export type FormattingButtonProps = Omit<
  ComponentProps<typeof Toggle>,
  'pressed' | 'defaultPressed' | 'onPressedChange'
>;

export function BoldButton({
  children,
  className,
  variant = 'outline',
  ...props
}: FormattingButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('bold') ?? false,
  });

  return (
    <Toggle
      aria-label="Bold"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleBold().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleBold().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Bold />}
    </Toggle>
  );
}

export function ItalicButton({
  children,
  className,
  variant = 'outline',
  ...props
}: FormattingButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('italic') ?? false,
  });

  return (
    <Toggle
      aria-label="Italic"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleItalic().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Italic />}
    </Toggle>
  );
}

export function StrikethroughButton({
  children,
  className,
  variant = 'outline',
  ...props
}: FormattingButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('strike') ?? false,
  });

  return (
    <Toggle
      aria-label="Strikethrough"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleStrike().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleStrike().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Strikethrough />}
    </Toggle>
  );
}

export function CodeButton({
  children,
  className,
  variant = 'outline',
  ...props
}: FormattingButtonProps) {
  const { editor } = useRichTextEditor();
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('code') ?? false,
  });

  return (
    <Toggle
      aria-label="Inline code"
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleCode().run() : true}
      onPressedChange={() => editor?.chain().focus().toggleCode().run()}
      variant={variant}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Code />}
    </Toggle>
  );
}
