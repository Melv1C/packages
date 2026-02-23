import { Extension } from '@tiptap/core';
import { useMemo } from 'react';

import { ButtonGroup } from '@melv1c/ui-core';
import { RichTextEditorContent, type RichTextEditorContentProps } from './content';
import { RichTextEditor, type RichTextEditorProps } from './editor';
import {
  BoldButton,
  BulletListButton,
  CodeButton,
  Heading1Button,
  Heading2Button,
  Heading3Button,
  ItalicButton,
  OrderedListButton,
  RedoButton,
  RichTextEditorHeadingSelect,
  RichTextEditorToolbar,
  StrikethroughButton,
  UndoButton,
} from './toolbar';

/**
 * Built-in editor presets:
 * - `"minimal"`: Formatting controls (bold, italic, strike, code) + undo/redo
 * - `"simple"` (default): Heading select + formatting + undo/redo
 * - `"complete"`: Heading toggles + formatting + lists + undo/redo
 * - `"oneline"`: No toolbar, single-line (Enter is blocked)
 */
export type RichTextEditorPreset = 'minimal' | 'simple' | 'complete' | 'oneline';

/** Blocks Enter / Shift-Enter so the editor stays on a single line. */
const OneLinerExtension = Extension.create({
  name: 'oneLiner',
  addKeyboardShortcuts() {
    return {
      Enter: () => true,
      'Shift-Enter': () => true,
    };
  },
});

export type RichTextEditorBuiltInProps = Omit<RichTextEditorProps, 'children'> & {
  contentClassName?: string;
  toolbarClassName?: string;
  /**
   * Selects a built-in toolbar / behaviour configuration.
   * @default "complete"
   */
  preset?: RichTextEditorPreset;
  /**
   * Minimum height of the editor content area.
   * Accepts a number (px) or any valid CSS size string.
   * Forwarded to `RichTextEditorContent`.
   */
  minHeight?: RichTextEditorContentProps['minHeight'];
  /**
   * Maximum height of the editor content area. When set the content area becomes
   * scrollable once the content exceeds this height.
   * Accepts a number (px) or any valid CSS size string.
   * Forwarded to `RichTextEditorContent`.
   */
  maxHeight?: RichTextEditorContentProps['maxHeight'];
};

export function RichTextEditorBuiltIn({
  className,
  contentClassName,
  toolbarClassName,
  preset = 'complete',
  minHeight,
  maxHeight,
  extensions,
  ...props
}: RichTextEditorBuiltInProps) {
  const isOneline = preset === 'oneline';

  const resolvedMinHeight = minHeight ?? (isOneline ? 0 : 180);

  const mergedExtensions = useMemo(
    () => (isOneline ? [OneLinerExtension, ...(extensions ?? [])] : extensions),
    [isOneline, extensions],
  );

  return (
    <RichTextEditor className={className} extensions={mergedExtensions} {...props}>
      <RichTextEditorToolbar className={toolbarClassName}>
        {(preset === 'complete' || preset === 'simple') && (
          <ButtonGroup>
            <UndoButton />
            <RedoButton />
          </ButtonGroup>
        )}

        {preset === 'simple' && <RichTextEditorHeadingSelect />}

        {preset === 'complete' && (
          <ButtonGroup>
            <Heading1Button />
            <Heading2Button />
            <Heading3Button />
          </ButtonGroup>
        )}

        <ButtonGroup>
          <BoldButton />
          <ItalicButton />
          <StrikethroughButton />
          <CodeButton />
        </ButtonGroup>

        {preset === 'complete' && (
          <ButtonGroup>
            <BulletListButton />
            <OrderedListButton />
          </ButtonGroup>
        )}
      </RichTextEditorToolbar>

      <RichTextEditorContent
        className={contentClassName}
        minHeight={resolvedMinHeight}
        maxHeight={maxHeight}
      />
    </RichTextEditor>
  );
}

/** @deprecated Use `RichTextEditorBuiltIn` instead. */
export const RichTextEditorSimple = RichTextEditorBuiltIn;

/** @deprecated Use `RichTextEditorBuiltInProps` instead. */
export type RichTextEditorSimpleProps = RichTextEditorBuiltInProps;
