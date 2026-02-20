import { Button, ButtonGroup, Input } from '@melv1c/ui-core';
import { SearchIcon } from 'lucide-react';

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}
