import { Button, Kbd, Tooltip, TooltipContent, TooltipTrigger } from '@melv1c/ui-core';
import { SaveIcon } from 'lucide-react';

export default function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
