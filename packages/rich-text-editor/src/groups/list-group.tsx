import { useEditorState } from '@tiptap/react';
import { List, ListOrdered } from 'lucide-react';
import type { ComponentProps } from 'react';

import { ToggleGroup, ToggleGroupItem, cn } from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

type RichTextEditorToggleButtonProps = Omit<ComponentProps<typeof ToggleGroupItem>, 'value'>;
type RichTextEditorListValue = 'bullet-list' | 'ordered-list' | '';
type RichTextEditorListItem = Exclude<RichTextEditorListValue, ''>;

function BulletListButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="bullet-list"
      aria-label="Bullet list"
      disabled={editor ? !editor.can().chain().focus().toggleBulletList().run() : true}
      onClick={() => editor?.chain().focus().toggleBulletList().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <List />}
    </ToggleGroupItem>
  );
}

function OrderedListButton({ className, ...props }: RichTextEditorToggleButtonProps) {
  const { editor } = useRichTextEditor();
  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value="ordered-list"
      aria-label="Ordered list"
      disabled={editor ? !editor.can().chain().focus().toggleOrderedList().run() : true}
      onClick={() => editor?.chain().focus().toggleOrderedList().run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <ListOrdered />}
    </ToggleGroupItem>
  );
}

type RichTextEditorToggleGroupProps = Omit<
  ComponentProps<typeof ToggleGroup>,
  'type' | 'value' | 'onValueChange'
>;

export type RichTextEditorListGroupProps = RichTextEditorToggleGroupProps & {
  bulletListProps?: ComponentProps<typeof BulletListButton>;
  orderedListProps?: ComponentProps<typeof OrderedListButton>;
  items?: RichTextEditorListItem[];
  defaultValue?: RichTextEditorListValue;
};

export function RichTextEditorListGroup({
  bulletListProps,
  orderedListProps,
  items = ['bullet-list', 'ordered-list'],
  variant = 'outline',
  size = 'sm',
  ...props
}: RichTextEditorListGroupProps) {
  const { editor } = useRichTextEditor();
  const visibleItems = new Set(items);

  const activeValue = useEditorState({
    editor,
    selector: ({ editor: currentEditor }) => {
      if (!currentEditor) return '' as RichTextEditorListValue;
      if (currentEditor.isActive('bulletList')) return 'bullet-list';
      if (currentEditor.isActive('orderedList')) return 'ordered-list';
      return '';
    },
  });

  return (
    <ToggleGroup
      type="single"
      variant={variant}
      size={size}
      aria-label="List type"
      value={activeValue ?? ''}
      {...props}
    >
      {visibleItems.has('bullet-list') && <BulletListButton {...bulletListProps} />}
      {visibleItems.has('ordered-list') && <OrderedListButton {...orderedListProps} />}
    </ToggleGroup>
  );
}
