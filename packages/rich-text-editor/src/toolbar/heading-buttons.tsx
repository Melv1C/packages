import { useEditorState } from '@tiptap/react';
import { Heading1, Heading2, Heading3 } from 'lucide-react';
import type { ComponentProps } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Toggle,
  cn,
} from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

export type HeadingButtonProps = Omit<
  ComponentProps<typeof Toggle>,
  'pressed' | 'defaultPressed' | 'onPressedChange'
>;
export type RichTextEditorHeadingLevel = 1 | 2 | 3;

type HeadingValue = `heading-${RichTextEditorHeadingLevel}` | '';

const ALL_HEADING_LEVELS: RichTextEditorHeadingLevel[] = [1, 2, 3];

const HEADING_ICONS: Record<RichTextEditorHeadingLevel, typeof Heading1> = {
  1: Heading1,
  2: Heading2,
  3: Heading3,
};

const HEADING_LABELS: Record<RichTextEditorHeadingLevel, string> = {
  1: 'Heading 1',
  2: 'Heading 2',
  3: 'Heading 3',
};

function HeadingButton({
  level,
  children,
  className,
  variant = 'outline',
  size = 'sm',
  ...props
}: HeadingButtonProps & { level: RichTextEditorHeadingLevel }) {
  const { editor } = useRichTextEditor();
  const Icon = HEADING_ICONS[level];
  const isActive = useEditorState({
    editor,
    selector: ({ editor: e }) => e?.isActive('heading', { level }) ?? false,
  });

  return (
    <Toggle
      aria-label={`Heading ${level}`}
      pressed={!!isActive}
      disabled={editor ? !editor.can().chain().focus().toggleHeading({ level }).run() : true}
      onPressedChange={() => editor?.chain().focus().toggleHeading({ level }).run()}
      variant={variant}
      size={size}
      className={cn('shadow-none', className)}
      {...props}
    >
      {children ?? <Icon />}
    </Toggle>
  );
}

export function Heading1Button(props: HeadingButtonProps) {
  return <HeadingButton level={1} {...props} />;
}

export function Heading2Button(props: HeadingButtonProps) {
  return <HeadingButton level={2} {...props} />;
}

export function Heading3Button(props: HeadingButtonProps) {
  return <HeadingButton level={3} {...props} />;
}

// ----------------------------- Heading Select ------------------------------

export type RichTextEditorHeadingSelectProps = {
  levels?: RichTextEditorHeadingLevel[];
  includeParagraphOption?: boolean;
  paragraphLabel?: string;
  selectPlaceholder?: string;
};

export function RichTextEditorHeadingSelect({
  levels,
  includeParagraphOption = true,
  paragraphLabel = 'Paragraph',
  selectPlaceholder = 'Select heading',
}: RichTextEditorHeadingSelectProps) {
  const { editor } = useRichTextEditor();
  const resolvedLevels = levels ?? ALL_HEADING_LEVELS;
  const visibleLevels = new Set(resolvedLevels);

  const activeValue = useEditorState({
    editor,
    selector: ({ editor: e }): HeadingValue => {
      if (!e) return '';
      for (const level of ALL_HEADING_LEVELS) {
        if (e.isActive('heading', { level })) return `heading-${level}`;
      }
      return '';
    },
  });

  const paragraphItem = includeParagraphOption
    ? {
        value: 'paragraph',
        label: paragraphLabel,
        disabled: editor ? !editor.can().chain().focus().setParagraph().run() : true,
      }
    : null;

  const headingItems = ALL_HEADING_LEVELS.filter(level => visibleLevels.has(level)).map(level => ({
    value: `heading-${level}` as HeadingValue,
    label: HEADING_LABELS[level],
    disabled: editor ? !editor.can().chain().focus().setHeading({ level }).run() : true,
  }));

  const items = [...(paragraphItem ? [paragraphItem] : []), ...headingItems];

  return (
    <Select
      value={activeValue || (includeParagraphOption ? 'paragraph' : undefined)}
      onValueChange={value => {
        if (!editor) return;
        if (value === 'paragraph') {
          editor.chain().focus().setParagraph().run();
          return;
        }
        const level = Number(value.replace('heading-', '')) as RichTextEditorHeadingLevel;
        editor.chain().focus().setHeading({ level }).run();
      }}
    >
      <SelectTrigger
        aria-label="Heading levels"
        size="sm"
        disabled={!editor}
        className="shadow-none"
      >
        <SelectValue placeholder={selectPlaceholder} />
      </SelectTrigger>

      <SelectContent>
        {items.map(item => (
          <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
