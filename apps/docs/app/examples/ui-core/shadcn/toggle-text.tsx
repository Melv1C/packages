import { Toggle } from '@melv1c/ui-core';
import { ItalicIcon } from 'lucide-react';

export default function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}
