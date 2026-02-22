import type { Editor } from '@tiptap/react';
import { createContext, useContext } from 'react';

export type RichTextEditorContextValue = {
  editor: Editor | null;
};

export const RichTextEditorContext = createContext<RichTextEditorContextValue | null>(null);

export function useRichTextEditor() {
  const context = useContext(RichTextEditorContext);

  if (!context) {
    throw new Error('useRichTextEditor must be used within RichTextEditor.');
  }

  return context;
}
