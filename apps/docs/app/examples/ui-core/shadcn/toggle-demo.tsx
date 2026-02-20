import { Toggle } from '@melv1c/ui-core';
import { BookmarkIcon } from 'lucide-react';

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  );
}
