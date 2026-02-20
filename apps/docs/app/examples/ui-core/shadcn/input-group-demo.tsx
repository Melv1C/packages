import { InputGroup, InputGroupAddon, InputGroupInput } from '@melv1c/ui-core';
import { Search } from 'lucide-react';

export default function InputGroupDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  );
}
