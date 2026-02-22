import { EditorContent } from '@tiptap/react';
import type { ComponentProps, CSSProperties } from 'react';

import { cn } from '@melv1c/ui-core';

import { useRichTextEditor } from './context';

export type RichTextEditorContentProps = Omit<ComponentProps<typeof EditorContent>, 'editor'> & {
  /**
   * Minimum height of the editor content area.
   * Accepts a number (treated as pixels) or any valid CSS size string.
   * @default 180
   */
  minHeight?: number | string;
  /**
   * Maximum height of the editor content area. When set, the content area becomes
   * scrollable once the content exceeds this height.
   * Accepts a number (treated as pixels) or any valid CSS size string.
   */
  maxHeight?: number | string;
};

function toSize(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

export function RichTextEditorContent({
  className,
  minHeight = 180,
  maxHeight,
  style,
  ...props
}: RichTextEditorContentProps) {
  const { editor } = useRichTextEditor();

  const heightStyles: CSSProperties = {
    minHeight: toSize(minHeight),
    maxHeight: toSize(maxHeight),
    overflowY: maxHeight !== undefined ? 'auto' : undefined,
  };

  return (
    <EditorContent
      data-slot="rich-text-editor-content"
      editor={editor}
      className={cn(
        'text-foreground [&_.ProseMirror]:px-2 [&_.ProseMirror]:py-1 [&_.ProseMirror]:outline-none [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-muted-foreground [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0 [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]',
        className,
      )}
      style={{ ...heightStyles, ...style }}
      {...props}
    />
  );
}
