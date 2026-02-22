import { useEditorState } from '@tiptap/react';
import { Bold, Code, Italic, Strikethrough } from 'lucide-react';
import type { ComponentProps } from 'react';

import { ToggleGroup, ToggleGroupItem, cn } from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

type RichTextEditorToggleButtonProps = Omit<ComponentProps<typeof ToggleGroupItem>, 'value'>;
type RichTextEditorFormattingItem = 'bold' | 'italic' | 'strike' | 'code';
type RichTextEditorFormattingValue = RichTextEditorFormattingItem[];

const ALL_FORMATTING_ITEMS: RichTextEditorFormattingItem[] = ['bold', 'italic', 'strike', 'code'];

function BoldButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="bold"
      aria-label="Bold"
      disabled={editor ? !editor.can().chain().focus().toggleBold().run() : true}
      onClick={() => editor?.chain().focus().toggleBold().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Bold />}
    </ToggleGroupItem>
  );
}

function ItalicButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="italic"
      aria-label="Italic"
      disabled={editor ? !editor.can().chain().focus().toggleItalic().run() : true}
      onClick={() => editor?.chain().focus().toggleItalic().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Italic />}
    </ToggleGroupItem>
  );
}

function StrikethroughButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="strike"
      aria-label="Strikethrough"
      disabled={editor ? !editor.can().chain().focus().toggleStrike().run() : true}
      onClick={() => editor?.chain().focus().toggleStrike().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Strikethrough />}
    </ToggleGroupItem>
  );
}

function CodeButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="code"
      aria-label="Inline code"
      disabled={editor ? !editor.can().chain().focus().toggleCode().run() : true}
      onClick={() => editor?.chain().focus().toggleCode().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Code />}
    </ToggleGroupItem>
  );
}

type RichTextEditorToggleGroupProps = Omit<
  ComponentProps<typeof ToggleGroup>,
  'type' | 'value' | 'onValueChange'
>;

export type RichTextEditorFormattingGroupProps = RichTextEditorToggleGroupProps & {
  boldProps?: ComponentProps<typeof BoldButton>;
  italicProps?: ComponentProps<typeof ItalicButton>;
  strikethroughProps?: ComponentProps<typeof StrikethroughButton>;
  codeProps?: ComponentProps<typeof CodeButton>;
  items?: RichTextEditorFormattingItem[];
  defaultValue?: RichTextEditorFormattingValue;
};

export function RichTextEditorFormattingGroup({
  boldProps,
  italicProps,
  strikethroughProps,
  codeProps,
  items = ALL_FORMATTING_ITEMS,
  variant = 'outline',
  size = 'sm',
  ...props
}: RichTextEditorFormattingGroupProps) {
  const { editor } = useRichTextEditor();
  const visibleItems = new Set(items);

  const activeValue = useEditorState({
    editor,
    selector: ({ editor: currentEditor }) => {
      if (!currentEditor) return [] as RichTextEditorFormattingValue;

      return ALL_FORMATTING_ITEMS.filter(
        format => visibleItems.has(format) && currentEditor.isActive(format),
      ) as RichTextEditorFormattingValue;
    },
  });

  return (
    <ToggleGroup
      type="multiple"
      variant={variant}
      size={size}
      aria-label="Inline formatting"
      value={activeValue ?? []}
      {...props}
    >
      {visibleItems.has('bold') && <BoldButton {...boldProps} />}
      {visibleItems.has('italic') && <ItalicButton {...italicProps} />}
      {visibleItems.has('strike') && <StrikethroughButton {...strikethroughProps} />}
      {visibleItems.has('code') && <CodeButton {...codeProps} />}
    </ToggleGroup>
  );
}
