import type { Editor } from '@tiptap/react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useMemo, type HTMLAttributes } from 'react';

import { cn } from '@melv1c/ui-core';

import { RichTextEditorContext, type RichTextEditorContextValue } from './context';

export type RichTextEditorProps = HTMLAttributes<HTMLDivElement> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, editor: Editor) => void;
  editable?: boolean;
  extensions?: Parameters<typeof useEditor>[0]['extensions'];
  starterKit?: Parameters<typeof StarterKit.configure>[0];
};

export function RichTextEditor({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
  editable = true,
  extensions,
  starterKit,
  ...props
}: RichTextEditorProps) {
  const mergedExtensions = useMemo(
    () => [StarterKit.configure(starterKit ?? {}), ...(extensions ?? [])],
    [extensions, starterKit],
  );

  const editor = useEditor(
    {
      extensions: mergedExtensions,
      editable,
      content: value ?? defaultValue ?? '',
      onUpdate({ editor: currentEditor }) {
        onValueChange?.(currentEditor.getHTML(), currentEditor);
      },
    },
    [mergedExtensions, editable],
  );

  // Sync external value changes to the editor content
  useEffect(() => {
    if (!editor || value === undefined) return;

    const currentValue = editor.getHTML();
    if (currentValue === value) return;

    editor.commands.setContent(value, { emitUpdate: false });
  }, [editor, value]);

  const contextValue = useMemo<RichTextEditorContextValue>(() => ({ editor }), [editor]);

  return (
    <RichTextEditorContext.Provider value={contextValue}>
      <div
        data-slot="rich-text-editor"
        className={cn('bg-background border-border rounded-lg border', className)}
        {...props}
      >
        {children}
      </div>
    </RichTextEditorContext.Provider>
  );
}
