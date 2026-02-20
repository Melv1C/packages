import { Button } from '@melv1c/ui-core';
import { ArrowUpIcon } from 'lucide-react';

export default function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
