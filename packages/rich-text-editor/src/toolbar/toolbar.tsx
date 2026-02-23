import type { HTMLAttributes } from 'react';

import { cn } from '@melv1c/ui-core';

export type RichTextEditorToolbarProps = HTMLAttributes<HTMLDivElement>;

export function RichTextEditorToolbar({ className, ...props }: RichTextEditorToolbarProps) {
  return (
    <div
      data-slot="rich-text-editor-toolbar"
      className={cn('border-border flex flex-wrap items-center gap-2 border-b p-2', className)}
      {...props}
    />
  );
}
