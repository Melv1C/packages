import {
  ButtonGroup,
  ButtonGroupText,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Label,
} from '@melv1c/ui-core';
import { Link2Icon } from 'lucide-react';

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  );
}
