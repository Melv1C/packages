import { useEditorState } from '@tiptap/react';
import { Heading1, Heading2, Heading3 } from 'lucide-react';
import type { ComponentProps } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ToggleGroup,
  ToggleGroupItem,
  cn,
} from '@melv1c/ui-core';

import { useRichTextEditor } from '../context';

type RichTextEditorToggleButtonProps = Omit<ComponentProps<typeof ToggleGroupItem>, 'value'>;
type RichTextEditorHeadingLevel = 1 | 2 | 3;
type RichTextEditorHeadingMode = 'toggle' | 'select';
type RichTextEditorHeadingValue = `heading-${RichTextEditorHeadingLevel}` | '';

const ALL_HEADING_LEVELS: RichTextEditorHeadingLevel[] = [1, 2, 3];

const HEADING_ICONS: Record<RichTextEditorHeadingLevel, typeof Heading1> = {
  1: Heading1,
  2: Heading2,
  3: Heading3,
};

function HeadingButton({
  className,
  level,
  ...props
}: RichTextEditorToggleButtonProps & { level: RichTextEditorHeadingLevel }) {
  const { editor } = useRichTextEditor();
  const Icon = HEADING_ICONS[level];

  return (
    <ToggleGroupItem
      data-slot="rich-text-editor-toggle-button"
      value={`heading-${level}`}
      aria-label={`Heading ${level}`}
      disabled={editor ? !editor.can().chain().focus().toggleHeading({ level }).run() : true}
      onClick={() => editor?.chain().focus().toggleHeading({ level }).run()}
      className={cn('shadow-none', className)}
      {...props}
    >
      {props.children ?? <Icon />}
    </ToggleGroupItem>
  );
}

function Heading1Button({ className, ...props }: RichTextEditorToggleButtonProps) {
  return <HeadingButton className={className} level={1} {...props} />;
}

function Heading2Button({ className, ...props }: RichTextEditorToggleButtonProps) {
  return <HeadingButton className={className} level={2} {...props} />;
}

function Heading3Button({ className, ...props }: RichTextEditorToggleButtonProps) {
  return <HeadingButton className={className} level={3} {...props} />;
}

type RichTextEditorToggleGroupProps = Omit<
  ComponentProps<typeof ToggleGroup>,
  'type' | 'value' | 'onValueChange'
>;
type RichTextEditorHeadingSelectProps = Omit<
  ComponentProps<typeof Select>,
  'value' | 'onValueChange'
>;

const headingItemLabelMap: Record<RichTextEditorHeadingLevel, string> = {
  1: 'Heading 1',
  2: 'Heading 2',
  3: 'Heading 3',
};

export type RichTextEditorHeadingGroupProps = RichTextEditorToggleGroupProps & {
  mode?: RichTextEditorHeadingMode;
  levels?: RichTextEditorHeadingLevel[];
  heading1Props?: ComponentProps<typeof Heading1Button>;
  heading2Props?: ComponentProps<typeof Heading2Button>;
  heading3Props?: ComponentProps<typeof Heading3Button>;
  includeParagraphOption?: boolean;
  paragraphLabel?: string;
  selectPlaceholder?: string;
  selectProps?: RichTextEditorHeadingSelectProps;
  selectTriggerProps?: Omit<ComponentProps<typeof SelectTrigger>, 'children'>;
  selectContentProps?: ComponentProps<typeof SelectContent>;
  defaultValue?: RichTextEditorHeadingValue;
};

export function RichTextEditorHeadingGroup({
  mode = 'select',
  levels,
  heading1Props,
  heading2Props,
  heading3Props,
  includeParagraphOption = true,
  paragraphLabel = 'Paragraph',
  selectPlaceholder = 'Select heading',
  selectProps,
  selectTriggerProps,
  selectContentProps,
  variant = 'outline',
  size = 'sm',
  ...props
}: RichTextEditorHeadingGroupProps) {
  const { editor } = useRichTextEditor();
  const resolvedLevels = levels ?? ALL_HEADING_LEVELS;
  const visibleLevels = new Set(resolvedLevels);

  const headingPropsByLevel: Record<
    RichTextEditorHeadingLevel,
    RichTextEditorToggleButtonProps | undefined
  > = {
    1: heading1Props,
    2: heading2Props,
    3: heading3Props,
  };

  const activeValue = useEditorState({
    editor,
    selector: ({ editor: currentEditor }): RichTextEditorHeadingValue => {
      if (!currentEditor) return '';

      for (const level of ALL_HEADING_LEVELS) {
        if (currentEditor.isActive('heading', { level })) return `heading-${level}`;
      }

      return '';
    },
  });

  if (mode === 'select') {
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
        {...selectProps}
      >
        <SelectTrigger
          aria-label="Heading levels"
          size="sm"
          disabled={!editor}
          className="shadow-none"
          {...selectTriggerProps}
        >
          <SelectValue placeholder={selectPlaceholder} />
        </SelectTrigger>

        <SelectContent {...selectContentProps}>
          {includeParagraphOption && (
            <SelectItem
              value="paragraph"
              disabled={editor ? !editor.can().chain().focus().setParagraph().run() : true}
            >
              {paragraphLabel}
            </SelectItem>
          )}

          {ALL_HEADING_LEVELS.filter(level => visibleLevels.has(level)).map(level => (
            <SelectItem
              key={level}
              value={`heading-${level}`}
              disabled={editor ? !editor.can().chain().focus().setHeading({ level }).run() : true}
            >
              {headingItemLabelMap[level]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <ToggleGroup
      type="single"
      variant={variant}
      size={size}
      aria-label="Heading levels"
      value={activeValue ?? ''}
      {...props}
    >
      {ALL_HEADING_LEVELS.filter(level => visibleLevels.has(level)).map(level => (
        <HeadingButton key={level} level={level} {...headingPropsByLevel[level]} />
      ))}
    </ToggleGroup>
  );
}
